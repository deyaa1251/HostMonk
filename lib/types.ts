// TypeScript interfaces for HostMonk

export type ThemeName = 'terminal-green' | 'amber' | 'cyan' | 'paper-noir' | 'vintage-paper'

export interface Theme {
  name: ThemeName
  displayName: string
  colors: {
    primary: string
    primaryDim: string
    primaryBright: string
    background: string
    backgroundAlt: string
    text: string
    border: string
    success: string
    warning: string
    error: string
  }
  font: string
  scanlineOpacity: number
}

export interface Service {
  name: string
  icon: string
  url: string
  description?: string
  category?: string
  ping?: boolean
  tags?: string[]
}

export interface ServiceStatus {
  name: string
  status: 'online' | 'offline' | 'loading' | 'unknown'
  responseTime?: number
  lastChecked?: Date
}

export interface DashboardConfig {
  version: string
  theme: ThemeName
  title?: string
  categories?: string[]
  services: Service[]
  settings?: {
    showCategories?: boolean
    compactMode?: boolean
    refreshInterval?: number
    enablePing?: boolean
  }
}
