import type { Metadata } from 'next'
import { Building2, GraduationCap, Globe, Briefcase, Users, Heart } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Partenariats',
  description:
    'MICA Consulting collabore avec des institutions publiques, universités, organisations internationales et acteurs privés pour bâtir des partenariats durables en éducation.',
}

const partnerCategories = [
  {
    icon: Building2,
    title: 'Institutions publiques',
    desc: "Ministères, directions nationales et institutions gouvernementales œuvrant dans le secteur de l'éducation et de la formation professionnelle.",
    examples: ["Ministère de l'Éducation Nationale", "Directions régionales", "Organismes publics de formation"],
  },
  {
    icon: GraduationCap,
    title: 'Universités',
    desc: "Établissements d'enseignement supérieur engagés dans la modernisation de leurs curricula, de leurs pratiques pédagogiques et de leurs systèmes d'évaluation.",
    examples: ["Universités haïtiennes", "Facultés spécialisées", "Centres de recherche en éducation"],
  },
  {
    icon: Globe,
    title: 'Organisations internationales',
    desc: "Organisations multilatérales et agences de développement intervenant dans les secteurs de l'éducation, de la formation et du renforcement institutionnel.",
    examples: ["Banque Mondiale", "USAID", "OIF", "ONG internationales"],
  },
  {
    icon: Briefcase,
    title: 'Projets de développement',
    desc: "Projets et programmes de développement qui intègrent des composantes de formation, de renforcement des capacités ou de transformation éducative.",
    examples: ["Projets de développement rural", "Programmes de résilience", "Initiatives sectorielles"],
  },
  {
    icon: Users,
    title: 'Acteurs privés du secteur éducatif',
    desc: "Entreprises, fondations et organisations de la société civile qui investissent dans la formation, le développement des compétences et l'innovation pédagogique.",
    examples: ["Entreprises formatrices", "Fondations éducatives", "EdTech locales"],
  },
]

const philosophy = [
  {
    title: 'Confiance',
    desc: "Nous construisons des relations de partenariat fondées sur la transparence, la communication ouverte et l'intégrité professionnelle.",
  },
  {
    title: 'Complémentarité',
    desc: "Nous cherchons des partenaires dont les expertises complètent les nôtres pour offrir des solutions plus complètes et efficaces.",
  },
  {
    title: 'Impact',
    desc: "Chaque partenariat est évalué sur sa capacité à générer un impact éducatif mesurable et durable pour les bénéficiaires.",
  },
]

export default function PartenariatsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-gray-light py-16 border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Nos collaborations
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-dark">Partenariats</h1>
            <p className="mt-4 text-gray-medium max-w-2xl text-lg">
              Nous bâtissons des partenariats durables fondés sur la confiance, la complémentarité
              et l'impact — au service du développement éducatif en Haïti.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intro */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
              <Heart size={28} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-dark mb-6">
              Des partenariats au service de la transformation
            </h2>
            <p className="text-gray-medium leading-relaxed text-lg">
              MICA Consulting croit profondément que la transformation des systèmes éducatifs est
              un effort collectif. Nous collaborons avec des acteurs variés — publics, privés et
              internationaux — pour démultiplier notre impact et apporter des solutions à la mesure
              des défis éducatifs haïtiens.
            </p>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* Partner categories */}
      <Section background="light">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Avec qui nous travaillons
            </p>
            <h2 className="text-3xl font-bold text-gray-dark">Types de partenaires</h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnerCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <AnimateOnScroll key={cat.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-gray-border p-7 hover:border-primary hover:shadow-md transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-dark mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-medium leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-xs bg-red-50 text-primary px-3 py-1 rounded-full font-medium"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </Section>

      {/* Philosophy */}
      <Section background="light">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Notre philosophie
            </p>
            <h2 className="text-3xl font-bold text-gray-dark">Ce qui fonde nos partenariats</h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophy.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 0.1}>
              <div className="bg-white rounded-xl border border-gray-border p-8 text-center hover:border-primary hover:shadow-md transition-all">
                <div className="text-4xl font-bold text-primary/20 mb-3">0{i + 1}</div>
                <h3 className="text-xl font-bold text-gray-dark mb-3">{p.title}</h3>
                <p className="text-sm text-gray-medium leading-relaxed">{p.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="mt-10 bg-primary rounded-2xl p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              Intéressé par un partenariat ?
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Notre objectif est de bâtir des partenariats durables qui créent une valeur réelle
              pour les systèmes éducatifs haïtiens. Contactez-nous pour en discuter.
            </p>
            <Button href="/contact" size="lg" variant="white">
              Nous contacter
            </Button>
          </div>
        </AnimateOnScroll>
      </Section>
    </>
  )
}
