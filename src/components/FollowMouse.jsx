import { useState, useEffect } from 'react'

export const FollowMouse = () => {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })
  const [activo, setActivo] = useState(false)

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handlemove', { clientX, clientY })
      setPosicion({ x: clientX, y: clientY })
    }
    window.addEventListener('pointermove', handleMove)

    // Detectar si hay mouse y si la pantalla es XL o más grande
    const hayMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const esXL = window.matchMedia("(min-width: 1280px)").matches

    if (hayMouse) {
      setActivo(true)
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  if (!activo) return null // si no cumple las condiciones, no renderiza nada

  return (
    <main>
      <div
        className="fixed z-[9999] bg-black/50 rounded-full opacity-80 pointer-events-none w-20 h-20 blur-xl"
        style={{
          left: -36,
          top: -36,
          transform: `translate(${posicion.x}px, ${posicion.y}px)`
        }}
      />
    </main>
  )}