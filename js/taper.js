/**
 * Needle Taper section of the Needle Selector (merged from the Needle Taper Visualizer, 2026-10-24).
 * Draws the conical taper against the skin layers; trauma and pigment delivery are qualitative bands.
 * Taper lengths are typical examples: there is no industry standard (lengths per name vary by brand).
 */
(function () {
  'use strict';

  var TAPERS = {
    short:  { length_mm: 1.5, trauma: 'high',   ink: 'high' },
    medium: { length_mm: 2.5, trauma: 'medium', ink: 'medium' },
    long:   { length_mm: 6.0, trauma: 'low',    ink: 'low' },
    extra:  { length_mm: 8.0, trauma: 'low',    ink: 'low' }
  };

  var state = { taper: 'short', gauge: 0.35, depth: 1.5 };
  var CENTER_X = 400, SURFACE_Y = 300, SCALE = 60; // pixels per mm

  function tr(key, params) {
    return typeof window.t === 'function' ? window.t('taper.' + key, params) : key;
  }
  function $(id) { return document.getElementById(id); }

  function render() {
    var data = TAPERS[state.taper];
    if (!data || !$('needle-taper-path')) return;

    var gaugePx = state.gauge * SCALE, taperPx = data.length_mm * SCALE, depthPx = state.depth * SCALE;
    var shaftTopY = SURFACE_Y - taperPx;
    var xLeft = CENTER_X - gaugePx / 2, xRight = CENTER_X + gaugePx / 2;

    $('needle-group').setAttribute('transform', 'translate(0, ' + depthPx + ')');
    $('needle-taper-path').setAttribute('d', 'M ' + CENTER_X + ' ' + SURFACE_Y + ' L ' + xLeft + ' ' + shaftTopY + ' L ' + xRight + ' ' + shaftTopY + ' Z');
    var shaft = $('needle-shaft');
    shaft.setAttribute('x', xLeft);
    shaft.setAttribute('width', gaugePx);
    shaft.setAttribute('y', -1000);
    shaft.setAttribute('height', 1000 + shaftTopY);

    var glow = $('impact-glow');
    glow.setAttribute('r', data.trauma === 'high' ? 14 : data.trauma === 'medium' ? 10 : 7);
    glow.setAttribute('class', 'impact-glow impact-' + data.trauma);

    var line = $('taper-measure'), text = $('taper-measure-text');
    line.setAttribute('x1', xRight + 24);
    line.setAttribute('x2', xRight + 24);
    line.setAttribute('y1', SURFACE_Y + depthPx);
    line.setAttribute('y2', shaftTopY + depthPx);
    text.setAttribute('x', xRight + 34);
    text.setAttribute('y', (SURFACE_Y + shaftTopY) / 2 + depthPx);
    text.textContent = tr('svg.taper_measure', { length: data.length_mm.toFixed(1) });

    $('depth-val').textContent = state.depth.toFixed(1) + ' mm';

    $('trauma-band').className = 'qualitative-meter meter-' + data.trauma;
    $('trauma-level-text').textContent = tr('analysis.trauma_level_' + data.trauma);
    $('trauma-level-text').className = 'analysis-level text-' + data.trauma;
    $('trauma-desc-text').textContent = tr('analysis.trauma_desc_' + data.trauma);

    $('ink-band').className = 'qualitative-meter meter-ink-' + data.ink;
    $('ink-level-text').textContent = tr('analysis.ink_level_' + data.ink);
    $('ink-desc-text').textContent = tr('analysis.ink_desc_' + data.ink);

    $('tendency-text').textContent = tr('analysis.tendency_' + state.taper);
  }

  window.renderNeedleTaper = render;

  document.addEventListener('DOMContentLoaded', function () {
    var btns = document.querySelectorAll('#needle-taper .taper-btn');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        state.taper = btn.getAttribute('data-taper');
        render();
      });
    });
    var gauge = $('needle-gauge');
    if (gauge) gauge.addEventListener('change', function (e) { state.gauge = parseFloat(e.target.value); render(); });
    var depth = $('penetration-depth');
    if (depth) depth.addEventListener('input', function (e) { state.depth = parseFloat(e.target.value); render(); });
    // the selector's applyI18n sets <html lang> on every language switch
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    render();
    // /needle-taper-visualizer/ redirects to /needle-selector/?tab=taper (the wrapper page holds the query)
    var tab = null;
    try { tab = new URLSearchParams(window.parent.location.search).get('tab'); } catch (e) { /* cross-origin embed */ }
    if (!tab) tab = new URLSearchParams(location.search).get('tab');
    // the section moves to the top of the tool: scrolling the wrapper page to it did not hold (2026-10-24)
    var sec = $('needle-taper');
    if (tab === 'taper' && sec) sec.parentNode.insertBefore(sec, sec.parentNode.firstElementChild);
  });
})();
