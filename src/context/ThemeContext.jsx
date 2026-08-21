import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'
  try {
    const stored = window.localStorage.getItem('jc-theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch (e) {
    // localStorage indisponível — ignora e usa preferência do sistema
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      window.localStorage.setItem('jc-theme', theme)
    } catch (e) {
      // ignora se localStorage não estiver disponível
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme deve ser usado dentro de ThemeProvider')
  return ctx
}
