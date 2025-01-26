"use client"

import { useEffect, useRef } from "react"

class ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  opacity: number

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth
    this.y = 0
    this.length = Math.random() * 80 + 20
    this.speed = Math.random() * 10 + 5
    this.opacity = Math.random() * 0.5 + 0.5
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = `rgba(147, 51, 234, ${this.opacity})`
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.x + this.length, this.y + this.length)
    ctx.stroke()
  }

  update(canvasHeight: number) {
    this.x += this.speed
    this.y += this.speed
    if (this.y > canvasHeight) {
      this.y = 0
      this.x = Math.random() * canvasHeight
    }
  }
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const stars: ShootingStar[] = []
    const starCount = 20

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      stars.length = 0
      for (let i = 0; i < starCount; i++) {
        stars.push(new ShootingStar(canvas.width, canvas.height))
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((star) => {
        star.draw(ctx)
        star.update(canvas.height)
      })
      requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

