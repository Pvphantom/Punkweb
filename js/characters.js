/* =========================================================
   Original cyberpunk figures — drawn as inline SVG so we can
   animate them. 100% original art (nothing copyrighted), built
   to look alive immediately. When you drop a real image into
   assets/char-1.png etc., it simply layers on top of these.
   ========================================================= */
window.makeFigure = function makeFigure(opts = {}) {
  const {
    id = 'f' + Math.random().toString(36).slice(2, 7),
    accent = '#00f0ff',   // hair edge / rim light / chrome
    glow = '#00f0ff',     // backdrop glow
    visor = '#fcee0a',    // eye visor
    skin = '#1b2433',
    jacket = '#0a0e1a',
  } = opts;

  return `
  <svg class="figure" viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet" role="img" aria-label="Stylized cyberpunk figure">
    <defs>
      <radialGradient id="${id}-bg" cx="50%" cy="36%" r="62%">
        <stop offset="0%" stop-color="${glow}" stop-opacity="0.30"/>
        <stop offset="100%" stop-color="${glow}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="${id}-jk" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#141a2a"/>
        <stop offset="100%" stop-color="${jacket}"/>
      </linearGradient>
      <filter id="${id}-n" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="${accent}" flood-opacity="0.9"/>
      </filter>
      <filter id="${id}-nv" x="-60%" y="-60%" width="220%" height="220%">
        <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="${visor}" flood-opacity="1"/>
      </filter>
    </defs>

    <!-- backdrop glow -->
    <ellipse cx="150" cy="168" rx="124" ry="150" fill="url(#${id}-bg)"/>

    <!-- jacket -->
    <path d="M20,420 L36,330 C48,300 82,286 110,283 L150,279 L190,283 C218,286 252,300 264,330 L280,420 Z"
          fill="url(#${id}-jk)" stroke="${accent}" stroke-opacity="0.45" stroke-width="1.5"/>
    <path d="M150,300 L150,408" stroke="${accent}" stroke-width="1.6" stroke-opacity="0.55"/>
    <path d="M64,360 L52,408" stroke="${accent}" stroke-width="1.4" stroke-opacity="0.35"/>
    <path d="M236,360 L248,408" stroke="${accent}" stroke-width="1.4" stroke-opacity="0.35"/>

    <!-- collar -->
    <path d="M112,284 L150,302 L132,348 L96,322 Z" fill="${jacket}" stroke="${accent}" stroke-width="2" filter="url(#${id}-n)"/>
    <path d="M188,284 L150,302 L168,348 L204,322 Z" fill="${jacket}" stroke="${accent}" stroke-width="2" filter="url(#${id}-n)"/>

    <!-- neck -->
    <path d="M137,248 L163,248 L166,288 L134,288 Z" fill="${skin}"/>
    <path d="M137,250 L163,250" stroke="#000" stroke-opacity="0.35" stroke-width="3"/>

    <!-- face -->
    <path d="M150,256 C129,254 117,236 115,208 C113,182 118,150 126,136 C135,118 165,118 174,136 C182,150 187,182 185,208 C183,236 171,254 150,256 Z" fill="${skin}"/>
    <!-- neon rim-light down the left edge of the face -->
    <path d="M150,256 C129,254 117,236 115,208 C113,182 118,150 126,136" fill="none"
          stroke="${accent}" stroke-width="2.6" stroke-linecap="round" filter="url(#${id}-n)"/>

    <!-- hair: angular spikes -->
    <path d="M114,152 L102,84 L122,116 L128,62 L144,104 L150,48 L156,104 L172,62 L178,116 L198,84 L186,152 C176,120 124,120 114,152 Z"
          fill="${jacket}" stroke="${accent}" stroke-width="1.6" stroke-opacity="0.85"/>
    <!-- glowing hair tips -->
    <polyline points="102,84 110,104" fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" filter="url(#${id}-n)"/>
    <polyline points="128,62 134,88"  fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" filter="url(#${id}-n)"/>
    <polyline points="150,48 150,80"  fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" filter="url(#${id}-n)"/>
    <polyline points="172,62 166,88"  fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" filter="url(#${id}-n)"/>
    <polyline points="198,84 190,104" fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" filter="url(#${id}-n)"/>

    <!-- visor / eyes -->
    <path class="fig-visor" d="M120,170 L182,162 L184,179 L122,187 Z" fill="${visor}" filter="url(#${id}-nv)"/>
    <path d="M150,166 L151,183" stroke="${jacket}" stroke-width="3"/>

    <!-- cheek implant (right) -->
    <path d="M172,192 L178,220" stroke="${accent}" stroke-width="1.6" filter="url(#${id}-n)"/>
    <circle cx="176" cy="196" r="2.2" fill="${accent}"/>
    <circle cx="178" cy="207" r="1.7" fill="${accent}"/>
    <rect x="174" y="214" width="9" height="3" rx="1" fill="${accent}" opacity="0.85"/>

    <!-- ear piece + antenna (left) -->
    <rect x="104" y="176" width="9" height="17" rx="2.5" fill="${jacket}" stroke="${accent}" stroke-width="1.3"/>
    <path d="M108,176 L108,150" stroke="${accent}" stroke-width="1.3"/>
    <circle class="fig-led" cx="108" cy="148" r="2.4" fill="${accent}" filter="url(#${id}-n)"/>
  </svg>`;
};

