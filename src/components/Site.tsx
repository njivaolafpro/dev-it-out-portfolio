import Image from 'next/image';
import { emailAddress, getDictionary, links, type Lang } from '@/content/site';
import { GoldLeaves, GoldSweep, Sparkle } from './Decor';
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
  const word = 'PORTFOLIO'.split('');

  return (
    <>
      <a className="skip" href="#contenu">
        {t.a11y.skip}
      </a>

      <div className="page">
        <header className="top">
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
          <div className="top-right">
            <a
              className="lang-switch"
              href={otherLang === 'fr' ? '/' : '/en'}
              hrefLang={otherLang}
              aria-label={t.header.switchLabel}
            >
              {otherLang}
            </a>
            <span className="rule" />
            <span className="year">{REVISION_YEAR}</span>
          </div>
        </header>

        <main id="contenu">
          <section className="hero">
            <h1 className="visually-hidden">{t.a11y.h1}</h1>
            <p className="hero-word" aria-hidden="true">
              {word.map((letter, index) => (
                <span key={index} style={{ animationDelay: `${index * 45}ms` }}>
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
              <p className="spaced-name">Olaf Ranaivoson</p>
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
                <span>
                  {t.hero.base[0]}
                  <br />
                  {t.hero.base[1]}
                </span>
              </p>
            </div>
          </section>

          <nav className="panel toc" aria-labelledby="toc-title">
            <div className="toc-intro">
              <h2 id="toc-title">{t.toc.title}</h2>
              <p>
                <Sparkle size={14} />
                <span>{t.toc.intro}</span>
              </p>
            </div>
            <div className="toc-links">
              <ol className="toc-list">
                {t.toc.items.map((item, index) => (
                  <li key={item.href}>
                    <a href={item.href}>
                      <span className="toc-number">{pad(index)}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <span className="toc-star" aria-hidden="true">
                <Sparkle size={24} />
              </span>
            </div>
            <GoldLeaves className="toc-leaves" />
          </nav>

          <section id="projets" className="section" aria-labelledby="projets-title">
            <header className="section-title">
              <h2 id="projets-title">{t.projects.title}</h2>
              <span className="rule" />
              <a className="more" href="#parcours">
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

          <section id="parcours" className="section" aria-labelledby="parcours-title">
            <header className="section-title">
              <h2 id="parcours-title">{t.career.title}</h2>
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
