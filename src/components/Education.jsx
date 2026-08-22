import React from 'react'
import { GraduationCap, BookOpen, Award, Music, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'

const education = [
  {
    institution: 'Universidade do Minho',
    degree: 'Mestrado, Engenharia Informática',
    period: 'setembro 2024 — presente',
    description: 'Especialização em Engenharia de Linguagens e Computação Gráfica.',
    icon: <GraduationCap className="w-6 h-6" />,
    current: true,
  },
  {
    institution: 'Universidade do Minho',
    degree: 'Licenciatura, Engenharia Informática',
    period: 'outubro 2021 — junho 2025',
    description: 'Formação base em engenharia de software, sistemas e algoritmos.',
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    institution: 'Escola Básica e Secundária de Arcozelo',
    degree: 'Ensino Secundário, Ciências e Tecnologias',
    period: '2009 — 2021',
    description: 'Formação preparatória para o ensino superior.',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    institution: 'Academia de Música Fernandes Fão',
    degree: '5º grau, Violino',
    period: '2013 — 2018',
    description: 'Conclusão do 5º grau em ensino articulado.',
    icon: <Music className="w-6 h-6" />,
  },
]

const certificates = [
  { name: 'Learn React', provider: 'Scrimba', url: 'https://scrimba.com/certificate-cert24zAwPPowNRR57YdZvAtV4YjtQqmAjU1qysJQ' },
  { name: 'Learn TypeScript', provider: 'Scrimba', url: 'https://scrimba.com/certificate-cert2JbLs3qgAyYmF9tcQHiGMUEUSiqqypL5eftfEa' },
  { name: 'Advanced React', provider: 'Scrimba', url: 'https://scrimba.com/certificate-cert2JbLs3qgAyYmF9tcQHiGMUDQChkkVxep6ioqoT' },
]

const Education = () => {
  return (
    <section id="education" className="py-28" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>04 · Educação</span>
          <h2 className="font-display font-semibold text-4xl mt-3 mb-16" style={{ color: 'var(--text-primary)' }}>
            Percurso académico &amp; artístico
          </h2>
        </Reveal>

        <div className="max-w-4xl mb-16">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Reveal key={index} delay={index * 90} direction="left">
                <div className="p-7 rounded-2xl border hover-lift" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface)' }}>
                  <div className="flex items-start gap-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={
                        edu.current
                          ? { backgroundColor: 'var(--accent)', color: '#fff' }
                          : { backgroundColor: 'var(--bg-surface-2)', color: 'var(--text-secondary)' }
                      }
                    >
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                        <div>
                          <h3 className="text-lg font-display font-semibold" style={{ color: 'var(--text-primary)' }}>{edu.institution}</h3>
                          <p className="font-medium text-sm" style={{ color: 'var(--text-secondary)' }}>{edu.degree}</p>
                        </div>
                        <span className="font-mono text-xs px-3 py-1 rounded-full w-fit" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{edu.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="max-w-4xl">
          <Reveal>
            <h3 className="text-xl font-display font-semibold mb-8 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Award size={20} style={{ color: 'var(--accent-text)' }} />
              Certificações
            </h3>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {certificates.map((cert, index) => (
              <Reveal key={index} delay={index * 90}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block p-6 rounded-2xl border text-center hover-lift"
                  style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface)' }}
                >
                  <ExternalLink
                    size={13}
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: 'var(--text-muted)' }}
                  />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--accent-soft)' }}>
                    <Award className="w-5 h-5" style={{ color: 'var(--accent-text)' }} />
                  </div>
                  <h4 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{cert.name}</h4>
                  <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{cert.provider}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
