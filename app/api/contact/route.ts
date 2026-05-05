import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  organization: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  needType: z.enum(['conseil', 'ingenierie', 'evaluation', 'transformation', 'appui', 'autre']),
  message: z.string().min(20),
  honeypot: z.string().max(0),
})

const needLabels: Record<string, string> = {
  conseil: 'Conseil stratégique en éducation',
  ingenierie: 'Ingénierie pédagogique',
  evaluation: 'Évaluation et assurance qualité',
  transformation: 'Transformation numérique',
  appui: 'Renforcement des capacités',
  autre: 'Autre besoin',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // Honeypot: silently discard spam
    if (data.honeypot) {
      return NextResponse.json({ success: true })
    }

    const apiKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL ?? 'info@mica.ht'

    if (!apiKey) {
      // Dev mode: log to console without sending
      console.log('[Contact] New consultation request:', data)
      return NextResponse.json({ success: true })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'MICA Consulting <noreply@mica.ht>',
      to: [contactEmail],
      replyTo: data.email,
      subject: `Nouvelle demande de consultation – ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #D32F2F; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">MICA Consulting</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">
              Nouvelle demande de consultation
            </p>
          </div>
          <div style="padding: 32px; background: #fff; border: 1px solid #e0e0e0; border-top: 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #757575; font-size: 13px; width: 140px;">Nom complet</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #424242; font-size: 13px; font-weight: 600;">${data.firstName} ${data.lastName}</td>
              </tr>
              ${data.organization ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #757575; font-size: 13px;">Organisation</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #424242; font-size: 13px;">${data.organization}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #757575; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #424242; font-size: 13px;"><a href="mailto:${data.email}" style="color: #D32F2F;">${data.email}</a></td>
              </tr>
              ${data.phone ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #757575; font-size: 13px;">Téléphone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #424242; font-size: 13px;">${data.phone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #757575; font-size: 13px;">Type de besoin</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #D32F2F; font-size: 13px; font-weight: 600;">${needLabels[data.needType]}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="color: #757575; font-size: 13px; margin-bottom: 8px;">Message :</p>
              <div style="background: #f8f8f8; border-radius: 8px; padding: 16px; color: #424242; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
            </div>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #f0f0f0;">
              <a href="mailto:${data.email}" style="display: inline-block; background: #D32F2F; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600;">
                Répondre à ${data.firstName}
              </a>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #f8f8f8; border: 1px solid #e0e0e0; border-top: 0; text-align: center;">
            <p style="color: #9e9e9e; font-size: 12px; margin: 0;">
              MICA Consulting SNC · Port-au-Prince, Haïti · info@mica.ht
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: 'Invalid data' }, { status: 400 })
    }
    console.error('[Contact API]', err)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
