'use client';

import Image from 'next/image';
import InquiryForm from './InquiryForm';
import { ArrowIcon, ShieldIcon } from './Icons';
import LanguageSwitcher from './LanguageSwitcher';
import { markets } from '../data/home';
import { homeTranslations } from '../data/i18n';

const whatsappUrl = 'https://wa.me/8618824278011?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.';

export default function HomePage({ language = 'en' }) {
  const copy = homeTranslations[language] || homeTranslations.en;

  return (
    <>
      <Header copy={copy} />
      <main>
        <section className="hero v3-hero" id="home">
          <div className="hero-copy">
            <h1>{copy.hero.title}</h1>
            <p>{copy.hero.text}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#inquiry">{copy.cta.quote} <ArrowIcon /></a>
              <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">{copy.cta.whatsapp}</a>
              <a className="button button-outline" href="/assets/docs/hafond-led-screen-catalog.pdf">{copy.cta.catalog}</a>
            </div>
            <div className="hero-proof" aria-label={copy.hero.proofLabel}>
              {copy.hero.proof.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/assets/generated/hero-outdoor-facade.png" alt="Outdoor Fixed LED Display DOOH project LED display - HAFOND" width={1200} height={770} priority />
          </div>
        </section>

        <section className="section product-section" id="products">
          <SectionIntro title={copy.sections.products.title} text={copy.sections.products.text} />
          <div className="product-grid">
            {copy.products.map((product) => (
              <article className="product-card" key={product.title}>
                <Image src={product.image} alt={`${product.title} - HAFOND`} width={720} height={420} />
                <div>
                  <span>{product.tag}</span>
                  <h3>{product.title}</h3>
                  <p>{product.detail}</p>
                  <ul>
                    {product.specs.map((spec) => <li key={spec}>{spec}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section dark-band" id="solutions">
          <SectionIntro title={copy.sections.solutions.title} text={copy.sections.solutions.text} />
          <div className="solution-grid">
            {copy.solutions.map(([title, text, image]) => (
              <article className="solution-card" key={title}>
                <Image src={image} alt={`${title} - HAFOND`} width={520} height={340} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section quality-section" id="factory">
          <div>
            <h2>{copy.sections.factory.title}</h2>
            <p>{copy.sections.factory.text}</p>
            <div className="cert-row">
              {['CE', 'RoHS', 'FCC', 'ISO 9001:2015'].map((cert) => <span key={cert}><ShieldIcon />{cert}</span>)}
            </div>
          </div>
          <div className="advantage-stack">
            {copy.advantages.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section markets-section" id="cases">
          <SectionIntro title={copy.sections.cases.title} text={copy.sections.cases.text} />
          <div className="market-cloud">
            {markets.map((market) => <span key={market}>{market}</span>)}
          </div>
          <div className="case-preview-grid">
            {copy.cases.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#inquiry">{copy.cta.discussProject} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section consultant-section" id="about">
          <Image src="/assets/generated/team-factory-credibility.png" alt="HAFOND sales and project support team with company logo in LED display factory" width={980} height={620} />
          <div>
            <h2>{copy.sections.about.title}</h2>
            <p>{copy.sections.about.text}</p>
            <a className="button button-primary" href="#inquiry">{copy.cta.projectAdvice} <ArrowIcon /></a>
          </div>
        </section>

        <section className="section faq-section" id="resources">
          <SectionIntro title={copy.sections.faq.title} text={copy.sections.faq.text} />
          <div className="faq-grid">
            {copy.faqs.map(([q, a]) => (
              <article key={q}>
                <h3>{q}</h3>
                <p>{a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section inquiry-section" id="inquiry">
          <div>
            <h2>{copy.sections.inquiry.title}</h2>
            <p>{copy.sections.inquiry.text}</p>
            <div className="contact-lines">
              <span>info@hafondled.com</span>
              <span>WhatsApp: +86-18824278011</span>
              <span>Shenzhen, China</span>
            </div>
          </div>
          <InquiryForm language={language} />
        </section>
      </main>
      <Footer copy={copy} />
    </>
  );
}

function Header({ copy }) {
  return (
    <header className="site-header">
      <a className="logo" href="#home">
        <Image src="/assets/hafond-logo.png" alt="HAFOND logo" width={280} height={72} priority />
      </a>
      <nav>
        <a className="nav-link" href="#home">{copy.nav.home}</a>
        <MegaItem label={copy.nav.products} href="#products" type="products" copy={copy} />
        <MegaItem label={copy.nav.solutions} href="#solutions" type="solutions" copy={copy} />
        <MegaItem label={copy.nav.about} href="#about" type="about" copy={copy} />
        <a className="nav-link" href="#factory">{copy.nav.factory}</a>
        <MegaItem label={copy.nav.cases} href="#cases" type="cases" copy={copy} />
        <MegaItem label={copy.nav.resources} href="#resources" type="resources" copy={copy} />
        <a className="nav-link" href="#contact">{copy.nav.contact}</a>
      </nav>
      <div className="site-actions">
        <LanguageSwitcher />
        <a className="button button-primary header-cta" href="#inquiry">{copy.cta.quote}</a>
      </div>
    </header>
  );
}

function MegaItem({ label, href, type, copy }) {
  return (
    <div className="mega-item">
      <a className="nav-link" href={href}>{label}</a>
      {type === 'products' && (
        <div className="mega-menu mega-wide" aria-label={`${copy.nav.products} menu`}>
          <div className="mega-column mega-featured">
            <span>{copy.mega.productCenter}</span>
            <h3>{copy.mega.productTitle}</h3>
            <p>{copy.mega.productText}</p>
            <a className="mega-cta" href="#inquiry">{copy.cta.sendScreen} <ArrowIcon /></a>
          </div>
          <div className="mega-column">
            <span>Outdoor Fixed</span>
            <a href="#products">FOC / FOE Series</a>
            <a href="#products">FOQ / FOS Series</a>
            <a href="#products">FSS Stadium Series</a>
            <a href="#inquiry">{copy.cta.outdoorQuote}</a>
          </div>
          <div className="mega-column">
            <span>Indoor LED</span>
            <a href="#products">COB / GOB Fine Pitch</a>
            <a href="#products">FIA / FIB / FIC / FID</a>
            <a href="#products">Indoor SMD P2-P5</a>
            <a href="#inquiry">{copy.cta.meetingRoom}</a>
          </div>
          <div className="mega-column">
            <span>Rental & Creative</span>
            <a href="#products">Indoor Rental RIA/RIB/RIC</a>
            <a href="#products">Outdoor Rental ROA/ROB/ROC</a>
            <a href="#products">Sphere / Poster / Transparent</a>
            <a href="#products">Dance Floor / Custom Shape</a>
          </div>
          <div className="mega-side-card">
            <strong>{copy.cta.datasheet}</strong>
            <p>{copy.mega.downloadText}</p>
            <a href="/assets/docs/hafond-led-screen-catalog.pdf">{copy.cta.catalog}</a>
            <a className="whatsapp-link" href={whatsappUrl} target="_blank" rel="noreferrer">{copy.cta.whatsapp}</a>
          </div>
        </div>
      )}
      {type === 'solutions' && (
        <div className="mega-menu mega-solutions" aria-label={`${copy.nav.solutions} menu`}>
          <div className="mega-column mega-featured">
            <span>{copy.nav.solutions}</span>
            <h3>{copy.mega.solutionsTitle}</h3>
            <p>{copy.mega.solutionsText}</p>
          </div>
          <div className="mega-column">
            <span>Outdoor & Public</span>
            <a href="#solutions">DOOH & Outdoor Advertising</a>
            <a href="#solutions">Sports Venues & Stadiums</a>
            <a href="#solutions">Municipal & Smart City</a>
            <a href="#solutions">Transportation Hubs</a>
          </div>
          <div className="mega-column">
            <span>Commercial & Event</span>
            <a href="#solutions">Retail & Commercial Display</a>
            <a href="#solutions">Corporate & Conference</a>
            <a href="#solutions">Stage, Events & Rental</a>
            <a href="#solutions">Exhibitions & Trade Shows</a>
          </div>
        </div>
      )}
      {type === 'about' && (
        <div className="mega-menu mega-compact" aria-label={`${copy.nav.about} menu`}>
          <div className="mega-column">
            <span>{copy.mega.company}</span>
            <a href="#about">{copy.mega.overview}</a>
            <a href="#about">{copy.mega.team}</a>
            <a href="#factory">{copy.mega.certifications}</a>
            <a href="#factory">{copy.mega.why}</a>
          </div>
          <div className="mega-column mega-featured">
            <span>{copy.mega.trustSignal}</span>
            <h3>{copy.mega.trustTitle}</h3>
            <p>{copy.mega.trustText}</p>
          </div>
        </div>
      )}
      {type === 'cases' && (
        <div className="mega-menu mega-compact" aria-label={`${copy.nav.cases} menu`}>
          <div className="mega-column">
            <span>{copy.mega.caseCategories}</span>
            <a href="#cases">{copy.mega.allProjects}</a>
            <a href="#cases">Outdoor DOOH Projects</a>
            <a href="#cases">Stadium & Municipal</a>
            <a href="#cases">Creative Retail Landmarks</a>
          </div>
          <div className="mega-column mega-featured">
            <span>{copy.mega.projectProof}</span>
            <h3>{copy.mega.proofTitle}</h3>
            <p>{copy.mega.proofText}</p>
          </div>
        </div>
      )}
      {type === 'resources' && (
        <div className="mega-menu mega-compact" aria-label={`${copy.nav.resources} menu`}>
          <div className="mega-column">
            <span>{copy.mega.resources}</span>
            <a href="#resources">FAQ</a>
            <a href="/assets/docs/hafond-led-screen-catalog.pdf">{copy.mega.downloadCenter}</a>
            <a href="#resources">{copy.mega.guide}</a>
            <a href="#resources">{copy.mega.pitchGuide}</a>
          </div>
          <div className="mega-column mega-featured">
            <span>AIO / GEO</span>
            <h3>{copy.mega.aioTitle}</h3>
            <p>{copy.mega.aioText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionIntro({ title, text }) {
  return (
    <div className="section-intro">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function Footer({ copy }) {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <Image src="/assets/hafond-logo.png" alt="HAFOND logo" width={260} height={68} />
        <p>{copy.footer.text}</p>
      </div>
      <div>
        <strong>{copy.footer.products}</strong>
        <a href="#products">{copy.products[0].title}</a>
        <a href="#products">{copy.products[2].title}</a>
        <a href="#products">{copy.products[1].title}</a>
        <a href="#products">{copy.products[4].title}</a>
      </div>
      <div>
        <strong>{copy.footer.quickLinks}</strong>
        <a href="#solutions">{copy.nav.solutions}</a>
        <a href="#factory">{copy.nav.factory}</a>
        <a href="#cases">{copy.nav.cases}</a>
        <a href="#resources">{copy.footer.faqResources}</a>
      </div>
      <div>
        <strong>{copy.footer.contact}</strong>
        <a href="mailto:info@hafondled.com">info@hafondled.com</a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">+86-18824278011</a>
        <p>2nd Floor, Bldg 7, Huaide Cuihu Industrial Park, Fuyong Street, Baoan District, Shenzhen 518103, China</p>
      </div>
    </footer>
  );
}
