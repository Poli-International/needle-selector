/*
═══════════════════════════════════════════════════════════════
PROFESSIONAL TATTOO NEEDLE SELECTOR - NEEDLE DATABASE
Poli International
Version: 1.0
═══════════════════════════════════════════════════════════════
*/

/**
 * Complete needle configuration database
 * Each entry contains:
 * - count: Number of needles
 * - type: Configuration type name
 * - typeCode: Short code (RL, RS, M1, etc.)
 * - pattern: Needle arrangement pattern
 * - diameter_mm: Approximate coverage diameter
 * - uses: Array of common uses
 * - styles: Array of compatible tattoo styles
 * - techniques: Array of compatible techniques
 * - pros: Array of advantages
 * - cons: Array of disadvantages
 * - voltage: Recommended voltage range
 * - speed: Recommended machine speed
 * - depth: Recommended penetration depth
 */

const needleDatabase = {
  // ═══════════════════════════════════════════════════════════
  // ROUND LINERS (RL)
  // ═══════════════════════════════════════════════════════════
  '1RL': {
    count: 1,
    type: 'Round Liner',
    typeCode: 'RL',
    pattern: 'single',
    diameter_mm: 0.25,
    uses: ['ultra-fine details', 'micro-tattoos', 'freckle tattoos', 'cosmetic tattoos'],
    styles: ['fine_line', 'micro_realism', 'cosmetic'],
    techniques: ['lining', 'stipple'],
    detailLevel: ['fine'],
    pros: ['extremely precise', 'minimal trauma', 'perfect for tiny details'],
    cons: ['very slow', 'requires expert hand', 'easy to overwork'],
    voltage: '6.0-7.5V',
    speed: 'very slow',
    depth: '1.0-1.5mm',
    skin: ['thin', 'normal']
  },

  '3RL': {
    count: 3,
    type: 'Round Liner',
    typeCode: 'RL',
    pattern: 'tight_round',
    diameter_mm: 0.6,
    uses: ['fine details', 'small lettering', 'delicate lines', 'portraits'],
    styles: ['fine_line', 'micro_realism', 'script', 'portrait'],
    techniques: ['lining', 'stipple'],
    detailLevel: ['fine'],
    pros: ['precise', 'minimal trauma', 'fine control', 'good for learning'],
    cons: ['slow coverage', 'requires steady hand', 'not for bold work'],
    voltage: '6.5-8.0V',
    speed: 'slow to medium',
    depth: '1.5mm',
    skin: ['thin', 'normal']
  },

  '5RL': {
    count: 5,
    type: 'Round Liner',
    typeCode: 'RL',
    pattern: 'tight_round',
    diameter_mm: 1.0,
    uses: ['fine to medium lines', 'portraits', 'script', 'detailed work'],
    styles: ['fine_line', 'realism', 'portrait', 'script', 'ornamental'],
    techniques: ['lining', 'stipple'],
    detailLevel: ['fine', 'medium'],
    pros: ['versatile', 'good balance', 'reliable', 'industry standard'],
    cons: ['may be too fine for bold work', 'slower than larger needles'],
    voltage: '7.0-8.5V',
    speed: 'medium',
    depth: '1.5-2.0mm',
    skin: ['thin', 'normal', 'thick']
  },

  '7RL': {
    count: 7,
    type: 'Round Liner',
    typeCode: 'RL',
    pattern: 'tight_round',
    diameter_mm: 1.3,
    uses: ['medium lines', 'neo-traditional', 'japanese', 'general lining'],
    styles: ['neo_traditional', 'japanese', 'ornamental', 'geometric'],
    techniques: ['lining'],
    detailLevel: ['medium'],
    pros: ['versatile', 'good for most styles', 'clean lines', 'popular choice'],
    cons: ['may be too thick for fine details', 'may be too thin for bold traditional'],
    voltage: '7.5-9.0V',
    speed: 'medium',
    depth: '1.5-2.0mm',
    skin: ['normal', 'thick']
  },

  '9RL': {
    count: 9,
    type: 'Round Liner',
    typeCode: 'RL',
    pattern: 'tight_round',
    diameter_mm: 1.6,
    uses: ['bold lines', 'traditional tattoos', 'strong outlines', 'tribal'],
    styles: ['american', 'japanese', 'tribal', 'neo_traditional'],
    techniques: ['lining'],
    detailLevel: ['medium', 'bold'],
    pros: ['strong lines', 'fast coverage', 'great for traditional', 'reliable'],
    cons: ['too thick for fine work', 'can be harsh on thin skin'],
    voltage: '8.0-9.5V',
    speed: 'medium to fast',
    depth: '1.5-2.0mm',
    skin: ['normal', 'thick']
  },

  '11RL': {
    count: 11,
    type: 'Round Liner',
    typeCode: 'RL',
    pattern: 'tight_round',
    diameter_mm: 1.9,
    uses: ['very bold lines', 'traditional tattoos', 'large tribal', 'thick outlines'],
    styles: ['american', 'tribal', 'new_school', 'blackwork'],
    techniques: ['lining'],
    detailLevel: ['bold'],
    pros: ['very bold', 'fast', 'great for thick skin', 'strong coverage'],
    cons: ['too bold for most work', 'requires experience', 'can cause blowouts'],
    voltage: '8.5-10.0V',
    speed: 'medium to fast',
    depth: '2.0mm',
    skin: ['thick']
  },

  '14RL': {
    count: 14,
    type: 'Round Liner',
    typeCode: 'RL',
    pattern: 'tight_round',
    diameter_mm: 2.2,
    uses: ['extra bold lines', 'large tribal', 'thick traditional', 'cover-ups'],
    styles: ['tribal', 'blackwork', 'cover_up'],
    techniques: ['lining'],
    detailLevel: ['bold'],
    pros: ['extra bold', 'fast coverage', 'good for cover-ups'],
    cons: ['very specialized', 'risk of blowouts', 'requires expert control'],
    voltage: '9.0-10.5V',
    speed: 'fast',
    depth: '2.0-2.5mm',
    skin: ['thick']
  },

  // ═══════════════════════════════════════════════════════════
  // ROUND SHADERS (RS)
  // ═══════════════════════════════════════════════════════════
  '5RS': {
    count: 5,
    type: 'Round Shader',
    typeCode: 'RS',
    pattern: 'loose_round',
    diameter_mm: 1.2,
    uses: ['soft shading', 'portrait shading', 'color blending', 'gentle gradients'],
    styles: ['portrait', 'realism', 'fine_line'],
    techniques: ['shading', 'color_blend'],
    detailLevel: ['fine', 'medium'],
    pros: ['soft shading', 'gentle on skin', 'good for portraits'],
    cons: ['slow coverage', 'limited density', 'not for bold shading'],
    voltage: '6.5-8.0V',
    speed: 'slow to medium',
    depth: '1.5-2.0mm',
    skin: ['thin', 'normal']
  },

  '7RS': {
    count: 7,
    type: 'Round Shader',
    typeCode: 'RS',
    pattern: 'loose_round',
    diameter_mm: 1.5,
    uses: ['medium shading', 'color work', 'gradients', 'general shading'],
    styles: ['realism', 'neo_traditional', 'portrait', 'japanese'],
    techniques: ['shading', 'color_packing', 'color_blend'],
    detailLevel: ['medium'],
    pros: ['versatile', 'good balance', 'reliable shading'],
    cons: ['not as soft as smaller RS', 'not as dense as larger RS'],
    voltage: '7.0-8.5V',
    speed: 'medium',
    depth: '1.5-2.0mm',
    skin: ['normal', 'thick']
  },

  '9RS': {
    count: 9,
    type: 'Round Shader',
    typeCode: 'RS',
    pattern: 'loose_round',
    diameter_mm: 1.8,
    uses: ['solid shading', 'color packing', 'traditional shading', 'general work'],
    styles: ['american', 'japanese', 'neo_traditional', 'new_school'],
    techniques: ['shading', 'color_packing'],
    detailLevel: ['medium', 'bold'],
    pros: ['solid coverage', 'good for traditional', 'reliable'],
    cons: ['may be too dense for subtle work', 'heavier on skin'],
    voltage: '7.5-9.0V',
    speed: 'medium',
    depth: '1.5-2.0mm',
    skin: ['normal', 'thick']
  },

  '11RS': {
    count: 11,
    type: 'Round Shader',
    typeCode: 'RS',
    pattern: 'loose_round',
    diameter_mm: 2.0,
    uses: ['dense shading', 'solid color', 'bold shading', 'cover-ups'],
    styles: ['american', 'tribal', 'blackwork', 'cover_up'],
    techniques: ['shading', 'color_packing'],
    detailLevel: ['bold'],
    pros: ['very solid', 'fast coverage', 'great for bold work'],
    cons: ['not for subtle work', 'can be harsh', 'requires experience'],
    voltage: '8.0-9.5V',
    speed: 'medium to fast',
    depth: '2.0mm',
    skin: ['thick']
  },

  // ═══════════════════════════════════════════════════════════
  // MAGNUM (M1) - Flat Configuration
  // ═══════════════════════════════════════════════════════════
  '5M1': {
    count: 5,
    type: 'Magnum',
    typeCode: 'M1',
    pattern: 'flat_line',
    diameter_mm: 3.0,
    uses: ['soft shading', 'color blending', 'subtle gradients', 'portrait work'],
    styles: ['realism', 'portrait', 'watercolor'],
    techniques: ['shading', 'color_blend', 'whip_shading'],
    detailLevel: ['fine', 'medium'],
    pros: ['soft coverage', 'smooth blending', 'gentle on skin'],
    cons: ['slow for large areas', 'limited density'],
    voltage: '7.0-8.5V',
    speed: 'medium',
    depth: '1.5-2.0mm',
    skin: ['thin', 'normal']
  },

  '7M1': {
    count: 7,
    type: 'Magnum',
    typeCode: 'M1',
    pattern: 'flat_line',
    diameter_mm: 4.0,
    uses: ['smooth shading', 'color blending', 'portrait shading', 'general work'],
    styles: ['realism', 'portrait', 'neo_traditional', 'watercolor'],
    techniques: ['shading', 'color_blend', 'whip_shading'],
    detailLevel: ['medium'],
    pros: ['versatile', 'smooth coverage', 'industry standard'],
    cons: ['may be too soft for solid color', 'slower than larger mags'],
    voltage: '7.5-9.0V',
    speed: 'medium',
    depth: '1.5-2.0mm',
    skin: ['normal', 'thick']
  },

  '9M1': {
    count: 9,
    type: 'Magnum',
    typeCode: 'M1',
    pattern: 'flat_line',
    diameter_mm: 5.0,
    uses: ['general shading', 'color work', 'smooth gradients', 'large area coverage'],
    styles: ['realism', 'neo_traditional', 'japanese', 'new_school'],
    techniques: ['shading', 'color_packing', 'color_blend'],
    detailLevel: ['medium', 'bold'],
    pros: ['fast coverage', 'versatile', 'great for most work'],
    cons: ['may be too large for small details', 'requires good technique'],
    voltage: '8.0-9.5V',
    speed: 'medium to fast',
    depth: '1.5-2.0mm',
    skin: ['normal', 'thick']
  },

  '11M1': {
    count: 11,
    type: 'Magnum',
    typeCode: 'M1',
    pattern: 'flat_line',
    diameter_mm: 6.0,
    uses: ['large area shading', 'color packing', 'smooth coverage', 'background work'],
    styles: ['realism', 'neo_traditional', 'japanese', 'new_school'],
    techniques: ['shading', 'color_packing', 'color_blend'],
    detailLevel: ['medium', 'bold'],
    pros: ['fast', 'smooth coverage', 'good for large areas'],
    cons: ['too large for detail work', 'can overwork small areas'],
    voltage: '8.5-10.0V',
    speed: 'fast',
    depth: '1.5-2.0mm',
    skin: ['normal', 'thick']
  },

  '13M1': {
    count: 13,
    type: 'Magnum',
    typeCode: 'M1',
    pattern: 'flat_line',
    diameter_mm: 7.0,
    uses: ['large area filling', 'color packing', 'background shading'],
    styles: ['japanese', 'new_school', 'blackwork'],
    techniques: ['color_packing', 'shading'],
    detailLevel: ['bold'],
    pros: ['very fast', 'efficient for large areas'],
    cons: ['too large for most detail work', 'requires experience'],
    voltage: '9.0-10.5V',
    speed: 'fast',
    depth: '2.0mm',
    skin: ['thick']
  },

  '15M1': {
    count: 15,
    type: 'Magnum',
    typeCode: 'M1',
    pattern: 'flat_line',
    diameter_mm: 8.0,
    uses: ['very large area coverage', 'background shading', 'color packing'],
    styles: ['japanese', 'blackwork', 'tribal'],
    techniques: ['color_packing', 'shading'],
    detailLevel: ['bold'],
    pros: ['extremely fast', 'great for large tattoos'],
    cons: ['specialized use only', 'not versatile'],
    voltage: '9.5-11.0V',
    speed: 'fast',
    depth: '2.0-2.5mm',
    skin: ['thick']
  },

  // ═══════════════════════════════════════════════════════════
  // CURVED MAGNUM (CM)
  // ═══════════════════════════════════════════════════════════
  '7CM': {
    count: 7,
    type: 'Curved Magnum',
    typeCode: 'CM',
    pattern: 'curved_line',
    diameter_mm: 4.0,
    uses: ['soft blending', 'portrait shading', 'smooth gradients', 'delicate shading'],
    styles: ['realism', 'portrait', 'watercolor'],
    techniques: ['shading', 'color_blend', 'whip_shading'],
    detailLevel: ['medium'],
    pros: ['ultra-smooth', 'gentle on skin', 'perfect for portraits'],
    cons: ['slower coverage', 'requires skill', 'expensive'],
    voltage: '7.5-9.0V',
    speed: 'slow to medium',
    depth: '1.5-2.0mm',
    skin: ['thin', 'normal']
  },

  '9CM': {
    count: 9,
    type: 'Curved Magnum',
    typeCode: 'CM',
    pattern: 'curved_line',
    diameter_mm: 5.0,
    uses: ['smooth shading', 'blending', 'portrait work', 'realism'],
    styles: ['realism', 'portrait', 'neo_traditional'],
    techniques: ['shading', 'color_blend', 'whip_shading'],
    detailLevel: ['medium'],
    pros: ['butter-smooth', 'professional choice', 'great blending'],
    cons: ['more expensive', 'requires good technique'],
    voltage: '8.0-9.5V',
    speed: 'medium',
    depth: '1.5-2.0mm',
    skin: ['normal', 'thick']
  },

  '11CM': {
    count: 11,
    type: 'Curved Magnum',
    typeCode: 'CM',
    pattern: 'curved_line',
    diameter_mm: 6.0,
    uses: ['large area smooth shading', 'color blending', 'soft coverage'],
    styles: ['realism', 'portrait', 'neo_traditional', 'japanese'],
    techniques: ['shading', 'color_blend', 'color_packing'],
    detailLevel: ['medium', 'bold'],
    pros: ['extremely smooth', 'fast and gentle', 'professional grade'],
    cons: ['expensive', 'may be too soft for solid color'],
    voltage: '8.5-10.0V',
    speed: 'medium to fast',
    depth: '1.5-2.0mm',
    skin: ['normal', 'thick']
  },

  // ═══════════════════════════════════════════════════════════
  // FLAT (F) - Stacked Configuration
  // ═══════════════════════════════════════════════════════════
  '7F': {
    count: 7,
    type: 'Flat',
    typeCode: 'F',
    pattern: 'flat_stacked',
    diameter_mm: 4.0,
    uses: ['geometric shading', 'solid color', 'tribal work', 'bold shading'],
    styles: ['geometric', 'tribal', 'blackwork'],
    techniques: ['shading', 'color_packing'],
    detailLevel: ['medium', 'bold'],
    pros: ['very dense', 'solid coverage', 'great for geometric'],
    cons: ['harsh on skin', 'not for subtle work', 'requires experience'],
    voltage: '8.0-9.5V',
    speed: 'medium',
    depth: '1.5-2.0mm',
    skin: ['thick']
  },

  '9F': {
    count: 9,
    type: 'Flat',
    typeCode: 'F',
    pattern: 'flat_stacked',
    diameter_mm: 5.0,
    uses: ['solid color', 'tribal', 'geometric', 'cover-ups'],
    styles: ['tribal', 'geometric', 'blackwork', 'cover_up'],
    techniques: ['color_packing', 'shading'],
    detailLevel: ['bold'],
    pros: ['extremely solid', 'fast coverage', 'great for bold work'],
    cons: ['very harsh', 'not versatile', 'heavy trauma'],
    voltage: '8.5-10.0V',
    speed: 'medium to fast',
    depth: '2.0mm',
    skin: ['thick']
  },

  '15F': {
    count: 15,
    type: 'Flat',
    typeCode: 'F',
    pattern: 'flat_stacked',
    diameter_mm: 8.0,
    uses: ['very large area solid color', 'tribal', 'blackwork', 'cover-ups'],
    styles: ['tribal', 'blackwork', 'cover_up'],
    techniques: ['color_packing'],
    detailLevel: ['bold'],
    pros: ['ultra-fast', 'extremely solid', 'great for large tribal'],
    cons: ['very specialized', 'heavy on skin', 'requires expertise'],
    voltage: '9.5-11.0V',
    speed: 'fast',
    depth: '2.0-2.5mm',
    skin: ['thick']
  }
};

