import { notFound } from 'next/navigation';
import { Site } from '@/components/Site';
import { isLang } from '@/content/site';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Site lang={lang} />;
}
