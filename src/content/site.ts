// All site copy lives here. Facts come from the vault (01_Identity/cv.md, profil-pitch.md):
// never add a number or a client that is not in those notes.

export type Lang = 'fr' | 'en';

export const langs: Lang[] = ['fr', 'en'];

export const links = {
  calendly: 'https://calendly.com/nji-olaf',
  email: 'mailto:njivaolaf.pro@gmail.com',
  linkedin: 'https://www.linkedin.com/in/njiva-olaf/',
  upwork: 'https://www.upwork.com/freelancers/~01001519d936c5eba6',
};

export const emailAddress = 'njivaolaf.pro@gmail.com';

/** Client logos in public/logos, most recent first. `ratio` is the width / height of the artwork. */
export const clients = [
  { name: 'Elmut', file: 'elmut.svg', ratio: 1024 / 176 },
  { name: 'Emeria', file: 'emeria.svg', ratio: 138 / 25.4 },
  { name: 'Planity', file: 'planity.svg', ratio: 140 / 16 },
  { name: 'Bolk', file: 'bolk.png', ratio: 725 / 208 },
  { name: 'France Télévisions', file: 'france-televisions.svg', ratio: 1438 / 395 },
  { name: 'TheFork', file: 'thefork.svg', ratio: 132 / 26 },
  { name: 'Spaycial', file: 'spaycial.svg', ratio: 200 / 48 },
  { name: 'CEB', file: 'ceb.png', ratio: 600 / 354 },
];
export const siteUrl = 'https://dev-it-out-portfolio.vercel.app';

export type ServiceIcon = 'card' | 'key' | 'gauge' | 'pulse' | 'spark' | 'chart';

