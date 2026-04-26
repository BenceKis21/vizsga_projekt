import { useState, useEffect, useRef } from 'react'

export default function Betolt({ onComplete }) {
  const [phase, setPhase] = useState("initial")
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setPhase("text-animate")
    }, 300)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    if (phase === "text-animate") {
      timerRef.current = setTimeout(() => {
        setPhase("fade-out")
      }, 1800)
    } else if (phase === "fade-out") {
      timerRef.current = setTimeout(() => {
        setPhase("done")
        onComplete()
      }, 600)
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [phase, onComplete])

  if (phase === "done") return null

  const isAnimating = phase === "text-animate" || phase === "fade-out"

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        opacity: phase === "fade-out" ? 0 : 1,
        transition: 'opacity 0.6s ease-out'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span
          style={{
            fontSize: '6rem',
            fontWeight: 900,
            color: '#dc2626',
            transform: isAnimating ? 'translateX(0)' : 'translateX(-100vw)',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          GO
        </span>
        <span
          style={{
            fontSize: '6rem',
            fontWeight: 900,
            color: '#000000',
            transform: isAnimating ? 'translateX(0)' : 'translateX(100vw)',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          KART
        </span>
      </div>
    </div>
  )
}