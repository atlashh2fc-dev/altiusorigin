import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  message?: string;
  plan?: string;
  utm?: Record<string, string>;
  source?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Send email notification via Resend (if configured) or webhook
async function sendEmailNotification(payload: LeadPayload & { receivedAt: string }) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || "contacto@altiusignite.com";

  if (!resendApiKey) {
    console.log("[Leads] Email notification skipped - RESEND_API_KEY not configured");
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Origen Leads <leads@altiusignite.com>",
        to: [notifyEmail],
        subject: `🚀 Nuevo Lead: ${payload.name}${payload.plan ? ` - Plan ${payload.plan}` : ""}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #7c3aed;">Nuevo contacto desde Origen</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Nombre:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${payload.name}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
              ${payload.phone ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Teléfono:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="tel:${payload.phone}">${payload.phone}</a></td></tr>` : ""}
              ${payload.plan ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Plan interesado:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${payload.plan}</td></tr>` : ""}
              ${payload.company ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Empresa:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${payload.company}</td></tr>` : ""}
              ${payload.website ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Sitio web:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="${payload.website}">${payload.website}</a></td></tr>` : ""}
              ${payload.message ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Mensaje:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${payload.message}</td></tr>` : ""}
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Fuente:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${payload.source || "Formulario web"}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Recibido:</strong></td><td style="padding: 8px 0;">${new Date(payload.receivedAt).toLocaleString("es-CL", { timeZone: "America/Santiago" })}</td></tr>
            </table>
            <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              Este email fue enviado automáticamente desde origen.altiusignite.com
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      console.error("[Leads] Email notification failed:", await response.text());
    } else {
      console.log("[Leads] Email notification sent to", notifyEmail);
    }
  } catch (error) {
    console.error("[Leads] Email notification error:", error);
  }
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as LeadPayload | null;
  if (!body) {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json({ error: "Nombre requerido." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  const payload = {
    ...body,
    name,
    email,
    receivedAt: new Date().toISOString(),
    meta: {
      userAgent: req.headers.get("user-agent"),
      referer: req.headers.get("referer"),
      ip:
        req.headers.get("x-forwarded-for") ??
        req.headers.get("x-real-ip") ??
        undefined,
    },
  };

  // Send email notification
  await sendEmailNotification(payload);

  // Also send to webhook if configured
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (webhookUrl) {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    const secret = process.env.LEADS_WEBHOOK_SECRET;
    if (secret) headers.Authorization = `Bearer ${secret}`;

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("[Leads] Webhook failed:", res.status);
      }
    } catch (error) {
      console.error("[Leads] Webhook error:", error);
    }
  }

  return NextResponse.json({ ok: true });
}
