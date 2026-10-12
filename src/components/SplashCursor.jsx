import { useEffect, useRef } from 'react'

export default function SplashCursor({
  VELOCITY_DISSIPATION = 3,
  SPLAT_FORCE = 3500,
  COLOR_UPDATE_SPEED = 18,
  COLOR = '#ffffff',
  RAINBOW_MODE = false,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Array to store active fluid particles
    const particles = []
    let hue = 0
    let lastX = 0
    let lastY = 0
    let hasMoved = false

    const addParticles = (x, y, dx, dy) => {
      const count = Math.min(
        Math.floor((SPLAT_FORCE / 1000) * 3),
        8,
      )
      for (let i = 0; i < count; i++) {
        const speed = Math.hypot(dx, dy)
        const angle = Math.random() * Math.PI * 2
        const spread = (Math.random() - 0.5) * speed * 0.4
        const radius = Math.random() * 8 + 4

        particles.push({
          x,
          y,
          vx: dx * 0.2 + Math.cos(angle) * spread,
          vy: dy * 0.2 + Math.sin(angle) * spread,
          radius,
          alpha: 1,
          color: RAINBOW_MODE ? `hsl(${hue}, 100%, 65%)` : COLOR,
        })
      }
    }

    const handleMouseMove = (e) => {
      const currentX = e.clientX
      const currentY = e.clientY

      if (!hasMoved) {
        lastX = currentX
        lastY = currentY
        hasMoved = true
        return
      }

      const dx = currentX - lastX
      const dy = currentY - lastY

      addParticles(currentX, currentY, dx, dy)

      lastX = currentX
      lastY = currentY

      if (RAINBOW_MODE) {
        hue = (hue + COLOR_UPDATE_SPEED * 0.2) % 360
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Main animation render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy
        p.vx *= 1 - VELOCITY_DISSIPATION * 0.02
        p.vy *= 1 - VELOCITY_DISSIPATION * 0.02
        p.alpha -= 0.02

        if (p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.shadowBlur = 12
        ctx.shadowColor = p.color
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius * p.alpha), 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [
    VELOCITY_DISSIPATION,
    SPLAT_FORCE,
    COLOR_UPDATE_SPEED,
    COLOR,
    RAINBOW_MODE,
  ])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}
