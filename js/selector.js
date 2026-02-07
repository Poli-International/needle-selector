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

document.addEventListener('DOMContentLoaded', function() {
  initNeedleSelector();
});

function initNeedleSelector() {
  // Initialize dark mode
  initDarkMode();

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

  // Initialize email capture
  initEmailCapture();

  // Populate comparison dropdowns
  populateComparisonDropdowns();
}

// ═══════════════════════════════════════════════════════════
// 2. DARK MODE TOGGLE
// ═══════════════════════════════════════════════════════════

function initDarkMode() {
  const savedMode = localStorage.getItem('needle-selector-theme');
  if (savedMode === 'light') {
    document.body.classList.add('light-mode');
  }

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    localStorage.setItem('needle-selector-theme', 'light');
  } else {
    localStorage.setItem('needle-selector-theme', 'dark');
  }
}

// ═══════════════════════════════════════════════════════════
// 3. NEEDLE SELECTOR FORM
// ═══════════════════════════════════════════════════════════

function initNeedleForm() {
  const form = document.getElementById('needle-form');
  if (form) {
    form.addEventListener('submit', handleNeedleFormSubmit);
  }
}

function handleNeedleFormSubmit(e) {
  e.preventDefault();

  // Get form values
  const style = document.getElementById('tattoo-style').value;
  const technique = document.getElementById('technique').value;
  const detail = document.querySelector('input[name="detail"]:checked').value;
  const skin = document.querySelector('input[name="skin"]:checked').value;

  if (!style || !technique) {
    alert('Please select both a tattoo style and technique.');
    return;
  }

  // Find recommended needle
  const recommendation = findRecommendedNeedle(style, technique, detail, skin);

  if (recommendation) {
    displayRecommendation(recommendation);

    // Scroll to results
    const resultsSection = document.getElementById('results-section');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  } else {
    alert('No specific recommendation found for this combination. Please try different options.');
  }
}

