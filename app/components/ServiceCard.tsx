'use client'

import { useState, useEffect } from 'react'
import { Service, ServiceStatus } from '@/lib/types'
import { getIconPath } from '@/lib/icons'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  service: Service
  enablePing?: boolean
}

export default function ServiceCard({ service, enablePing = true }: ServiceCardProps) {
  const [status, setStatus] = useState<ServiceStatus>({
    name: service.name,
    status: 'loading',
  })

  useEffect(() => {
    if (!enablePing || !service.ping) {
      setStatus({ name: service.name, status: 'unknown' })
      return
    }

    const checkStatus = async () => {
      const startTime = Date.now()
      try {
        // Simple ping check - in production you'd use a backend API
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000)

        const response = await fetch(service.url, {
          method: 'HEAD',
          mode: 'no-cors', // Avoid CORS issues
          signal: controller.signal,
        })

        clearTimeout(timeoutId)
        const responseTime = Date.now() - startTime

        setStatus({
          name: service.name,
          status: 'online',
          responseTime,
          lastChecked: new Date(),
        })
      } catch (error) {
        setStatus({
          name: service.name,
          status: 'offline',
          lastChecked: new Date(),
        })
      }
    }

    checkStatus()
    const interval = setInterval(checkStatus, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }, [service, enablePing])

  const getStatusClass = () => {
    switch (status.status) {
      case 'online':
        return styles.statusOnline
      case 'offline':
        return styles.statusOffline
      case 'loading':
        return styles.statusLoading
      default:
        return ''
    }
  }

  const getStatusIndicator = () => {
    switch (status.status) {
      case 'online':
        return <span className={`${styles.indicator} status-online blink`}>●</span>
      case 'offline':
        return <span className={`${styles.indicator} status-offline`}>●</span>
      case 'loading':
        return <span className={`${styles.indicator} status-loading`}>◐</span>
      default:
        return <span className={styles.indicator}>○</span>
    }
  }

  const getStatusText = () => {
    switch (status.status) {
      case 'online':
        return status.responseTime ? `ONLINE (${status.responseTime}ms)` : 'ONLINE'
      case 'offline':
        return 'OFFLINE'
      case 'loading':
        return 'CHECKING...'
      default:
        return ''
    }
  }

  return (
    <a href={service.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
      <div className={`${styles.card} terminal-box ${getStatusClass()}`}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <img
              src={getIconPath(service.icon)}
              alt={`${service.name} icon`}
              className={styles.icon}
              onError={(e) => {
                // Fallback to default icon if image fails to load
                e.currentTarget.src = getIconPath('default')
              }}
            />
          </div>
          <div className={styles.statusWrapper}>
            {getStatusIndicator()}
          </div>
        </div>

        <h3 className={styles.name}>
          &gt; {service.name}
          <span className="cursor">_</span>
        </h3>

        {service.description && (
          <p className={styles.description}>{service.description}</p>
        )}

        {service.category && (
          <div className={styles.category}>
            [ {service.category.toUpperCase()} ]
          </div>
        )}

        {service.ping && status.status !== 'unknown' && (
          <div className={styles.status}>
            {getStatusText()}
          </div>
        )}

        {service.tags && service.tags.length > 0 && (
          <div className={styles.tags}>
            {service.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  )
}
