# Portfolio Redesign — "Dev It Out OS"

**Date:** 2026-07-06
**Owner:** Njiva Olaf Ranaivoson
**Status:** Approved (design), pending implementation plan

## 1. Goal

Refonte complète du portfolio en une expérience immersive à l'esthétique
« engineering / operating system / IDE ». Inspiration : une capture d'un
portfolio dark à accents orange/violet — **inspiration uniquement, pas de copie**
(ni textes, ni composants, ni structure exacte, ni éléments protégés).

Résultat visé : un portfolio de développeur senior, moderne, premium, avec une
identité **ambre + beige** propre à l'utilisateur.

## 2. Scope

**In scope**
- Suppression du hero Spline (iframe `Home3DSpline`) et de la dépendance `@splinetool/react-spline`.
- Nouveau design system (tokens CSS + Tailwind) : couleurs, typo, spacing, radius, ombres, durées.
- Refactor de l'arborescence : `i18n/`, `data/`, `components/ui/`, `components/background/`, `components/sections/`, `components/layout/`.
- Toggle bilingue FR/EN (solution custom légère, 0 dépendance).
- Sections repensées : Hero, About, Skills, Experience, Projects, Contact + NavBar + Footer.
- Background vivant (grille + glow + particules) performant et reduced-motion-safe.
- Animations Framer Motion sobres, hovers, reveal au scroll.
- Responsive mobile/tablette/desktop, accessibilité (AA), SEO de base.

