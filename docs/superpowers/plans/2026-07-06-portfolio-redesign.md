# Portfolio Redesign ("Dev It Out OS") Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio into a dark, amber/beige "engineering / OS / IDE" experience with a design system, bilingual FR/EN toggle, a living background, and six reworked sections — replacing the Spline iframe hero.

**Architecture:** Vite + React 18 + TS + Tailwind. Design tokens live in `src/index.css` (CSS variables) and are exposed to Tailwind via `tailwind.config.js`. Content is centralized in typed `src/data/` modules with bilingual fields. A tiny custom i18n context (no dependency) drives the FR/EN toggle. Reusable primitives live in `src/components/ui/`; sections in `src/components/sections/`; layout in `src/components/layout/`; the animated background in `src/components/background/`.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 3, Framer Motion 11, lucide-react. `@splinetool/react-spline` is removed.

## Global Constraints

- Package manager: **pnpm**. Verify with `pnpm build` and `pnpm lint`.
- **No test framework exists** and none is added (visual portfolio). Per-task verification = `pnpm build` passes, `pnpm lint` has no new errors, and visual check via the preview server (`pnpm dev`).
- No `@splinetool/react-spline` usage; dependency removed from `package.json`.
- Palette tokens (exact values): `--bg:#100d0a`, `--surface:#1a1512`, `--surface-2:#221b16`, `--border:rgba(243,238,205,0.10)`, `--accent:#f5a623`, `--accent-hot:#ff8c42`, `--beige:#f3eecd`, `--violet:#a78bfa`, `--text:#f5f0e6`, `--text-muted:#a8a196`, `--success:#7bd88f`.
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono). `font-display: swap`.
- Default language = **EN**; missing key falls back to EN string. Persist choice in `localStorage` key `lang`; sync `<html lang>`.
- Branding string stays **"Dev It Out"**. Name displayed: **"Njiva Olaf"**.
- All animation respects `prefers-reduced-motion: reduce`.
- Every interactive element keyboard-accessible with a visible focus ring; icons have `aria-label`; images have `alt`.
- Commit after each task with a conventional-commit message.

---

## File Structure

```
index.html                         (M) SEO meta, fonts, lang
tailwind.config.js                 (M) theme.extend from tokens
package.json                       (M) remove spline dep
src/index.css                      (M) tokens + base styles
src/App.tsx                        (M) provider + background + sections
src/components/Home3DSpline.tsx    (DELETE)
src/components/about.style.css     (DELETE)  → replaced by Tailwind
src/components/Experience/*        (DELETE dir) → moved to sections
src/components/Projects/*          (DELETE dir) → moved to sections
src/components/NavBar/*            (DELETE dir) → moved to layout
src/components/Contact.tsx         (DELETE)  → moved to sections
src/components/About.tsx           (DELETE)  → moved to sections
src/components/archives/*          (leave as-is, unused, not imported)

src/i18n/LanguageContext.tsx       (C) provider + useLang() + useT()
src/i18n/dictionary.ts             (C) typed fr/en strings
src/data/experiences.ts            (C)
src/data/skills.ts                 (C)
src/data/projects.ts               (C)
src/data/socials.ts                (C)
src/components/ui/Button.tsx       (C)
src/components/ui/Card.tsx         (C)
src/components/ui/Badge.tsx        (C)
src/components/ui/SectionHeading.tsx (C)
src/components/ui/TerminalWindow.tsx  (C)
src/components/ui/index.ts         (C) barrel
src/components/background/GridBackground.tsx (C)
src/components/layout/NavBar.tsx   (C)
src/components/layout/Footer.tsx   (C)
src/components/sections/Hero.tsx   (C)
src/components/sections/About.tsx  (C)
src/components/sections/Skills.tsx (C)
src/components/sections/Experience.tsx (C)
src/components/sections/Projects.tsx  (C)
src/components/sections/Contact.tsx   (C)
src/hooks/useReducedMotion.ts      (C) shared reduced-motion hook
src/hooks/useTypewriter.ts         (C) terminal typing effect
```

---

### Task 1: Foundation — tokens, Tailwind, fonts, SEO, remove Spline

**Files:**
- Modify: `package.json` (remove `@splinetool/react-spline`)
- Delete: `src/components/Home3DSpline.tsx`
- Modify: `index.html`
- Modify: `tailwind.config.js`
- Modify: `src/index.css`
- Modify: `src/App.tsx` (temporary: drop Home3DSpline import so build stays green)

**Interfaces:**
- Produces: Tailwind color tokens `bg, surface, surface2, border, accent, accentHot, beige, violet, text, muted, success`; font families `font-display, font-sans, font-mono`; CSS vars listed in Global Constraints; utility class `.section-pad`.

- [ ] **Step 1: Remove Spline dependency and delete hero file**

```bash
pnpm remove @splinetool/react-spline
rm src/components/Home3DSpline.tsx
```

