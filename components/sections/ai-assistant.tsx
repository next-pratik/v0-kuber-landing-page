"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function AIAssistantSection() {
  const messages = [
    { type: "user", text: "How can I save more money?" },
    {
      type: "ai",
      text: "Based on your spending patterns, I noticed you spend 30% on dining out. Try reducing this by 20% and you could save $200/month!",
    },
    { type: "user", text: "That sounds great! Any other tips?" },
    {
      type: "ai",
      text: "Your utilities are higher than average. Consider switching providers or using energy-saving tips to cut costs by 15%.",
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Your AI Financial Assistant 🤖</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized financial advice and actionable insights powered by advanced AI.
          </p>
        </motion.div>

        <motion.div
          className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                initial={{ opacity: 0, x: message.type === "user" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-accent/20 text-foreground rounded-bl-none border border-accent/30"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask me anything about your finances..."
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button className="px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
