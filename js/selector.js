/*
═══════════════════════════════════════════════════════════════
PROFESSIONAL TATTOO NEEDLE SELECTOR - MAIN LOGIC
Poli International
Version: 1.0
═══════════════════════════════════════════════════════════════
*/

// ═══════════════════════════════════════════════════════════
// 1. INITIALIZATION
// ═══════════════════════════════════════════════════════════

const SVG_NS = ["http", "://www.w3.org/2000/svg"].join("");
let currentRecommendation = null;

document.addEventListener('DOMContentLoaded', function() {
  initNeedleSelector();
});

function initNeedleSelector() {
  // Initialize dark mode
  initDarkMode();

  // Initialize language switcher
  initLanguageSwitcher();

  // Initialize smooth navigation
  initSmoothNav();

  // Initialize needle selector form
  initNeedleForm();

  // Initialize needle code decoder
  initDecoder();

  // Initialize comparison tool
  initComparison();

  // Initialize reference chart
  initReferenceChart();

  // Initialize embed modal
  initEmbedModal();

  // Initialize tools catalog modal
  initToolsCatalogModal();

  // Populate comparison dropdowns
  populateComparisonDropdowns();
}

// ═══════════════════════════════════════════════════════════
// 2. DARK MODE TOGGLE & IFRAME RESIZE
// ═══════════════════════════════════════════════════════════

function initDarkMode() {
  let savedMode = null;
  try { savedMode = localStorage.getItem('needle-selector-theme'); } catch (e) {}
  if (savedMode === 'light') {
    document.body.classList.add('light-mode');
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  const darkModeToggle = document.getElementById('dark-mode-toggle') || document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }

  initIframeAutoHeight();
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('light-mode');

  const isLight = body.classList.contains('light-mode');
  document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
  try { localStorage.setItem('needle-selector-theme', isLight ? 'light' : 'dark'); } catch (e) {}
}

function initIframeAutoHeight() {
  function sendHeight() {
    const height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ height: height, type: 'resize' }, '*');
    }
  }

  window.addEventListener('load', sendHeight);
  window.addEventListener('resize', sendHeight);
  document.addEventListener('click', () => setTimeout(sendHeight, 150));
  document.addEventListener('change', () => setTimeout(sendHeight, 150));

  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(sendHeight);
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
  }
}

// ═══════════════════════════════════════════════════════════
// 3. NEEDLE SELECTOR FORM
// ═══════════════════════════════════════════════════════════

function initNeedleForm() {
  const form = document.getElementById('needle-form');
  if (form) {
    form.addEventListener('submit', handleNeedleFormSubmit);
    form.addEventListener('reset', function() {
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.style.display = 'none';
      }
      currentRecommendation = null;
    });
  }
}

function handleNeedleFormSubmit(e) {
  e.preventDefault();

  // Get form values
  const styleEl = document.getElementById('style') || document.getElementById('tattoo-style');
  const techniqueEl = document.getElementById('technique');
  const skinEl = document.getElementById('skin-type') || document.getElementById('skin');
  const detailChecked = document.querySelector('input[name="detail"]:checked');

  const style = styleEl ? styleEl.value : '';
  const technique = techniqueEl ? techniqueEl.value : '';
  const skin = skinEl ? skinEl.value : 'normal';
  const detail = detailChecked ? detailChecked.value : 'medium';

  if (!style || !technique) {
    const promptMsg = (window.t && window.t('form.selectStylePrompt')) || 'Please select both a tattoo style and technique.';
    alert(promptMsg);
    return;
  }

  // Find recommended needle
  const recommendation = findRecommendedNeedle(style, technique, detail, skin);

  if (recommendation) {
    currentRecommendation = recommendation;
    displayRecommendation(recommendation);

    // Scroll to results
    const resultsSection = document.getElementById('results-section');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  } else {
    const noRecMsg = (window.t && window.t('form.noRecommendation')) || 'No specific recommendation found for this combination. Please try different options.';
    alert(noRecMsg);
  }
}

