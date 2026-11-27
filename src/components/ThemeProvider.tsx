
import React, { createContext, useContext, useEffect, useState } from 'react'

const themes = ['dark', 'light', 'blue', 'green', 'orange', 'red', 'slate'] as const

type Theme = 'dark' | 'light' | 'blue' | 'green' | 'orange' | 'red' | 'slate'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'dark',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'pd-rp-guide-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => {
      try {
        const stored = localStorage.getItem(storageKey)
        return themes.includes(stored as Theme) ? stored as Theme : defaultTheme
      } catch { return defaultTheme }
    }
  )

  useEffect(() => {
    const root = window.document.documentElement

    // Remove all theme classes
    root.classList.remove('light', 'dark', 'blue', 'green', 'orange', 'red', 'slate')

    // Add the current theme class
    root.classList.add(theme)
    root.style.colorScheme = theme === 'light' ? 'light' : 'dark'
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      if (!themes.includes(theme)) return
      try { localStorage.setItem(storageKey, theme) } catch { /* Theme still works without storage. */ }
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
