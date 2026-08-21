import React from 'react'

/**
 * Separador decorativo entre secções, inspirado nas cordas de um violino.
 * Usa currentColor para se adaptar automaticamente ao tema claro/escuro.
 */
const StringDivider = () => {
  return (
    <div className="string-divider" aria-hidden="true">
      <svg viewBox="0 0 400 48" preserveAspectRatio="none" width="100%" height="48">
        {[8, 16, 24, 32, 40].map((y, i) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="400"
            y2={y}
            stroke="currentColor"
            strokeWidth={i === 2 ? 1.4 : 0.8}
            opacity={i === 2 ? 0.9 : 0.5}
          />
        ))}
        <circle cx="16" cy="24" r="3.5" fill="currentColor" opacity="0.9" />
        <circle cx="384" cy="24" r="3.5" fill="currentColor" opacity="0.9" />
      </svg>
    </div>
  )
}

export default StringDivider