function findRecommendedNeedle(style, technique, detail, skin) {
  // Map style values to style keys in styleRecommendations
  const styleMap = {
    'traditional': 'american',
    'american': 'american',
    'fine_line': 'fine_line',
    'fine-line': 'fine_line',
    'realism': 'realism',
    'neo_traditional': 'neo_traditional',
    'neo-traditional': 'neo_traditional',
    'japanese': 'japanese',
    'blackwork': 'blackwork',
    'watercolor': 'watercolor',
    'dotwork': 'dotwork',
    'tribal': 'tribal',
    'geometric': 'geometric',
    'portrait': 'portrait',
    'script': 'script',
    'cover-up': 'cover_up',
    'cover_up': 'cover_up',
    'ornamental': 'ornamental',
    'new-school': 'new_school',
    'new_school': 'new_school'
  };

  const techniqueMap = {
    'lining': 'lining',
    'shading': 'shading',
    'packing': 'color_packing',
    'color-packing': 'color_packing',
    'color_packing': 'color_packing',
    'whip-shading': 'whip_shading',
    'whip_shading': 'whip_shading',
    'stipple': 'stipple',
    'color-blend': 'color_blend',
    'color_blend': 'color_blend',
    'graywash': 'black_grey',
    'black-grey': 'black_grey',
    'black_grey': 'black_grey'
  };

  const styleKey = styleMap[style] || style;
  const techniqueKey = techniqueMap[technique] || technique;

  // Get style recommendations
  const styleRec = styleRecommendations[styleKey];
  if (!styleRec) return null;

  // Get technique within style
  let techniqueRec = styleRec[techniqueKey];
  if (!techniqueRec) {
    // Graceful fallbacks for specialized techniques
    if (techniqueKey === 'black_grey' && styleRec['shading']) {
      techniqueRec = styleRec['shading'];
    } else if (techniqueKey === 'stipple' && styleRec['lining']) {
      techniqueRec = styleRec['lining'];
    } else if (techniqueKey === 'color_packing' && styleRec['shading']) {
      techniqueRec = styleRec['shading'];
    } else if (styleRec['lining']) {
      techniqueRec = styleRec['lining'];
    } else {
      return null;
    }
  }

  // Get needles for detail level (default to medium, then fine, then bold)
  const needles = techniqueRec[detail] || techniqueRec['medium'] || techniqueRec['fine'] || techniqueRec['bold'] || [];
  if (needles.length === 0) return null;

  // Find best needle considering skin type
  return findNeedleFromList(needles, skin);
}

function findNeedleFromList(needleList, skin) {
  if (!needleList || needleList.length === 0) return null;

  // Filter by skin type compatibility
  const compatibleNeedles = needleList.filter(code => {
    const needle = needleDatabase[code];
    return needle && needle.skin && needle.skin.includes(skin);
  });

  // If we have compatible needles, use first one
  if (compatibleNeedles.length > 0) {
    const needleCode = compatibleNeedles[0];
    return { code: needleCode, ...needleDatabase[needleCode], alternatives: needleList.slice(0, 3) };
  }

  // Otherwise use first needle anyway
  const needleCode = needleList[0];
  return { code: needleCode, ...needleDatabase[needleCode], alternatives: needleList.slice(0, 3) };
}

// ═══════════════════════════════════════════════════════════
// 4. DISPLAY RECOMMENDATION
// ═══════════════════════════════════════════════════════════

function displayRecommendation(rec) {
  // Show results section
  const resultsSection = document.getElementById('results-section');
  if (resultsSection) {
    resultsSection.style.display = 'block';
  }

  const tNeedle = (window.I18N && window.I18N.getNeedleTranslation) ? window.I18N.getNeedleTranslation(rec.code) : null;
  const translatedType = (tNeedle && tNeedle.type) ? tNeedle.type : rec.type;
  const translatedUses = (tNeedle && tNeedle.uses) ? tNeedle.uses : rec.uses;
  const translatedPros = (tNeedle && tNeedle.pros) ? tNeedle.pros : rec.pros;

  // Display needle code
  const codeEl = document.getElementById('primary-needle-code');
  if (codeEl) {
    codeEl.textContent = rec.code;
  }

  // Display needle name
  const nameEl = document.getElementById('primary-needle-name');
  if (nameEl) {
    nameEl.textContent = `${rec.count} ${translatedType}`;
  }

  // Display needle count
  const countEl = document.getElementById('needle-count');
  if (countEl) {
    const needlesWord = (window.t && window.t('results.needleCountLabel')) || 'Needles';
    countEl.textContent = `${rec.count} ${needlesWord} (${rec.pattern.replace('_', ' ')})`;
  }

  // Display config type
  const typeEl = document.getElementById('config-type');
  if (typeEl) {
    typeEl.textContent = `${translatedType} (${rec.typeCode})`;
  }

  // Display uses
  const usesEl = document.getElementById('use-list');
  if (usesEl && translatedUses) {
    usesEl.innerHTML = translatedUses.map(use => `<li>${use}</li>`).join('');
  }

  // Display settings
  const settingsEl = document.getElementById('settings');
  if (settingsEl) {
    const vLabel = (window.t && window.t('results.voltageLabel')) || 'Voltage';
    const sLabel = (window.t && window.t('results.speedLabel')) || 'Speed';
    const dLabel = (window.t && window.t('results.depthLabel')) || 'Depth';
    settingsEl.innerHTML = `
      <strong>${vLabel}:</strong> ${rec.voltage}<br>
      <strong>${sLabel}:</strong> ${rec.speed}<br>
      <strong>${dLabel}:</strong> ${rec.depth}
    `;
  }

  // Display pro tips
  const tipsEl = document.getElementById('tip-list');
  if (tipsEl && translatedPros) {
    tipsEl.innerHTML = translatedPros.map(pro => `<li>${pro}</li>`).join('');
  }

  // Display alternatives
  const altGrid = document.getElementById('alternatives-grid');
  if (altGrid && rec.alternatives) {
    altGrid.innerHTML = rec.alternatives
      .filter(code => code !== rec.code)
      .slice(0, 2)
      .map(code => {
        const needle = needleDatabase[code];
        if (!needle) return '';
        const altTr = (window.I18N && window.I18N.getNeedleTranslation) ? window.I18N.getNeedleTranslation(code) : null;
        const altType = (altTr && altTr.type) ? altTr.type : needle.type;
        return `
          <div class="needle-selector__alt-card alt-needle-card">
            <div class="alt-needle-code">${code}</div>
            <div class="alt-needle-type">${needle.count} ${altType}</div>
          </div>
        `;
      })
      .join('');
  }

  // Generate SVG diagram
  generateNeedleDiagram('primary-needle-diagram', rec);
}

