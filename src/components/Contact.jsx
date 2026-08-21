import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-inverse)' }}>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent-soft)' }} />

      <div className="relative max-w-5xl mx-auto px-6" style={{ color: 'var(--bg-canvas)' }}>
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--brass)' }}>06 · Contacto</span>
          <h2 className="font-display font-semibold text-4xl mt-3 mb-4">Vamos trabalhar juntos</h2>
          <p className="max-w-xl mx-auto opacity-70">
            Estou a terminar o mestrado e disponível para novas oportunidades em frontend.
            Contacte-me diretamente ou através das redes abaixo.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          <a href="mailto:jessicaclcunha03@gmail.com" className="text-center p-8 rounded-2xl border transition-all hover:opacity-90" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--accent-soft)' }}>
              <Mail className="w-6 h-6" style={{ color: 'var(--accent-text)' }} />
            </div>
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-sm opacity-60 break-all">jessicaclcunha03@gmail.com</p>
          </a>
          <a href="tel:+351933666802" className="text-center p-8 rounded-2xl border transition-all hover:opacity-90" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--accent-soft)' }}>
              <Phone className="w-6 h-6" style={{ color: 'var(--accent-text)' }} />
            </div>
            <h3 className="font-medium mb-1">Telefone</h3>
            <p className="text-sm opacity-60">+351 933 666 802</p>
          </a>
          <div className="text-center p-8 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--accent-soft)' }}>
              <MapPin className="w-6 h-6" style={{ color: 'var(--accent-text)' }} />
            </div>
            <h3 className="font-medium mb-1">Localização</h3>
            <p className="text-sm opacity-60">Ponte de Lima, Viana do Castelo</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-14">
          <a
            href="https://github.com/jessicaclcunha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border transition-colors hover:opacity-80 text-sm"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/jessicaclcunha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border transition-colors hover:opacity-80 text-sm"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <form className="p-8 rounded-2xl border space-y-4 max-w-2xl mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5 opacity-80">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="O seu nome"
              className="w-full px-4 py-3 rounded-xl outline-none transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: 'inherit' }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5 opacity-80">Email</label>
            <input
              type="email"
              id="email"
              placeholder="O seu email"
              className="w-full px-4 py-3 rounded-xl outline-none transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: 'inherit' }}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5 opacity-80">Mensagem</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Escreva a sua mensagem..."
              className="w-full px-4 py-3 rounded-xl outline-none transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: 'inherit' }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
          >
            Enviar mensagem
          </button>
        </form>

        <p className="text-center text-xs font-mono mt-14 opacity-40">
          © {new Date().getFullYear()} Jéssica Cunha — feito com React &amp; Tailwind CSS
        </p>
      </div>
    </section>
  )
}

export default Contact
