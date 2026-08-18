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
    degree: 'B.S. Computer Science (ML Track) · Mathematics Major · Robotics Minor',
    dates: 'Aug 2023 – May 2027',
  },

  // Lines that type out under your name in the hero (cycled)
  typedLines: [
    'ROBOTICS · AUTONOMY · PERCEPTION',
    'EMBEDDED C++ // ROS2 // COMPUTER VISION',
    'BUILDING AGENTS THAT MOVE IN THE REAL WORLD',
  ],

  // About → skills, grouped like a loadout screen
  skillGroups: [
    { label: 'ROBOTICS / AUTONOMY / PERCEPTION',
      items: ['ROS2', 'Gazebo', 'PyBullet', 'ESP32', 'Path Planning (A*, APF)', 'Inverse Kinematics', 'Sensor Fusion', 'BLE / TCP', 'OpenCV', 'YOLO', 'SIFT / FLANN', 'ArUco', 'RANSAC'] },
    { label: 'AI / ML',
      items: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'VLM', 'Graph Neural Nets', 'LLM Agents', 'RAG'] },
    { label: 'LANGUAGES',
      items: ['C++', 'Python', 'Java', 'C', 'JS / TS', 'SQL', 'OCaml'] },
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
      link: 'https://github.com/Pvphantom',
    },
    {
      title: 'Autonomous Navigation Controller (TurtleBot4)',
      when: 'Spring 2026',
      desc: "An Attractive + Repulsive Potential Field (APF) navigation controller for a simulated TurtleBot4 with tunable gains and dynamic goal-seeking. Built a ROS2 analysis pipeline (rosbags) to align optical-flow signals across sensor streams; fully containerized with Docker for reproducible builds.",
      tags: ['ROS2 Jazzy', 'Gazebo', 'Docker', 'Python'],
      link: 'https://github.com/Pvphantom',
      video: 'assets/demo-turtlebot.mp4',   // drop your TurtleBot4 demo here
    },
    {
      title: 'Automated Robotic Control & Perception System',
      when: 'Fall 2025',
      desc: "A Python control API for a 6-DOF commercial robotic arm with closed-loop ArUco marker detection for autonomous object localization — translating inverse kinematics into validated physical actuation.",
      tags: ['Python', 'OpenCV', 'Inverse Kinematics', 'ArUco'],
      link: 'https://github.com/Pvphantom',
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

  // jack in only on an explicit click — it doubles as the audio-unlock gesture
  boot.addEventListener('click', () => {
    boot.classList.add('is-done');
    if (window.__startBGM) window.__startBGM();
  });
})();

/* ---------- Background music ----------
   Prefers a real track at assets/let-you-down.mp3; if none exists,
   falls back to the generative synthwave engine in js/audio.js. */