export type Dictionary = {
  meta: { title: string; description: string; imageAlt: string };
  a11y: { skip: string; h1: string; photo: string; newTab: string };
  header: { lines: [string, string]; switchLabel: string };
  hero: {
    role: [string, string];
    text: string;
    cta: string;
    tagline: string;
    base: [string, string];
  };
  clients: { title: string };
  toc: { title: string; intro: string; items: { label: string; href: string }[] };
  projects: {
    title: string;
    more: string;
    items: {
      id: string;
      client: string;
      sector: string;
      figure: string;
      figureLabel: string;
      text: string;
    }[];
    next: { title: string; text: string; cta: string };
  };
  services: {
    title: string;
    proofLabel: string;
    items: { icon: ServiceIcon; title: string; text: string; proof: string }[];
  };
  tools: { title: string; moreLabel: string };
  about: {
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  career: {
    title: string;
    items: { period: string; company: string; role: string; text: string; stack: string }[];
  };
  contact: {
    title: [string, string];
    text: string;
    cta: string;
    connect: string;
    location: string;
    calendlyLabel: string;
  };
  footer: string;
};

const fr: Dictionary = {
  meta: {
    title: 'Olaf Ranaivoson, développeur full stack IA freelance (Node, Next, Nest)',
    description:
      'Je branche des produits sur ce qui les fait tourner : paiement, authentification, données temps réel. 8 ans de full stack sur des produits utilisés par des millions de personnes.',
    imageAlt: 'Portfolio de Olaf Ranaivoson, développeur full stack IA',
  },
  a11y: {
    skip: 'Aller au contenu',
    h1: 'Olaf Ranaivoson, développeur full stack IA freelance',
    photo: 'Portrait de Olaf Ranaivoson',
    newTab: 'nouvel onglet',
  },
  header: { lines: ['Développeur full stack', '& IA'], switchLabel: 'Read this page in English' },
  hero: {
    role: ['Développeur', 'Full Stack IA'],
    text: '8 ans sur des produits grand public utilisés par plusieurs millions d’utilisateurs. J’interviens sur l’architecture, la performance et l’intégration de systèmes tiers.',
    cta: 'Réserver un appel',
    tagline: 'Je branche des produits sur ce qui les fait tourner.',
    base: ['Basé à Longueville (77)', 'France'],
  },
  clients: { title: 'J’ai travaillé pour' },
  toc: {
    title: 'Sommaire',
    intro: 'Ce que j’ai livré, ce que je sais faire, et comment on peut travailler ensemble.',
    items: [
      { label: 'Projets', href: '#projets' },
      { label: 'Services', href: '#services' },
      { label: 'Outils', href: '#outils' },
      { label: 'À propos', href: '#a-propos' },
      { label: 'Parcours', href: '#parcours' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  projects: {
    title: 'Projets sélectionnés',
    more: 'Voir le parcours',
    items: [
      {
        id: 'emeria',
        client: 'Emeria',
        sector: 'Immobilier, gestion de copropriété',
        figure: '7 M',
        figureLabel: 'de comptes clients',
        text: 'Comptes clients basculés vers l’authentification Okta, pour l’application mobile.',
      },
      {
        id: 'planity',
        client: 'Planity',
        sector: 'Beauté, prise de rendez-vous',
        figure: '8 M',
        figureLabel: 'd’utilisateurs',
        text: 'Module Stripe Payment Link pour payer un acompte, dimensionné pour cette charge.',
      },
      {
        id: 'elmut',
        client: 'Elmut',
        sector: 'E-commerce, abonnement',
        figure: '+15 000 €',
        figureLabel: 'de CA par semaine',
        text: 'Sur les commandes ponctuelles via le site. Refonte du site et de l’espace client, wizard de souscription, reprise après impayé.',
      },
      {
        id: 'bolk',
        client: 'Bolk',
        sector: 'Foodtech, distributeurs',
        figure: '+25 %',
        figureLabel: 'de performance',
        text: 'Plats distribués plus vite grâce aux traitements asynchrones. Contrats débloqués avec TF1 et Le Méridien.',
      },
      {
        id: 'france-tv',
        client: 'France Télévisions',
        sector: 'Média',
        figure: '4 apps',
        figureLabel: '1 seule connexion',
        text: 'Interface de connexion commune à Okoo, Slash, France TV et Lumni, via l’API Gigya.',
      },
      {
        id: 'spaycial',
        client: 'Spaycial',
        sector: 'Fintech, fidélité',
        figure: '3 sources',
        figureLabel: 'de données bancaires',
        text: 'Les clients de Westfield reçoivent leurs points automatiquement, synchro depuis BNP, Swedbank et Fintecture.',
      },
      {
        id: 'mokouran',
        client: 'MoKouran',
        sector: 'Énergie, île Maurice',
        figure: '+50 000',
        figureLabel: 'téléchargements',
        text: 'Application créée de zéro pour CEB, compagnie d’électricité de l’île Maurice, chez Agileum.',
      },
    ],
    next: {
      title: 'Votre produit ?',
      text: 'Un paiement à brancher, une API à fiabiliser, un back-office qui sature.',
      cta: 'On en parle',
    },
  },
  services: {
    title: 'Services',
    proofLabel: 'Chez',
    items: [
      {
        icon: 'card',
        title: 'Paiement et abonnements',
        text: 'Stripe, webhooks, reprise après impayé, prévention des doubles paiements.',
        proof: 'Elmut, Planity',
      },
      {
        icon: 'key',
        title: 'Connexion et comptes',
        text: 'Okta, Gigya, migration de comptes et synchro des données clients.',
        proof: 'Emeria, France Télévisions',
      },
      {
        icon: 'gauge',
        title: 'API et back-offices',
        text: 'Scaler ce qui commence à craquer : requêtes, cache, traitements asynchrones.',
        proof: 'Bolk, Planity',
      },
      {
        icon: 'pulse',
        title: 'Temps réel',
        text: 'Socket.IO, files de messages et alertes sur incident.',
        proof: 'Bolk, Emeria',
      },
      {
        icon: 'spark',
        title: 'IA et automatisation',
        text: 'OpenAI, Anthropic et Gemini branchés sur un vrai process, comme la lecture de factures PDF.',
        proof: 'Emeria',
      },
      {
        icon: 'chart',
        title: 'Tracking et analytics',
        text: 'GTM, GA4, PostHog, pour mesurer ce que le produit fait vraiment.',
        proof: 'Elmut',
      },
    ],
  },
  tools: { title: 'Outils', moreLabel: 'Et aussi' },
  about: {
    title: 'À propos',
    paragraphs: [
      'Je conçois des apps et des back-offices branchés sur des API tierces : paiement, authentification, GED, notifications, analytics. Et je scale ceux qui commencent à craquer.',
      'J’ai commencé à l’île Maurice, en réalité virtuelle puis sur des applications grand public, avant de travailler pour des produits français à grande échelle. Je travaille en TDD, DDD et Clean Architecture.',
    ],
    facts: [
      { label: 'Langues', value: 'Français, anglais, créole mauricien, malgache' },
      { label: 'Formation', value: 'Licence informatique et sécurité réseau (2015 à 2017)' },
    ],
  },
  career: {
    title: 'Parcours',
    items: [
      {
        period: '07/2025 → aujourd’hui',
        company: 'Elmut',
        role: 'Développeur Next.js / NestJS',
        text: 'Rôle transverse sur ce qui fait le business : abonnements, paiements, impayés, commandes, vouchers, espace client.',
        stack: 'Next.js, NestJS, TypeScript, Stripe, PostgreSQL, Redis, Turborepo, Docker, Terraform, PostHog',
      },
      {
        period: '06/2024 → 07/2025',
        company: 'Emeria Technologies',
        role: 'Développeur backend Node.js / NestJS',
        text: 'Facturation et gestion de copropriété, authentification Okta, GED, synchros de données, lecture de factures PDF par LLM, feature flags.',
        stack: 'Node.js, NestJS, React, MongoDB, PostgreSQL, Snowflake, RabbitMQ, AWS SNS/SQS, Temporal, OpenAI, Anthropic, Gemini',
      },
      {
        period: '09/2023 → 03/2024',
        company: 'Planity',
        role: 'Développeur full stack',
        text: 'Stripe Payment Link via AWS Lambda, plateforme de rendez-vous, optimisation SQL, roadmap du squad.',
        stack: 'Node.js, AWS Lambda, Firebase Functions, React, Elasticsearch, PostgreSQL, DynamoDB',
      },
      {
        period: '01/2023 → 07/2023',
        company: 'Bolk',
        role: 'Lead développeur',
        text: '9 systèmes embarqués en temps réel, algorithme de subvention pour les clients B2B, roadmap technique, droits sur le back-office.',
        stack: 'Node.js, TypeScript, Socket.IO, Vue.js, PostgreSQL, Grafana, Docker, AWS',
      },
      {
        period: '11/2019 → 12/2022',
        company: 'Celaneo',
        role: 'Développeur full stack pour France TV, TheFork, Spaycial',
        text: 'Back for front, intégration d’API DSP2 sur plusieurs banques, gestion des disponibilités pour les restaurants, architectures techniques.',
        stack: 'Node.js, React, TypeScript, MongoDB, PostgreSQL, Elasticsearch, RabbitMQ, Redis, AWS, Docker',
      },
      {
        period: '07/2017 → 10/2019',
        company: 'Agileum',
        role: 'Développeur full stack',
        text: 'MoKouran pour CEB, 5 back-offices, application POS intégrée à Simphony Oracle, CI/CD Jenkins et Docker.',
        stack: 'Node.js, React, Angular, PostgreSQL, MongoDB, Oracle, Twilio, Docker, Jenkins',
      },
      {
        period: '07/2016 → 06/2017',
        company: 'EON Reality',
        role: 'Stagiaire réalité virtuelle et augmentée',
        text: 'Application de réalité augmentée pour un hôtel, simulations pour systèmes immersifs (Kinect, Leap Motion, iDome).',
        stack: 'JavaScript, Unity (C#), EON Studio, 3DS Max, GLSL',
      },
    ],
  },
  contact: {
    title: ['Un produit à brancher ?', 'On en parle :)'],
    text: 'Besoin d’aide pour brancher un paiement, fiabiliser une API ou scaler un back-office qui sature ?',
    cta: 'Réserver un appel',
    connect: 'Me retrouver',
    location: 'Longueville (77), France',
    calendlyLabel: 'Réserver un créneau sur Calendly',
  },
  footer: 'Olaf Ranaivoson. Tous droits réservés.',
};

const en: Dictionary = {
  meta: {
    title: 'Olaf Ranaivoson, freelance full stack and AI developer (Node, Next, Nest)',
    description:
      'I plug products into what makes them run: payments, authentication, real-time data. 8 years of full stack work on products used by millions of people.',
    imageAlt: 'Portfolio of Olaf Ranaivoson, full stack and AI developer',
  },
  a11y: {
    skip: 'Skip to content',
    h1: 'Olaf Ranaivoson, freelance full stack and AI developer',
    photo: 'Portrait of Olaf Ranaivoson',
    newTab: 'new tab',
  },
  header: { lines: ['Full stack developer', '& AI'], switchLabel: 'Lire cette page en français' },
  hero: {
    role: ['Full Stack', 'AI Developer'],
    text: '8 years on consumer products used by several million users. I work on architecture, performance and third-party system integrations.',
    cta: 'Book a call',
    tagline: 'I plug products into what makes them run.',
    base: ['Based in Longueville', 'France'],
  },
  clients: { title: 'I have worked for' },
  toc: {
    title: 'Contents',
    intro: 'What I have shipped, what I can do, and how we can work together.',
    items: [
      { label: 'Projects', href: '#projets' },
      { label: 'Services', href: '#services' },
      { label: 'Tools', href: '#outils' },
      { label: 'About', href: '#a-propos' },
      { label: 'Career', href: '#parcours' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  projects: {
    title: 'Selected projects',
    more: 'See my career',
    items: [
      {
        id: 'emeria',
        client: 'Emeria',
        sector: 'Real estate, property management',
        figure: '7M',
        figureLabel: 'customer accounts',
        text: 'Customer accounts moved to Okta authentication, for the mobile app.',
      },
      {
        id: 'planity',
        client: 'Planity',
        sector: 'Beauty, appointment booking',
        figure: '8M',
        figureLabel: 'users',
        text: 'Stripe Payment Link module for paying a deposit, sized for this load.',
      },
      {
        id: 'elmut',
        client: 'Elmut',
        sector: 'E-commerce, subscription',
        figure: '+€15,000',
        figureLabel: 'revenue per week',
        text: 'On one-off orders through the website. Rebuilt the site and customer area, subscription wizard, recovery after failed payments.',
      },
      {
        id: 'bolk',
        client: 'Bolk',
        sector: 'Foodtech, vending machines',
        figure: '+25%',
        figureLabel: 'performance',
        text: 'Meals served faster thanks to asynchronous processing. Contracts unlocked with TF1 and Le Méridien.',
      },
      {
        id: 'france-tv',
        client: 'France Télévisions',
        sector: 'Media',
        figure: '4 apps',
        figureLabel: '1 single login',
        text: 'Shared login interface for Okoo, Slash, France TV and Lumni, through the Gigya API.',
      },
      {
        id: 'spaycial',
        client: 'Spaycial',
        sector: 'Fintech, loyalty',
        figure: '3 sources',
        figureLabel: 'of banking data',
        text: 'Westfield customers receive their loyalty points automatically, synced from BNP, Swedbank and Fintecture.',
      },
      {
        id: 'mokouran',
        client: 'MoKouran',
        sector: 'Energy, Mauritius',
        figure: '+50,000',
        figureLabel: 'downloads',
        text: 'App built from scratch for CEB, the Mauritius electricity company, at Agileum.',
      },
    ],
    next: {
      title: 'Your product?',
      text: 'A payment to plug in, an API to harden, a back-office under strain.',
      cta: 'Let’s talk',
    },
  },
  services: {
    title: 'Services',
    proofLabel: 'At',
    items: [
      {
        icon: 'card',
        title: 'Payments and subscriptions',
        text: 'Stripe, webhooks, recovery after failed payments, double payment prevention.',
        proof: 'Elmut, Planity',
      },
      {
        icon: 'key',
        title: 'Login and accounts',
        text: 'Okta, Gigya, account migration and customer data sync.',
        proof: 'Emeria, France Télévisions',
      },
      {
        icon: 'gauge',
        title: 'APIs and back-offices',
        text: 'Scaling what starts to crack: queries, caching, asynchronous processing.',
        proof: 'Bolk, Planity',
      },
      {
        icon: 'pulse',
        title: 'Real time',
        text: 'Socket.IO, message queues and incident alerts.',
        proof: 'Bolk, Emeria',
      },
      {
        icon: 'spark',
        title: 'AI and automation',
        text: 'OpenAI, Anthropic and Gemini plugged into a real process, such as reading PDF invoices.',
        proof: 'Emeria',
      },
      {
        icon: 'chart',
        title: 'Tracking and analytics',
        text: 'GTM, GA4, PostHog, to measure what the product really does.',
        proof: 'Elmut',
      },
    ],
  },
  tools: { title: 'Tools', moreLabel: 'Also' },
  about: {
    title: 'About',
    paragraphs: [
      'I design apps and back-offices connected to third-party APIs: payments, authentication, document management, notifications, analytics. And I scale the ones that start to crack.',
      'I started out in Mauritius, in virtual reality and then on consumer apps, before working on large-scale French products. I work with TDD, DDD and Clean Architecture.',
    ],
    facts: [
      { label: 'Languages', value: 'French, English, Mauritian Creole, Malagasy' },
      { label: 'Education', value: 'Bachelor in computer science and network security (2015 to 2017)' },
    ],
  },
  career: {
    title: 'Career',
    items: [
      {
        period: '07/2025 → today',
        company: 'Elmut',
        role: 'Next.js / NestJS developer',
        text: 'Cross-functional role on what drives the business: subscriptions, payments, unpaid orders, one-off orders, vouchers, customer area.',
        stack: 'Next.js, NestJS, TypeScript, Stripe, PostgreSQL, Redis, Turborepo, Docker, Terraform, PostHog',
      },
      {
        period: '06/2024 → 07/2025',
        company: 'Emeria Technologies',
        role: 'Node.js / NestJS backend developer',
        text: 'Billing and property management, Okta authentication, document management, data sync, PDF invoice reading with LLMs, feature flags.',
        stack: 'Node.js, NestJS, React, MongoDB, PostgreSQL, Snowflake, RabbitMQ, AWS SNS/SQS, Temporal, OpenAI, Anthropic, Gemini',
      },
      {
        period: '09/2023 → 03/2024',
        company: 'Planity',
        role: 'Full stack developer',
        text: 'Stripe Payment Link through AWS Lambda, appointment platform, SQL optimization, squad roadmap.',
        stack: 'Node.js, AWS Lambda, Firebase Functions, React, Elasticsearch, PostgreSQL, DynamoDB',
      },
      {
        period: '01/2023 → 07/2023',
        company: 'Bolk',
        role: 'Lead developer',
        text: '9 real-time embedded systems, subsidy algorithm for B2B clients, technical roadmap, back-office permissions.',
        stack: 'Node.js, TypeScript, Socket.IO, Vue.js, PostgreSQL, Grafana, Docker, AWS',
      },
      {
        period: '11/2019 → 12/2022',
        company: 'Celaneo',
        role: 'Full stack developer for France TV, TheFork, Spaycial',
        text: 'Back for front, PSD2 API integration across several banks, availability management for restaurants, technical architectures.',
        stack: 'Node.js, React, TypeScript, MongoDB, PostgreSQL, Elasticsearch, RabbitMQ, Redis, AWS, Docker',
      },
      {
        period: '07/2017 → 10/2019',
        company: 'Agileum',
        role: 'Full stack developer',
        text: 'MoKouran for CEB, 5 back-offices, POS app integrated with Simphony Oracle, Jenkins and Docker CI/CD.',
        stack: 'Node.js, React, Angular, PostgreSQL, MongoDB, Oracle, Twilio, Docker, Jenkins',
      },
      {
        period: '07/2016 → 06/2017',
        company: 'EON Reality',
        role: 'Virtual and augmented reality intern',
        text: 'Augmented reality app for a hotel, simulations for immersive systems (Kinect, Leap Motion, iDome).',
        stack: 'JavaScript, Unity (C#), EON Studio, 3DS Max, GLSL',
      },
    ],
  },
  contact: {
    title: ['A product to plug in?', 'Let’s talk :)'],
    text: 'Need help plugging in a payment, hardening an API or scaling a back-office under strain?',
    cta: 'Book a call',
    connect: 'Find me',
    location: 'Longueville, France',
    calendlyLabel: 'Book a slot on Calendly',
  },
  footer: 'Olaf Ranaivoson. All rights reserved.',
};

/** French typography: non-breaking space before : ? ! ; % € and inside thousands. */
export function frenchSpacing(text: string): string {
  return text.replace(/ ([:?!;%€])/g, ' $1').replace(/(\d) (\d{3})/g, '$1 $2');
}

function mapStrings<T>(value: T, fn: (text: string) => string): T {
  if (typeof value === 'string') return fn(value) as T;
  if (Array.isArray(value)) return value.map((item) => mapStrings(item, fn)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, mapStrings(item, fn)]),
    ) as T;
  }
  return value;
}

const dictionaries: Record<Lang, Dictionary> = {
  fr: mapStrings(fr, frenchSpacing),
  en,
};

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export function isLang(value: string): value is Lang {
  return (langs as string[]).includes(value);
}
