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
