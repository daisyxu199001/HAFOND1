'use client';

import { useState } from 'react';
import { ArrowIcon } from './Icons';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  productRequirement: '',
  message: '',
  consent: false,
  website: ''
};

const formCopies = {
  en: {
    hints: {
      name: 'Please enter your full name.',
      email: 'Use a valid business email, for example name@company.com.',
      phone: 'Include country code when possible, for example +1 408 555 0188.',
      company: 'Optional. Add your company or organization name.',
      country: 'Optional. Select or type your market region.',
      productRequirement: 'Optional. Mention pixel pitch, screen size, indoor/outdoor use or quantity.',
      message: 'Optional. Add deadline, installation site, budget range or special requirements.'
    },
    labels: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company',
      country: 'Country / Region',
      productRequirement: 'Product Requirements',
      message: 'Message'
    },
    placeholders: {
      name: 'Your full name',
      email: 'name@company.com',
      phone: '+1 408 555 0188',
      company: 'Company name',
      country: 'United States, UAE, Germany...',
      productRequirement: 'Outdoor LED display, P3.91, 40 sq m...',
      message: 'Tell us project size, installation site, deadline and special requirements.'
    },
    errors: {
      name: 'Name is required.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Please enter a valid email address.',
      phoneRequired: 'Phone is required.',
      phoneInvalid: 'Please enter a valid international phone number.',
      consent: 'Please confirm this is a genuine project inquiry.',
      spam: 'Spam check failed.',
      complete: 'Please complete the required fields before submitting.',
      sending: 'Sending your inquiry...',
      success: 'Submission successful. Our team will respond within 24 hours.',
      failed: 'Submission failed. Please email info@hafondled.com or try again.'
    },
    consent: 'I confirm this is a genuine project inquiry.',
    submit: 'Submit Inquiry',
    submitting: 'Submitting...'
  },
  es: {
    hints: {
      name: 'Ingrese su nombre completo.',
      email: 'Use un correo empresarial válido, por ejemplo name@company.com.',
      phone: 'Incluya el código de país cuando sea posible, por ejemplo +34 600 000 000.',
      company: 'Opcional. Añada el nombre de su empresa u organización.',
      country: 'Opcional. Indique su país o región de mercado.',
      productRequirement: 'Opcional. Mencione pixel pitch, tamaño de pantalla, uso interior/exterior o cantidad.',
      message: 'Opcional. Añada fecha límite, lugar de instalación, presupuesto o requisitos especiales.'
    },
    labels: {
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono / WhatsApp',
      company: 'Empresa',
      country: 'País / Región',
      productRequirement: 'Requisitos del producto',
      message: 'Mensaje'
    },
    placeholders: {
      name: 'Su nombre completo',
      email: 'nombre@empresa.com',
      phone: '+34 600 000 000',
      company: 'Nombre de la empresa',
      country: 'España, México, Chile, UAE...',
      productRequirement: 'Pantalla LED exterior, P3.91, 40 m²...',
      message: 'Indique tamaño del proyecto, sitio de instalación, fecha límite y requisitos especiales.'
    },
    errors: {
      name: 'El nombre es obligatorio.',
      emailRequired: 'El correo electrónico es obligatorio.',
      emailInvalid: 'Ingrese un correo electrónico válido.',
      phoneRequired: 'El teléfono es obligatorio.',
      phoneInvalid: 'Ingrese un número internacional válido.',
      consent: 'Confirme que se trata de una consulta real de proyecto.',
      spam: 'La verificación antispam falló.',
      complete: 'Complete los campos obligatorios antes de enviar.',
      sending: 'Enviando su consulta...',
      success: 'Consulta enviada correctamente. Nuestro equipo responderá dentro de 24 horas.',
      failed: 'No se pudo enviar. Escriba a info@hafondled.com o inténtelo de nuevo.'
    },
    consent: 'Confirmo que esta es una consulta real de proyecto.',
    submit: 'Enviar consulta',
    submitting: 'Enviando...'
  }
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const phonePattern = /^\+?[0-9\s().-]{7,24}$/;

