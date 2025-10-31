# Contributing to HostMonk

First off, thank you for considering contributing to HostMonk! It's people like you that make HostMonk such a great tool for the self-hosted community.

## 🎯 Ways to Contribute

### 1. Add New App Icons

We're always looking to expand our icon library!

**Steps:**
1. Create an SVG icon in `public/icons/yourapp.svg`
2. Follow the icon guidelines below
3. Add mapping to `lib/icons.ts`
4. Test it in a config file
5. Submit a PR!

**Icon Guidelines:**
- **Size:** 100x100 viewBox
- **Style:** Simple, geometric, terminal-aesthetic
- **Colors:** Use `currentColor` for theming
- **Stroke:** 2px stroke width
- **Format:** Clean, optimized SVG

**Example Icon:**
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="50" cy="50" r="35"/>
  <path d="M 30 50 L 70 50"/>
</svg>
```

### 2. Create New Themes

Love retro aesthetics? Create a new theme!

**Steps:**
1. Add theme to `lib/themes.ts`
2. Define all color properties
3. Choose appropriate font
4. Set scanline opacity
5. Test with all components
6. Submit a PR!

**Theme Requirements:**
- Must work with all existing components
- High contrast for accessibility
- Vintage/retro aesthetic
- Unique from existing themes

### 3. Report Bugs

Found a bug? Let us know!

**Before Submitting:**
- Check existing issues
- Try to reproduce the bug
- Gather relevant info (browser, OS, config)

**Bug Report Should Include:**
- Clear, descriptive title
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Your config file (sanitized)

### 4. Suggest Features

Have an idea? We'd love to hear it!

**Good Feature Requests:**
- Clear use case
- Solves a real problem
- Fits project philosophy
- Detailed description
- Mockups/examples (bonus!)

### 5. Improve Documentation

Documentation is crucial!

**Areas to Help:**
- Fix typos
- Improve clarity
- Add examples
- Update screenshots
- Translate to other languages
- Write tutorials

### 6. Submit Code

Want to dive into the codebase?

**Good First Issues:**
- Look for "good first issue" label
- Icon additions
- CSS improvements
- Documentation updates

**Before Starting:**
- Open an issue to discuss major changes
- Check if someone is already working on it
- Read the architecture guide in TUTORIAL.md

## 🛠️ Development Setup

### Prerequisites

- Node.js 20+
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Setup Steps

```bash
# Fork and clone the repo
git clone https://github.com/yourusername/hostmonk.git
cd hostmonk

# Install dependencies
npm install

# Create a config file
cp config/examples/basic.yaml config/services.yaml

# Start development server
npm run dev

# Open http://localhost:3000
```

### Project Structure

```
hostmonk/
├── app/          # Next.js App Router
├── lib/          # Utilities and logic
├── public/       # Static assets
├── config/       # Configuration files
└── docs/         # Documentation
```

### Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Config:** YAML (js-yaml)

Read [TUTORIAL.md](docs/TUTORIAL.md) for detailed architecture info.

## 📝 Code Style

### TypeScript

- Use TypeScript for all new code
- Define proper types
- Avoid `any` type
- Use interfaces over types when possible

**Example:**
```typescript
interface ServiceCardProps {
  service: Service
  enablePing?: boolean
}
```

### React

- Functional components only
- Use hooks (useState, useEffect, etc.)
- Keep components focused (single responsibility)
- Extract reusable logic to custom hooks

**Example:**
```typescript
export default function ServiceCard({ service }: ServiceCardProps) {
  const [status, setStatus] = useState<ServiceStatus>()
  // ...
}
```

### CSS

- Use CSS Modules for component styles
- Follow BEM-like naming
- Mobile-first responsive design
- Use CSS custom properties for theming

**Example:**
```css
.card {
  /* Base styles */
}

.card:hover {
  /* Hover state */
}

.cardTitle {
  /* Element styles */
}
```

### Commits

- Write clear, descriptive commit messages
- Use present tense ("Add feature" not "Added feature")
- Reference issues when applicable

**Good Commits:**
```
Add Grafana icon to icon library

Fix theme switching bug in Safari

Update README with Docker deployment instructions
```

## 🔄 Pull Request Process

### Before Submitting

- [ ] Test your changes locally
- [ ] Run `npm run build` successfully
- [ ] Update documentation if needed
- [ ] Add/update tests if applicable
- [ ] Follow code style guidelines
- [ ] Commit with clear messages

### Submitting

1. **Fork the repo** and create your branch from `main`
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes** and commit them
   ```bash
   git commit -m "Add amazing feature"
   ```

3. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

4. **Open a Pull Request**
   - Clear title describing the change
   - Description of what/why
   - Reference related issues
   - Screenshots for UI changes
   - Checklist of what was done

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Icon addition
- [ ] Theme addition

## Testing
How did you test this?

## Screenshots
If applicable

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Build passes
```

### Review Process

1. Maintainers will review your PR
2. Address any feedback
3. Once approved, we'll merge!
4. Your contribution will be in the next release

## 🎨 Icon Contribution Guidelines

Icons are one of the easiest ways to contribute!

### Popular Apps We Need

Check [GitHub Issues](https://github.com/yourusername/hostmonk/issues?q=is%3Aissue+is%3Aopen+label%3Aicon) for requested icons.

**High Priority:**
- Emby
- Bazarr
- Readarr
- SABnzbd
- Syncthing
- Caddy
- WikiJS
- BookStack
- Netdata
- And many more!

### Creating Icons

**Tools:**
- Inkscape (free, open-source)
- Figma
- Adobe Illustrator
- Any SVG editor

**Process:**
1. Start with 100x100 canvas
2. Keep it simple and geometric
3. Use 2px stroke, no fill
4. Export as optimized SVG
5. Replace colors with `currentColor`

**Optimization:**
```bash
# Use SVGO to optimize
npx svgo youricon.svg
```

## 🌟 Recognition

Contributors will be:
- Listed in README
- Credited in release notes
- Given contributor badge
- Invited to discussions
- Part of something awesome!

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all.

### Standards

**Positive Behavior:**
- Being respectful and inclusive
- Accepting constructive criticism
- Focusing on what's best for the community
- Showing empathy

**Unacceptable Behavior:**
- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Publishing private information

### Enforcement

Violations can be reported to project maintainers. All complaints will be reviewed and investigated.

## ❓ Questions?

- **General Questions:** Open a Discussion
- **Bug Reports:** Open an Issue
- **Feature Requests:** Open an Issue
- **Security Issues:** Email maintainers privately

## 🙏 Thank You!

Your contributions make HostMonk better for everyone in the self-hosted community!

---

```
[ READY TO CONTRIBUTE ]
[ BUILD SOMETHING AMAZING ]
```
