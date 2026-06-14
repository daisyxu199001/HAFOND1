import { notFound } from 'next/navigation';
import InquiryPage from '../../../components/InquiryPage';

const supportedLocales = ['fr', 'es', 'de', 'ru', 'pt'];

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocalizedInquiryPage({ params }) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  return <InquiryPage language={locale} />;
}
