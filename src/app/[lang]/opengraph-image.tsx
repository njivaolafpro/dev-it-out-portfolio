import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { getDictionary, isLang, langs } from '@/content/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Olaf Ranaivoson';

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(isLang(lang) ? lang : 'fr');
  const [font, photo] = await Promise.all([
    readFile(join(process.cwd(), 'src/assets/LeagueGothic-Regular.ttf')),
    readFile(join(process.cwd(), 'public/olaf.png')),
  ]);
  const proofs = t.projects.items.slice(0, 3);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        background: '#0b0a08',
        fontFamily: 'League Gothic',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 40,
          right: 40,
          top: 18,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 176,
          lineHeight: 1,
          color: '#e6d2b3',
        }}
      >
        {'NJIVA OLAF RANAIVOSON'.split('').map((letter, index) =>
          letter === ' ' ? <span key={index} style={{ width: 18 }} /> : <span key={index}>{letter}</span>,
        )}
      </div>
      <img
        src={`data:image/png;base64,${photo.toString('base64')}`}
        width={420}
        height={521}
        style={{ position: 'absolute', left: 390, top: 130 }}
        alt=""
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 210,
          background: 'linear-gradient(transparent, #0b0a08 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 40,
          right: 40,
          bottom: 28,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 50, lineHeight: 1.08, color: '#d3ac72' }}>
          <span>{t.hero.role[0].toUpperCase()}</span>
          <span>{t.hero.role[1].toUpperCase()}</span>
        </div>
        <div style={{ display: 'flex', gap: 36 }}>
          {proofs.map((proof) => (
            <div key={proof.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: 58, lineHeight: 1, color: '#e6d2b3' }}>{proof.figure}</span>
              <span style={{ fontSize: 26, color: '#d3ac72' }}>{proof.client.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>,
    { ...size, fonts: [{ name: 'League Gothic', data: font, style: 'normal', weight: 400 }] },
  );
}
