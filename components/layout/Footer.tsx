import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

const pages = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/expertises', label: 'Expertises' },
  { href: '/methodologie', label: 'Méthodologie' },
  { href: '/partenariats', label: 'Partenariats' },
  { href: '/contact', label: 'Contact' },
]

const expertises = [
  { href: '/expertises#conseil', label: 'Conseil stratégique' },
  { href: '/expertises#curricula', label: 'Développement curricula' },
  { href: '/expertises#ingenierie', label: 'Ingénierie pédagogique' },
  { href: '/expertises#evaluation', label: 'Évaluation & qualité' },
  { href: '/expertises#numerique', label: 'Transformation numérique' },
  { href: '/expertises#appui', label: 'Renforcement capacités' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-gray.jpeg"
                alt="MICA Consulting"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="font-bold text-white tracking-widest text-sm uppercase">
                MICA Consulting
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Cabinet haïtien de conseil stratégique en ingénierie éducative et transformation
              des systèmes de formation.
            </p>
            <p className="mt-4 text-xs text-gray-400 uppercase tracking-wider font-semibold">
              Management · Ingénierie · Compétences · Apprentissage
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Expertises
            </h3>
            <ul className="space-y-2">
              {expertises.map((e) => (
                <li key={e.href}>
                  <Link
                    href={e.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">Port-au-Prince, Haïti</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a
                  href="mailto:info@mica.ht"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@mica.ht
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                Demander une consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MICA Consulting SNC — Tous droits réservés
          </p>
          <p className="text-xs text-gray-600">
            Port-au-Prince, Haïti
          </p>
        </div>
      </div>
    </footer>
  )
}
