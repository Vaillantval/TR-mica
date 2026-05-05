import type { Metadata } from 'next'
import { Search, PenTool, Rocket, TrendingUp, CheckCircle } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Méthodologie',
  description:
    "Découvrez l'approche systémique intégrée de MICA Consulting : analyse, conception, mise en œuvre et amélioration continue pour transformer les systèmes éducatifs.",
}

const phases = [
  {
    number: '01',
    icon: Search,
    title: 'Analyse des besoins et diagnostic organisationnel',
    desc: "Toute intervention commence par une compréhension approfondie du contexte, des acteurs et des enjeux. Nous réalisons un diagnostic organisationnel complet pour identifier les leviers de transformation et définir des priorités réalistes.",
    actions: [
      "Cartographie des parties prenantes",
      "Analyse des besoins en formation",
      "Diagnostic de l'existant",
      "Identification des contraintes et opportunités",
    ],
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Conception structurée et contextualisée',
    desc: "Sur la base du diagnostic, nous concevons des solutions sur mesure, ancrées dans les réalités du terrain et alignées sur les standards internationaux en ingénierie éducative.",
    actions: [
      "Co-construction avec les équipes locales",
      "Conception pédagogique et curriculaire",
      "Élaboration de référentiels et outils",
      "Validation avec les parties prenantes",
    ],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Mise en œuvre progressive et accompagnée',
    desc: "Le déploiement est progressif, rythmé et accompagné, pour favoriser l'appropriation des solutions et minimiser les résistances au changement.",
    actions: [
      "Plan de déploiement par phases",
      "Formation et accompagnement des équipes",
      "Suivi de la mise en œuvre",
      "Ajustements en temps réel",
    ],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Évaluation et amélioration continue',
    desc: "L'amélioration continue est au cœur de notre approche. Chaque intervention fait l'objet d'une évaluation rigoureuse pour mesurer l'impact et capitaliser sur les apprentissages.",
    actions: [
      "Évaluation des résultats et de l'impact",
      "Collecte et analyse des données",
      "Rapport d'impact et recommandations",
      "Itérations et optimisations",
    ],
  },
]

const principles = [
  "Co-construction et participation active des parties prenantes",
  "Transfert de compétences pour une autonomie durable",
  "Contextualisation aux réalités locales haïtiennes",
  "Alignement sur les standards internationaux",
  "Orientation résultats avec des indicateurs mesurables",
  "Flexibilité et adaptabilité aux contraintes du terrain",
]

export default function MetodologiePage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-gray-light py-16 border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Notre façon de travailler
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-dark">Méthodologie</h1>
            <p className="mt-4 text-gray-medium max-w-2xl text-lg">
              Une approche systémique intégrée qui articule stratégie, ingénierie et technologie
              dans une logique cohérente et orientée impact.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intro */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-gray-dark mb-6">
              Une approche systémique intégrée
            </h2>
            <p className="text-gray-medium leading-relaxed text-lg">
              MICA Consulting articule stratégie, ingénierie et technologie dans une logique
              cohérente. Notre approche privilégie la{' '}
              <strong className="text-gray-dark">co-construction</strong> et le{' '}
              <strong className="text-gray-dark">transfert de compétences</strong>, afin de garantir
              l'appropriation durable des solutions mises en place.
            </p>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* 4 Phases */}
      <Section background="light">
        <div className="text-center mb-14">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Notre processus
            </p>
            <h2 className="text-3xl font-bold text-gray-dark">Les 4 phases de notre intervention</h2>
          </AnimateOnScroll>
        </div>

        <div className="space-y-8">
          {phases.map((phase, i) => {
            const Icon = phase.icon
            return (
              <AnimateOnScroll key={phase.number} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-gray-border overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Number + icon */}
                    <div className="bg-primary/5 p-8 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-gray-border">
                      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-3 relative">
                        <Icon size={30} className="text-primary" />
                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                      </div>
                      <p className="text-4xl font-bold text-primary/20">{phase.number}</p>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:col-span-2">
                      <h3 className="text-xl font-bold text-gray-dark mb-3">{phase.title}</h3>
                      <p className="text-gray-medium leading-relaxed mb-5">{phase.desc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {phase.actions.map((action) => (
                          <li key={action} className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-primary shrink-0" />
                            <span className="text-sm text-gray-dark">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </Section>

      {/* Principles */}
      <Section background="white">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Ce qui nous guide
            </p>
            <h2 className="text-3xl font-bold text-gray-dark">Nos principes directeurs</h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {principles.map((p, i) => (
            <AnimateOnScroll key={i} delay={i * 0.08}>
              <div className="flex items-start gap-3 p-5 border border-gray-border rounded-xl hover:border-primary transition-colors">
                <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-dark leading-relaxed">{p}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Contactez MICA Consulting pour un premier échange et découvrez comment notre approche
              peut s'adapter à vos besoins spécifiques.
            </p>
            <Button href="/contact" size="lg" variant="white">
              Demander une consultation
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
