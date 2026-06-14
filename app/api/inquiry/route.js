const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const phonePattern = /^\+?[0-9\s().-]{7,24}$/;

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, message: 'Invalid request body.' }, { status: 400 });
  }

  payload = payload || {};
  const errors = validateInquiry(payload);

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  const inquiry = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    company: cleanOptional(payload.company),
    country: cleanOptional(payload.country),
    productRequirement: cleanOptional(payload.productRequirement),
    message: cleanOptional(payload.message),
    page: cleanOptional(payload.page),
    utm_source: cleanOptional(payload.utm_source),
    utm_campaign: cleanOptional(payload.utm_campaign),
    submittedAt: new Date().toISOString()
  };

  // Integration template:
  // Set INQUIRY_WEBHOOK_URL to a Make/Zapier/Formspree/custom API endpoint
  // that forwards the lead to a mailbox or stores it in a CRM/database.
  if (process.env.INQUIRY_WEBHOOK_URL) {
    const response = await fetch(process.env.INQUIRY_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inquiry)
    });

    if (!response.ok) {
      return Response.json({ ok: false, message: 'Lead delivery failed.' }, { status: 502 });
    }
  } else {
    console.info('New inquiry received:', inquiry);
  }

  return Response.json({ ok: true });
}

function validateInquiry(payload) {
  const errors = {};
  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim();
  const phone = String(payload.phone || '').trim();
  const digitCount = phone.replace(/\D/g, '').length;

  if (!name) {
    errors.name = 'Name is required.';
  }

  if (!email) {
    errors.email = 'Email is required.';
  } else if (!emailPattern.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!phone) {
    errors.phone = 'Phone is required.';
  } else if (!phonePattern.test(phone) || digitCount < 7 || digitCount > 15) {
    errors.phone = 'Please enter a valid international phone number.';
  }

  if (payload.website) {
    errors.website = 'Spam check failed.';
  }

  return errors;
}

function cleanOptional(value) {
  return String(value || '').trim();
}
