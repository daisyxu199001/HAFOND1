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

const fieldHints = {
  name: 'Please enter your full name.',
  email: 'Use a valid business email, for example name@company.com.',
  phone: 'Include country code when possible, for example +1 408 555 0188.',
  company: 'Optional. Add your company or organization name.',
  country: 'Optional. Select or type your market region.',
  productRequirement: 'Optional. Mention pixel pitch, screen size, indoor/outdoor use or quantity.',
  message: 'Optional. Add deadline, installation site, budget range or special requirements.'
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const phonePattern = /^\+?[0-9\s().-]{7,24}$/;

export default function InquiryForm() {
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
      nextErrors.name = 'Name is required.';
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!emailPattern.test(nextValues.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!nextValues.phone.trim()) {
      nextErrors.phone = 'Phone is required.';
    } else if (!phonePattern.test(nextValues.phone.trim()) || digitCount < 7 || digitCount > 15) {
      nextErrors.phone = 'Please enter a valid international phone number.';
    }

    if (!nextValues.consent) {
      nextErrors.consent = 'Please confirm this is a genuine project inquiry.';
    }

    if (nextValues.website) {
      nextErrors.website = 'Spam check failed.';
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitState('error');
      setStatusMessage('Please complete the required fields before submitting.');
      return;
    }

    setSubmitState('submitting');
    setStatusMessage('Sending your inquiry...');

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
      setStatusMessage('Submission successful. Our team will respond within 24 hours.');
    } catch {
      setSubmitState('error');
      setStatusMessage('Submission failed. Please email info@hafondled.com or try again.');
    }
  }

  return (
    <form className="inquiry-form b2b-inquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <Field
          label="Name"
          name="name"
          required
          value={values.name}
          placeholder="Your full name"
          error={errors.name}
          hint={fieldHints.name}
          onChange={updateField}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          value={values.email}
          placeholder="name@company.com"
          error={errors.email}
          hint={fieldHints.email}
          onChange={updateField}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          value={values.phone}
          placeholder="+1 408 555 0188"
          error={errors.phone}
          hint={fieldHints.phone}
          onChange={updateField}
        />
        <Field
          label="Company"
          name="company"
          value={values.company}
          placeholder="Company name"
          error={errors.company}
          hint={fieldHints.company}
          onChange={updateField}
        />
        <Field
          label="Country / Region"
          name="country"
          value={values.country}
          placeholder="United States, UAE, Germany..."
          error={errors.country}
          hint={fieldHints.country}
          onChange={updateField}
        />
        <Field
          label="Product Requirements"
          name="productRequirement"
          value={values.productRequirement}
          placeholder="Outdoor LED display, P3.91, 40 sq m..."
          error={errors.productRequirement}
          hint={fieldHints.productRequirement}
          onChange={updateField}
        />
        <Field
          label="Message"
          name="message"
          wide
          multiline
          value={values.message}
          placeholder="Tell us project size, installation site, deadline and special requirements."
          error={errors.message}
          hint={fieldHints.message}
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
        <span>I confirm this is a genuine project inquiry.</span>
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
        {submitState === 'submitting' ? 'Submitting...' : 'Submit Inquiry'} <ArrowIcon />
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
