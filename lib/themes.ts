import { Theme, ThemeName } from './types'

export const themes: Record<ThemeName, Theme> = {
  'terminal-green': {
    name: 'terminal-green',
    displayName: 'Terminal Green',
    colors: {
      primary: '#00ff00',
      primaryDim: '#00cc00',
      primaryBright: '#39ff14',
      background: '#0a0a0a',
      backgroundAlt: '#1a1a1a',
      text: '#00ff00',
      border: '#00ff00',
      success: '#00ff00',
      warning: '#ffff00',
      error: '#ff0000',
    },
    font: 'Share Tech Mono',
    scanlineOpacity: 0.03,
  },
  'amber': {
    name: 'amber',
    displayName: 'Amber Alert',
    colors: {
      primary: '#ffb000',
      primaryDim: '#cc8800',
      primaryBright: '#ffd700',
      background: '#0a0a0a',
      backgroundAlt: '#1a1a1a',
      text: '#ffb000',
      border: '#ffb000',
      success: '#00ff00',
      warning: '#ffd700',
      error: '#ff0000',
    },
    font: 'Share Tech Mono',
    scanlineOpacity: 0.03,
  },
  'cyan': {
    name: 'cyan',
    displayName: 'Cyan Matrix',
    colors: {
      primary: '#00ffff',
      primaryDim: '#00cccc',
      primaryBright: '#66ffff',
      background: '#0a0a0a',
      backgroundAlt: '#1a1a1a',
      text: '#00ffff',
      border: '#00ffff',
      success: '#00ff00',
      warning: '#ffff00',
      error: '#ff0000',
    },
    font: 'Share Tech Mono',
    scanlineOpacity: 0.03,
  },
  'paper-noir': {
    name: 'paper-noir',
    displayName: 'Paper Noir',
    colors: {
      primary: '#ffffff',
      primaryDim: '#cccccc',
      primaryBright: '#ffffff',
      background: '#000000',
      backgroundAlt: '#0f0f0f',
      text: '#ffffff',
      border: '#ffffff',
      success: '#00ff00',
      warning: '#ffff00',
      error: '#ff0000',
    },
    font: 'VT323',
    scanlineOpacity: 0.02,
  },
  'vintage-paper': {
    name: 'vintage-paper',
    displayName: 'Vintage Paper',
    colors: {
      primary: '#2a2a2a',
      primaryDim: '#4a4a4a',
      primaryBright: '#000000',
      background: '#f4e8d0',
      backgroundAlt: '#e8dcc4',
      text: '#2a2a2a',
      border: '#8a7a6a',
      success: '#2a6a2a',
      warning: '#8a6a2a',
      error: '#8a2a2a',
    },
    font: 'VT323',
    scanlineOpacity: 0.01,
  },
}

export const defaultTheme: ThemeName = 'terminal-green'

export function getTheme(themeName?: ThemeName): Theme {
  return themes[themeName || defaultTheme] || themes[defaultTheme]
}
