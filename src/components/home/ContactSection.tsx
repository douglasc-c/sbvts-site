import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import type { ValueItem } from '../../types/home'

const CONTACT_EMAIL = String(import.meta.env.VITE_CONTACT_EMAIL ?? '').trim()
const EMAILJS_SERVICE_ID = String(import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '').trim()
const EMAILJS_TEMPLATE_ID = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '').trim()
const EMAILJS_PUBLIC_KEY = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '').trim()

type ContactSectionProps = {
  values: ValueItem[]
}

type SubmitStatus = {
  tone: 'success' | 'error'
  message: string
}

type ContactLead = {
  name: string
  lastName: string
  email: string
  phone: string
  notes: string
  createdAt: string
}

export function ContactSection({ values }: ContactSectionProps) {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const currentForm = event.currentTarget
    const formData = new FormData(currentForm)
    const name = String(formData.get('name') ?? '').trim()
    const lastName = String(formData.get('lastName') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim().toLowerCase()
    const phone = String(formData.get('phone') ?? '').trim()
    const notes = String(formData.get('notes') ?? '').trim()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneDigits = phone.replace(/\D/g, '')

    if (!name || !lastName || !email || !phone) {
      setSubmitStatus({ tone: 'error', message: 'Preencha nome, sobrenome, email e telefone.' })
      return
    }

    if (!emailPattern.test(email)) {
      setSubmitStatus({ tone: 'error', message: 'Digite um email valido.' })
      return
    }

    if (phoneDigits.length < 10) {
      setSubmitStatus({ tone: 'error', message: 'Digite um telefone valido com DDD.' })
      return
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitStatus({
        tone: 'error',
        message: 'Configuracao de email ausente. Contate o administrador.',
      })
      return
    }

    const contactLead: ContactLead = {
      name,
      lastName,
      email,
      phone,
      notes,
      createdAt: new Date().toISOString(),
    }
    const fullName = `${name} ${lastName}`.trim()
    const message = [
      'Novo contato pelo site Sobreviventes MC',
      '',
      `Nome: ${fullName}`,
      `Email: ${email}`,
      `Telefone: ${phone}`,
      `Notas: ${notes || 'Sem notas'}`,
      `Enviado em: ${contactLead.createdAt}`,
    ].join('\n')
    const subject = `Novo contato - ${fullName}`

    setIsSending(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: CONTACT_EMAIL,
          reply_to: email,
          subject,
          title: subject,
          message,
          from_name: fullName,
          from_email: email,
          name: fullName,
          first_name: name,
          last_name: lastName,
          email,
          time: new Date(contactLead.createdAt).toLocaleString('pt-BR'),
          phone,
          notes: notes || 'Sem notas',
          created_at: contactLead.createdAt,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )

      const savedLeadsRaw = window.localStorage.getItem('sbvts-contact-leads')
      const savedLeads = savedLeadsRaw ? (JSON.parse(savedLeadsRaw) as ContactLead[]) : []
      const nextLeads = [contactLead, ...savedLeads].slice(0, 100)
      window.localStorage.setItem('sbvts-contact-leads', JSON.stringify(nextLeads))

      currentForm.reset()
      setSubmitStatus({ tone: 'success', message: 'Mensagem enviada com sucesso!' })
    } catch {
      setSubmitStatus({ tone: 'error', message: 'Nao foi possivel enviar. Tente novamente.' })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="home-contact" id="membership">
      <article className="home-contact-form-card">
        <p className="home-kicker">Dúvidas?</p>
        <h3>Entre em contato para saber mais</h3>

        <form className="home-contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" name="name" required />
          <input type="text" placeholder="Sobrenome" name="lastName" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="text" placeholder="Telefone" name="phone" required inputMode="tel" />
          <textarea placeholder="Notas" name="notes" rows={4} />
          <button type="submit" className="home-primary-button home-full-width-button" disabled={isSending}>
            {isSending ? 'Enviando...' : 'Enviar'}
          </button>
          {submitStatus ? (
            <p className={`home-contact-feedback is-${submitStatus.tone}`} role="status" aria-live="polite">
              {submitStatus.message}
            </p>
          ) : null}
        </form>
      </article>

      <article className="home-values-card">
        <p className="home-kicker">Por que nós</p>
        <h3>Ontem é história, amanhã é um conto.</h3>

        <ul>
          {values.map((value) => (
            <li key={value.title}>
              <strong>{value.title}</strong>
              <p>{value.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}
