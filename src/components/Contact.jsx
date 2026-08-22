import React, { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import Reveal from './Reveal'

// 1. Cria uma conta gratuita em https://formspree.io
// 2. Cria um formulário e copia o "Form ID" (algo como "abcdwxyz")
// 3. Substitui o valor abaixo por esse ID — sem isto o formulário não envia nada.
const FORMSPREE_FORM_ID = 'SEU_FORM_ID_AQUI'
const FORM_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`

const contactLinks = [
  { icon: Mail, label: 'jessicaclcunha03@gmail.com', href: 'mailto:jessicaclcunha03@gmail.com' },
  { icon: Phone, label: '+351 933 666 802', href: 'tel:+351933666802' },
  { icon: MapPin, label: 'Ponte de Lima, Viana do Castelo', href: null },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (FORMSPREE_FORM_ID === 'SEU_FORM_ID_AQUI') {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] rounded-full blur-3xl animate-pulse-soft" style={{ backgroundColor: 'var(--accent-soft)' }} />

      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-10">
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>06 · Contacto</span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-2 mb-2" style={{ color: 'var(--text-primary)' }}>Vamos trabalhar juntos</h2>
            <p className="max-w-lg mx-auto text-sm" style={{ color: 'var(--text-secondary)' }}>
              Disponível para novas oportunidades em frontend — contacte-me diretamente ou pelo formulário.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Coluna esquerda: contactos compactos + redes sociais */}
          <Reveal direction="left" delay={80}>
            <div className="p-6 rounded-2xl border h-full flex flex-col justify-between" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
              <ul className="space-y-3">
                {contactLinks.map(({ icon: Icon, label, href }) => {
                  const Tag = href ? 'a' : 'div'
                  return (
                    <li key={label}>
                      <Tag
                        href={href || undefined}
                        className="flex items-center gap-3 text-sm hover-lift rounded-xl p-2 -m-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
                          <Icon size={16} />
                        </span>
                        {label}
                      </Tag>
                    </li>
                  )
                })}
              </ul>

              <div className="flex gap-3 mt-6">
                <a
                  href="https://github.com/jessicaclcunha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border text-sm transition-transform hover:scale-105"
                  style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/jessicaclcunha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border text-sm transition-transform hover:scale-105"
                  style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          {/* Coluna direita: formulário compacto */}
          <Reveal direction="right" delay={140}>
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl border space-y-3"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
            >
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="O seu nome"
                  className="w-full px-4 py-2.5 rounded-xl outline-none text-sm transition-all focus:scale-[1.01]"
                  style={{ backgroundColor: 'var(--bg-surface-2)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="O seu email"
                  className="w-full px-4 py-2.5 rounded-xl outline-none text-sm transition-all focus:scale-[1.01]"
                  style={{ backgroundColor: 'var(--bg-surface-2)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                />
              </div>
              <textarea
                name="message"
                rows="3"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Escreva a sua mensagem..."
                className="w-full px-4 py-2.5 rounded-xl outline-none text-sm transition-all focus:scale-[1.01] resize-none"
                style={{ backgroundColor: 'var(--bg-surface-2)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-xl font-medium text-sm transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60"
                style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
              >
                {status === 'sending' && <Loader2 size={16} className="animate-spin" />}
                {status === 'sending' ? 'A enviar...' : 'Enviar mensagem'}
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-text)' }}>
                  <CheckCircle2 size={14} /> Mensagem enviada! Respondo assim que possível.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-1.5 text-xs" style={{ color: '#D0524A' }}>
                  <AlertCircle size={14} />
                  Não foi possível enviar. Escreve diretamente para jessicaclcunha03@gmail.com.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <p className="text-center text-xs font-mono mt-8" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Jéssica Cunha
        </p>
      </div>
    </section>
  )
}

export default Contact