- [ ] **Step 2: Update `index.html`** — SEO + fonts + dark theme color

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#100d0a" />
    <title>Njiva Olaf — Full-Stack Engineer | Dev It Out</title>
    <meta name="description" content="Njiva Olaf Ranaivoson — Full-Stack JavaScript engineer with 8+ years building scalable APIs, real-time and fintech systems." />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Njiva Olaf — Full-Stack Engineer" />
    <meta property="og:description" content="Full-Stack JavaScript engineer. APIs, real-time, fintech. Dev It Out." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Replace `src/index.css`** with tokens + base

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #100d0a;
  --surface: #1a1512;
  --surface-2: #221b16;
  --border: rgba(243, 238, 205, 0.10);
  --accent: #f5a623;
  --accent-hot: #ff8c42;
  --beige: #f3eecd;
  --violet: #a78bfa;
  --text: #f5f0e6;
  --text-muted: #a8a196;
  --success: #7bd88f;
  --dur-fast: 150ms;
  --dur: 300ms;
}

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background-color: var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

@layer components {
  .section-pad { @apply py-16 md:py-24 px-6 sm:px-10; }
}

::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--surface-2); border-radius: 5px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}
```

- [ ] **Step 4: Replace `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface-2)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        accentHot: 'var(--accent-hot)',
        beige: 'var(--beige)',
        violet: 'var(--violet)',
        text: 'var(--text)',
        muted: 'var(--text-muted)',
        success: 'var(--success)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderColor: { DEFAULT: 'var(--border)' },
      boxShadow: {
        glow: '0 0 40px -12px rgba(245, 166, 35, 0.35)',
        card: '0 8px 30px -12px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 5: Make `src/App.tsx` build-green temporarily**

Remove the `Home3DSpline` import and its usage. Leave a placeholder so the page renders:

```tsx
import About from './components/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact';
import Navbar from './components/NavBar';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
```

- [ ] **Step 6: Verify build + lint**

Run: `pnpm build && pnpm lint`
Expected: build succeeds; no new lint errors.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: remove spline hero, add design tokens, fonts and SEO base"
```

---

### Task 2: i18n system (custom, zero-dependency)

**Files:**
- Create: `src/i18n/dictionary.ts`
- Create: `src/i18n/LanguageContext.tsx`

**Interfaces:**
- Produces:
  - `type Lang = 'en' | 'fr'`
  - `LanguageProvider: React.FC<{ children: ReactNode }>`
  - `useLang(): { lang: Lang; setLang: (l: Lang) => void; toggle: () => void }`
  - `useT(): (key: DictKey) => string` where `DictKey = keyof typeof dictionary.en`
  - `type Localized = { en: string; fr: string }` and helper `pick(l: Localized, lang: Lang): string`

- [ ] **Step 1: Create `src/i18n/dictionary.ts`**

UI strings only (section content lives in `data/`). Keys must exist in both `en` and `fr`.

```ts
export type Lang = 'en' | 'fr';

export type Localized = { en: string; fr: string };
export const pick = (l: Localized, lang: Lang): string => l[lang] ?? l.en;

export const dictionary = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.status': 'dev-it-out :: online',
    'hero.roleTag': 'Full-Stack Engineer',
    'hero.tagline': 'Engineering scalable systems, end to end.',
    'hero.desc': 'Full-Stack JavaScript engineer with 8+ years building APIs, real-time and fintech systems across real estate, food-tech and finance.',
    'hero.ctaWork': 'View work',
    'hero.ctaContact': 'Get in touch',
    'hero.modules': 'LOADED_MODULES',
    'about.title': 'About',
    'about.kicker': 'whoami',
    'skills.title': 'Skills',
    'skills.kicker': 'stack.json',
    'experience.title': 'Experience',
    'experience.kicker': 'git log --experience',
    'projects.title': 'Projects',
    'projects.kicker': 'ls ./projects',
    'contact.title': 'Get in touch',
    'contact.kicker': 'connect',
    'contact.desc': "Have a project or a role in mind? Let's talk.",
    'contact.book': 'Book a call',
    'contact.email': 'Email',
    'footer.rights': 'All rights reserved.',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'hero.status': 'dev-it-out :: en ligne',
    'hero.roleTag': 'Ingénieur Full-Stack',
    'hero.tagline': 'Je conçois des systèmes scalables, de bout en bout.',
    'hero.desc': "Ingénieur Full-Stack JavaScript, 8+ ans à construire des APIs, du temps réel et des systèmes fintech dans l'immobilier, la food-tech et la finance.",
    'hero.ctaWork': 'Voir mes projets',
    'hero.ctaContact': 'Me contacter',
    'hero.modules': 'MODULES_CHARGÉS',
    'about.title': 'À propos',
    'about.kicker': 'whoami',
    'skills.title': 'Compétences',
    'skills.kicker': 'stack.json',
    'experience.title': 'Expérience',
    'experience.kicker': 'git log --experience',
    'projects.title': 'Projets',
    'projects.kicker': 'ls ./projects',
    'contact.title': 'Me contacter',
    'contact.kicker': 'connect',
    'contact.desc': 'Un projet ou un poste en tête ? Discutons-en.',
    'contact.book': 'Réserver un appel',
    'contact.email': 'Email',
    'footer.rights': 'Tous droits réservés.',
  },
} as const;

