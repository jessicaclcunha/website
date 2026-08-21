import React from 'react'
import { GraduationCap, BookOpen, Award, Music } from 'lucide-react'

const education = [
  {
    institution: 'Universidade do Minho',
    degree: 'Mestrado, Engenharia Informática',
    period: 'setembro 2024 — presente',
    description: 'Especialização em Computação Gráfica e Engenharia de Linguagens.',
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
  { name: 'Learn React', provider: 'Scrimba' },
  { name: 'Learn TypeScript', provider: 'Scrimba' },
  { name: 'Advanced React', provider: 'Scrimba' },
]

const Education = () => {
  return (
    <section id="education" className="py-28" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>04 · Educação</span>
        <h2 className="font-display font-semibold text-4xl mt-3 mb-16" style={{ color: 'var(--text-primary)' }}>
          Percurso académico &amp; artístico
        </h2>

        <div className="max-w-4xl mb-16">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="p-7 rounded-2xl border" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface)' }}>
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
            ))}
          </div>
        </div>

        <div className="max-w-4xl">
          <h3 className="text-xl font-display font-semibold mb-8 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Award size={20} style={{ color: 'var(--accent-text)' }} />
            Certificações
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {certificates.map((cert, index) => (
              <div key={index} className="p-6 rounded-2xl border text-center" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--accent-soft)' }}>
                  <Award className="w-5 h-5" style={{ color: 'var(--accent-text)' }} />
                </div>
                <h4 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{cert.name}</h4>
                <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
