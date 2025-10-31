'use client'

import { DashboardConfig } from '@/lib/types'
import ServiceCard from './ServiceCard'
import styles from './Dashboard.module.css'

interface DashboardProps {
  config: DashboardConfig
}

export default function Dashboard({ config }: DashboardProps) {
  const { services, settings } = config

  // Group services by category if enabled
  const groupedServices = settings?.showCategories
    ? services.reduce((acc, service) => {
        const category = service.category || 'Uncategorized'
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(service)
        return acc
      }, {} as Record<string, typeof services>)
    : { 'All Services': services }

  return (
    <div className={styles.dashboard}>
      {Object.entries(groupedServices).map(([category, categoryServices]) => (
        <div key={category} className={styles.category}>
          {settings?.showCategories && (
            <h2 className={styles.categoryTitle}>
              ╔═══ {category.toUpperCase()} ═══╗
            </h2>
          )}
          <div className={`${styles.grid} ${settings?.compactMode ? styles.compact : ''}`}>
            {categoryServices.map((service, index) => (
              <ServiceCard
                key={`${service.name}-${index}`}
                service={service}
                enablePing={settings?.enablePing}
              />
            ))}
          </div>
        </div>
      ))}

      {services.length === 0 && (
        <div className={styles.empty}>
          <p className="glow">[ NO SERVICES CONFIGURED ]</p>
          <p className={styles.emptyHint}>
            Add services to config/services.yaml to get started
          </p>
        </div>
      )}
    </div>
  )
}
