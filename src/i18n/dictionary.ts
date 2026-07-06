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
    'about.p1':
      "I'm a seasoned full-stack developer with 8 years of experience building dynamic, scalable web applications. I specialize in API development, integration, real-time applications, and finance systems such as billing and contract APIs.",
    'about.p2':
      'My work spans real estate, food-tech and fintech, merging robust backend systems with seamless frontends to ship solutions that are both reliable and user-friendly.',
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
    'about.p1':
      "Développeur full-stack aguerri, 8 ans d'expérience à construire des applications web dynamiques et scalables. Je me spécialise dans le développement d'API, l'intégration, le temps réel et les systèmes financiers (facturation, contrats).",
    'about.p2':
      "Mon travail couvre l'immobilier, la food-tech et la fintech, en associant des back-ends robustes à des front-ends soignés pour livrer des solutions fiables et agréables à utiliser.",
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