export type DictKey = keyof typeof dictionary['en'];
```

- [ ] **Step 2: Create `src/i18n/LanguageContext.tsx`**

```tsx
import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { dictionary, DictKey, Lang } from './dictionary';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };
const LanguageContext = createContext<Ctx | null>(null);

const getInitial = (): Lang => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem('lang');
  return stored === 'fr' || stored === 'en' ? stored : 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitial);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('lang', lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((p) => (p === 'en' ? 'fr' : 'en')), []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}

export function useT() {
  const { lang } = useLang();
  return useCallback((key: DictKey): string => dictionary[lang][key] ?? dictionary.en[key], [lang]);
}
```

- [ ] **Step 3: Verify build + lint**

Run: `pnpm build && pnpm lint`
Expected: build succeeds; no new lint errors. (Not wired into UI yet — verifies types compile.)

- [ ] **Step 4: Commit**

```bash
git add src/i18n
git commit -m "feat: add lightweight bilingual i18n context"
```

---

### Task 3: Data modules

**Files:**
- Create: `src/data/experiences.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/socials.ts`

**Interfaces:**
- Produces:
  - `type Experience = { title: string; company: string; period: string; description: Localized; logo?: string; badges: string[] }`
  - `experiences: Experience[]`
  - `type SkillCategory = { id: string; label: Localized; skills: { name: string; image: string }[] }`
  - `skillCategories: SkillCategory[]`
  - `type Project = { title: string; description: Localized; stack: string[]; cover: string; href?: string; repo?: string }`
  - `projects: Project[]`
  - `type Social = { id: string; label: string; href: string; icon: 'mail' | 'linkedin' | 'calendar' | 'github' }`
  - `socials: Social[]`

- [ ] **Step 1: Create `src/data/experiences.ts`**

Migrate the 9 real experiences from the old `Experience.tsx`. `description` becomes `Localized` (write the FR translation for each). Keep the existing `badges`; where the old data had none, provide the tech list from the description. Example shape (repeat for all 9, using the real content that currently exists in `src/components/Experience/Experience.tsx`):

```ts
import { Localized } from '../i18n/dictionary';

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: Localized;
  logo?: string;
  badges: string[];
};

