/* =========================================================
   PRANAV // NIGHT CITY NET — synth SFX
   All sounds generated with the Web Audio API (no samples).
   window.SFX = { stab, zap, toggle, unlock, isMuted }
   ========================================================= */
window.SFX = (function () {
  const KEY = 'pv-sfx-muted';
  let ctx = null;
  let muted = localStorage.getItem(KEY) === '1';

  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch (e) { return null; }
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function noiseBuffer(c, seconds) {
    const buf = c.createBuffer(1, Math.ceil(c.sampleRate * seconds), c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  /* Big chord stab — fires with the cut-in slam */
  function stab() {
    if (muted) return;
    const c = ensure(); if (!c) return;
    const t = c.currentTime + 0.01;

    const out = c.createGain();
    out.gain.value = 0.55;
    out.connect(c.destination);

    // lowpass sweep gives the hit its "shing → thud" shape
    const filt = c.createBiquadFilter();
    filt.type = 'lowpass';
    filt.Q.value = 5;
    filt.frequency.setValueAtTime(5200, t);
    filt.frequency.exponentialRampToValueAtTime(300, t + 0.45);
    filt.connect(out);

    // Am7 cluster of detuned saws with a quick downward pitch snap
    [110, 220, 261.63, 329.63, 392].forEach((f, i) => {
      const o = c.createOscillator();
      o.type = i === 0 ? 'square' : 'sawtooth';
      o.detune.value = (i - 2) * 6;
      o.frequency.setValueAtTime(f * 1.03, t);
      o.frequency.exponentialRampToValueAtTime(f, t + 0.08);
      const g = c.createGain();
      g.gain.setValueAtTime(i === 0 ? 0.3 : 0.18, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
      o.connect(g); g.connect(filt);
      o.start(t); o.stop(t + 0.6);
    });

    // noise transient on the impact
    const n = c.createBufferSource();
    n.buffer = noiseBuffer(c, 0.25);
    const hp = c.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 1400;
    const ng = c.createGain();
    ng.gain.setValueAtTime(0.35, t);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
    n.connect(hp); hp.connect(ng); ng.connect(out);
    n.start(t); n.stop(t + 0.25);
  }

  /* Short glitch zap — fires with the section wipe */
  function zap() {
    if (muted) return;
    const c = ensure(); if (!c) return;
    const t = c.currentTime + 0.01;

    const out = c.createGain();
    out.gain.value = 0.3;
    out.connect(c.destination);

    // falling bandpassed noise sweep
    const n = c.createBufferSource();
    n.buffer = noiseBuffer(c, 0.3);
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass'; bp.Q.value = 2.5;
    bp.frequency.setValueAtTime(3200, t);
    bp.frequency.exponentialRampToValueAtTime(220, t + 0.24);
    const ng = c.createGain();
    ng.gain.setValueAtTime(0.5, t);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
    n.connect(bp); bp.connect(ng); ng.connect(out);
    n.start(t); n.stop(t + 0.3);

    // square blip pitch-diving underneath
    const o = c.createOscillator();
    o.type = 'square';
    o.frequency.setValueAtTime(880, t);
    o.frequency.exponentialRampToValueAtTime(120, t + 0.16);
    const og = c.createGain();
    og.gain.setValueAtTime(0.16, t);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o.connect(og); og.connect(out);
    o.start(t); o.stop(t + 0.2);
  }

  /* Sandevistan dash — swelling whoosh with a doppler dive + time-skip blips */
  function dash() {
    if (muted) return;
    const c = ensure(); if (!c) return;
    const t = c.currentTime + 0.01;

    const out = c.createGain();
    out.gain.value = 0.4;
    out.connect(c.destination);

    // noise whoosh that swells as he crosses
    const n = c.createBufferSource();
    n.buffer = noiseBuffer(c, 0.9);
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass'; bp.Q.value = 1.2;
    bp.frequency.setValueAtTime(280, t);
    bp.frequency.exponentialRampToValueAtTime(2600, t + 0.35);
    bp.frequency.exponentialRampToValueAtTime(320, t + 0.85);
    const ng = c.createGain();
    ng.gain.setValueAtTime(0.001, t);
    ng.gain.exponentialRampToValueAtTime(0.6, t + 0.3);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.88);
    n.connect(bp); bp.connect(ng); ng.connect(out);
    n.start(t); n.stop(t + 0.9);

    // doppler zip passing by
    const o = c.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(1400, t);
    o.frequency.exponentialRampToValueAtTime(180, t + 0.6);
    const og = c.createGain();
    og.gain.setValueAtTime(0.0001, t);
    og.gain.exponentialRampToValueAtTime(0.12, t + 0.25);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.65);
    o.connect(og); og.connect(out);
    o.start(t); o.stop(t + 0.7);

    // time-skip stutter blips
    [0.1, 0.22, 0.34].forEach((dt, i) => {
      const b = c.createOscillator();
      b.type = 'square';
      b.frequency.value = 1800 - i * 300;
      const bg = c.createGain();
      bg.gain.setValueAtTime(0.06, t + dt);
      bg.gain.exponentialRampToValueAtTime(0.0001, t + dt + 0.05);
      b.connect(bg); bg.connect(out);
      b.start(t + dt); b.stop(t + dt + 0.06);
    });
  }

  function toggle() {
    muted = !muted;
    localStorage.setItem(KEY, muted ? '1' : '0');
    return muted;
  }

  /* =========================================================
     Generative BGM — ambient neo-noir score, composed live.
     Am9 – Fmaj9 – Cmaj7 – Gadd9 (E on the 8-bar turnaround),
     76 BPM, everything drenched in generated reverb.
     window.BGM = { start, stop, playing, level }
     ========================================================= */
  const BPM = 76, BEAT = 60 / BPM, BAR = BEAT * 4;
  // lush voicings: [bass root, ...pad tones]  (freqs in Hz)
  const CHORDS = [
    { root: 110.00, tones: [220.00, 261.63, 329.63, 392.00, 493.88] }, // Am9
    { root: 87.31,  tones: [174.61, 220.00, 261.63, 329.63, 392.00] }, // Fmaj9
    { root: 130.81, tones: [196.00, 261.63, 329.63, 493.88] },         // Cmaj7
    { root: 98.00,  tones: [196.00, 246.94, 293.66, 329.63, 440.00] }, // Gadd9
  ];
  const TURNAROUND = { root: 82.41, tones: [164.81, 246.94, 329.63, 415.30] }; // E — the ache
  // composed motifs: [freq, startBeat, lengthBeats] — phrased, not random
  const PHRASES = [
    [[659.25, 0, 1.5], [587.33, 1.5, 1], [523.25, 2.5, 1.5]],   // E5 D5 C5 — falling sigh
    [[523.25, 0, 1], [440.00, 1, 2.5]],                          // C5 A4 — resolve home
    [[440.00, 0, .75], [523.25, .75, .75], [587.33, 1.5, 2.2]],  // A4 C5 D5 — reaching up
    [[392.00, 0, 1], [440.00, 1, 1], [329.63, 2, 2]],            // G4 A4 E4 — settle
  ];

  let bgmPlaying = false, bgmTimer = null, bgmMaster = null, bgmSend = null, bgmRev = null, bgmMeter = null;
  let nextBar = 0, barCount = 0;

  // generated impulse response = free cathedral
  function makeIR(c, seconds, decay) {
    const len = Math.ceil(c.sampleRate * seconds);
    const buf = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  function bgmGraph(c) {
    if (bgmMaster) return;
    // glue compressor → master fader → out
    const comp = c.createDynamicsCompressor();
    comp.threshold.value = -18; comp.knee.value = 20; comp.ratio.value = 3;
    comp.attack.value = 0.02; comp.release.value = 0.3;
    bgmMaster = c.createGain();
    bgmMaster.gain.value = 0;
    comp.connect(bgmMaster);
    bgmMaster.connect(c.destination);
    bgmMeter = c.createAnalyser();
    bgmMeter.fftSize = 256;
    bgmMaster.connect(bgmMeter);
    bgmMaster._in = comp;

    // big soft reverb everything sits in
    const conv = c.createConvolver();
    conv.buffer = makeIR(c, 3.2, 3.5);
    const wet = c.createGain(); wet.gain.value = 0.55;
    bgmRev = c.createGain();
    bgmRev.connect(conv); conv.connect(wet); wet.connect(comp);

    // dotted-eighth echo bus (feeds the reverb too)
    bgmSend = c.createGain();
    const dl = c.createDelay(1.5);
    dl.delayTime.value = BEAT * 0.75;
    const fb = c.createGain(); fb.gain.value = 0.4;
    const dwet = c.createGain(); dwet.gain.value = 0.35;
    bgmSend.connect(dl); dl.connect(fb); fb.connect(dl);
    dl.connect(dwet); dwet.connect(comp); dwet.connect(bgmRev);
  }

  const dry = () => bgmMaster._in;

  function padVoice(c, t, chord) {
    // dark filtered saws, slow-breathing cutoff, mostly heard through the reverb
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(420, t);
    lp.frequency.linearRampToValueAtTime(620, t + BAR / 2);
    lp.frequency.linearRampToValueAtTime(440, t + BAR);
    const dryTap = c.createGain(); dryTap.gain.value = 0.55;
    lp.connect(dryTap); dryTap.connect(dry());
    lp.connect(bgmRev);
    chord.tones.forEach((f) => {
      [-7, 7].forEach((cents) => {
        const o = c.createOscillator();
        o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = cents;
        const g = c.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(0.02, t + 2.0);
        g.gain.setValueAtTime(0.02, t + BAR - 0.8);
        g.gain.linearRampToValueAtTime(0.0001, t + BAR + 0.8); // overlap = crossfade
        o.connect(g); g.connect(lp);
        o.start(t); o.stop(t + BAR + 1);
      });
    });
  }

  function bassVoice(c, t, root) {
    // one long warm note per bar: sine sub + quiet triangle octave for small speakers
    [[root, 'sine', 0.17], [root * 2, 'triangle', 0.05]].forEach(([f, type, vol]) => {
      const o = c.createOscillator();
      o.type = type; o.frequency.value = f;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(vol, t + 0.3);
      g.gain.setValueAtTime(vol, t + BAR - 0.6);
      g.gain.linearRampToValueAtTime(0.0001, t + BAR + 0.1);
      o.connect(g); g.connect(dry());
      o.start(t); o.stop(t + BAR + 0.2);
    });
  }

  function pulse(c, t) {
    // heartbeat thump, felt more than heard
    const o = c.createOscillator();
    o.frequency.setValueAtTime(90, t);
    o.frequency.exponentialRampToValueAtTime(38, t + 0.15);
    const g = c.createGain();
    g.gain.setValueAtTime(0.22, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
    o.connect(g); g.connect(dry());
    o.start(t); o.stop(t + 0.4);
  }

  function arpNote(c, t, f) {
    // soft sine pluck, lives in the echo + reverb
    const o = c.createOscillator();
    o.type = 'sine'; o.frequency.value = f;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.045, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    o.connect(g);
    const dryTap = c.createGain(); dryTap.gain.value = 0.5;
    g.connect(dryTap); dryTap.connect(dry());
    g.connect(bgmSend); g.connect(bgmRev);
    o.start(t); o.stop(t + 0.55);
  }

  function leadNote(c, t, f, len) {
    // breathy lead with slow vibrato, drowned in reverb
    const o = c.createOscillator();
    o.type = 'triangle'; o.frequency.value = f;
    const vib = c.createOscillator(); vib.frequency.value = 4.5;
    const vibAmt = c.createGain(); vibAmt.gain.value = f * 0.004;
    vib.connect(vibAmt); vibAmt.connect(o.frequency);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.055, t + 0.25);
    g.gain.setValueAtTime(0.055, t + len * BEAT * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len * BEAT + 0.8);
    o.connect(g);
    const dryTap = c.createGain(); dryTap.gain.value = 0.35;
    g.connect(dryTap); dryTap.connect(dry());
    g.connect(bgmRev); g.connect(bgmSend);
    o.start(t); o.stop(t + len * BEAT + 1);
    vib.start(t); vib.stop(t + len * BEAT + 1);
  }

  function scheduleBar(c, t, bar) {
    const chord = bar % 8 === 7 ? TURNAROUND : CHORDS[bar % 4];
    padVoice(c, t, chord);
    bassVoice(c, t, chord.root);
    pulse(c, t); pulse(c, t + 2 * BEAT);
    // ordered ascending arp — hypnotic, not busy; occasional rest for air
    const sorted = [...chord.tones].sort((a, b) => a - b);
    for (let i = 0; i < 8; i++) {
      if (Math.random() < 0.2) continue;
      const f = sorted[i % sorted.length] * (i >= sorted.length ? 2 : 1);
      arpNote(c, t + i * BEAT / 2, f);
    }
    // a composed phrase every few bars, never over the turnaround
    if (bar % 4 === 2 && bar % 8 !== 7 && Math.random() < 0.7) {
      const ph = PHRASES[Math.floor(Math.random() * PHRASES.length)];
      ph.forEach(([f, sb, len]) => leadNote(c, t + sb * BEAT, f, len));
    }
  }

  function bgmTick() {
    const c = ctx;
    if (!c) return;
    // schedule ~4s ahead so background-tab timer throttling can't starve it
    while (nextBar < c.currentTime + 4) {
      scheduleBar(c, Math.max(nextBar, c.currentTime + 0.05), barCount);
      nextBar = Math.max(nextBar, c.currentTime + 0.05) + BAR;
      barCount++;
    }
  }

  function bgmStart() {
    if (bgmPlaying) return;
    const c = ensure(); if (!c) return;
    bgmGraph(c);
    bgmPlaying = true;
    nextBar = c.currentTime + 0.1;
    bgmMaster.gain.cancelScheduledValues(c.currentTime);
    bgmMaster.gain.setValueAtTime(bgmMaster.gain.value, c.currentTime);
    bgmMaster.gain.linearRampToValueAtTime(0.9, c.currentTime + 3);
    bgmTick();
    bgmTimer = setInterval(bgmTick, 500);
  }

  function bgmStop() {
    if (!bgmPlaying) return;
    bgmPlaying = false;
    clearInterval(bgmTimer);
    if (bgmMaster && ctx) {
      bgmMaster.gain.cancelScheduledValues(ctx.currentTime);
      bgmMaster.gain.setValueAtTime(bgmMaster.gain.value, ctx.currentTime);
      bgmMaster.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
    }
  }

  function bgmLevel() {
    if (!bgmMeter) return 0;
    const d = new Uint8Array(bgmMeter.frequencyBinCount);
    bgmMeter.getByteTimeDomainData(d);
    let sum = 0;
    for (let i = 0; i < d.length; i++) { const v = (d[i] - 128) / 128; sum += v * v; }
    return Math.sqrt(sum / d.length);
  }

  window.BGM = { start: bgmStart, stop: bgmStop, playing: () => bgmPlaying, level: bgmLevel };

  return { stab, zap, dash, toggle, unlock: ensure, isMuted: () => muted };
})();
