/* =========================================================
   PRANAV // NIGHT CITY NET — interactions
   --------------------------------------------------------
   EDIT YOUR CONTENT HERE  ↓↓↓  (this is the only block
   you need to touch to make the site yours)
   ========================================================= */
const CONFIG = {
  name: 'Pranav Vudumula',

  // Lines that type out under your name in the hero (cycled)
  typedLines: [
    'ROBOTICS ENGINEER // IN TRAINING',
    'EMBEDDED SYSTEMS + SOFTWARE',
    'BUILDING THE GOOD KIND OF CHROME',
  ],

  // About → skill bars  { label, percent }
  skills: [
    { name: 'PYTHON',            pct: 88 },
    { name: 'C / C++ (EMBEDDED)', pct: 80 },
    { name: 'ROS / ROBOTICS',    pct: 72 },
    { name: 'JS / WEB',          pct: 70 },
    { name: 'CAD / 3D PRINTING', pct: 65 },
  ],

  // Projects  { num, title, desc, tags[], link }
  projects: [
    {
      title: 'Autonomous Rover',
      desc: 'A differential-drive robot with obstacle avoidance and SLAM. Replace with your real build.',
      tags: ['ROS', 'LIDAR', 'PYTHON'],
      link: '#',
    },
    {
      title: 'Robotic Arm Controller',
      desc: 'Inverse-kinematics control of a 6-DOF arm over serial. Swap in your own project.',
      tags: ['C++', 'KINEMATICS', 'STM32'],
      link: '#',
    },
    {
      title: 'This Site',
      desc: 'A Three.js + vanilla-JS cyberpunk portfolio. You are looking at it.',
      tags: ['THREE.JS', 'WEBGL', 'CSS'],
      link: '#',
    },
  ],

  // Contact links  { label, href }
  contact: [
    { label: 'EMAIL',    href: 'mailto:pvudumula@gmail.com' },
    { label: 'GITHUB',   href: 'https://github.com/' },
    { label: 'LINKEDIN', href: 'https://linkedin.com/' },
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
  // skills
  $('#skills').innerHTML = CONFIG.skills.map((s) => `
    <div class="skill" data-pct="${s.pct}">
      <div class="skill__row"><span class="skill__name">${s.name}</span><span class="skill__pct">${s.pct}%</span></div>
      <div class="skill__bar"><span class="skill__fill"></span></div>
    </div>`).join('');

  // projects
  $('#projects-grid').innerHTML = CONFIG.projects.map((p, idx) => `
    <article class="card tilt">
      <div class="card__num">PRJ_${String(idx + 1).padStart(2, '0')}</div>
      <h3 class="card__title">${p.title}</h3>
      <p class="card__desc">${p.desc}</p>
      <div class="card__tags">${p.tags.map((t) => `<span class="card__tag">${t}</span>`).join('')}</div>
      <a class="card__link" href="${p.link}" target="_blank" rel="noopener">ACCESS</a>
    </article>`).join('');

  // contact
  $('#contact-links').innerHTML = CONFIG.contact.map((c) =>
    `<a class="contact__link" href="${c.href}" target="_blank" rel="noopener">${c.label}</a>`).join('');

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

  // shared: glitch the button + pulse the 3D background + cut-in slam
  btn.classList.add('is-firing');
  setTimeout(() => btn.classList.remove('is-firing'), 800);
  if (window.__cyberPulse) window.__cyberPulse();
  screenGlitch();
  triggerCutIn(btn.textContent.trim().replace(/[▣↗]/g, '').trim());

  if (action === 'glitch') {
    const target = btn.dataset.target;
    if (target) {
      setTimeout(() => $(target)?.scrollIntoView({ behavior: 'smooth' }), 220);
    }
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