export const experiences: Experience[] = [
  {
    title: 'Full Stack JavaScript Engineer',
    company: 'Emeria Technologies',
    period: 'June 2024 - Present',
    description: {
      en: "Developed and optimized billing and property management solutions. Integrated critical features (contract management, accounting) to improve UX and operational efficiency. Contributed to the 'Tech Quality' community with end-to-end testing improvements.",
      fr: "Développement et optimisation de solutions de facturation et de gestion immobilière. Intégration de fonctionnalités critiques (gestion des contrats, comptabilité) pour améliorer l'UX et l'efficacité opérationnelle. Contribution à la communauté « Tech Quality » via l'amélioration des tests end-to-end.",
    },
    logo: 'logos/Emeria_logo.jpg',
    badges: ['Node.js', 'React', 'TypeScript', 'MongoDB', 'Snowflake'],
  },
  // ...Superprof, Planity, BOLK, TheFork, France.TV, Spaycial, AGILEUM, EON Reality
  // Migrate each entry's title/company/period/logo verbatim; translate description; keep/derive badges.
];
```

- [ ] **Step 2: Create `src/data/skills.ts`**

Group the 15 existing technos (from old `About.tsx`) into categories. Reuse the same `logos/technos/*.svg` paths.

```ts
import { Localized } from '../i18n/dictionary';

export type Skill = { name: string; image: string };
export type SkillCategory = { id: string; label: Localized; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: { en: 'Backend', fr: 'Backend' },
    skills: [
      { name: 'Node.js', image: 'logos/technos/nodedotjs.svg' },
      { name: 'NestJS', image: 'logos/technos/nestjs-color.svg' },
      { name: 'GraphQL', image: 'logos/technos/graphql-color.svg' },
      { name: 'AWS Lambda', image: 'logos/technos/awslambda-color.svg' },
      { name: 'Temporal', image: 'logos/technos/temporal-color.svg' },
    ],
  },
  {
    id: 'frontend',
    label: { en: 'Frontend', fr: 'Frontend' },
    skills: [
      { name: 'React', image: 'logos/technos/react-color.svg' },
      { name: 'TypeScript', image: 'logos/technos/typescript-color.svg' },
    ],
  },
  {
    id: 'data',
    label: { en: 'Data & ORM', fr: 'Data & ORM' },
    skills: [
      { name: 'PostgreSQL', image: 'logos/technos/postgresql-color.svg' },
      { name: 'MySQL', image: 'logos/technos/mysql-color.svg' },
      { name: 'MongoDB', image: 'logos/technos/mongodb-color.svg' },
      { name: 'Snowflake', image: 'logos/technos/snowflake-color.svg' },
      { name: 'Prisma', image: 'logos/technos/prisma-color.svg' },
      { name: 'Sequelize', image: 'logos/technos/sequelize-color.svg' },
    ],
  },
  {
    id: 'devops-testing',
    label: { en: 'DevOps & Testing', fr: 'DevOps & Tests' },
    skills: [
      { name: 'Docker', image: 'logos/technos/docker-color.svg' },
      { name: 'Jest', image: 'logos/technos/jest-color.svg' },
      { name: 'Mocha', image: 'logos/technos/mocha-color.svg' },
      { name: 'Cucumber', image: 'logos/technos/cucumber-color.svg' },
    ],
  },
];
```

- [ ] **Step 3: Create `src/data/projects.ts`** (polished placeholders, ready to replace)

```ts
import { Localized } from '../i18n/dictionary';

export type Project = {
  title: string;
  description: Localized;
  stack: string[];
  cover: string;      // gradient key or image path
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: 'Billing Engine',
    description: {
      en: 'A modular billing and invoicing service handling multi-country tax rules and contract lifecycles.',
      fr: 'Un service de facturation modulaire gérant les règles fiscales multi-pays et le cycle de vie des contrats.',
    },
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Snowflake'],
    cover: 'amber',
  },
  {
    title: 'Realtime Fleet Dashboard',
    description: {
      en: 'Live monitoring for a distributed fleet of machines with Socket.IO and crash management.',
      fr: 'Supervision en temps réel d\'une flotte de machines distribuées avec Socket.IO et gestion des crashs.',
    },
    stack: ['Vue.js', 'Socket.IO', 'Node.js', 'PostgreSQL'],
    cover: 'violet',
  },
  {
    title: 'Open Banking Connector',
    description: {
      en: 'PSD2 aggregation layer integrating third-party banking providers behind a clean REST API.',
      fr: 'Couche d\'agrégation PSD2 intégrant des fournisseurs bancaires tiers derrière une API REST propre.',
    },
    stack: ['Node.js', 'OAuth', 'REST', 'PSD2'],
    cover: 'beige',
  },
];
```

- [ ] **Step 4: Create `src/data/socials.ts`**

```ts
export type Social = {
  id: string;
  label: string;
  href: string;
  icon: 'mail' | 'linkedin' | 'calendar' | 'github';
};

export const socials: Social[] = [
  { id: 'calendly', label: 'Book me', href: 'https://calendly.com/nji-olaf', icon: 'calendar' },
  { id: 'email', label: 'njivaolaf.pro@gmail.com', href: 'mailto:njivaolaf.pro@gmail.com', icon: 'mail' },
  { id: 'linkedin', label: 'njiva-olaf', href: 'https://www.linkedin.com/in/njiva-olaf/', icon: 'linkedin' },
];
```

- [ ] **Step 5: Verify build + lint**

Run: `pnpm build && pnpm lint`
Expected: build succeeds; no new lint errors.

- [ ] **Step 6: Commit**

```bash
git add src/data
git commit -m "feat: centralize bilingual content in typed data modules"
```

---

### Task 4: Shared hooks

**Files:**
- Create: `src/hooks/useReducedMotion.ts`
- Create: `src/hooks/useTypewriter.ts`

**Interfaces:**
- Produces:
  - `useReducedMotion(): boolean`
  - `useTypewriter(lines: string[], opts?: { speed?: number; enabled?: boolean }): { text: string; done: boolean }` — types `lines` joined by `\n`, respects `enabled`.

- [ ] **Step 1: Create `src/hooks/useReducedMotion.ts`**

```ts
import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return reduced;
}
```

- [ ] **Step 2: Create `src/hooks/useTypewriter.ts`**

```ts
import { useEffect, useState } from 'react';

export function useTypewriter(
  lines: string[],
  opts: { speed?: number; enabled?: boolean } = {},
): { text: string; done: boolean } {
  const { speed = 28, enabled = true } = opts;
  const full = lines.join('\n');
  const [count, setCount] = useState(enabled ? 0 : full.length);

  useEffect(() => {
    if (!enabled) { setCount(full.length); return; }
    setCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= full.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [full, speed, enabled]);

  return { text: full.slice(0, count), done: count >= full.length };
}
```

- [ ] **Step 3: Verify build + lint**

Run: `pnpm build && pnpm lint`
Expected: build succeeds; no new lint errors.

- [ ] **Step 4: Commit**

```bash
git add src/hooks
git commit -m "feat: add reduced-motion and typewriter hooks"
```

---

### Task 5: UI primitives

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/TerminalWindow.tsx`
- Create: `src/components/ui/index.ts`

**Interfaces:**
- Produces:
  - `Button({ variant?: 'primary' | 'ghost', as?: 'a' | 'button', href?, onClick?, children, className? })`
  - `Card({ children, className?, hover?: boolean })`
  - `Badge({ children })`
  - `SectionHeading({ kicker, title, className? })`
  - `TerminalWindow({ title, children, className? })`
  - barrel `index.ts` re-exports all.

- [ ] **Step 1: `Button.tsx`**

```tsx
import { ReactNode } from 'react';

type Props = {
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
};

const base =
  'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg';
const variants = {
  primary: 'bg-accent text-bg hover:bg-accentHot hover:shadow-glow',
  ghost: 'border border-border text-text hover:border-accent hover:text-accent',
};

export default function Button({ variant = 'primary', href, onClick, children, className = '', ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return <a href={href} className={cls} onClick={onClick} {...rest}>{children}</a>;
  }
  return <button type="button" className={cls} onClick={onClick} {...rest}>{children}</button>;
}
```

- [ ] **Step 2: `Card.tsx`**

```tsx
import { ReactNode } from 'react';

export default function Card({ children, className = '', hover = true }: { children: ReactNode; className?: string; hover?: boolean }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface shadow-card ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 3: `Badge.tsx`**

```tsx
import { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-surface2 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
```

- [ ] **Step 4: `SectionHeading.tsx`**

```tsx
export default function SectionHeading({ kicker, title, className = '' }: { kicker: string; title: string; className?: string }) {
  return (
    <div className={`mb-12 ${className}`}>
      <p className="mb-2 font-mono text-sm text-accent">
        <span className="text-muted">$</span> {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">{title}</h2>
    </div>
  );
}
```

- [ ] **Step 5: `TerminalWindow.tsx`**

```tsx
import { ReactNode } from 'react';

export default function TerminalWindow({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-[#0c0a08] shadow-card ${className}`}>
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm">{children}</div>
    </div>
  );
}
```

- [ ] **Step 6: `index.ts` barrel**

```ts
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Badge } from './Badge';
export { default as SectionHeading } from './SectionHeading';
export { default as TerminalWindow } from './TerminalWindow';
```

- [ ] **Step 7: Verify build + lint**

Run: `pnpm build && pnpm lint`
Expected: build succeeds; no new lint errors.

- [ ] **Step 8: Commit**

```bash
git add src/components/ui
git commit -m "feat: add design-system UI primitives"
```

---

### Task 6: GridBackground (living background)

**Files:**
- Create: `src/components/background/GridBackground.tsx`

**Interfaces:**
- Consumes: `useReducedMotion` from `src/hooks/useReducedMotion`.
- Produces: default-export `GridBackground` — fixed, `pointer-events-none`, `-z-10`.

- [ ] **Step 1: Create `src/components/background/GridBackground.tsx`**

Grid + glows via CSS; particles via a lightweight canvas that pauses when the tab is hidden and is disabled under reduced motion.

```tsx
import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let running = true;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth * DPR;
      canvas.height = window.innerHeight * DPR;
      const count = Math.min(50, Math.floor(window.innerWidth / 30));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15 * DPR,
        vy: (Math.random() - 0.5) * 0.15 * DPR,
        r: (Math.random() * 1.2 + 0.4) * DPR,
      }));
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(245, 166, 35, 0.35)';
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) { raf = requestAnimationFrame(draw); } else { cancelAnimationFrame(raf); }
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reduced]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
        }}
      />
      {/* glows */}
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-violet/10 blur-[120px]" />
      {/* particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}
```

- [ ] **Step 2: Verify build + lint**

Run: `pnpm build && pnpm lint`
Expected: build succeeds; no new lint errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/background
git commit -m "feat: add living grid/glow/particles background"
```

---

### Task 7: Layout — NavBar (with language toggle) + Footer

**Files:**
- Create: `src/components/layout/NavBar.tsx`
- Create: `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `useT`, `useLang` from i18n.
- Produces: default exports `NavBar`, `Footer`.

- [ ] **Step 1: Create `src/components/layout/NavBar.tsx`**

Fixed, translucent, links scroll to section ids `about/skills/experience/projects/contact`, FR/EN toggle, mobile burger. Focus rings on all interactive elements.

```tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useT, useLang } from '../../i18n/LanguageContext';

const links = [
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' },
] as const;

export default function NavBar() {
  const t = useT();
  const { lang, toggle } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-border bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold text-text">
          Dev It Out<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="font-mono text-sm text-muted transition-colors hover:text-accent focus-visible:text-accent">
              {t(l.key)}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="rounded-md border border-border px-2 py-1 font-mono text-xs text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {lang.toUpperCase()}
          </button>
        </div>
        <button className="md:hidden text-text" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="block px-6 py-3 font-mono text-sm text-muted hover:text-accent">
              {t(l.key)}
            </a>
          ))}
          <button onClick={toggle} className="block px-6 py-3 font-mono text-sm text-accent">
            {lang.toUpperCase()} · switch
          </button>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Create `src/components/layout/Footer.tsx`**

```tsx
import { useT } from '../../i18n/LanguageContext';

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border py-8 text-center">
      <p className="font-display text-sm font-bold text-text">
        Dev It Out<span className="text-accent">.</span>
      </p>
      <p className="mt-1 font-mono text-xs text-muted">
        © {new Date().getFullYear()} Njiva Olaf Ranaivoson · {t('footer.rights')}
      </p>
    </footer>
  );
}
```

- [ ] **Step 3: Verify build + lint**

Run: `pnpm build && pnpm lint`
Expected: build succeeds; no new lint errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout
git commit -m "feat: add navbar with language toggle and footer"
```

---

### Task 8: Hero section (with interactive IDE card)

**Files:**
- Create: `src/components/sections/Hero.tsx`

**Interfaces:**
- Consumes: `useT`, `useLang`, `Button`, `TerminalWindow`, `useTypewriter`, `useReducedMotion`, `experiences` (for the stats count).
- Produces: default export `Hero` with `id="top"`.

- [ ] **Step 1: Create `src/components/sections/Hero.tsx`**

Two columns. Left: status chip, big gradient title "Njiva Olaf", role tag, tagline, desc, two CTAs, LOADED_MODULES chips. Right: `TerminalWindow` with a tab row and an auto-typed terminal body + a mini stats strip. Entrance stagger via Framer Motion (guarded by reduced motion). On mobile the terminal drops below.

```tsx
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { Button, TerminalWindow } from '../ui';
import { useT } from '../../i18n/LanguageContext';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const modules = ['Node.js', 'React', 'TypeScript', 'NestJS', 'PostgreSQL', 'GraphQL'];

const terminalLines = [
  '$ whoami',
  'njiva-olaf — full-stack engineer',
  '$ cat stack.json',
  '{ "backend": "Node/Nest", "frontend": "React/TS" }',
  '$ uptime',
  '8+ years · 9 companies · fintech · realtime',
  '$ _',
];

export default function Hero() {
  const t = useT();
  const reduced = useReducedMotion();
  const { text } = useTypewriter(terminalLines, { enabled: !reduced });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="top" className="section-pad relative flex min-h-screen items-center">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" /> {t('hero.status')}
          </motion.span>

          <motion.h1 variants={item} className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-text">Njiva</span>{' '}
            <span className="bg-gradient-to-r from-accent to-accentHot bg-clip-text text-transparent">Olaf</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-mono text-sm text-accent">
            {'<'}{t('hero.roleTag')}{' />'}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-md font-display text-xl text-text">
            {t('hero.tagline')}
          </motion.p>
          <motion.p variants={item} className="mt-3 max-w-md text-muted">
            {t('hero.desc')}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">{t('hero.ctaWork')} <ArrowRight size={16} /></Button>
            <Button variant="ghost" href="#contact">{t('hero.ctaContact')}</Button>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <p className="font-mono text-xs text-muted">{t('hero.modules')}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {modules.map((m) => (
                <span key={m} className="rounded-md border border-border bg-surface2 px-2.5 py-1 font-mono text-xs text-muted">{m}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — interactive IDE card */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.3 }}
        >
          <TerminalWindow title="portfolio ~ zsh">
            <pre className="min-h-[220px] whitespace-pre-wrap text-text">
              <span className="text-success">{text}</span>
              <span className="animate-pulse text-accent">▌</span>
            </pre>
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4 text-center">
              {[
                { k: '8+', v: 'years' },
                { k: '9', v: 'companies' },
                { k: '3', v: 'domains' },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-2xl font-bold text-accent">{s.k}</p>
                  <p className="font-mono text-xs text-muted">{s.v}</p>
                </div>
              ))}
            </div>
          </TerminalWindow>
          <a href="https://github.com/njivaolafpro" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent">
            <Github size={14} /> github.com/njivaolafpro
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Wire Hero into App for visual check** (temporary until Task 13)

