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
