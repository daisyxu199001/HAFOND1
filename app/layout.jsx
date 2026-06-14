import './globals.css';
import WhatsAppFloat from '../components/WhatsAppFloat';

export const metadata = {
  metadataBase: new URL('https://www.hafondled.com'),
  title: 'HAFOND | Custom-Focused LED Display Manufacturer',
  description:
    'HAFOND is a Shenzhen-based LED display manufacturer for outdoor fixed, creative custom, fine pitch indoor and rental LED display projects.',
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: 'HAFOND | Custom-Focused LED Display Manufacturer',
    description:
      'Outdoor fixed, creative custom, fine pitch indoor and rental LED display solutions from an in-house Shenzhen factory.',
    images: ['/assets/generated/hero-outdoor-facade.png']
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      fr: '/fr/',
      es: '/es/',
      de: '/de/',
      ru: '/ru/',
      pt: '/pt/',
      'x-default': '/'
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