/* =========================================================
   Sprinting figure (side profile, facing right) for the
   Sandevistan dash transition. Pass a single `mono` colour to
   get a flat silhouette for the afterimage echoes.
   ========================================================= */
window.makeRunner = function makeRunner(opts = {}) {
  const mono = opts.mono || null;
  const {
    id = 'r' + Math.random().toString(36).slice(2, 7),
    accent = mono || '#00f0ff',
    jacket = mono || '#fcee0a',
    dark   = mono || '#0a0e1a',
    skin   = mono || '#1b2433',
    visor  = mono || '#00f0ff',
  } = opts;

  return `
  <svg class="runner" viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs>
      <filter id="${id}-g" x="-60%" y="-60%" width="220%" height="220%">
        <feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="${accent}" flood-opacity="0.9"/>
      </filter>
    </defs>

    <!-- far arm, swung back-down -->
    <polyline points="295,118 238,148 252,192" fill="none" stroke="${skin}"
              stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- back leg, extended behind -->
    <polyline points="235,202 155,245 82,276" fill="none" stroke="${dark}"
              stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>
    <polygon points="50,262 90,268 88,284 52,278" fill="${dark}" stroke="${accent}" stroke-width="1.6"/>

    <!-- jacket torso, tail whipping behind -->
    <path d="M310,95 L336,136 L302,206 L236,210 L150,186 L176,160 L236,140 L286,104 Z"
          fill="${jacket}" stroke="${accent}" stroke-width="2" stroke-opacity="0.8"/>
    <path d="M236,140 L288,178" stroke="${dark}" stroke-width="2.4" stroke-opacity="0.5" fill="none"/>
    <path d="M176,160 L150,186" stroke="${accent}" stroke-width="2.4" filter="url(#${id}-g)" fill="none"/>

    <!-- front leg, driving forward -->
    <polyline points="248,204 318,228 302,290" fill="none" stroke="${dark}"
              stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>
    <polygon points="292,282 334,290 332,304 290,298" fill="${dark}" stroke="${accent}" stroke-width="1.6"/>

    <!-- neck + head -->
    <path d="M306,96 L322,110 L308,122 L296,108 Z" fill="${skin}"/>
    <circle cx="332" cy="72" r="22" fill="${skin}"/>

    <!-- hair, blown back -->
    <path d="M352,58 L342,36 L322,50 L306,26 L294,52 L270,36 L268,62 L246,54 L262,76 L300,92 L340,88 Z"
          fill="${dark}" stroke="${accent}" stroke-width="1.6" stroke-opacity="0.85"/>
    <polyline points="306,26 302,48" fill="none" stroke="${accent}" stroke-width="2.6" stroke-linecap="round" filter="url(#${id}-g)"/>
    <polyline points="270,36 276,56" fill="none" stroke="${accent}" stroke-width="2.6" stroke-linecap="round" filter="url(#${id}-g)"/>

    <!-- visor eye -->
    <polygon class="fig-visor" points="340,64 357,66 356,77 339,75" fill="${visor}" filter="url(#${id}-g)"/>

    <!-- lead arm, pumping forward -->
    <polyline points="304,118 336,156 362,128" fill="none" stroke="${skin}"
              stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="364" cy="126" r="8" fill="${skin}" stroke="${accent}" stroke-width="1.4"/>

    <!-- spine implant sparks (the sandevistan itself) -->
    <circle cx="288" cy="120" r="3" fill="${accent}" filter="url(#${id}-g)"/>
    <circle cx="272" cy="134" r="2.4" fill="${accent}" filter="url(#${id}-g)"/>
    <circle cx="258" cy="147" r="2" fill="${accent}" filter="url(#${id}-g)"/>
  </svg>`;
};

/* Two ready-made colourways for the hero frames + cut-in */
window.FIGURE_VARIANTS = [
  { accent: '#00f0ff', glow: '#00f0ff', visor: '#fcee0a' }, // cyan / yellow
  { accent: '#ff2e88', glow: '#b026ff', visor: '#00f0ff' }, // magenta / purple
];