**Out of scope**
- CTA « Download CV » (pas de PDF pour l'instant).
- Contenu réel de la section Projects (placeholders soignés fournis, à remplacer par l'utilisateur plus tard).
- Backend / formulaire de contact serveur (les liens Calendly/Mail/LinkedIn suffisent).

## 3. Décisions validées

- **Palette** : ambre + beige réchauffé sur fond charbon sombre (continuité avec le beige existant `#f3eecd`).
- **Projects** : conservée et sublimée avec placeholders élégants.
- **Langue** : bilingue FR/EN via toggle.
- **Hero right panel** : carte IDE interactive (onglets + terminal auto-typé) = pièce maîtresse.
- **Experience** : timeline révélée au scroll (remplace les flip-cards).
- Pas de CTA « Download CV ».

## 4. Design System

Source de vérité : variables CSS dans `src/index.css`, exposées à Tailwind via
`tailwind.config.js` (`theme.extend`).

### Couleurs (tokens)
- `--bg`: `#100d0a` (charbon réchauffé)
- `--surface`: `#1a1512` ; `--surface-2`: `#221b16`
- `--border`: `rgba(243, 238, 205, 0.10)` (beige très faible alpha)
- `--accent`: `#f5a623` ; `--accent-hot`: `#ff8c42` (dégradé ambre)
- `--beige`: `#f3eecd` (titres/highlights — couleur existante conservée)
- `--violet`: `#a78bfa` (réservé à la coloration syntaxique du panneau code)
- `--text`: `#f5f0e6` ; `--text-muted`: `#a8a196`
- `--success`: `#7bd88f` (accents ponctuels terminal)

### Typographie
- Display / titres : **Space Grotesk**
- Corps : **Inter**
- Mono (terminal, labels techniques, chips) : **JetBrains Mono**
- Chargement via `<link>` Google Fonts avec `preconnect` (ou `@fontsource` si préféré) ; `font-display: swap`.

### Espacement, rayons, ombres
- Spacing : échelle Tailwind par défaut ; padding de section standardisé (`py-24` desktop, `py-16` mobile) via une classe/prims commune.
- Rayons : cartes `rounded-2xl`, panneaux `rounded-xl`, chips `rounded-md`.
- Ombres/glows : ombres chaudes légères + glow ambre `box-shadow` faible intensité pour les éléments actifs.
- Durées/easings : tokens `--dur-fast`, `--dur`, easing standard pour cohérence des transitions.

### Primitives `src/components/ui/`
- `Button` — variantes `primary` (plein ambre) / `ghost` (bordure), tailles, état focus visible.
- `Card` — surface + bordure + hover lift.
- `Badge` — chip tech mono.
- `SectionHeading` — kicker mono + titre + sous-titre, alignements.
- `TerminalWindow` — cadre fenêtre (barre de titre, points macOS, corps) réutilisable par le Hero et éventuellement About.
- `GridBackground` — voir §6.

## 5. Architecture du code

```
src/
  i18n/
    LanguageContext.tsx   → provider + hook useLang(), persistance localStorage, met à jour <html lang>
    dictionary.ts         → { fr: {...}, en: {...} } typé ; helper t(key)
  data/
    experiences.ts        → 9 expériences réelles (champs bilingues pour description)
    skills.ts             → technos regroupées par catégorie (Backend/Frontend/DevOps/Testing)
    projects.ts           → placeholders soignés (titre, desc bilingue, stack, liens optionnels)
    socials.ts            → Calendly, Mail, LinkedIn, GitHub
  components/
    ui/                   → Button, Card, Badge, SectionHeading, TerminalWindow
    background/
      GridBackground.tsx  → grille + glow + particules (canvas léger)
    sections/
      Hero.tsx
      About.tsx
      Skills.tsx
      Experience.tsx
      Projects.tsx
      Contact.tsx
    layout/
      NavBar.tsx          → nav + toggle langue + burger mobile
      Footer.tsx          → branding « Dev It Out »
  App.tsx                 → LanguageProvider > GridBackground + sections
  main.tsx
  index.css               → tokens + base
```

- **Supprimés** : `src/components/Home3DSpline.tsx`, dépendance `@splinetool/react-spline`.
- **Migrés/refactorés** : `About`, `Experience`, `Contact`, `NavBar`, `Projects` déplacés vers la nouvelle structure ; données extraites des composants vers `data/` ; CSS ad hoc (`*.style.css`) remplacé par Tailwind + tokens (archivage possible du dossier `archives/`).
- On réutilise Framer Motion, lucide-react, react-intersection-observer (ou `whileInView`).

## 6. Background vivant

Composant `GridBackground` : couche `fixed inset-0 pointer-events-none -z-10`.
- **Grille** : dégradés CSS (lignes fines beige très faible alpha), léger masque radial pour fondu vers les bords.
- **Glow** : 2–3 halos ambre en `blur` positionnés en profondeur (parallax très léger optionnel).
- **Particules** : canvas optimisé, faible densité (~30–50 points), `requestAnimationFrame`, mise en pause quand l'onglet est caché (`visibilitychange`) et hors viewport.
- **Perf & a11y** : `prefers-reduced-motion: reduce` → particules et parallax désactivés, glow statique. Aucun blocage du scroll, aucun `pointer-events`.

## 7. Sections (détail)

### Hero (2 colonnes)
- **Gauche** : chip statut mono (`● dev-it-out :: online`), très grand titre « Njiva Olaf » (dégradé ambre, `clamp()` responsive), tag `<Full-Stack Engineer />`, accroche pro + courte description (bilingue), **2 CTA** (« View work » primary → scroll Projects ; « Get in touch » ghost → scroll Contact), rangée de chips `LOADED_MODULES` (technos clés). Entrée en cascade Framer Motion.
- **Droite** : `TerminalWindow` interactif à onglets (`profile.ts`, `stack.json`, `~/terminal`). Terminal : séquence auto-typée de commandes/logs. Onglet code : objet `const engineer = { … }` colorisé (ambre/violet/beige/success). Mini-bloc stats (années d'xp, projets, secteurs). Fallback statique si reduced-motion. Mobile : passe sous la colonne gauche.

### About
- Bio bilingue présentée comme un bloc « README.md » stylé (en-tête fichier mono + contenu).

### Skills
- Technos extraites de l'ancien About, en grille premium groupée par catégorie ; hover élégant (lift + glow léger). Données depuis `data/skills.ts`.

### Experience
- Timeline verticale moderne, cartes révélées au scroll (`whileInView`, stagger). Chaque carte : titre, entreprise, période, description bilingue, badges tech. Logos/backgrounds existants réutilisés avec parcimonie. Accessible (pas de contenu caché derrière un flip obligatoire).

### Projects
- Grille de cartes projets premium (placeholders élégants : titre, description bilingue, stack, liens optionnels désactivés). Hover lift, image/gradient de couverture. Prête à recevoir le contenu réel.

### Contact
- Cartes de liens (Calendly « Book me », Mail, LinkedIn, GitHub) avec icônes lucide, hover ambre. Titre + accroche bilingue.

### NavBar / Footer
- NavBar `fixed`, fond translucide (backdrop-blur) sur fond sombre, liens Home/About/Skills/Experience/Projects/Contact (scroll doux), **toggle langue FR/EN**, burger mobile repensé, focus visibles.
- Footer : branding « Dev It Out », année, liens sociaux, mention discrète.

## 8. Transverse

- **Animations** : entrées cascade (Hero), reveal scroll, hovers/lifts, micro-interactions. Sobre, jamais surchargé, toujours reduced-motion-safe.
- **Responsive** : breakpoints Tailwind ; Hero 2 colonnes → 1 colonne ; grilles adaptatives ; nav burger.
- **Accessibilité** : HTML sémantique (`header/nav/main/section/footer`), `aria-label` sur icônes/toggles, focus visibles, contrastes AA sur fond sombre, `alt` sur images, `<html lang>` synchronisé avec la langue.
- **SEO** : `index.html` — `title`, `meta description`, Open Graph (title/description/image), `theme-color`, `lang`. Titre de section en hiérarchie correcte (un seul `h1` = titre Hero).
- **Performance** : pas d'iframe lourde, fonts en `swap`, canvas particules léger et pausable, images `loading="lazy"`, animations GPU-friendly (transform/opacity).
- **i18n** : context custom + dictionnaire typé ; clé manquante → fallback EN. Persistance du choix en localStorage ; langue par défaut = EN.

## 9. Critères de succès

- L'iframe Spline et sa dépendance sont supprimées ; `pnpm build` passe sans erreur.
- Thème sombre ambre/beige cohérent appliqué partout via tokens.
- Toggle FR/EN fonctionnel, persistant, met à jour `<html lang>`.
- Les 6 sections + NavBar + Footer sont présentes, responsive, animées sobrement.
- Carte IDE interactive fonctionnelle avec fallback reduced-motion.
- Background vivant fluide (pas de jank), désactivé en reduced-motion.
- A11y : navigation clavier possible, focus visibles, contrastes AA.
- Aucune reproduction pixel-perfect ni élément protégé de l'inspiration.
