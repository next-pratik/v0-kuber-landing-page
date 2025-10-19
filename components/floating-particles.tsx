"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Particle = { left: number; top: number; offsetX: number }

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 5 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      offsetX: Math.random() * 20 - 10,
    }))
    setParticles(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, p.offsetX, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
        />
      ))}
    </div>
  )
}