function findRecommendedNeedle(style, technique, detail, skin) {
  // Map style values to style keys
  const styleMap = {
    'japanese': 'japanese',
    'american': 'american',
    'realism': 'realism',
    'fine-line': 'fine_line',
    'watercolor': 'watercolor',
    'neo-traditional': 'neo_traditional',
    'dotwork': 'dotwork',
    'tribal': 'tribal',
    'geometric': 'geometric',
    'portrait': 'portrait',
    'script': 'script',
    'cover-up': 'cover_up',
    'ornamental': 'ornamental',
    'new-school': 'new_school',
    'blackwork': 'blackwork'
  };

  const techniqueMap = {
    'lining': 'lining',
    'shading': 'shading',
    'color-packing': 'color_packing',
    'whip-shading': 'whip_shading',
    'stipple': 'stipple',
    'color-blend': 'color_blend',
    'black-grey': 'black_grey'
  };

  const styleKey = styleMap[style];
  const techniqueKey = techniqueMap[technique];

  // Get style recommendations
  const styleRec = styleRecommendations[styleKey];
  if (!styleRec) return null;

  // Get technique within style
  const techniqueRec = styleRec[techniqueKey];
  if (!techniqueRec) {
    // Try fallback techniques
    if (styleRec['lining']) {
      return findNeedleFromList(styleRec['lining'][detail] || styleRec['lining']['medium'], skin);
    }
    return null;
  }

  // Get needles for detail level
  const needles = techniqueRec[detail] || techniqueRec['medium'] || [];
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

  // Display needle code
  const codeEl = document.getElementById('primary-needle-code');
  if (codeEl) {
    codeEl.textContent = rec.code;
  }

  // Display needle name
  const nameEl = document.getElementById('primary-needle-name');
  if (nameEl) {
    nameEl.textContent = `${rec.count} ${rec.type}`;
  }

  // Display needle count
  const countEl = document.getElementById('needle-count');
  if (countEl) {
    countEl.textContent = `${rec.count} needles in ${rec.pattern.replace('_', ' ')} configuration`;
  }

  // Display config type
  const typeEl = document.getElementById('config-type');
  if (typeEl) {
    typeEl.textContent = `${rec.type} (${rec.typeCode})`;
  }

  // Display uses
  const usesEl = document.getElementById('use-list');
  if (usesEl && rec.uses) {
    usesEl.innerHTML = rec.uses.map(use => `<li>${use}</li>`).join('');
  }

  // Display settings
  const settingsEl = document.getElementById('settings');
  if (settingsEl) {
    settingsEl.innerHTML = `
      <strong>Voltage:</strong> ${rec.voltage}<br>
      <strong>Speed:</strong> ${rec.speed}<br>
      <strong>Depth:</strong> ${rec.depth}
    `;
  }

  // Display pro tips
  const tipsEl = document.getElementById('tip-list');
  if (tipsEl && rec.pros) {
    tipsEl.innerHTML = rec.pros.map(pro => `<li>${pro}</li>`).join('');
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
        return `
          <div class="needle-selector__alt-card" style="padding: 1rem; background: var(--color-background-elevated); border: 2px solid var(--color-border); border-radius: 8px; text-align: center;">
            <div style="font-family: var(--font-family-mono); font-size: 1.5rem; font-weight: bold; color: var(--color-brass-gold); margin-bottom: 0.5rem;">${code}</div>
            <div style="font-size: 0.875rem; color: var(--color-text-secondary);">${needle.count} ${needle.type}</div>
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
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', needleRadius);
    circle.setAttribute('fill', '#D4AF37');
    circle.setAttribute('stroke', '#E74C3C');
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

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('fill', '#D4AF37');
      circle.setAttribute('stroke', '#E74C3C');
      circle.setAttribute('stroke-width', '2');
      svg.appendChild(circle);
    }

    // Draw center point
    const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    center.setAttribute('cx', centerX);
    center.setAttribute('cy', centerY);
    center.setAttribute('r', 2);
    center.setAttribute('fill', '#E74C3C');
    svg.appendChild(center);
  } else if (needle.pattern === 'flat_line') {
    // Magnum - flat line
    const spacing = 8;
    const totalWidth = (needle.count - 1) * spacing;
    const startX = centerX - totalWidth / 2;

    for (let i = 0; i < needle.count; i++) {
      const x = startX + i * spacing;
      const y = centerY;

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('fill', '#D4AF37');
      circle.setAttribute('stroke', '#E74C3C');
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

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('fill', '#D4AF37');
      circle.setAttribute('stroke', '#E74C3C');
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

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', needleRadius);
        circle.setAttribute('fill', '#D4AF37');
        circle.setAttribute('stroke', '#E74C3C');
        circle.setAttribute('stroke-width', '2');
        svg.appendChild(circle);

        needleIndex++;
      }
    }
  }

  // Add coverage circle
  const coverageCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  coverageCircle.setAttribute('cx', centerX);
  coverageCircle.setAttribute('cy', centerY);
  coverageCircle.setAttribute('r', (needle.diameter_mm || 1) * 15);
  coverageCircle.setAttribute('fill', 'none');
  coverageCircle.setAttribute('stroke', 'rgba(212, 175, 55, 0.3)');
  coverageCircle.setAttribute('stroke-width', '1');
  coverageCircle.setAttribute('stroke-dasharray', '4 2');
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

  const code = input.value.trim().toUpperCase();

  if (!code) {
    alert('Please enter a needle code (e.g., 9RL, 11M1, 15RS)');
    return;
  }

  const needle = needleDatabase[code];

  if (!needle) {
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
      <div style="padding: 2rem; background: rgba(231, 76, 60, 0.1); border: 2px solid var(--color-ink-red); border-radius: 8px; text-align: center;">
        <p style="color: var(--color-ink-red); font-weight: bold; margin-bottom: 0.5rem;">❌ Needle code not found</p>
        <p style="color: var(--color-text-secondary); font-size: 0.875rem;">
          "${code}" is not recognized. Try codes like 9RL, 11M1, 15RS, 7CM, or 9F.
        </p>
      </div>
    `;
    return;
  }

  // Display decoded information
  displayDecodedNeedle(code, needle, resultDiv);
}

