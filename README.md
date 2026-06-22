Scroll of Mastery — Landing Page

This workspace contains a Next.js + TypeScript + Tailwind CSS landing page for "Scroll of Mastery", a studio focused on small businesses.

Features
- Responsive landing page with Header, Hero, Services, About, Process, CTA and Footer components.
- Built with Next.js App Router, TypeScript and Tailwind CSS.
- Accessible markup and subtle visual accents (gradient, focus states).

Local development

1. Install dependencies

```bash
npm install
# or
yarn
```

2. Install peer dependencies used by components (if not present):

```bash
npm install lucide-react
```

3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 to view the landing page.

Notes
- Place the provided logo at `public/images/logo.png`.
- Tailwind configuration is expected to be present in the project. If not, run `npx tailwindcss init -p` and ensure `globals.css` includes the Tailwind directives.

