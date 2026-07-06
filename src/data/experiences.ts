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
      en: "Developed and optimized billing and property management solutions. Integrated critical features to improve user experience and operational efficiency, including contract management and accounting systems. Contributed to the 'Tech Quality' community with end-to-end testing improvements.",
      fr: "Développement et optimisation de solutions de facturation et de gestion immobilière. Intégration de fonctionnalités critiques pour améliorer l'expérience utilisateur et l'efficacité opérationnelle, notamment la gestion des contrats et les systèmes de comptabilité. Contribution à la communauté « Tech Quality » via l'amélioration des tests de bout en bout.",
    },
    logo: 'logos/Emeria_logo.jpg',
    badges: ['Node.js', 'React', 'TypeScript', 'MongoDB', 'Snowflake'],
  },
  {
    title: 'Online Tutor (Full Stack JavaScript)',
    company: 'Superprof',
    period: 'February 2020 - Present',
    description: {
      en: 'Helping students improve their web development skills with a focus on APIs and algorithms. Providing mentorship in full stack JavaScript technologies.',
      fr: "Accompagnement d'étudiants pour améliorer leurs compétences en développement web, avec un accent sur les API et les algorithmes. Mentorat sur les technologies JavaScript full stack.",
    },
    logo: 'logos/logo-superprof.png',
    badges: ['Functional programming', 'JavaScript', 'TypeScript', 'Database design'],
  },
  {
    title: 'Software Engineer',
    company: 'Planity',
    period: 'September 2023 - March 2024',
    description: {
      en: 'Developed a proof of concept for integrating the Stripe API (Payment Link). Maintained the appointment management platform and optimized queries for better performance.',
      fr: "Développement d'une preuve de concept pour l'intégration de l'API Stripe (Payment Link). Maintenance de la plateforme de gestion de rendez-vous et optimisation des requêtes pour de meilleures performances.",
    },
    logo: 'logos/planity.png',
    badges: ['Node.js', 'AWS Lambda', 'Firebase Functions', 'Firebase', 'React', 'Algolia', 'Stripe', 'ElasticSearch'],
  },
  {
    title: 'Lead Developer',
    company: 'BOLK',
    period: 'January 2023 - September 2023',
    description: {
      en: 'Led roadmap planning and prioritization in collaboration with the CTO. Managed a fleet of 10 machines deployed across multiple locations in Paris. Built and maintained back-office systems with Node.js and Vue.js, and ensured API monitoring and crash management. Implemented unit and integration tests with Jest and Cucumber.',
      fr: "Pilotage de la planification et de la priorisation de la roadmap en collaboration avec le CTO. Gestion d'une flotte de 10 machines déployées sur plusieurs sites à Paris. Développement et maintenance de systèmes de back-office avec Node.js et Vue.js, avec supervision des API et gestion des incidents. Mise en place de tests unitaires et d'intégration avec Jest et Cucumber.",
    },
    logo: 'logos/bolk.jpeg',
    badges: ['Node.js', 'Socket.IO', 'Vue.js', 'Jest', 'PostgreSQL'],
  },
  {
    title: 'Full Stack Developer @ TheFork',
    company: 'Celaneo - Agence Digitale',
    period: 'June 2021 - January 2023',
    description: {
      en: 'Enhanced the billing system (country configuration), maintained billing and contract-management APIs, and revamped restaurant settings (availability management). Handled data verification and scripting in Snowflake with a focus on SQL. Migrated the system to TypeScript.',
      fr: "Amélioration du système de facturation (configuration par pays), maintenance des API de facturation et de gestion des contrats, et refonte des paramètres restaurants (gestion des disponibilités). Vérification des données et scripting sur Snowflake avec un focus SQL. Migration du système vers TypeScript.",
    },
    badges: ['Node.js', 'React', 'TypeScript', 'Snowflake', 'PostgreSQL'],
  },
  {
    title: 'Backend Developer @ France.TV',
    company: 'Celaneo - Agence Digitale',
    period: 'August 2020 - June 2021',
    description: {
      en: 'Implemented BDD testing modules with Cucumber and Gherkin, optimized API performance, and worked on authentication and service-proxy microservices. Managed environment deployment with Jenkins, Docker and Kubernetes. Contributed to user-consent management and marketing email services.',
      fr: "Mise en place de modules de tests BDD avec Cucumber et Gherkin, optimisation des performances des API, et travail sur les microservices d'authentification et de proxy de services. Gestion du déploiement des environnements avec Jenkins, Docker et Kubernetes. Contribution à la gestion du consentement utilisateur et aux services d'emailing marketing.",
    },
    logo: 'logos/ftv.png',
    badges: ['Koa.js', 'Express', 'Cucumber', 'Gherkin', 'Jenkins', 'Docker', 'Kubernetes', 'Microservices'],
  },
  {
    title: 'Backend Developer @ Spaycial',
    company: 'Celaneo - Agence Digitale',
    period: 'November 2019 - August 2020',
    description: {
      en: 'Integrated third-party banking data providers via API (PSD2) into a Node.js backend. Built OAuth authentication for user login and created RESTful services.',
      fr: "Intégration de fournisseurs de données bancaires tiers via API (DSP2) dans un backend Node.js. Mise en place d'une authentification OAuth pour la connexion des utilisateurs et création de services RESTful.",
    },
    logo: 'logos/spaycial.png',
    badges: ['Node.js', 'OAuth', 'PSD2', 'REST'],
  },
  {
    title: 'Associate Software Engineer',
    company: 'AGILEUM',
    period: 'July 2017 - October 2019',
    description: {
      en: 'Launched mobile applications for the government of Mauritius, including MoKouran, School App and Emergency Alert. Built web and mobile back-ends with Loopback (Node.js), Angular/React, and Xamarin/React Native for mobile. Deployed on Linux/Windows and applied DevOps practices (Docker/Jenkins).',
      fr: "Lancement d'applications mobiles pour le gouvernement de Maurice, dont MoKouran, School App et Emergency Alert. Développement de back-ends web et mobiles avec Loopback (Node.js), Angular/React, et Xamarin/React Native pour le mobile. Déploiement sur Linux/Windows et application de pratiques DevOps (Docker/Jenkins).",
    },
    badges: ['Node.js', 'React Native', 'Angular', 'Docker'],
  },
  {
    title: 'Intern (Developer) - Augmented and Virtual Reality',
    company: 'EON Reality',
    period: 'August 2016 - June 2017',
    description: {
      en: "Developed VR and AR applications, including refactoring iDome simulations for cinema experiences. Designed GLSL shaders and worked on simulation-management systems for EON Reality's office (Java, Unity 3D).",
      fr: "Développement d'applications VR et AR, incluant la refonte de simulations iDome pour des expériences en salle de cinéma. Conception de shaders GLSL et travail sur des systèmes de gestion de simulations pour le bureau d'EON Reality (Java, Unity 3D).",
    },
    logo: 'logos/eon.jpg',
    badges: ['Unity 3D', 'GLSL', 'Java', 'AR/VR'],
  },
];
