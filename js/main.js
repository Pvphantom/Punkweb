/* =========================================================
   PRANAV // NIGHT CITY NET — interactions
   --------------------------------------------------------
   EDIT YOUR CONTENT HERE  ↓↓↓  (this is the only block
   you need to touch to make the site yours)
   ========================================================= */
const CONFIG = {
  name: 'Pranav Vudumula',
  location: 'San Ramon, CA',

  education: {
    school: 'University of Maryland — College Park',
    degree: 'B.S. Computer Science (ML Track) · Robotics Minor · Statistics Minor',
    dates: 'Aug 2023 – May 2027',
  },

  // Lines that type out under your name in the hero (cycled)
  typedLines: [
    'ROBOTICS · AUTONOMY · PERCEPTION',
    'PYTHON // ROS2 // COMPUTER VISION',
    'BUILDING AGENTS THAT MOVE IN THE REAL WORLD',
  ],

  // About → skills, grouped like a loadout screen
  skillGroups: [
    { label: 'ROBOTICS / AUTONOMY / PERCEPTION',
      items: ['ROS2', 'Gazebo', 'PyBullet', 'ESP32', 'Path Planning (A*, APF)', 'Inverse Kinematics', 'Sensor Fusion', 'BLE / TCP', 'OpenCV', 'YOLO', 'SIFT / FLANN', 'ArUco', 'RANSAC'] },
    { label: 'AI / ML',
      items: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'VLM', 'Graph Neural Nets', 'LLM Agents', 'RAG'] },
    { label: 'LANGUAGES',
      items: ['Python', 'Java', 'C', 'C++', 'JS / TS', 'SQL', 'OCaml'] },
    { label: 'CLOUD / DEVOPS / TOOLS',
      items: ['AWS (S3)', 'GCP (Vertex AI, BigQuery)', 'Docker', 'CI/CD', 'GitHub Actions', 'Linux', 'React', 'FastAPI', 'Flask', 'Pandas', 'NumPy', 'SciPy'] },
  ],

  // Experience  { role, org, note?, loc, dates, points[], tags[] }
  experience: [
    {
      role: 'Undergraduate Research Assistant',
      org: 'University of Maryland — Project Agentic Tangibles',
      note: 'Faculty-supervised robotics research, with PhD researcher',
      loc: 'College Park, MD',
      dates: 'Summer 2026 – Present',
      points: [
        "Calibrated and debugged a BNO055 IMU orientation/face-detection system under real deployment conditions — engineered hysteresis dead zones and debounce logic to filter sensor noise and eliminate false state transitions from an off-axis mount.",
        "Engineered embedded C++ firmware (ESP32-S2) for a multi-node sensor network: persistent TCP streaming at 5Hz, OTA updates via ArduinoOTA, and NVS-backed device identity for fleet-wide firmware pushes.",
        "Designed a thread-safe Python data-collection server and an LLM command-dispatch pipeline constrained to a whitelisted JSON schema, preventing hallucinated commands from reaching hardware — targeting a CHI 2027 co-authorship.",
      ],
      tags: ['ESP32', 'C++', 'IMU', 'LLM', 'Python'],
    },
    {
      role: 'Software Engineer Intern',
      org: 'Socratics.ai',
      loc: 'San Francisco, CA',
      dates: 'May 2025 – Aug 2025',
      points: [
        "Architected an LLM-based assessment platform (Gemini, RAG over a 1,000+ question bank) and scalable ETL / vector-search pipelines processing 5M+ records at sub-200ms latency, cutting manual grading effort by 60%.",
        "Built CI/CD workflows with GitHub Actions and Docker on GCP Vertex AI, scaling to 10,000+ monthly sessions with a sub-5% rollback rate while increasing release velocity by 25%.",
        "Owned features end-to-end through code review, on-call rotations, and agile sprints — design through production deployment.",
      ],
      tags: ['Gemini', 'RAG', 'GCP Vertex AI', 'Docker', 'CI/CD'],
    },
    {
      role: 'Data Science Intern',
      org: 'Tetra Science',
      loc: 'Remote',
      dates: 'Jun 2024 – Aug 2024',
      points: [
        "Refactored Python automation scripts for scientific data pipelines and resolved failing end-to-end tests — reliability +30%, test coverage +20%, CI/CD failures −40%.",
        "Developed a manifest-update tool automating artifact compatibility for 80+ assets, saving the engineering team 15+ hours per week while ensuring 100% data-integrity compliance.",
      ],
      tags: ['Python', 'Data Pipelines', 'Testing', 'CI/CD'],
    },
  ],

  // Projects  { title, when, desc, tags[], link }
  projects: [
    {
      title: 'Embodied Reasoning Agent — VLM Robot Navigation',
      when: 'Summer 2026',
      desc: "A differential-drive robot that perceives through an onboard camera, reasons with a vision-language model (GPT-4o), and executes motor commands in a closed perceive-reason-act loop. Split classical vs. learning-based methods — deterministic closed-loop primitives for low-level motion, the VLM for high-level planning — with live visualization + MP4 inspection.",
      tags: ['Python', 'PyBullet', 'GPT-4o', 'VLM'],
      link: 'https://github.com/Pvphantom/embodied-reasoning',
      video: 'assets/demo-embodied.mp4',
    },
    {
      title: 'Crystal Forge — Quantum Solver Routing',
      when: 'Bitcamp 2026',
      desc: "A solver-routing and measurement-planning framework for strongly-correlated electron systems (Fermi–Hubbard, TFIM). An ML classifier (\"CorrMap\") decides whether classical solvers — mean-field, tensor-network — suffice or quantum methods are required; \"QProbe\" then optimizes which quantum measurements to prioritize for maximum information. A unified FastAPI backend drives both a React web app and a Minecraft Fabric mod that renders the lattice in real time.",
      tags: ['Python', 'PyTorch', 'Qiskit', 'React', 'Minecraft Mod'],
      link: 'https://github.com/Pvphantom/bitcamp2026-crystal-forge',
    },
    {
      title: 'Autonomous Navigation Controller (TurtleBot4)',
      when: 'Spring 2026',
      desc: "An Attractive + Repulsive Potential Field (APF) navigation controller for a simulated TurtleBot4 with tunable gains and dynamic goal-seeking. Built a ROS2 analysis pipeline (rosbags) to align optical-flow signals across sensor streams; fully containerized with Docker for reproducible builds.",
      tags: ['ROS2 Jazzy', 'Gazebo', 'Docker', 'Python'],
      context: 'ENAE450 · University coursework',
      video: 'assets/demo-turtlebot.mp4',   // drop your TurtleBot4 demo here
    },
    {
      title: 'Automated Robotic Control & Perception System',
      when: 'Fall 2025',
      desc: "A Python control API for a 6-DOF commercial robotic arm with closed-loop ArUco marker detection for autonomous object localization — translating inverse kinematics into validated physical actuation.",
      tags: ['Python', 'OpenCV', 'Inverse Kinematics', 'ArUco'],
      context: 'University coursework',
      video: 'assets/demo-arm.mp4',   // drop your 6-DOF arm demo here
    },
  ],

  // Contact links  { label, href }
  contact: [
    { label: 'EMAIL',    href: 'mailto:pvudumula@gmail.com' },
    { label: 'GITHUB',   href: 'https://github.com/Pvphantom' },
    { label: 'LINKEDIN', href: 'https://linkedin.com/in/pranav-vudumula' },
  ],

  // Resume: put a PDF at this path (or change it). Leave as-is to show a note.
  resumeUrl: 'assets/resume.pdf',
};

