import type { Metadata } from 'next'
import {
  BookOpen,
  PenTool,
  BarChart2,
  Laptop,
  Users,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Expertises',
  description:
    "Découvrez les domaines d'intervention de MICA Consulting : conseil stratégique, ingénierie pédagogique, évaluation, transformation numérique et renforcement des capacités.",
}

const expertises = [
  {
    id: 'conseil',
    icon: BookOpen,
    title: 'Conseil stratégique en éducation',
    intro:
      "Accompagnement des institutions dans la définition de leurs politiques éducatives, de leurs plans stratégiques et de leurs dispositifs organisationnels.",
    items: [
      "Conception et développement de curricula",
      "Programmes de formation",
      "Référentiels de compétences",
      "Parcours certifiants",
      "Alignement pédagogique et institutionnel",
    ],
  },
  {
    id: 'ingenierie',
    icon: PenTool,
    title: 'Ingénierie pédagogique & technopédagogique',
    intro:
      "Conception et déploiement de formations adaptées aux contextes et aux publics cibles, en exploitant les leviers du numérique éducatif.",
    items: [
      "Formations virtuelles synchrones",
      "Formations virtuelles asynchrones",
      "Formations hybrides",
      "Formations comodales",
      "Scénarisation pédagogique",
    ],
  },
  {
    id: 'evaluation',
    icon: BarChart2,
    title: 'Évaluation et assurance qualité',
    intro:
      "Mise en place de mécanismes rigoureux pour évaluer les apprentissages, garantir la qualité des dispositifs et mesurer leur impact réel.",
    items: [
      "Dispositifs d'évaluation des apprentissages",
      "Mécanismes d'assurance qualité",
      "Indicateurs de performance",
      "Mesure d'impact éducatif",
      "Audits pédagogiques",
    ],
  },
  {
    id: 'numerique',
    icon: Laptop,
    title: 'Transformation numérique des systèmes éducatifs',
    intro:
      "Accompagnement dans l'adoption et le déploiement des technologies éducatives adaptées aux contextes et aux infrastructures disponibles.",
    items: [
      "LMS et LXP",
      "Outils collaboratifs",
      "Contenus multimédias",
      "Solutions d'intelligence artificielle éducative",
      "Tableaux de bord décisionnels",
    ],
  },
  {
    id: 'curricula',
    icon: GraduationCap,
    title: 'Développement de curricula',
    intro:
      "Conception de programmes de formation alignés sur les référentiels de compétences, les standards sectoriels et les besoins des apprenants.",
    items: [
      "Analyse des besoins en formation",
      "Conception de référentiels de compétences",
      "Développement de programmes modulaires",
      "Certification et accréditation",
      "Révision curriculaire",
    ],
  },
  {
    id: 'appui',
    icon: Users,
    title: 'Appui opérationnel & renforcement des capacités',
    intro:
      "Accompagnement terrain des équipes pédagogiques et des décideurs pour garantir l'appropriation durable des solutions mises en place.",
    items: [
      "Assistance technique",
      "Formation de formateurs",
      "Formation de cadres pédagogiques",
      "Accompagnement des décideurs",
      "Coaching et mentorat",
    ],
  },
]

export default function ExpertisesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-gray-light py-16 border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Ce que nous faisons
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-dark">
              {"Nos domaines d'expertise"}
            </h1>
            <p className="mt-4 text-gray-medium max-w-2xl text-lg">
              Six domaines d'intervention complémentaires pour accompagner la transformation complète
              de vos systèmes éducatifs et de formation.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Quick nav */}
      <div className="bg-white border-b border-gray-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {expertises.map((e) => (
              <a
                key={e.id}
                href={`#${e.id}`}
                className="shrink-0 px-4 py-2 text-xs font-medium text-gray-medium hover:text-primary hover:bg-gray-light rounded-full transition-colors whitespace-nowrap"
              >
                {e.title.split(' ')[0]} {e.title.split(' ')[1]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Expertises */}
      {expertises.map((e, i) => {
        const Icon = e.icon
        const isEven = i % 2 === 0
        return (
          <Section key={e.id} id={e.id} background={isEven ? 'white' : 'light'}>
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                !isEven ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <AnimateOnScroll className={!isEven ? 'lg:col-start-2' : ''}>
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  <Icon size={28} className="text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-dark mb-4">{e.title}</h2>
                <p className="text-gray-medium leading-relaxed mb-6">{e.intro}</p>
                <ul className="space-y-2">
                  {e.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <ArrowRight size={14} className="text-primary shrink-0" />
                      <span className="text-sm text-gray-dark">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="md">
                    Discuter de ce besoin
                  </Button>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll
                delay={0.15}
                className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}
              >
                <div className="rounded-2xl overflow-hidden bg-primary/5 border border-gray-border aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-10">
                    <Icon size={64} className="text-primary/20 mx-auto mb-4" />
                    <p className="text-gray-medium text-sm italic">
                      {e.title}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </Section>
        )
      })}

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-white mb-4">
              Un besoin spécifique ? Parlons-en.
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Nos expertises peuvent être combinées pour répondre aux enjeux complexes de votre
              organisation. Contactez-nous pour un diagnostic personnalisé.
            </p>
            <Button href="/contact" size="lg" variant="white">
              Demander une consultation gratuite
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
