# Saptarshi Kundu - 3D Portfolio Website

A stunning, cinematic single-page portfolio website featuring **3D WebGL animations**, **scroll-triggered interactions**, and a **strict black-and-white aesthetic**.

## 🎨 Design Philosophy

- **Ultra-modern & Minimal**: High-end fashion brand aesthetic for a developer portfolio
- **Strictly Monochrome**: Black, white, and grayscale only - no other colors
- **3D-First**: Central 3D model that reacts to scroll across sections
- **Cinematic Scrolling**: Each section feels like a scene in a movie
- **Glassmorphism**: Frosted glass UI elements with blur effects

## ✨ Features

### 3D Model & Scroll Interactions
- **Floating 3D abstract tech object** (icosahedron core with orbiting rings and cubes)
- **Scroll-driven animations** using GSAP ScrollTrigger
- Model transforms across sections:
  - **Hero**: Large, centered, slowly rotating
  - **About**: Moves to side and shrinks
  - **Skills**: Rotates based on scroll progress
  - **Projects**: Orbits to opposite side
  - **Experience**: Moves back in Z-space
  - **Contact**: Returns to center and enlarges

### Sections
1. **Hero** - Bold typography with scroll indicator
2. **About** - Glass card layout with personal info
3. **Skills & Tech Stack** - Grid of glassmorphism cards
4. **Projects** - Horizontal project cards with hover effects
5. **Experience & Hackathons** - Timeline layout
6. **Open Source & AI** - Terminal-style typewriter effect
7. **Contact** - Form with social links and footer

### Animations
- **Smooth scroll** with Lenis
- **GSAP** for scroll-triggered animations
- **Staggered reveals** for cards and text
- **Hover effects** with 3D transforms
- **Typewriter effect** in Open Source section

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **3D**: Three.js, React Three Fiber, React Three Drei
- **Animation**: GSAP (ScrollTrigger), Lenis (Smooth Scroll), Framer Motion
- **Styling**: Tailwind CSS v4, Custom CSS
- **Icons**: Lucide React
- **Fonts**: Space Grotesk, Inter, JetBrains Mono (Google Fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone or navigate to the project directory
cd saptarshi-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── canvas/
│   │   ├── Scene.jsx          # Three.js canvas setup
│   │   └── Model.jsx           # 3D model with scroll animations
│   ├── sections/
│   │   ├── Hero.jsx            # Landing section
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills grid
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Experience.jsx      # Timeline
│   │   ├── OpenSource.jsx      # Terminal UI
│   │   └── Contact.jsx         # Contact form
│   └── ui/                     # Reusable UI components
├── App.jsx                     # Main app with Lenis
├── index.css                   # Global styles & theme
└── main.jsx                    # Entry point
```

## 🎨 Customization

### Colors
All colors are defined in `src/index.css` using CSS custom properties:
```css
@theme {
  --color-pure-black: #000000;
  --color-almost-black: #0a0a0a;
  --color-dark-gray: #1a1a1a;
  --color-mid-gray: #808080;
  --color-light-gray: #d0d0d0;
  --color-almost-white: #f0f0f0;
}
```

### 3D Model
Modify `src/components/canvas/Model.jsx` to change:
- Geometry (icosahedron, sphere, custom shapes)
- Materials (metalness, roughness, distortion)
- Orbiting elements (rings, cubes, etc.)
- Scroll-based transformations

### Content
Update section components in `src/components/sections/` with your own:
- Personal information
- Projects
- Skills
- Experience
- Social links

## 📱 Responsive Design

- **Desktop**: Full 3D experience with all animations
- **Tablet**: Optimized layout with simplified 3D
- **Mobile**: Stacked sections, reduced 3D complexity for performance

## ⚡ Performance

- Low-poly 3D models for fast rendering
- Lazy loading of expensive assets
- Optimized scroll animations
- Compressed textures
- Maintains 60 FPS on mid-range devices

## 🌐 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Modern mobile browsers

Requires WebGL support for 3D features.

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Saptarshi Kundu (Sap)**
- Email: saptarshikundu044@gmail.com
- Location: Kolkata, India
- College: Techno Main Salt Lake
- Degree: B.Tech Information Technology

---

*// minimal, but dramatic*