// ═══════════════════════════════════════════════════════════
// 5. SVG NEEDLE DIAGRAM GENERATOR
// ═══════════════════════════════════════════════════════════

function generateNeedleDiagram(svgId, needle) {
  const svg = document.getElementById(svgId);
  if (!svg) return;

  // Clear existing content
  svg.innerHTML = '';

  const width = 200;
  const height = 200;
  const centerX = width / 2;
  const centerY = height / 2;

  // Needle size (visual)
  const needleRadius = 4;
  const patternRadius = 40;

  // Different patterns based on needle type
  if (needle.pattern === 'single') {
    // Single needle
    const circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', needleRadius);
    circle.setAttribute('class', 'diagram-needle-point');
    circle.setAttribute('stroke-width', '2');
    svg.appendChild(circle);
  } else if (needle.pattern === 'tight_round' || needle.pattern === 'loose_round') {
    // Round configuration (RL or RS)
    const angleStep = (2 * Math.PI) / needle.count;
    const radius = needle.pattern === 'tight_round' ? patternRadius * 0.5 : patternRadius * 0.6;

    for (let i = 0; i < needle.count; i++) {
      const angle = i * angleStep;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('class', 'diagram-needle-point');
      circle.setAttribute('stroke-width', '2');
      svg.appendChild(circle);
    }

    // Draw center point
    const center = document.createElementNS(SVG_NS, 'circle');
    center.setAttribute('cx', centerX);
    center.setAttribute('cy', centerY);
    center.setAttribute('r', 2);
    center.setAttribute('class', 'diagram-center-point');
    svg.appendChild(center);
  } else if (needle.pattern === 'flat_line') {
    // Magnum - flat line
    const spacing = 8;
    const totalWidth = (needle.count - 1) * spacing;
    const startX = centerX - totalWidth / 2;

    for (let i = 0; i < needle.count; i++) {
      const x = startX + i * spacing;
      const y = centerY;

      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('class', 'diagram-needle-point');
      circle.setAttribute('stroke-width', '2');
      svg.appendChild(circle);
    }
  } else if (needle.pattern === 'curved_line') {
    // Curved Magnum
    const spacing = 8;
    const totalWidth = (needle.count - 1) * spacing;
    const startX = centerX - totalWidth / 2;
    const curveAmount = 15;

    for (let i = 0; i < needle.count; i++) {
      const x = startX + i * spacing;
      const progress = i / (needle.count - 1);
      const curveY = Math.sin(progress * Math.PI) * curveAmount;
      const y = centerY + curveY;

      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('class', 'diagram-needle-point');
      circle.setAttribute('stroke-width', '2');
      svg.appendChild(circle);
    }
  } else if (needle.pattern === 'flat_stacked') {
    // Flat - stacked rows
    const spacing = 7;
    const rows = 2;
    const needlesPerRow = Math.ceil(needle.count / rows);

    let needleIndex = 0;
    for (let row = 0; row < rows; row++) {
      const rowNeedles = Math.min(needlesPerRow, needle.count - needleIndex);
      const totalWidth = (rowNeedles - 1) * spacing;
      const startX = centerX - totalWidth / 2;
      const y = centerY - 5 + row * 10;

      for (let i = 0; i < rowNeedles && needleIndex < needle.count; i++) {
        const x = startX + i * spacing;

        const circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', needleRadius);
        circle.setAttribute('class', 'diagram-needle-point');
        circle.setAttribute('stroke-width', '2');
        svg.appendChild(circle);

        needleIndex++;
      }
    }
  }

  // Add coverage circle
  const coverageCircle = document.createElementNS(SVG_NS, 'circle');
  coverageCircle.setAttribute('cx', centerX);
  coverageCircle.setAttribute('cy', centerY);
  const diameterVal = typeof needle.diameter_mm === 'number' ? needle.diameter_mm : 1;
  coverageCircle.setAttribute('r', diameterVal * 15);
  coverageCircle.setAttribute('class', 'diagram-coverage-ring');
  coverageCircle.setAttribute('stroke-width', '1');
  svg.appendChild(coverageCircle);
}

// ═══════════════════════════════════════════════════════════
// 6. NEEDLE CODE DECODER
// ═══════════════════════════════════════════════════════════

function initDecoder() {
  const decodeButton = document.getElementById('decode-button');
  const input = document.getElementById('needle-code-input');

  if (decodeButton) {
    decodeButton.addEventListener('click', handleDecode);
  }

  if (input) {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleDecode();
      }
    });
  }
}