In `src/App.tsx`, wrap with `LanguageProvider`, render `GridBackground` + `NavBar` + `Hero`. (Full wiring in Task 13; this lets you preview now.)

- [ ] **Step 3: Verify build + lint + preview**

Run: `pnpm build && pnpm lint`
Then `pnpm dev` and confirm in the browser: title renders, terminal types out, CTAs and modules visible, no console errors. Confirm reduced-motion (via devtools emulation) shows the terminal fully typed with no stagger.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Hero.tsx src/App.tsx
git commit -m "feat: add hero with interactive IDE terminal card"
```

---

### Task 9: About section

**Files:**
- Create: `src/components/sections/About.tsx`

**Interfaces:**
- Consumes: `useT`, `SectionHeading`, `TerminalWindow`, `motion`.
- Produces: default export `About` with `id="about"`.

- [ ] **Step 1: Create `src/components/sections/About.tsx`**

Bio as a stylized "README.md" block. Two bilingual paragraphs — add `about.p1` / `about.p2` keys to the dictionary (EN + FR) before using them.

```tsx
import { motion } from 'framer-motion';
import { SectionHeading, TerminalWindow } from '../ui';
import { useT } from '../../i18n/LanguageContext';

export default function About() {
  const t = useT();
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker={t('about.kicker')} title={t('about.title')} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <TerminalWindow title="README.md">
            <div className="space-y-4 font-sans text-base leading-relaxed text-muted">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add `about.p1` / `about.p2` to `dictionary.ts`** (EN from old About.tsx; FR translated)

```ts
// en:
'about.p1': "I'm a seasoned full-stack developer with 8 years of experience building dynamic, scalable web applications. I specialize in API development, integration, real-time applications, and finance systems such as billing and contract APIs.",
'about.p2': 'My work spans real estate, food-tech and fintech, merging robust backend systems with seamless frontends to ship solutions that are both reliable and user-friendly.',
// fr:
'about.p1': "Développeur full-stack aguerri, 8 ans d'expérience à construire des applications web dynamiques et scalables. Je me spécialise dans le développement d'API, l'intégration, le temps réel et les systèmes financiers (facturation, contrats).",
'about.p2': "Mon travail couvre l'immobilier, la food-tech et la fintech, en associant des back-ends robustes à des front-ends soignés pour livrer des solutions fiables et agréables à utiliser.",
```

- [ ] **Step 3: Verify build + lint + preview**

Run: `pnpm build && pnpm lint`; visually confirm the About block renders and toggling FR/EN swaps the text.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/About.tsx src/i18n/dictionary.ts
git commit -m "feat: add about section as README block"
```

---

### Task 10: Skills section

**Files:**
- Create: `src/components/sections/Skills.tsx`

**Interfaces:**
- Consumes: `useT`, `useLang`, `SectionHeading`, `Card`, `skillCategories`, `pick`, `motion`.
- Produces: default export `Skills` with `id="skills"`.

- [ ] **Step 1: Create `src/components/sections/Skills.tsx`**

Categories from `data/skills.ts`; each category is a titled group; each skill is a premium tile with hover lift.

```tsx
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui';
import { useT, useLang } from '../../i18n/LanguageContext';
import { skillCategories } from '../../data/skills';
import { pick } from '../../i18n/dictionary';

export default function Skills() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={t('skills.kicker')} title={t('skills.title')} />
        <div className="space-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="mb-4 font-mono text-sm text-accent">// {pick(cat.label, lang)}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {cat.skills.map((s) => (
                  <motion.div
                    key={s.name}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
                  >
                    <img src={s.image} alt={`${s.name} logo`} className="h-10 w-10 object-contain" loading="lazy" />
                    <span className="font-mono text-xs text-muted">{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build + lint + preview**

Run: `pnpm build && pnpm lint`; confirm categories and logos render, hover lifts, labels swap FR/EN (category labels).

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Skills.tsx
git commit -m "feat: add categorized skills section"
```

---

### Task 11: Experience section (scroll-revealed timeline)

**Files:**
- Create: `src/components/sections/Experience.tsx`
- Delete: `src/components/Experience/Experience.tsx`, `src/components/Experience/experience.style.css`

**Interfaces:**
- Consumes: `useT`, `useLang`, `SectionHeading`, `Badge`, `Card`, `experiences`, `pick`, `motion`.
- Produces: default export `Experience` with `id="experience"`.

- [ ] **Step 1: Create `src/components/sections/Experience.tsx`**

Vertical timeline; each entry is a `Card` revealed on scroll with stagger. No content hidden behind a required flip. Logo shown when present.

```tsx
import { motion } from 'framer-motion';
import { SectionHeading, Badge } from '../ui';
import { useT, useLang } from '../../i18n/LanguageContext';
import { experiences } from '../../data/experiences';
import { pick } from '../../i18n/dictionary';

export default function Experience() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker={t('experience.kicker')} title={t('experience.title')} />
        <div className="relative border-l border-border pl-6 sm:pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.2) }}
              className="relative mb-10"
            >
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[39px]" />
              <div className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40">
                <div className="flex items-center gap-3">
                  {exp.logo && exp.logo !== 'unknown' && (
                    <img src={exp.logo} alt={`${exp.company} logo`} className="h-8 w-8 rounded object-contain" loading="lazy" />
                  )}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text">{exp.title}</h3>
                    <p className="font-mono text-xs text-accent">{exp.company} · {exp.period}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pick(exp.description, lang)}</p>
                {exp.badges.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.badges.map((b) => <Badge key={b}>{b}</Badge>)}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Delete old Experience files**

```bash
rm -rf src/components/Experience
```

- [ ] **Step 3: Verify build + lint + preview**

Run: `pnpm build && pnpm lint`; confirm all 9 entries reveal on scroll, badges render, descriptions swap FR/EN.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: replace flip-cards with scroll-revealed experience timeline"
```

---

### Task 12: Projects section

**Files:**
- Create: `src/components/sections/Projects.tsx`
- Delete: `src/components/Projects/Projects.tsx`, `src/components/Projects/style.css`

**Interfaces:**
- Consumes: `useT`, `useLang`, `SectionHeading`, `Badge`, `projects`, `pick`, `motion`, lucide `ArrowUpRight`.
- Produces: default export `Projects` with `id="projects"`.

- [ ] **Step 1: Create `src/components/sections/Projects.tsx`**

Grid of premium project cards with a gradient cover keyed by `project.cover`.

```tsx
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading, Badge } from '../ui';
import { useT, useLang } from '../../i18n/LanguageContext';
import { projects } from '../../data/projects';
import { pick } from '../../i18n/dictionary';