/* =========================================================
   Below here is wiring — you usually don't need to edit it.
   ========================================================= */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Boot sequence ---------- */
(function boot() {
  const boot = $('#boot');
  const log = $('#boot-log');
  const fill = $('#boot-bar-fill');
  const lines = [
    '> NETWATCH HANDSHAKE ........ OK',
    '> DECRYPTING NODE [P//V] .... OK',
    '> LOADING CORTEX MODULES .... OK',
    '> RENDERING NIGHT CITY ...... OK',
    '> CONNECTION SECURE.',
  ];
  if (reduced) { boot.classList.add('is-ready'); }
  let i = 0;
  const tick = () => {
    if (i < lines.length) {
      log.textContent += lines[i] + '\n';
      fill.style.width = ((i + 1) / lines.length * 100) + '%';
      i++;
      setTimeout(tick, reduced ? 60 : 360);
    } else {
      boot.classList.add('is-ready');
    }
  };
  setTimeout(tick, 300);

  // jack in on an explicit click
  boot.addEventListener('click', () => boot.classList.add('is-done'));
})();

/* ---------- Render content from CONFIG ---------- */
function render() {
  // skills — grouped chips
  $('#skills').innerHTML = CONFIG.skillGroups.map((g) => `
    <div class="skillgrp">
      <div class="skillgrp__label">// ${g.label}</div>
      <div class="skillgrp__chips">
        ${g.items.map((it) => `<span class="chip">${it}</span>`).join('')}
      </div>
    </div>`).join('');

  // experience — vertical timeline
  const exp = $('#experience-timeline');
  if (exp) {
    exp.innerHTML = CONFIG.experience.map((e) => `
      <article class="xp reveal">
        <div class="xp__dot"></div>
        <div class="xp__card">
          <div class="xp__top">
            <div>
              <h3 class="xp__role">${e.role}</h3>
              <div class="xp__org">${e.org}</div>
              ${e.note ? `<div class="xp__note">${e.note}</div>` : ''}
            </div>
            <div class="xp__meta">
              <span class="xp__dates">${e.dates}</span>
              <span class="xp__loc">${e.loc}</span>
            </div>
          </div>
          <ul class="xp__points">
            ${e.points.map((p) => `<li>${p}</li>`).join('')}
          </ul>
          <div class="card__tags">${e.tags.map((t) => `<span class="card__tag">${t}</span>`).join('')}</div>
        </div>
      </article>`).join('');
  }

  // projects
  $('#projects-grid').innerHTML = CONFIG.projects.map((p, idx) => `
    <article class="card tilt">
      <div class="card__head">
        <span class="card__num">PRJ_${String(idx + 1).padStart(2, '0')}</span>
        ${p.when ? `<span class="card__when">${p.when}</span>` : ''}
      </div>
      <h3 class="card__title">${p.title}</h3>
      <p class="card__desc">${p.desc}</p>
      <div class="card__tags">${p.tags.map((t) => `<span class="card__tag">${t}</span>`).join('')}</div>
      <div class="card__actions">
        ${p.video ? `<button class="card__play" data-action="video" data-video="${p.video}" data-title="${p.title}">▶ PLAY DEMO</button>` : ''}
        ${p.link ? `<a class="card__link" href="${p.link}" target="_blank" rel="noopener">ACCESS</a>` : ''}
        ${p.context ? `<span class="card__context">${p.context}</span>` : ''}
      </div>
    </article>`).join('');

  // contact
  $('#contact-links').innerHTML = CONFIG.contact.map((c) =>
    `<a class="contact__link" href="${c.href}" target="_blank" rel="noopener">${c.label}</a>`).join('');

  // education line in the about panel
  const edu = $('#education');
  if (edu && CONFIG.education) {
    edu.innerHTML = `
      <div class="edu__school">${CONFIG.education.school}</div>
      <div class="edu__degree">${CONFIG.education.degree}</div>
      <div class="edu__dates">${CONFIG.education.dates}</div>`;
  }

  $('#year').textContent = new Date().getFullYear();
}
render();

