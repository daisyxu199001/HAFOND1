import Image from 'next/image';
import InquiryForm from '../components/InquiryForm';
import { ArrowIcon, CheckIcon, ShieldIcon } from '../components/Icons';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { advantages, faqs, markets, products, solutions } from '../data/home';

const whatsappUrl = 'https://wa.me/8618824278011?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero v3-hero" id="home">
          <div className="hero-copy">
            <h1>Shenzhen LED Display Manufacturer for Global Project Buyers</h1>
            <p>
              HAFOND builds customized indoor, outdoor, rental and creative LED display solutions with in-house R&D, SMT assembly, 72-hour aging test and final QC.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#inquiry">Get a Quote <ArrowIcon /></a>
              <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Us</a>
              <a className="button button-outline" href="/assets/docs/hafond-led-screen-catalog.pdf">Download Catalog</a>
            </div>
            <div className="hero-proof" aria-label="HAFOND trust points">
              <span>Est. 2014</span>
              <span>3000+ sqm factory</span>
              <span>70+ professionals</span>
              <span>Not a trading company</span>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/assets/generated/hero-outdoor-facade.png" alt="Outdoor Fixed LED Display DOOH project LED display - HAFOND" width={1200} height={770} priority />
          </div>
        </section>

        <section className="section product-section" id="products">
          <SectionIntro title="Product Categories Built Around Project Demand" text="Strategic product order follows HAFOND's sales priority: flagship outdoor fixed, creative custom differentiation, high-margin fine pitch, traffic products and rental support." />
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <Image src={product.image} alt={`${product.title} LED display - HAFOND`} width={720} height={420} />
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
          <SectionIntro title="Solutions for the Buyers HAFOND Wants" text="Each scenario can become an SEO page, AIO/GEO answer target and future paid traffic landing page." />
          <div className="solution-grid">
            {solutions.map(([title, text, image]) => (
              <article className="solution-card" key={title}>
                <Image src={image} alt={`${title} LED display solution - HAFOND`} width={520} height={340} />
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
            <h2>Factory Credibility for Supplier Shortlisting</h2>
            <p>
              HAFOND gives overseas buyers clear manufacturing proof: Shenzhen factory support, in-house production workflow, 72-hour aging test, final QC and export-ready certification documents.
            </p>
            <div className="cert-row">
              {['CE', 'RoHS', 'FCC', 'ISO 9001:2015'].map((cert) => <span key={cert}><ShieldIcon />{cert}</span>)}
            </div>
          </div>
          <div className="advantage-stack">
            {advantages.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section markets-section" id="cases">
          <SectionIntro title="Market Focus and Case Study Direction" text="First launch in English, then expand Spanish and German pages for the strongest target regions." />
          <div className="market-cloud">
            {markets.map((market) => <span key={market}>{market}</span>)}
          </div>
          <div className="case-preview-grid">
            {[
              ['Outdoor DOOH Projects', 'Middle East and South America outdoor billboard opportunities.'],
              ['Stadium & Municipal Displays', 'Project contractor content for public and sports scenarios.'],
              ['Creative Retail Landmarks', 'Custom LED formats for brand-driven buyers.']
            ].map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#inquiry">Discuss similar project <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section consultant-section" id="about">
          <Image src="/assets/generated/team-factory-credibility.png" alt="HAFOND sales and project support team with company logo in LED display factory" width={980} height={620} />
          <div>
            <h2>Project Support, Not Catalog-Only Selling</h2>
            <p>
              HAFOND is best positioned for buyers who need product selection, cabinet planning, technical confirmation, remote installation guidance and spare parts support.
            </p>
            <a className="button button-primary" href="#inquiry">Ask for Project Advice <ArrowIcon /></a>
          </div>
        </section>

        <section className="section faq-section" id="resources">
          <SectionIntro title="Buyer Questions Answered for SEO and AI Search" text="Short direct answers help Google AI Overview, Bing/Copilot, Perplexity and ChatGPT understand HAFOND accurately." />
          <div className="faq-grid">
            {faqs.map(([q, a]) => (
              <article key={q}>
                <h3>{q}</h3>
                <p>{a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section inquiry-section" id="inquiry">
          <div>
            <h2>Send Your LED Display Project Requirements</h2>
            <p>
              The form follows HAFOND's required B2B fields for quote quality, CRM routing and future Google Ads conversion tracking.
            </p>
            <div className="contact-lines">
              <span>info@hafondled.com</span>
              <span>WhatsApp: +86-18824278011</span>
              <span>Shenzhen, China</span>
            </div>
          </div>
          <InquiryForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#home">
        <Image src="/assets/hafond-logo.png" alt="HAFOND logo" width={280} height={72} priority />
      </a>
      <nav>
        <a className="nav-link" href="#home">Home</a>
        <MegaItem label="Products" href="#products" type="products" />
        <MegaItem label="Solutions" href="#solutions" type="solutions" />
        <MegaItem label="About" href="#about" type="about" />
        <a className="nav-link" href="#factory">Factory</a>
        <MegaItem label="Cases" href="#cases" type="cases" />
        <MegaItem label="Resources" href="#resources" type="resources" />
        <a className="nav-link" href="#contact">Contact</a>
      </nav>
      <div className="site-actions">
        <LanguageSwitcher />
        <a className="button button-primary header-cta" href="#inquiry">Get a Quote</a>
      </div>
    </header>
  );
}

function MegaItem({ label, href, type }) {
  return (
    <div className="mega-item">
      <a className="nav-link" href={href}>{label}</a>
      {type === 'products' && (
        <div className="mega-menu mega-wide" aria-label="Products mega menu">
          <div className="mega-column mega-featured">
            <span>Product Center</span>
            <h3>Choose by project demand, not by catalog noise.</h3>
            <p>Outdoor fixed, creative custom, fine pitch, indoor SMD and rental LED display categories are ordered by HAFOND's strategic priority.</p>
            <a className="mega-cta" href="#inquiry">Send screen size <ArrowIcon /></a>
          </div>
          <div className="mega-column">
            <span>Outdoor Fixed</span>
            <a href="#products">FOC / FOE Series</a>
            <a href="#products">FOQ / FOS Series</a>
            <a href="#products">FSS Stadium Series</a>
            <a href="#inquiry">Ask for outdoor quote</a>
          </div>
          <div className="mega-column">
            <span>Indoor LED</span>
            <a href="#products">COB / GOB Fine Pitch</a>
            <a href="#products">FIA / FIB / FIC / FID</a>
            <a href="#products">Indoor SMD P2-P5</a>
            <a href="#inquiry">Meeting room solution</a>
          </div>
          <div className="mega-column">
            <span>Rental & Creative</span>
            <a href="#products">Indoor Rental RIA/RIB/RIC</a>
            <a href="#products">Outdoor Rental ROA/ROB/ROC</a>
            <a href="#products">Sphere / Poster / Transparent</a>
            <a href="#products">Dance Floor / Custom Shape</a>
          </div>
          <div className="mega-side-card">
            <strong>Need a datasheet?</strong>
            <p>Download the LED screen catalog or start a WhatsApp chat with project details.</p>
            <a href="/assets/docs/hafond-led-screen-catalog.pdf">Download Catalog</a>
            <a className="whatsapp-link" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </div>
      )}
      {type === 'solutions' && (
        <div className="mega-menu mega-solutions" aria-label="Solutions mega menu">
          <div className="mega-column mega-featured">
            <span>Solution Pages</span>
            <h3>Build landing pages around buyer intent.</h3>
            <p>Use these scenarios for SEO, AI search answers and later Google Ads landing pages.</p>
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
        <div className="mega-menu mega-compact" aria-label="About menu">
          <div className="mega-column"><span>Company</span><a href="#about">Company Overview</a><a href="#about">Team & Management</a><a href="#factory">Certifications</a><a href="#factory">Why HAFOND</a></div>
          <div className="mega-column mega-featured"><span>Trust Signal</span><h3>Manufacturer, not trading company.</h3><p>Est. 2014, Shenzhen factory, 72-hour aging test and QC on site.</p></div>
        </div>
      )}
      {type === 'cases' && (
          <div className="mega-menu mega-compact" aria-label="Cases menu">
            <div className="mega-column"><span>Case Categories</span><a href="#cases">All Projects</a><a href="#cases">Outdoor DOOH Projects</a><a href="#cases">Stadium & Municipal</a><a href="#cases">Creative Retail Landmarks</a></div>
          <div className="mega-column mega-featured"><span>Project Proof</span><h3>Real photos and verified details.</h3><p>Case pages focus on actual project scenes, product configuration and installation requirements.</p></div>
        </div>
      )}
      {type === 'resources' && (
        <div className="mega-menu mega-compact" aria-label="Resources menu">
          <div className="mega-column"><span>Resources</span><a href="#resources">FAQ</a><a href="/assets/docs/hafond-led-screen-catalog.pdf">Download Center</a><a href="#resources">LED Screen Guide</a><a href="#resources">Pixel Pitch Guide</a></div>
          <div className="mega-column mega-featured"><span>AIO / GEO</span><h3>Answer buyer questions clearly.</h3><p>Short answers, tables and FAQs help Google AI Overview and Perplexity parse HAFOND.</p></div>
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

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <Image src="/assets/hafond-logo.png" alt="HAFOND logo" width={260} height={68} />
        <p>Shenzhen LED display manufacturer since 2014 for international project buyers.</p>
      </div>
      <div>
        <strong>Products</strong>
        <a href="#products">Outdoor Fixed LED</a>
        <a href="#products">Indoor Fine Pitch</a>
        <a href="#products">Creative Custom LED</a>
        <a href="#products">Rental LED Display</a>
      </div>
      <div>
        <strong>Quick Links</strong>
        <a href="#solutions">Solutions</a>
        <a href="#factory">Factory</a>
        <a href="#cases">Cases</a>
        <a href="#resources">FAQ / Resources</a>
      </div>
      <div>
        <strong>Contact</strong>
        <a href="mailto:info@hafondled.com">info@hafondled.com</a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">+86-18824278011</a>
        <p>2nd Floor, Bldg 7, Huaide Cuihu Industrial Park, Fuyong Street, Baoan District, Shenzhen 518103, China</p>
      </div>
    </footer>
  );
}
