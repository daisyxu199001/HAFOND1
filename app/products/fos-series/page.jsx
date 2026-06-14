import Image from 'next/image';
import InquiryForm from '../../../components/InquiryForm';
import { ArrowIcon, CheckIcon, ShieldIcon } from '../../../components/Icons';
import LanguageSwitcher from '../../../components/LanguageSwitcher';

const whatsappUrl = 'https://wa.me/8618824278011?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.';

const detailBlocks = [
  {
    number: '01',
    title: 'Fast Installation & Quick Maintenance',
    text: 'Fast-operation cabinet locks and quick power-cord connection make installation and maintenance more efficient for outdoor fixed projects.',
    image: '/assets/products/fos-feature-specs.png',
    points: ['Quick cabinet lock', 'Tool-less module service', 'Quick power cord connection', 'Front and rear service planning']
  },
  {
    number: '02',
    title: 'Diverse Cabinet Sizes, Various Options',
    text: 'Multiple standard cabinet sizes are compatible and can be combined to fit different screen proportions and engineering structures.',
    image: '/assets/products/fos-feature-specs.png',
    points: ['320x480mm', '320x640mm', '640x480mm', '640x640mm', '960x480mm']
  },
  {
    number: '03',
    title: 'Built-in Wiring Design, Tidy Looking & Space Saving',
    text: 'The hidden wiring layout improves rear appearance, saves installation space and supports cleaner maintenance planning.',
    image: '/assets/products/fos-feature-specs.png',
    points: ['Hidden wiring design', 'Clean rear structure', 'Space-saving cabinet layout', 'Easier maintenance']
  },
  {
    number: '04',
    title: '45° Bevel Edge Cabinet Option',
    text: 'Optional 45° bevel edge cabinets can support L-shape and right-angle LED screen effects for building corners and creative outdoor displays.',
    image: '/assets/products/fos-feature-specs.png',
    points: ['45° bevel edge', 'L-shape screen effect', 'Right-angle display', 'Optional design']
  }
];

const specs = [
  ['Pixel Pitch', 'P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10'],
  ['Cabinet Size', '320x480mm / 320x640mm / 640x480mm / 640x640mm / 960x480mm'],
  ['Cabinet Material', 'Aluminum cabinet project configuration'],
  ['Brightness', '4500-7000 nits project range'],
  ['Protection', 'IP65 outdoor protection / IP66 project option'],
  ['Maintenance', 'Front and rear service planning'],
  ['Installation', 'Fixed installation'],
  ['Application', 'Outdoor advertising / DOOH / billboard / building facade']
];

const applications = [
  ['Outdoor Billboard', 'High brightness for clear visibility under direct sunlight.', '/assets/generated/hero-outdoor-facade.png'],
  ['Roadside Advertising', 'Project-ready cabinet options for outdoor media networks.', '/assets/generated/outdoor-fixed-installation.png'],
  ['Shopping Mall Facade', 'Flexible cabinet sizing for commercial building displays.', '/assets/generated/creative-custom-mall.png'],
  ['Municipal Information', 'Reliable outdoor display planning for public information projects.', '/assets/generated/outdoor-fixed-installation.png']
];

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

