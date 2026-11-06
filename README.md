# Portfolio de Olaf Ranaivoson

Site vitrine freelance, pré-rendu en français (`/`) et en anglais (`/en`). Next.js (App Router), TypeScript, CSS maison, déployé sur Vercel.

## Commandes

```bash
pnpm install
pnpm dev
pnpm test
pnpm lint
pnpm build
```

## Où modifier quoi

- **Textes et chiffres** : `src/content/site.ts`. Les deux langues doivent garder la même structure, `pnpm test` le vérifie. Les faits viennent du CV, n'ajouter aucun chiffre sans source.
- **Mise en page** : `src/components/Site.tsx` et `src/app/globals.css`.
- **Portrait** : `public/olaf.png`, PNG détouré sur fond transparent. Il sert aussi à l'image de partage.
- **URL de production** : `siteUrl` dans `src/content/site.ts`, à changer si le site passe sur un domaine personnalisé.