const covers: Record<string, string> = {
  amber: 'from-accent/30 to-accentHot/10',
  violet: 'from-violet/30 to-accent/10',
  beige: 'from-beige/20 to-accent/10',
};

export default function Projects() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={t('projects.kicker')} title={t('projects.title')} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.24) }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
            >
              <div className={`h-32 bg-gradient-to-br ${covers[p.cover] ?? covers.amber}`} />
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-text">{p.title}</h3>
                  <ArrowUpRight size={18} className="text-muted transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pick(p.description, lang)}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => <Badge key={s}>{s}</Badge>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Delete old Projects files**

```bash
rm -rf src/components/Projects
```

- [ ] **Step 3: Verify build + lint + preview**

Run: `pnpm build && pnpm lint`; confirm 3 cards render with gradient covers, hover lift, stack badges, FR/EN swap.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add premium projects section"
```

---

### Task 13: Contact section + final App wiring + polish

**Files:**
- Create: `src/components/sections/Contact.tsx`
- Delete: `src/components/Contact.tsx`, `src/components/About.tsx`, `src/components/NavBar/`, `src/components/about.style.css`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: all sections, `LanguageProvider`, `GridBackground`, `NavBar`, `Footer`, `socials`, lucide icons.
- Produces: fully wired `App`.

- [ ] **Step 1: Create `src/components/sections/Contact.tsx`**

```tsx
import { motion } from 'framer-motion';
import { Mail, Linkedin, Calendar, Github } from 'lucide-react';
import { SectionHeading } from '../ui';
import { useT } from '../../i18n/LanguageContext';
import { socials } from '../../data/socials';

