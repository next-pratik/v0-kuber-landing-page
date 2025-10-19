"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Student",
    avatar: "SC",
    content: "KUBER made managing my finances so easy! I saved $2,000 in just 3 months.",
    rating: 5,
    achievement: "💰 Saved $2,000",
  },
  {
    name: "Alex Rodriguez",
    role: "Freelancer",
    avatar: "AR",
    content: "The AI assistant gives me personalized advice that actually works. Love it!",
    rating: 5,
    achievement: "🎯 Achieved Goal",
  },
  {
    name: "Jordan Kim",
    role: "Young Professional",
    avatar: "JK",
    content: "Finally, a finance app that doesn't feel boring. The gamification keeps me motivated!",
    rating: 5,
    achievement: "🏆 Budget Master",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Success Stories from Real Users 🌟</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how KUBER is helping people take control of their finances.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>

                <motion.div
                  className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold"
                  whileHover={{ scale: 1.1 }}
                >
                  {testimonial.achievement}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