function handleDecode() {
  const input = document.getElementById('needle-code-input');
  const resultDiv = document.getElementById('decoder-result');

  if (!input || !resultDiv) return;

  const rawCode = input.value.trim();

  if (!rawCode) {
    const promptMsg = (window.t && window.t('decoder.placeholder')) || 'Please enter a needle code (e.g., 9RL, 1209RL, 11M1)';
    alert(promptMsg);
    return;
  }

  const parsed = parseNeedleInput(rawCode);

  if (!parsed) {
    const notFoundTitle = (window.t && window.t('decoder.notFoundTitle')) || 'Needle Code Not Found';
    const notFoundDesc = (window.t && window.t('decoder.notFoundDesc', { code: rawCode })) ||
      `"${rawCode}" is not recognized. Try standard codes like 9RL, 1209RL, 11M1, 15RS, 7CM, or 9F.`;

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
      <div class="decoder-not-found-box">
        <p class="decoder-not-found-title">❌ ${notFoundTitle}</p>
        <p class="decoder-not-found-text">${notFoundDesc}</p>
      </div>
    `;
    return;
  }

  // Display decoded information
  displayDecodedNeedle(parsed.displayCode, parsed.needle, resultDiv, parsed.gaugeInfo);
}

function parseNeedleInput(rawCode) {
  const code = rawCode.trim().toUpperCase();
  if (!code) return null;

  if (needleDatabase[code]) {
    return { needle: needleDatabase[code], displayCode: code, canonicalCode: code, gaugeInfo: null };
  }

  const GAUGE_DESCRIPTIONS = {
    '12': '#12 (0.35mm Standard)',
    '10': '#10 (0.30mm Bugpin)',
    '08': '#08 (0.25mm Micro Bugpin)',
    '06': '#06 (0.20mm Ultra Micro)'
  };

  const match = code.match(/^(\d{2})(\d{2})([A-Z0-9]+)$/);
  if (match) {
    const gaugeNum = match[1];
    const countNum = parseInt(match[2], 10);
    const typeLetters = match[3];
    const candidateCode = `${countNum}${typeLetters}`;

    if (needleDatabase[candidateCode]) {
      return {
        needle: needleDatabase[candidateCode],
        displayCode: code,
        canonicalCode: candidateCode,
        gaugeInfo: GAUGE_DESCRIPTIONS[gaugeNum] || `#${gaugeNum}`
      };
    }
  }

  const matchShort = code.match(/^(\d{2})(\d{1})([A-Z0-9]+)$/);
  if (matchShort) {
    const gaugeNum = matchShort[1];
    const countNum = parseInt(matchShort[2], 10);
    const typeLetters = matchShort[3];
    const candidateCode = `${countNum}${typeLetters}`;

    if (needleDatabase[candidateCode]) {
      return {
        needle: needleDatabase[candidateCode],
        displayCode: code,
        canonicalCode: candidateCode,
        gaugeInfo: GAUGE_DESCRIPTIONS[gaugeNum] || `#${gaugeNum}`
      };
    }
  }

  return null;
}

