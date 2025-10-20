"use client"

import { motion } from "framer-motion"

const stats = [
  {
    icon: "👥",
    value: "12,450+",
    label: "Active Users",
    bgColor: "bg-blue-100",
  },
  {
    icon: "⭐",
    value: "4.8/5",
    label: "App Rating",
    bgColor: "bg-yellow-100",
  },
  {
    icon: "💰",
    value: "₹3.2Cr+",
    label: "Money Saved",
    bgColor: "bg-green-100",
  },
  {
    icon: "❤️",
    value: "97%",
    label: "Satisfaction",
    bgColor: "bg-pink-100",
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 px-4 relative bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className={`group relative p-8 rounded-2xl ${stat.bgColor} border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200 backdrop-blur-sm`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
