// MNG Web Design System: read the Figma variables for the token build.
// Run in the main file (MNG Web Design System, jFHYqhZbJjvWQmDI4myCsd) with the Desktop Bridge plugin
// (figma_execute), then save the result with scripts/build-tokens/save-snapshot.py and run `npm run build`.
// Never edit figma-variables.json by hand or merge part of a read into it yourself (Seth's issue 7, step 2).
//
// Every run reads the WHOLE file and returns `summary`: per collection the variable count and a fingerprint
// (cyrb53 of the canonical JSON), the same for the shadow/* effect styles, and the file key. save-snapshot.py
// checks every saved collection against those fingerprints, so a cut-off or mistyped result can't be saved.
//   SEND = 'summary'        returns the summary only (small). If every fingerprint matches the saved snapshot,
//                           save-snapshot.py --summary <file> refreshes the read date and nothing else changes.
//   SEND = ['Colors', ...]  also returns the data for those collections ('effectStyles' for the shadows), for
//                           the parts that changed. Pass each result to save-snapshot.py after the summary.
//   SEND = 'all'            returns everything (about 100 KB; may be too large for one call).
// Colors are returned as 6-digit hex (alpha as "#rrggbb@0.6" when below 1); aliases as "{figma/variable/name}".
// Dashboard Typography is skipped until Reader Dashboard tokens are added to core.
// Effect styles named shadow/* (2026-10-26) are returned as effectStyles: one drop shadow per style, raw values plus
// the variables bound to them (e.g. offsetY -> spacing/050).
// shadow/masthead lives in WordPress Elements, not this file, so it isn't read here.
const SEND = 'summary';
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const hex = c => '#' + [c.r, c.g, c.b].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('') +
  (c.a !== undefined && c.a < 1 ? '@' + Math.round(c.a * 1000) / 1000 : '');
const out = {};
for (const c of cols) {
  if (c.name === 'Dashboard Typography') continue;
  const modeName = Object.fromEntries(c.modes.map(m => [m.modeId, m.name]));
  const arr = [];
  for (const id of c.variableIds) {
    const v = await figma.variables.getVariableByIdAsync(id);
    const values = {};
    for (const [mid, val] of Object.entries(v.valuesByMode)) {
      let x = val;
      if (val && val.type === 'VARIABLE_ALIAS') {
        const a = await figma.variables.getVariableByIdAsync(val.id);
        x = '{' + (a ? a.name : val.id) + '}';
      } else if (v.resolvedType === 'COLOR') x = hex(val);
      values[modeName[mid]] = x;
    }
    arr.push({ name: v.name, type: v.resolvedType, values, description: v.description || '', scopes: v.scopes });
  }
  out[c.name] = arr;
}
const effectStyles = {};
for (const st of await figma.getLocalEffectStylesAsync()) {
  if (!st.name.startsWith('shadow/')) continue;
  const fx = st.effects.filter(e => e.visible !== false);
  if (fx.length !== 1 || !['DROP_SHADOW', 'INNER_SHADOW'].includes(fx[0].type)) throw new Error(st.name + ': expected one shadow effect');
  const e = fx[0];
  const bound = {};
  for (const [k, a] of Object.entries(e.boundVariables || {})) {
    const v = await figma.variables.getVariableByIdAsync(a.id);
    bound[k] = v ? v.name : a.id;
  }
  effectStyles[st.name] = { type: e.type, offsetX: e.offset.x, offsetY: e.offset.y, blur: e.radius, spread: e.spread || 0,
    color: hex(e.color), bound, description: st.description || '' };
}
// Fingerprint: cyrb53 over canonical JSON (keys sorted, no spaces). save-snapshot.py computes the same.
const canon = x => Array.isArray(x) ? '[' + x.map(canon).join(',') + ']'
  : (x && typeof x === 'object') ? '{' + Object.keys(x).filter(k => x[k] !== undefined).sort()
    .map(k => JSON.stringify(k) + ':' + canon(x[k])).join(',') + '}'
  : JSON.stringify(x);
const cyrb53 = (str) => {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507); h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16).padStart(14, '0');
};
const summary = { file: figma.fileKey, collections: {}, effectStyles: null };
for (const [name, arr] of Object.entries(out)) summary.collections[name] = { count: arr.length, hash: cyrb53(canon(arr)) };
summary.effectStyles = { count: Object.keys(effectStyles).length, hash: cyrb53(canon(effectStyles)) };
if (SEND === 'summary') return { summary };
if (SEND === 'all') return { summary, collections: out, effectStyles };
const part = { summary, collections: {} };
for (const n of SEND) {
  if (n === 'effectStyles') part.effectStyles = effectStyles;
  else if (out[n]) part.collections[n] = out[n];
  else throw new Error('no collection ' + n);
}
return part;
