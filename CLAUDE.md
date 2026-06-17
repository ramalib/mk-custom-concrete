# CLAUDE.md — MK Custom Concrete (Next.js 16)

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Project Stack
- Next.js 16 (App Router) with TypeScript
- Tailwind CSS (configured in `tailwind.config.ts`)
- Framer Motion for animations
- Cormorant Garamond (display) + Outfit (body) via next/font/google
- Color palette defined in tailwind.config.ts under `mk.*`

## Local Server
- **This is a Next.js project with its own dev server.**
- Start from inside this folder: `npm run dev` (runs on port 3000 by default)
- If port 3000 is busy, specify: `npm run dev -- --port 3001` (or 3002, 3003, etc.)
- Do NOT use the root `serve.mjs` — that's for static HTML projects only.
- Check if already running before starting a new instance: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000`

## Screenshot Workflow
- Puppeteer is installed in the project root's `node_modules/` (`../node_modules/`). Chrome cache is at `C:/Users/Asus/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node ../screenshot.mjs http://localhost:3000`
- If running on a different port: `node ../screenshot.mjs http://localhost:3001`
- Screenshots are saved to `../temporary screenshots/screenshot-N.png` (auto-incremented).
- Optional label: `node ../screenshot.mjs http://localhost:3000 label`
- After screenshotting, read the PNG with the Read tool to inspect visually.
- A section-level screenshot helper also exists at `../section-shot.mjs http://localhost:3000 <scrollY> <label>`

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds.

## File Structure
```
concrete-co/
├── app/
│   ├── layout.tsx      — Root layout, fonts, chat widget Script
│   ├── page.tsx        — Assembles all sections
│   └── globals.css     — CSS variables, base styles, utility classes
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Process.tsx
│   ├── WhyMK.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/             — Place real project photos here
├── tailwind.config.ts  — Custom mk.* color tokens
└── next.config.mjs     — Image remote patterns
```

## Brand
- **Business:** MK Custom Concrete
- **Location:** 2910 N Powers Blvd #341, Colorado Springs, CO 80922
- **Email:** mkconcrete719@gmail.com
- **Instagram:** @mk_concrete_sculpter
- **Service areas:** Colorado and Florida
- **Services:** Resort pools, pool slides, grottos, outdoor kitchens, fire pits, retaining walls, hardscape
- **Logo URL:** `https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/l2cHXR5mrooL3hdkO6Sg/media/6a052e40ab5d7da865763f6c.png`
- **Color palette:** mk.black (#09080A), mk.amber (#C8892A), mk.cream (#F0EBE3), mk.card (#1C1820)
- **Fonts:** Cormorant Garamond (display, --font-display), Outfit (body, --font-body)

## AI Chat Widget
Loaded in `app/layout.tsx` via Next.js Script (strategy: afterInteractive):
```html
<script src="https://widgets.leadconnectorhq.com/loader.js"
  data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
  data-widget-id="6a32f95f0e84ef9ef991aec3"></script>
```

## Brand Assets
- Always check `brand_assets/` folder (inside this directory) before designing.
- If real project photos are dropped into `public/`, replace placehold.co src URLs in Portfolio.tsx.

## Anti-Generic Guardrails
- **Colors:** Use mk.* palette only. Never default Tailwind indigo/blue.
- **Shadows:** Layered, color-tinted with low opacity. Never flat `shadow-md`.
- **Typography:** Cormorant Garamond for display, Outfit for body. Tight tracking on large headings.
- **Animations:** Only `transform` and `opacity`. Never `transition-all`.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
- **Spacing:** Use consistent spacing tokens, not arbitrary Tailwind steps.

## Hard Rules
- Do not add sections not already in the design without being asked
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo
- Do not stop after one screenshot pass
