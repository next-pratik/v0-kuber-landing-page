"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function BudgetPlanningSection() {
  const [budgetAllocation, setBudgetAllocation] = useState({
    savings: 30,
    bills: 40,
    investments: 20,
    entertainment: 10,
  })

  const categories = [
    { key: "savings", label: "Savings", color: "from-green-400 to-emerald-500", icon: "💰" },
    { key: "bills", label: "Bills & Essentials", color: "from-blue-400 to-cyan-500", icon: "📋" },
    { key: "investments", label: "Investments", color: "from-purple-400 to-pink-500", icon: "📈" },
    { key: "entertainment", label: "Entertainment", color: "from-orange-400 to-red-500", icon: "🎮" },
  ]

  const handleSliderChange = (key: string, value: number) => {
    const total = Object.values(budgetAllocation).reduce((a, b) => a + b, 0)
    const diff = value - budgetAllocation[key as keyof typeof budgetAllocation]
    const newAllocation = { ...budgetAllocation }
    newAllocation[key as keyof typeof budgetAllocation] = value

    // Adjust other categories proportionally
    const otherKeys = Object.keys(newAllocation).filter((k) => k !== key)
    const otherTotal = total - budgetAllocation[key as keyof typeof budgetAllocation]

    if (otherTotal > 0) {
      otherKeys.forEach((k) => {
        const proportion = newAllocation[k as keyof typeof budgetAllocation] / otherTotal
        newAllocation[k as keyof typeof budgetAllocation] = Math.round((100 - value) * proportion)
      })
    }

    setBudgetAllocation(newAllocation)
  }

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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Smart Budget Allocation 💡</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Adjust your budget allocation and watch your savings goals update in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Budget Sliders */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="text-xl">{category.icon}</span>
                    {category.label}
                  </label>
                  <span className="text-lg font-bold text-primary">
                    {budgetAllocation[category.key as keyof typeof budgetAllocation]}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={budgetAllocation[category.key as keyof typeof budgetAllocation]}
                  onChange={(e) => handleSliderChange(category.key, Number.parseInt(e.target.value))}
                  className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Visual Representation */}
          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-xs">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  {categories.map((category) => {
                    const colorMap = {
                      "from-green-400 to-emerald-500": { start: "#4ade80", end: "#10b981" },
                      "from-blue-400 to-cyan-500": { start: "#60a5fa", end: "#06b6d4" },
                      "from-purple-400 to-pink-500": { start: "#a78bfa", end: "#ec4899" },
                      "from-orange-400 to-red-500": { start: "#fb923c", end: "#ef4444" }
                    }
                    const colors = colorMap[category.color as keyof typeof colorMap]
                    return (
                      <linearGradient
                        key={`gradient-${category.key}`}
                        id={`gradient-${category.key}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor={colors.start} />
                        <stop offset="100%" stopColor={colors.end} />
                      </linearGradient>
                    )
                  })}
                </defs>
                {categories.map((category, index) => {
                  const startAngle =
                    categories
                      .slice(0, index)
                      .reduce((sum, c) => sum + budgetAllocation[c.key as keyof typeof budgetAllocation], 0) * 3.6
                  const angle = budgetAllocation[category.key as keyof typeof budgetAllocation] * 3.6
                  const startRad = (startAngle - 90) * (Math.PI / 180)
                  const endRad = (startAngle + angle - 90) * (Math.PI / 180)

                  const x1 = 100 + 80 * Math.cos(startRad)
                  const y1 = 100 + 80 * Math.sin(startRad)
                  const x2 = 100 + 80 * Math.cos(endRad)
                  const y2 = 100 + 80 * Math.sin(endRad)

                  const largeArc = angle > 180 ? 1 : 0

                  return (
                    <motion.path
                      key={category.key}
                      d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill={`url(#gradient-${category.key})`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  )
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">$5,000</p>
                  <p className="text-sm text-muted-foreground">Monthly Budget</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              {categories.map((category) => (
                <motion.div
                  key={category.key}
                  className={`p-4 rounded-lg bg-gradient-to-br ${category.color} text-white text-center`}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-sm font-semibold">{category.label}</p>
                  <p className="text-lg font-bold">
                    ${Math.round((5000 * budgetAllocation[category.key as keyof typeof budgetAllocation]) / 100)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