function displayDecodedNeedle(code, needle, container, gaugeInfo) {
  const tr = window.t || function(k) { return k; };

  const tNeedle = (window.I18N && window.I18N.getNeedleTranslation) ? window.I18N.getNeedleTranslation(needle.code || code) : null;
  const translatedType = (tNeedle && tNeedle.type) ? tNeedle.type : needle.type;
  const translatedUses = (tNeedle && tNeedle.uses) ? tNeedle.uses : needle.uses;
  const translatedPros = (tNeedle && tNeedle.pros) ? tNeedle.pros : needle.pros;
  const translatedCons = (tNeedle && tNeedle.cons) ? tNeedle.cons : needle.cons;

  const breakdownTitle = tr('decoder.breakdownTitle');
  const countDesc = tr('decoder.countExplanation');
  const typeDesc = tr('decoder.typeExplanation');
  const patternLabel = tr('decoder.patternLabel');
  const coverageLabel = tr('decoder.coverageLabel');
  const bestForTitle = tr('decoder.bestForTitle');
  const settingsTitle = tr('decoder.settingsTitle');
  const voltageLabel = tr('results.voltageLabel');
  const speedLabel = tr('results.speedLabel');
  const depthLabel = tr('results.depthLabel');
  const prosTitle = tr('decoder.prosTitle');
  const consTitle = tr('decoder.consTitle');
  const blisterGaugeLabel = tr('decoder.blisterGauge');

  const gaugeRow = gaugeInfo ? `<strong>${blisterGaugeLabel}</strong> ${gaugeInfo}<br>` : '';

  container.style.display = 'block';
  container.innerHTML = `
    <div class="decoder-result-grid">
      <div class="decoder-hero-card">
        <div class="decoder-hero-code">${code}</div>
        <div class="decoder-hero-label">${needle.count} ${translatedType}</div>
        <svg id="decoder-diagram" width="150" height="150" viewBox="0 0 150 150" class="decoder-hero-diagram" aria-label="Decoded cluster diagram"></svg>
      </div>

      <div class="decoder-details-grid">
        <div class="decoder-info-card">
          <h4 class="decoder-info-title">${breakdownTitle}</h4>
          <p class="decoder-info-text">
            ${gaugeRow}
            <strong>${needle.count}</strong> = ${countDesc}<br>
            <strong>${needle.typeCode}</strong> = ${translatedType} (${typeDesc})<br>
            <strong>${patternLabel}:</strong> ${needle.pattern.replace('_', ' ')}<br>
            <strong>${coverageLabel}:</strong> ~${needle.diameter_mm}mm
          </p>
        </div>

        <div class="decoder-info-card">
          <h4 class="decoder-info-title">${bestForTitle}</h4>
          <ul class="decoder-info-list">
            ${translatedUses.map(use => `<li>${use}</li>`).join('')}
          </ul>
        </div>

        <div class="decoder-info-card">
          <h4 class="decoder-info-title">${settingsTitle}</h4>
          <p class="decoder-info-text">
            <strong>${voltageLabel}:</strong> ${needle.voltage}<br>
            <strong>${speedLabel}:</strong> ${needle.speed}<br>
            <strong>${depthLabel}:</strong> ${needle.depth}
          </p>
        </div>

        <div class="decoder-pros-cons-grid">
          <div class="decoder-pro-box">
            <h4 class="decoder-pro-title">✅ ${prosTitle}</h4>
            <ul class="decoder-pro-list">
              ${translatedPros.map(pro => `<li>${pro}</li>`).join('')}
            </ul>
          </div>
          <div class="decoder-con-box">
            <h4 class="decoder-con-title">⚠️ ${consTitle}</h4>
            <ul class="decoder-con-list">
              ${translatedCons.map(con => `<li>${con}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  // Generate diagram for decoded needle
  setTimeout(() => {
    const decoderSvg = document.getElementById('decoder-diagram');
    if (decoderSvg) {
      // Adjust for smaller SVG
      const smallNeedle = { ...needle, code: code };
      generateSmallNeedleDiagram('decoder-diagram', smallNeedle);
    }
  }, 100);
}

