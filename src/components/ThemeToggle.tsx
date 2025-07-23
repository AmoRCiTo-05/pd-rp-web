
import React from 'react'
import { Monitor, Moon, Sun, Building2, TreePine, Crown, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/ThemeProvider'

const themes = [
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'blue', label: 'LSPD', icon: Building2 },
  { value: 'green', label: 'SASPR', icon: TreePine },
  { value: 'orange', label: 'BCSO', icon: MapPin },
  { value: 'red', label: 'Police Red', icon: Crown },
  { value: 'slate', label: 'SASP', icon: Crown },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const currentTheme = themes.find(t => t.value === theme)
  const CurrentIcon = currentTheme?.icon || Monitor

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 px-3 py-2 h-9 hover:bg-accent/20 transition-all duration-300"
        >
          <CurrentIcon className="h-4 w-4" />
          <span className="hidden sm:inline text-sm">Theme</span>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon
          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              className={`flex items-center gap-2 cursor-pointer ${
                theme === themeOption.value ? 'bg-accent' : ''
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{themeOption.label}</span>
              {theme === themeOption.value && (
                <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
