# Design Guidelines: Orange Fitness App

## Design Approach
**Reference-Based Approach** inspired by leading fitness platforms (Nike Training Club, Apple Fitness+, Strava) with a distinctive orange brand identity. Focus on motivation, energy, and visual engagement to drive user commitment.

## Core Design Principles
- **Energetic & Motivational**: Use dynamic imagery and bold typography to inspire action
- **Clean Navigation**: Clear categorization for easy sport/exercise discovery
- **Orange-First Branding**: Embrace orange as the primary brand color with strategic contrast
- **Visual Storytelling**: Lead with powerful imagery showcasing athletic movement

---

## Color Palette

### Primary Colors
- **Orange Primary**: 25 95% 55% (vibrant, energetic orange - headers, CTAs, accents)
- **Orange Deep**: 20 85% 45% (deeper orange for hover states, emphasis)
- **Dark Background**: 220 15% 10% (rich dark base for contrast)
- **Charcoal**: 220 10% 20% (cards, secondary surfaces)

### Supporting Colors
- **Text Primary**: 0 0% 98% (main text on dark)
- **Text Secondary**: 0 0% 70% (metadata, descriptions)
- **Success Green**: 145 65% 50% (completed workouts, achievements)
- **Border Subtle**: 220 10% 25% (card borders, dividers)

**Light Mode** (if needed):
- Background: 30 15% 98%
- Cards: 0 0% 100%
- Text: 220 15% 15%

---

## Typography

**Primary Font**: Inter (Google Fonts) - clean, modern, excellent readability
**Accent Font**: Outfit (Google Fonts) - bold headers, sport category names

### Hierarchy
- **Hero Headline**: text-5xl md:text-7xl, font-bold (Outfit), orange gradient
- **Section Headers**: text-3xl md:text-4xl, font-bold (Outfit)
- **Exercise Titles**: text-xl font-semibold (Inter)
- **Body Text**: text-base leading-relaxed (Inter)
- **Metadata**: text-sm text-secondary (Inter)

---

## Layout System

**Spacing Primitives**: Tailwind units of **4, 6, 8, 12, 16, 20**
- Tight spacing: p-4, gap-4
- Standard sections: py-12 md:py-20
- Generous sections: py-16 md:py-24
- Card padding: p-6 md:p-8

**Container Strategy**:
- Max-width: max-w-7xl mx-auto px-4 md:px-6
- Full-width hero sections with inner containers
- Grid layouts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for exercise cards

---

## Component Library

### Navigation
- **Dark header** with orange logo/branding
- Sticky navigation (sticky top-0 z-50)
- User profile icon/menu in top-right
- Search bar with orange focus state
- Sport category horizontal scroll menu below main nav

### Hero Section
- **Large hero image** (full-width, h-[70vh]) showing dynamic athletic action
- Overlay gradient (from-black/60 to-transparent)
- Centered headline with orange accent text
- Primary CTA button (orange, blurred background)
- Secondary CTA (outline variant with backdrop-blur)

### Exercise Cards
- **Card design**: rounded-xl, dark background (charcoal), hover lift effect
- Thumbnail image at top (aspect-video, object-cover)
- Sport category tag (small orange pill badge)
- Exercise title, duration, difficulty level
- Icon indicators (calories, equipment needed)
- Favorite/bookmark icon (top-right corner)

### Sport Categories
- **Horizontal scrolling carousel** on mobile
- **Grid layout** on desktop (grid-cols-4 lg:grid-cols-6)
- Large circular icons with orange gradient borders
- Category name below icon
- Active state: filled orange background

### User Dashboard
- **Two-column layout**: Sidebar (user stats, achievements) + Main content (recent/favorite exercises)
- Stats cards with orange accent borders
- Progress rings/charts with orange fills
- Recent activity timeline

### Authentication
- **Modal overlay** for login/signup
- Clean, centered form design
- Orange primary button for submission
- Social auth buttons (Google, GitHub via Replit Auth)
- Minimal decoration - focus on functionality

### Exercise Detail View
- **Hero image** of exercise demonstration
- Sticky header with exercise name and favorite button
- Tab navigation (Instructions, Benefits, Tips)
- Step-by-step instructions with numbered badges
- Related exercises carousel at bottom

---

## Images

### Hero Section
**Large hero image**: Dynamic shot of athlete in motion (running, jumping, or multi-sport collage). High-energy, vibrant. Image should have strong contrast for text overlay readability.

### Exercise Cards
**Thumbnail images**: Clear demonstration photos/illustrations of each exercise. Consistent style - prefer illustrated diagrams or high-quality photography on white/neutral backgrounds for clarity.

### Sport Category Icons
Use icon library (Heroicons or Font Awesome) for sport icons: running, weightlifting, yoga, cycling, basketball, swimming, etc.

### User Dashboard
**Profile section**: User avatar placeholder with upload functionality
**Achievement badges**: Illustrated icons for milestones

### Exercise Detail
**Demonstration images**: Step-by-step photos or illustrations showing proper form for each exercise phase.

---

## Animations
**Minimal, purposeful motion only**:
- Card hover: subtle lift (translate-y-1) and shadow increase
- Button hover: slight scale (scale-105) on orange CTAs
- Category selection: smooth color transition
- Page transitions: fade-in content on load

---

## Mobile Optimization
- Single column layouts on mobile
- Sticky bottom navigation bar with key actions
- Larger touch targets (min h-12)
- Horizontal scrolling for category selection
- Collapsible filters for exercise search

---

## Key User Flows

1. **Landing → Browse → Exercise Detail → Start Workout**
2. **Login → Dashboard → Recent Exercises → Continue**
3. **Search → Filter by Sport → Select Exercise → Add to Favorites**

Every screen should reinforce the orange brand identity while maintaining exceptional readability and usability.