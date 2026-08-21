import React, { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'experience', label: 'Percurso' },
  { id: 'projects', label: 'Projetos' },
  { id: 'education', label: 'Educação' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contacto' },
]

/**
 * Rail vertical fixo (apenas desktop) que assinala em que secção o
 * visitante está — reforça a identidade "índice/editorial" do site.
 */
const IndexRail = () => {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav
      className="hidden xl:flex flex-col gap-4 fixed left-8 top-1/2 -translate-y-1/2 z-40"
      aria-label="Navegação por secção"
    >
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="group flex items-center gap-3"
          aria-current={active === s.id}
          aria-label={s.label}
        >
          <span
            className="index-dot rounded-full"
            style={{
              width: active === s.id ? 20 : 6,
              height: 6,
              backgroundColor: active === s.id ? 'var(--accent)' : 'var(--border-strong)',
            }}
          />
          <span
            className="font-mono text-[11px] uppercase tracking-widest opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
            style={{ color: 'var(--text-secondary)' }}
          >
            {s.label}
          </span>
        </button>
      ))}
    </nav>
  )
}

export default IndexRail
