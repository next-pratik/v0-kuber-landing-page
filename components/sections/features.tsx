"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, Zap, Users, BarChart3, Lightbulb } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Track Expenses",
    description: "Visualize where your money goes with smart categorization and real-time tracking.",
    emoji: "💸",
  },
  {
    icon: Target,
    title: "Set Savings Goals",
    description: "Create and achieve financial goals with visual progress tracking and milestones.",
    emoji: "🎯",
  },
  {
    icon: Zap,
    title: "AI Financial Assistant",
    description: "Get personalized insights and actionable tips powered by advanced AI.",
    emoji: "🤖",
  },
  {
    icon: Users,
    title: "Debt & Split Tracker",
    description: "Manage debts and split expenses with friends effortlessly.",
    emoji: "🤝",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Understand spending patterns with beautiful charts and detailed reports.",
    emoji: "📊",
  },
  {
    icon: Lightbulb,
    title: "Money Tips",
    description: "Learn financial best practices with curated tips and educational content.",
    emoji: "💡",
  },
]

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Your Financial Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take control of your finances in one beautiful app.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{feature.emoji}</div>
                    <Icon className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
