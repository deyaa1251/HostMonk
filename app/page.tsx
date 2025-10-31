'use client'

import { useState, useEffect } from 'react'
import { ThemeName, DashboardConfig } from '@/lib/types'
import { getTheme } from '@/lib/themes'
import { defaultConfig } from '@/lib/config'
import Logo from './components/Logo'
import ThemeSelector from './components/ThemeSelector'
import Dashboard from './components/Dashboard'
import styles from './page.module.css'

export default function Home() {
  const [config, setConfig] = useState<DashboardConfig>(defaultConfig)
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(config.theme)
  const [currentTime, setCurrentTime] = useState<Date | null>(null)

  // Update clock
  useEffect(() => {
    setCurrentTime(new Date())
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Load configuration
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/config/services.yaml')
        if (response.ok) {
          const yamlContent = await response.text()
          // In a real app, you'd parse the YAML here
          // For now, we'll use the default config
          console.log('Config loaded:', yamlContent)
        }
      } catch (error) {
        console.log('Using default config')
      }
    }
    loadConfig()
  }, [])

  // Apply theme
  useEffect(() => {
    const theme = getTheme(currentTheme)
    const root = document.documentElement

    root.style.setProperty('--color-primary', theme.colors.primary)
    root.style.setProperty('--color-primary-dim', theme.colors.primaryDim)
    root.style.setProperty('--color-primary-bright', theme.colors.primaryBright)
    root.style.setProperty('--color-background', theme.colors.background)
    root.style.setProperty('--color-background-alt', theme.colors.backgroundAlt)
    root.style.setProperty('--color-text', theme.colors.text)
    root.style.setProperty('--color-border', theme.colors.border)
    root.style.setProperty('--color-success', theme.colors.success)
    root.style.setProperty('--color-warning', theme.colors.warning)
    root.style.setProperty('--color-error', theme.colors.error)
    root.style.setProperty('--font-family', `'${theme.font}', monospace`)
    root.style.setProperty('--scanline-opacity', theme.scanlineOpacity.toString())
  }, [currentTheme])

  const handleThemeChange = (theme: ThemeName) => {
    setCurrentTheme(theme)
  }

  return (
    <main className={`${styles.main} crt`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo />
          <div className={styles.clock}>
            <span className="blink">●</span> SYSTEM TIME: {currentTime?.toLocaleTimeString() || '--:--:--'}
          </div>
        </header>

        <ThemeSelector currentTheme={currentTheme} onThemeChange={handleThemeChange} />

        <div className={styles.dashboardWrapper}>
          <Dashboard config={config} />
        </div>

        <footer className={styles.footer}>
          <p>[ HostMonk v1.0.0 ]</p>
          <p>[ CONFIG: /config/services.yaml ]</p>
          <p className="pulse">[ MONITORING ACTIVE ]</p>
        </footer>
      </div>
    </main>
  )
}
