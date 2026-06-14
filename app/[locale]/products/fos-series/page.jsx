import { notFound } from 'next/navigation';
import FosSeriesPage from '../../../../components/FosSeriesPage';

const supportedLocales = ['fr', 'es', 'de', 'ru', 'pt'];

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocalizedFosSeriesPage({ params }) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  return <FosSeriesPage language={locale} />;
}
