'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const schema = z.object({
  firstName: z.string().min(2, 'Prénom requis (min. 2 caractères)'),
  lastName: z.string().min(2, 'Nom requis (min. 2 caractères)'),
  organization: z.string().optional(),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  needType: z.enum(['conseil', 'ingenierie', 'evaluation', 'transformation', 'appui', 'autre'], {
    error: 'Veuillez sélectionner un type de besoin',
  }),
  message: z.string().min(20, 'Message trop court (min. 20 caractères)'),
  honeypot: z.string().max(0),
})

type FormData = z.infer<typeof schema>

type Status = 'idle' | 'submitting' | 'success' | 'error'

const needOptions = [
  { value: 'conseil', label: 'Conseil stratégique en éducation' },
  { value: 'ingenierie', label: 'Ingénierie pédagogique' },
  { value: 'evaluation', label: 'Évaluation et assurance qualité' },
  { value: 'transformation', label: 'Transformation numérique' },
  { value: 'appui', label: 'Renforcement des capacités' },
  { value: 'autre', label: 'Autre besoin' },
]

const fieldClass =
  'w-full border border-gray-border rounded-lg px-4 py-3 text-sm text-gray-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-300'
const labelClass = 'block text-sm font-medium text-gray-dark mb-1.5'
const errorClass = 'text-xs text-red-600 mt-1'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 border border-green-200 bg-green-50 rounded-2xl">
        <CheckCircle size={48} className="text-green-600 mb-4" />
        <h3 className="text-xl font-bold text-gray-dark mb-2">Message envoyé avec succès !</h3>
        <p className="text-gray-medium text-sm mb-6">
          Merci pour votre message. L'équipe MICA Consulting vous répondra dans les plus brefs délais,
          généralement sous 48 heures ouvrables.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-primary font-semibold text-sm hover:underline"
        >
          Envoyer un nouveau message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot anti-spam */}
      <input type="text" {...register('honeypot')} className="hidden" aria-hidden="true" tabIndex={-1} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Prénom *</label>
          <input
            {...register('firstName')}
            placeholder="Jean-Baptiste"
            className={fieldClass}
          />
          {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Nom *</label>
          <input
            {...register('lastName')}
            placeholder="Dupont"
            className={fieldClass}
          />
          {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Organisation / Institution</label>
        <input
          {...register('organization')}
          placeholder="Nom de votre organisation (optionnel)"
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email *</label>
          <input
            {...register('email')}
            type="email"
            placeholder="vous@exemple.com"
            className={fieldClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Téléphone</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+509 XXXX XXXX (optionnel)"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Type de besoin *</label>
        <select {...register('needType')} className={fieldClass}>
          <option value="">-- Sélectionnez votre besoin --</option>
          {needOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.needType && <p className={errorClass}>{errors.needType.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Décrivez votre projet, vos besoins ou vos questions..."
          className={`${fieldClass} resize-none`}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle size={18} className="text-red-600 shrink-0" />
          <p className="text-sm text-red-700">
            Une erreur est survenue. Veuillez réessayer ou nous écrire directement à{' '}
            <a href="mailto:info@mica.ht" className="font-semibold underline">
              info@mica.ht
            </a>
            .
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'submitting'}
        className="w-full"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send size={18} />
            Envoyer la demande
          </>
        )}
      </Button>

      <p className="text-xs text-gray-medium text-center">
        Vos informations sont confidentielles et ne seront jamais partagées.
      </p>
    </form>
  )
}