(function bgm() {
  const audio = $('#bgm');
  let fileReady = false;
  if (audio) {
    audio.volume = 0.35;
    audio.addEventListener('canplaythrough', () => { fileReady = true; }, { once: true });
  }
  window.__startBGM = () => {
    if (window.SFX && SFX.isMuted()) return;
    if (fileReady) { audio.play().catch(() => {}); }
    else if (window.BGM) BGM.start();
  };
  window.__pauseBGM = () => {
    if (audio) audio.pause();
    if (window.BGM) BGM.stop();
  };
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
        <a class="card__link" href="${p.link}" target="_blank" rel="noopener">ACCESS</a>
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
  if (window.SFX) SFX.stab();
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

  // sandevistan dash overlay: lead runner + colour-shifted echoes trailing him
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
  sande.innerHTML =
    '<div class="sande__tint"></div><div class="sande__lines"></div>' +
    ECHOES.map((g, i) =>
      `<div class="sande__ghost" style="--d:${((ECHOES.length - i) * 0.045).toFixed(3)}s;opacity:${g.o}">
        ${window.makeRunner ? window.makeRunner({ mono: g.c }) : ''}
      </div>`).join('') +
    `<div class="sande__ghost sande__ghost--lead">${window.makeRunner ? window.makeRunner({}) : ''}</div>
    <div class="sande__label"></div>`;
  document.body.appendChild(sande);

  const nameOf = (sec) => {
    const idx = $('.section__index', sec)?.textContent || '00';
    const title = $('.section__title', sec)?.textContent || 'HOME';
    return `${idx} // ${title}`;
  };

  let current = null, busy = false, flip = 0;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting || en.target.id === current) return;
      const first = current === null;
      current = en.target.id;
      if (first || busy || _cutBusy) return; // skip on load, mid-effect, or over a cut-in
      busy = true;
      const useDash = flip++ % 2 === 0; // alternate: dash, wipe, dash…
      const el = useDash ? sande : wipe;
      $(useDash ? '.sande__label' : '.wipe__label', el).textContent = nameOf(en.target);
      el.classList.remove('is-active');
      void el.offsetWidth;
      el.classList.add('is-active');
      if (window.SFX) { if (useDash) SFX.dash(); else SFX.zap(); }
      screenGlitch();
      setTimeout(() => { el.classList.remove('is-active'); busy = false; }, useDash ? 1150 : 640);
    });
  }, { rootMargin: '-45% 0px -45% 0px' }); // fire when a section crosses mid-viewport
  $$('main .section').forEach((s) => io.observe(s));
})();

/* ---------- SFX mute toggle + autoplay unlock ---------- */
(function sfx() {
  const btn = $('#sfx-toggle');
  if (!btn || !window.SFX) return;
  const paint = () => {
    const m = SFX.isMuted();
    btn.textContent = m ? 'SFX:OFF' : 'SFX:ON';
    btn.setAttribute('aria-pressed', String(!m));
    btn.classList.toggle('is-muted', m);
  };
  paint();
  btn.addEventListener('click', () => {
    SFX.toggle();
    paint();
    if (SFX.isMuted()) {
      if (window.__pauseBGM) window.__pauseBGM();
    } else {
      SFX.stab();
      // resume music only once past the boot screen
      if ($('#boot').classList.contains('is-done') && window.__startBGM) window.__startBGM();
    }
  });
  // browsers only allow audio after a gesture — unlock on the first one
  ['pointerdown', 'keydown', 'touchstart'].forEach((ev) =>
    window.addEventListener(ev, () => SFX.unlock(), { once: true, passive: true }));
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

/* ---------- Scroll reveal + skill bar fill ---------- */
(function reveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-visible');
      if (en.target.classList.contains('about__skills')) {
        $$('.skill', en.target).forEach((s) => {
          $('.skill__fill', s).style.width = s.dataset.pct + '%';
        });
      }
      io.unobserve(en.target);
    });
  }, { threshold: 0.2 });
  $$('.reveal').forEach((el) => io.observe(el));
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

  // shared: glitch the button + pulse the 3D background
  btn.classList.add('is-firing');
  setTimeout(() => btn.classList.remove('is-firing'), 800);
  if (window.__cyberPulse) window.__cyberPulse();
  screenGlitch();
  // the big Persona cut-in only for hero/resume CTAs, not the demo player
  if (action !== 'video') triggerCutIn(btn.textContent.trim().replace(/[▣↗▶]/g, '').trim());

  if (action === 'glitch') {
    const target = btn.dataset.target;
    if (target) {
      setTimeout(() => $(target)?.scrollIntoView({ behavior: 'smooth' }), 220);
    }
  }

  if (action === 'video') {
    openVideo(btn.dataset.video, btn.dataset.title);
  }

  if (action === 'resume') {
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

/* ---------- Nav: hide on scroll-down, show on scroll-up ---------- */
(function nav() {
  const nav = $('#nav');
  let last = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('is-hidden', y > last && y > 200);
    last = y;
  });
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