/* ---------- Inject animated SVG figures + build cut-in ---------- */
(function figures() {
  if (!window.makeFigure) return;
  const variants = window.FIGURE_VARIANTS || [{}];
  // hero holo-frames
  $$('.holo__fig').forEach((slot) => {
    const v = variants[+slot.dataset.variant % variants.length];
    slot.innerHTML = window.makeFigure(v);
  });
  // cut-in overlay (built once, appended to body)
  const cut = document.createElement('div');
  cut.className = 'cutin';
  cut.id = 'cutin';
  cut.innerHTML = `
    <div class="cutin__bg"></div>
    <div class="cutin__band"></div>
    <div class="cutin__fig"></div>
    <div class="cutin__flash"></div>
    <div class="cutin__txt"></div>`;
  document.body.appendChild(cut);
})();

/* ---------- Video demo modal (holo-playback) ---------- */
(function buildVideoModal() {
  const m = document.createElement('div');
  m.className = 'vmodal';
  m.id = 'vmodal';
  m.innerHTML = `
    <div class="vmodal__backdrop" data-close></div>
    <div class="vmodal__frame">
      <div class="vmodal__bar">
        <span class="vmodal__title" id="vmodal-title">DEMO</span>
        <button class="vmodal__close" data-close aria-label="Close">✕</button>
      </div>
      <div class="vmodal__stage">
        <video id="vmodal-video" controls playsinline preload="metadata"></video>
        <div class="vmodal__scan"></div>
        <div class="vmodal__missing" id="vmodal-missing"></div>
      </div>
    </div>`;
  document.body.appendChild(m);

  m.addEventListener('click', (e) => { if (e.target.hasAttribute('data-close')) closeVideo(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVideo(); });
})();

function openVideo(src, title) {
  const m = $('#vmodal');
  const vid = $('#vmodal-video');
  const missing = $('#vmodal-missing');
  $('#vmodal-title').textContent = (title || 'DEMO').toUpperCase();
  missing.textContent = '';
  missing.style.display = 'none';
  vid.style.display = '';
  vid.src = src;
  vid.onerror = () => {
    vid.style.display = 'none';
    missing.style.display = 'flex';
    missing.textContent = `⚠ NO VIDEO AT "${src}" — drop the file there and reopen.`;
  };
  m.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  const p = vid.play();
  if (p && p.catch) p.catch(() => {}); // ignore autoplay rejection; controls are visible
}

function closeVideo() {
  const m = $('#vmodal');
  if (!m || !m.classList.contains('is-open')) return;
  const vid = $('#vmodal-video');
  vid.pause();
  vid.removeAttribute('src');
  vid.load();
  m.classList.remove('is-open');
  document.body.style.overflow = '';
}

/* ---------- Persona-style cut-in trigger ---------- */
let _cutBusy = false;
function triggerCutIn(text) {
  if (reduced) return;
  const el = $('#cutin');
  if (!el || _cutBusy) return;
  _cutBusy = true;
  const variants = window.FIGURE_VARIANTS || [{}];
  const v = variants[Math.floor(Math.random() * variants.length)];
  $('.cutin__fig', el).innerHTML = window.makeFigure ? window.makeFigure(v) : '';
  $('.cutin__txt', el).textContent = text || 'JACK IN';
  // restart the animation cleanly
  el.classList.remove('is-active');
  void el.offsetWidth;
  el.classList.add('is-active');
  setTimeout(() => { el.classList.remove('is-active'); _cutBusy = false; }, 980);
}

/* ---------- Section transitions: glitch wipe + Sandevistan dash ---------- */
(function sectionFX() {
  if (reduced) return;

  // slice-wipe overlay
  const wipe = document.createElement('div');
  wipe.className = 'wipe';
  wipe.innerHTML =
    '<div class="wipe__slice"></div>'.repeat(6) + '<div class="wipe__label"></div>';
  document.body.appendChild(wipe);

  // sandevistan dash overlay: abstract time-skip streak + colour-shifted echoes
  const sande = document.createElement('div');
  sande.className = 'sande';
  const ECHOES = [
    { c: '#27a55f', o: .18 },  // oldest echo — green
    { c: '#2fbf71', o: .26 },
    { c: '#38e08e', o: .34 },
    { c: '#2fd4e6', o: .45 },
    { c: '#4ee3f2', o: .58 },
    { c: '#7ef7ff', o: .72 },  // freshest echo — cyan
  ];
  // abstract dash glyph: trailing speed-lines + a triple forward chevron
  const dashGlyph = (c) => `
    <svg viewBox="0 0 480 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <line x1="0" y1="100" x2="205" y2="100" stroke="${c}" stroke-width="6" stroke-linecap="round"/>
      <line x1="24" y1="70" x2="185" y2="70" stroke="${c}" stroke-width="3.5" stroke-linecap="round" opacity=".5"/>
      <line x1="24" y1="130" x2="185" y2="130" stroke="${c}" stroke-width="3.5" stroke-linecap="round" opacity=".5"/>
      <path d="M205,52 L262,100 L205,148" fill="none" stroke="${c}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M278,52 L335,100 L278,148" fill="none" stroke="${c}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>
      <path d="M351,52 L408,100 L351,148" fill="none" stroke="${c}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
    </svg>`;
  sande.innerHTML =
    '<div class="sande__tint"></div><div class="sande__lines"></div>' +
    ECHOES.map((g, i) =>
      `<div class="sande__ghost" style="--d:${((ECHOES.length - i) * 0.045).toFixed(3)}s;opacity:${g.o}">
        ${dashGlyph(g.c)}
      </div>`).join('') +
    `<div class="sande__ghost sande__ghost--lead">${dashGlyph('#eafff4')}</div>
    <div class="sande__label"></div>`;
  document.body.appendChild(sande);

  let busy = false, flip = 0;
  // called by the router on every page switch
  window.__playTransition = (label) => {
    if (busy || _cutBusy) return;
    busy = true;
    const useDash = flip++ % 2 === 0; // alternate: dash, wipe, dash…
    const el = useDash ? sande : wipe;
    $(useDash ? '.sande__label' : '.wipe__label', el).textContent = label || '';
    el.classList.remove('is-active');
    void el.offsetWidth;
    el.classList.add('is-active');
    screenGlitch();
    setTimeout(() => { el.classList.remove('is-active'); busy = false; }, useDash ? 1150 : 640);
  };
})();

/* ---------- Router: nav switches full-screen views (no long scroll) ---------- */
(function router() {
  const VIEWS = ['hero', 'about', 'experience', 'projects'];
  const sections = {};
  VIEWS.forEach((id) => { sections[id] = document.getElementById(id); });
  document.body.classList.add('routing');
  let current = null;

  // Contact lives at the bottom of every page — scroll to it instead of routing
  window.__goContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  $$('a[href="#contact"]').forEach((a) =>
    a.addEventListener('click', (e) => { e.preventDefault(); window.__goContact(); }));

  const revealView = (sec) => {
    if (!sec) return;
    $$('.reveal', sec).forEach((el, i) => {
      el.classList.remove('is-visible');
      setTimeout(() => el.classList.add('is-visible'), 80 + i * 80);
    });
  };

  const viewFromHash = () => {
    const h = (location.hash || '').replace('#', '').trim();
    return VIEWS.includes(h) ? h : 'hero';
  };

  const labelFor = (id) => {
    if (id === 'hero') return '00 // HOME';
    const idx = $('.section__index', sections[id])?.textContent || '';
    const title = $('.section__title', sections[id])?.textContent || id.toUpperCase();
    return `${idx} // ${title}`;
  };

  function swap(id) {
    VIEWS.forEach((v) => sections[v] && sections[v].classList.toggle('view-active', v === id));
    window.scrollTo(0, 0);
    $$('.nav__link').forEach((a) =>
      a.classList.toggle('is-current', a.getAttribute('href') === '#' + id));
    revealView(sections[id]);
    current = id;
  }

  function show(id, animate) {
    if (!sections[id]) id = 'hero';
    if (id === current) return;
    if (animate && !reduced && window.__playTransition) {
      window.__playTransition(labelFor(id));
      if (window.__cyberPulse) window.__cyberPulse();
      setTimeout(() => swap(id), 170); // swap while the overlay covers the change
    } else {
      swap(id);
    }
  }

  window.addEventListener('hashchange', () => show(viewFromHash(), true));
  show(viewFromHash(), false); // initial view, no animation
})();

/* ---------- Typed hero subtitle ---------- */
(function typed() {
  const el = $('#typed');
  const lines = CONFIG.typedLines;
  let li = 0, ci = 0, deleting = false;
  function step() {
    const line = lines[li];
    el.textContent = deleting ? line.slice(0, ci--) : line.slice(0, ci++);
    if (!deleting && ci > line.length) { deleting = true; setTimeout(step, 1600); return; }
    if (deleting && ci < 0) { deleting = false; li = (li + 1) % lines.length; ci = 0; }
    setTimeout(step, deleting ? 35 : 65);
  }
  if (reduced) { el.textContent = lines[0]; } else { step(); }
})();

/* ---------- Custom cursor ---------- */
(function cursor() {
  const dot = $('.cursor'), ring = $('.cursor-ring');
  if (!dot) return;
  let rx = 0, ry = 0, mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  (function follow() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(follow);
  })();
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .tilt')) ring.classList.add('is-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .tilt')) ring.classList.remove('is-hover');
  });
})();