const icons = { mail: Mail, linkedin: Linkedin, calendar: Calendar, github: Github };

export default function Contact() {
  const t = useT();
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading kicker={t('contact.kicker')} title={t('contact.title')} className="text-center" />
        <p className="mx-auto mb-10 max-w-xl text-muted">{t('contact.desc')}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {socials.map((s) => {
            const Icon = icons[s.icon];
            return (
              <motion.a
                key={s.id}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <Icon className="text-accent" size={24} />
                <span className="font-mono text-sm text-muted">{s.label}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Rewrite `src/App.tsx`** (final wiring)

```tsx
import { LanguageProvider } from './i18n/LanguageContext';
import GridBackground from './components/background/GridBackground';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <GridBackground />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
```

- [ ] **Step 3: Delete all legacy component files**

```bash
rm -f src/components/Contact.tsx src/components/About.tsx src/components/about.style.css
rm -rf src/components/NavBar
```

- [ ] **Step 4: Verify build + lint + full preview pass**

Run: `pnpm build && pnpm lint`
Then `pnpm dev`: scroll through all sections; verify NavBar links jump correctly; FR/EN toggle switches every section and persists on reload; check mobile (375px), tablet (768px), desktop; check console has no errors; verify focus rings via keyboard Tab; verify reduced-motion emulation disables particles/stagger.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add contact section and wire full redesigned app"
```

---

## Self-Review

**Spec coverage:**
- Remove Spline → Task 1. ✓
- Design system (tokens/typo/spacing/radius/shadows) → Task 1 + Task 5. ✓
- Refactor architecture (`i18n/`, `data/`, `ui/`, `background/`, `sections/`, `layout/`) → Tasks 2–13. ✓
- Bilingual toggle (persist, `<html lang>`, EN default, fallback) → Task 2 + Task 7. ✓
- Hero + interactive IDE card + 2 CTAs + entrance animation → Task 8. ✓
- Living background (grid/glow/particles, reduced-motion, pause offscreen) → Task 6. ✓
- Sections About/Skills/Experience/Projects/Contact → Tasks 9–13. ✓
- Animations (stagger, whileInView, hover, micro-interactions, reduced-motion) → Tasks 6,8–13. ✓
- Responsive → Tasks 8,13 verification. ✓
- A11y (semantic, focus, aria, alt, lang) → Tasks 5,7,13. ✓
- SEO (meta/OG/lang) → Task 1. ✓
- Projects placeholders → Task 3 + Task 12. ✓
- Branding "Dev It Out" kept → Tasks 7. ✓

**Placeholder scan:** Task 3 Step 1 intentionally references migrating the remaining 8 experiences from the existing file (the real content already lives in the repo); this is a data-migration instruction, not a code placeholder — full shape and one worked example are given. All other steps contain complete code.

**Type consistency:** `Localized`, `pick`, `useT`, `useLang`, `DictKey` used consistently across tasks; `TerminalWindow`, `Button`, `Card`, `Badge`, `SectionHeading` signatures match their definitions in Task 5; `cover` keys (`amber/violet/beige`) in Task 3 match the `covers` map in Task 12; `icon` values in Task 3 (`mail/linkedin/calendar/github`) match the `icons` map in Task 13.

**Dictionary keys added mid-plan:** `about.p1/p2` added in Task 9 Step 2 before use. All `nav.*`, `hero.*`, `about.*`, `skills.*`, `experience.*`, `projects.*`, `contact.*`, `footer.*` keys defined in Task 2 and consumed by later tasks. ✓
