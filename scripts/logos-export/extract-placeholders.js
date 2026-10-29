// Figma plugin code (run with figma_execute in the MNG Web Design System file, jFHYqhZbJjvWQmDI4myCsd).
// Reads the Light frames of the 'FAKE NEWSPAPER LOGOS' set (page 'Style Guide | Introduction / About',
// frame 3051:2728) and returns their vector paths, offsets and fill colours. Read-only: it changes nothing.
// Save the result as scripts/logos-export/figma-placeholders.json (build-logos.py reshapes it the same
// way as the committed file: brands -> layouts -> paths) and rerun build-logos.py.
// Layout names: Masthead -> horizontal, StackedWide -> stacked, StackedTall -> stacked-tall,
// Square -> lettermark. (Fakeville's square frame was 'FakevilleDailyNews-Master-02 1' until 2026-10-29.)
const ids = {
  'fakeville-daily-news': { horizontal: '3050:2313', stacked: '3050:2353', 'stacked-tall': '3050:2394', lettermark: '3050:2439' },
  'newspaper-town-times': { horizontal: '3050:2445', stacked: '3050:2485', 'stacked-tall': '3050:2525', lettermark: '3050:2565' },
  'newspaper-town-news':  { horizontal: '3050:2585', stacked: '3050:2623', 'stacked-tall': '3050:2661', lettermark: '3050:2699' },
};
const out = {};
for (const [brand, layouts] of Object.entries(ids)) {
  out[brand] = {};
  for (const [layout, id] of Object.entries(layouts)) {
    const f = await figma.getNodeByIdAsync(id);
    const fx = f.absoluteTransform[0][2], fy = f.absoluteTransform[1][2];
    const paths = [];
    for (const n of f.findAll(n => n.type === 'VECTOR' || n.type === 'BOOLEAN_OPERATION')) {
      const solid = (n.fills || []).filter(p => p.type === 'SOLID' && p.visible !== false);
      if (!n.visible || !solid.length) continue; // skips the unfilled full-frame bounding vector
      const t = n.absoluteTransform, c = solid[0].color, rb = n.absoluteRenderBounds;
      paths.push({
        x: t[0][2] - fx, y: t[1][2] - fy,
        fill: '#' + [c.r, c.g, c.b].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join(''),
        bounds: [rb.x - fx, rb.y - fy, rb.x + rb.width - fx, rb.y + rb.height - fy],
        vp: n.vectorPaths.map(v => ({ w: v.windingRule, d: v.data })),
      });
    }
    out[brand][layout] = { figma_node: id, figma_frame: f.name, paths };
  }
}
return out;
