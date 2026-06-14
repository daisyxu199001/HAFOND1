import Image from 'next/image';
import InquiryForm from '../../components/InquiryForm';
import { CheckIcon, ShieldIcon } from '../../components/Icons';

export const metadata = {
  title: 'Send an Inquiry | HAFOND LED Display',
  description:
    'Send your LED display project inquiry to HAFOND with name, email, phone, company, country, product requirements and message fields.'
};

export default function InquiryPage() {
  return (
    <main className="inquiry-page">
      <section className="inquiry-shell">
        <div className="inquiry-brand-panel">
          <a className="inquiry-logo" href="/">
            <Image src="/assets/hafond-logo.png" alt="HAFOND logo" width={260} height={68} priority />
          </a>
          <h1>Send an Inquiry</h1>
          <p>
            Share your LED display project requirements with our export team. Required fields are marked clearly, and we usually respond within 24 hours.
          </p>
          <div className="inquiry-trust-list" aria-label="Inquiry support points">
            <span><CheckIcon /> Factory-direct LED display support</span>
            <span><CheckIcon /> Outdoor, indoor, rental and custom projects</span>
            <span><ShieldIcon /> Anti-spam verification included</span>
          </div>
          <div className="inquiry-contact-card">
            <strong>Need a faster reply?</strong>
            <a href="mailto:info@hafondled.com">info@hafondled.com</a>
            <a href="https://wa.me/8618824278011" target="_blank" rel="noreferrer">WhatsApp: +86-18824278011</a>
          </div>
        </div>
        <div className="inquiry-form-panel">
          <div className="inquiry-form-head">
            <h2>Get a response within 24 hours</h2>
            <p>Please complete the required fields so we can route your request to the right sales engineer.</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
