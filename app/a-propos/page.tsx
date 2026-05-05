import type { Metadata } from 'next'
import { CheckCircle, Target, Eye, Users, Scale } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'À Propos',
  description:
    'Découvrez MICA Consulting, cabinet haïtien de conseil stratégique en ingénierie éducative, constitué en SNC avec une gouvernance égalitaire entre ses quatre associés.',
}

const missionPoints = [
  'Efficaces dans leurs résultats et leur déploiement',
  'Inclusifs pour tous les publics et contextes',
  'Mesurables grâce à des indicateurs de performance clairs',
  'Durables dans leur impact institutionnel et humain',
  'Alignés sur les besoins des apprenants et des organisations',
]

const visionPoints = [
  "Devenir un acteur de référence en ingénierie éducative en Haïti",
  "Accompagner la modernisation et la digitalisation des systèmes de formation",
  "Contribuer au renforcement durable des capacités institutionnelles",
]

const sectors = [
  {
    title: "Éducation formelle",
    desc: "Écoles, universités, institutions publiques et privées",
    icon: "🏛️",
  },
  {
    title: "Éducation non formelle",
    desc: "Programmes de formation et renforcement de capacités",
    icon: "📚",
  },
  {
    title: "Éducation informelle",
    desc: "Apprentissages communautaires, sociaux et professionnels",
    icon: "🌍",
  },
]

export default function AProposPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-gray-light py-16 border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Qui sommes-nous
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-dark">À Propos</h1>
            <p className="mt-4 text-gray-medium max-w-2xl text-lg">
              Cabinet haïtien de conseil stratégique en ingénierie éducative, au service des
              systèmes de formation en Haïti et à l'international.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Presentation */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-gray-dark mb-6">Présentation générale</h2>
            <div className="space-y-4 text-gray-medium leading-relaxed">
              <p>
                MICA Consulting est constituée sous la forme d'une{' '}
                <strong className="text-gray-dark">Société en Nom Collectif (SNC)</strong>, régie par le
                Code de commerce haïtien. Implantée à Port-au-Prince, la société repose sur une
                gouvernance égalitaire entre ses quatre associés, qui assument solidairement les
                responsabilités liées à la structure.
              </p>
              <p>
                L'acronyme MICA reflète notre identité profonde :{' '}
                <strong className="text-gray-dark">
                  Management, Ingénierie, Compétences et Apprentissage
                </strong>{' '}
                — quatre piliers qui structurent l'ensemble de nos interventions et guident notre
                approche du conseil en éducation.
              </p>
              <p>
                Le cabinet intervient principalement dans le secteur de l'Éducation, couvrant
                l'ensemble du spectre formel, non formel et informel.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="space-y-4">
              {sectors.map((s) => (
                <div
                  key={s.title}
                  className="flex gap-4 p-5 border border-gray-border rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-2xl shrink-0">{s.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-dark mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-medium">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* Mission */}
      <Section background="light" id="mission">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <Target size={28} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-dark mb-4">Notre mission</h2>
            <p className="text-gray-medium leading-relaxed mb-6">
              Soutenir le développement de systèmes de formation au service des individus, des
              institutions et des organisations haïtiennes, en Haïti et à l'international.
            </p>
            <ul className="space-y-3">
              {missionPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-dark text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="bg-primary rounded-2xl p-10 text-white">
              <Eye size={32} className="mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4">Notre vision stratégique</h3>
              <ul className="space-y-4">
                {visionPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-white/90 text-sm leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* Governance */}
      <Section background="white" id="gouvernance">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Scale size={28} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-dark">Notre gouvernance</h2>
            <p className="mt-4 text-gray-medium max-w-xl mx-auto">
              Un modèle fondé sur l'égalité, la responsabilité partagée et la prise de décision
              collective.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              title: 'Égalité stricte',
              desc: 'Quatre associés à parts égales, chacun portant la même responsabilité.',
            },
            {
              icon: Scale,
              title: 'Répartition équitable',
              desc: '25% des résultats pour chaque associé, garantissant une équité totale.',
            },
            {
              icon: Target,
              title: 'Gouvernance collective',
              desc: 'Les décisions stratégiques sont prises en commun, sans hiérarchie formelle.',
            },
            {
              icon: CheckCircle,
              title: 'Décisions unanimes',
              desc: "L'unanimité des associés est requise pour toute décision structurante.",
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <AnimateOnScroll key={item.title} delay={i * 0.1}>
                <div className="border border-gray-border rounded-xl p-7 text-center hover:border-primary hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-medium leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        <AnimateOnScroll>
          <div className="mt-10 bg-gray-light rounded-xl p-8 text-center border border-gray-border">
            <p className="text-gray-dark font-medium italic">
              "Ce modèle assure cohérence, responsabilité partagée et stabilité décisionnelle —
              les fondements d'un cabinet de conseil fiable."
            </p>
          </div>
        </AnimateOnScroll>
      </Section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-white mb-4">
              Travaillons ensemble
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Contactez-nous pour discuter de vos projets et découvrir comment MICA Consulting
              peut vous accompagner.
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
