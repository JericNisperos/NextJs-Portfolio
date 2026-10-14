# jnisperos-space

Source for [jnisperos.space](https://jnisperos.space), the portfolio of Jeric Nisperos.

Next.js 16 (Pages Router), React 19, Tailwind CSS v4, Framer Motion, EmailJS.

`next` is pinned to exactly 16.3.8: 16.4.0 breaks `next dev` (Turbopack "module factory is not available"), and 16.3.7 and below carry a critical security advisory. See [NEXTJS-16.4-UPGRADE.md](NEXTJS-16.4-UPGRADE.md) before bumping it.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

- `src/pages/index.js` - page shell (header, theme toggle, footer)
- `src/sections/` - one file per page section (Home, About, Projects, Contact)
- `src/components/` - small shared pieces (star background, section heading, links)
- `src/styles/globals.css` - Tailwind entry, design rules, global styles
- Projects: edit the `PROJECTS` array in `src/sections/ProjectsBlock.js` (title, link, one-line pitch, tags; no images)
- AI agents: edit `AGENTS` in `src/sections/AboutBlock.js` (Stacks & Tools are hidden behind `SHOW_STACKS`)
- Social-share preview: `public/og.jpg` (1200x630), generated from `scripts/og-image.html`; tags live in `src/pages/_app.js`
- `trash/` - retired files kept for manual review; nothing in it is used by the build
