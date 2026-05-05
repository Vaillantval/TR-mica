import type { Metadata } from 'next'
import { Mail, MapPin, Clock, Phone } from 'lucide-react'
import Section from '@/components/ui/Section'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez MICA Consulting pour une demande de consultation en ingénierie éducative. Basés à Port-au-Prince, Haïti.',
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Port-au-Prince, Haïti',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@mica.ht',
    href: 'mailto:info@mica.ht',
  },
  {
    icon: Clock,
    label: 'Disponibilité',
    value: 'Lun–Ven · 8h00 – 17h00 (HT)',
  },
]

const faqItems = [
  {
    q: "Quel est le délai de réponse ?",
    a: "Nous répondons à toutes les demandes sous 48 heures ouvrables. Pour les projets urgents, précisez-le dans votre message.",
  },
  {
    q: "Proposez-vous des consultations gratuites ?",
    a: "Nous offrons un premier échange exploratoire gratuit de 30 minutes pour mieux comprendre vos besoins et vous orienter.",
  },
  {
    q: "Intervenez-vous hors d'Haïti ?",
    a: "Oui, MICA Consulting intervient également à l'international, notamment auprès d'organisations francophones et de la diaspora haïtienne.",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Parlons-en
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Contactez-nous</h1>
            <p className="mt-4 text-white/80 max-w-2xl text-lg">
              Vous souhaitez collaborer avec MICA Consulting ? Remplissez le formulaire ou
              écrivez-nous directement — nous vous répondons sous 48h.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main content */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl border border-gray-border p-8">
                <h2 className="text-2xl font-bold text-gray-dark mb-2">
                  Demande de consultation
                </h2>
                <p className="text-gray-medium text-sm mb-7">
                  Tous les champs marqués d'un * sont obligatoires.
                </p>
                <ContactForm />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Contact info + FAQ */}
          <div className="lg:col-span-2 space-y-6">
            <AnimateOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-border p-7">
                <h3 className="font-bold text-gray-dark mb-5">Coordonnées directes</h3>
                <ul className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    return (
                      <li key={info.label} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-medium font-medium uppercase tracking-wide mb-0.5">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-sm text-gray-dark font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm text-gray-dark font-medium">{info.value}</p>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-border p-7">
                <h3 className="font-bold text-gray-dark mb-5">Questions fréquentes</h3>
                <div className="space-y-5">
                  {faqItems.map((item) => (
                    <div key={item.q}>
                      <h4 className="text-sm font-semibold text-gray-dark mb-1.5">{item.q}</h4>
                      <p className="text-sm text-gray-medium leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <div className="bg-primary rounded-2xl p-7 text-white">
                <h3 className="font-bold mb-2">MICA Consulting SNC</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Cabinet haïtien de conseil stratégique en ingénierie éducative.
                  Management · Ingénierie · Compétences · Apprentissage
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Section>
    </>
  )
}
