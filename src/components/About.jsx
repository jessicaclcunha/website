import React from 'react'
import { Layers, Wallet, Music } from 'lucide-react'
import StringDivider from './StringDivider'
import Reveal from './Reveal'

const About = () => {
  return (
    <>
      <section id="about" className="py-28" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
            <Reveal direction="left">
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>01 · Sobre mim</span>
              <h2 className="font-display font-semibold text-4xl mt-3 leading-tight" style={{ color: 'var(--text-primary)' }}>
                Do wireframe ao<br />ecrã do utilizador
              </h2>
              <p className="mt-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                A ligação entre a precisão técnica da Computação Gráfica e a atenção ao
                detalhe de quem passou cinco anos a afinar um violino define a forma como
                trabalho: com disciplina, mas sempre a pensar em quem vai usar o que construo.
              </p>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="space-y-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  Estou a terminar o <strong style={{ color: 'var(--text-primary)' }}>Mestrado em Engenharia Informática</strong> na
                  Universidade do Minho, com especialização em <strong style={{ color: 'var(--text-primary)' }}>Engenharia de
                  Linguagens e Computação Gráfica</strong>, depois de uma Licenciatura na mesma área (2021–2025).
                  Atualmente sou <strong style={{ color: 'var(--text-primary)' }}>Estagiária de Verão na MESTRECLIQUE</strong>.
                </p>
                <p>
                  A Engenharia de Linguagens — construir analisadores e ferramentas que ajudam outros
                  programadores — foi a parte do mestrado que mais me despertou curiosidade, e é onde tenho
                  mais projetos académicos. Gosto de levar projetos até ao fim: no mestrado, desenvolvi o{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>F3MediCare</strong> em parceria com a F3M — uma app de
                  gestão de medicação para doentes com demência. Mais recentemente, criei sozinha o{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>PureProsper</strong>, uma aplicação de finanças pessoais
                  gamificada, do design em Figma ao deploy em produção.
                </p>
                <p>
                  Tenho um gosto particular por frontend — a parte da aplicação que o utilizador vê e sente — e já
                  trabalhei com React, React Native, Vue.js e TypeScript. Aprendo tecnologias novas rapidamente por
                  iniciativa própria, e trago essa mesma vontade de aprender para qualquer equipa.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-5 rounded-2xl border hover-lift" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface-2)' }}>
                    <Layers style={{ color: 'var(--accent-text)' }} className="mb-3" size={20} />
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Engenharia de Linguagens</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Área de especialização preferida</p>
                  </div>
                  <div className="p-5 rounded-2xl border hover-lift" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface-2)' }}>
                    <Wallet style={{ color: 'var(--accent-text)' }} className="mb-3" size={20} />
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>PureProsper</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Projeto pessoal, ponta a ponta</p>
                  </div>
                  <div className="p-5 rounded-2xl border hover-lift" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface-2)' }}>
                    <Music style={{ color: 'var(--accent-text)' }} className="mb-3" size={20} />
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>5 anos de violino</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Disciplina e consistência</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <div style={{ backgroundColor: 'var(--bg-surface)' }}><StringDivider /></div>
    </>
  )
}

export default About
