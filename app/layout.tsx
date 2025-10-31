import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HostMonk - Self-Hosted Dashboard',
  description: 'A vintage terminal-aesthetic dashboard for self-hosted applications',
  keywords: ['dashboard', 'self-hosted', 'homelab', 'monitoring', 'retro'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