function displayDecodedNeedle(code, needle, container) {
  container.style.display = 'block';
  container.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 1.5rem; background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(231, 76, 60, 0.1) 100%); border: 3px solid var(--color-brass-gold); border-radius: 12px;">
        <div style="font-family: var(--font-family-mono); font-size: 2.5rem; font-weight: bold; color: var(--color-brass-gold); letter-spacing: 2px;">${code}</div>
        <div style="font-size: 1.125rem; color: var(--color-text-secondary);">${needle.count} ${needle.type}</div>
        <svg id="decoder-diagram" width="150" height="150" viewBox="0 0 150 150" style="background: var(--color-background); border: 2px solid var(--color-border); border-radius: 50%; padding: 0.5rem;"></svg>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
        <div style="padding: 1rem; background: var(--color-background-elevated); border-left: 4px solid var(--color-brass-gold); border-radius: 4px;">
          <h4 style="color: var(--color-brass-gold); font-weight: bold; text-transform: uppercase; margin-bottom: 0.5rem; font-size: 0.875rem;">Needle Breakdown</h4>
          <p style="color: var(--color-text-primary); font-size: 0.875rem; line-height: 1.6;">
            <strong>${needle.count}</strong> = Number of needles<br>
            <strong>${needle.typeCode}</strong> = ${needle.type}<br>
            <strong>Pattern:</strong> ${needle.pattern.replace('_', ' ')}<br>
            <strong>Coverage:</strong> ~${needle.diameter_mm}mm diameter
          </p>
        </div>

        <div style="padding: 1rem; background: var(--color-background-elevated); border-left: 4px solid var(--color-brass-gold); border-radius: 4px;">
          <h4 style="color: var(--color-brass-gold); font-weight: bold; text-transform: uppercase; margin-bottom: 0.5rem; font-size: 0.875rem;">Best For</h4>
          <ul style="margin: 0; padding-left: 1.5rem; color: var(--color-text-primary); font-size: 0.875rem; line-height: 1.8;">
            ${needle.uses.map(use => `<li>${use}</li>`).join('')}
          </ul>
        </div>

        <div style="padding: 1rem; background: var(--color-background-elevated); border-left: 4px solid var(--color-brass-gold); border-radius: 4px;">
          <h4 style="color: var(--color-brass-gold); font-weight: bold; text-transform: uppercase; margin-bottom: 0.5rem; font-size: 0.875rem;">Recommended Settings</h4>
          <p style="color: var(--color-text-primary); font-size: 0.875rem; line-height: 1.6;">
            <strong>Voltage:</strong> ${needle.voltage}<br>
            <strong>Speed:</strong> ${needle.speed}<br>
            <strong>Depth:</strong> ${needle.depth}
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div style="padding: 1rem; background: rgba(39, 174, 96, 0.1); border: 2px solid rgba(39, 174, 96, 0.3); border-radius: 8px;">
            <h4 style="color: #27ae60; font-weight: bold; margin-bottom: 0.5rem; font-size: 0.875rem;">✅ Pros</h4>
            <ul style="margin: 0; padding-left: 1rem; color: var(--color-text-primary); font-size: 0.75rem; line-height: 1.6;">
              ${needle.pros.map(pro => `<li>${pro}</li>`).join('')}
            </ul>
          </div>
          <div style="padding: 1rem; background: rgba(231, 76, 60, 0.1); border: 2px solid rgba(231, 76, 60, 0.3); border-radius: 8px;">
            <h4 style="color: var(--color-ink-red); font-weight: bold; margin-bottom: 0.5rem; font-size: 0.875rem;">⚠️ Cons</h4>
            <ul style="margin: 0; padding-left: 1rem; color: var(--color-text-primary); font-size: 0.75rem; line-height: 1.6;">
              ${needle.cons.map(con => `<li>${con}</li>`).join('')}
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
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', needleRadius);
    circle.setAttribute('fill', '#D4AF37');
    circle.setAttribute('stroke', '#E74C3C');
    circle.setAttribute('stroke-width', '2');
    svg.appendChild(circle);
  } else if (needle.pattern === 'tight_round' || needle.pattern === 'loose_round') {
    const angleStep = (2 * Math.PI) / needle.count;
    const radius = needle.pattern === 'tight_round' ? patternRadius * 0.5 : patternRadius * 0.6;

    for (let i = 0; i < needle.count; i++) {
      const angle = i * angleStep;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('fill', '#D4AF37');
      circle.setAttribute('stroke', '#E74C3C');
      circle.setAttribute('stroke-width', '2');
      svg.appendChild(circle);
    }

    const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    center.setAttribute('cx', centerX);
    center.setAttribute('cy', centerY);
    center.setAttribute('r', 2);
    center.setAttribute('fill', '#E74C3C');
    svg.appendChild(center);
  } else if (needle.pattern === 'flat_line') {
    const spacing = 6;
    const totalWidth = (needle.count - 1) * spacing;
    const startX = centerX - totalWidth / 2;

    for (let i = 0; i < needle.count; i++) {
      const x = startX + i * spacing;
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', centerY);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('fill', '#D4AF37');
      circle.setAttribute('stroke', '#E74C3C');
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

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('fill', '#D4AF37');
      circle.setAttribute('stroke', '#E74C3C');
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
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', needleRadius);
        circle.setAttribute('fill', '#D4AF37');
        circle.setAttribute('stroke', '#E74C3C');
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

  const needleCodes = Object.keys(needleDatabase).sort();

  selects.forEach(select => {
    if (select) {
      needleCodes.forEach(code => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${code} - ${needleDatabase[code].type}`;
        select.appendChild(option);
      });
    }
  });
}

function handleComparison() {
  const code1 = document.getElementById('compare-1').value;
  const code2 = document.getElementById('compare-2').value;
  const code3 = document.getElementById('compare-3').value;

  if (!code1 || !code2) {
    alert('Please select at least two needles to compare.');
    return;
  }

  const codes = [code1, code2, code3].filter(c => c);
  displayComparison(codes);
}

function displayComparison(codes) {
  const resultsDiv = document.getElementById('compare-results');
  if (!resultsDiv) return;

  resultsDiv.style.display = 'grid';
  resultsDiv.innerHTML = codes.map(code => {
    const needle = needleDatabase[code];
    return `
      <div style="padding: 1.5rem; background: var(--color-background-elevated); border: 2px solid var(--color-border); border-radius: 12px;">
        <div style="text-align: center; margin-bottom: 1rem;">
          <div style="font-family: var(--font-family-mono); font-size: 2rem; font-weight: bold; color: var(--color-brass-gold);">${code}</div>
          <div style="font-size: 1rem; color: var(--color-text-secondary);">${needle.count} ${needle.type}</div>
        </div>

        <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
          <svg id="compare-diagram-${code}" width="120" height="120" viewBox="0 0 120 120" style="background: var(--color-background); border: 2px solid var(--color-border); border-radius: 50%;"></svg>
        </div>

        <div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-bottom: 0.5rem;">
          <strong style="color: var(--color-brass-gold);">Coverage:</strong> ${needle.diameter_mm}mm
        </div>
        <div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-bottom: 0.5rem;">
          <strong style="color: var(--color-brass-gold);">Pattern:</strong> ${needle.pattern.replace('_', ' ')}
        </div>
        <div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-bottom: 0.5rem;">
          <strong style="color: var(--color-brass-gold);">Voltage:</strong> ${needle.voltage}
        </div>
        <div style="font-size: 0.75rem; color: var(--color-text-secondary);">
          <strong style="color: var(--color-brass-gold);">Best for:</strong> ${needle.uses.slice(0, 2).join(', ')}
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
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', needleRadius);
    circle.setAttribute('fill', '#D4AF37');
    circle.setAttribute('stroke', '#E74C3C');
    circle.setAttribute('stroke-width', '2');
    svg.appendChild(circle);
  } else if (needle.pattern === 'tight_round' || needle.pattern === 'loose_round') {
    const angleStep = (2 * Math.PI) / needle.count;
    const radius = needle.pattern === 'tight_round' ? patternRadius * 0.5 : patternRadius * 0.6;

    for (let i = 0; i < needle.count; i++) {
      const angle = i * angleStep;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('fill', '#D4AF37');
      circle.setAttribute('stroke', '#E74C3C');
      circle.setAttribute('stroke-width', '1.5');
      svg.appendChild(circle);
    }
  } else if (needle.pattern === 'flat_line') {
    const spacing = 5;
    const totalWidth = (needle.count - 1) * spacing;
    const startX = centerX - totalWidth / 2;

    for (let i = 0; i < needle.count; i++) {
      const x = startX + i * spacing;
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', centerY);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('fill', '#D4AF37');
      circle.setAttribute('stroke', '#E74C3C');
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

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', needleRadius);
      circle.setAttribute('fill', '#D4AF37');
      circle.setAttribute('stroke', '#E74C3C');
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
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', needleRadius);
        circle.setAttribute('fill', '#D4AF37');
        circle.setAttribute('stroke', '#E74C3C');
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

  list.innerHTML = needles.map(needle => `
    <div style="padding: 0.75rem; background: var(--color-background); border: 1px solid var(--color-border); border-radius: 6px; cursor: pointer; transition: all 0.2s;" onclick="handleDecodeFromRef('${needle.code}')">
      <div style="font-family: var(--font-family-mono); font-weight: bold; color: var(--color-brass-gold); font-size: 1rem; margin-bottom: 0.25rem;">${needle.code}</div>
      <div style="font-size: 0.75rem; color: var(--color-text-secondary);">${needle.count} ${needle.type}</div>
      <div style="font-size: 0.625rem; color: var(--color-text-muted); margin-top: 0.25rem;">${needle.uses[0]}</div>
    </div>
  `).join('');
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
  const closeButton = document.getElementById('modal-close');
  const overlay = document.getElementById('modal-overlay');
  const copyButton = document.getElementById('copy-embed-code');

  if (embedButton) {
    embedButton.addEventListener('click', () => {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  if (overlay) {
    overlay.addEventListener('click', closeModal);
  }

  if (copyButton) {
    copyButton.addEventListener('click', copyEmbedCode);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById('embed-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
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
    alert('Failed to copy code. Please select and copy manually.');
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
// 10. EMAIL CAPTURE
// ═══════════════════════════════════════════════════════════

function initEmailCapture() {
  const footerForm = document.getElementById('footer-email-form');
  const modalForm = document.getElementById('modal-email-form');

  if (footerForm) {
    footerForm.addEventListener('submit', handleEmailSubmit);
  }

  if (modalForm) {
    modalForm.addEventListener('submit', handleEmailSubmit);
  }
}

function handleEmailSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const location = form.getAttribute('data-location');
  const emailInput = form.querySelector('.needle-selector__email-input');
  const submitButton = form.querySelector('.needle-selector__email-submit');
  const successMsg = form.querySelector('.needle-selector__email-success');
  const errorMsg = form.querySelector('.needle-selector__email-error');

  const email = emailInput.value.trim();

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showEmailMessage(errorMsg, successMsg);
    return;
  }

  // Disable button during submission
  submitButton.disabled = true;
  submitButton.textContent = 'Subscribing...';

  // TODO: INTEGRATE WITH EMAIL SERVICE
  // Replace with Mailchimp/ConvertKit API call
  // Example:
  // fetch('/api/subscribe', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email, source: location, tool: 'needle-selector' })
  // })

  // Simulate API call
  setTimeout(() => {
    showEmailMessage(successMsg, errorMsg);
    emailInput.value = '';
    submitButton.disabled = false;
    submitButton.textContent = location === 'footer' ? 'Notify Me' : 'Subscribe';

    console.log('Email captured:', email, 'from:', location, 'tool: needle-selector');
  }, 1000);
}

function showEmailMessage(showEl, hideEl) {
  if (hideEl) hideEl.style.display = 'none';
  if (showEl) {
    showEl.style.display = 'block';
    setTimeout(() => {
      showEl.style.display = 'none';
    }, 5000);
  }
}

// ═══════════════════════════════════════════════════════════
// 11. UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════

// Make handleDecodeFromRef available globally
window.handleDecodeFromRef = handleDecodeFromRef;
