# HostMonk Quick Start Guide

Get HostMonk running in under 5 minutes!

---

## 🚀 Option 1: Docker (Recommended)

**Fastest way to get started:**

```bash
# Clone or navigate to the project
cd /home/oss-terminator/hostmonk

# Edit your services
nano config/services.yaml

# Run with Docker Compose
docker-compose up -d

# Visit http://localhost:3000
```

Done! Your dashboard is running.

---

## 💻 Option 2: Local Development

**If you want to customize or develop:**

```bash
# Navigate to project
cd /home/oss-terminator/hostmonk

# Install Node.js 20+ if not installed
# On Arch Linux:
sudo pacman -S nodejs npm

# Install dependencies
npm install

# Configure your services
cp config/examples/basic.yaml config/services.yaml
nano config/services.yaml

# Run development server
npm run dev

# Visit http://localhost:3000
```

---

## ⚙️ Configuration

### Basic Setup

Edit `config/services.yaml`:

```yaml
version: "1.0"
theme: "terminal-green"

services:
  - name: "Jellyfin"
    icon: "jellyfin"
    url: "http://192.168.1.10:8096"
    description: "Media Server"
    category: "Media"
    ping: true

  - name: "Portainer"
    icon: "portainer"
    url: "http://192.168.1.10:9000"
    description: "Docker Management"
    category: "Infrastructure"
```

### Available Themes

- `terminal-green` - Classic CRT green (default)
- `amber` - IBM terminal orange
- `cyan` - Cyberpunk blue-green
- `paper-noir` - White on black
- `vintage-paper` - Dark on cream

### Available Icons

Check `lib/icons.ts` for the full list. Current icons include:
- jellyfin, plex, emby
- sonarr, radarr, lidarr, prowlarr
- qbittorrent, transmission
- portainer, traefik, nginx
- grafana, uptime-kuma
- pihole, adguard
- nextcloud, vaultwarden
- homeassistant
- And more!

---

## 🎨 Customization

### Change Theme

1. **Via Config:** Edit `theme:` in `services.yaml`
2. **Via UI:** Use the theme selector on the dashboard

### Add Services

Just add to the `services:` array in `services.yaml`:

```yaml
services:
  - name: "Your App"
    icon: "default"  # or specific icon name
    url: "http://your-app-url"
    description: "What it does"
    category: "Category Name"
    ping: true
```

### Add Icons

1. Create SVG file in `public/icons/yourapp.svg`
2. Add mapping in `lib/icons.ts`:
   ```typescript
   'yourapp': '/icons/yourapp.svg',
   ```

---

## 🐛 Troubleshooting

### Can't connect to services?

**Issue:** "All services showing offline"

**Solutions:**
- Check if URLs are correct
- Ensure services are running
- Check CORS settings
- Verify network connectivity

### Theme not changing?

**Issue:** "Theme selector not working"

**Solutions:**
- Hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Check browser console for errors

### Icons not loading?

**Issue:** "Icons showing as default box"

**Solutions:**
- Verify icon name matches exactly (case-insensitive)
- Check `public/icons/` folder exists
- Look for typos in icon name

### Build failing?

**Issue:** "npm run build fails"

**Solutions:**
```bash
# Clean and reinstall
rm -rf node_modules .next
npm install
npm run build
```

---

## 📖 Next Steps

1. **Read the full docs:** Check out `README.md`
2. **Learn the architecture:** See `docs/TUTORIAL.md`
3. **Contribute:** Read `CONTRIBUTING.md`
4. **Get help:** Open an issue on GitHub

---

## 🎯 Common Use Cases

### Homelab Dashboard

Perfect for monitoring your self-hosted apps:
- Media servers (Jellyfin, Plex)
- *arr stack (Sonarr, Radarr, etc.)
- Network tools (Pi-hole, AdGuard)
- Management (Portainer, Traefik)

### Startup Splash Screen

Use as a launcher for your homelab:
- Single page to access everything
- Beautiful vintage aesthetic
- Live status monitoring

### Team Dashboard

Deploy for your team to access shared services:
- One config file
- Easy to update
- No authentication needed (use reverse proxy)

---

## 💡 Tips & Tricks

### Reverse Proxy

Run behind Nginx/Traefik for HTTPS:

**Nginx:**
```nginx
location / {
  proxy_pass http://localhost:3000;
  proxy_set_header Host $host;
}
```

**Traefik (labels):**
```yaml
labels:
  - "traefik.http.routers.hostmonk.rule=Host(`dashboard.yourdomain.com`)"
```

### Auto-Start

Use Docker restart policy:
```yaml
restart: unless-stopped
```

Or systemd for local installs.

### Performance

- Disable ping for faster loading: `ping: false`
- Use compact mode for many services
- Reduce refresh interval in settings

---

## ⚡ Quick Reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Start prod | `npm start` |
| Docker build | `docker-compose up -d` |
| Stop Docker | `docker-compose down` |
| View logs | `docker-compose logs -f` |
| Edit config | `nano config/services.yaml` |

---

## 🎉 You're Ready!

Your vintage terminal dashboard is up and running.

**Enjoy monitoring your self-hosted empire!**

```
[ SYSTEM READY ]
[ ALL SERVICES OPERATIONAL ]
[ MONITORING ACTIVE ]
```

---

**Need Help?**
- GitHub Issues
- README.md
- TUTORIAL.md
- CONTRIBUTING.md
