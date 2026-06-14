import Image from 'next/image';
import InquiryForm from './InquiryForm';
import { CheckIcon, ShieldIcon } from './Icons';

const copies = {
  en: {
    title: 'Send an Inquiry',
    text: 'Share your LED display project requirements with our export team. Required fields are marked clearly, and we usually respond within 24 hours.',
    trustLabel: 'Inquiry support points',
    trust: ['Factory-direct LED display support', 'Outdoor, indoor, rental and custom projects', 'Anti-spam verification included'],
    faster: 'Need a faster reply?',
    formTitle: 'Get a response within 24 hours',
    formText: 'Please complete the required fields so we can route your request to the right sales engineer.'
  },
  es: {
    title: 'Enviar una consulta',
    text: 'Comparta los requisitos de su proyecto de pantalla LED con nuestro equipo de exportación. Los campos obligatorios están marcados y normalmente respondemos dentro de 24 horas.',
    trustLabel: 'Puntos de soporte para consultas',
    trust: ['Soporte directo de fábrica LED', 'Proyectos outdoor, indoor, alquiler y personalizados', 'Verificación antispam incluida'],
    faster: '¿Necesita una respuesta más rápida?',
    formTitle: 'Reciba respuesta dentro de 24 horas',
    formText: 'Complete los campos obligatorios para dirigir su solicitud al ingeniero comercial adecuado.'
  },
  fr: {
    title: 'Envoyer une demande',
    text: 'Partagez les exigences de votre projet LED avec notre équipe export. Les champs obligatoires sont clairement indiqués et nous répondons généralement sous 24 heures.',
    trustLabel: 'Points de support pour la demande',
    trust: ['Support direct usine pour écrans LED', 'Projets extérieur, intérieur, location et sur mesure', 'Vérification anti-spam incluse'],
    faster: 'Besoin d’une réponse plus rapide ?',
    formTitle: 'Recevoir une réponse sous 24 heures',
    formText: 'Complétez les champs requis afin que nous transmettions votre demande au bon ingénieur commercial.'
  },
  de: {
    title: 'Anfrage senden',
    text: 'Teilen Sie unserem Exportteam Ihre LED-Display-Projektanforderungen mit. Pflichtfelder sind klar markiert, und wir antworten normalerweise innerhalb von 24 Stunden.',
    trustLabel: 'Supportpunkte für Anfragen',
    trust: ['Direkter LED-Display-Support ab Werk', 'Outdoor-, Indoor-, Rental- und Custom-Projekte', 'Anti-Spam-Prüfung enthalten'],
    faster: 'Brauchen Sie eine schnellere Antwort?',
    formTitle: 'Antwort innerhalb von 24 Stunden',
    formText: 'Bitte füllen Sie die Pflichtfelder aus, damit wir Ihre Anfrage an den passenden Sales Engineer weiterleiten können.'
  },
  ru: {
    title: 'Отправить запрос',
    text: 'Передайте нашей экспортной команде требования к вашему LED-проекту. Обязательные поля отмечены, обычно мы отвечаем в течение 24 часов.',
    trustLabel: 'Поддержка запроса',
    trust: ['Поддержка LED-экранов напрямую с завода', 'Уличные, indoor, rental и custom проекты', 'Встроенная антиспам-проверка'],
    faster: 'Нужен более быстрый ответ?',
    formTitle: 'Ответ в течение 24 часов',
    formText: 'Заполните обязательные поля, чтобы мы направили запрос подходящему инженеру по продажам.'
  },
  pt: {
    title: 'Enviar consulta',
    text: 'Compartilhe os requisitos do seu projeto de tela LED com nossa equipe de exportação. Os campos obrigatórios estão marcados e normalmente respondemos em até 24 horas.',
    trustLabel: 'Pontos de suporte da consulta',
    trust: ['Suporte direto da fábrica para telas LED', 'Projetos outdoor, indoor, locação e personalizados', 'Verificação anti-spam incluída'],
    faster: 'Precisa de uma resposta mais rápida?',
    formTitle: 'Receba resposta em até 24 horas',
    formText: 'Preencha os campos obrigatórios para encaminharmos sua solicitação ao engenheiro comercial correto.'
  }
};

export default function InquiryPage({ language = 'en' }) {
  const copy = copies[language] || copies.en;
  const prefix = language === 'en' ? '' : `/${language}`;

  return (
    <main className="inquiry-page">
      <section className="inquiry-shell">
        <div className="inquiry-brand-panel">
          <a className="inquiry-logo" href={prefix || '/'}>
            <Image src="/assets/hafond-logo.png" alt="HAFOND logo" width={260} height={68} priority />
          </a>
          <h1>{copy.title}</h1>
          <p>{copy.text}</p>
          <div className="inquiry-trust-list" aria-label={copy.trustLabel}>
            <span><CheckIcon /> {copy.trust[0]}</span>
            <span><CheckIcon /> {copy.trust[1]}</span>
            <span><ShieldIcon /> {copy.trust[2]}</span>
          </div>
          <div className="inquiry-contact-card">
            <strong>{copy.faster}</strong>
            <a href="mailto:info@hafondled.com">info@hafondled.com</a>
            <a href="https://wa.me/8618824278011" target="_blank" rel="noreferrer">WhatsApp: +86-18824278011</a>
          </div>
        </div>
        <div className="inquiry-form-panel">
          <div className="inquiry-form-head">
            <h2>{copy.formTitle}</h2>
            <p>{copy.formText}</p>
          </div>
          <InquiryForm language={language} />
        </div>
      </section>
    </main>
  );
}
