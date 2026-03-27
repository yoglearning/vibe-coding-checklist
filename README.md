# Vibe Coder Project Checklist

A polished, interactive checklist for starting new projects with less chaos and better habits.

## What It Includes

- Project name and project summary fields
- Interactive checklist with 101 items across 5 phases
- Progress bar and completion stats
- Filters for `Generic` and `Project-specific` tasks
- Local browser saving with no backend
- Static files only, so it works well on GitHub Pages

## Files

- `index.html` - app structure
- `style.css` - glassy responsive UI
- `script.js` - checklist rendering, filters, progress, and local storage
- `101-Checklist.txt` - original source checklist
- `DEPLOY.md` - GitHub Pages deployment steps

## Run Locally

Open `index.html` directly in a browser, or serve the folder with any static file server.

Example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish To GitHub

1. Create a new GitHub repository.
2. Push this folder to the repository.
3. Commit to `main`.
4. Follow `DEPLOY.md` to publish with GitHub Pages if you want a live URL.

## Notes

- The source text has 101 actionable checklist items across 5 phases.
- Progress and project notes are stored in browser `localStorage`.
- This is a static site, so there is no build step.

## License

MIT
