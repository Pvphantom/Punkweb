# PRANAV // NIGHT CITY NET

A *Cyberpunk: Edgerunners*–themed personal site — neon, glitch, a live 3D Night City
background (Three.js), 3D tilt cards, a boot sequence, and button-triggered animations.

No build step. No npm install. Just files.

## Run it locally

Because it loads ES modules (`type="module"`), open it through a tiny local server
rather than double-clicking the file:

```bash
cd Punkweb
python3 -m http.server 8000
# then open http://localhost:8000
```

(Any static server works — `npx serve`, the VS Code "Live Server" extension, etc.)

## Make it yours

Almost everything is driven by one object: the `CONFIG` block at the **top of
[`js/main.js`](js/main.js)**. Change:

- `name`, `typedLines` — hero text
- `skills` — the loadout bars (name + percent)
- `projects` — your real builds (title, description, tags, link)
- `contact` — email / GitHub / LinkedIn / anything
- `resumeUrl` — path to your resume PDF

Then drop images into [`assets/`](assets/) — see `assets/README.md`.

## Structure

```
index.html        markup + section layout
css/styles.css    all the cyberpunk styling, animations, glitch
js/background.js   Three.js 3D background (grid tunnel + particles + buildings)
js/main.js         content config + all interactivity
assets/            your images and resume
```

## Deploy (pick one, later)

- **GitHub Pages** — push to a repo, enable Pages on the `main` branch root. Done.
- **Vercel / Netlify** — drag the folder in, or connect the repo. No settings needed
  (it's static).

All three work because there's no build step.

## Accessibility / performance

- Respects `prefers-reduced-motion` (kills heavy animation, lightens the particle field).
- Falls back gracefully on touch devices (custom cursor + tilt disabled).
