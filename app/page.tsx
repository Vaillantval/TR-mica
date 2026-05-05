import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen,
  BarChart2,
  Laptop,
  ArrowRight,
  CheckCircle,
  Search,
  PenTool,
  Rocket,
  TrendingUp,
} from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'MICA Consulting — Ingénierie Éducative en Haïti',
  description:
    'Cabinet stratégique haïtien spécialisé en ingénierie pédagogique, transformation numérique des systèmes éducatifs et renforcement des capacités institutionnelles.',
}

const pillars = [
  {
    letter: 'M',
    title: 'Management',
    desc: 'Gouvernance, pilotage stratégique et conduite du changement dans les organisations éducatives.',
  },
  {
    letter: 'I',
    title: 'Ingénierie',
    desc: 'Conception pédagogique et technopédagogique appliquée aux systèmes de formation.',
  },
  {
    letter: 'C',
    title: 'Compétences',
    desc: 'Développement, évaluation et certification des compétences individuelles et collectives.',
  },
  {
    letter: 'A',
    title: 'Apprentissage',
    desc: "Optimisation des environnements d'apprentissage formels, non formels et informels.",
  },
]

const expertisePreviews = [
  {
    icon: BookOpen,
    title: 'Conseil stratégique',
    desc: "Accompagnement dans la définition de politiques éducatives, plans stratégiques et dispositifs organisationnels.",
    href: '/expertises#conseil',
  },
  {
    icon: PenTool,
    title: 'Ingénierie pédagogique',
    desc: "Conception et déploiement de formations virtuelles, hybrides, synchrones et asynchrones.",
    href: '/expertises#ingenierie',
  },
  {
    icon: BarChart2,
    title: 'Évaluation & qualité',
    desc: "Dispositifs d'évaluation des apprentissages, mécanismes d'assurance qualité et mesure d'impact.",
    href: '/expertises#evaluation',
  },
  {
    icon: Laptop,
    title: 'Transformation numérique',
    desc: "LMS, outils collaboratifs, contenus multimédias et solutions d'intelligence artificielle éducative.",
    href: '/expertises#numerique',
  },
]

const approachSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Analyse & diagnostic',
    desc: 'Analyse des besoins et diagnostic organisationnel approfondi.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Conception structurée',
    desc: 'Conception contextualisée et alignée sur les réalités du terrain.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Mise en œuvre',
    desc: 'Déploiement progressif et accompagné des solutions développées.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Amélioration continue',
    desc: 'Évaluation rigoureuse et optimisation itérative des dispositifs.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
          <div className="absolute top-1/2 -right-12 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-black/10 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p className="animate-fade-in-up text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
              Management · Ingénierie · Compétences · Apprentissage
            </p>
            <h1 className="animate-fade-in-up animation-delay-200 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Cabinet stratégique dédié à la{' '}
              <span className="text-white/80">transformation des systèmes éducatifs</span>
            </h1>
            <p className="animate-fade-in-up animation-delay-400 text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
              MICA Consulting accompagne les institutions publiques, privées et les organisations de
              développement dans la conception de dispositifs de formation efficaces, inclusifs,
              mesurables et durables.
            </p>
            <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg" variant="white">
                Demander une consultation
              </Button>
              <Link
                href="/expertises"
                className="inline-flex items-center gap-2 text-white/90 font-semibold px-6 py-4 hover:text-white transition-colors"
              >
                Découvrir nos expertises
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── 4 PILLARS ── */}
      <Section background="white">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Notre identité
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark">
              Les quatre piliers de MICA
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.letter} delay={i * 0.1}>
              <div className="group border border-gray-border rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors">
                    {p.letter}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-dark mb-3">{p.title}</h3>
                <p className="text-sm text-gray-medium leading-relaxed">{p.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* ── EXPERTISE PREVIEW ── */}
      <Section background="light">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Ce que nous faisons
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark">
              {"Nos domaines d'intervention"}
            </h2>
            <p className="mt-4 text-gray-medium max-w-2xl mx-auto">
              Une expertise pluridisciplinaire au service de la transformation éducative.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {expertisePreviews.map((e, i) => {
            const Icon = e.icon
            return (
              <AnimateOnScroll key={e.title} delay={i * 0.1}>
                <Link
                  href={e.href}
                  className="group flex gap-5 bg-white rounded-xl p-7 border border-gray-border hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-dark mb-2 group-hover:text-primary transition-colors">
                      {e.title}
                    </h3>
                    <p className="text-sm text-gray-medium leading-relaxed">{e.desc}</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <AnimateOnScroll>
            <Button href="/expertises" variant="secondary" size="lg">
              Voir toutes nos expertises
              <ArrowRight size={18} />
            </Button>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* ── APPROACH ── */}
      <Section background="white">
        <div className="text-center mb-14">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Notre méthode
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark">
              Une approche systémique intégrée
            </h2>
            <p className="mt-4 text-gray-medium max-w-2xl mx-auto">
              MICA Consulting articule stratégie, ingénierie et technologie dans une logique
              cohérente, en privilégiant la co-construction et le transfert de compétences.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <AnimateOnScroll key={step.number} delay={i * 0.1}>
                <div className="relative text-center p-6">
                  {i < approachSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-gray-border" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-5">
                    <Icon size={26} className="text-primary" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-medium leading-relaxed">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </Section>

      {/* ── WHY MICA ── */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Pourquoi nous choisir
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark mb-6">
              Notre valeur ajoutée
            </h2>
            <p className="text-gray-medium leading-relaxed mb-8">
              MICA Consulting se distingue par une expertise rare qui conjugue rigueur académique,
              ancrage local et ouverture internationale — au service du développement éducatif haïtien.
            </p>
            <ul className="space-y-4">
              {[
                'Une approche systémique du management éducatif',
                'Une articulation forte entre stratégie, ingénierie et numérique',
                'Une orientation résultats et impact mesurable',
                'Une gouvernance collaborative et responsable',
                'Une expertise enracinée dans les réalités haïtiennes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-dark text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/a-propos" variant="primary" size="md">
                En savoir plus sur MICA
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '4', label: 'Associés experts', sub: 'Gouvernance égalitaire' },
                { value: '360°', label: 'Vision intégrée', sub: 'Stratégie & technologie' },
                { value: '3', label: 'Secteurs couverts', sub: 'Formel, non-formel, informel' },
                { value: '100%', label: 'Orienté impact', sub: 'Résultats mesurables' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 border border-gray-border text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-dark">{stat.label}</div>
                  <div className="text-xs text-gray-medium mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* ── CTA BANNER ── */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {"Prêt à transformer votre système éducatif ?"}
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Contactez MICA Consulting et découvrez comment notre expertise peut soutenir vos
              projets de formation et de renforcement institutionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="white">
                Demander une consultation
              </Button>
              <Link
                href="/expertises"
                className="inline-flex items-center gap-2 text-white border-2 border-white/40 font-semibold px-8 py-4 rounded hover:bg-white/10 transition-colors"
              >
                Nos expertises
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
