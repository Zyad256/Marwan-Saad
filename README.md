<div align="center">

# 🛡️ Marwan Saad — Network Security Engineer

### A high-performance, single-page portfolio built with React, Vite & Tailwind CSS

[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**[🔗 Live Demo](#) · [📄 Download CV](public/cv.pdf) · [💼 LinkedIn](https://www.linkedin.com/in/marwan-saad-35b5012a5)**

</div>

---

## ✨ Overview

A sleek, cyber-themed portfolio showcasing expertise in **network security**, **Fortinet technologies**, and **enterprise infrastructure design**. Built as a single-page scrollable app with a "SOC dashboard" aesthetic — dark backgrounds, neon cyan/green accents, animated network topologies, and terminal-style UI components.

---

## 🖼️ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Cyber Dark Theme** | Custom oklch color palette with neon cyan/green accents and grid background |
| 🖥️ **Live Terminal UI** | Interactive terminal components displaying FortiOS & Cisco CLI output |
| 🌐 **Animated Network Topology** | SVG topology diagram with glowing packet dots traveling along network lines |
| ✨ **CSS Animations** | Sweep scanlines, glow pulses, floating particles, shimmer dividers |
| 📱 **Fully Responsive** | Mobile hamburger menu, flexible grids, `min-w-0` overflow protection |
| 🔍 **SEO Optimized** | Full Open Graph, Twitter Card, and meta tag integration |
| 📄 **CV Download** | Direct PDF download from Hero and Resume sections |
| 🏅 **Certificate Gallery** | Image-based certification cards with hover-zoom effects |

---

## 🏗️ Architecture

```
Marwan-Saad/
├── public/
│   ├── Certificates/          # Certificate screenshot images
│   ├── cv.pdf                 # Downloadable CV
│   └── personalImage.png      # Profile photo
├── src/
│   ├── components/
│   │   ├── sections/          # All page sections
│   │   │   ├── Hero.tsx       # Landing with terminal & stats
│   │   │   ├── About.tsx      # Profile, experience timeline
│   │   │   ├── Skills.tsx     # 4-column skill matrix with progress bars
│   │   │   ├── Projects.tsx   # Hotel network case study + topology
│   │   │   ├── Labs.tsx       # SOC & security lab scenarios
│   │   │   ├── Certifications.tsx  # Certificate image cards
│   │   │   ├── Resume.tsx     # Experience snapshot + CV download
│   │   │   └── Contact.tsx    # Contact grid + LinkedIn CTA
│   │   ├── Navbar.tsx         # Scroll-spy sticky navigation
│   │   ├── CyberFooter.tsx    # Footer with quick links
│   │   ├── SectionHeading.tsx # Reusable section header
│   │   └── Terminal.tsx       # Terminal UI component
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── App.tsx                # Main SPA layout with shimmer dividers
│   ├── main.tsx               # React entry point
│   └── styles.css             # Design tokens, animations, keyframes
├── index.html                 # SEO metadata & OG tags
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies & scripts
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/marwan-saad/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:8080**

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `oklch(0.82 0.17 195)` | Neon cyan — headings, accents, borders |
| `--accent` | `oklch(0.85 0.20 145)` | Neon green — status badges, highlights |
| `--background` | `oklch(0.16 0.02 240)` | Deep navy — page background |
| `--muted-foreground` | `oklch(0.68 0.02 230)` | Subdued text — descriptions, labels |
| `--warn` | `oklch(0.82 0.17 75)` | Amber — alert indicators |
| `--gradient-cyber` | `primary → accent` | CTA buttons, glowing elements |

### Animations

| Animation | Class | Description |
|-----------|-------|-------------|
| Sweep Scanline | `.sweep-line` | Horizontal light beam scanning the Hero |
| Glow Pulse | `.glow-pulse` | Breathing neon glow on stat numbers |
| Shimmer Divider | `.shimmer-line` | Flowing gradient line between sections |
| Float Up | `float-up` | Particle dots drifting upward |
| Network Packets | SVG `<animate>` | Dots traveling along topology lines |

### Typography

| Font | Usage |
|------|-------|
| **Space Grotesk** | Display headings, body text |
| **JetBrains Mono** | Terminal UI, code snippets, labels |

---

## 📑 Sections Breakdown

### 1. Hero (`#home`)
Full-width landing with animated terminal showing FortiOS CLI output, quick stats (FortiOS 7.4, 12+ Protocols, 20+ Labs, 99.9% Uptime), and CTA buttons for Projects, Contact, LinkedIn, and CV download.

### 2. About (`#about`)
Professional summary with experience timeline covering NTI Fortinet training, DEPI Network Administration, and Menoufia University. Includes an interactive YAML-style terminal profile.

### 3. Skills (`#skills`)
Four-column skill matrix with animated progress bars:
- **Network Security** — FortiGate, IPS, VPN, NAT
- **Networking** — VLANs, OSPF, EIGRP, HSRP
- **Security Tools** — Wireshark, Nmap, Burp Suite, Kali
- **Software Dev** — C++, Python, Kotlin, SQL

### 4. Projects (`#projects`)
Detailed case study of the **Hotel Network Infrastructure** capstone project featuring an animated SVG topology diagram with live packet simulation, PSIR methodology cards, and CLI configuration snippets.

### 5. Labs (`#labs`)
Hands-on security lab scenarios covering VLAN segmentation, OSPF multi-area routing, ACL hardening, IPsec VPN tunnels, and HSRP failover testing.

### 6. Certifications (`#certifications`)
Visual certificate gallery displaying Fortinet FCP, IBM SkillsBuild Cybersecurity, DEPI Cisco Network Administrator, and Coursera Machine Learning credentials.

### 7. Resume (`#resume`)
Experience snapshot with download CTA linking directly to the PDF CV.

### 8. Contact (`#contact`)
Contact grid with LinkedIn priority CTA, email, phone, GitHub, and location. Includes a terminal-style contact JSON snippet.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [React 19](https://react.dev/) | UI framework |
| [Vite 7](https://vitejs.dev/) | Build tool & dev server |
| [TypeScript 5](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Scroll-triggered animations |
| [Lucide React](https://lucide.dev/) | Icon library |

---

## 📦 Deployment

This is a **static SPA** — deploy to any static hosting provider:

### GitHub Pages
```bash
npm run build
# Deploy the `dist/` folder
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

### Vercel
```bash
# Framework: Vite
# Output directory: dist
```

---

## 📬 Contact

- **Email:** marwansaad12@gmail.com
- **Phone:** +201148649274
- **LinkedIn:** [linkedin.com/in/marwan-saad-35b5012a5](https://www.linkedin.com/in/marwan-saad-35b5012a5)
- **Location:** Giza, Egypt

---

<div align="center">

**Built with 💻 and ☕ by Marwan Saad**

*Designing, securing, and optimizing enterprise networks — one packet at a time.*

</div>
