# Three Days Off Website

A contemplative digital experience designed by **Quiet Warrior Productions** for the global pause movement happening August 30 - September 1, 2025.

## 🎯 Project Overview

Three Days Off is a conversion instrument tuned for a worldwide exhale::designed to facilitate a 72-hour mini-sabbatical that returns participants to themselves during Labor Day weekend 2025.

### Design Philosophy
- **Contemplative First**: Every interaction supports rather than fragments attention
- **Beautifully Minimal**: Swiss design precision meets Japanese ma (negative space)  
- **Ethically Viral**: Growth through genuine value, not psychological manipulation
- **Universally Accessible**: WCAG 2.2 AA compliance, available regardless of ability
- **Data Transparent**: Users know exactly what we collect and why

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom contemplative design system
- **Animations**: Framer Motion (reduced motion compliant)
- **TypeScript**: Full type safety
- **Deployment**: Optimized for Vercel/Netlify

### Key Features
- **Live Counters**: Real-time pledge and venue partner tracking
- **Breath Pacer**: Interactive breathing exercise component
- **Contemplative UI**: Design system inspired by Bauhaus and Japanese minimalism
- **Accessibility**: Keyboard navigation, screen reader optimization
- **Performance**: <2s global load times, <50kB CSS budget

## 📱 Site Structure

### Core Pages
- **Home** (`/`) - One-breath pitch with live counters
- **Pledge** (`/pledge`) - 15-second commitment flow  
- **How It Works** (`/how-it-works`) - Progressive scroll in "sevens of threes"
- **Preparing** (`/preparing`) - Three-day preparation guide
- **Venues** (`/venues`) - Public venue directory and registration
- **Field Notes** (`/field-notes`) - Practice kit and community stories
- **Three Days On** (`/three-days-on`) - Gentle contrast page
- **Press** (`/press`) - Media resources and information

## 🎨 Design System

### Color Palette
```css
--warm-cream: #F5F1E8     /* Primary background */
--deep-brown: #2C1810     /* Primary text */
--sage-green: #6B8E6B     /* Accent color */
--soft-gray: #E8E5E0      /* Secondary */
--warm-white: #FEFCF8     /* Highlight */
```

### Typography
- **Display**: Inter (bold, condensed for headlines)
- **Body**: Inter (regular, highly readable)
- **Hierarchy**: Hero → Display → Heading → Subheading → Body

### Components
- **Navigation**: Minimal, accessible, mobile-first
- **CounterDisplay**: Real-time updates with gentle animations
- **BreathPacer**: Interactive breathing exercise with phases
- **Form Elements**: Contemplative styling with clear focus states

## 🔒 Privacy & Data Safety

### Privacy-First Design
- Email storage separated from pledges (salted hash links)
- Minimal data collection (city, timezone, optional email)
- Transparent opt-ins with clear language
- Auto-deletion 30 days post-event (unless opted into ongoing updates)
- One-click export/delete user control

### Security Standards
- HTTPS everywhere
- Environment variables for sensitive data
- Row-level security on database
- GDPR/CCPA compliant by design

## 📊 Growth Strategy

### Ethical Viral Mechanisms
1. **Post-Pledge Sharing**: City badge + customizable message
2. **Noon Ripple**: Daily 60-second pause reminders (opt-in)
3. **Three-Friend Invite**: Mathematical enthusiasm referral system
4. **Field Notes RSS**: Weekly digest of community submissions
5. **Venue Spotlight**: Rotating featured venues on homepage

### Conversion Targets
- Visitor → Pledge: 8-12%
- Visitor → Venue Partner: 3-5%  
- Email opt-in rate: 40-60%
- Noon Ripple participation: 30-40%

## 🎯 Launch Timeline

### Week 1 (August 15-21, 2025)
- [x] Home, Pledge, Preparing, Press pages live
- [x] Live counters functional
- [x] Breath pacer implemented
- [ ] First Field Notes blog post

### Week 2 (August 22-28)
- [ ] Venues registration and listing
- [ ] How 3DO Works progressive scroll
- [ ] Noon Ripple reminder system
- [ ] Three Days On contrast page

### Week 3 (August 29 - September 1)
- [ ] Complete Practice Kit cards
- [ ] Downloadable signage pack
- [ ] Anchor venue announcements
- [ ] Press outreach campaign
- [ ] **EVENT: Three Days Off occurs**

## 🏆 Awards Strategy

QWP positioning for recognition:
- **Awwwards**: Site of the Day/Month/Year submissions
- **Webby Awards**: Wellness category
- **CSS Design Awards**: Innovative use of contemplative design
- **Core77**: Digital experience category
- **Fast Company**: Innovation by Design

## 👥 Team Credits

**Quiet Warrior Productions**
- Jennings Nakamura - Creative Director & Strategic Vision
- Elle Rosewood - Creative Director & Experience Design
- Maya Chen - Lead Visual Designer
- David Santos - Senior UX Architect
- Alex Rodriguez - Lead Frontend Developer

## 📄 License

This project represents the digital manifestation of a global wellness movement. Built with consciousness, designed for connection.

---

*"Technology should breathe with human rhythm, not against it."*

**Ready to ship the worldwide exhale.**

