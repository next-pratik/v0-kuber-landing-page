"use client"

import { motion } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <motion.div
        className="bg-gradient-to-r from-primary to-accent rounded-full p-1 shadow-lg shadow-primary/30"
        whileHover={{ scale: 1.05 }}
      >
        <div className="bg-background rounded-full px-6 py-3 flex items-center gap-3">
          <span className="text-sm font-semibold text-foreground">Ready to start?</span>
         <Button
  size="sm"
  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
  onClick={() => window.open("https://frontend-three-mu-40.vercel.app/", "_blank")}
>
  Try Demo
  <ArrowRight className="ml-1 w-4 h-4" />
</Button>

          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
