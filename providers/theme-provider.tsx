"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export type Theme = "light" | "dark"
export type ColorScheme = "purple" | "blue" | "rose" | "emerald" | "amber"

interface ThemeContextType {
  theme: Theme
  colorScheme: ColorScheme
  setTheme: (theme: Theme) => void
  setColorScheme: (scheme: ColorScheme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>("purple")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const savedScheme = localStorage.getItem("colorScheme") as ColorScheme | null

    if (savedTheme) setThemeState(savedTheme)
    if (savedScheme) setColorSchemeState(savedScheme)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    root.classList.remove("dark")
    root.classList.remove("purple", "blue", "rose", "emerald", "amber")

    if (theme === "dark") {
      root.classList.add("dark")
    }
    root.classList.add(colorScheme)

    localStorage.setItem("theme", theme)
    localStorage.setItem("colorScheme", colorScheme)
  }, [theme, colorScheme, mounted])

  const setTheme = (newTheme: Theme) => setThemeState(newTheme)
  const setColorScheme = (newScheme: ColorScheme) => setColorSchemeState(newScheme)

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, setTheme, setColorScheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
