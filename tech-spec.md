在代码的世界里，没有偶然，只有必然的逻辑。
# MARION - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React + TypeScript + Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| State Management | React useState/useContext |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#FFFFFF',
        accent: '#8B1E1E',
        'accent-light': '#A52A2A',
        'background-alt': '#F5F5F5',
        'text-secondary': '#666666',
        sale: '#B91C1C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section-mobile': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button (customized: no radius, custom padding)
- Input (for newsletter)
- Sheet (for mobile menu)
- Badge (for New/Sale labels)

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Navbar` | - | Fixed navigation with scroll behavior |
| `HeroSection` | - | Full-screen hero with background |
| `ProductCard` | `product: Product` | Product display card with hover |
| `ProductGrid` | `products: Product[], title: string, label: string` | Grid of product cards |
| `CollectionSplit` | - | Two-column collection showcase |
| `AboutBanner` | - | Full-width about section |
| `ReviewsSection` | - | Testimonial carousel |
| `SocialGrid` | - | Instagram-style image grid |
| `Footer` | - | Site footer with newsletter |
| `SectionLabel` | `children: string` | Styled section label (e.g., "(Bestsellers)") |
| `SectionTitle` | `children: string` | Styled section title |
| `ShopButton` | `variant?: 'light' \| 'dark'` | CTA button with arrow |

### Types

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface Review {
  id: string;
  quote: string;
  author: string;
  isVerified: boolean;
}
```

## 4. Animation Implementation Plan

| Interaction | Tech | Implementation |
|-------------|------|----------------|
| Page Load | Framer Motion | `staggerChildren` on main container, `y: 20 -> 0` with opacity |
| Navbar Scroll | React useState + CSS | `useScroll` hook toggles `scrolled` class for bg change |
| Button Hover | Tailwind + Group | `group-hover:translate-x-1` on arrow icon |
| Product Card Hover | Tailwind | `hover:scale-105` on image, `opacity-0 -> opacity-100` on overlay |
| Collection Hover | Tailwind | `hover:scale-108` on image with overflow-hidden container |
| Section Reveal | Framer Motion | `whileInView` with `y: 30 -> 0`, `opacity: 0 -> 1` |
| Reviews Carousel | Framer Motion | `AnimatePresence` with fade transitions |
| Social Grid Hover | Tailwind | `hover:scale-105` with transition |

### Animation Timing Constants

```typescript
const ANIMATION = {
  duration: {
    fast: 0.15,
    default: 0.3,
    slow: 0.5,
  },
  easing: {
    default: [0.4, 0, 0.2, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
  },
  stagger: 0.1,
};
```

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/           # All image assets
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── CollectionSplit.tsx
│   │   ├── AboutBanner.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── SocialGrid.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── SectionTitle.tsx
│   │   └── ShopButton.tsx
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   └── products.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "MARION"

# Install animation library
npm install framer-motion

# Install additional dependencies (if needed)
npm install lucide-react
```

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640px - 1024px | 2 columns for products |
| Desktop | > 1024px | Full layout, 3 columns |

## 8. Performance Considerations

- Use `will-change: transform` on animated elements
- Lazy load images below the fold
- Use `transform` and `opacity` for animations (GPU accelerated)
- Implement `prefers-reduced-motion` media query support
