import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const NAV_ITEMS = [
  { id: 'about', label: 'Sobre' },
  { id: 'experience', label: 'Percurso' },
  { id: 'projects', label: 'Projetos' },
  { id: 'education', label: 'Educação' },
  { id: 'skills', label: 'Skills' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-500 border-b"
      style={{
        backgroundColor: isScrolled || isMobileMenuOpen ? 'var(--bg-surface)' : 'transparent',
        borderColor: isScrolled || isMobileMenuOpen ? 'var(--border-subtle)' : 'transparent',
        backdropFilter: isScrolled || isMobileMenuOpen ? 'blur(10px)' : 'none',
        paddingTop: isScrolled ? '0.85rem' : '1.5rem',
        paddingBottom: isScrolled ? '0.85rem' : '1.5rem',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-display font-semibold text-lg tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Jéssica Cunha
            <span style={{ color: 'var(--accent-text)' }}>.</span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-mono text-xs uppercase tracking-widest transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:opacity-80"
              style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="https://github.com/jessicaclcunha"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="GitHub de Jéssica Cunha"
            >
              <Github size={18} />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white text-sm font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              Contactar
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center border"
              style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-mono text-xs uppercase tracking-widest"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-white text-sm font-medium px-5 py-2.5 rounded-full w-fit"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                Contactar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