/**
 * Style-to-needle recommendations
 * Maps tattoo styles to recommended needle configurations
 */
const styleRecommendations = {
  japanese: {
    lining: {
      fine: ['5RL', '7RL'],
      medium: ['7RL', '9RL'],
      bold: ['9RL', '11RL']
    },
    shading: {
      fine: ['5M1', '7M1'],
      medium: ['7M1', '9M1'],
      bold: ['11M1', '13M1']
    },
    color_packing: {
      fine: ['7M1'],
      medium: ['9M1', '11M1'],
      bold: ['13M1', '15M1']
    }
  },

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
  },

  realism: {
    lining: {
      fine: ['3RL', '5RL'],
      medium: ['5RL', '7RL'],
      bold: ['7RL', '9RL']
    },
    shading: {
      fine: ['5M1', '7M1', '7CM'],
      medium: ['7M1', '9M1', '9CM'],
      bold: ['9M1', '11M1', '11CM']
    },
    color_blend: {
      fine: ['5M1', '7CM'],
      medium: ['7M1', '9CM'],
      bold: ['9M1', '11CM']
    }
  },

  fine_line: {
    lining: {
      fine: ['1RL', '3RL', '5RL'],
      medium: ['3RL', '5RL'],
      bold: ['5RL']
    },
    shading: {
      fine: ['3RL', '5RS'],
      medium: ['5RS', '5M1'],
      bold: ['5M1', '7M1']
    },
    stipple: {
      fine: ['1RL', '3RL'],
      medium: ['3RL', '5RL'],
      bold: ['5RL']
    }
  },

  watercolor: {
    shading: {
      fine: ['5M1', '7M1'],
      medium: ['7M1', '9M1', '7CM'],
      bold: ['9M1', '9CM']
    },
    color_blend: {
      fine: ['5M1', '7CM'],
      medium: ['7M1', '9CM'],
      bold: ['9M1', '11CM']
    }
  },

  neo_traditional: {
    lining: {
      fine: ['5RL', '7RL'],
      medium: ['7RL', '9RL'],
      bold: ['9RL', '11RL']
    },
    shading: {
      fine: ['7M1', '9M1'],
      medium: ['9M1', '11M1'],
      bold: ['11M1', '13M1']
    },
    color_packing: {
      fine: ['7M1'],
      medium: ['9M1', '11M1'],
      bold: ['11M1', '13M1']
    }
  },

  dotwork: {
    stipple: {
      fine: ['1RL', '3RL'],
      medium: ['3RL', '5RL'],
      bold: ['5RL', '7RL']
    },
    lining: {
      fine: ['3RL', '5RL'],
      medium: ['5RL', '7RL'],
      bold: ['7RL']
    }
  },

  tribal: {
    lining: {
      fine: ['9RL'],
      medium: ['11RL', '14RL'],
      bold: ['14RL']
    },
    shading: {
      fine: ['9RS', '11RS'],
      medium: ['11RS', '9F'],
      bold: ['9F', '15F']
    },
    color_packing: {
      fine: ['11RS'],
      medium: ['9F', '15F'],
      bold: ['15F']
    }
  },

  geometric: {
    lining: {
      fine: ['3RL', '5RL'],
      medium: ['5RL', '7RL'],
      bold: ['7RL', '9RL']
    },
    shading: {
      fine: ['5M1', '7M1'],
      medium: ['7M1', '9M1', '7F'],
      bold: ['9M1', '7F', '9F']
    }
  },

  portrait: {
    lining: {
      fine: ['3RL', '5RL'],
      medium: ['5RL', '7RL'],
      bold: ['7RL']
    },
    shading: {
      fine: ['5M1', '7M1', '7CM'],
      medium: ['7M1', '9CM'],
      bold: ['9M1', '11CM']
    },
    color_blend: {
      fine: ['7CM'],
      medium: ['7CM', '9CM'],
      bold: ['9CM', '11CM']
    }
  },

  script: {
    lining: {
      fine: ['1RL', '3RL', '5RL'],
      medium: ['3RL', '5RL', '7RL'],
      bold: ['5RL', '7RL', '9RL']
    }
  },

  cover_up: {
    lining: {
      fine: ['7RL', '9RL'],
      medium: ['9RL', '11RL'],
      bold: ['11RL', '14RL']
    },
    shading: {
      fine: ['9M1'],
      medium: ['11M1', '13M1'],
      bold: ['13M1', '15M1', '9F']
    },
    color_packing: {
      fine: ['11M1'],
      medium: ['13M1', '15M1'],
      bold: ['15M1', '9F', '15F']
    }
  },

  ornamental: {
    lining: {
      fine: ['3RL', '5RL'],
      medium: ['5RL', '7RL'],
      bold: ['7RL', '9RL']
    },
    shading: {
      fine: ['5M1', '7M1'],
      medium: ['7M1', '9M1'],
      bold: ['9M1', '11M1']
    },
    stipple: {
      fine: ['3RL'],
      medium: ['3RL', '5RL'],
      bold: ['5RL']
    }
  },

  new_school: {
    lining: {
      fine: ['5RL', '7RL'],
      medium: ['7RL', '9RL'],
      bold: ['9RL', '11RL']
    },
    shading: {
      fine: ['7M1', '9M1'],
      medium: ['9M1', '11M1'],
      bold: ['11M1', '13M1']
    },
    color_packing: {
      fine: ['9M1'],
      medium: ['11M1', '13M1'],
      bold: ['13M1', '15M1']
    }
  },

  blackwork: {
    lining: {
      fine: ['5RL', '7RL'],
      medium: ['7RL', '9RL', '11RL'],
      bold: ['11RL', '14RL']
    },
    shading: {
      fine: ['9M1', '11M1'],
      medium: ['11M1', '13M1', '9F'],
      bold: ['13M1', '15M1', '15F']
    },
    color_packing: {
      fine: ['11M1'],
      medium: ['13M1', '15M1'],
      bold: ['15M1', '9F', '15F']
    }
  },

  black_grey: {
    lining: {
      fine: ['3RL', '5RL'],
      medium: ['5RL', '7RL'],
      bold: ['7RL', '9RL']
    },
    shading: {
      fine: ['5M1', '7M1', '7CM'],
      medium: ['7M1', '9M1', '9CM'],
      bold: ['9M1', '11M1', '11CM']
    },
    whip_shading: {
      fine: ['5M1', '7M1'],
      medium: ['7M1', '9M1', '7CM'],
      bold: ['9M1', '11M1', '9CM']
    }
  }
};
