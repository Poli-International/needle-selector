# Tattoo Needle Selector - Technical Documentation

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Data Schemas](#data-schemas)
3. [Calculation / Logic Algorithms](#calculation--logic-algorithms)
4. [API Reference](#api-reference)
5. [Integration Guide](#integration-guide)
6. [Customization](#customization)
7. [Performance](#performance)
8. [Browser Compatibility](#browser-compatibility)
9. [Security](#security)
10. [Version History](#version-history)
11. [Support and Contact](#support-and-contact)

## Architecture Overview

### Technology Stack

- **HTML5** - Semantic markup with embedded Open Graph and Twitter Card meta tags
- **CSS3** - Custom stylesheets with CSS custom properties (variables) for theming
- **Vanilla JavaScript (ES6+)** - No frameworks, libraries, or external dependencies
- **SVG** - Inline SVG for needle configuration diagrams (generated programmatically)
- **Schema.org** - JSON-LD structured data for WebApplication and FAQPage

### File Structure

```
needle-selector/
├── index.html                 # Main tool interface with all UI sections
├── documentation.html         # Standalone documentation page (loaded in iframe)
├── embed.html                 # Embed instructions and code generator
├── css/
│   ├── style.css              # Primary tool styles
│   └── poli-standard.css      # Standard Poli International styling
└── js/
    ├── needle-data.js         # Needle database and style recommendations
    ├── selector.js            # Core logic: form handling, decoding, comparison
    ├── common.js              # Shared utilities: theme, iframe resizing, modal
    └── feedback.js            # User feedback handling
```

### Component Breakdown

The tool consists of six interactive sections within a single-page application:

1. **Quick Selector** (`#needle-form`) - Form with dropdowns and radio buttons for style, technique, detail level, and skin type
2. **Results Display** (`#results-section`) - Shows recommended needle with SVG diagram, details, settings, and alternatives
3. **Needle Code Decoder** (`#needle-code-input` + `#decode-button`) - Text input that parses needle codes and displays full specifications
4. **Comparison Mode** (`#compare-1`, `#compare-2`, `#compare-3`) - Side-by-side comparison of up to three needle configurations
5. **Reference Chart** (`#reference-content`) - Collapsible complete needle reference organized by category (RL, RS, M1, CM, F)
6. **Educational Content** - Six static cards covering needle codes, anatomy, style matching, safety, common mistakes, and pro tips

### Tab System

The tool uses a three-tab interface at the top:

- **Tool** (`#tab-tool`) - Main interactive selector
- **Documentation** (`#tab-docs`) - Loads `documentation.html` in an iframe
- **Embed Code** (`#tab-embed`) - Shows iframe embed code with copy button

## Data Schemas

### Needle Database (`needleDatabase` object)

The `needleDatabase` object in `needle-data.js` contains all needle configurations. Each key is a needle code string (e.g., `"9RL"`, `"11M1"`).

```javascript
// Example entry for 9RL
'9RL': {
    count: 9,                    // Number of needles
    type: 'Round Liner',         // Human-readable type name
    typeCode: 'RL',              // Short configuration code
    pattern: 'tight_round',      // Arrangement pattern
    diameter_mm: 1.6,            // Approximate coverage diameter in mm
    uses: [                      // Array of common use cases
        'bold lines',
        'traditional tattoos',
        'strong outlines',
        'tribal'
    ],
    styles: [                    // Compatible tattoo styles
        'american',
        'japanese',
        'tribal',
        'neo_traditional'
    ],
    techniques: [                // Compatible techniques
        'lining'
    ],
    detailLevel: [               // Compatible detail levels
        'medium',
        'bold'
    ],
    pros: [                      // Advantages
        'strong lines',
        'fast coverage',
        'great for traditional',
        'reliable'
    ],
    cons: [                      // Disadvantages
        'too thick for fine work',
        'can be harsh on thin skin'
    ],
    voltage: '8.0-9.5V',        // Recommended voltage range
    speed: 'medium to fast',     // Recommended machine speed
    depth: '1.5-2.0mm',         // Recommended penetration depth
    skin: [                      // Compatible skin types
        'normal',
        'thick'
    ]
}
```

**Pattern values:** `'single'`, `'tight_round'`, `'loose_round'`, `'flat_line'`, `'curved_line'`, `'flat_stacked'`

### Style Recommendations (`styleRecommendations` object)

Maps tattoo styles to recommended needle configurations by technique and detail level.

```javascript
// Example entry for 'american' style
american: {
    lining: {
        fine: ['7RL'],
        medium: ['9RL', '11RL'],
        bold: ['11RL', '14RL']
    },
    shading: {
        fine: ['7RS', '9RS'],
        medium: ['9RS', '11RS'],
        bold: ['11RS', '9F']
    },
    color_packing: {
        fine: ['9RS'],
        medium: ['11RS', '9M1'],
        bold: ['11M1', '9F']
    }
}
```

**Style keys:** `japanese`, `american`, `realism`, `fine_line`, `watercolor`, `neo_traditional`, `dotwork`, `tribal`, `geometric`, `portrait`, `script`, `cover_up`, `ornamental`, `new_school`, `blackwork`, `black_grey`

**Technique keys:** `lining`, `shading`, `color_packing`, `whip_shading`, `stipple`, `color_blend`, `black_grey`

### Form Input Values

**Tattoo Style** (`#tattoo-style`): `japanese`, `american`, `realism`, `fine-line`, `watercolor`, `neo-traditional`, `dotwork`, `tribal`, `geometric`, `portrait`, `script`, `cover-up`, `ornamental`, `new-school`, `blackwork`

**Primary Technique** (`#technique`): `lining`, `shading`, `color-packing`, `whip-shading`, `stipple`, `color-blend`, `black-grey`

**Detail Level** (radio): `fine`, `medium`, `bold`

**Skin Type** (radio): `thin`, `normal`, `thick`

## Calculation / Logic Algorithms

### 1. Needle Recommendation (`findRecommendedNeedle`)

**File:** `selector.js` - Lines 107-167

**Input:** `style` (string), `technique` (string), `detail` (string), `skin` (string)

**Process:**

1. Map form values to internal keys using `styleMap` and `techniqueMap` objects
   - Example: `'fine-line'` → `'fine_line'`, `'color-packing'` → `'color_packing'`
2. Look up `styleRecommendations[styleKey][techniqueKey]`
3. If technique not found for style, fall back to `styleRec['lining']`
4. Get needle codes for the selected `detail` level, or fall back to `'medium'`
5. Call `findNeedleFromList(needles, skin)` to filter by skin compatibility

**Output:** Object with `{ code, count, type, typeCode, pattern, diameter_mm, uses, styles, techniques, pros, cons, voltage, speed, depth, skin, alternatives }`

### 2. Skin Compatibility Filtering (`findNeedleFromList`)

**File:** `selector.js` - Lines 169-187

**Input:** `needleList` (array of code strings), `skin` (string)

**Process:**

1. Filter `needleList` to only include codes where `needleDatabase[code].skin` includes the given `skin` type
2. If compatible needles exist, return the first one with its database entry plus `alternatives` (first 3 from original list)
3. If no compatible needles, return the first needle from the original list anyway

**Output:** Object with full needle data plus `alternatives` array

### 3. Needle Code Decoding (`handleDecode`)

**File:** `selector.js` - Lines 278-313

**Input:** Text from `#needle-code-input`

**Process:**

1. Trim whitespace and convert to uppercase
2. Look up `needleDatabase[code]`
3. If not found, display error message with example codes
4. If found, call `displayDecodedNeedle(code, needle, container)`

**Output:** Renders HTML with needle breakdown, best uses, settings, pros/cons, and SVG diagram

### 4. SVG Diagram Generation (`generateNeedleDiagram`)

**File:** `selector.js` - Lines 207-276

**Input:** `svgId` (string), `needle` (object with `pattern`, `count`, `diameter_mm`)

**Process:**

1. Clear existing SVG content
2. Based on `needle.pattern`, calculate needle positions:
   - `'single'`: One circle at center
   - `'tight_round'` / `'loose_round'`: Circles arranged in a circle using `angleStep = (2 * PI) / count`, radius varies by pattern
   - `'flat_line'`: Circles in a horizontal line with 8px spacing
   - `'curved_line'`: Circles along a sine wave with `curveAmount = 15`
   - `'flat_stacked'`: Two rows of circles with 7px spacing
3. Add coverage circle (dashed, radius = `diameter_mm * 15`)
4. All circles use gold fill (`#D4AF37`) and red stroke (`#E74C3C`)

**Output:** Renders SVG elements in the DOM

### 5. Comparison Display (`displayComparison`)

**File:** `selector.js` - Lines 430-482

**Input:** `codes` (array of 2-3 needle code strings)

**Process:**

1. Set `#compare-results` display to `'grid'`
2. For each code, generate HTML card with:
   - Code and type name
   - SVG diagram (calls `generateComparisonDiagram`)
   - Coverage, pattern, voltage, and top 2 uses
3. After 100ms timeout, generate diagrams for each comparison SVG

**Output:** Renders comparison grid in the DOM

## API Reference

### Public Functions

#### `initNeedleSelector()`
- **Location:** `selector.js` line 17
- **Description:** Main initialization function called on DOMContentLoaded
- **Calls:** `initDarkMode()`, `initNeedleForm()`, `initDecoder()`, `initComparison()`, `initReferenceChart()`, `initEmbedModal()`, `initEmailCapture()`, `populateComparisonDropdowns()`

#### `handleNeedleFormSubmit(e)`
- **Location:** `selector.js` line 67
- **Parameters:** `e` (Event object)
- **Behavior:** Prevents default form submission, validates inputs, calls `findRecommendedNeedle()`, then `displayRecommendation()`, scrolls to results

#### `findRecommendedNeedle(style, technique, detail, skin)`
- **Location:** `selector.js` line 107
- **Parameters:** `style` (string), `technique` (string), `detail` (string), `skin` (string)
- **Returns:** Object with needle data and alternatives, or `null`
- **Behavior:** Maps form values to internal keys, looks up style recommendations, filters by skin type

#### `findNeedleFromList(needleList, skin)`
- **Location:** `selector.js` line 169
- **Parameters:** `needleList` (array of strings), `skin` (string)
- **Returns:** Object with needle data and alternatives, or `null`
- **Behavior:** Filters needles by skin type compatibility, returns first match

#### `displayRecommendation(rec)`
- **Location:** `selector.js` line 192
- **Parameters:** `rec` (object with full needle data)
- **Behavior:** Updates DOM elements: needle code, name, count, config type, uses, settings, tips, alternatives grid, and generates SVG diagram

#### `generateNeedleDiagram(svgId, needle)`
- **Location:** `selector.js` line 207
- **Parameters:** `svgId` (string), `needle` (object with `pattern`, `count`, `diameter_mm`)
- **Behavior:** Creates SVG circles based on needle pattern and coverage

#### `handleDecode()`
- **Location:** `selector.js` line 278
- **Behavior:** Reads input from `#needle-code-input`, looks up in database, displays decoded information or error

#### `displayDecodedNeedle(code, needle, container)`
- **Location:** `selector.js` line 315
- **Parameters:** `code` (string), `needle` (object), `container` (DOM element)
- **Behavior:** Renders complete needle breakdown with SVG diagram, uses, settings, pros/cons

#### `handleComparison()`
- **Location:** `selector.js` line 420
- **Behavior:** Reads values from three comparison dropdowns, validates at least two selected, calls `displayComparison()`

#### `displayComparison(codes)`
- **Location:** `selector.js` line 430
- **Parameters:** `codes` (array of strings)
- **Behavior:** Renders comparison grid with SVG diagrams and key specs

#### `populateComparisonDropdowns()`
- **Location:** `selector.js` line 407
- **Behavior:** Populates all three comparison `<select>` elements with all needle codes from database, sorted alphabetically

#### `toggleDarkMode()`
- **Location:** `selector.js` line 49
- **Behavior:** Toggles `light-mode` class on body, saves preference to localStorage

#### `sendHeight()`
- **Location:** `common.js` line 46
- **Behavior:** Calculates document height + 50px buffer, sends to parent window via `postMessage`

### Event Handlers

| Element | Event | Handler | File |
|---------|-------|---------|------|
| `#needle-form` | `submit` | `handleNeedleFormSubmit` | selector.js |
| `#decode-button` | `click` | `handleDecode` | selector.js |
| `#needle-code-input` | `keypress` (Enter) | `handleDecode` | selector.js |
| `#compare-button` | `click` | `handleComparison` | selector.js |
| `#dark-mode-toggle` | `click` | `toggleDarkMode` | selector.js |
| `#embedBtn` / `#embed-button` | `click` | Open modal | common.js |
| `#modalClose` / `.modal-close` | `click` | Close modal | common.js |
| `#copyEmbedCode` | `click` | Copy embed code to clipboard | common.js |
| Window | `message` | Theme sync from parent | common.js |
| Window | `resize` | `sendHeight` | common.js |
| Document | `click`, `change` | `sendHeight` (debounced) | common.js |

## Integration Guide

### Standalone Embed

The tool is a dependency-free static HTML/CSS/JS application. Embed it on any website using an iframe:

```html
<iframe
  src="https://poliinternational.com/tools/needle-selector/index.html"
  width="100%"
  height="800"
  frameborder="0"
  style="border: 1px solid #ddd; border-radius: 8px;"
  title="Needle Selector by Poli International">
</iframe>
```

### Embed Options

| Version | Height | Use Case |
|---------|--------|----------|
| Standard | 800px | General purpose, recommended |
| Large | 1000px | Dedicated tool pages |
| Compact | 600px | Space-constrained layouts |

### Iframe Communication

The tool automatically sends its height to the parent window via `postMessage`:

```javascript
window.parent.postMessage({ height: document.body.scrollHeight + 50 }, '*');
```

It also listens for theme messages:

```javascript
window.addEventListener('message', function(event) {
    if (event.data && event.data.theme) {
        setTheme(event.data.theme, true);
    }
});
```

### Theme Synchronization

When embedded in a WordPress wrapper, the tool listens for `poli-theme` messages:

```javascript
window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'poli-theme') {
        if (e.data.light) {
            // Switch to light mode
        } else {
            // Switch to dark mode
        }
    }
});
```

## Customization

### CSS Custom Properties

The tool uses CSS custom properties (variables) for theming. Key variables include:

- `--color-background` - Main background color
- `--color-background-elevated` - Elevated card backgrounds
- `--color-text-primary` - Primary text color
- `--color-text-secondary` - Secondary text color
- `--color-brass-gold` - Accent color for needle codes and highlights
- `--color-ink-red` - Warning/error color
- `--color-border` - Border colors
- `--font-family-mono` - Monospace font for needle codes

### Theme Persistence

The tool saves the user's theme preference to `localStorage`:

- Key: `'needle-selector-theme'` (from selector.js)
- Key: `'theme'` (from common.js)
- Values: `'dark'` or `'light'`

### Embed Code Customization

The iframe `style` attribute can be customized:

```html
<iframe
  src="https://poliinternational.com/tools/needle-selector/index.html"
  width="100%"
  height="800"
  frameborder="0"
  style="border: 2px solid #B76E79; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
  title="Needle Selector by Poli International">
</iframe>
```

## Performance

### Bundle Size

The tool consists of four JavaScript files loaded synchronously:

1. `needle-data.js` - ~25KB (contains the full needle database and style recommendations)
2. `selector.js` - ~15KB (core logic)
3. `common.js` - ~5KB (shared utilities)
4. `feedback.js` - ~2KB (feedback handling)

Total JavaScript: approximately 47KB uncompressed.

### Optimization Notes

- **No external dependencies** - Zero network requests for libraries
- **Inline SVG** - Diagrams are generated programmatically, no image files
- **DOM manipulation** - Direct DOM updates without virtual DOM overhead
- **MutationObserver** - Used in `common.js` to detect dynamic content changes for iframe height resizing
- **Debounced resize** - Height recalculation is triggered on click, change, and resize events

## Browser Compatibility

Based on the `embed.html` documentation and code analysis:

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| iOS Safari | 14+ |
| Android Chrome | 90+ |

### Requirements

- **JavaScript enabled** - The tool is entirely JavaScript-driven
- **HTML5** - Uses semantic HTML5 elements and SVG
- **localStorage** - Required for theme persistence
- **postMessage** - Required for iframe communication
- **MutationObserver** - Required for automatic height resizing

## Security

### Input Handling

The tool handles user input in three locations:

1. **Form submission** (`#needle-form`): Values are validated before processing. If style or technique is empty, an alert is shown and submission is prevented.

2. **Needle code decoder** (`#needle-code-input`): Input is trimmed and converted to uppercase. Only exact matches against the `needleDatabase` object are accepted. Invalid codes display an error message with example valid codes.

3. **Comparison dropdowns** (`#compare-1`, `#compare-2`, `#compare-3`): Values are restricted to predefined `<option>` elements populated from the database. Empty selections trigger an alert.

### XSS Prevention

- **No innerHTML with user input** - User input is never directly inserted into the DOM via `innerHTML`. All user-facing text is either:
  - Predefined strings from the database
  - Error messages hardcoded in the JavaScript
  - Values from `<option>` elements
- **Template literals** - Used only with trusted data from the `needleDatabase` object
- **No eval()** - No dynamic code execution

### Data Storage

- **localStorage** - Only stores theme preference (`'dark'` or `'light'`)
- **No cookies** - The tool does not set or read any cookies
- **No external API calls** - All data is embedded in the JavaScript files

### Iframe Security

- **Cross-origin communication** - Uses `postMessage` with `'*'` target origin (no restriction)
- **No sensitive data** - The tool does not handle or transmit any sensitive information
- **No user authentication** - No login, registration, or session management

## Version History

### Version 1.0.0 (February 7, 2026)

- Initial release
- Complete needle database with 25 configurations across 5 types (RL, RS, M1, CM, F)
- Style recommendations for 16 tattoo styles
- Interactive form with style, technique, detail level, and skin type inputs
- SVG diagram generation for all needle patterns
- Needle code decoder with full specifications
- Side-by-side comparison tool (up to 3 needles)
- Collapsible reference chart
- Educational content cards
- Dark/light mode with localStorage persistence
- Iframe embed support with automatic height resizing
- Schema.org structured data (WebApplication, FAQPage)
- Open Graph and Twitter Card meta tags
- Responsive design

## Support and Contact

For technical support, integration assistance, or custom development:

- **Website:** [https://poliinternational.com](https://poliinternational.com)
- **Contact Form:** [https://poliinternational.com/contact-us/](https://poliinternational.com/contact-us/)
- **Documentation:** [https://poliinternational.com/tools/needle-selector/documentation.html](https://poliinternational.com/tools/needle-selector/documentation.html)
- **Support Us:** [https://ko-fi.com/C0C81NEXBV](https://ko-fi.com/C0C81NEXBV)

---

**Technical Standard provided by Poli International Engineering**

*Poli International - Serving tattoo and piercing studios for over 25 years*
