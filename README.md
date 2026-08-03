# Clarity Cycle design system

This package gives the site one shared:

- CSS file
- header
- footer
- card
- button
- typography scale
- spacing system
- logo

## Upload structure

Keep this folder structure in the GitHub Pages repository:

```text
/
├── index.html
├── method.html
├── results.html
├── resources.html
├── about.html
├── page-template.html
├── styles.css
├── includes.js
├── partials/
│   ├── header.html
│   └── footer.html
└── assets/
    ├── clarity-cycle-mark.png
    ├── clarity-cycle-mark.webp
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    └── apple-touch-icon.png
```

## Add the shared system to an existing page

Inside `<head>`:

```html
<link rel="stylesheet" href="styles.css">
<script src="includes.js" defer></script>
```

Immediately after `<body>`:

```html
<div data-include="partials/header.html"></div>
```

Immediately before `</body>`:

```html
<div data-include="partials/footer.html"></div>
```

Wrap page content with:

```html
<main class="site-shell page-main">
  ...
</main>
```

Remove each page's old inline `<style>` block, old navigation, old back link and old footer.

## Important

The partials are loaded using `fetch()`. They work normally on GitHub Pages and other web servers. They will not load when an HTML file is opened directly from a computer using a `file://` address.