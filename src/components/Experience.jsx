import React from 'react'
import { Briefcase, GraduationCap, HandHeart, Music } from 'lucide-react'
import Reveal from './Reveal'

const experiences = [
  {
    title: 'Estagiária de Verão',
    company: 'MESTRECLIQUE — Sistemas de Informação, Lda.',
    period: 'junho — agostp 2026',
    description: 'Estágio de verão em engenharia de software, em paralelo com a fase final do mestrado.',
    icon: <Briefcase size={18} />,
    current: true,
  },
  {
    title: 'Licenciatura em Engenharia Informática',
    company: 'Universidade do Minho',
    period: 'outubro 2021 — junho 2025',
    description: 'Base sólida em engenharia de software, algoritmos e sistemas, com foco crescente em frontend.',
    icon: <GraduationCap size={18} />,
  },
  {
    title: 'Trabalho voluntário',
    company: 'Banco Alimentar Contra a Fome',
    period: 'presente',
    description: 'Participação em campanhas de recolha de alimentos.',
    icon: <HandHeart size={18} />,
  },
  {
    title: 'Violino — 5º grau',
    company: 'Academia de Música Fernandes Fão',
    period: '2013 — 2018',
    description: 'Ensino articulado. A consistência que a música exige acompanha-me hoje no código.',
    icon: <Music size={18} />,
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-28" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>02 · Percurso</span>
          <h2 className="font-display font-semibold text-4xl mt-3 mb-16" style={{ color: 'var(--text-primary)' }}>
            Experiência &amp; formação
          </h2>
        </Reveal>

        <div className="relative pl-8 border-l space-y-12" style={{ borderColor: 'var(--border-subtle)' }}>
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 90} direction="left">
              <div className="relative">
                <span
                  className="absolute -left-[41px] top-0 w-8 h-8 rounded-full flex items-center justify-center border transition-transform hover:scale-110"
                  style={
                    exp.current
                      ? { backgroundColor: 'var(--accent)', borderColor: 'var(--accent)', color: '#fff' }
                      : { backgroundColor: 'var(--bg-surface-2)', borderColor: 'var(--border-subtle)', color: 'var(--accent-text)' }
                  }
                >
                  {exp.icon}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-display font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>{exp.title}</h3>
                  <span className="font-mono text-xs uppercase tracking-wide" style={{ color: 'var(--brass)' }}>{exp.period}</span>
                </div>
                <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent-text)' }}>{exp.company}</p>
                <p className="text-sm mt-2 leading-relaxed max-w-xl" style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
