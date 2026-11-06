import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Jost, League_Gothic, Mrs_Saint_Delafield, Oswald } from 'next/font/google';
import { notFound } from 'next/navigation';
import { emailAddress, getDictionary, isLang, langs, links, siteUrl } from '@/content/site';
import '../globals.css';

const display = League_Gothic({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-display',
  display: 'swap',
});
const heading = Oswald({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-heading',
  display: 'swap',
});
const body = Jost({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-body',
  display: 'swap',
});
const script = Mrs_Saint_Delafield({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
});
const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
});

type Params = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: '#0b0a08' };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { meta } = getDictionary(lang);
  const path = lang === 'fr' ? '/' : '/en';

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: path,
      languages: { fr: '/', en: '/en', 'x-default': '/' },
    },
    openGraph: {
      type: 'profile',
      title: meta.title,
      description: meta.description,
      url: path,
      siteName: 'Olaf Ranaivoson',
      locale: lang === 'fr' ? 'fr_FR' : 'en_US',
    },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description },
  };
}

export default async function RootLayout({
  children,
  params,
}: Params & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Njiva Olaf Ranaivoson',
    alternateName: 'Olaf Ranaivoson',
    jobTitle: lang === 'fr' ? 'Développeur full stack IA freelance' : 'Freelance full stack and AI developer',
    description: t.meta.description,
    url: siteUrl,
    image: `${siteUrl}/olaf.png`,
    email: emailAddress,
    address: { '@type': 'PostalAddress', addressLocality: 'Longueville', addressCountry: 'FR' },
    sameAs: [links.linkedin, links.upwork],
    knowsLanguage: ['fr', 'en', 'mfe', 'mg'],
  };

  return (
    <html
      lang={lang}
      className={`${display.variable} ${heading.variable} ${body.variable} ${script.variable} ${serif.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  );
}
