import { useState, useEffect } from 'react'

export const FollowMouse = () => {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handlemove', { clientX, clientY })
      setPosicion({ x: clientX, y: clientY })
    }
    window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  })

  return (
    <main>
      <div className='fixed z-[9999] bg-black/50 rounded-full opacity-80 pointer-events-none w-20 h-20 blur-xl'
        style={{
          left: -36,
          top: -36,
          transform: `translate(${posicion.x}px, ${posicion.y}px)`
        }}
      />
    </main>
  )
}
