# Vid-Freeze Project Page

Static GitHub Pages site for the Vid-Freeze project.

## Local Preview

Open `index.html` directly in a browser, or run a temporary static server from this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Replace Project Content

- Update title, authors, affiliations, abstract, result text, and BibTeX in `index.html`.
- Replace image placeholders in `assets/images/`.
- Add video files to `assets/videos/` and update the `<source>` paths in the Video Gallery section.
- Add the paper PDF to `assets/paper/vid-freeze.pdf`, or replace that link with the final paper URL.
- Replace placeholder `href="#"` author links and the GitHub code URL.

## GitHub Pages

For a `github.io` repository, push this directory as the repository root and enable GitHub Pages from the default branch in repository settings.
