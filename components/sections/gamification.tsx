"use client"

import { motion } from "framer-motion"
import { Award, Flame, Star } from "lucide-react"

const badges = [
  { icon: Star, label: "Budget Master", color: "from-yellow-400 to-yellow-500" },
  { icon: Flame, label: "7-Day Streak", color: "from-orange-400 to-red-500" },
  { icon: Award, label: "Savings Champion", color: "from-purple-400 to-pink-500" },
]

export default function GamificationSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Save, Earn Badges, Celebrate Milestones! 🎉
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make managing money fun with achievements, streaks, and rewards that keep you motivated.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-12 h-12 text-white" />
                </motion.div>
                <p className="text-lg font-semibold text-foreground">{badge.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Progress Ring */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-primary/20"
              />
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ strokeDasharray: "0 565" }}
                whileInView={{ strokeDasharray: "424 565" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl font-bold text-foreground">75%</p>
                <p className="text-sm text-muted-foreground">Goal Progress</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
