'use client'

import { ThemeName } from '@/lib/types'
import { themes } from '@/lib/themes'
import styles from './ThemeSelector.module.css'

interface ThemeSelectorProps {
  currentTheme: ThemeName
  onThemeChange: (theme: ThemeName) => void
}

export default function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  const themeList = Object.values(themes)

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        &gt;&gt; THEME:
      </div>
      <div className={styles.themes}>
        {themeList.map((theme) => (
          <button
            key={theme.name}
            onClick={() => onThemeChange(theme.name)}
            className={`${styles.themeButton} ${
              currentTheme === theme.name ? styles.active : ''
            }`}
            title={theme.displayName}
          >
            [{currentTheme === theme.name ? 'X' : ' '}] {theme.displayName}
          </button>
        ))}
      </div>
    </div>
  )
}
