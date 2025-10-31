import yaml from 'js-yaml'
import { DashboardConfig, Service } from './types'
import { defaultTheme } from './themes'

export function parseYamlConfig(yamlContent: string): DashboardConfig {
  try {
    const parsed = yaml.load(yamlContent) as any

    // Validate and transform
    const config: DashboardConfig = {
      version: parsed.version || '1.0',
      theme: parsed.theme || defaultTheme,
      title: parsed.title,
      categories: parsed.categories || [],
      services: (parsed.services || []).map((service: any) => ({
        name: service.name || 'Unnamed Service',
        icon: service.icon || 'default',
        url: service.url || '#',
        description: service.description,
        category: service.category,
        ping: service.ping !== false, // Default to true
        tags: service.tags || [],
      })),
      settings: {
        showCategories: parsed.settings?.showCategories !== false,
        compactMode: parsed.settings?.compactMode || false,
        refreshInterval: parsed.settings?.refreshInterval || 30000,
        enablePing: parsed.settings?.enablePing !== false,
      },
    }

    return config
  } catch (error) {
    console.error('Error parsing YAML config:', error)
    throw new Error('Invalid YAML configuration')
  }
}

export function validateService(service: Service): boolean {
  if (!service.name || !service.icon || !service.url) {
    return false
  }
  return true
}

export async function loadConfigFromFile(filePath: string): Promise<DashboardConfig> {
  try {
    const response = await fetch(filePath)
    const yamlContent = await response.text()
    return parseYamlConfig(yamlContent)
  } catch (error) {
    console.error('Error loading config file:', error)
    throw new Error('Failed to load configuration file')
  }
}

// Default fallback config
export const defaultConfig: DashboardConfig = {
  version: '1.0',
  theme: 'terminal-green',
  title: 'HostMonk Dashboard',
  services: [
    {
      name: 'Example Service',
      icon: 'default',
      url: '#',
      description: 'Add your services in config/services.yaml',
      category: 'Getting Started',
      ping: false,
    },
  ],
  settings: {
    showCategories: true,
    compactMode: false,
    refreshInterval: 30000,
    enablePing: true,
  },
}
