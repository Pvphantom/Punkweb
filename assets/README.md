# assets/

Drop your images and files here. The site looks for these filenames:

| File              | Where it shows up                          | Notes |
|-------------------|--------------------------------------------|-------|
| `char-1.png`          | Left holo-frame in the hero                | Portrait (3:4) looks best. Your own art / render / official wallpaper for personal use. |
| `char-2.png`          | Right holo-frame in the hero               | Same as above. |
| `resume.pdf`          | "DOWNLOAD RESUME" button                   | If missing, the button shows a notice instead. |
| `demo-turtlebot.mp4`  | "▶ PLAY DEMO" on the TurtleBot4 project    | Opens in the neon video player. See video tips below. |
| `demo-arm.mp4`        | "▶ PLAY DEMO" on the 6-DOF arm project     | Same player. |

If a character image is missing, the frame shows a "DROP ART → assets/" hint and
stays empty — no broken image. Add the file and refresh.

If a demo video is missing, the PLAY DEMO button still appears but the player shows
a "drop the file here" notice instead of a broken video. Add the file and reopen.

## Demo videos

- **Format:** use `.mp4` with **H.264** video + **AAC** audio — that plays in every
  browser. `.mov` / `.webm` often won't play everywhere.
- **Size:** keep each clip roughly **under ~30 MB** so the page stays snappy (videos
  only load when someone clicks PLAY, but smaller is still better).
- **Renaming:** the site expects the exact names above. To use different names or add
  demos to other projects, set the `video:` field on that project in
  `js/main.js` → `CONFIG.projects`.

Converting / compressing a clip with ffmpeg:

```bash
ffmpeg -i input.mov -vcodec libx264 -crf 24 -preset slow -acodec aac -movflags +faststart demo-turtlebot.mp4
```

> Note on Edgerunners art: I can't bundle copyrighted character art. Use your own
> renders/photos, art you have the rights to, or official wallpapers for personal use.
