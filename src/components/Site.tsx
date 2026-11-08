import Image from 'next/image';
import { clients, emailAddress, getDictionary, links, type Lang } from '@/content/site';
import { GoldSweep, Sparkle } from './Decor';
import {
  ArrowIcon,
  CalendarIcon,
  CalendlyIcon,
  MailIcon,
  moreTools,
  PinIcon,
  ServiceGlyph,
  tools,
  UpworkIcon,
} from './Icons';

const REVISION_YEAR = '2026';

/** Same visual weight for every logo: a constant area, so long wordmarks get thinner. */
const LOGO_AREA = 2300;

function logoStyle(file: string, ratio: number) {
  return {
    '--logo': `url(/logos/${file})`,
    '--ratio': ratio,
    '--width': `${Math.round(Math.sqrt(LOGO_AREA * ratio))}px`,
  } as React.CSSProperties;
}

function pad(index: number) {
  return String(index + 1).padStart(2, '0');
}

function External({
  href,
  className,
  label,
  children,
}: {
  href: string;
  className?: string;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} aria-label={label} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function ColumnTitle({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <header className="column-title">
      <h2 id={id}>{children}</h2>
      <Sparkle size={14} />
      <span className="rule" />
    </header>
  );
}

export function Site({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const otherLang = lang === 'fr' ? 'en' : 'fr';
  const word = 'NJIVA OLAF RANAIVOSON'.split('');

  return (
    <>
      <a className="skip" href="#contenu">
        {t.a11y.skip}
      </a>

      <span className="progress" aria-hidden="true" />

      <header className="top">
        <div className="top-inner">
          <a className="brand" href={lang === 'fr' ? '/' : '/en'}>
            <span className="monogram" aria-hidden="true">
              <span>O</span>
              <span>R</span>
            </span>
            <span className="brand-lines">
              <span>{t.header.lines[0]}</span>
              <span>{t.header.lines[1]}</span>
            </span>
          </a>
          <nav className="top-nav" aria-label={t.nav.label}>
            <ul>
              {t.nav.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            className="lang-switch"
            href={otherLang === 'fr' ? '/' : '/en'}
            hrefLang={otherLang}
            aria-label={t.header.switchLabel}
          >
            {otherLang}
          </a>
        </div>
      </header>

      <div className="page">
        <main id="contenu">
          <section className="hero">
            <h1 className="visually-hidden">{t.a11y.h1}</h1>
            <p className="hero-word" aria-hidden="true">
              {word.map((letter, index) => (
                <span
                  key={index}
                  className={letter === ' ' ? 'hero-space' : undefined}
                  style={{ animationDelay: `${index * 28}ms` }}
                >
                  {letter}
                </span>
              ))}
            </p>
            <Image
              className="hero-photo"
              src="/olaf.png"
              alt={t.a11y.photo}
              width={1136}
              height={1408}
              priority
              quality={90}
              sizes="(max-width: 820px) 84vw, 640px"
            />
            <div className="hero-left">
              <p className="hero-role">
                <span>{t.hero.role[0]}</span>
                <span>{t.hero.role[1]}</span>
              </p>
              <p className="hero-text">{t.hero.text}</p>
              <p className="signature" aria-hidden="true">
                Olaf Ranaivoson
              </p>
              <External href={links.calendly} className="button">
                <CalendarIcon />
                {t.hero.cta}
              </External>
            </div>
            <div className="hero-right">
              <span className="short-rule" />
              <p className="tagline">{t.hero.tagline}</p>
              <p className="based">
                <PinIcon />
                <span>{t.hero.base}</span>
              </p>
            </div>
          </section>

          <section className="panel clients" aria-labelledby="clients-title">
            <header className="column-title">
              <h2 id="clients-title">{t.clients.title}</h2>
              <Sparkle size={14} />
              <span className="rule" />
            </header>
            <ul className="client-logos">
              {clients.map((client, index) => (
                <li key={client.name} style={{ '--index': index } as React.CSSProperties}>
                  <span
                    className="client-logo"
                    role="img"
                    aria-label={client.name}
                    style={logoStyle(client.file, client.ratio)}
                  />
                </li>
              ))}
            </ul>
          </section>

          <section id="projets" className="section" aria-labelledby="projets-title">
            <header className="section-title">
              <h2 id="projets-title">{t.projects.title}</h2>
              <span className="rule" />
              <a className="more" href="#missions">
                {t.projects.more}
                <ArrowIcon />
              </a>
            </header>
            <ol className="projects">
              {t.projects.items.map((project, index) => (
                <li key={project.id} id={project.id} className="project reveal">
                  <div className="cover">
                    <span className="cover-bar" aria-hidden="true">
                      <span>{project.client}</span>
                      <i />
                    </span>
                    <span className="cover-figure">{project.figure}</span>
                    <span className="cover-label">{project.figureLabel}</span>
                  </div>
                  <div className="project-body">
                    <span className="project-number" aria-hidden="true">
                      {pad(index)}
                    </span>
                    <div>
                      <h3>{project.client}</h3>
                      <p className="project-sector">{project.sector}</p>
                      <p className="project-text">{project.text}</p>
                    </div>
                  </div>
                </li>
              ))}
              <li className="project project-next reveal">
                <External href={links.calendly}>
                  <Sparkle size={22} />
                  <strong>{t.projects.next.title}</strong>
                  <span>{t.projects.next.text}</span>
                  <em>
                    {t.projects.next.cta}
                    <ArrowIcon />
                  </em>
                </External>
              </li>
            </ol>
          </section>

          <div className="columns">
            <section id="services" aria-labelledby="services-title">
              <ColumnTitle id="services-title">{t.services.title}</ColumnTitle>
              <ul className="services">
                {t.services.items.map((service) => (
                  <li key={service.title}>
                    <span className="service-icon">
                      <ServiceGlyph icon={service.icon} />
                    </span>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <p className="service-proof">
                        {t.services.proofLabel} {service.proof}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section id="outils" aria-labelledby="outils-title">
              <ColumnTitle id="outils-title">{t.tools.title}</ColumnTitle>
              <ul className="tools">
                {tools.map((tool) => (
                  <li key={tool.name}>
                    <span className="tool-circle">{tool.icon}</span>
                    <span>{tool.name}</span>
                  </li>
                ))}
              </ul>
              <p className="more-tools">
                <span>{t.tools.moreLabel}</span> {moreTools}
              </p>
            </section>

            <section id="a-propos" aria-labelledby="a-propos-title">
              <ColumnTitle id="a-propos-title">{t.about.title}</ColumnTitle>
              <div className="about">
                {t.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <dl>
                  {t.about.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          </div>

          <section id="missions" className="section" aria-labelledby="missions-title">
            <header className="section-title">
              <h2 id="missions-title">{t.career.title}</h2>
              <span className="rule" />
            </header>
            <ol className="career">
              {t.career.items.map((item) => (
                <li key={item.company} className="reveal">
                  <span className="career-period">{item.period}</span>
                  <div className="career-who">
                    <h3>{item.company}</h3>
                    <p>{item.role}</p>
                  </div>
                  <div className="career-what">
                    <p>{item.text}</p>
                    <p className="career-stack">{item.stack}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="contact" className="panel contact" aria-labelledby="contact-title">
            <GoldSweep className="contact-sweep" />
            <Sparkle size={30} className="contact-flare" />
            <div className="contact-call">
              <h2 id="contact-title">
                <span>{t.contact.title[0]}</span>
                <span>{t.contact.title[1]}</span>
              </h2>
              <p>{t.contact.text}</p>
              <External href={links.calendly} className="button button-solid">
                <CalendarIcon />
                {t.contact.cta}
              </External>
            </div>
            <ul className="contact-list">
              <li>
                <MailIcon />
                <a href={links.email}>{emailAddress}</a>
              </li>
              <li>
                <CalendarIcon />
                <External href={links.calendly}>calendly.com/nji-olaf</External>
              </li>
              <li>
                <PinIcon />
                <span>{t.contact.location}</span>
              </li>
            </ul>
            <div className="contact-social">
              <p>{t.contact.connect}</p>
              <ul>
                <li>
                  <External href={links.linkedin} label="LinkedIn">
                    <span className="social-letters">in</span>
                  </External>
                </li>
                <li>
                  <External href={links.upwork} label="Upwork">
                    <UpworkIcon />
                  </External>
                </li>
                <li>
                  <External href={links.calendly} label={t.contact.calendlyLabel}>
                    <CalendlyIcon />
                  </External>
                </li>
              </ul>
            </div>
          </section>
        </main>

        <footer className="bottom">
          © {REVISION_YEAR} {t.footer}
        </footer>
      </div>
    </>
  );
}
