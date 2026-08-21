import React from 'react'
import { Code2, Database, PenTool, Users, Languages } from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend',
    icon: <Code2 size={18} />,
    items: ['React', 'React Native', 'Vue.js', 'TypeScript', 'JavaScript', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Linguagens & Backend',
    icon: <Code2 size={18} />,
    items: ['Python', 'Java', 'C', 'C++'],
  },
  {
    title: 'Bases de dados & cloud',
    icon: <Database size={18} />,
    items: ['MySQL', 'PostgreSQL', 'MariaDB', 'Supabase'],
  },
  {
    title: 'Design & ferramentas',
    icon: <PenTool size={18} />,
    items: ['Figma', 'Canva', 'Chart.js', 'Git & GitHub'],
  },
]

const softSkills = [
  'Trabalho em equipa',
  'Aprendizagem rápida e autónoma',
  'Organização e disciplina',
  'Comunicação aberta',
  'Resolução de problemas',
]

const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Working proficiency' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-28" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>05 · Skills</span>
        <h2 className="font-display font-semibold text-4xl mt-3 mb-16" style={{ color: 'var(--text-primary)' }}>
          Caixa de ferramentas
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="p-6 rounded-2xl border" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface-2)' }}>
                <div className="flex items-center gap-2 mb-4" style={{ color: 'var(--accent-text)' }}>
                  {group.icon}
                  <h3 className="font-display font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-3 py-1.5 rounded-full border"
                      style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--bg-inverse)' }}>
              <div className="flex items-center gap-2 mb-4" style={{ color: 'var(--brass)' }}>
                <Users size={18} />
                <h3 className="font-display font-semibold text-sm" style={{ color: 'var(--bg-canvas)' }}>Competências pessoais</h3>
              </div>
              <ul className="space-y-3">
                {softSkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--bg-canvas)', opacity: 0.8 }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'var(--brass)' }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl border" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface-2)' }}>
              <div className="flex items-center gap-2 mb-4" style={{ color: 'var(--accent-text)' }}>
                <Languages size={18} />
                <h3 className="font-display font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Idiomas</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-sm">
                    <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{lang.name}</span>
                    <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
