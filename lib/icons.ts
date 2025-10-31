// Icon mapping system for popular self-hosted applications

export const iconMap: Record<string, string> = {
  // Media Servers
  'jellyfin': '/icons/jellyfin.svg',
  'plex': '/icons/plex.svg',
  'emby': '/icons/emby.svg',
  'navidrome': '/icons/navidrome.svg',
  'airsonic': '/icons/airsonic.svg',

  // *arr Suite
  'sonarr': '/icons/sonarr.svg',
  'radarr': '/icons/radarr.svg',
  'lidarr': '/icons/lidarr.svg',
  'prowlarr': '/icons/prowlarr.svg',
  'bazarr': '/icons/bazarr.svg',
  'readarr': '/icons/readarr.svg',

  // Download Clients
  'qbittorrent': '/icons/qbittorrent.svg',
  'transmission': '/icons/transmission.svg',
  'deluge': '/icons/deluge.svg',
  'sabnzbd': '/icons/sabnzbd.svg',
  'nzbget': '/icons/nzbget.svg',

  // Storage & Sync
  'nextcloud': '/icons/nextcloud.svg',
  'seafile': '/icons/seafile.svg',
  'syncthing': '/icons/syncthing.svg',
  'filebrowser': '/icons/filebrowser.svg',

  // Networking
  'pihole': '/icons/pihole.svg',
  'adguard': '/icons/adguard.svg',
  'wireguard': '/icons/wireguard.svg',
  'openvpn': '/icons/openvpn.svg',
  'nginx': '/icons/nginx.svg',
  'traefik': '/icons/traefik.svg',
  'caddy': '/icons/caddy.svg',

  // Monitoring
  'grafana': '/icons/grafana.svg',
  'prometheus': '/icons/prometheus.svg',
  'uptime-kuma': '/icons/uptime-kuma.svg',
  'netdata': '/icons/netdata.svg',
  'glances': '/icons/glances.svg',

  // Container Management
  'portainer': '/icons/portainer.svg',
  'yacht': '/icons/yacht.svg',
  'dockge': '/icons/dockge.svg',

  // Home Automation
  'homeassistant': '/icons/homeassistant.svg',
  'nodered': '/icons/nodered.svg',

  // Password Managers
  'vaultwarden': '/icons/vaultwarden.svg',
  'bitwarden': '/icons/bitwarden.svg',

  // Dashboards
  'heimdall': '/icons/heimdall.svg',
  'homer': '/icons/homer.svg',
  'homarr': '/icons/homarr.svg',

  // Communication
  'matrix': '/icons/matrix.svg',
  'element': '/icons/element.svg',

  // Wiki/Notes
  'bookstack': '/icons/bookstack.svg',
  'wikijs': '/icons/wikijs.svg',
  'outline': '/icons/outline.svg',

  // Default fallback
  'default': '/icons/default.svg',
}

export function getIconPath(iconName: string): string {
  const normalizedName = iconName.toLowerCase().replace(/\s+/g, '')
  return iconMap[normalizedName] || iconMap['default']
}

export function getAllIcons(): string[] {
  return Object.keys(iconMap).filter(key => key !== 'default')
}