function generateSmallNeedleDiagram(svgId, needle) {
  const svg = document.getElementById(svgId);
  if (!svg) return;

  svg.innerHTML = '';

  const width = 150;
  const height = 150;
  const centerX = width / 2;
  const centerY = height / 2;
  const needleRadius = 3;
  const patternRadius = 30;

  if (needle.pattern === 'single') {
    const circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', needleRadius);
    circle.setAttribute('class', 'diagram-needle-point');
    circle.setAttribute('stroke-width', '2');
    svg.appendChild(circle);
  } else if (needle.pattern === 'tight_round' || needle.pattern === 'loose_round') {
    const angleStep = (2 * Math.PI) / needle.count;
    const radius = needle.pattern === 'tight_round' ? patternRadius * 0.5 : patternRadius * 0.6;

    for (let i = 0; i < needle.count; i++) {
      const angle = i * angleStep;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('class', 'diagram-needle-point');
      circle.setAttribute('stroke-width', '2');
      svg.appendChild(circle);
    }

    const center = document.createElementNS(SVG_NS, 'circle');
    center.setAttribute('cx', centerX);
    center.setAttribute('cy', centerY);
    center.setAttribute('r', 2);
    center.setAttribute('class', 'diagram-center-point');
    svg.appendChild(center);
  } else if (needle.pattern === 'flat_line') {
    const spacing = 6;
    const totalWidth = (needle.count - 1) * spacing;
    const startX = centerX - totalWidth / 2;

    for (let i = 0; i < needle.count; i++) {
      const x = startX + i * spacing;
      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', centerY);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('class', 'diagram-needle-point');
      circle.setAttribute('stroke-width', '2');
      svg.appendChild(circle);
    }
  } else if (needle.pattern === 'curved_line') {
    const spacing = 6;
    const totalWidth = (needle.count - 1) * spacing;
    const startX = centerX - totalWidth / 2;
    const curveAmount = 12;

    for (let i = 0; i < needle.count; i++) {
      const x = startX + i * spacing;
      const progress = i / (needle.count - 1);
      const curveY = Math.sin(progress * Math.PI) * curveAmount;
      const y = centerY + curveY;

      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('class', 'diagram-needle-point');
      circle.setAttribute('stroke-width', '2');
      svg.appendChild(circle);
    }
  } else if (needle.pattern === 'flat_stacked') {
    const spacing = 5;
    const rows = 2;
    const needlesPerRow = Math.ceil(needle.count / rows);

    let needleIndex = 0;
    for (let row = 0; row < rows; row++) {
      const rowNeedles = Math.min(needlesPerRow, needle.count - needleIndex);
      const totalWidth = (rowNeedles - 1) * spacing;
      const startX = centerX - totalWidth / 2;
      const y = centerY - 4 + row * 8;

      for (let i = 0; i < rowNeedles && needleIndex < needle.count; i++) {
        const x = startX + i * spacing;
        const circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', needleRadius);
        circle.setAttribute('class', 'diagram-needle-point');
        circle.setAttribute('stroke-width', '2');
        svg.appendChild(circle);
        needleIndex++;
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════
// 7. COMPARISON TOOL
// ═══════════════════════════════════════════════════════════

function initComparison() {
  const compareButton = document.getElementById('compare-button');
  if (compareButton) {
    compareButton.addEventListener('click', handleComparison);
  }
}

function populateComparisonDropdowns() {
  const selects = [
    document.getElementById('compare-1'),
    document.getElementById('compare-2'),
    document.getElementById('compare-3')
  ];

  const tNeedle = (window.I18N && window.I18N.getNeedleTranslation) ? window.I18N.getNeedleTranslation : null;
  const needleCodes = Object.keys(needleDatabase).sort();

  selects.forEach((select, idx) => {
    if (!select) return;
    const currentVal = select.value;
    select.innerHTML = '';

    const defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    const promptKey = idx === 2 ? 'comparator.noneOptional' : 'comparator.chooseNeedlePrompt';
    defaultOpt.textContent = (window.t && window.t(promptKey)) || (idx === 2 ? '-- Needle 3 (Optional) --' : '-- Choose a Needle --');
    select.appendChild(defaultOpt);

    needleCodes.forEach(code => {
      const option = document.createElement('option');
      option.value = code;
      const tr = tNeedle ? tNeedle(code) : null;
      const typeLabel = (tr && tr.type) ? tr.type : needleDatabase[code].type;
      option.textContent = `${code} - ${typeLabel}`;
      select.appendChild(option);
    });

    if (currentVal) {
      select.value = currentVal;
    }
  });
}

function handleComparison() {
  const code1 = document.getElementById('compare-1') ? document.getElementById('compare-1').value : '';
  const code2 = document.getElementById('compare-2') ? document.getElementById('compare-2').value : '';
  const code3 = document.getElementById('compare-3') ? document.getElementById('compare-3').value : '';

  if (!code1 || !code2) {
    const alertMsg = (window.t && window.t('comparator.minSelectionAlert')) || 'Please select at least two needles to compare.';
    alert(alertMsg);
    return;
  }

  const codes = [code1, code2, code3].filter(c => c);
  displayComparison(codes);
}

function displayComparison(codes) {
  const resultsDiv = document.getElementById('compare-results');
  if (!resultsDiv) return;

  const tr = window.t || function(k) { return k; };
  const coverageLabel = tr('comparator.coverage');
  const patternLabel = tr('comparator.pattern');
  const voltageLabel = tr('comparator.voltage');
  const bestForLabel = tr('comparator.bestFor');

  resultsDiv.style.display = 'grid';
  resultsDiv.innerHTML = codes.map(code => {
    const needle = needleDatabase[code];
    const trNeedle = (window.I18N && window.I18N.getNeedleTranslation) ? window.I18N.getNeedleTranslation(code) : null;
    const typeLabel = (trNeedle && trNeedle.type) ? trNeedle.type : needle.type;
    const usesList = (trNeedle && trNeedle.uses) ? trNeedle.uses : needle.uses;

    return `
      <div class="compare-result-card">
        <div class="compare-card-header">
          <div class="compare-card-code">${code}</div>
          <div class="compare-card-label">${needle.count} ${typeLabel}</div>
        </div>

        <div class="compare-diagram-wrapper">
          <svg id="compare-diagram-${code}" width="120" height="120" viewBox="0 0 120 120" class="compare-diagram-svg" aria-label="Comparison cluster diagram"></svg>
        </div>

        <div class="compare-stat-row">
          <strong class="compare-stat-label">${coverageLabel}:</strong> ${needle.diameter_mm}mm
        </div>
        <div class="compare-stat-row">
          <strong class="compare-stat-label">${patternLabel}:</strong> ${needle.pattern.replace('_', ' ')}
        </div>
        <div class="compare-stat-row">
          <strong class="compare-stat-label">${voltageLabel}:</strong> ${needle.voltage}
        </div>
        <div class="compare-stat-row">
          <strong class="compare-stat-label">${bestForLabel}:</strong> ${usesList.slice(0, 2).join(', ')}
        </div>
      </div>
    `;
  }).join('');

  // Generate diagrams
  setTimeout(() => {
    codes.forEach(code => {
      const needle = needleDatabase[code];
      generateComparisonDiagram(`compare-diagram-${code}`, needle);
    });
  }, 100);
}

function generateComparisonDiagram(svgId, needle) {
  const svg = document.getElementById(svgId);
  if (!svg) return;

  svg.innerHTML = '';
  const width = 120;
  const height = 120;
  const centerX = width / 2;
  const centerY = height / 2;
  const needleRadius = 2.5;
  const patternRadius = 25;

  if (needle.pattern === 'single') {
    const circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', needleRadius);
    circle.setAttribute('class', 'diagram-needle-point');
    circle.setAttribute('stroke-width', '2');
    svg.appendChild(circle);
  } else if (needle.pattern === 'tight_round' || needle.pattern === 'loose_round') {
    const angleStep = (2 * Math.PI) / needle.count;
    const radius = needle.pattern === 'tight_round' ? patternRadius * 0.5 : patternRadius * 0.6;

    for (let i = 0; i < needle.count; i++) {
      const angle = i * angleStep;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('class', 'diagram-needle-point');
      circle.setAttribute('stroke-width', '1.5');
      svg.appendChild(circle);
    }
  } else if (needle.pattern === 'flat_line') {
    const spacing = 5;
    const totalWidth = (needle.count - 1) * spacing;
    const startX = centerX - totalWidth / 2;

    for (let i = 0; i < needle.count; i++) {
      const x = startX + i * spacing;
      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', centerY);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('class', 'diagram-needle-point');
      circle.setAttribute('stroke-width', '1.5');
      svg.appendChild(circle);
    }
  } else if (needle.pattern === 'curved_line') {
    const spacing = 5;
    const totalWidth = (needle.count - 1) * spacing;
    const startX = centerX - totalWidth / 2;
    const curveAmount = 10;

    for (let i = 0; i < needle.count; i++) {
      const x = startX + i * spacing;
      const progress = i / (needle.count - 1);
      const curveY = Math.sin(progress * Math.PI) * curveAmount;
      const y = centerY + curveY;

      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('class', 'diagram-needle-point');
      circle.setAttribute('stroke-width', '1.5');
      svg.appendChild(circle);
    }
  } else if (needle.pattern === 'flat_stacked') {
    const spacing = 4;
    const rows = 2;
    const needlesPerRow = Math.ceil(needle.count / rows);

    let needleIndex = 0;
    for (let row = 0; row < rows; row++) {
      const rowNeedles = Math.min(needlesPerRow, needle.count - needleIndex);
      const totalWidth = (rowNeedles - 1) * spacing;
      const startX = centerX - totalWidth / 2;
      const y = centerY - 3 + row * 6;

      for (let i = 0; i < rowNeedles && needleIndex < needle.count; i++) {
        const x = startX + i * spacing;
        const circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', needleRadius);
        circle.setAttribute('class', 'diagram-needle-point');
        circle.setAttribute('stroke-width', '1.5');
        svg.appendChild(circle);
        needleIndex++;
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════
// 8. REFERENCE CHART
// ═══════════════════════════════════════════════════════════

function initReferenceChart() {
  const toggleButton = document.getElementById('toggle-reference');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleReferenceChart);
  }

  // Populate reference chart
  populateReferenceChart();
}

function toggleReferenceChart() {
  const content = document.getElementById('reference-content');
  const icon = document.getElementById('toggle-icon');
  const text = document.getElementById('toggle-text');

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    icon.textContent = '▲';
    text.textContent = 'Hide Chart';
  } else {
    content.style.display = 'none';
    icon.textContent = '▼';
    text.textContent = 'Show Chart';
  }
}

function populateReferenceChart() {
  // Group needles by type
  const groups = {
    rl: [],
    rs: [],
    m1: [],
    cm: [],
    f: []
  };

  Object.entries(needleDatabase).forEach(([code, needle]) => {
    if (needle.typeCode === 'RL') groups.rl.push({ code, ...needle });
    else if (needle.typeCode === 'RS') groups.rs.push({ code, ...needle });
    else if (needle.typeCode === 'M1') groups.m1.push({ code, ...needle });
    else if (needle.typeCode === 'CM') groups.cm.push({ code, ...needle });
    else if (needle.typeCode === 'F') groups.f.push({ code, ...needle });
  });

  // Sort by count
  Object.keys(groups).forEach(key => {
    groups[key].sort((a, b) => a.count - b.count);
  });

  // Populate each list
  populateReferenceList('rl-list', groups.rl);
  populateReferenceList('rs-list', groups.rs);
  populateReferenceList('m1-list', groups.m1);
  populateReferenceList('cm-list', groups.cm);
  populateReferenceList('f-list', groups.f);
}

function populateReferenceList(listId, needles) {
  const list = document.getElementById(listId);
  if (!list) return;

  const tNeedle = (window.I18N && window.I18N.getNeedleTranslation) ? window.I18N.getNeedleTranslation : null;

  list.innerHTML = needles.map(needle => {
    const tr = tNeedle ? tNeedle(needle.code) : null;
    const typeLabel = (tr && tr.type) ? tr.type : needle.type;
    const firstUse = (tr && tr.uses && tr.uses[0]) ? tr.uses[0] : needle.uses[0];

    return `
      <button type="button" class="ref-item-btn" onclick="handleDecodeFromRef('${needle.code}')">
        <div class="ref-item-code">${needle.code}</div>
        <div class="ref-item-type">${needle.count} ${typeLabel}</div>
        <div class="ref-item-use">${firstUse}</div>
      </button>
    `;
  }).join('');
}

function handleDecodeFromRef(code) {
  const input = document.getElementById('needle-code-input');
  if (input) {
    input.value = code;
  }

  // Scroll to decoder
  const decoder = document.querySelector('.needle-selector__decoder');
  if (decoder) {
    decoder.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Trigger decode after scroll
  setTimeout(() => {
    handleDecode();
  }, 500);
}

// ═══════════════════════════════════════════════════════════
// 9. EMBED MODAL
// ═══════════════════════════════════════════════════════════

function initEmbedModal() {
  const embedButton = document.getElementById('embed-button');
  const modal = document.getElementById('embed-modal');
  const closeButton = document.getElementById('close-modal') || document.getElementById('modal-close');
  const closeBottomBtn = document.getElementById('close-modal-btn');
  const copyButton = document.getElementById('copy-code-btn') || document.getElementById('copy-embed-code');

  const handleOpen = () => {
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  };

  const handleClose = () => {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  if (embedButton) {
    embedButton.addEventListener('click', handleOpen);
  }

  if (closeButton) {
    closeButton.addEventListener('click', handleClose);
  }

  if (closeBottomBtn) {
    closeBottomBtn.addEventListener('click', handleClose);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        handleClose();
      }
    });
  }

  if (copyButton) {
    copyButton.addEventListener('click', copyEmbedCode);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display !== 'none') {
      handleClose();
    }
  });
}

function copyEmbedCode() {
  const embedCode = document.getElementById('embed-code');
  const successMsg = document.getElementById('copy-success');

  if (!embedCode) return;

  const code = embedCode.textContent;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(() => {
      showCopySuccess(successMsg);
    }).catch(() => {
      fallbackCopy(code, successMsg);
    });
  } else {
    fallbackCopy(code, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    showCopySuccess(successMsg);
  } catch (err) {
    const fallbackMsg = (window.t && window.t('embedModal.copyFallback')) || 'Please select and copy the code manually.';
    alert(fallbackMsg);
  }

  document.body.removeChild(textarea);
}

function showCopySuccess(successMsg) {
  if (successMsg) {
    successMsg.style.display = 'block';
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 3000);
  }
}

// ═══════════════════════════════════════════════════════════
// 10. TOOLS CATALOG MODAL
// ═══════════════════════════════════════════════════════════

function initToolsCatalogModal() {
  const catalogBtn = document.getElementById('tools-catalog-button') || document.getElementById('nav-tools-catalog');
  const modal = document.getElementById('tools-catalog-modal');
  const closeTopBtn = document.getElementById('close-tools-modal');
  const closeBottomBtn = document.getElementById('close-tools-modal-btn');

  if (!modal) return;

  const handleOpen = (e) => {
    if (e) e.preventDefault();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  if (catalogBtn) {
    catalogBtn.addEventListener('click', handleOpen);
  }

  if (closeTopBtn) {
    closeTopBtn.addEventListener('click', handleClose);
  }

  if (closeBottomBtn) {
    closeBottomBtn.addEventListener('click', handleClose);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      handleClose();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display !== 'none') {
      handleClose();
    }
  });
}

