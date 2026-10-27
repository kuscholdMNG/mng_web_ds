#!/usr/bin/env python3
"""Save the Figma read (extract.js) as scripts/build-tokens/figma-variables.json. Never edit that file by hand.

Usage, from the repo top:
  python3 scripts/build-tokens/save-snapshot.py --summary SUMMARY.json [PART.json ...] [--read YYYY-MM-DD]

  SUMMARY.json  the result of extract.js with SEND = 'summary' (or any SEND; every run includes the summary).
                It describes the WHOLE file as it is now: every collection's variable count and fingerprint, and
                the shadow/* effect styles'.
  PART.json     results of extract.js with SEND = [collection names] (or 'all'): the data for collections that
                changed since the last snapshot.

For every collection in the summary (and the effect styles), the data comes from a PART if one has it, otherwise
from the saved snapshot. Either way its fingerprint and count must equal the summary's, or nothing is written:
the saved file always equals Figma at the time of the summary read. The "read" date is set to today (or --read).

Colors (Karl, 2026-10-27: keep last week's color tokens): if the Colors fingerprint changed, this script stops
unless --allow-color-changes is given. A color change goes on a review/... branch for Karl.

Prints which collections changed. Then run `npm run build` (make-tokens.py + build.py) and `npm run validate`.
Standard library only.
"""
import argparse, datetime, json, os, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
SNAPSHOT = os.path.join(ROOT, 'scripts/build-tokens/figma-variables.json')
FIGMA_FILE = 'jFHYqhZbJjvWQmDI4myCsd'
DESCRIPTION = ('Snapshot of the MNG Web Design System Figma variables and shadow/* effect styles (file '
               'jFHYqhZbJjvWQmDI4myCsd), from one full read with scripts/build-tokens/extract.js through the '
               'Desktop Bridge plugin, saved by scripts/build-tokens/save-snapshot.py; never edit by hand. "read" is '
               'the date of that read; "counts" and "hashes" are what the read reported, and the saved data matches '
               'them. Input for make-tokens.py. Dashboard Typography is not included yet (Reader Dashboard tokens are '
               'added to core when ready).')


def canon(x):
    return json.dumps(x, sort_keys=True, separators=(',', ':'), ensure_ascii=False)


def cyrb53(s):
    """Same as extract.js: cyrb53 over UTF-16 code units, as 14 hex digits."""
    M = 0xffffffff
    imul = lambda a, b: (a * b) & M  # noqa: E731
    h1, h2 = 0xdeadbeef, 0x41c6ce57
    b = s.encode('utf-16-le')
    for i in range(0, len(b), 2):
        ch = b[i] | (b[i + 1] << 8)
        h1 = imul(h1 ^ ch, 2654435761)
        h2 = imul(h2 ^ ch, 1597334677)
    h1 = imul(h1 ^ (h1 >> 16), 2246822507)
    h1 ^= imul(h2 ^ (h2 >> 13), 3266489909)
    h2 = imul(h2 ^ (h2 >> 16), 2246822507)
    h2 ^= imul(h1 ^ (h1 >> 13), 3266489909)
    return '%014x' % (4294967296 * (2097151 & h2) + (h1 & M))


def fingerprint(x):
    return cyrb53(canon(x))


def load(p):
    with open(p, encoding='utf-8') as f:
        d = json.load(f)
    # figma_execute may wrap the plugin's return value, e.g. {"result": {...}}
    if isinstance(d, dict) and 'summary' not in d and isinstance(d.get('result'), dict):
        d = d['result']
    return d


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('--summary', required=True)
    ap.add_argument('parts', nargs='*')
    ap.add_argument('--read', default=datetime.date.today().isoformat())
    ap.add_argument('--allow-color-changes', action='store_true')
    a = ap.parse_args()

    summ = load(a.summary)
    summary = summ.get('summary', summ)
    if summary.get('file') != FIGMA_FILE:
        sys.exit('summary is from file %r, not the main file %s' % (summary.get('file'), FIGMA_FILE))

    sources = []  # (label, collections, effectStyles)
    for p in a.parts:
        d = load(p)
        if (d.get('summary') or {}).get('file') != FIGMA_FILE:
            sys.exit('%s: not a read of the main file' % p)
        sources.append((os.path.basename(p), d.get('collections') or {}, d.get('effectStyles')))
    old = {}
    if os.path.exists(SNAPSHOT):
        old = json.load(open(SNAPSHOT, encoding='utf-8'))
    sources.append(('saved snapshot', old.get('collections') or {}, old.get('effectStyles')))

    problems, changed, collections = [], [], {}
    for name, want in summary['collections'].items():
        got = None
        for label, cols, _ in sources:
            if name in cols:
                data = cols[name]
                if len(data) == want['count'] and fingerprint(data) == want['hash']:
                    got = (label, data)
                    break
                if label != 'saved snapshot':
                    problems.append('%s: %s does not match the summary (%d variables, fingerprint %s; summary %d, %s)'
                                    ' - cut off or edited?' % (label, name, len(data), fingerprint(data),
                                                              want['count'], want['hash']))
        if got is None:
            problems.append('%s changed in Figma (or is new): read it with SEND = [%r] and pass the result'
                            % (name, name))
            continue
        if got[0] != 'saved snapshot':
            changed.append(name)
        collections[name] = got[1]
    removed = sorted(set(old.get('collections') or {}) - set(summary['collections']))

    want = summary.get('effectStyles') or {}
    effect = None
    for label, _, eff in sources:
        if eff is not None:
            if len(eff) == want.get('count') and fingerprint(eff) == want.get('hash'):
                effect = eff
                if label != 'saved snapshot':
                    changed.append('effectStyles')
                break
            if label != 'saved snapshot':
                problems.append('%s: effectStyles do not match the summary - cut off or edited?' % label)
    if effect is None:
        problems.append("effectStyles changed in Figma: read them with SEND = ['effectStyles'] and pass the result")

    if problems:
        sys.exit('Nothing saved:\n  ' + '\n  '.join(problems))
    if ('Colors' in changed or 'Colors' in removed) and not a.allow_color_changes:
        sys.exit('Nothing saved: the Colors collection changed in Figma. Karl keeps last week\'s color tokens '
                 '(2026-10-27); show him the change. If he approves it, rerun with --allow-color-changes on a '
                 'review/... branch.')

    out = {
        '$description': DESCRIPTION,
        'file': FIGMA_FILE,
        'read': a.read,
        'counts': {'collections': {n: len(v) for n, v in collections.items()}, 'effectStyles': len(effect)},
        'hashes': {'collections': {n: summary['collections'][n]['hash'] for n in collections},
                   'effectStyles': want['hash']},
        'collections': collections,
        'effectStyles': effect,
    }
    with open(SNAPSHOT, 'w', encoding='utf-8') as f:
        json.dump(out, f, indent=1, ensure_ascii=False)
        f.write('\n')
    print('saved %s, read %s: %s' % (os.path.relpath(SNAPSHOT, ROOT), a.read,
                                     'changed: ' + ', '.join(changed + ['removed ' + r for r in removed])
                                     if changed or removed else 'no data changes since the last snapshot'))
    print('next: npm run build && npm run validate')


if __name__ == '__main__':
    main()
