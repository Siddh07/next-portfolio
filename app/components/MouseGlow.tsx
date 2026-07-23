'use client'

import { useEffect, useState } from 'react'

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: -300, y: -300 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setOpacity(0.15)
    }

    const handleMouseLeave = () => {
      setOpacity(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300"
      style={{ opacity }}
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x - 300}px, ${position.y - 300}px, 0)`,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 70%)'
        }}
      />
    </div>
  )
}
