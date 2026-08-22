import React from 'react'
import { useReveal } from '../hooks/useReveal'

const DIRECTIONS = {
  up: 'translateY(28px)',
  down: 'translateY(-28px)',
  left: 'translateX(-28px)',
  right: 'translateX(28px)',
  none: 'none',
}

/**
 * Envolve qualquer conteúdo com uma animação de entrada (fade + deslize)
 * disparada quando o elemento entra no viewport. `delay` em ms permite
 * criar efeitos escalonados (stagger) em grelhas e listas.
 */
const Reveal = ({ children, delay = 0, direction = 'up', duration = 700, className = '', as: Tag = 'div', ...rest }) => {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : DIRECTIONS[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
