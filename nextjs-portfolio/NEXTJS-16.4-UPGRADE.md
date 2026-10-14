# Next.js 16.4 upgrade notes

Status (2026-10-14): `next` is pinned to exactly **16.3.8** in `package.json`. Do not use a `^` range: it would pull 16.4.0 back in on `npm update`.

## The problem

With `next@16.4.0`, `npm run dev` (Turbopack) loads the page and then throws:

```
Module [project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [client] (ecmascript)
was instantiated because it was required from module [project]/src/pages/index.js [client] (ecmascript),
but the module factory is not available.
```

It is **not** a browser cache problem. It reproduces in a fresh browser profile on a clean `.next`.
`npm run build` / `next start` work fine on 16.4.0. Only the dev server breaks.

## What was tested

| Next | Bundler (dev) | Animation import | Result |
|---|---|---|---|
| 16.4.0 | Turbopack | `motion/react` (motion 14.2.0) | Broken |
| 16.4.0 | Turbopack | `framer-motion` 14.2.0 | Broken |
| 16.4.0 | Turbopack | `framer-motion` 13.5.1 | Broken |
| 16.4.0 | Turbopack | `framer-motion` 14.2.0, not imported in `_app` | Broken |
| 16.4.0 | **webpack** (`next dev --webpack`) | `framer-motion` 14.2.0 | Works |
| 16.3.0 | Turbopack | `framer-motion` 14.2.0 | Works, but has a critical security advisory |
| **16.3.8** | Turbopack | `framer-motion` 14.2.0 | **Works, 0 advisories (current)** |

Conclusion: a Turbopack dev-mode regression in 16.4.0, triggered by importing `framer-motion` from a Pages Router page. It is not caused by our code, the motion version, or the `_app` setup.

Do not stay below 16.3.8: versions 16.0.0 to 16.3.7 have a critical RCE advisory (GHSA-p293-qw3h-jr36 and others; run `npm audit`).

## Options to get onto 16.4

Pick one. Option 1 is preferred.

### 1. Wait for a patched 16.4.x (recommended)

- Watch the releases at https://github.com/vercel/next.js/releases for a 16.4.1+ whose notes mention Turbopack / "module factory is not available".
- You can also search the issues for `module factory is not available` and `framer-motion`. If there is no issue yet, open one with the table above as the repro.
- To try a candidate, follow the [upgrade checklist](#upgrade-checklist).

### 2. Use 16.4.0 with webpack in dev only

In `package.json`:

```json
"dev": "next dev --webpack",
```

Then `npm i next@16.4.0 --save-exact`. Production builds keep using Turbopack.
Trade-off: dev and prod use different bundlers, and webpack dev is slower to start. Revert the script once a fixed 16.4.x is out.

### 3. Try the canary (only to check whether it is already fixed)

`npm i next@canary` (16.5.0-canary.x at the time of writing), then follow the [upgrade checklist](#upgrade-checklist). Don't ship a canary. If it works there, the fix is on its way into a stable release.

## Upgrade checklist

Run these for any candidate version:

1. Stop any running `npm run dev` first. A running server keeps the old module graph and gives false errors.
2. `npm i next@<version> --save-exact`
3. `rm -rf .next`
4. `npm run dev`, open http://localhost:3000, and hard-reload (Ctrl+Shift+R). Check:
   - no runtime error overlay
   - the hero typewriter animates
   - sections fade in on scroll
   - the theme toggle works
5. `npm audit`: 0 vulnerabilities.
6. `npm run build && npm start`: the page renders the same as in dev.
7. Update the pin note in `README.md`, then delete this file.