export default function FosSeriesPage() {
  return (
    <>
      <ProductHeader />
      <main className="product-page product-detail-v2">
        <section className="product-hero product-hero-dark">
          <div className="product-hero-copy">
            <p className="product-kicker">Outdoor Fixed LED Display</p>
            <h1>FOS Series Outdoor Fixed LED Display</h1>
            <p>
              Engineered for outdoor advertising, building facade and municipal display projects that need flexible cabinet sizes, fast maintenance and reliable outdoor protection.
            </p>
            <div className="product-key-lines">
              <span><CheckIcon />Pixel Pitch: P2.97 / P3.91 / P4.81 / P6.25 / P8 / P10</span>
              <span><CheckIcon />Cabinet Size: 320x480 / 320x640 / 640x480 / 640x640 / 960x480mm</span>
            </div>
            <div className="product-hero-actions">
              <a className="button button-primary" href="#inquiry">Get a Quote <ArrowIcon /></a>
              <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Us</a>
              <a className="button button-outline" href="/assets/docs/hafond-led-screen-catalog.pdf">Download Datasheet</a>
            </div>
            <div className="product-proof-grid">
              {['IP65 / IP66 option', '40% energy saving option', '4500-7000 nits', 'Front & rear service'].map((item) => (
                <span key={item}><ShieldIcon />{item}</span>
              ))}
            </div>
          </div>
          <div className="product-hero-media">
            <Image src="/assets/generated/outdoor-fixed-installation.png" alt="FOS Series outdoor fixed LED display cabinet - HAFOND" width={1200} height={770} priority />
          </div>
        </section>

        <nav className="product-anchor" aria-label="FOS Series page sections">
          {['Overview', 'Details', 'Specifications', 'Applications', 'Downloads', 'Inquiry'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>

        <section className="product-overview" id="overview">
          <div>
            <h2>Outdoor Fixed LED Display for Project Buyers</h2>
            <p>
              FOS Series presents the product fit, cabinet dimensions, maintenance method and inquiry actions clearly, then gives buyers the technical proof they need to shortlist an outdoor LED display supplier.
            </p>
          </div>
          <div className="overview-metrics">
            <article><span>Pixel Pitch</span><strong>P2.97-P10</strong></article>
            <article><span>Cabinet Options</span><strong>5 compatible sizes</strong></article>
            <article><span>Protection</span><strong>Outdoor IP65 / IP66 option</strong></article>
            <article><span>Best Fit</span><strong>DOOH, facade, municipal</strong></article>
          </div>
        </section>

        <section className="product-detail-blocks" id="details">
          {detailBlocks.map((block) => (
            <article className="detail-block" key={block.title}>
              <div className="detail-media">
                <Image src={block.image} alt={`${block.title} for FOS Series outdoor LED display - HAFOND`} width={820} height={560} />
              </div>
              <div className="detail-copy">
                <span>{block.number}</span>
                <h2>{block.title}</h2>
                <p>{block.text}</p>
                <ul>
                  {block.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="product-specs" id="specifications">
          <div className="product-section-head">
            <h2>Technical Specifications</h2>
            <p>Parameters are rendered as HTML content, not as an image, so buyers and search engines can read them clearly.</p>
          </div>
          <div className="spec-table spec-table-formal">
            <div className="spec-row spec-head"><span>Item</span><strong>Specification</strong></div>
            {specs.map(([label, value]) => (
              <div className="spec-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="spec-cta-row">
            <a className="button button-outline" href="/assets/docs/hafond-led-screen-catalog.pdf">Download Datasheet</a>
            <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </section>

        <section className="product-applications" id="applications">
          <div className="product-section-head">
            <h2>Applications</h2>
            <p>Connect each product page to application intent for SEO, AIO/GEO visibility and future paid traffic.</p>
          </div>
          <div className="product-application-grid">
            {applications.map(([title, text, image]) => (
              <article key={title}>
                <Image src={image} alt={`${title} application for FOS Series LED display - HAFOND`} width={560} height={360} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="product-cases">
          <div className="product-section-head">
            <h2>Related Case Study Slots</h2>
            <p>Related project examples help buyers compare similar outdoor billboard, facade and stadium display requirements before requesting a quotation.</p>
          </div>
          <div className="case-preview-grid light-cases">
            {['Outdoor Billboard Project', 'Shopping Mall Facade Project', 'Stadium Perimeter Project'].map((title) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>HAFOND can match product model, pixel pitch, screen area and installation method to similar verified project scenarios.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="product-downloads" id="downloads">
          <div>
            <h2>Downloads</h2>
            <p>Give buyers quick access to the product catalog and future datasheet files after lightweight lead capture.</p>
          </div>
          <div>
            <a className="button button-outline" href="/assets/docs/hafond-led-screen-catalog.pdf">LED Screen Catalog</a>
            <a className="button button-outline" href="/assets/docs/hafond-custom-led-display-catalog.pdf">Custom LED Catalog</a>
            <a className="button button-primary" href="#inquiry">Request Installation Guide</a>
          </div>
        </section>

        <section className="section inquiry-section product-bottom-inquiry" id="inquiry">
          <div>
            <h2>Send Your Project Inquiry</h2>
            <p>Tell us screen size, viewing distance, installation environment and deadline. HAFOND will respond within 24 hours.</p>
            <div className="product-whatsapp-card">
              <strong>Contact Us on WhatsApp</strong>
              <span>+86-18824278011</span>
              <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Us</a>
            </div>
          </div>
          <InquiryForm />
        </section>
      </main>
    </>
  );
}

function ProductHeader() {
  return (
    <header className="site-header">
      <a className="logo" href="/">
        <Image src="/assets/hafond-logo.png" alt="HAFOND logo" width={280} height={72} priority />
      </a>
      <nav>
        {['Products', 'Solutions', 'Factory', 'Cases', 'Resources', 'Contact'].map((item) => (
          <a className="nav-link" key={item} href={item === 'Products' ? '/#products' : `/#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
      <div className="site-actions">
        <LanguageSwitcher />
        <a className="button button-primary header-cta" href="#inquiry">Get a Quote</a>
      </div>
    </header>
  );
}
