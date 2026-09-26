/**
 * Professional Tattoo Needle Selector - Internationalization Engine
 * 7 Languages: English (en), French (fr), Italian (it), German (de), Spanish (es), Dutch (nl), Portuguese (pt)
 * Poli International - Established Professional Practice
 */

(function () {
  'use strict';

  var DICTIONARY = {
  "en": {
    "app": {
      "title": "Tattoo Needle Selector",
      "subtitle": "Professional configuration advisor, blister-pack code decoder, and side-by-side needle comparator for tattoo artists and apprentices.",
      "themeToggle": "Toggle theme",
      "embedButton": "Embed Tool",
      "toolsCatalog": "Poli Tools Catalog",
      "titleTag": "Professional Tattoo Needle Selector | Poli International",
      "languageSelect": "Select language"
    },
    "nav": {
      "selector": "Quick Selector",
      "decoder": "Code Decoder",
      "comparator": "Needle Comparator",
      "reference": "Technical Reference",
      "ariaLabel": "Main Navigation"
    },
    "selector": {
      "title": "Find Your Optimal Needle",
      "subtitle": "Select your tattooing technique, artistic style, and skin condition for instant configuration recommendations.",
      "techniqueLabel": "Technique",
      "styleLabel": "Artistic Style",
      "skinTypeLabel": "Skin Type",
      "selectTechniquePrompt": "-- Select Technique --",
      "selectStylePrompt": "-- Select Style --",
      "selectSkinPrompt": "-- Select Skin Type --",
      "techniques": {
        "lining": "Lining & Outlines",
        "shading": "Shading & Blending",
        "packing": "Solid Color Packing",
        "stippling": "Stippling & Dotwork",
        "graywash": "Black & Gray / Smooth Wash"
      },
      "styles": {
        "traditional": "Traditional / Old School",
        "fineLine": "Fine Line & Micro",
        "realism": "Realism & Portraiture",
        "neoTraditional": "Neo-Traditional",
        "japanese": "Japanese / Irezumi",
        "blackwork": "Blackwork & Geometry"
      },
      "skinTypes": {
        "normal": "Normal Skin",
        "thinDelicate": "Thin / Delicate (Wrists, Ribs, Neck)",
        "thickTough": "Thick / Tough (Palms, Elbows, Back)",
        "agingMature": "Aging / Mature Skin"
      },
      "submitBtn": "Get Recommendation",
      "resetBtn": "Reset",
      "validationAlert": "Please select both a tattoo style and technique.",
      "noRecommendationAlert": "No specific recommendation found for this combination. Please try different options."
    },
    "results": {
      "title": "Recommended Needle Configuration",
      "needleCountLabel": "Needle Count",
      "configTypeLabel": "Configuration Type",
      "bestForLabel": "Best For",
      "settingsLabel": "Operating Guidelines",
      "voltageLabel": "Voltage",
      "speedLabel": "Machine Speed",
      "depthLabel": "Hanging Depth",
      "proTipsLabel": "Technical Guidance",
      "alternativesLabel": "Viable Alternatives",
      "noSelectionPrompt": "Please choose a technique and style to view recommendations.",
      "copyCode": "Copy Code",
      "copied": "Copied!",
      "diagramAriaLabel": "Needle cross section diagram",
      "defaultNeedleCode": "9RL",
      "defaultNeedleName": "9 Round Liner",
      "defaultNeedleCount": "9 needles",
      "defaultConfigType": "Round Liner (RL)"
    },
    "decoder": {
      "title": "Blister-Pack Code Decoder",
      "subtitle": "Enter any standard tattoo needle packaging code (e.g., 9RL, 1209RL, 1011M1, 15RS, 7CM) to decode its physical specifications.",
      "inputLabel": "Packaging Code",
      "placeholder": "e.g., 1209RL, 11M1, 15RS, 7CM",
      "decodeBtn": "Decode Needle",
      "notFoundTitle": "Needle Code Not Found",
      "notFoundDesc": "The code '{code}' was not found in the technical database. Try codes like 9RL, 1209RL, 11M1, 15RS, 7CM, or 9F.",
      "breakdownTitle": "Needle Breakdown",
      "countExplanation": "Number of micro-needles in cluster",
      "typeExplanation": "Cluster grouping configuration",
      "patternLabel": "Pattern",
      "coverageLabel": "Cluster Diameter",
      "bestForTitle": "Optimal Applications",
      "settingsTitle": "Recommended Machine Settings",
      "prosTitle": "Clinical Advantages",
      "consTitle": "Technique Considerations",
      "inputAriaLabel": "Enter needle code",
      "emptyCodeAlert": "Please enter a needle code (e.g., 9RL, 1209RL, 11M1)",
      "blisterGauge": "Blister Gauge:",
      "diagramAriaLabel": "Decoded cluster diagram"
    },
    "comparator": {
      "title": "Side-by-Side Needle Comparator",
      "subtitle": "Compare cluster cross-sections, effective coverage diameter, and working settings for up to three needle configurations.",
      "slot1Label": "First Needle",
      "slot2Label": "Second Needle",
      "slot3Label": "Third Needle (Optional)",
      "chooseNeedlePrompt": "-- Choose a Needle --",
      "noneOptional": "-- None (Optional) --",
      "compareBtn": "Compare Configurations",
      "minSelectionAlert": "Please select at least two needle configurations to compare.",
      "coverage": "Effective Coverage",
      "pattern": "Arrangement Pattern",
      "voltage": "Working Voltage",
      "bestFor": "Primary Uses",
      "diagramAriaLabel": "Comparison cluster diagram"
    },
    "reference": {
      "title": "Technical Needle Matrix",
      "subtitle": "Complete library of professional tattoo needle configurations. Click any configuration to inspect in the decoder.",
      "tabRL": "Round Liners (RL)",
      "tabRS": "Round Shaders (RS)",
      "tabM1": "Weaved Magnums (M1)",
      "tabCM": "Curved Magnums (CM)",
      "tabF": "Flats (F)",
      "hideChart": "Hide Chart",
      "showChart": "Show Chart"
    },
    "embedModal": {
      "title": "Embed Needle Selector on Your Studio Website",
      "subtitle": "Add this free technical tool directly to your website for your studio team and apprentices.",
      "codeLabel": "HTML Embed Snippet (Self-Contained Responsive Iframe)",
      "copyBtn": "Copy Snippet",
      "copied": "Snippet copied to clipboard!",
      "closeBtn": "Close",
      "tip": "Pastes cleanly into WordPress, Squarespace, Webflow, Shopify, or custom HTML.",
      "closeAriaLabel": "Close embed modal",
      "copyFailed": "Failed to copy code. Please select and copy manually."
    },
    "footer": {
      "brandNote": "Published by Poli International as a free professional tool for tattoo artists, piercers, and studio owners.",
      "toolsLink": "Explore All Poli Studio Tools",
      "disclaimer": "Operating voltages, stroke lengths, and needle hanging depths are baseline technical recommendations from established professional practice. Always adjust machine settings to client skin response, machine torque, and stroke geometry.",
      "websiteLink": "Poli International Official Website",
      "githubLink": "GitHub Repository"
    },
    "embed": {
      "titleTag": "Tattoo Needle Selector Widget | Poli International",
      "poweredBy": "Powered by",
      "openFull": "Open Full Version ↗"
    },
    "gauges": {
      "10": "#10 (0.30mm Bugpin)",
      "12": "#12 (0.35mm Standard)",
      "08": "#08 (0.25mm Micro Bugpin)",
      "06": "#06 (0.20mm Ultra Micro)"
    },
    "needleTypes": {
      "RL": "Round Liner",
      "RS": "Round Shader",
      "M1": "Magnum",
      "CM": "Curved Magnum",
      "F": "Flat"
    },
    "patterns": {
      "single": "single",
      "tight_round": "tight round",
      "loose_round": "loose round",
      "flat_line": "flat line",
      "curved_line": "curved line",
      "flat_stacked": "flat stacked"
    },
    "speeds": {
      "very_slow": "very slow",
      "slow_to_medium": "slow to medium",
      "medium": "medium",
      "medium_to_fast": "medium to fast",
      "fast": "fast"
    },
    "needles": {
      "1RL": {
        "type": "Round Liner",
        "speed": "very slow",
        "uses": [
          "ultra-fine details",
          "micro-tattoos",
          "freckle tattoos",
          "cosmetic tattoos"
        ],
        "pros": [
          "extremely precise",
          "minimal trauma",
          "perfect for tiny details"
        ],
        "cons": [
          "very slow",
          "requires expert hand",
          "easy to overwork"
        ]
      },
      "3RL": {
        "type": "Round Liner",
        "speed": "slow to medium",
        "uses": [
          "fine details",
          "small lettering",
          "delicate lines",
          "portraits"
        ],
        "pros": [
          "precise",
          "minimal trauma",
          "fine control",
          "good for learning"
        ],
        "cons": [
          "slow coverage",
          "requires steady hand",
          "not for bold work"
        ]
      },
      "5RL": {
        "type": "Round Liner",
        "speed": "medium",
        "uses": [
          "fine to medium lines",
          "portraits",
          "script",
          "detailed work"
        ],
        "pros": [
          "versatile",
          "good balance",
          "reliable",
          "industry standard"
        ],
        "cons": [
          "may be too fine for bold work",
          "slower than larger needles"
        ]
      },
      "7RL": {
        "type": "Round Liner",
        "speed": "medium",
        "uses": [
          "medium lines",
          "neo-traditional",
          "japanese",
          "general lining"
        ],
        "pros": [
          "versatile",
          "good for most styles",
          "clean lines",
          "popular choice"
        ],
        "cons": [
          "may be too thick for fine details",
          "may be too thin for bold traditional"
        ]
      },
      "9RL": {
        "type": "Round Liner",
        "speed": "medium to fast",
        "uses": [
          "bold lines",
          "traditional tattoos",
          "strong outlines",
          "tribal"
        ],
        "pros": [
          "strong lines",
          "fast coverage",
          "great for traditional",
          "reliable"
        ],
        "cons": [
          "too thick for fine work",
          "can be harsh on thin skin"
        ]
      },
      "11RL": {
        "type": "Round Liner",
        "speed": "medium to fast",
        "uses": [
          "very bold lines",
          "traditional tattoos",
          "large tribal",
          "thick outlines"
        ],
        "pros": [
          "very bold",
          "fast",
          "great for thick skin",
          "strong coverage"
        ],
        "cons": [
          "too bold for most work",
          "requires experience",
          "can cause blowouts"
        ]
      },
      "14RL": {
        "type": "Round Liner",
        "speed": "fast",
        "uses": [
          "extra bold lines",
          "large tribal",
          "thick traditional",
          "cover-ups"
        ],
        "pros": [
          "extra bold",
          "fast coverage",
          "good for cover-ups"
        ],
        "cons": [
          "very specialized",
          "risk of blowouts",
          "requires expert control"
        ]
      },
      "5RS": {
        "type": "Round Shader",
        "speed": "slow to medium",
        "uses": [
          "soft shading",
          "portrait shading",
          "color blending",
          "gentle gradients"
        ],
        "pros": [
          "soft shading",
          "gentle on skin",
          "good for portraits"
        ],
        "cons": [
          "slow coverage",
          "limited density",
          "not for bold shading"
        ]
      },
      "7RS": {
        "type": "Round Shader",
        "speed": "medium",
        "uses": [
          "medium shading",
          "color work",
          "gradients",
          "general shading"
        ],
        "pros": [
          "versatile",
          "good balance",
          "reliable shading"
        ],
        "cons": [
          "not as soft as smaller RS",
          "not as dense as larger RS"
        ]
      },
      "9RS": {
        "type": "Round Shader",
        "speed": "medium",
        "uses": [
          "solid shading",
          "color packing",
          "traditional shading",
          "general work"
        ],
        "pros": [
          "solid coverage",
          "good for traditional",
          "reliable"
        ],
        "cons": [
          "may be too dense for subtle work",
          "heavier on skin"
        ]
      },
      "11RS": {
        "type": "Round Shader",
        "speed": "medium to fast",
        "uses": [
          "dense shading",
          "solid color",
          "bold shading",
          "cover-ups"
        ],
        "pros": [
          "very solid",
          "fast coverage",
          "great for bold work"
        ],
        "cons": [
          "not for subtle work",
          "can be harsh",
          "requires experience"
        ]
      },
      "5M1": {
        "type": "Magnum",
        "speed": "medium",
        "uses": [
          "soft shading",
          "color blending",
          "subtle gradients",
          "portrait work"
        ],
        "pros": [
          "soft coverage",
          "smooth blending",
          "gentle on skin"
        ],
        "cons": [
          "slow for large areas",
          "limited density"
        ]
      },
      "7M1": {
        "type": "Magnum",
        "speed": "medium",
        "uses": [
          "smooth shading",
          "color blending",
          "portrait shading",
          "general work"
        ],
        "pros": [
          "versatile",
          "smooth coverage",
          "industry standard"
        ],
        "cons": [
          "may be too soft for solid color",
          "slower than larger mags"
        ]
      },
      "9M1": {
        "type": "Magnum",
        "speed": "medium to fast",
        "uses": [
          "general shading",
          "color work",
          "smooth gradients",
          "large area coverage"
        ],
        "pros": [
          "fast coverage",
          "versatile",
          "great for most work"
        ],
        "cons": [
          "may be too large for small details",
          "requires good technique"
        ]
      },
      "11M1": {
        "type": "Magnum",
        "speed": "fast",
        "uses": [
          "large area shading",
          "color packing",
          "smooth coverage",
          "background work"
        ],
        "pros": [
          "fast",
          "smooth coverage",
          "good for large areas"
        ],
        "cons": [
          "too large for detail work",
          "can overwork small areas"
        ]
      },
      "13M1": {
        "type": "Magnum",
        "speed": "fast",
        "uses": [
          "large area filling",
          "color packing",
          "background shading"
        ],
        "pros": [
          "very fast",
          "efficient for large areas"
        ],
        "cons": [
          "too large for most detail work",
          "requires experience"
        ]
      },
      "15M1": {
        "type": "Magnum",
        "speed": "fast",
        "uses": [
          "very large area coverage",
          "background shading",
          "color packing"
        ],
        "pros": [
          "extremely fast",
          "great for large tattoos"
        ],
        "cons": [
          "specialized use only",
          "not versatile"
        ]
      },
      "7CM": {
        "type": "Curved Magnum",
        "speed": "slow to medium",
        "uses": [
          "soft blending",
          "portrait shading",
          "smooth gradients",
          "delicate shading"
        ],
        "pros": [
          "ultra-smooth",
          "gentle on skin",
          "perfect for portraits"
        ],
        "cons": [
          "slower coverage",
          "requires skill",
          "expensive"
        ]
      },
      "9CM": {
        "type": "Curved Magnum",
        "speed": "medium",
        "uses": [
          "smooth shading",
          "blending",
          "portrait work",
          "realism"
        ],
        "pros": [
          "butter-smooth",
          "professional choice",
          "great blending"
        ],
        "cons": [
          "more expensive",
          "requires good technique"
        ]
      },
      "11CM": {
        "type": "Curved Magnum",
        "speed": "medium to fast",
        "uses": [
          "large area smooth shading",
          "color blending",
          "soft coverage"
        ],
        "pros": [
          "extremely smooth",
          "fast and gentle",
          "professional grade"
        ],
        "cons": [
          "expensive",
          "may be too soft for solid color"
        ]
      },
      "7F": {
        "type": "Flat",
        "speed": "medium",
        "uses": [
          "geometric shading",
          "solid color",
          "tribal work",
          "bold shading"
        ],
        "pros": [
          "very dense",
          "solid coverage",
          "great for geometric"
        ],
        "cons": [
          "harsh on skin",
          "not for subtle work",
          "requires experience"
        ]
      },
      "9F": {
        "type": "Flat",
        "speed": "medium to fast",
        "uses": [
          "solid color",
          "tribal",
          "geometric",
          "cover-ups"
        ],
        "pros": [
          "extremely solid",
          "fast coverage",
          "great for bold work"
        ],
        "cons": [
          "very harsh",
          "not versatile",
          "heavy trauma"
        ]
      },
      "15F": {
        "type": "Flat",
        "speed": "fast",
        "uses": [
          "very large area solid color",
          "tribal",
          "blackwork",
          "cover-ups"
        ],
        "pros": [
          "ultra-fast",
          "extremely solid",
          "great for large tribal"
        ],
        "cons": [
          "very specialized",
          "heavy on skin",
          "requires expertise"
        ]
      }
    },
    "toolsModal": {
      "title": "Poli Studio Tools Suite",
      "subtitle": "Free professional digital utilities for tattoo artists, piercers, and studio owners.",
      "visitAll": "Open Full Web Catalog",
      "closeBtn": "Close",
      "closeAriaLabel": "Close catalog modal",
      "sizerName": "Body Piercing Sizer",
      "sizerDesc": "Interactive gauge, diameter, and length sizing calculator for anatomical piercing placements.",
      "crmName": "Studio CRM",
      "crmDesc": "Local studio management system for client histories, appointments, and daily procedure tracking.",
      "benchmarkName": "Studio Pricing Benchmark",
      "benchmarkDesc": "Regional rate card comparisons and pricing calculators for body art studios.",
      "consentName": "Consent & Health Intake Form",
      "consentDesc": "Digital intake forms, procedure disclosure statements, and client record export.",
      "logName": "Studio Sterilization Log",
      "logDesc": "Autoclave cycle tracking, spore testing documentation, and instrument processing records."
    },
    "languages": {
      "en": "English (EN)",
      "fr": "French (FR)",
      "it": "Italian (IT)",
      "de": "German (DE)",
      "es": "Spanish (ES)",
      "nl": "Dutch (NL)",
      "pt": "Portuguese (PT)"
    }
  },
  "fr": {
    "app": {
      "title": "Sélecteur d'Aiguilles de Tatouage",
      "subtitle": "Conseiller de configuration technique, décodeur de blister et comparateur d'aiguilles pour tatoueurs professionnels et apprentis.",
      "themeToggle": "Changer de thème",
      "embedButton": "Intégrer l'outil",
      "toolsCatalog": "Catalogue des Outils Poli",
      "titleTag": "Sélecteur Professionnel d'Aiguilles de Tatouage | Poli International",
      "languageSelect": "Sélectionner la langue"
    },
    "nav": {
      "selector": "Sélecteur Rapide",
      "decoder": "Décodeur de Code",
      "comparator": "Comparateur d'Aiguilles",
      "reference": "Référentiel Technique",
      "ariaLabel": "Navigation principale"
    },
    "selector": {
      "title": "Trouvez Votre Aiguille Optimale",
      "subtitle": "Sélectionnez votre technique de tatouage, votre style artistique et le type de peau pour des recommandations de configuration immédiates.",
      "techniqueLabel": "Technique de travail",
      "styleLabel": "Style Artistique",
      "skinTypeLabel": "Type de Peau",
      "selectTechniquePrompt": "-- Sélectionner une Technique --",
      "selectStylePrompt": "-- Sélectionner un Style --",
      "selectSkinPrompt": "-- Sélectionner un Type de Peau --",
      "techniques": {
        "lining": "Traçage et Contours",
        "shading": "Ombrage et Dégradés",
        "packing": "Remplissage Couleur Dense",
        "stippling": "Pointillisme et Dotwork",
        "graywash": "Noir et Gris / Lavis Fondu"
      },
      "styles": {
        "traditional": "Traditionnel / Old School",
        "fineLine": "Ligne Fine et Micro",
        "realism": "Réalisme et Portrait",
        "neoTraditional": "Néo-Traditionnel",
        "japanese": "Japonais / Irezumi",
        "blackwork": "Blackwork et Géométrie"
      },
      "skinTypes": {
        "normal": "Peau Normale",
        "thinDelicate": "Fine / Délicate (Poignets, Côtes, Cou)",
        "thickTough": "Épaisse / Résistante (Paumes, Coudes, Dos)",
        "agingMature": "Mature / Fragilisée"
      },
      "submitBtn": "Obtenir la Recommandation",
      "resetBtn": "Réinitialiser",
      "validationAlert": "Veuillez sélectionner à la fois un style de tatouage et une technique.",
      "noRecommendationAlert": "Aucune recommandation spécifique trouvée pour cette combinaison. Veuillez essayer d'autres options."
    },
    "results": {
      "title": "Configuration d'Aiguille Recommandée",
      "needleCountLabel": "Nombre d'Aiguilles",
      "configTypeLabel": "Type de Configuration",
      "bestForLabel": "Idéal Pour",
      "settingsLabel": "Paramètres Opératoires",
      "voltageLabel": "Tension",
      "speedLabel": "Vitesse Machine",
      "depthLabel": "Sortie d'Aiguille",
      "proTipsLabel": "Conseils Techniques",
      "alternativesLabel": "Alternatives Possibles",
      "noSelectionPrompt": "Veuillez choisir une technique et un style pour afficher les recommandations.",
      "copyCode": "Copier le Code",
      "copied": "Copié !",
      "diagramAriaLabel": "Schéma de coupe transversale d'aiguille",
      "defaultNeedleCode": "9RL",
      "defaultNeedleName": "9 Traceur rond",
      "defaultNeedleCount": "9 aiguilles",
      "defaultConfigType": "Traceur rond (RL)"
    },
    "decoder": {
      "title": "Décodeur de Code Blister",
      "subtitle": "Entrez n'importe quel code d'emballage d'aiguille (ex. 9RL, 1209RL, 1011M1, 15RS, 7CM) pour décoder ses spécifications physiques.",
      "inputLabel": "Code d'Emballage",
      "placeholder": "ex. 1209RL, 11M1, 15RS, 7CM",
      "decodeBtn": "Décoder l'Aiguille",
      "notFoundTitle": "Code d'Aiguille Non Trouvé",
      "notFoundDesc": "Le code '{code}' n'a pas été trouvé dans la base technique. Essayez des codes comme 9RL, 1209RL, 11M1, 15RS, 7CM ou 9F.",
      "breakdownTitle": "Analyse de l'Aiguille",
      "countExplanation": "Nombre de micro-aiguilles dans le faisceau",
      "typeExplanation": "Configuration de regroupement du faisceau",
      "patternLabel": "Disposition",
      "coverageLabel": "Diamètre du Faisceau",
      "bestForTitle": "Applications Idéales",
      "settingsTitle": "Réglages Machine Conseillés",
      "prosTitle": "Avantages Cliniques",
      "consTitle": "Considérations Techniques",
      "inputAriaLabel": "Saisir le code d'aiguille",
      "emptyCodeAlert": "Veuillez entrer un code d'aiguille (ex. 9RL, 1209RL, 11M1)",
      "blisterGauge": "Jauge Blister :",
      "diagramAriaLabel": "Schéma du faisceau décodé"
    },
    "comparator": {
      "title": "Comparateur d'Aiguilles Côte à Côte",
      "subtitle": "Comparez la section des faisceaux, le diamètre de couverture effectif et les réglages de travail pour un maximum de trois configurations.",
      "slot1Label": "Première Aiguille",
      "slot2Label": "Deuxième Aiguille",
      "slot3Label": "Troisième Aiguille (Optionnelle)",
      "chooseNeedlePrompt": "-- Choisir une Aiguille --",
      "noneOptional": "-- Aucune (Optionnel) --",
      "compareBtn": "Comparer les Configurations",
      "minSelectionAlert": "Veuillez sélectionner au moins deux configurations d'aiguilles à comparer.",
      "coverage": "Couverture Effective",
      "pattern": "Disposition du Faisceau",
      "voltage": "Tension de Travail",
      "bestFor": "Usages Principaux",
      "diagramAriaLabel": "Schéma comparatif des faisceaux"
    },
    "reference": {
      "title": "Matrice Technique des Aiguilles",
      "subtitle": "Bibliothèque complète des configurations professionnelles d'aiguilles de tatouage. Cliquez sur une configuration pour l'inspecter dans le décodeur.",
      "tabRL": "Traceurs Ronds (RL)",
      "tabRS": "Ombreurs Ronds (RS)",
      "tabM1": "Magnums Entrelacés (M1)",
      "tabCM": "Magnums Courbés (CM)",
      "tabF": "Plats (F)",
      "hideChart": "Masquer le Tableau",
      "showChart": "Afficher le Tableau"
    },
    "embedModal": {
      "title": "Intégrez le Sélecteur d'Aiguilles sur le Site de Votre Studio",
      "subtitle": "Ajoutez cet outil technique gratuit directement sur votre site web pour vos artistes et apprentis.",
      "codeLabel": "Extrait d'Intégration HTML (Iframe Responsive Autonome)",
      "copyBtn": "Copier l'Extrait",
      "copied": "Extrait copié dans le presse-papiers !",
      "closeBtn": "Fermer",
      "tip": "S'insère parfaitement dans WordPress, Squarespace, Webflow, Shopify ou du HTML personnalisé.",
      "closeAriaLabel": "Fermer la boîte modale d'intégration",
      "copyFailed": "Échec de la copie du code. Veuillez le sélectionner et le copier manuellement."
    },
    "footer": {
      "brandNote": "Publié par Poli International comme outil professionnel gratuit pour tatoueurs, perceurs et gérants de studio.",
      "toolsLink": "Découvrir Tous les Outils Poli Studio",
      "disclaimer": "Les tensions d'utilisation, débattements et sorties d'aiguille sont des recommandations techniques de base issues de la pratique professionnelle établie. Ajustez toujours les réglages machine selon la réponse cutanée du client, le couple moteur et la frappe.",
      "websiteLink": "Site Officiel de Poli International",
      "githubLink": "Dépôt GitHub"
    },
    "embed": {
      "titleTag": "Widget Sélecteur d'Aiguilles de Tatouage | Poli International",
      "poweredBy": "Propulsé par",
      "openFull": "Ouvrir la Version Complète ↗"
    },
    "gauges": {
      "10": "#10 (0,30 mm Bugpin fin)",
      "12": "#12 (0,35 mm Standard classique)",
      "08": "#08 (0,25 mm Micro Bugpin très fin)",
      "06": "#06 (0,20 mm Ultra Micro ultra-fin)"
    },
    "needleTypes": {
      "RL": "Traceur rond",
      "RS": "Ombreur rond",
      "M1": "Magnum entrelacé",
      "CM": "Magnum courbé",
      "F": "Aiguille plate (Flat)"
    },
    "patterns": {
      "single": "aiguille unique",
      "tight_round": "rond serré",
      "loose_round": "rond ouvert",
      "flat_line": "ligne plate",
      "curved_line": "ligne courbée",
      "flat_stacked": "plat superposé"
    },
    "speeds": {
      "very_slow": "très lente",
      "slow_to_medium": "lente à moyenne",
      "medium": "moyenne",
      "medium_to_fast": "moyenne à rapide",
      "fast": "rapide"
    },
    "needles": {
      "1RL": {
        "type": "Traceur rond",
        "speed": "très lente",
        "uses": [
          "détails ultra-fins",
          "micro-tatouages",
          "taches de rousseur cosmétiques",
          "tatouages cosmétiques"
        ],
        "pros": [
          "extrêmement précis",
          "traumatisme cutané minime",
          "parfait pour les minuscules détails"
        ],
        "cons": [
          "progression particulièrement lente",
          "exige une main experte",
          "risque élevé de surmener la peau"
        ]
      },
      "3RL": {
        "type": "Traceur rond",
        "speed": "lente à moyenne",
        "uses": [
          "détails fins",
          "petits lettrages précis",
          "lignes délicates",
          "portraits réalistes"
        ],
        "pros": [
          "grande précision de guidage",
          "traumatisme cutané minime",
          "contrôle minutieux",
          "parfait pour l'apprentissage"
        ],
        "cons": [
          "vitesse de couverture lente",
          "nécessite une main très stable",
          "inadapté aux styles très épais"
        ]
      },
      "5RL": {
        "type": "Traceur rond",
        "speed": "moyenne",
        "uses": [
          "lignes fines à moyennes",
          "portraits réalistes",
          "lettrages et écritures",
          "travaux de précision"
        ],
        "pros": [
          "extrêmement polyvalent",
          "excellent équilibre",
          "fiabilité constante",
          "norme incontournable du secteur"
        ],
        "cons": [
          "peut manquer d'épaisseur pour les styles gras",
          "plus lent que les faisceaux plus larges"
        ]
      },
      "7RL": {
        "type": "Traceur rond",
        "speed": "moyenne",
        "uses": [
          "lignes de calibre moyen",
          "style néo-traditionnel",
          "style japonais Irezumi",
          "traçage général"
        ],
        "pros": [
          "extrêmement polyvalent",
          "polyvalent pour la plupart des styles",
          "lignes nettes et propres",
          "choix très apprécié des artistes"
        ],
        "cons": [
          "trop épais pour les détails d'orfèvre",
          "trop fin pour le traditionnel épais"
        ]
      },
      "9RL": {
        "type": "Traceur rond",
        "speed": "moyenne à rapide",
        "uses": [
          "lignes épaisses",
          "tatouages traditionnels",
          "contours puissants",
          "motifs tribaux"
        ],
        "pros": [
          "lignes solides et franches",
          "couverture rapide",
          "incontournable pour le traditionnel",
          "fiabilité constante"
        ],
        "cons": [
          "trop épais pour les pièces fines",
          "risque d'agresser les peaux fines"
        ]
      },
      "11RL": {
        "type": "Traceur rond",
        "speed": "moyenne à rapide",
        "uses": [
          "lignes très marquées",
          "tatouages traditionnels",
          "grands motifs tribaux",
          "contours gras"
        ],
        "pros": [
          "impact visuel très affirmé",
          "rapide à l'exécution",
          "efficace sur peau épaisse",
          "pouvoir couvrant puissant"
        ],
        "cons": [
          "trop épais pour la majorité des travaux",
          "exige de l'expérience de pratique",
          "risque de fusée d'encre (blowout)"
        ]
      },
      "14RL": {
        "type": "Traceur rond",
        "speed": "rapide",
        "uses": [
          "lignes extra larges",
          "grands motifs tribaux",
          "traits traditionnels épais",
          "recouvrements"
        ],
        "pros": [
          "tracé extra gras",
          "couverture rapide",
          "recommandé pour les recouvrements"
        ],
        "cons": [
          "application hautement spécialisée",
          "risque de fusée sous-cutanée",
          "impose un contrôle d'expert"
        ]
      },
      "5RS": {
        "type": "Ombreur rond",
        "speed": "lente à moyenne",
        "uses": [
          "ombrage vaporeux",
          "ombrage de portraits",
          "fondus de couleurs",
          "dégradés subtils"
        ],
        "pros": [
          "ombrage doux et diffus",
          "doux pour l'épiderme",
          "recommandé pour les portraits"
        ],
        "cons": [
          "vitesse de couverture lente",
          "densité d'ombrage limitée",
          "inadapté à l'ombrage saturé"
        ]
      },
      "7RS": {
        "type": "Ombreur rond",
        "speed": "moyenne",
        "uses": [
          "ombrage d'intensité moyenne",
          "pièces en couleur",
          "dégradés continus",
          "ombrage général"
        ],
        "pros": [
          "extrêmement polyvalent",
          "excellent équilibre",
          "ombrage régulier et fiable"
        ],
        "cons": [
          "moins doux qu'un petit calibre RS",
          "moins dense qu'un gros calibre RS"
        ]
      },
      "9RS": {
        "type": "Ombreur rond",
        "speed": "moyenne",
        "uses": [
          "ombrage dense et solide",
          "remplissage couleur",
          "ombrage traditionnel",
          "applications courantes"
        ],
        "pros": [
          "couverture dense et opaque",
          "parfait pour le style traditionnel",
          "fiabilité constante"
        ],
        "cons": [
          "peut être trop dense pour un travail subtil",
          "impact mécanique plus lourd"
        ]
      },
      "11RS": {
        "type": "Ombreur rond",
        "speed": "moyenne à rapide",
        "uses": [
          "ombrage dense",
          "couleur pleine et opaque",
          "ombrage prononcé",
          "recouvrements"
        ],
        "pros": [
          "densité parfaitement opaque",
          "couverture rapide",
          "idéal pour les pièces affirmées"
        ],
        "cons": [
          "inapproprié aux nuances discrètes",
          "peut être agressif pour la peau",
          "exige de l'expérience de pratique"
        ]
      },
      "5M1": {
        "type": "Magnum entrelacé",
        "speed": "moyenne",
        "uses": [
          "ombrage vaporeux",
          "fondus de couleurs",
          "dégradés fins et légers",
          "travaux de portrait réaliste"
        ],
        "pros": [
          "couverture douce et légère",
          "fondus doux et réguliers",
          "doux pour l'épiderme"
        ],
        "cons": [
          "trop lent pour les grandes surfaces",
          "densité d'ombrage limitée"
        ]
      },
      "7M1": {
        "type": "Magnum entrelacé",
        "speed": "moyenne",
        "uses": [
          "ombrage doux et régulier",
          "fondus de couleurs",
          "ombrage de portraits",
          "applications courantes"
        ],
        "pros": [
          "extrêmement polyvalent",
          "couverture fluide et continue",
          "norme incontournable du secteur"
        ],
        "cons": [
          "peut manquer de vigueur pour la couleur unie",
          "plus lent que les magnums de plus gros calibre"
        ]
      },
      "9M1": {
        "type": "Magnum entrelacé",
        "speed": "moyenne à rapide",
        "uses": [
          "ombrage général",
          "pièces en couleur",
          "dégradés doux et progressifs",
          "couverture de grandes zones"
        ],
        "pros": [
          "couverture rapide",
          "extrêmement polyvalent",
          "très polyvalent au quotidien"
        ],
        "cons": [
          "faisceau trop large pour les détails minuscules",
          "nécessite une technique irréprochable"
        ]
      },
      "11M1": {
        "type": "Magnum entrelacé",
        "speed": "rapide",
        "uses": [
          "ombrage de grandes surfaces",
          "remplissage couleur",
          "couverture douce et homogène",
          "fonds et arrière-plans"
        ],
        "pros": [
          "rapide à l'exécution",
          "couverture fluide et continue",
          "adapté aux grandes surfaces"
        ],
        "cons": [
          "faisceau trop grand pour les travaux de précision",
          "peut surmener les petites surfaces"
        ]
      },
      "13M1": {
        "type": "Magnum entrelacé",
        "speed": "rapide",
        "uses": [
          "remplissage de vastes surfaces",
          "remplissage couleur",
          "ombrage d'arrière-plan"
        ],
        "pros": [
          "vitesse d'exécution très élevée",
          "efficace pour les grandes surfaces"
        ],
        "cons": [
          "trop imposant pour la plupart des détails",
          "exige de l'expérience de pratique"
        ]
      },
      "15M1": {
        "type": "Magnum entrelacé",
        "speed": "rapide",
        "uses": [
          "couverture de très grandes surfaces",
          "ombrage d'arrière-plan",
          "remplissage couleur"
        ],
        "pros": [
          "extrêmement rapide",
          "parfait pour les grandes pièces"
        ],
        "cons": [
          "réservé à un usage très spécifique",
          "champ d'application restreint"
        ]
      },
      "7CM": {
        "type": "Magnum courbé",
        "speed": "lente à moyenne",
        "uses": [
          "fondus doux sans rupture",
          "ombrage de portraits",
          "dégradés doux et progressifs",
          "ombrage délicat"
        ],
        "pros": [
          "toucher ultra-doux",
          "doux pour l'épiderme",
          "inégalé pour les portraits"
        ],
        "cons": [
          "couverture plus lente",
          "exige une dextérité confirmée",
          "coût unitaire plus élevé"
        ]
      },
      "9CM": {
        "type": "Magnum courbé",
        "speed": "moyenne",
        "uses": [
          "ombrage doux et régulier",
          "fondus et dégradés",
          "travaux de portrait réaliste",
          "tatouage réaliste"
        ],
        "pros": [
          "douceur veloutée incomparable",
          "choix des professionnels avertis",
          "remarquable fondu des nuances"
        ],
        "cons": [
          "coût plus onéreux",
          "nécessite une technique irréprochable"
        ]
      },
      "11CM": {
        "type": "Magnum courbé",
        "speed": "moyenne à rapide",
        "uses": [
          "ombrage fluide sur grandes surfaces",
          "fondus de couleurs",
          "couverture diffuse"
        ],
        "pros": [
          "extrêmement soyeux",
          "rapide et doux pour la peau",
          "qualité professionnelle certifiée"
        ],
        "cons": [
          "coût unitaire plus élevé",
          "peut manquer de vigueur pour la couleur unie"
        ]
      },
      "7F": {
        "type": "Aiguille plate (Flat)",
        "speed": "moyenne",
        "uses": [
          "ombrage géométrique",
          "couleur pleine et opaque",
          "pièces tribales",
          "ombrage prononcé"
        ],
        "pros": [
          "densité très élevée",
          "couverture dense et opaque",
          "recommandé pour le géométrique"
        ],
        "cons": [
          "agressif pour le tissu cutané",
          "inapproprié aux nuances discrètes",
          "exige de l'expérience de pratique"
        ]
      },
      "9F": {
        "type": "Aiguille plate (Flat)",
        "speed": "moyenne à rapide",
        "uses": [
          "couleur pleine et opaque",
          "motifs tribaux",
          "motifs géométriques",
          "recouvrements"
        ],
        "pros": [
          "solidité extrême",
          "couverture rapide",
          "idéal pour les pièces affirmées"
        ],
        "cons": [
          "extrêmement traumatisant pour la peau",
          "champ d'application restreint",
          "traumatisme cutané marqué"
        ]
      },
      "15F": {
        "type": "Aiguille plate (Flat)",
        "speed": "rapide",
        "uses": [
          "couleur pleine sur très grandes zones",
          "motifs tribaux",
          "tatouage blackwork",
          "recouvrements"
        ],
        "pros": [
          "cadence ultra-rapide",
          "solidité extrême",
          "idéal pour les grands tribaux"
        ],
        "cons": [
          "application hautement spécialisée",
          "sollicitation cutanée importante",
          "demande un réel savoir-faire"
        ]
      }
    },
    "toolsModal": {
      "title": "Suite d'Outils de Studio Poli",
      "subtitle": "Utilitaires numériques professionnels gratuits pour tatoueurs, perceurs et gérants de studio.",
      "visitAll": "Ouvrir le catalogue web complet",
      "closeBtn": "Fermer",
      "closeAriaLabel": "Fermer la boîte de catalogue",
      "sizerName": "Calibreur de Piercing Corporel",
      "sizerDesc": "Calculateur interactif de calibre, diamètre et longueur pour les emplacements anatomiques de piercing.",
      "crmName": "CRM de Studio",
      "crmDesc": "Système de gestion de studio local pour historiques clients, rendez-vous et suivi quotidien des actes.",
      "benchmarkName": "Indicateur Tarifaire de Studio",
      "benchmarkDesc": "Comparatifs régionaux de grilles tarifaires et calculateurs de prix pour studios d'art corporel.",
      "consentName": "Formulaire de Consentement et Santé",
      "consentDesc": "Formulaires numériques d'admission, déclarations préalables aux actes et export des dossiers clients.",
      "logName": "Registre de Stérilisation de Studio",
      "logDesc": "Suivi des cycles d'autoclave, documentation des tests de spores et traçabilité des instruments."
    },
    "languages": {
      "en": "Anglais (EN)",
      "fr": "Français (FR)",
      "it": "Italien (IT)",
      "de": "Allemand (DE)",
      "es": "Espagnol (ES)",
      "nl": "Néerlandais (NL)",
      "pt": "Portugais (PT)"
    }
  },
  "it": {
    "app": {
      "title": "Selettore Aghi per Tatuaggio",
      "subtitle": "Consulente tecnico di configurazione, decodificatore di codici blister e comparatore di aghi per tatuatori professionisti e apprendisti.",
      "themeToggle": "Cambia tema",
      "embedButton": "Incorpora strumento",
      "toolsCatalog": "Catalogo Strumenti Poli",
      "titleTag": "Selettore Professionale Aghi per Tatuaggio | Poli International",
      "languageSelect": "Seleziona la lingua"
    },
    "nav": {
      "selector": "Selettore Rapido",
      "decoder": "Decodificatore Codice",
      "comparator": "Comparatore Aghi",
      "reference": "Riferimento Tecnico",
      "ariaLabel": "Navigazione principale"
    },
    "selector": {
      "title": "Trova il Tuo Ago Ottimale",
      "subtitle": "Seleziona la tua tecnica di tatuaggio, lo stile artistico e la condizione della pelle per ricevere raccomandazioni istantanee di configurazione.",
      "techniqueLabel": "Tecnica",
      "styleLabel": "Stile Artistico",
      "skinTypeLabel": "Tipo di Pelle",
      "selectTechniquePrompt": "-- Seleziona Tecnica --",
      "selectStylePrompt": "-- Seleziona Stile --",
      "selectSkinPrompt": "-- Seleziona Tipo di Pelle --",
      "techniques": {
        "lining": "Linee e Contorni",
        "shading": "Sfumature e Gradazioni",
        "packing": "Riempimento Colore Pieno",
        "stippling": "Puntinismo e Dotwork",
        "graywash": "Nero e Grigio / Sfumatura Fluida"
      },
      "styles": {
        "traditional": "Tradizionale / Old School",
        "fineLine": "Linea Fine e Micro",
        "realism": "Realismo e Ritrattistica",
        "neoTraditional": "Neo-Tradizionale",
        "japanese": "Giapponese / Irezumi",
        "blackwork": "Blackwork e Geometrie"
      },
      "skinTypes": {
        "normal": "Pelle Normale",
        "thinDelicate": "Sottile / Delicata (Polsi, Costole, Collo)",
        "thickTough": "Spessa / Resistente (Palmi, Gomiti, Schiena)",
        "agingMature": "Pelle Matura / Fragile"
      },
      "submitBtn": "Ottieni Raccomandazione",
      "resetBtn": "Reimposta",
      "validationAlert": "Seleziona sia uno stile di tatuaggio che una tecnica.",
      "noRecommendationAlert": "Nessuna raccomandazione specifica trovata per questa combinazione. Prova opzioni diverse."
    },
    "results": {
      "title": "Configurazione dell'Ago Consigliata",
      "needleCountLabel": "Numero di Aghi",
      "configTypeLabel": "Tipo di Configurazione",
      "bestForLabel": "Ideale Per",
      "settingsLabel": "Parametri Operativi",
      "voltageLabel": "Voltaggio",
      "speedLabel": "Velocità Macchinetta",
      "depthLabel": "Escursione Ago",
      "proTipsLabel": "Consigli Tecnici",
      "alternativesLabel": "Alternative Valide",
      "noSelectionPrompt": "Scegli una tecnica e uno stile per visualizzare le raccomandazioni.",
      "copyCode": "Copia Codice",
      "copied": "Copiato!",
      "diagramAriaLabel": "Diagramma della sezione trasversale dell'ago",
      "defaultNeedleCode": "9RL",
      "defaultNeedleName": "9 Liner circolare",
      "defaultNeedleCount": "9 aghi",
      "defaultConfigType": "Liner circolare (RL)"
    },
    "decoder": {
      "title": "Decodificatore Codice Blister",
      "subtitle": "Inserisci qualsiasi codice di confezionamento per aghi da tatuaggio (es. 9RL, 1209RL, 1011M1, 15RS, 7CM) per decodificarne le specifiche fisiche.",
      "inputLabel": "Codice Confezione",
      "placeholder": "es. 1209RL, 11M1, 15RS, 7CM",
      "decodeBtn": "Decodifica Ago",
      "notFoundTitle": "Codice Ago Non Trovato",
      "notFoundDesc": "Il codice '{code}' non è presente nel database tecnico. Prova codici come 9RL, 1209RL, 11M1, 15RS, 7CM o 9F.",
      "breakdownTitle": "Scomposizione dell'Ago",
      "countExplanation": "Numero di micro-aghi nel raggruppamento",
      "typeExplanation": "Configurazione di raggruppamento del fascio",
      "patternLabel": "Disposizione",
      "coverageLabel": "Diametro del Fascio",
      "bestForTitle": "Applicazioni Ottimali",
      "settingsTitle": "Impostazioni Macchinetta Consigliate",
      "prosTitle": "Vantaggi Clinici",
      "consTitle": "Considerazioni Tecniche",
      "inputAriaLabel": "Inserisci il codice ago",
      "emptyCodeAlert": "Inserisci un codice ago (es. 9RL, 1209RL, 11M1)",
      "blisterGauge": "Calibro Blister:",
      "diagramAriaLabel": "Diagramma del fascio decodificato"
    },
    "comparator": {
      "title": "Comparatore Aghi Fianco a Fianco",
      "subtitle": "Confronta le sezioni dei fasci, il diametro effettivo di copertura e le impostazioni operative per un massimo di tre configurazioni.",
      "slot1Label": "Primo Ago",
      "slot2Label": "Secondo Ago",
      "slot3Label": "Terzo Ago (Opzionale)",
      "chooseNeedlePrompt": "-- Scegli un Ago --",
      "noneOptional": "-- Nessuno (Opzionale) --",
      "compareBtn": "Confronta Configurazioni",
      "minSelectionAlert": "Seleziona almeno due configurazioni di aghi da confrontare.",
      "coverage": "Copertura Effettiva",
      "pattern": "Disposizione del Fascio",
      "voltage": "Voltaggio di Lavoro",
      "bestFor": "Utilizzi Primari",
      "diagramAriaLabel": "Diagramma comparativo dei fasci"
    },
    "reference": {
      "title": "Matrice Tecnica degli Aghi",
      "subtitle": "Archivio completo delle configurazioni professionali di aghi da tatuaggio. Clicca su qualsiasi configurazione per visualizzarla nel decodificatore.",
      "tabRL": "Liner Circolari (RL)",
      "tabRS": "Sfumatori Circolari (RS)",
      "tabM1": "Magnum Intrecciati (M1)",
      "tabCM": "Magnum Curvi (CM)",
      "tabF": "Piatti (F)",
      "hideChart": "Nascondi Tabella",
      "showChart": "Mostra Tabella"
    },
    "embedModal": {
      "title": "Incorpora il Selettore Aghi sul Sito del Tuo Studio",
      "subtitle": "Aggiungi questo strumento tecnico gratuito direttamente sul tuo sito per il team dello studio e per gli apprendisti.",
      "codeLabel": "Snippet HTML di Incorporamento (Iframe Reattivo e Autonomo)",
      "copyBtn": "Copia Snippet",
      "copied": "Snippet copiato negli appunti!",
      "closeBtn": "Chiudi",
      "tip": "Si incolla facilmente in WordPress, Squarespace, Webflow, Shopify o HTML personalizzato.",
      "closeAriaLabel": "Chiudi finestra di incorporamento",
      "copyFailed": "Impossibile copiare il codice. Seleziona e copia manualmente."
    },
    "footer": {
      "brandNote": "Pubblicato da Poli International come strumento professionale gratuito per tatuatori, piercer e titolari di studio.",
      "toolsLink": "Esplora Tutti gli Strumenti Poli Studio",
      "disclaimer": "I voltaggi di esercizio, l'escursione della battuta e la profondità dell'ago sono raccomandazioni tecniche di base derivate dalla pratica professionale consolidata. Regola sempre la macchinetta in base alla reazione cutanea del cliente, alla coppia motore e alla geometria di battuta.",
      "websiteLink": "Sito Ufficiale Poli International",
      "githubLink": "Repository GitHub"
    },
    "embed": {
      "titleTag": "Widget Selettore Aghi per Tatuaggio | Poli International",
      "poweredBy": "Offerto da",
      "openFull": "Apri Versione Completa ↗"
    },
    "gauges": {
      "10": "#10 (0,30 mm Bugpin sottile)",
      "12": "#12 (0,35 mm Calibro standard)",
      "08": "#08 (0,25 mm Micro Bugpin affusolato)",
      "06": "#06 (0,20 mm Ultra Micro microscopico)"
    },
    "needleTypes": {
      "RL": "Liner circolare",
      "RS": "Sfumatore circolare",
      "M1": "Magnum intrecciato",
      "CM": "Magnum curvo",
      "F": "Piatto"
    },
    "patterns": {
      "single": "ago singolo",
      "tight_round": "tondo compatto",
      "loose_round": "tondo aperto",
      "flat_line": "linea piatta",
      "curved_line": "linea curva",
      "flat_stacked": "piatto sovrapposto"
    },
    "speeds": {
      "very_slow": "molto lenta",
      "slow_to_medium": "da lenta a media",
      "medium": "andatura media",
      "medium_to_fast": "da media a veloce",
      "fast": "veloce"
    },
    "needles": {
      "1RL": {
        "type": "Liner circolare",
        "speed": "molto lenta",
        "uses": [
          "dettagli microscopici",
          "micro-tatuaggi",
          "lentiggini estetiche",
          "tatuaggi cosmetici"
        ],
        "pros": [
          "estremamente preciso",
          "trauma cutaneo minimo",
          "perfetto per dettagli microscopici"
        ],
        "cons": [
          "avanzamento marcatamente lento",
          "richiede una mano altamente esperta",
          "facile stressare la cute in eccesso"
        ]
      },
      "3RL": {
        "type": "Liner circolare",
        "speed": "da lenta a media",
        "uses": [
          "dettagli minuscoli",
          "scritte di piccolo formato",
          "linee delicate",
          "ritratti realistici"
        ],
        "pros": [
          "estremamente preciso",
          "trauma cutaneo minimo",
          "controllo micrometrico",
          "adatto agli apprendisti"
        ],
        "cons": [
          "copertura delle superfici lenta",
          "esige una mano ferma e precisa",
          "inadatto per tratti pesanti"
        ]
      },
      "5RL": {
        "type": "Liner circolare",
        "speed": "andatura media",
        "uses": [
          "linee da sottili a medie",
          "ritratti realistici",
          "lettering e scritte",
          "lavori dettagliati"
        ],
        "pros": [
          "altamente versatile",
          "ottimo bilanciamento generale",
          "altamente affidabile",
          "standard industriale riconosciuto"
        ],
        "cons": [
          "troppo sottile per tratti bold o pesanti",
          "meno celere rispetto ad aghi con raggruppamento maggiore"
        ]
      },
      "7RL": {
        "type": "Liner circolare",
        "speed": "andatura media",
        "uses": [
          "linee di calibro medio",
          "stile neo-traditional",
          "tatuaggio giapponese Irezumi",
          "linee generiche"
        ],
        "pros": [
          "altamente versatile",
          "versatile per gran parte degli stili",
          "linee pulite e definite",
          "scelta estremamente diffusa"
        ],
        "cons": [
          "troppo spesso per particolari minuziosi",
          "troppo sottile per il tradizionale pesante"
        ]
      },
      "9RL": {
        "type": "Liner circolare",
        "speed": "da media a veloce",
        "uses": [
          "linee marcate",
          "tatuaggi Old School tradizionali",
          "contorni netti e decisi",
          "motivi tribali"
        ],
        "pros": [
          "linee decise e consistenti",
          "copertura rapida",
          "perfetto per lo stile classico",
          "altamente affidabile"
        ],
        "cons": [
          "troppo consistente per linee fini",
          "può traumatizzare la cute sottile"
        ]
      },
      "11RL": {
        "type": "Liner circolare",
        "speed": "da media a veloce",
        "uses": [
          "linee estremamente marcate",
          "tatuaggi Old School tradizionali",
          "grandi tatuaggi tribali",
          "contorni consistenti"
        ],
        "pros": [
          "tratto molto evidente",
          "rapido nell'applicazione",
          "ideale per pelli spesse e resistenti",
          "elevata densità di copertura"
        ],
        "cons": [
          "troppo marcato per la maggioranza dei tatuaggi",
          "richiede solida esperienza pratica",
          "rischio concreto di blowout"
        ]
      },
      "14RL": {
        "type": "Liner circolare",
        "speed": "veloce",
        "uses": [
          "linee molto spesse",
          "grandi tatuaggi tribali",
          "linee tradizionali spesse",
          "coperture e cover-up"
        ],
        "pros": [
          "tratto extra pesante",
          "copertura rapida",
          "ideale per le coperture"
        ],
        "cons": [
          "configurazione ad altissima specializzazione",
          "rischio concreto di blowout",
          "esige un controllo da maestro"
        ]
      },
      "5RS": {
        "type": "Sfumatore circolare",
        "speed": "da lenta a media",
        "uses": [
          "sfumature tenui",
          "sfumature per ritrattistica",
          "fusione cromatica",
          "gradazioni soffuse"
        ],
        "pros": [
          "sfumature soffuse e vellutate",
          "delicato sull'epidermide",
          "indicato per la ritrattistica"
        ],
        "cons": [
          "copertura delle superfici lenta",
          "densità di saturazione limitata",
          "non idoneo per sfumature pesanti"
        ]
      },
      "7RS": {
        "type": "Sfumatore circolare",
        "speed": "andatura media",
        "uses": [
          "sfumature di intensità media",
          "lavori a colori",
          "gradazioni di tono",
          "sfumature generiche"
        ],
        "pros": [
          "altamente versatile",
          "ottimo bilanciamento generale",
          "sfumatura costante e sicura"
        ],
        "cons": [
          "meno vellutato rispetto a RS di calibro minore",
          "meno coprente rispetto a RS di calibro superiore"
        ]
      },
      "9RS": {
        "type": "Sfumatore circolare",
        "speed": "andatura media",
        "uses": [
          "sfumature intense e piene",
          "saturazione colore",
          "sfumature stile tradizionale",
          "lavorazioni standard"
        ],
        "pros": [
          "copertura piena e omogenea",
          "ideale per lo stile tradizionale",
          "altamente affidabile"
        ],
        "cons": [
          "può risultare troppo compatto per sfumature tenui",
          "maggiore impatto meccanico sui tessuti"
        ]
      },
      "11RS": {
        "type": "Sfumatore circolare",
        "speed": "da media a veloce",
        "uses": [
          "sfumature dense",
          "colore solido e coprente",
          "sfumature decise",
          "coperture e cover-up"
        ],
        "pros": [
          "saturazione eccezionalmente piena",
          "copertura rapida",
          "perfetto per lavori di forte impatto"
        ],
        "cons": [
          "inadeguato per passaggi velati",
          "può risultare aggressivo sulla cute",
          "richiede solida esperienza pratica"
        ]
      },
      "5M1": {
        "type": "Magnum intrecciato",
        "speed": "andatura media",
        "uses": [
          "sfumature tenui",
          "fusione cromatica",
          "sfumature impercettibili",
          "opere di ritrattistica"
        ],
        "pros": [
          "copertura morbida e sfumata",
          "sfumature vellutate e progressive",
          "delicato sull'epidermide"
        ],
        "cons": [
          "inefficiente su aree ampie",
          "densità di saturazione limitata"
        ]
      },
      "7M1": {
        "type": "Magnum intrecciato",
        "speed": "andatura media",
        "uses": [
          "sfumature vellutate e morbide",
          "fusione cromatica",
          "sfumature per ritrattistica",
          "lavorazioni standard"
        ],
        "pros": [
          "altamente versatile",
          "stesura vellutata e continua",
          "standard industriale riconosciuto"
        ],
        "cons": [
          "può risultare troppo morbido per colore pieno",
          "meno veloce rispetto a magnum di calibro superiore"
        ]
      },
      "9M1": {
        "type": "Magnum intrecciato",
        "speed": "da media a veloce",
        "uses": [
          "sfumature generiche",
          "lavori a colori",
          "sfumature progressive morbide",
          "copertura di superfici estese"
        ],
        "pros": [
          "copertura rapida",
          "altamente versatile",
          "estremamente polivalente in studio"
        ],
        "cons": [
          "troppo ingombrante per dettagli microscopici",
          "esige una tecnica impeccabile"
        ]
      },
      "11M1": {
        "type": "Magnum intrecciato",
        "speed": "veloce",
        "uses": [
          "sfumature su ampie campiture",
          "saturazione colore",
          "stesura omogenea e vellutata",
          "campiture di sfondo"
        ],
        "pros": [
          "rapido nell'applicazione",
          "stesura vellutata e continua",
          "ottimo per aree estese"
        ],
        "cons": [
          "troppo esteso per lavori di fino dettaglio",
          "rischia di sovraffaticare piccole zone"
        ]
      },
      "13M1": {
        "type": "Magnum intrecciato",
        "speed": "veloce",
        "uses": [
          "riempimento di ampie aree",
          "saturazione colore",
          "sfumature di sfondo"
        ],
        "pros": [
          "velocità operativa molto elevata",
          "efficiente su ampie metrature"
        ],
        "cons": [
          "troppo ampio per la gran parte dei dettagli",
          "richiede solida esperienza pratica"
        ]
      },
      "15M1": {
        "type": "Magnum intrecciato",
        "speed": "veloce",
        "uses": [
          "copertura di aree molto ampie",
          "sfumature di sfondo",
          "saturazione colore"
        ],
        "pros": [
          "estremamente celere",
          "perfetto per tatuaggi monumentali"
        ],
        "cons": [
          "destinato esclusivamente a impieghi specialistici",
          "versatilità operativa limitata"
        ]
      },
      "7CM": {
        "type": "Magnum curvo",
        "speed": "da lenta a media",
        "uses": [
          "passaggi cromatici sfumati",
          "sfumature per ritrattistica",
          "sfumature progressive morbide",
          "sfumature delicate"
        ],
        "pros": [
          "estrema morbidezza operativa",
          "delicato sull'epidermide",
          "insuperabile per la ritrattistica"
        ],
        "cons": [
          "velocità di copertura ridotta",
          "richiede notevole abilità manuale",
          "costo per pezzo superiore alla media"
        ]
      },
      "9CM": {
        "type": "Magnum curvo",
        "speed": "andatura media",
        "uses": [
          "sfumature vellutate e morbide",
          "miscelazione dei colori",
          "opere di ritrattistica",
          "realismo fotografico"
        ],
        "pros": [
          "scorrimento morbido e setoso",
          "la scelta dei professionisti",
          "eccellente fusione delle sfumature"
        ],
        "cons": [
          "prezzo d'acquisto più consistente",
          "esige una tecnica impeccabile"
        ]
      },
      "11CM": {
        "type": "Magnum curvo",
        "speed": "da media a veloce",
        "uses": [
          "sfumature fluide su ampie superfici",
          "fusione cromatica",
          "copertura soffusa"
        ],
        "pros": [
          "incredibilmente morbido",
          "veloce e delicato sui tessuti",
          "livello qualitativo professionale"
        ],
        "cons": [
          "costo per pezzo superiore alla media",
          "può risultare troppo morbido per colore pieno"
        ]
      },
      "7F": {
        "type": "Piatto",
        "speed": "andatura media",
        "uses": [
          "sfumature geometriche",
          "colore solido e coprente",
          "lavorazioni tribali",
          "sfumature decise"
        ],
        "pros": [
          "densità di deposito elevatissima",
          "copertura piena e omogenea",
          "ottimo per geometrie rigorose"
        ],
        "cons": [
          "aggressivo sui tessuti cutanei",
          "inadeguato per passaggi velati",
          "richiede solida esperienza pratica"
        ]
      },
      "9F": {
        "type": "Piatto",
        "speed": "da media a veloce",
        "uses": [
          "colore solido e coprente",
          "motivi tribali",
          "tatuaggi geometrici",
          "coperture e cover-up"
        ],
        "pros": [
          "massima compattezza e solidità",
          "copertura rapida",
          "perfetto per lavori di forte impatto"
        ],
        "cons": [
          "estremamente stressante per i tessuti",
          "versatilità operativa limitata",
          "trauma tissutale marcato"
        ]
      },
      "15F": {
        "type": "Piatto",
        "speed": "veloce",
        "uses": [
          "riempimento solido su aree vastissime",
          "motivi tribali",
          "stile blackwork",
          "coperture e cover-up"
        ],
        "pros": [
          "velocità elevatissima",
          "massima compattezza e solidità",
          "ottimo per grandi campiture tribali"
        ],
        "cons": [
          "configurazione ad altissima specializzazione",
          "notevole sollecitazione cutanea",
          "necessita di competenza tecnica avanzata"
        ]
      }
    },
    "toolsModal": {
      "title": "Suite Strumenti per Studio Poli",
      "subtitle": "Strumenti digitali professionali gratuiti per tatuatori, piercer e gestori di studi.",
      "visitAll": "Apri il catalogo web completo",
      "closeBtn": "Chiudi",
      "closeAriaLabel": "Chiudi il catalogo",
      "sizerName": "Calibratore per Piercing",
      "sizerDesc": "Calcolatore interattivo di calibro, diametro e lunghezza per posizionamenti anatomici di piercing.",
      "crmName": "CRM per Studio",
      "crmDesc": "Sistema di gestione locale per lo studio con storico clienti, appuntamenti e tracciamento quotidiano delle procedure.",
      "benchmarkName": "Benchmark Tariffario per Studio",
      "benchmarkDesc": "Confronti regionali di listini prezzi e calcolatori tariffari per studi di body art.",
      "consentName": "Modulo di Consenso e Anamnesi",
      "consentDesc": "Moduli digitali di accettazione, informative sulla procedura ed esportazione delle schede cliente.",
      "logName": "Registro di Sterilizzazione per Studio",
      "logDesc": "Tracciamento dei cicli in autoclave, documentazione dei test biologici e registro degli strumenti processati."
    },
    "languages": {
      "en": "Inglese (EN)",
      "fr": "Francese (FR)",
      "it": "Italiano (IT)",
      "de": "Tedesco (DE)",
      "es": "Spagnolo (ES)",
      "nl": "Olandese (NL)",
      "pt": "Portoghese (PT)"
    }
  },
  "de": {
    "app": {
      "title": "Tätowiernadel-Konfigurator",
      "subtitle": "Professioneller Konfigurationsberater, Blistercode-Decoder und Nadelvergleicher für Tätowierer und Auszubildende.",
      "themeToggle": "Farbschema wechseln",
      "embedButton": "Tool einbetten",
      "toolsCatalog": "Poli Werkzeug-Katalog",
      "titleTag": "Professioneller Tätowiernadel-Konfigurator | Poli International",
      "languageSelect": "Sprache auswählen"
    },
    "nav": {
      "selector": "Schnell-Konfigurator",
      "decoder": "Code-Decoder",
      "comparator": "Nadel-Vergleicher",
      "reference": "Technische Referenz",
      "ariaLabel": "Hauptnavigation"
    },
    "selector": {
      "title": "Finden Sie Ihre Optimale Nadel",
      "subtitle": "Wählen Sie Ihre Tätowiertechnik, Ihren künstlerischen Stil und die Hautbeschaffenheit für sofortige Konfigurationsempfehlungen.",
      "techniqueLabel": "Technik",
      "styleLabel": "Künstlerischer Stil",
      "skinTypeLabel": "Hauttyp",
      "selectTechniquePrompt": "-- Technik auswählen --",
      "selectStylePrompt": "-- Stil auswählen --",
      "selectSkinPrompt": "-- Hauttyp auswählen --",
      "techniques": {
        "lining": "Linien und Konturen",
        "shading": "Schattierung und Verläufe",
        "packing": "Satttiegel Farbauftrag",
        "stippling": "Stippling und Dotwork",
        "graywash": "Black & Gray / Weicher Wash"
      },
      "styles": {
        "traditional": "Traditionell / Old School",
        "fineLine": "Fine Line und Mikro",
        "realism": "Realismus und Porträt",
        "neoTraditional": "Neo-Traditionell",
        "japanese": "Japanisch / Irezumi",
        "blackwork": "Blackwork und Geometrie"
      },
      "skinTypes": {
        "normal": "Normale Haut",
        "thinDelicate": "Dünn / Empfindlich (Handgelenk, Rippen, Hals)",
        "thickTough": "Dick / Widerstandsfähig (Handflächen, Ellbogen, Rücken)",
        "agingMature": "Reife / Gealterte Haut"
      },
      "submitBtn": "Empfehlung abrufen",
      "resetBtn": "Zurücksetzen",
      "validationAlert": "Bitte wählen Sie sowohl einen Tätowierstil als auch eine Technik aus.",
      "noRecommendationAlert": "Keine spezifische Empfehlung für diese Kombination gefunden. Bitte versuchen Sie andere Optionen."
    },
    "results": {
      "title": "Empfohlene Nadelkonfiguration",
      "needleCountLabel": "Nadelanzahl",
      "configTypeLabel": "Konfigurationstyp",
      "bestForLabel": "Ideal für",
      "settingsLabel": "Betriebsparameter",
      "voltageLabel": "Spannung",
      "speedLabel": "Maschinengeschwindigkeit",
      "depthLabel": "Nadelaushub",
      "proTipsLabel": "Technische Hinweise",
      "alternativesLabel": "Mögliche Alternativen",
      "noSelectionPrompt": "Bitte wählen Sie Technik und Stil aus, um Empfehlungen anzuzeigen.",
      "copyCode": "Code kopieren",
      "copied": "Kopiert!",
      "diagramAriaLabel": "Querschnittsdiagramm der Nadel",
      "defaultNeedleCode": "9RL",
      "defaultNeedleName": "9er Rund-Liner",
      "defaultNeedleCount": "9 Nadeln",
      "defaultConfigType": "Rund-Liner (RL)"
    },
    "decoder": {
      "title": "Blister-Verpackungs-Decoder",
      "subtitle": "Geben Sie einen beliebigen Verpackungscode (z. B. 9RL, 1209RL, 1011M1, 15RS, 7CM) ein, um die physischen Spezifikationen aufzuschlüsseln.",
      "inputLabel": "Verpackungscode",
      "placeholder": "z. B. 1209RL, 11M1, 15RS, 7CM",
      "decodeBtn": "Nadel entschlüsseln",
      "notFoundTitle": "Nadelcode nicht gefunden",
      "notFoundDesc": "Der Code '{code}' wurde in der technischen Datenbank nicht gefunden. Versuchen Sie Standardcodes wie 9RL, 1209RL, 11M1, 15RS, 7CM oder 9F.",
      "breakdownTitle": "Nadelaufbau",
      "countExplanation": "Anzahl der Einzelnadeln im Nadelbündel",
      "typeExplanation": "Gruppierungskonfiguration des Nadelbündels",
      "patternLabel": "Anordnung",
      "coverageLabel": "Bündeldurchmesser",
      "bestForTitle": "Optimale Anwendungen",
      "settingsTitle": "Empfohlene Maschineneinstellungen",
      "prosTitle": "Klinische Vorteile",
      "consTitle": "Technik-Überlegungen",
      "inputAriaLabel": "Nadelcode eingeben",
      "emptyCodeAlert": "Bitte geben Sie einen Nadelcode ein (z. B. 9RL, 1209RL, 11M1)",
      "blisterGauge": "Blister-Nadelstärke:",
      "diagramAriaLabel": "Diagramm des decodierten Nadelbündels"
    },
    "comparator": {
      "title": "Direkter Nadelvergleicher",
      "subtitle": "Vergleichen Sie Bündelquerschnitte, effektive Abdeckung und Arbeitseinstellungen für bis zu drei Nadelkonfigurationen.",
      "slot1Label": "Erste Nadel",
      "slot2Label": "Zweite Nadel",
      "slot3Label": "Dritte Nadel (Optional)",
      "chooseNeedlePrompt": "-- Nadel auswählen --",
      "noneOptional": "-- Keine (Optional) --",
      "compareBtn": "Konfigurationen vergleichen",
      "minSelectionAlert": "Bitte wählen Sie mindestens zwei Nadelkonfigurationen zum Vergleichen aus.",
      "coverage": "Effektive Abdeckung",
      "pattern": "Bündelanordnung",
      "voltage": "Arbeitsspannung",
      "bestFor": "Haupteinsatzbereiche",
      "diagramAriaLabel": "Vergleichsdiagramm der Nadelbündel"
    },
    "reference": {
      "title": "Technische Nadelmatrix",
      "subtitle": "Vollständige Übersicht professioneller Tätowiernadel-Konfigurationen. Klicken Sie auf eine Konfiguration, um sie im Decoder zu öffnen.",
      "tabRL": "Rund-Liner (RL)",
      "tabRS": "Rund-Shader (RS)",
      "tabM1": "Gewebte Magnums (M1)",
      "tabCM": "Gebogene Magnums (CM)",
      "tabF": "Flachnadeln (F)",
      "hideChart": "Tabelle ausblenden",
      "showChart": "Tabelle anzeigen"
    },
    "embedModal": {
      "title": "Nadel-Konfigurator auf Ihrer Studio-Website einbetten",
      "subtitle": "Integrieren Sie dieses kostenlose Werkzeug direkt in Ihre Website für Ihr Studio-Team und Auszubildende.",
      "codeLabel": "HTML-Einbettungscode (Eigenständiges responsives Iframe)",
      "copyBtn": "Code kopieren",
      "copied": "Code in die Zwischenablage kopiert!",
      "closeBtn": "Schließen",
      "tip": "Lässt sich problemlos in WordPress, Squarespace, Webflow, Shopify oder benutzerdefiniertes HTML einfügen.",
      "closeAriaLabel": "Einbettungsdialog schließen",
      "copyFailed": "Kopieren fehlgeschlagen. Bitte manuell markieren und kopieren."
    },
    "footer": {
      "brandNote": "Herausgegeben von Poli International als kostenloses Werkzeug für Tätowierer, Piercer und Studiobetreiber.",
      "toolsLink": "Alle Poli Studio-Werkzeuge entdecken",
      "disclaimer": "Betriebsspannungen, Hublängen und Nadelaushub sind grundlegende Empfehlungen aus der etablierten Berufspraxis. Passen Sie Maschineneinstellungen immer an Hautreaktion, Drehmoment und Hubgeometrie an.",
      "websiteLink": "Offizielle Website von Poli International",
      "githubLink": "GitHub-Repository"
    },
    "embed": {
      "titleTag": "Tätowiernadel-Konfigurator Widget | Poli International",
      "poweredBy": "Bereitgestellt von",
      "openFull": "Vollversion öffnen ↗"
    },
    "gauges": {
      "10": "#10 (0,30 mm Feinnadel Bugpin)",
      "12": "#12 (0,35 mm Standard-Nadelstärke)",
      "08": "#08 (0,25 mm Mikro-Bugpin fein)",
      "06": "#06 (0,20 mm Ultra-Mikro extrem fein)"
    },
    "needleTypes": {
      "RL": "Rund-Liner",
      "RS": "Rund-Shader",
      "M1": "Gewebtes Magnum",
      "CM": "Gebogenes Magnum",
      "F": "Flach"
    },
    "patterns": {
      "single": "Einzelnadel",
      "tight_round": "eng gebündelt rund",
      "loose_round": "locker gebündelt rund",
      "flat_line": "flache Linie",
      "curved_line": "gebogene Linie",
      "flat_stacked": "flach gestapelt"
    },
    "speeds": {
      "very_slow": "sehr langsam",
      "slow_to_medium": "langsam bis mittel",
      "medium": "mittel",
      "medium_to_fast": "mittel bis schnell",
      "fast": "schnell"
    },
    "needles": {
      "1RL": {
        "type": "Rund-Liner",
        "speed": "sehr langsam",
        "uses": [
          "ultrafeine Detailarbeiten",
          "Mikro-Tätowierungen",
          "Sommersprossen-Pigmentierung",
          "kosmetische Tätowierungen"
        ],
        "pros": [
          "äußerst präzise",
          "minimales Hauttrauma",
          "perfekt für winzige Details"
        ],
        "cons": [
          "außerordentlich langsames Arbeiten",
          "erfordert eine erfahrene Hand",
          "Gefahr des Überarbeitens der Haut"
        ]
      },
      "3RL": {
        "type": "Rund-Liner",
        "speed": "langsam bis mittel",
        "uses": [
          "Feindetails",
          "kleinformatige Beschriftung",
          "zarte Linien",
          "realistische Porträts"
        ],
        "pros": [
          "präzise Führung",
          "minimales Hauttrauma",
          "feine Handführung",
          "gut für Auszubildende"
        ],
        "cons": [
          "zeitintensiver Deckungsaufbau",
          "erfordert eine absolut ruhige Hand",
          "nicht für kräftige Plakateffekte geeignet"
        ]
      },
      "5RL": {
        "type": "Rund-Liner",
        "speed": "mittel",
        "uses": [
          "feine bis mittlere Linien",
          "realistische Porträts",
          "Schriftzüge und Schriften",
          "detailreiche Arbeiten"
        ],
        "pros": [
          "äußerst vielseitig",
          "gute Allround-Balance",
          "absolut verlässlich",
          "etablierter Branchenstandard"
        ],
        "cons": [
          "möglicherweise zu fein für plakative Linien",
          "langsamer als Nadeln mit höherer Nadelanzahl"
        ]
      },
      "7RL": {
        "type": "Rund-Liner",
        "speed": "mittel",
        "uses": [
          "mitteldicke Konturen",
          "Neo-Traditional-Stil",
          "japanischer Irezumi-Stil",
          "allgemeines Linienziehen"
        ],
        "pros": [
          "äußerst vielseitig",
          "vielseitig für viele Stilrichtungen",
          "saubere klare Linien",
          "sehr beliebte Nadelwahl"
        ],
        "cons": [
          "zu dick für feinste Ausarbeitungen",
          "zu schmal für klassisch dicke Konturen"
        ]
      },
      "9RL": {
        "type": "Rund-Liner",
        "speed": "mittel bis schnell",
        "uses": [
          "kräftige Linien",
          "traditionelle Tattoos",
          "starke markante Konturen",
          "Tribal-Motive"
        ],
        "pros": [
          "starke klare Linienführung",
          "schnelle Flächenabdeckung",
          "ausgezeichnet für Traditional",
          "absolut verlässlich"
        ],
        "cons": [
          "zu breit für filigrane Arbeiten",
          "kann dünne Haut zu stark belasten"
        ]
      },
      "11RL": {
        "type": "Rund-Liner",
        "speed": "mittel bis schnell",
        "uses": [
          "sehr kräftige Außenlinien",
          "traditionelle Tattoos",
          "großformatige Tribals",
          "dicke Außenlinien"
        ],
        "pros": [
          "sehr markantes Erscheinungsbild",
          "hohes Arbeitstempo",
          "stark auf dicker Haut",
          "kräftige Deckwirkung"
        ],
        "cons": [
          "zu massiv für die meisten Alltagsarbeiten",
          "solide Praxiserfahrung erforderlich",
          "Blowout-Gefahr bei Fehleinstich"
        ]
      },
      "14RL": {
        "type": "Rund-Liner",
        "speed": "schnell",
        "uses": [
          "extra dicke Linien",
          "großformatige Tribals",
          "dicke traditionelle Linienführung",
          "Cover-up-Arbeiten"
        ],
        "pros": [
          "extra kräftiges Profil",
          "schnelle Flächenabdeckung",
          "gut für Cover-ups"
        ],
        "cons": [
          "hochgradig spezialisiertes Werkzeug",
          "erhöhte Blowout-Gefahr",
          "erfordert meisterhafte Beherrschung"
        ]
      },
      "5RS": {
        "type": "Rund-Shader",
        "speed": "langsam bis mittel",
        "uses": [
          "weiche Schattierung",
          "Schattieren von Porträts",
          "Farbverblendung",
          "sanfte Verläufe"
        ],
        "pros": [
          "sanftes Schattieren",
          "schonend zur Epidermis",
          "gut für Porträts"
        ],
        "cons": [
          "zeitintensiver Deckungsaufbau",
          "eingeschränkte Deckkraft",
          "ungeeignet für kräftige dunkle Schattierung"
        ]
      },
      "7RS": {
        "type": "Rund-Shader",
        "speed": "mittel",
        "uses": [
          "mittlere Schattierungstiefe",
          "Farbarbeiten",
          "Tonwert-Verläufe",
          "allgemeines Schattieren"
        ],
        "pros": [
          "äußerst vielseitig",
          "gute Allround-Balance",
          "verlässliches Schattierverhalten"
        ],
        "cons": [
          "weniger sanft als kleine RS-Konfigurationen",
          "nicht so deckend wie größere RS"
        ]
      },
      "9RS": {
        "type": "Rund-Shader",
        "speed": "mittel",
        "uses": [
          "kräftige dunkle Schattierung",
          "Farbeintrag",
          "traditionelle Schattiertechnik",
          "allgemeine Tätowierarbeiten"
        ],
        "pros": [
          "dichte solide Deckkraft",
          "ideal für traditionelle Motive",
          "absolut verlässlich"
        ],
        "cons": [
          "unter Umständen zu dicht für dezente Details",
          "größere Belastung für die Haut"
        ]
      },
      "11RS": {
        "type": "Rund-Shader",
        "speed": "mittel bis schnell",
        "uses": [
          "dichte Schattierung",
          "vollflächige Farbtiefe",
          "kräftige Schattierung",
          "Cover-up-Arbeiten"
        ],
        "pros": [
          "äußerst solide Sättigung",
          "schnelle Flächenabdeckung",
          "toll für plakative Arbeiten"
        ],
        "cons": [
          "ungeeignet für zarte Schattierungen",
          "kann die Haut strapazieren",
          "solide Praxiserfahrung erforderlich"
        ]
      },
      "5M1": {
        "type": "Gewebtes Magnum",
        "speed": "mittel",
        "uses": [
          "weiche Schattierung",
          "Farbverblendung",
          "subtile stufenlose Verläufe",
          "Porträtgestaltungen"
        ],
        "pros": [
          "weiche transparente Deckung",
          "gleichmäßige Verläufe",
          "schonend zur Epidermis"
        ],
        "cons": [
          "zu langsam für große Flächen",
          "eingeschränkte Deckkraft"
        ]
      },
      "7M1": {
        "type": "Gewebtes Magnum",
        "speed": "mittel",
        "uses": [
          "sanftes gleichmäßiges Schattieren",
          "Farbverblendung",
          "Schattieren von Porträts",
          "allgemeine Tätowierarbeiten"
        ],
        "pros": [
          "äußerst vielseitig",
          "geschmeidige Flächenabdeckung",
          "etablierter Branchenstandard"
        ],
        "cons": [
          "unter Umständen zu weich für sattes Vollfarb-Packing",
          "langsamer als größere Magnum-Konfigurationen"
        ]
      },
      "9M1": {
        "type": "Gewebtes Magnum",
        "speed": "mittel bis schnell",
        "uses": [
          "allgemeines Schattieren",
          "Farbarbeiten",
          "weiche stufenlose Übergänge",
          "Abdeckung großer Areale"
        ],
        "pros": [
          "schnelle Flächenabdeckung",
          "äußerst vielseitig",
          "universell für die meisten Aufgaben"
        ],
        "cons": [
          "eventuell zu groß für feine Finessen",
          "setzt saubere Technik voraus"
        ]
      },
      "11M1": {
        "type": "Gewebtes Magnum",
        "speed": "schnell",
        "uses": [
          "großflächiges Schattieren",
          "Farbeintrag",
          "gleichmäßige weiche Deckung",
          "Hintergrundarbeiten"
        ],
        "pros": [
          "hohes Arbeitstempo",
          "geschmeidige Flächenabdeckung",
          "gut für große Flächen"
        ],
        "cons": [
          "zu groß für detaillierte Arbeiten",
          "kann kleine Zonen überarbeiten"
        ]
      },
      "13M1": {
        "type": "Gewebtes Magnum",
        "speed": "schnell",
        "uses": [
          "Flächenfüllung im Großformat",
          "Farbeintrag",
          "Hintergrund-Schattierung"
        ],
        "pros": [
          "sehr schnelle Arbeitsgeschwindigkeit",
          "effizient bei Großflächen"
        ],
        "cons": [
          "zu ausladend für die meisten Finessen",
          "solide Praxiserfahrung erforderlich"
        ]
      },
      "15M1": {
        "type": "Gewebtes Magnum",
        "speed": "schnell",
        "uses": [
          "Abdeckung sehr großer Flächen",
          "Hintergrund-Schattierung",
          "Farbeintrag"
        ],
        "pros": [
          "extrem schnelles Arbeiten",
          "hervorragend für Großprojekte"
        ],
        "cons": [
          "ausschließlich für Spezialanwendungen gedacht",
          "begrenzte Einsatzvielfalt"
        ]
      },
      "7CM": {
        "type": "Gebogenes Magnum",
        "speed": "langsam bis mittel",
        "uses": [
          "weiches stufenloses Mischen",
          "Schattieren von Porträts",
          "weiche stufenlose Übergänge",
          "zarte Schattierung"
        ],
        "pros": [
          "ultraweiches Finish",
          "schonend zur Epidermis",
          "perfekt geeignet für Porträts"
        ],
        "cons": [
          "langsamere Flächenabdeckung",
          "erfordert hohes handwerkliches Geschick",
          "höhere Anschaffungskosten"
        ]
      },
      "9CM": {
        "type": "Gebogenes Magnum",
        "speed": "mittel",
        "uses": [
          "sanftes gleichmäßiges Schattieren",
          "Farbmischung und Blending",
          "Porträtgestaltungen",
          "fotorealistische Motive"
        ],
        "pros": [
          "butterweicher Lauf",
          "Wahl professioneller Artists",
          "hervorragendes Blending"
        ],
        "cons": [
          "deutlich kostspieliger",
          "setzt saubere Technik voraus"
        ]
      },
      "11CM": {
        "type": "Gebogenes Magnum",
        "speed": "mittel bis schnell",
        "uses": [
          "weiche Schattierung großer Flächen",
          "Farbverblendung",
          "sanfte Flächenabdeckung"
        ],
        "pros": [
          "extrem gleichmäßig weich",
          "schnell und hautfreundlich",
          "professionelle Leistungsstufe"
        ],
        "cons": [
          "höhere Anschaffungskosten",
          "unter Umständen zu weich für sattes Vollfarb-Packing"
        ]
      },
      "7F": {
        "type": "Flach",
        "speed": "mittel",
        "uses": [
          "geometrisches Schattieren",
          "vollflächige Farbtiefe",
          "Tribal-Gestaltungen",
          "kräftige Schattierung"
        ],
        "pros": [
          "sehr hohe Packungsdichte",
          "dichte solide Deckkraft",
          "super für Geometrie"
        ],
        "cons": [
          "strapaziös für das Hautgewebe",
          "ungeeignet für zarte Schattierungen",
          "solide Praxiserfahrung erforderlich"
        ]
      },
      "9F": {
        "type": "Flach",
        "speed": "mittel bis schnell",
        "uses": [
          "vollflächige Farbtiefe",
          "Tribal-Motive",
          "geometrische Muster",
          "Cover-up-Arbeiten"
        ],
        "pros": [
          "extrem solide Deckung",
          "schnelle Flächenabdeckung",
          "toll für plakative Arbeiten"
        ],
        "cons": [
          "äußerst aggressiv zum Hautgewebe",
          "begrenzte Einsatzvielfalt",
          "deutliches Gewebetrauma"
        ]
      },
      "15F": {
        "type": "Flach",
        "speed": "schnell",
        "uses": [
          "großflächiger satter Vollfarbauftrag",
          "Tribal-Motive",
          "Blackwork-Tätowierungen",
          "Cover-up-Arbeiten"
        ],
        "pros": [
          "ultraschneller Durchsatz",
          "extrem solide Deckung",
          "optimal für große Tribals"
        ],
        "cons": [
          "hochgradig spezialisiertes Werkzeug",
          "starke mechanische Hautreizung",
          "verlangt fundierte Fachkenntnis"
        ]
      }
    },
    "toolsModal": {
      "title": "Poli Studio-Werkzeugsuite",
      "subtitle": "Kostenlose professionelle digitale Hilfsmittel für Tätowierer, Piercer und Studiobetreiber.",
      "visitAll": "Vollständigen Web-Katalog öffnen",
      "closeBtn": "Schließen",
      "closeAriaLabel": "Katalog-Fenster schließen",
      "sizerName": "Piercing-Größenberater",
      "sizerDesc": "Interaktiver Größenrechner für Drahtstärke, Durchmesser und Länge anatomischer Piercing-Platzierungen.",
      "crmName": "Studio-CRM",
      "crmDesc": "Lokales Studio-Verwaltungssystem für Kundenkartei, Termine und tägliche Dokumentation von Eingriffen.",
      "benchmarkName": "Studio-Preisbenchmark",
      "benchmarkDesc": "Regionale Preislisten-Vergleiche und Preiskalkulatoren für Body-Art-Studios.",
      "consentName": "Einwilligungs- und Anamnesebogen",
      "consentDesc": "Digitale Aufnahmebögen, Aufklärungserklärungen für Behandlungen und Export von Kundendaten.",
      "logName": "Studio-Sterilisationsprotokoll",
      "logDesc": "Dokumentation von Autoklaven-Zyklen, Sporentests und Nachverfolgung aufbereiteter Instrumente."
    },
    "languages": {
      "en": "Englisch (EN)",
      "fr": "Französisch (FR)",
      "it": "Italienisch (IT)",
      "de": "Deutsch (DE)",
      "es": "Spanisch (ES)",
      "nl": "Niederländisch (NL)",
      "pt": "Portugiesisch (PT)"
    }
  },
  "es": {
    "app": {
      "title": "Selector de Agujas de Tatuaje",
      "subtitle": "Asesor de configuración técnica, decodificador de blíster y comparador de agujas para tatuadores profesionales y aprendices.",
      "themeToggle": "Cambiar tema",
      "embedButton": "Incrustar herramienta",
      "toolsCatalog": "Catálogo de Herramientas Poli",
      "titleTag": "Selector Profesional de Agujas de Tatuaje | Poli International",
      "languageSelect": "Seleccionar idioma"
    },
    "nav": {
      "selector": "Selector Rápido",
      "decoder": "Decodificador de Empaque",
      "comparator": "Comparador de Agujas",
      "reference": "Referencia Técnica",
      "ariaLabel": "Navegación principal"
    },
    "selector": {
      "title": "Encuentra tu Aguja Óptima",
      "subtitle": "Selecciona tu técnica de tatuaje, estilo artístico y tipo de piel para recibir recomendaciones instantáneas de configuración.",
      "techniqueLabel": "Técnica de Tatuado",
      "styleLabel": "Estilo Artístico Visual",
      "skinTypeLabel": "Tipo de Piel",
      "selectTechniquePrompt": "-- Seleccionar Técnica --",
      "selectStylePrompt": "-- Seleccionar Estilo --",
      "selectSkinPrompt": "-- Seleccionar Tipo de Piel --",
      "techniques": {
        "lining": "Líneas y Contornos",
        "shading": "Sombras y Difuminados",
        "packing": "Relleno Sólido de Color",
        "stippling": "Puntillismo y Dotwork",
        "graywash": "Negro y Gris / Lavado Suave"
      },
      "styles": {
        "traditional": "Tradicional Clásico / Old School",
        "fineLine": "Línea Fina y Micro",
        "realism": "Realismo y Retrato",
        "neoTraditional": "Neotradicional Contemporáneo",
        "japanese": "Japonés / Irezumi",
        "blackwork": "Blackwork y Geometría"
      },
      "skinTypes": {
        "normal": "Piel Normal",
        "thinDelicate": "Delgada / Delicada (Muñecas, Costillas, Cuello)",
        "thickTough": "Gruesa / Resistente (Palmas, Codos, Espalda)",
        "agingMature": "Piel Madura / Envejecida"
      },
      "submitBtn": "Obtener Recomendación",
      "resetBtn": "Restablecer",
      "validationAlert": "Por favor selecciona tanto un estilo de tatuaje como una técnica.",
      "noRecommendationAlert": "No se encontró una recomendación específica para esta combinación. Intenta con otras opciones."
    },
    "results": {
      "title": "Configuración de Aguja Recomendada",
      "needleCountLabel": "Número de Agujas",
      "configTypeLabel": "Tipo de Configuración",
      "bestForLabel": "Aplicación idónea",
      "settingsLabel": "Parámetros Operativos",
      "voltageLabel": "Voltaje",
      "speedLabel": "Velocidad de Máquina",
      "depthLabel": "Salida de Aguja",
      "proTipsLabel": "Consejos Técnicos",
      "alternativesLabel": "Alternativas Viables",
      "noSelectionPrompt": "Por favor elige una técnica y un estilo para ver las recomendaciones.",
      "copyCode": "Copiar Código de Aguja",
      "copied": "¡Copiado!",
      "diagramAriaLabel": "Diagrama de sección transversal de la aguja",
      "defaultNeedleCode": "9RL",
      "defaultNeedleName": "9 Línea redonda",
      "defaultNeedleCount": "9 agujas",
      "defaultConfigType": "Línea redonda (RL)"
    },
    "decoder": {
      "title": "Decodificador de Código de Blíster",
      "subtitle": "Introduce cualquier código de envase de aguja de tatuaje (ej. 9RL, 1209RL, 1011M1, 15RS, 7CM) para descifrar sus especificaciones físicas.",
      "inputLabel": "Código de Empaque",
      "placeholder": "ej. 1209RL, 11M1, 15RS, 7CM",
      "decodeBtn": "Decodificar Aguja",
      "notFoundTitle": "Código de Aguja No Encontrado",
      "notFoundDesc": "El código '{code}' no se encontró en la base de datos técnica. Prueba códigos como 9RL, 1209RL, 11M1, 15RS, 7CM o 9F.",
      "breakdownTitle": "Desglose de la Aguja",
      "countExplanation": "Número de microagujas en el grupo",
      "typeExplanation": "Configuración de agrupación de agujas",
      "patternLabel": "Disposición",
      "coverageLabel": "Diámetro del Grupo",
      "bestForTitle": "Aplicaciones Óptimas",
      "settingsTitle": "Ajustes de Máquina Recomendados",
      "prosTitle": "Ventajas Clínicas",
      "consTitle": "Consideraciones Técnicas",
      "inputAriaLabel": "Introducir código de aguja",
      "emptyCodeAlert": "Por favor introduce un código de aguja (ej. 9RL, 1209RL, 11M1)",
      "blisterGauge": "Calibre Blíster:",
      "diagramAriaLabel": "Diagrama del grupo de agujas decodificado"
    },
    "comparator": {
      "title": "Comparador de Agujas en Paralelo",
      "subtitle": "Compara secciones transversales, diámetro de cobertura efectiva y ajustes de trabajo para hasta tres configuraciones de agujas.",
      "slot1Label": "Primera Aguja",
      "slot2Label": "Segunda Aguja",
      "slot3Label": "Tercera Aguja (Opcional)",
      "chooseNeedlePrompt": "-- Elegir Aguja --",
      "noneOptional": "-- Ninguna (Opcional) --",
      "compareBtn": "Comparar Configuraciones",
      "minSelectionAlert": "Por favor selecciona al menos dos configuraciones de aguja para comparar.",
      "coverage": "Cobertura Efectiva",
      "pattern": "Patrón de Disposición",
      "voltage": "Voltaje de Trabajo",
      "bestFor": "Usos Principales",
      "diagramAriaLabel": "Diagrama comparativo de grupos de agujas"
    },
    "reference": {
      "title": "Matriz Técnica de Agujas",
      "subtitle": "Catálogo completo de configuraciones profesionales de agujas de tatuaje. Haz clic en cualquier configuración para verla en el decodificador.",
      "tabRL": "Líneas Redondas (RL)",
      "tabRS": "Sombras Redondas (RS)",
      "tabM1": "Magnums Trenzadas (M1)",
      "tabCM": "Magnums Curvas (CM)",
      "tabF": "Planas (F)",
      "hideChart": "Ocultar Tabla",
      "showChart": "Mostrar Tabla"
    },
    "embedModal": {
      "title": "Incrusta el Selector de Agujas en la Web de tu Estudio",
      "subtitle": "Añade esta herramienta técnica gratuita directamente a tu sitio web para tu equipo y aprendices.",
      "codeLabel": "Código HTML para Incrustar (Iframe Responsivo y Autónomo)",
      "copyBtn": "Copiar Código del Widget",
      "copied": "¡Código copiado al portapapeles!",
      "closeBtn": "Cerrar",
      "tip": "Se inserta limpiamente en WordPress, Squarespace, Webflow, Shopify o HTML personalizado.",
      "closeAriaLabel": "Cerrar modal de incrustación",
      "copyFailed": "Error al copiar código. Por favor selecciona y copia manualmente."
    },
    "footer": {
      "brandNote": "Publicado por Poli International como una herramienta profesional gratuita para tatuadores, piercers y dueños de estudio.",
      "toolsLink": "Explorar Todas las Herramientas Poli Studio",
      "disclaimer": "Los voltajes de trabajo, longitudes de recorrido y salida de aguja son recomendaciones técnicas básicas de la práctica profesional establecida. Ajusta siempre los valores según la respuesta de la piel, el torque de la máquina y la geometría del golpe.",
      "websiteLink": "Sitio Web Oficial de Poli International",
      "githubLink": "Repositorio GitHub"
    },
    "embed": {
      "titleTag": "Widget Selector de Agujas de Tatuaje | Poli International",
      "poweredBy": "Desarrollado por",
      "openFull": "Abrir Versión Completa ↗"
    },
    "gauges": {
      "10": "#10 (0,30 mm Bugpin estrecho)",
      "12": "#12 (0,35 mm Grosor estándar)",
      "08": "#08 (0,25 mm Micro Bugpin fino)",
      "06": "#06 (0,20 mm Ultra Micro diminuto)"
    },
    "needleTypes": {
      "RL": "Línea redonda",
      "RS": "Sombreador circular",
      "M1": "Magnum trenzada",
      "CM": "Magnum curva",
      "F": "Plana"
    },
    "patterns": {
      "single": "aguja única",
      "tight_round": "redondo cerrado",
      "loose_round": "redondo abierto",
      "flat_line": "línea plana",
      "curved_line": "línea curva",
      "flat_stacked": "plano apilado"
    },
    "speeds": {
      "very_slow": "muy lenta",
      "slow_to_medium": "lenta a media",
      "medium": "ritmo moderado",
      "medium_to_fast": "media a rápida",
      "fast": "ritmo rápido"
    },
    "needles": {
      "1RL": {
        "type": "Línea redonda",
        "speed": "muy lenta",
        "uses": [
          "detalles hiperfinos",
          "microtatuajes",
          "pecas estéticas",
          "tatuajes cosméticos"
        ],
        "pros": [
          "extremadamente precisa",
          "trauma cutáneo mínimo",
          "perfecta para detalles minúsculos"
        ],
        "cons": [
          "avance marcadamente lento",
          "requiere pulso experto",
          "riesgo fácil de sobrecargar la piel"
        ]
      },
      "3RL": {
        "type": "Línea redonda",
        "speed": "lenta a media",
        "uses": [
          "detalles finos",
          "textos de pequeño formato",
          "líneas sutiles",
          "retratos de realismo"
        ],
        "pros": [
          "precisión rigurosa",
          "trauma cutáneo mínimo",
          "control minucioso",
          "excelente para aprender"
        ],
        "cons": [
          "cobertura lenta de zonas",
          "requiere pulso firme y seguro",
          "no apta para trazos muy gruesos"
        ]
      },
      "5RL": {
        "type": "Línea redonda",
        "speed": "ritmo medio",
        "uses": [
          "líneas finas a medianas",
          "retratos de realismo",
          "caligrafía y letras",
          "trabajos minuciosos"
        ],
        "pros": [
          "ampliamente versátil",
          "excelente equilibrio",
          "altamente confiable",
          "estándar reconocido de la industria"
        ],
        "cons": [
          "demasiado fina para estilos gruesos",
          "más lenta que grupos de agujas mayores"
        ]
      },
      "7RL": {
        "type": "Línea redonda",
        "speed": "ritmo medio",
        "uses": [
          "líneas de grosor medio",
          "estilo neotradicional contemporáneo",
          "estilo japonés Irezumi",
          "trazado general"
        ],
        "pros": [
          "ampliamente versátil",
          "apta para casi cualquier estilo",
          "líneas limpias y nítidas",
          "elección muy popular"
        ],
        "cons": [
          "demasiado gruesa para detalles minuciosos",
          "demasiado fina para tradicional ancho"
        ]
      },
      "9RL": {
        "type": "Línea redonda",
        "speed": "media a rápida",
        "uses": [
          "líneas gruesas",
          "tatuajes tradicionales",
          "contornos firmes y nítidos",
          "diseños tribales"
        ],
        "pros": [
          "líneas potentes y nítidas",
          "cobertura veloz",
          "estupenda para tradicional clásico",
          "altamente confiable"
        ],
        "cons": [
          "demasiado gruesa para obras sutiles",
          "puede irritar pieles finas"
        ]
      },
      "11RL": {
        "type": "Línea redonda",
        "speed": "media a rápida",
        "uses": [
          "líneas sumamente gruesas",
          "tatuajes tradicionales",
          "diseños tribales grandes",
          "contornos anchos"
        ],
        "pros": [
          "impacto visual muy marcado",
          "rápida de aplicar",
          "óptima en piel gruesa",
          "gran poder cubriente"
        ],
        "cons": [
          "demasiado gruesa para la mayoría de piezas",
          "requiere experiencia previa consolidada",
          "riesgo latente de blowout"
        ]
      },
      "14RL": {
        "type": "Línea redonda",
        "speed": "ritmo rápido",
        "uses": [
          "líneas extragruesas",
          "diseños tribales grandes",
          "líneas tradicionales gruesas",
          "coberturas y cover-ups"
        ],
        "pros": [
          "trazo extragrueso",
          "cobertura veloz",
          "óptima para coberturas"
        ],
        "cons": [
          "configuración altamente especializada",
          "riesgo de dispersión de pigmento",
          "exige control técnico magistral"
        ]
      },
      "5RS": {
        "type": "Sombreador circular",
        "speed": "lenta a media",
        "uses": [
          "sombreado ligero",
          "sombreado para retratos",
          "mezcla de colores",
          "gradientes tenues"
        ],
        "pros": [
          "sombreado suave y difuso",
          "delicada con la dermis",
          "buena para retratos"
        ],
        "cons": [
          "cobertura lenta de zonas",
          "densidad de saturación limitada",
          "no apta para sombras muy marcadas"
        ]
      },
      "7RS": {
        "type": "Sombreador circular",
        "speed": "ritmo medio",
        "uses": [
          "sombreado de intensidad media",
          "trabajos a color",
          "degradados continuos",
          "sombreado general"
        ],
        "pros": [
          "ampliamente versátil",
          "excelente equilibrio",
          "sombreado seguro y constante"
        ],
        "cons": [
          "menos suave que configuraciones RS pequeñas",
          "menos densa que configuraciones RS mayores"
        ]
      },
      "9RS": {
        "type": "Sombreador circular",
        "speed": "ritmo medio",
        "uses": [
          "sombreado denso y sólido",
          "empaque de color",
          "sombreado clásico tradicional",
          "trabajos polivalentes"
        ],
        "pros": [
          "cobertura sólida e impenetrable",
          "ideal para tradicional",
          "altamente confiable"
        ],
        "cons": [
          "puede ser excesivamente densa para obras sutiles",
          "mayor impacto mecánico en la piel"
        ]
      },
      "11RS": {
        "type": "Sombreador circular",
        "speed": "media a rápida",
        "uses": [
          "sombreado compacto",
          "color sólido y uniforme",
          "sombreado marcado",
          "coberturas y cover-ups"
        ],
        "pros": [
          "saturación sumamente sólida",
          "cobertura veloz",
          "estupenda para trabajos intensos"
        ],
        "cons": [
          "desaconsejada para matices sutiles",
          "puede ser agresiva con la piel",
          "requiere experiencia previa consolidada"
        ]
      },
      "5M1": {
        "type": "Magnum trenzada",
        "speed": "ritmo medio",
        "uses": [
          "sombreado ligero",
          "mezcla de colores",
          "gradientes tenues y sutiles",
          "piezas de retrato"
        ],
        "pros": [
          "cobertura suave y ligera",
          "difuminados suaves y homogéneos",
          "delicada con la dermis"
        ],
        "cons": [
          "excesivamente lenta para extensiones grandes",
          "densidad de saturación limitada"
        ]
      },
      "7M1": {
        "type": "Magnum trenzada",
        "speed": "ritmo medio",
        "uses": [
          "sombreado suave y regular",
          "mezcla de colores",
          "sombreado para retratos",
          "trabajos polivalentes"
        ],
        "pros": [
          "ampliamente versátil",
          "cobertura uniforme y fluida",
          "estándar reconocido de la industria"
        ],
        "cons": [
          "puede resultar demasiado blanda para color sólido",
          "más lenta que magnums de mayor calibre"
        ]
      },
      "9M1": {
        "type": "Magnum trenzada",
        "speed": "media a rápida",
        "uses": [
          "sombreado general",
          "trabajos a color",
          "degradados suaves y progresivos",
          "cobertura de zonas extensas"
        ],
        "pros": [
          "cobertura veloz",
          "ampliamente versátil",
          "gran versatilidad de uso"
        ],
        "cons": [
          "demasiado ancha para detalles pequeños",
          "requiere una técnica rigurosa"
        ]
      },
      "11M1": {
        "type": "Magnum trenzada",
        "speed": "ritmo rápido",
        "uses": [
          "sombreado de áreas grandes",
          "empaque de color",
          "cobertura suave y homogénea",
          "trabajos de fondo"
        ],
        "pros": [
          "rápida de aplicar",
          "cobertura uniforme y fluida",
          "buena para superficies extensas"
        ],
        "cons": [
          "demasiado grande para tareas de detalle",
          "puede sobretrabajar áreas pequeñas"
        ]
      },
      "13M1": {
        "type": "Magnum trenzada",
        "speed": "ritmo rápido",
        "uses": [
          "relleno de superficies grandes",
          "empaque de color",
          "sombreado de fondo"
        ],
        "pros": [
          "velocidad de avance muy alta",
          "eficiente en extensiones grandes"
        ],
        "cons": [
          "demasiado voluminosa para detalles habituales",
          "requiere experiencia previa consolidada"
        ]
      },
      "15M1": {
        "type": "Magnum trenzada",
        "speed": "ritmo rápido",
        "uses": [
          "cobertura de superficies muy grandes",
          "sombreado de fondo",
          "empaque de color"
        ],
        "pros": [
          "sumamente rápida",
          "ideal para tatuajes grandes"
        ],
        "cons": [
          "destinada exclusivamente a usos específicos",
          "versatilidad de aplicación acotada"
        ]
      },
      "7CM": {
        "type": "Magnum curva",
        "speed": "lenta a media",
        "uses": [
          "difuminado suave sin cortes",
          "sombreado para retratos",
          "degradados suaves y progresivos",
          "sombreado delicado"
        ],
        "pros": [
          "acabado ultrasuave",
          "delicada con la dermis",
          "perfecta para retratos"
        ],
        "cons": [
          "avance de cobertura más lento",
          "requiere destreza y soltura",
          "coste unitario elevado"
        ]
      },
      "9CM": {
        "type": "Magnum curva",
        "speed": "ritmo medio",
        "uses": [
          "sombreado suave y regular",
          "fundido y difuminado",
          "piezas de retrato",
          "tatuajes realistas"
        ],
        "pros": [
          "suavidad sedosa insuperable",
          "la preferencia de profesionales",
          "difuminado excepcional"
        ],
        "cons": [
          "precio más elevado",
          "requiere una técnica rigurosa"
        ]
      },
      "11CM": {
        "type": "Magnum curva",
        "speed": "media a rápida",
        "uses": [
          "sombreado suave en superficies amplias",
          "mezcla de colores",
          "cobertura tenue"
        ],
        "pros": [
          "extremadamente suave",
          "rápida y respetuosa con la piel",
          "nivel profesional certificado"
        ],
        "cons": [
          "coste unitario elevado",
          "puede resultar demasiado blanda para color sólido"
        ]
      },
      "7F": {
        "type": "Plana",
        "speed": "ritmo medio",
        "uses": [
          "sombreado geométrico",
          "color sólido y uniforme",
          "composiciones tribales",
          "sombreado marcado"
        ],
        "pros": [
          "densidad sumamente alta",
          "cobertura sólida e impenetrable",
          "óptima para geometría"
        ],
        "cons": [
          "agresiva con el tejido cutáneo",
          "desaconsejada para matices sutiles",
          "requiere experiencia previa consolidada"
        ]
      },
      "9F": {
        "type": "Plana",
        "speed": "media a rápida",
        "uses": [
          "color sólido y uniforme",
          "diseños tribales",
          "diseños geométricos",
          "coberturas y cover-ups"
        ],
        "pros": [
          "solidez sobresaliente",
          "cobertura veloz",
          "estupenda para trabajos intensos"
        ],
        "cons": [
          "sumamente agresiva con la piel",
          "versatilidad de aplicación acotada",
          "trauma tisular notable"
        ]
      },
      "15F": {
        "type": "Plana",
        "speed": "ritmo rápido",
        "uses": [
          "color sólido en superficies muy extensas",
          "diseños tribales",
          "estilo blackwork",
          "coberturas y cover-ups"
        ],
        "pros": [
          "ritmo ultrarrápido",
          "solidez sobresaliente",
          "óptima para tribales grandes"
        ],
        "cons": [
          "configuración altamente especializada",
          "fuerte exigencia para la piel",
          "demanda destreza técnica avanzada"
        ]
      }
    },
    "toolsModal": {
      "title": "Suite de Herramientas de Estudio Poli",
      "subtitle": "Utilidades digitales profesionales gratuitas para tatuadores, anilladores y propietarios de estudios.",
      "visitAll": "Abrir el catálogo web completo",
      "closeBtn": "Cerrar",
      "closeAriaLabel": "Cerrar ventana de catálogo",
      "sizerName": "Calibrador de Piercing Corporal",
      "sizerDesc": "Calculadora interactiva de calibre, diámetro y longitud para colocaciones anatómicas de piercings.",
      "crmName": "CRM para Estudios",
      "crmDesc": "Sistema local de gestión de estudio para historiales de clientes, citas y seguimiento diario de procedimientos.",
      "benchmarkName": "Referencia de Precios para Estudios",
      "benchmarkDesc": "Comparativas regionales de listas de precios y calculadoras para estudios de arte corporal.",
      "consentName": "Formulario de Consentimiento y Salud",
      "consentDesc": "Formularios digitales de registro, declaraciones de procedimiento y exportación de expedientes de clientes.",
      "logName": "Libro de Esterilización del Estudio",
      "logDesc": "Seguimiento de ciclos de autoclave, documentación de pruebas de esporas y registro de instrumental procesado."
    },
    "languages": {
      "en": "Inglés (EN)",
      "fr": "Francés (FR)",
      "it": "Idioma Italiano (IT)",
      "de": "Alemán (DE)",
      "es": "Español (ES)",
      "nl": "Holandés (NL)",
      "pt": "Portugués (PT)"
    }
  },
  "nl": {
    "app": {
      "title": "Tatoeagenaald Kiezer",
      "subtitle": "Professionele configuratie-adviseur, blistercode-decoder en naaldvergelijker voor tatoeëerders en leerlingen.",
      "themeToggle": "Thema wisselen",
      "embedButton": "Tool insluiten",
      "toolsCatalog": "Poli Gereedschappencatalogus",
      "titleTag": "Professionele Tatoeagenaald Kiezer | Poli International",
      "languageSelect": "Taal selecteren"
    },
    "nav": {
      "selector": "Snelle Kiezer",
      "decoder": "Naaldcode-decoder",
      "comparator": "Naaldvergelijker",
      "reference": "Technische Referentie",
      "ariaLabel": "Hoofdnavigatie"
    },
    "selector": {
      "title": "Vind Uw Optimale Naald",
      "subtitle": "Selecteer uw tatoeagetechniek, artistieke stijl en huidconditie voor directe configuratie-aanbevelingen.",
      "techniqueLabel": "Techniek",
      "styleLabel": "Artistieke Stijl",
      "skinTypeLabel": "Huidtype",
      "selectTechniquePrompt": "-- Selecteer Techniek --",
      "selectStylePrompt": "-- Selecteer Stijl --",
      "selectSkinPrompt": "-- Selecteer Huidtype --",
      "techniques": {
        "lining": "Lijnen en Contouren",
        "shading": "Schaduwen en Overgangen",
        "packing": "Effen Kleur Vullen",
        "stippling": "Stippelen en Dotwork",
        "graywash": "Zwart & Grijs / Zachte Wash"
      },
      "styles": {
        "traditional": "Traditioneel / Old School",
        "fineLine": "Fine Line en Micro",
        "realism": "Realisme en Portret",
        "neoTraditional": "Neo-Traditioneel",
        "japanese": "Japans / Irezumi",
        "blackwork": "Blackwork en Geometrie"
      },
      "skinTypes": {
        "normal": "Normale Huid",
        "thinDelicate": "Dun / Gevoelig (Polsen, Ribben, Hals)",
        "thickTough": "Dik / Taai (Handpalmen, Ellebogen, Rug)",
        "agingMature": "Oudere / Kwetsbare Huid"
      },
      "submitBtn": "Aanbeveling Ontvangen",
      "resetBtn": "Herstellen",
      "validationAlert": "Selecteer alstublieft zowel een stijl als een techniek.",
      "noRecommendationAlert": "Geen specifieke aanbeveling gevonden voor deze combinatie. Probeer andere opties."
    },
    "results": {
      "title": "Aanbevolen Naaldconfiguratie",
      "needleCountLabel": "Aantal Naalden",
      "configTypeLabel": "Configuratietype",
      "bestForLabel": "Ideaal Voor",
      "settingsLabel": "Bedrijfsparameters",
      "voltageLabel": "Werkvoltage",
      "speedLabel": "Machinesnelheid",
      "depthLabel": "Naaldslagdiepte",
      "proTipsLabel": "Technische Richtlijnen",
      "alternativesLabel": "Bruikbare Alternatieven",
      "noSelectionPrompt": "Kies een techniek en stijl om aanbevelingen te bekijken.",
      "copyCode": "Code Kopiëren",
      "copied": "Gekopieerd!",
      "diagramAriaLabel": "Doorsnedediagram van de naald",
      "defaultNeedleCode": "9RL",
      "defaultNeedleName": "9 Ronde liner",
      "defaultNeedleCount": "9 naalden",
      "defaultConfigType": "Ronde liner (RL)"
    },
    "decoder": {
      "title": "Blisterverpakking Decoder",
      "subtitle": "Voer een willekeurige verpakkingscode in (bijv. 9RL, 1209RL, 1011M1, 15RS, 7CM) om de fysieke specificaties te ontcijferen.",
      "inputLabel": "Verpakkingscode",
      "placeholder": "bijv. 1209RL, 11M1, 15RS, 7CM",
      "decodeBtn": "Naald Decoderen",
      "notFoundTitle": "Naaldcode Niet Gevonden",
      "notFoundDesc": "De code '{code}' is niet gevonden in de technische database. Probeer codes zoals 9RL, 1209RL, 11M1, 15RS, 7CM of 9F.",
      "breakdownTitle": "Naaldenanalyse",
      "countExplanation": "Aantal micronaalden in de bundel",
      "typeExplanation": "Groepeerconfiguratie van de bundel",
      "patternLabel": "Rangschikking",
      "coverageLabel": "Bundeldiameter",
      "bestForTitle": "Optimale Toepassingen",
      "settingsTitle": "Aanbevolen Machine-instellingen",
      "prosTitle": "Klinische Voordelen",
      "consTitle": "Techniekaandachtspunten",
      "inputAriaLabel": "Voer naaldcode in",
      "emptyCodeAlert": "Voer een naaldcode in (bijv. 9RL, 1209RL, 11M1)",
      "blisterGauge": "Blister Dikte:",
      "diagramAriaLabel": "Diagram van gedecodeerde naaldbundel"
    },
    "comparator": {
      "title": "Naaldvergelijker Naast Elkaar",
      "subtitle": "Vergelijk bundeldoorsneden, effectieve dekkingsdiameter en werkinstellingen voor maximaal drie naaldconfiguraties.",
      "slot1Label": "Eerste Naald",
      "slot2Label": "Tweede Naald",
      "slot3Label": "Derde Naald (Optioneel)",
      "chooseNeedlePrompt": "-- Kies een Naald --",
      "noneOptional": "-- Geen (Optioneel) --",
      "compareBtn": "Configuraties Vergelijken",
      "minSelectionAlert": "Selecteer ten minste twee naaldconfiguraties om te vergelijken.",
      "coverage": "Effectieve Dekking",
      "pattern": "Bundelpatroon",
      "voltage": "Werkvoltage",
      "bestFor": "Hoofdtoepassingen",
      "diagramAriaLabel": "Vergelijkingsdiagram van naaldbundels"
    },
    "reference": {
      "title": "Technische Naaldmatrix",
      "subtitle": "Volledige bibliotheek van professionele tatoeagenaaldconfiguraties. Klik op een configuratie om deze in de decoder te openen.",
      "tabRL": "Ronde Liners (RL)",
      "tabRS": "Ronde Shaders (RS)",
      "tabM1": "Gevlochten Magnums (M1)",
      "tabCM": "Gebogen Magnums (CM)",
      "tabF": "Platte Naalden (F)",
      "hideChart": "Tabel Verbergen",
      "showChart": "Tabel Tonen"
    },
    "embedModal": {
      "title": "Sluit de Naaldkiezer in op Uw Studio-website",
      "subtitle": "Voeg deze gratis technische tool rechtstreeks toe aan uw website voor uw team en leerlingen.",
      "codeLabel": "HTML-insluitcode (Zelfstandige responsieve iframe)",
      "copyBtn": "Code Kopiëren",
      "copied": "Code gekopieerd naar klembord!",
      "closeBtn": "Sluiten",
      "tip": "Werkt vlekkeloos in WordPress, Squarespace, Webflow, Shopify of aangepaste HTML.",
      "closeAriaLabel": "Insluitvenster sluiten",
      "copyFailed": "Kopiëren van code mislukt. Selecteer en kopieer handmatig."
    },
    "footer": {
      "brandNote": "Gepubliceerd door Poli International als gratis professioneel instrument voor tatoeëerders, piercers en studio-eigenaren.",
      "toolsLink": "Ontdek Alle Poli Studio Tools",
      "disclaimer": "Werkspanningen, slaglengtes en naaldhangdieptes zijn technische basisadviezen uit de gevestigde beroepspraktijk. Pas instellingen altijd aan op basis van huidreactie, motorkoppel en slaggeometrie.",
      "websiteLink": "Officiële Website van Poli International",
      "githubLink": "GitHub-broncode"
    },
    "embed": {
      "titleTag": "Tatoeagenaald Kiezer Widget | Poli International",
      "poweredBy": "Mogelijk gemaakt door",
      "openFull": "Volledige Versie Openen ↗"
    },
    "gauges": {
      "10": "#10 (0,30 mm Fijne Bugpin)",
      "12": "#12 (0,35 mm Standaard dikte)",
      "08": "#08 (0,25 mm Micro Bugpin dun)",
      "06": "#06 (0,20 mm Ultra Micro extra dun)"
    },
    "needleTypes": {
      "RL": "Ronde liner",
      "RS": "Ronde shader",
      "M1": "Gevlochten magnum",
      "CM": "Gebogen magnum",
      "F": "Plat"
    },
    "patterns": {
      "single": "enkele naald",
      "tight_round": "strakke ronde bundel",
      "loose_round": "losse ronde bundel",
      "flat_line": "platte lijn",
      "curved_line": "gebogen lijn",
      "flat_stacked": "plat gestapeld"
    },
    "speeds": {
      "very_slow": "zeer langzaam",
      "slow_to_medium": "langzaam tot gemiddeld",
      "medium": "gemiddeld",
      "medium_to_fast": "gemiddeld tot snel",
      "fast": "snel"
    },
    "needles": {
      "1RL": {
        "type": "Ronde liner",
        "speed": "zeer langzaam",
        "uses": [
          "ultrafijne details",
          "micro-tatoeages",
          "sproetjes-pigmentatie",
          "cosmetische tatoeages"
        ],
        "pros": [
          "uiterst nauwkeurig",
          "minimaal huidtrauma",
          "ideaal voor microscopische details"
        ],
        "cons": [
          "buitengewoon trage voortgang",
          "vereist ervaren hand",
          "huid raakt snel overwerkt"
        ]
      },
      "3RL": {
        "type": "Ronde liner",
        "speed": "langzaam tot gemiddeld",
        "uses": [
          "fijne details",
          "kleine belettering",
          "verfijnde lijnen",
          "realistische portretten"
        ],
        "pros": [
          "nauwkeurig",
          "minimaal huidtrauma",
          "verfijnde beheersing",
          "ideaal voor beginners in opleiding"
        ],
        "cons": [
          "trage oppervlaktedekking",
          "vereist een vaste hand",
          "ongeschikt voor zwaar werk"
        ]
      },
      "5RL": {
        "type": "Ronde liner",
        "speed": "gemiddeld",
        "uses": [
          "dunne tot gemiddelde lijnen",
          "realistische portretten",
          "belettering en teksten",
          "gedetailleerd werk"
        ],
        "pros": [
          "veelzijdig inzetbaar",
          "goede balans",
          "betrouwbare werking",
          "erkende industriestandaard"
        ],
        "cons": [
          "wellicht te fijn voor fors lijnwerk",
          "trager dan naalden met meer punten"
        ]
      },
      "7RL": {
        "type": "Ronde liner",
        "speed": "gemiddeld",
        "uses": [
          "middelgrote lijnen",
          "neo-traditionele stijl",
          "Japanse Irezumi-stijl",
          "algemeen lijnwerk"
        ],
        "pros": [
          "veelzijdig inzetbaar",
          "geschikt voor de meeste stijlen",
          "strakke schone lijnen",
          "veelgekozen favoriet"
        ],
        "cons": [
          "te dik voor uiterst fijne details",
          "te dun voor zwaar traditioneel werk"
        ]
      },
      "9RL": {
        "type": "Ronde liner",
        "speed": "gemiddeld tot snel",
        "uses": [
          "dikke lijnen",
          "traditionele tatoeages",
          "krachtige buitenlijnen",
          "tribal-motieven"
        ],
        "pros": [
          "krachtige solide lijnen",
          "vlotte oppervlaktedekking",
          "voortreffelijk voor traditioneel",
          "betrouwbare werking"
        ],
        "cons": [
          "te dik voor verfijnd werk",
          "kan dunne huid gemakkelijk beschadigen"
        ]
      },
      "11RL": {
        "type": "Ronde liner",
        "speed": "gemiddeld tot snel",
        "uses": [
          "zeer opvallende lijnen",
          "traditionele tatoeages",
          "grote tribal-tatoeages",
          "dikke buitencontouren"
        ],
        "pros": [
          "zeer krachtige uitstraling",
          "snelwerkend",
          "sterk op dikke stugge huid",
          "krachtige dekkracht"
        ],
        "cons": [
          "te zwaar voor het meeste werk",
          "vereist gedegen ervaring",
          "risico op inktuitloop (blowout)"
        ]
      },
      "14RL": {
        "type": "Ronde liner",
        "speed": "snel",
        "uses": [
          "extra dikke lijnen",
          "grote tribal-tatoeages",
          "dikke traditionele lijnen",
          "cover-up projecten"
        ],
        "pros": [
          "buitengewoon dik profiel",
          "vlotte oppervlaktedekking",
          "geschikt voor cover-up werk"
        ],
        "cons": [
          "uiterst gespecialiseerde toepassing",
          "gevaar voor inktuitloop (blowout)",
          "vraagt om meesterlijke handbeheersing"
        ]
      },
      "5RS": {
        "type": "Ronde shader",
        "speed": "langzaam tot gemiddeld",
        "uses": [
          "subtiele schaduwpartijen",
          "schaduwwerk voor portretten",
          "kleuren mengen",
          "zachte overgangen"
        ],
        "pros": [
          "zachte diffuse schaduwen",
          "vriendelijk voor de opperhuid",
          "fijn voor portretten"
        ],
        "cons": [
          "trage oppervlaktedekking",
          "beperkte inktdekking",
          "ongeschikt voor zware donkere schaduw"
        ]
      },
      "7RS": {
        "type": "Ronde shader",
        "speed": "gemiddeld",
        "uses": [
          "gemiddelde schaduwsterkte",
          "kleurwerk",
          "vloeiende kleurverlopen",
          "algemeen schaduwwerk"
        ],
        "pros": [
          "veelzijdig inzetbaar",
          "goede balans",
          "betrouwbaar schaduwresultaat"
        ],
        "cons": [
          "niet zo zacht als kleinere RS-naalden",
          "minder compact dan grotere RS-naalden"
        ]
      },
      "9RS": {
        "type": "Ronde shader",
        "speed": "gemiddeld",
        "uses": [
          "diepe donkere schaduw",
          "kleurverzadiging",
          "traditioneel schaduwwerk",
          "algemene toepassingen"
        ],
        "pros": [
          "volledig dekkende laag",
          "geschikt voor traditionele stijl",
          "betrouwbare werking"
        ],
        "cons": [
          "mogelijk te dekkend voor heel subtiel werk",
          "zwaardere belasting voor de huid"
        ]
      },
      "11RS": {
        "type": "Ronde shader",
        "speed": "gemiddeld tot snel",
        "uses": [
          "dichte schaduw",
          "dekkende effen kleur",
          "donkere schaduw",
          "cover-up projecten"
        ],
        "pros": [
          "zeer stevige vulling",
          "vlotte oppervlaktedekking",
          "geweldig voor opvallend werk"
        ],
        "cons": [
          "ongeschikt voor uiterst subtiele nuances",
          "kan belastend zijn voor de huid",
          "vereist gedegen ervaring"
        ]
      },
      "5M1": {
        "type": "Gevlochten magnum",
        "speed": "gemiddeld",
        "uses": [
          "subtiele schaduwpartijen",
          "kleuren mengen",
          "subtiele vloeiende verlopen",
          "portretcreaties"
        ],
        "pros": [
          "zachte lichte dekking",
          "zacht in elkaar vloeiend",
          "vriendelijk voor de opperhuid"
        ],
        "cons": [
          "te traag voor grote vlakken",
          "beperkte inktdekking"
        ]
      },
      "7M1": {
        "type": "Gevlochten magnum",
        "speed": "gemiddeld",
        "uses": [
          "vloeiend zacht schaduwen",
          "kleuren mengen",
          "schaduwwerk voor portretten",
          "algemene toepassingen"
        ],
        "pros": [
          "veelzijdig inzetbaar",
          "gelijkmatige vloeiende dekking",
          "erkende industriestandaard"
        ],
        "cons": [
          "soms te zacht voor massieve kleurvlakken",
          "langzamer dan grotere magnums"
        ]
      },
      "9M1": {
        "type": "Gevlochten magnum",
        "speed": "gemiddeld tot snel",
        "uses": [
          "algemeen schaduwwerk",
          "kleurwerk",
          "vloeiende zachte overgangen",
          "dekking van grote zones"
        ],
        "pros": [
          "vlotte oppervlaktedekking",
          "veelzijdig inzetbaar",
          "zeer geschikt voor de meeste klussen"
        ],
        "cons": [
          "mogelijk te breed voor miniatuurdetails",
          "vereist onberispelijke techniek"
        ]
      },
      "11M1": {
        "type": "Gevlochten magnum",
        "speed": "snel",
        "uses": [
          "grootschalig schaduwen",
          "kleurverzadiging",
          "gladde egale dekking",
          "achtergrondwerk"
        ],
        "pros": [
          "snelwerkend",
          "gelijkmatige vloeiende dekking",
          "geschikt voor grote oppervlakken"
        ],
        "cons": [
          "te grof voor fijn detailwerk",
          "kan kleine vlakken overbelasten"
        ]
      },
      "13M1": {
        "type": "Gevlochten magnum",
        "speed": "snel",
        "uses": [
          "opvullen van grote vlakken",
          "kleurverzadiging",
          "achtergrondschaduw"
        ],
        "pros": [
          "zeer vlot werktempo",
          "efficiënt voor grote vlakken"
        ],
        "cons": [
          "te fors voor het meeste detailwerk",
          "vereist gedegen ervaring"
        ]
      },
      "15M1": {
        "type": "Gevlochten magnum",
        "speed": "snel",
        "uses": [
          "bedekking van zeer grote vlakken",
          "achtergrondschaduw",
          "kleurverzadiging"
        ],
        "pros": [
          "extreem snel in uitvoering",
          "geweldig voor omvangrijke tatoeages"
        ],
        "cons": [
          "alleen voor specialistisch gebruik",
          "weinig veelzijdig inzetbaar"
        ]
      },
      "7CM": {
        "type": "Gebogen magnum",
        "speed": "langzaam tot gemiddeld",
        "uses": [
          "zacht mengen zonder randen",
          "schaduwwerk voor portretten",
          "vloeiende zachte overgangen",
          "subtiele schaduw"
        ],
        "pros": [
          "ultrazachte afwerking",
          "vriendelijk voor de opperhuid",
          "volmaakt voor portretwerk"
        ],
        "cons": [
          "langzamere dekking",
          "vraagt om vaardigheid",
          "hogere aanschafprijs"
        ]
      },
      "9CM": {
        "type": "Gebogen magnum",
        "speed": "gemiddeld",
        "uses": [
          "vloeiend zacht schaduwen",
          "kleurovergangen mengen",
          "portretcreaties",
          "fotorealistische tatoeages"
        ],
        "pros": [
          "boterzachte soepelheid",
          "keuze van vakmensen",
          "uitstekend in elkaar overlopend"
        ],
        "cons": [
          "duurdere categorie",
          "vereist onberispelijke techniek"
        ]
      },
      "11CM": {
        "type": "Gebogen magnum",
        "speed": "gemiddeld tot snel",
        "uses": [
          "egaal schaduwen op grote vlakken",
          "kleuren mengen",
          "zachte oppervlaktedekking"
        ],
        "pros": [
          "uitzonderlijk egaal",
          "snel en zacht voor het weefsel",
          "professionele kwaliteitsklasse"
        ],
        "cons": [
          "hogere aanschafprijs",
          "soms te zacht voor massieve kleurvlakken"
        ]
      },
      "7F": {
        "type": "Platte configuratie",
        "speed": "gemiddeld",
        "uses": [
          "geometrisch schaduwwerk",
          "dekkende effen kleur",
          "tribal-projecten",
          "donkere schaduw"
        ],
        "pros": [
          "zeer compacte dichtheid",
          "volledig dekkende laag",
          "uitstekend voor geometrisch werk"
        ],
        "cons": [
          "zwaar voor het huidweefsel",
          "ongeschikt voor uiterst subtiele nuances",
          "vereist gedegen ervaring"
        ]
      },
      "9F": {
        "type": "Platte configuratie",
        "speed": "gemiddeld tot snel",
        "uses": [
          "dekkende effen kleur",
          "tribal-motieven",
          "geometrische vormen",
          "cover-up projecten"
        ],
        "pros": [
          "uiterst solide vulling",
          "vlotte oppervlaktedekking",
          "geweldig voor opvallend werk"
        ],
        "cons": [
          "zeer agressief voor de huid",
          "weinig veelzijdig inzetbaar",
          "aanzienlijk weefseltrauma"
        ]
      },
      "15F": {
        "type": "Platte configuratie",
        "speed": "snel",
        "uses": [
          "effen kleur op zeer grote oppervlakken",
          "tribal-motieven",
          "blackwork-tatoeages",
          "cover-up projecten"
        ],
        "pros": [
          "ultrasnelle werksnelheid",
          "uiterst solide vulling",
          "uitstekend voor forse tribals"
        ],
        "cons": [
          "uiterst gespecialiseerde toepassing",
          "forse belasting van het weefsel",
          "vraagt om grondige vakkennis"
        ]
      }
    },
    "toolsModal": {
      "title": "Poli Studio Gereedschapssuite",
      "subtitle": "Gratis professionele digitale hulpmiddelen voor tatoeëerders, piercers en studio-eigenaren.",
      "visitAll": "Volledige webcatalogus openen",
      "closeBtn": "Sluiten",
      "closeAriaLabel": "Catalogusvenster sluiten",
      "sizerName": "Bodypiercing Maatcalculator",
      "sizerDesc": "Interactieve rekenmachine voor dikte, diameter en lengte van anatomische piercingplaatsingen.",
      "crmName": "Studio-CRM-Systeem",
      "crmDesc": "Lokaal studiobeheersysteem voor klantgeschiedenis, afspraken en dagelijkse registratie van ingrepen.",
      "benchmarkName": "Studio Tarievenbenchmark",
      "benchmarkDesc": "Regionale tarievenvergelijkingen en prijscalculators voor body art-studio's.",
      "consentName": "Toestemmings- en Gezondheidsformulier",
      "consentDesc": "Digitale intakeformulieren, procedureverklaringen en export van klantendossiers.",
      "logName": "Studio Sterilisatielogboek",
      "logDesc": "Registratie van autoclaafcycli, sporentestdocumentatie en verwerking van instrumenten."
    },
    "languages": {
      "en": "Engels (EN)",
      "fr": "Frans (FR)",
      "it": "Italiaans (IT)",
      "de": "Duits (DE)",
      "es": "Spaans (ES)",
      "nl": "Nederlands (NL)",
      "pt": "Portugees (PT)"
    }
  },
  "pt": {
    "app": {
      "title": "Seletor de Agulhas de Tatuagem",
      "subtitle": "Orientador técnico de configurações, decodificador de blister e comparador de agulhas para tatuadores profissionais e aprendizes.",
      "themeToggle": "Alternar tema",
      "embedButton": "Incorporar ferramenta",
      "toolsCatalog": "Catálogo de Ferramentas Poli",
      "titleTag": "Seletor Profissional de Agulhas de Tatuagem | Poli International",
      "languageSelect": "Escolher o idioma"
    },
    "nav": {
      "selector": "Seletor Rápido",
      "decoder": "Descodificador de Agulhas",
      "comparator": "Comparador de Agulhas",
      "reference": "Referência Técnica",
      "ariaLabel": "Navegação principal"
    },
    "selector": {
      "title": "Encontre a Sua Agulha Ideal",
      "subtitle": "Selecione a sua técnica de tatuagem, estilo artístico e condição da pele para receber recomendações instantâneas de configuração.",
      "techniqueLabel": "Técnica de Trabalho",
      "styleLabel": "Estilo Artístico do Desenho",
      "skinTypeLabel": "Tipo de Pele",
      "selectTechniquePrompt": "-- Selecionar Técnica --",
      "selectStylePrompt": "-- Selecionar Estilo --",
      "selectSkinPrompt": "-- Selecionar Tipo de Pele --",
      "techniques": {
        "lining": "Traços e Contornos",
        "shading": "Sombras e Degradês",
        "packing": "Preenchimento Sólido de Cor",
        "stippling": "Pontilhismo e Dotwork",
        "graywash": "Preto e Cinza / Lavado Suave"
      },
      "styles": {
        "traditional": "Estilo Tradicional / Old School",
        "fineLine": "Traço Fino e Micro",
        "realism": "Realismo e Retrato",
        "neoTraditional": "Vertente Neotradicional",
        "japanese": "Japonês / Irezumi",
        "blackwork": "Blackwork e Arte Geométrica"
      },
      "skinTypes": {
        "normal": "Pele Normal",
        "thinDelicate": "Fina / Delicada (Pulsos, Costelas, Pescoço)",
        "thickTough": "Espessa / Resistente (Palmas, Cotovelos, Costas)",
        "agingMature": "Pele Madura / Envelhecida"
      },
      "submitBtn": "Obter Recomendação",
      "resetBtn": "Redefinir",
      "validationAlert": "Por favor selecione tanto o estilo de tatuagem quanto a técnica.",
      "noRecommendationAlert": "Nenhuma recomendação específica encontrada para esta combinação. Tente opções diferentes."
    },
    "results": {
      "title": "Configuração de Agulha Recomendada",
      "needleCountLabel": "Número de Agulhas",
      "configTypeLabel": "Tipo de Configuração",
      "bestForLabel": "Mais indicada para",
      "settingsLabel": "Parâmetros Operacionais",
      "voltageLabel": "Voltagem",
      "speedLabel": "Velocidade da Máquina",
      "depthLabel": "Comprimento do Golpe",
      "proTipsLabel": "Orientações Técnicas",
      "alternativesLabel": "Alternativas Viáveis",
      "noSelectionPrompt": "Por favor escolha uma técnica e um estilo para ver as recomendações.",
      "copyCode": "Copiar Referência da Agulha",
      "copied": "Copiado!",
      "diagramAriaLabel": "Diagrama de corte transversal da agulha",
      "defaultNeedleCode": "9RL",
      "defaultNeedleName": "9 Traço redondo",
      "defaultNeedleCount": "9 agulhas",
      "defaultConfigType": "Traço redondo (RL)"
    },
    "decoder": {
      "title": "Decodificador de Código de Blister",
      "subtitle": "Insira qualquer código de embalagem de agulha de tatuagem (ex. 9RL, 1209RL, 1011M1, 15RS, 7CM) para decifrar suas especificações físicas.",
      "inputLabel": "Código da Embalagem",
      "placeholder": "ex.: 1209RL, 11M1, 15RS, 7CM",
      "decodeBtn": "Decodificar Agulha",
      "notFoundTitle": "Código de Agulha Não Encontrado",
      "notFoundDesc": "O código '{code}' não foi localizado no banco de dados técnico. Tente códigos como 9RL, 1209RL, 11M1, 15RS, 7CM ou 9F.",
      "breakdownTitle": "Estrutura da Agulha",
      "countExplanation": "Número de microagulhas no agrupamento",
      "typeExplanation": "Configuração de agrupamento das agulhas",
      "patternLabel": "Disposição",
      "coverageLabel": "Diâmetro do Agrupamento",
      "bestForTitle": "Aplicações Ideais",
      "settingsTitle": "Ajustes Recomendados da Máquina",
      "prosTitle": "Vantagens Clínicas",
      "consTitle": "Considerações Técnicas",
      "inputAriaLabel": "Inserir código da agulha",
      "emptyCodeAlert": "Por favor insira um código de agulha (ex. 9RL, 1209RL, 11M1)",
      "blisterGauge": "Calibre Blister:",
      "diagramAriaLabel": "Diagrama do agrupamento decodificado"
    },
    "comparator": {
      "title": "Comparador de Agulhas Lado a Lado",
      "subtitle": "Compare seções transversais, diâmetro efetivo de cobertura e parâmetros de trabalho para até três configurações de agulhas.",
      "slot1Label": "Primeira Agulha",
      "slot2Label": "Segunda Agulha",
      "slot3Label": "Terceira Agulha (Opcional)",
      "chooseNeedlePrompt": "-- Escolha uma Agulha --",
      "noneOptional": "-- Nenhuma (Opcional) --",
      "compareBtn": "Comparar Configurações",
      "minSelectionAlert": "Por favor selecione pelo menos duas configurações de agulha para comparar.",
      "coverage": "Cobertura Efetiva",
      "pattern": "Padrão de Disposição",
      "voltage": "Voltagem de Trabalho",
      "bestFor": "Usos Principais",
      "diagramAriaLabel": "Diagrama comparativo dos agrupamentos"
    },
    "reference": {
      "title": "Matriz Técnica de Agulhas",
      "subtitle": "Catálogo completo de configurações profissionais de agulhas de tatuagem. Clique em qualquer configuração para vê-la no decodificador.",
      "tabRL": "Traço Redondo (RL)",
      "tabRS": "Sombra Redonda (RS)",
      "tabM1": "Magnums Trançados (M1)",
      "tabCM": "Magnums Curvados (CM)",
      "tabF": "Planos (F)",
      "hideChart": "Ocultar Tabela",
      "showChart": "Exibir Tabela"
    },
    "embedModal": {
      "title": "Incorpore o Seletor de Agulhas no Site do seu Estúdio",
      "subtitle": "Adicione esta ferramenta técnica gratuita diretamente ao seu site para a equipe e aprendizes do estúdio.",
      "codeLabel": "Código HTML de Incorporação (Iframe Responsivo e Autónomo)",
      "copyBtn": "Copiar Código de Incorporação",
      "copied": "Código copiado para a área de transferência!",
      "closeBtn": "Fechar",
      "tip": "Cola-se perfeitamente em WordPress, Squarespace, Webflow, Shopify ou HTML personalizado.",
      "closeAriaLabel": "Fechar modal de incorporação",
      "copyFailed": "Falha ao copiar o código. Por favor selecione e copie manualmente."
    },
    "footer": {
      "brandNote": "Publicado pela Poli International como ferramenta profissional gratuita para tatuadores, piercers e donos de estúdio.",
      "toolsLink": "Explorar Todas as Ferramentas Poli Studio",
      "disclaimer": "Voltagens de operação, comprimentos de curso e exposição da agulha são recomendações técnicas básicas da prática profissional consolidada. Ajuste sempre as configurações de acordo com a resposta da pele, o torque da máquina e a geometria do golpe.",
      "websiteLink": "Site Oficial da Poli International",
      "githubLink": "Repositório GitHub"
    },
    "embed": {
      "titleTag": "Widget Seletor de Agulhas de Tatuagem | Poli International",
      "poweredBy": "Desenvolvido por",
      "openFull": "Abrir Versão Completa ↗"
    },
    "gauges": {
      "10": "#10 (0,30 mm Bugpin estreito)",
      "12": "#12 (0,35 mm Calibre padrão)",
      "08": "#08 (0,25 mm Micro Bugpin extrafino)",
      "06": "#06 (0,20 mm Ultra Micro minúsculo)"
    },
    "needleTypes": {
      "RL": "Traço redondo",
      "RS": "Sombreador redondo",
      "M1": "Magnum trançado",
      "CM": "Magnum curvado",
      "F": "Plano"
    },
    "patterns": {
      "single": "agulha única",
      "tight_round": "redondo apertado",
      "loose_round": "redondo solto",
      "flat_line": "linha plana",
      "curved_line": "linha curvada",
      "flat_stacked": "plano empilhado"
    },
    "speeds": {
      "very_slow": "muito lenta",
      "slow_to_medium": "lenta a média",
      "medium": "média",
      "medium_to_fast": "média a rápida",
      "fast": "avanço veloz"
    },
    "needles": {
      "1RL": {
        "type": "Traço redondo",
        "speed": "muito lenta",
        "uses": [
          "detalhes hiperfinos",
          "microtatuagens",
          "sardas estéticas",
          "tatuagens cosméticas"
        ],
        "pros": [
          "extremamente precisa",
          "trauma cutâneo mínimo",
          "perfeita para detalhes minúsculos"
        ],
        "cons": [
          "avanço notavelmente lento",
          "exige mão experiente",
          "facilidade em machucar o tecido"
        ]
      },
      "3RL": {
        "type": "Traço redondo",
        "speed": "lenta a média",
        "uses": [
          "detalhes minuciosos",
          "textos de pequeno formato",
          "linhas delicadas",
          "retratos realistas"
        ],
        "pros": [
          "precisão rigorosa",
          "trauma cutâneo mínimo",
          "controle minucioso",
          "excelente para aprendizagem"
        ],
        "cons": [
          "cobertura lenta de superfícies",
          "requer pulso firme e estável",
          "inadequada para traços muito grossos"
        ]
      },
      "5RL": {
        "type": "Traço redondo",
        "speed": "média",
        "uses": [
          "linhas finas a médias",
          "retratos realistas",
          "caligrafia e textos",
          "trabalhos detalhados"
        ],
        "pros": [
          "amplamente versátil",
          "ótimo equilíbrio",
          "altamente confiável",
          "padrão reconhecido da indústria"
        ],
        "cons": [
          "fina demais para estilos encorpados",
          "mais lenta que agrupamentos maiores"
        ]
      },
      "7RL": {
        "type": "Traço redondo",
        "speed": "média",
        "uses": [
          "linhas de espessura média",
          "estilo neotradicional",
          "estilo japonês Irezumi",
          "traçado geral"
        ],
        "pros": [
          "amplamente versátil",
          "versátil para a maioria dos estilos",
          "linhas limpas e nítidas",
          "escolha muito popular"
        ],
        "cons": [
          "grossa demais para detalhes minuciosos",
          "fina demais para tradicional encorpado"
        ]
      },
      "9RL": {
        "type": "Traço redondo",
        "speed": "média a rápida",
        "uses": [
          "linhas grossas",
          "tatuagens tradicionais",
          "contornos firmes e nítidos",
          "desenhos tribais"
        ],
        "pros": [
          "linhas potentes e nítidas",
          "cobertura célere",
          "excelente para tradicional clássico",
          "altamente confiável"
        ],
        "cons": [
          "grossa demais para obras sutis",
          "pode agredir peles finas"
        ]
      },
      "11RL": {
        "type": "Traço redondo",
        "speed": "média a rápida",
        "uses": [
          "linhas extremamente grossas",
          "tatuagens tradicionais",
          "grandes desenhos tribais",
          "contornos largos"
        ],
        "pros": [
          "impacto visual bem marcado",
          "ágil na aplicação",
          "excelente em pele espessa",
          "forte poder de cobertura"
        ],
        "cons": [
          "grossa demais para a maioria das peças",
          "requer experiência prévia comprovada",
          "risco de expansão de tinta (blowout)"
        ]
      },
      "14RL": {
        "type": "Traço redondo",
        "speed": "veloz",
        "uses": [
          "linhas extragrossas",
          "grandes desenhos tribais",
          "linhas tradicionais grossas",
          "coberturas de tatuagem"
        ],
        "pros": [
          "traço extragrosso",
          "cobertura célere",
          "excelente para coberturas"
        ],
        "cons": [
          "configuração altamente especializada",
          "risco de dispersão de pigmento",
          "exige controle técnico magistral"
        ]
      },
      "5RS": {
        "type": "Sombreador redondo",
        "speed": "lenta a média",
        "uses": [
          "sombreamento leve",
          "sombreamento de retratos",
          "fusão de cores",
          "degradês suaves"
        ],
        "pros": [
          "sombreamento suave e difuso",
          "delicada com a epiderme",
          "ótima para retratos"
        ],
        "cons": [
          "cobertura lenta de superfícies",
          "densidade de saturação limitada",
          "inadequada para sombras muito marcadas"
        ]
      },
      "7RS": {
        "type": "Sombreador redondo",
        "speed": "média",
        "uses": [
          "sombreamento de intensidade média",
          "trabalhos coloridos",
          "degradês de tom",
          "sombreamento geral"
        ],
        "pros": [
          "amplamente versátil",
          "ótimo equilíbrio",
          "sombreamento seguro e constante"
        ],
        "cons": [
          "menos suave que configurações RS menores",
          "menos densa que configurações RS maiores"
        ]
      },
      "9RS": {
        "type": "Sombreador redondo",
        "speed": "média",
        "uses": [
          "sombreamento denso e sólido",
          "preenchimento de cor",
          "sombreamento clássico tradicional",
          "aplicações gerais"
        ],
        "pros": [
          "cobertura sólida e homogênea",
          "ideal para o estilo tradicional",
          "altamente confiável"
        ],
        "cons": [
          "pode ser densa demais para detalhes sutis",
          "maior impacto mecânico na pele"
        ]
      },
      "11RS": {
        "type": "Sombreador redondo",
        "speed": "média a rápida",
        "uses": [
          "sombreamento denso",
          "cor sólida e uniforme",
          "sombreamento marcante",
          "coberturas de tatuagem"
        ],
        "pros": [
          "saturação extremamente sólida",
          "cobertura célere",
          "perfeita para trabalhos marcantes"
        ],
        "cons": [
          "desaconselhada para tonalidades sutis",
          "pode ser agressiva com a pele",
          "requer experiência prévia comprovada"
        ]
      },
      "5M1": {
        "type": "Magnum trançado",
        "speed": "média",
        "uses": [
          "sombreamento leve",
          "fusão de cores",
          "degradês leves e subtis",
          "peças de retrato"
        ],
        "pros": [
          "cobertura suave e leve",
          "esfumados suaves e homogêneos",
          "delicada com a epiderme"
        ],
        "cons": [
          "muito lenta para extensões grandes",
          "densidade de saturação limitada"
        ]
      },
      "7M1": {
        "type": "Magnum trançado",
        "speed": "média",
        "uses": [
          "sombreamento suave e regular",
          "fusão de cores",
          "sombreamento de retratos",
          "aplicações gerais"
        ],
        "pros": [
          "amplamente versátil",
          "cobertura uniforme e fluida",
          "padrão reconhecido da indústria"
        ],
        "cons": [
          "pode ser suave demais para cor sólida",
          "mais lenta que magnums de calibre maior"
        ]
      },
      "9M1": {
        "type": "Magnum trançado",
        "speed": "média a rápida",
        "uses": [
          "sombreamento geral",
          "trabalhos coloridos",
          "degradês suaves e progressivos",
          "cobertura de áreas extensas"
        ],
        "pros": [
          "cobertura célere",
          "amplamente versátil",
          "muito versátil no dia a dia"
        ],
        "cons": [
          "ampla demais para detalhes diminutos",
          "requer técnica apurada e rigorosa"
        ]
      },
      "11M1": {
        "type": "Magnum trançado",
        "speed": "veloz",
        "uses": [
          "sombreamento de grandes áreas",
          "preenchimento de cor",
          "cobertura suave e homogênea",
          "trabalhos de fundo"
        ],
        "pros": [
          "ágil na aplicação",
          "cobertura uniforme e fluida",
          "ótima para áreas extensas"
        ],
        "cons": [
          "grande demais para tarefas de detalhe",
          "pode sobrecarregar pequenas áreas"
        ]
      },
      "13M1": {
        "type": "Magnum trançado",
        "speed": "veloz",
        "uses": [
          "preenchimento de superfícies grandes",
          "preenchimento de cor",
          "sombreamento de fundo"
        ],
        "pros": [
          "velocidade de trabalho muito alta",
          "eficiente em áreas extensas"
        ],
        "cons": [
          "volumosa demais para a maioria dos detalhes",
          "requer experiência prévia comprovada"
        ]
      },
      "15M1": {
        "type": "Magnum trançado",
        "speed": "veloz",
        "uses": [
          "cobertura de superfícies muito grandes",
          "sombreamento de fundo",
          "preenchimento de cor"
        ],
        "pros": [
          "extremamente rápida",
          "ideal para tatuagens grandes"
        ],
        "cons": [
          "destinada apenas a usos específicos",
          "versatilidade de aplicação restrita"
        ]
      },
      "7CM": {
        "type": "Magnum curvado",
        "speed": "lenta a média",
        "uses": [
          "difusão suave sem marcas",
          "sombreamento de retratos",
          "degradês suaves e progressivos",
          "sombreamento delicado"
        ],
        "pros": [
          "acabamento ultrasuave",
          "delicada com a epiderme",
          "perfeita para retratos"
        ],
        "cons": [
          "avanço de cobertura mais lento",
          "requer destreza e segurança",
          "custo por unidade mais alto"
        ]
      },
      "9CM": {
        "type": "Magnum curvado",
        "speed": "média",
        "uses": [
          "sombreamento suave e regular",
          "mesclagem de tons",
          "peças de retrato",
          "tatuagens realistas"
        ],
        "pros": [
          "maciez aveludada incomparável",
          "a escolha dos profissionais",
          "esfumado excepcional"
        ],
        "cons": [
          "preço mais elevado",
          "requer técnica apurada e rigorosa"
        ]
      },
      "11CM": {
        "type": "Magnum curvado",
        "speed": "média a rápida",
        "uses": [
          "sombreamento suave em grandes superfícies",
          "fusão de cores",
          "cobertura tênue"
        ],
        "pros": [
          "extremamente suave",
          "rápida e suave na pele",
          "grau profissional certificado"
        ],
        "cons": [
          "custo por unidade mais alto",
          "pode ser suave demais para cor sólida"
        ]
      },
      "7F": {
        "type": "Plano",
        "speed": "média",
        "uses": [
          "sombreamento geométrico",
          "cor sólida e uniforme",
          "composições tribais",
          "sombreamento marcante"
        ],
        "pros": [
          "densidade extremamente alta",
          "cobertura sólida e homogênea",
          "excelente para geometria"
        ],
        "cons": [
          "agressiva para o tecido cutâneo",
          "desaconselhada para tonalidades sutis",
          "requer experiência prévia comprovada"
        ]
      },
      "9F": {
        "type": "Plano",
        "speed": "média a rápida",
        "uses": [
          "cor sólida e uniforme",
          "desenhos tribais",
          "padrões geométricos",
          "coberturas de tatuagem"
        ],
        "pros": [
          "solidez extraordinária",
          "cobertura célere",
          "perfeita para trabalhos marcantes"
        ],
        "cons": [
          "extremamente agressiva para a pele",
          "versatilidade de aplicação restrita",
          "trauma tecidual considerável"
        ]
      },
      "15F": {
        "type": "Plano",
        "speed": "veloz",
        "uses": [
          "cor sólida em superfícies muito extensas",
          "desenhos tribais",
          "trabalhos de blackwork",
          "coberturas de tatuagem"
        ],
        "pros": [
          "avanço ultrarrápido",
          "solidez extraordinária",
          "ótima para tribais grandes"
        ],
        "cons": [
          "configuração altamente especializada",
          "grande exigência para o tecido",
          "demanda habilidade técnica avançada"
        ]
      }
    },
    "toolsModal": {
      "title": "Conjunto de Ferramentas de Estúdio Poli",
      "subtitle": "Utilitários digitais profissionais gratuitos para tatuadores, piercers e donos de estúdios.",
      "visitAll": "Abrir catálogo completo na web",
      "closeBtn": "Fechar",
      "closeAriaLabel": "Fechar janela do catálogo",
      "sizerName": "Guia de Calibre para Piercing",
      "sizerDesc": "Calculadora interativa de calibre, diâmetro e comprimento para aplicações anatômicas de piercings.",
      "crmName": "CRM para Estúdios Profissionais",
      "crmDesc": "Sistema local de gestão para estúdios com histórico de clientes, agendamentos e registro de procedimentos.",
      "benchmarkName": "Comparativo de Preços para Estúdios",
      "benchmarkDesc": "Comparações regionais de tabelas de preços e calculadoras para estúdios de body art.",
      "consentName": "Formulário de Consentimento e Saúde",
      "consentDesc": "Fichas digitais de admissão, termos de esclarecimento para procedimentos e exportação de dados.",
      "logName": "Livro de Registro de Esterilização",
      "logDesc": "Controle de ciclos de autoclave, documentação de testes biológicos de esporos e registro de instrumental."
    },
    "languages": {
      "en": "Inglês (EN)",
      "fr": "Francês (FR)",
      "it": "Língua Italiana (IT)",
      "de": "Alemão (DE)",
      "es": "Espanhol (ES)",
      "nl": "Holandês (NL)",
      "pt": "Português (PT)"
    }
  }
};

  var currentLang = 'en';

  // Retrieve saved language from localStorage if available
  try {
    var savedLang = localStorage.getItem('poli_needle_tool_lang');
    if (savedLang && DICTIONARY[savedLang]) {
      currentLang = savedLang;
    }
  } catch (e) {}

  function getLang() {
    return currentLang;
  }

  function setLang(lang) {
    if (DICTIONARY[lang]) {
      currentLang = lang;
      try {
        localStorage.setItem('poli_needle_tool_lang', lang);
      } catch (e) {}
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
        applyI18n();
      }
    }
  }

  function t(path, params) {
    var parts = path.split('.');
    var val = DICTIONARY[currentLang];
    for (var i = 0; i < parts.length; i++) {
      if (val && typeof val === 'object' && parts[i] in val) {
        val = val[parts[i]];
      } else {
        // Fallback to English
        val = DICTIONARY['en'];
        for (var j = 0; j < parts.length; j++) {
          if (val && typeof val === 'object' && parts[j] in val) {
            val = val[parts[j]];
          } else {
            return path;
          }
        }
        break;
      }
    }
    if (typeof val !== 'string') return path;
    if (params && typeof params === 'object') {
      return val.replace(/\{([a-zA-Z0-9_]+)\}/g, function (match, key) {
        return key in params ? params[key] : match;
      });
    }
    return val;
  }

  function getNeedleTranslation(code) {
    var dict = DICTIONARY[currentLang] || DICTIONARY['en'];
    if (dict && dict.needles && dict.needles[code]) {
      return dict.needles[code];
    }
    return (DICTIONARY['en'].needles && DICTIONARY['en'].needles[code]) || null;
  }

  function applyI18n() {
    if (typeof document === 'undefined') return;

    // 1. Text elements
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var translation = t(key);
      if (translation !== key) {
        if (el.tagName.toLowerCase() === 'title') {
          document.title = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    // 2. Placeholders
    var placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var translation = t(key);
      if (translation !== key) {
        el.setAttribute('placeholder', translation);
      }
    });

    // 3. Titles (tooltips)
    var titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      var translation = t(key);
      if (translation !== key) {
        el.setAttribute('title', translation);
      }
    });

    // 4. aria-labels
    var ariaElements = document.querySelectorAll('[data-i18n-aria-label]');
    ariaElements.forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      var translation = t(key);
      if (translation !== key) {
        el.setAttribute('aria-label', translation);
      }
    });

    // 5. Update HTML lang attribute
    document.documentElement.lang = currentLang;
  }

  // Export to window
  window.I18N = {
    DICTIONARY: DICTIONARY,
    getLang: getLang,
    getCurrentLanguage: getLang,
    setLang: setLang,
    setLanguage: setLang,
    t: t,
    getNeedleTranslation: getNeedleTranslation,
    applyI18n: applyI18n
  };

  // Shortcut global
  window.t = t;
  window.applyI18n = applyI18n;

  // Run on DOM ready
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyI18n);
    } else {
      applyI18n();
    }
  }
})();
