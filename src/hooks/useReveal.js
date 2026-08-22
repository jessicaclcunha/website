import { useEffect, useRef, useState } from 'react'

/**
 * Hook simples de "reveal on scroll": devolve uma ref para colocar no
 * elemento e um booleano que passa a true (e mantém-se true) assim que
 * o elemento entra no viewport.
 */
export const useReveal = (threshold = 0.15) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respeita utilizadores que preferem menos movimento
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
