import React from 'react'
import { ExternalLink, Github, ChevronRight, HeartPulse, Wallet, CheckCircle2, Rocket } from 'lucide-react'

const academicProjects = [
  {
    title: 'CG-project',
    description: 'Projeto da UC de Computação Gráfica — a área de especialização do meu mestrado. Geração e manipulação de cenas 3D.',
    tech: ['C++', 'OpenGL'],
    github: 'https://github.com/jessicaclcunha/CG-project',
    category: 'Computação Gráfica',
  },
  {
    title: 'PL2024',
    description: 'Projeto da UC de Processamento de Linguagens: análise léxica, sintática e semântica de uma linguagem.',
    tech: ['Python'],
    github: 'https://github.com/jessicaclcunha/PL2024',
    category: 'Compiladores',
  },
  {
    title: 'ESR-project',
    description: 'Projeto académico da UC de Engenharia de Serviços em Rede, focado em arquitetura e comunicação de serviços distribuídos.',
    tech: ['Python'],
    github: 'https://github.com/jessicaclcunha/ESR-project',
    category: 'Redes',
  },
  {
    title: 'IA-project',
    description: 'Projeto da UC de Inteligência Artificial, com implementação de algoritmos de procura e/ou aprendizagem.',
    tech: ['Python'],
    github: 'https://github.com/jessicaclcunha/IA-project',
    category: 'Inteligência Artificial',
  },
  {
    title: 'BD-project',
    description: 'Projeto da UC de Bases de Dados: modelação relacional, normalização e queries SQL sobre um caso de estudo.',
    tech: ['Python', 'SQL'],
    github: 'https://github.com/jessicaclcunha/BD-project',
    category: 'Bases de Dados',
  },
  {
    title: 'LI4-Project',
    description: 'Projeto de Laboratório de Informática IV — desenvolvimento de software em equipa com metodologia própria.',
    tech: ['C#'],
    github: 'https://github.com/jessicaclcunha/LI4-Project',
    category: 'Eng. de Software',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-28" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>03 · Projetos</span>
        <h2 className="font-display font-semibold text-4xl mt-3 mb-16" style={{ color: 'var(--text-primary)' }}>
          O que tenho construído
        </h2>

        {/* PureProsper — projeto em destaque */}
        <div
          className="mb-8 rounded-3xl p-10 lg:p-14 relative overflow-hidden"
          style={{ backgroundColor: 'var(--bg-inverse)' }}
        >
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent-soft)' }} />
          <div className="relative grid lg:grid-cols-[auto_1fr] gap-8 items-start" style={{ color: 'var(--bg-canvas)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--brass-soft)', color: 'var(--brass)' }}>
              <Wallet size={24} />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--brass)' }}>
                Projeto pessoal · em produção
              </span>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl mt-2">PureProsper</h3>
              <p className="mt-4 max-w-2xl leading-relaxed opacity-80">
                Aplicação de gestão de finanças pessoais que torna a poupança num hábito através de
                gamificação: metas com progresso animado, streaks diários e apoio multi-moeda. Desenhei
                e desenvolvi tudo sozinha — do protótipo em Figma à base de dados e ao deploy — com React,
                Vite e Supabase.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['React', 'Vite', 'Supabase', 'Chart.js', 'Gamificação'].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--bg-canvas)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-7">
                <a
                  href="https://pure-prosper.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--brass)', color: 'var(--bg-inverse)' }}
                >
                  <Rocket size={16} /> Ver demo
                </a>
                <a
                  href="https://github.com/jessicaclcunha/PureProsper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border transition-opacity hover:opacity-90"
                  style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'var(--bg-canvas)' }}
                >
                  <Github size={16} /> Ver código
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* F3MediCare — projeto concluído */}
        <div
          className="mb-14 rounded-3xl p-8 lg:p-10 border flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
          style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface-2)' }}
        >
          <div className="flex items-start gap-5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
              <HeartPulse size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>F3MediCare</h3>
                <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded-full" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
                  <CheckCircle2 size={12} /> Concluído
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                Projeto de Mestrado em parceria com a F3M: app React Native de gestão de medicação para
                doentes com demência e cuidadores, com duas interfaces distintas. Equipa de 5 pessoas.
              </p>
            </div>
          </div>
        </div>

        <h3 className="font-display font-semibold text-xl mb-6" style={{ color: 'var(--text-primary)' }}>
          Projetos académicos
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicProjects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg"
              style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface-2)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
                  {project.category}
                </span>
                <ExternalLink size={16} style={{ color: 'var(--text-muted)' }} className="group-hover:opacity-70 transition-opacity" />
              </div>

              <h3 className="text-lg font-display font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-mono px-2.5 py-1 rounded-full border"
                    style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-surface)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/jessicaclcunha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-primary)' }}
          >
            <Github size={18} />
            Ver todos os projetos no GitHub
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
