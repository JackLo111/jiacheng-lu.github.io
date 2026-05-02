# Personal homepage — Jiacheng Lu (卢嘉成)

Static bilingual (EN / 中) research homepage. No build step. Serves as-is from any static host.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

Replace `<username>` with your GitHub username.

```bash
git init
git add .
git commit -m "Initial personal homepage"
gh repo create <username>.github.io --public --source=. --remote=origin --push
```

Then in the repo's **Settings → Pages**, confirm source = `main`, folder = `/ (root)`. The site will be live at `https://<username>.github.io` within a minute.

If you don't have `gh` installed, create the repo `<username>.github.io` manually in the GitHub UI, then:

```bash
git init
git add .
git commit -m "Initial personal homepage"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

## Editing content

- **Text copy**: every translatable line in `index.html` has both `data-en` and `data-cn` attributes — edit both at once.
- **Publications**: the `#publications` section — each `<li class="pub">` is one paper.
- **Avatar**: replace `assets/avatar.jpg` with a new square image; the CSS crops it to a circle.
- **Colors / fonts**: top of `styles.css` under `:root` (light) and `html[data-theme="dark"]`.

## Files

| Path | Purpose |
|---|---|
| `index.html` | Single-page markup, all sections, bilingual text pairs |
| `styles.css` | Design tokens, typography, layout, light/dark themes |
| `main.js` | Theme + language toggles, localStorage persistence |
| `assets/avatar.jpg` | Portrait (ASCII filename for clean URLs on Pages) |
| `.nojekyll` | Tells GitHub Pages to serve files literally, not via Jekyll |
| `CV.txt` | Content source, left in repo for reference |
| `自拍.jpg` | Original portrait, preserved |