// ═══════════════════════════════════════════════════════════
// 11. LANGUAGE SWITCHER & SMOOTH NAV
// ═══════════════════════════════════════════════════════════

function initLanguageSwitcher() {
  const langSelects = document.querySelectorAll('.language-select, #language-select, #embed-language-select');
  if (!langSelects.length) return;

  const getLangFn = window.I18N && (window.I18N.getLang || window.I18N.getCurrentLanguage);
  const currentLang = getLangFn ? getLangFn() : 'en';

  langSelects.forEach(select => {
    select.value = currentLang;
    select.addEventListener('change', function(e) {
      const selectedLang = e.target.value;
      const setLangFn = window.I18N && (window.I18N.setLang || window.I18N.setLanguage);
      if (setLangFn) {
        setLangFn(selectedLang);
      }
      langSelects.forEach(s => { s.value = selectedLang; });
      refreshLocalizedDynamicContent();
    });
  });
}

function refreshLocalizedDynamicContent() {
  // Re-populate comparison dropdowns with localized needle types
  populateComparisonDropdowns();

  // Re-render reference matrix with localized labels
  populateReferenceChart();

  // Re-render recommendation if currently visible
  const resultsSection = document.getElementById('results-section');
  if (resultsSection && resultsSection.style.display !== 'none' && currentRecommendation) {
    displayRecommendation(currentRecommendation);
  }

  // Re-render decoder if visible and input has value
  const decoderInput = document.getElementById('needle-code-input');
  const decoderResult = document.getElementById('decoder-result');
  if (decoderResult && decoderResult.style.display !== 'none' && decoderInput && decoderInput.value) {
    handleDecode();
  }

  // Re-render comparison if visible
  const compareResults = document.getElementById('compare-results');
  if (compareResults && compareResults.style.display !== 'none') {
    handleComparison();
  }
}

function initSmoothNav() {
  const navLinks = document.querySelectorAll('.site-nav__link[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ═══════════════════════════════════════════════════════════
// 12. UTILITY EXPORTS
// ═══════════════════════════════════════════════════════════

// Make handleDecodeFromRef available globally
window.handleDecodeFromRef = handleDecodeFromRef;
