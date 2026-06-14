import { notFound } from 'next/navigation';
import HomePage from '../../components/HomePage';

const supportedLocales = ['fr', 'es', 'de', 'ru', 'pt'];

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocalizedHomePage({ params }) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  return <HomePage language={locale} />;
}
