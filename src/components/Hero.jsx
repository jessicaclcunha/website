import React from 'react'
import { Mail, Github, Linkedin, ArrowDown, MapPin } from 'lucide-react'
import Reveal from './Reveal'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
      style={{ backgroundColor: 'var(--bg-canvas)', color: 'var(--text-primary)' }}
    >
      {/* Malha de fundo — referência visual à especialização em Computação Gráfica.
          var(--border-strong) faz com que se adapte sozinha ao tema. */}
      <div
        className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)] animate-fade-in"
        style={{
          backgroundImage:
            'linear-gradient(var(--border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--border-strong) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div
        className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full blur-3xl animate-pulse-soft"
        style={{ backgroundColor: 'var(--accent-soft)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse-soft animate-delay-200"
        style={{ backgroundColor: 'var(--brass-soft)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          {/* Coluna de texto — entrada escalonada */}
          <div>
            <Reveal delay={0} duration={600}>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-mono text-xs uppercase tracking-widest mb-8"
                style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--accent-soft)', color: 'var(--accent-text)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse-soft" style={{ backgroundColor: 'var(--brass)' }} />
                Estagiária de Verão @ MESTRECLIQUE
              </div>
            </Reveal>

            <Reveal delay={100} duration={700}>
              <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                Jéssica
                <br />
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r"
                  style={{ backgroundImage: 'linear-gradient(90deg, var(--accent), var(--brass))' }}
                >
                  Cunha
                </span>
              </h1>
            </Reveal>

            <Reveal delay={220} duration={700}>
              <p className="mt-7 text-lg max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Estudante de Mestrado em Engenharia Informática na Universidade do Minho,
                especialização em <strong style={{ color: 'var(--text-primary)' }}>Engenharia de Linguagens e Computação Gráfica</strong>.
                Construo interfaces em React, React Native e Vue — do{' '}
                <strong style={{ color: 'var(--text-primary)' }}>F3MediCare</strong> (saúde) ao{' '}
                <strong style={{ color: 'var(--text-primary)' }}>PureProsper</strong>, uma app de finanças
                pessoais gamificada, o meu projeto mais recente.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-5 flex items-center gap-2 text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
                <MapPin size={14} />
                Ponte de Lima, Viana do Castelo · Portugal
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="px-7 py-3.5 rounded-full font-medium transition-transform hover:scale-105"
                  style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-canvas)' }}
                >
                  Ver projetos
                </button>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="border px-7 py-3.5 rounded-full font-medium transition-transform hover:scale-105"
                  style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
                >
                  Falar comigo
                </button>
              </div>
            </Reveal>

            <Reveal delay={460}>
              <div className="mt-10 flex items-center gap-5">
                <a href="mailto:jessicaclcunha03@gmail.com" aria-label="Email" style={{ color: 'var(--text-muted)' }} className="hover:opacity-70 hover:-translate-y-0.5 transition-all inline-block">
                  <Mail size={19} />
                </a>
                <a href="https://github.com/jessicaclcunha" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-muted)' }} className="hover:opacity-70 hover:-translate-y-0.5 transition-all inline-block">
                  <Github size={19} />
                </a>
                <a href="https://linkedin.com/in/jessicaclcunha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-muted)' }} className="hover:opacity-70 hover:-translate-y-0.5 transition-all inline-block">
                  <Linkedin size={19} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Coluna visual — "wireframe" desenhado, nod à Computação Gráfica + cordas de violino */}
          <Reveal delay={200} direction="right" duration={900} className="relative hidden lg:flex items-center justify-center">
            <svg viewBox="0 0 360 360" className="w-full max-w-md" fill="none">
              <circle cx="180" cy="180" r="150" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1" />
              <ellipse cx="180" cy="180" rx="150" ry="60" stroke="var(--accent)" strokeOpacity="0.28" strokeWidth="1" />
              <ellipse cx="180" cy="180" rx="150" ry="60" stroke="var(--accent)" strokeOpacity="0.22" strokeWidth="1" transform="rotate(60 180 180)" />
              <ellipse cx="180" cy="180" rx="150" ry="60" stroke="var(--brass)" strokeOpacity="0.3" strokeWidth="1" transform="rotate(120 180 180)" />
              {[...Array(7)].map((_, i) => (
                <line
                  key={i}
                  x1={70 + i * 32}
                  y1="30"
                  x2={70 + i * 32}
                  y2="330"
                  stroke={i % 2 === 0 ? 'var(--accent)' : 'var(--brass)'}
                  strokeOpacity="0.2"
                  strokeWidth="1"
                />
              ))}
              <circle cx="180" cy="180" r="5" fill="var(--brass)" className="animate-pulse-soft" />
              <circle
                cx="180" cy="180" r="150"
                stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 7"
                className="spin-slow origin-center"
              />
            </svg>
          </Reveal>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hover:opacity-70 transition-opacity"
        style={{ color: 'var(--text-muted)' }}
        aria-label="Descer para a secção Sobre"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  )
}

export default Hero