/* ---------- 3D tilt on cards & holo frames ---------- */
(function tilt() {
  if (reduced) return;
  $$('.tilt').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${px * 14}deg) rotateX(${-py * 14}deg) translateZ(6px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
})();

/* ---------- Glitch the hero title on a loop ---------- */
(function heroGlitch() {
  if (reduced) return;
  const t = $('.hero__title');
  setInterval(() => {
    t.classList.add('is-active');
    setTimeout(() => t.classList.remove('is-active'), 320);
  }, 3500);
})();

/* ---------- Button actions (the "press = animation" hook) ---------- */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;

  btn.classList.add('is-firing');
  setTimeout(() => btn.classList.remove('is-firing'), 800);

  // hero CTAs navigate between views — the router plays the Sandevistan
  if (action === 'glitch') {
    const target = btn.dataset.target; // e.g. '#projects'
    if (target === '#contact') { window.__goContact && window.__goContact(); return; }
    if (target) location.hash = target;
    return;
  }

  if (action === 'video') {
    if (window.__cyberPulse) window.__cyberPulse();
    openVideo(btn.dataset.video, btn.dataset.title);
    return;
  }

  if (action === 'resume') {
    screenGlitch();
    triggerCutIn('RESUME');
    fetch(CONFIG.resumeUrl, { method: 'HEAD' })
      .then((r) => {
        if (r.ok) { window.open(CONFIG.resumeUrl, '_blank'); }
        else throw new Error();
      })
      .catch(() => toast(`NO RESUME FOUND — drop a PDF at "${CONFIG.resumeUrl}"`));
  }
});

