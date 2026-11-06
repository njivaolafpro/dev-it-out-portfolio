import {
  siCalendly,
  siDocker,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siStripe,
  siTypescript,
  siUpwork,
} from 'simple-icons';
import type { ServiceIcon } from '@/content/site';

function Brand({ path }: { path: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d={path} />
    </svg>
  );
}

export const tools = [
  { name: 'Node.js', icon: <Brand path={siNodedotjs.path} /> },
  { name: 'NestJS', icon: <Brand path={siNestjs.path} /> },
  { name: 'Next.js', icon: <Brand path={siNextdotjs.path} /> },
  { name: 'TypeScript', icon: <Brand path={siTypescript.path} /> },
  { name: 'React', icon: <Brand path={siReact.path} /> },
  { name: 'PostgreSQL', icon: <Brand path={siPostgresql.path} /> },
  { name: 'Stripe', icon: <Brand path={siStripe.path} /> },
  { name: 'AWS', icon: <span className="tool-letters">aws</span> },
  { name: 'Docker', icon: <Brand path={siDocker.path} /> },
];

export const moreTools =
  'Redis, RabbitMQ, Temporal, Terraform, MongoDB, Elasticsearch, Snowflake, Grafana, Sentry, PostHog, Jest, Cypress, OpenAI, Anthropic, Gemini';

export const UpworkIcon = () => <Brand path={siUpwork.path} />;
export const CalendlyIcon = () => <Brand path={siCalendly.path} />;

function Line({ children, size = 20 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const servicePaths: Record<ServiceIcon, React.ReactNode> = {
  card: (
    <>
      <rect x="3" y="5.500" width="18" height="13" rx="1.500" />
      <path d="M3 10h18M7 15h3" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 8.500-8.500M16 7l3 3M13.500 9.500l2 2" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 18a9 9 0 1 1 16 0" />
      <path d="m12 14 4-5M12 14h.01" />
    </>
  ),
  pulse: <path d="M3 12h4l2.500-6 4 12 2.500-6h5" />,
  spark: (
    <>
      <path d="M11 3c.5 4.500 2.500 6.500 7 7-4.500.5-6.500 2.500-7 7-.5-4.500-2.500-6.500-7-7 4.500-.5 6.500-2.500 7-7Z" />
      <path d="M19 15v5M16.500 17.500h5" />
    </>
  ),
  chart: <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" />,
};

export function ServiceGlyph({ icon }: { icon: ServiceIcon }) {
  return <Line>{servicePaths[icon]}</Line>;
}

export const MailIcon = () => (
  <Line size={18}>
    <rect x="3" y="5.500" width="18" height="13" rx="1.500" />
    <path d="m3.500 7 8.500 6.500L20.500 7" />
  </Line>
);

export const PinIcon = ({ size = 18 }: { size?: number }) => (
  <Line size={size}>
    <path d="M12 21s7-6.100 7-11.500A7 7 0 0 0 5 9.500C5 14.900 12 21 12 21Z" />
    <circle cx="12" cy="9.500" r="2.500" />
  </Line>
);

export const CalendarIcon = () => (
  <Line size={18}>
    <rect x="3.500" y="5" width="17" height="15.500" rx="1.500" />
    <path d="M3.500 10h17M8 3v4M16 3v4" />
  </Line>
);

export const ArrowIcon = () => (
  <svg aria-hidden="true" width="26" height="10" viewBox="0 0 26 10" fill="none" stroke="currentColor">
    <path d="M0 5h25M20.500 1 25 5l-4.500 4" />
  </svg>
);
