"use client"

import { useTheme, type Theme, type ColorScheme } from "@/providers/theme-provider"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, colorScheme, setTheme, setColorScheme } = useTheme()

  const themes: Theme[] = ["light", "dark"]
  const colorSchemes: ColorScheme[] = ["purple", "blue", "rose", "emerald", "amber"]

  const colorLabels: Record<ColorScheme, string> = {
    purple: "Purple",
    blue: "Blue",
    rose: "Rose",
    emerald: "Emerald",
    amber: "Amber",
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Moon className="w-5 h-5 text-foreground" /> : <Sun className="w-5 h-5 text-foreground" />}
      </button>

      <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
        {colorSchemes.map((scheme) => (
          <button
            key={scheme}
            onClick={() => setColorScheme(scheme)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
              colorScheme === scheme
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-foreground hover:bg-secondary/50"
            }`}
            title={colorLabels[scheme]}
          >
            {scheme.charAt(0).toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
