"use client"

import { motion } from "framer-motion"

const stats = [
  {
    icon: "👥",
    value: "12,450+",
    label: "Active Users",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-200/50 dark:border-blue-800/50",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: "⭐",
    value: "4.8/5",
    label: "App Rating",
    bgColor: "bg-gradient-to-br from-yellow-500/10 to-yellow-600/5",
    borderColor: "border-yellow-200/50 dark:border-yellow-800/50",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: "💰",
    value: "₹5.6L+",
    label: "Money Saved",
    bgColor: "bg-gradient-to-br from-green-500/10 to-green-600/5",
    borderColor: "border-green-200/50 dark:border-green-800/50",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: "❤️",
    value: "97%",
    label: "Satisfaction",
    bgColor: "bg-gradient-to-br from-pink-500/10 to-pink-600/5",
    borderColor: "border-pink-200/50 dark:border-pink-800/50",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
]

export default function TrustedByThousandsSection() {
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
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <section className="py-20 px-4 relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our growing community of financially savvy users.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative p-8 rounded-2xl ${stat.bgColor} border ${stat.borderColor} hover:border-opacity-80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm`}
            >
              <div className="text-center">
                <div className={`text-4xl mb-4 ${stat.iconColor}`}>{stat.icon}</div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