export default function InquiryForm({ language = 'en' }) {
  const copy = formCopies[language] || formCopies.en;
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrors((current) => ({ ...current, [name]: '' }));
  }

  function validateForm(nextValues) {
    const nextErrors = {};
    const digitCount = nextValues.phone.replace(/\D/g, '').length;

    if (!nextValues.name.trim()) {
      nextErrors.name = copy.errors.name;
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = copy.errors.emailRequired;
    } else if (!emailPattern.test(nextValues.email.trim())) {
      nextErrors.email = copy.errors.emailInvalid;
    }

    if (!nextValues.phone.trim()) {
      nextErrors.phone = copy.errors.phoneRequired;
    } else if (!phonePattern.test(nextValues.phone.trim()) || digitCount < 7 || digitCount > 15) {
      nextErrors.phone = copy.errors.phoneInvalid;
    }

    if (!nextValues.consent) {
      nextErrors.consent = copy.errors.consent;
    }

    if (nextValues.website) {
      nextErrors.website = copy.errors.spam;
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitState('error');
      setStatusMessage(copy.errors.complete);
      return;
    }

    setSubmitState('submitting');
    setStatusMessage(copy.errors.sending);

    const params = new URLSearchParams(window.location.search);
    const payload = {
      ...values,
      page: window.location.pathname,
      utm_source: params.get('utm_source') || '',
      utm_campaign: params.get('utm_campaign') || ''
    };

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Submit failed');
      }

      window.localStorage.setItem('hafond-b2b-inquiry', JSON.stringify(payload));
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'lead_form_submit', ...payload });
      setValues(initialValues);
      setErrors({});
      setSubmitState('success');
      setStatusMessage(copy.errors.success);
    } catch {
      setSubmitState('error');
      setStatusMessage(copy.errors.failed);
    }
  }

  return (
    <form className="inquiry-form b2b-inquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <Field
          label={copy.labels.name}
          name="name"
          required
          value={values.name}
          placeholder={copy.placeholders.name}
          error={errors.name}
          hint={copy.hints.name}
          onChange={updateField}
        />
        <Field
          label={copy.labels.email}
          name="email"
          type="email"
          required
          value={values.email}
          placeholder={copy.placeholders.email}
          error={errors.email}
          hint={copy.hints.email}
          onChange={updateField}
        />
        <Field
          label={copy.labels.phone}
          name="phone"
          type="tel"
          required
          value={values.phone}
          placeholder={copy.placeholders.phone}
          error={errors.phone}
          hint={copy.hints.phone}
          onChange={updateField}
        />
        <Field
          label={copy.labels.company}
          name="company"
          value={values.company}
          placeholder={copy.placeholders.company}
          error={errors.company}
          hint={copy.hints.company}
          onChange={updateField}
        />
        <Field
          label={copy.labels.country}
          name="country"
          value={values.country}
          placeholder={copy.placeholders.country}
          error={errors.country}
          hint={copy.hints.country}
          onChange={updateField}
        />
        <Field
          label={copy.labels.productRequirement}
          name="productRequirement"
          value={values.productRequirement}
          placeholder={copy.placeholders.productRequirement}
          error={errors.productRequirement}
          hint={copy.hints.productRequirement}
          onChange={updateField}
        />
        <Field
          label={copy.labels.message}
          name="message"
          wide
          multiline
          value={values.message}
          placeholder={copy.placeholders.message}
          error={errors.message}
          hint={copy.hints.message}
          onChange={updateField}
        />
      </div>

      <label className="spam-confirm">
        <input
          name="consent"
          type="checkbox"
          checked={values.consent}
          onChange={updateField}
          aria-invalid={Boolean(errors.consent)}
        />
        <span>{copy.consent}</span>
      </label>
      {errors.consent && <p className="field-message error-text">{errors.consent}</p>}

      <input
        className="website-check"
        name="website"
        tabIndex="-1"
        autoComplete="off"
        value={values.website}
        onChange={updateField}
        aria-hidden="true"
      />

      <button className="button button-primary form-button" type="submit" disabled={submitState === 'submitting'}>
        {submitState === 'submitting' ? copy.submitting : copy.submit} <ArrowIcon />
      </button>
      {statusMessage && (
        <p className={`form-status ${submitState === 'success' ? 'is-success' : 'is-error'}`} role="status">
          {statusMessage}
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = 'text', required = false, wide = false, multiline = false, value, placeholder, error, hint, onChange }) {
  const inputId = `inquiry-${name}`;
  const messageId = `${inputId}-message`;
  const sharedProps = {
    id: inputId,
    name,
    value,
    placeholder,
    onChange,
    'aria-invalid': Boolean(error),
    'aria-describedby': messageId
  };

  return (
    <label className={wide ? 'wide' : ''} htmlFor={inputId}>
      <span className="field-label">
        {label}
        {required && <strong aria-label="required">*</strong>}
      </span>
      {multiline ? (
        <textarea rows="5" {...sharedProps} />
      ) : (
        <input type={type} {...sharedProps} />
      )}
      <span id={messageId} className={`field-message ${error ? 'error-text' : ''}`}>
        {error || hint}
      </span>
    </label>
  );
}
