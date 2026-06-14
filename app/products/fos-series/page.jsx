import FosSeriesPage from '../../../components/FosSeriesPage';

export const metadata = {
  title: 'FOS Series Outdoor Fixed LED Display | HAFOND CO., LTD',
  description:
    'FOS Series outdoor fixed LED display by HAFOND supports P2.97-P10, multiple cabinet sizes, fast maintenance, built-in wiring and optional 45-degree bevel cabinet.',
  alternates: {
    canonical: '/products/fos-series',
    languages: {
      en: '/products/fos-series',
      fr: '/fr/products/fos-series',
      es: '/es/products/fos-series',
      de: '/de/products/fos-series',
      ru: '/ru/products/fos-series',
      pt: '/pt/products/fos-series',
      'x-default': '/products/fos-series'
    }
  }
};

export default function Page() {
  return <FosSeriesPage language="en" />;
}