/* ---------- Brief full-screen glitch flash ---------- */
function screenGlitch() {
  if (reduced) return;
  document.body.animate(
    [{ filter: 'none' }, { filter: 'hue-rotate(40deg) contrast(1.4)' }, { filter: 'none' }],
    { duration: 220, easing: 'steps(3)' }
  );
}

/* ---------- Tiny toast (for resume-missing notice) ---------- */
function toast(msg) {
  let el = $('#toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.style.cssText = `position:fixed;left:50%;bottom:2rem;transform:translateX(-50%);z-index:9999;
      font-family:var(--font-mono);font-size:.8rem;color:#05060a;background:var(--yellow);
      padding:.7rem 1.2rem;box-shadow:0 0 18px rgba(252,238,10,.6);letter-spacing:.05em;`;
    document.body.appendChild(el);
  }
  el.textContent = '⚠ ' + msg;
  el.style.opacity = '1';
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.style.transition = 'opacity .5s'; el.style.opacity = '0'; }, 3200);
}

/* ---------- Header mini music player (Spotify popover) ---------- */
(function music() {
  const btn = $('#music-toggle');
  if (!btn) return;
  const pop = document.createElement('div');
  pop.className = 'music-pop';
  pop.innerHTML = `
    <div class="music-pop__label">// NOW PLAYING — ON REPEAT</div>
    <iframe src="https://open.spotify.com/embed/track/1qpGMJi0ippCaMUOs7cz2q?utm_source=generator&theme=0"
      width="100%" height="80" frameborder="0" loading="lazy"
      allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      title="Spotify player"></iframe>`;
  document.body.appendChild(pop);

  let open = false;
  const set = (o) => {
    open = o;
    pop.classList.toggle('is-open', o);
    btn.classList.toggle('is-active', o);
    btn.setAttribute('aria-expanded', String(o));
    btn.textContent = o ? '❚❚ MUSIC' : '▶ MUSIC';
  };
  btn.addEventListener('click', (e) => { e.stopPropagation(); set(!open); });
  document.addEventListener('click', (e) => {
    if (open && !pop.contains(e.target) && e.target !== btn) set(false);
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) set(false); });
})();

/* ---------- Live clock ---------- */
(function clock() {
  const el = $('#clock');
  const tick = () => { el.textContent = new Date().toLocaleTimeString('en-GB'); };
  tick(); setInterval(tick, 1000);
})();

/* ---------- Brand micro-glitch on hover ---------- */
$$('[data-glitch]').forEach((el) => {
  const real = el.textContent;
  const chars = '!<>-_\\/[]{}—=+*^?#';
  el.addEventListener('mouseenter', () => {
    let n = 0;
    const id = setInterval(() => {
      el.textContent = real.split('').map((c, i) =>
        i < n ? c : chars[Math.floor(Math.random() * chars.length)]).join('');
      if (n++ >= real.length) { clearInterval(id); el.textContent = real; }
    }, 35);
  });
});
