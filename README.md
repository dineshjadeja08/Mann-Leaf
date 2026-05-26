# Mann & Leaf 🌿🥥

> **Handmade village essentials for modern homes.**

**Mann & Leaf** is a premium, village-origin, eco-friendly brand from India that creates high-quality, durable household products using 100% natural, renewable materials like coconut fiber, coconut leaf, bamboo, jute, clay, and wood. 

This repository contains the complete frontend codebase for the brand's single-page landing website, designed with a mobile-first, high-aesthetic, artisan-focused storytelling approach.

---

## 🎨 Brand Concept & Visual System

Mann & Leaf bridges the gap between traditional rural craftsmanship and contemporary urban aesthetics. Instead of flashy e-commerce templates or generic tech SaaS designs, this site uses:

*   **Premium Headings**: `DM Serif Display` — capturing the classic, handcrafted, and grounded editorial feel.
*   **Clean Body Typography**: `Plus Jakarta Sans` — ensuring maximum readability across modern digital displays.
*   **Earthy Harmonious Palette**:
    *   `Coconut Brown` — Deep, roasted organic accents (`hsl(25, 45%, 32%)`).
    *   `Leaf Green` — Muted, rain-washed sage details (`hsl(125, 20%, 26%)`).
    *   `Sand Beige` — A warm, soothing organic sand tone (`hsl(35, 30%, 88%)`).
    *   `Warm Charcoal` — Sleek, premium dark mode canvas and text (`hsl(20, 10%, 15%)`).
*   **Dual Theme Support**: Fluid, real-time Light/Dark mode switcher with persistent preference storage.
*   **Organic SVGs**: Custom brand emblem combining a leaf silhouette, woven fiber midribs, and a chimney roof layout.

---

## 🛠️ Technology Stack

Built purely on lightweight, highly optimized web standards for fast, zero-dependency loading and perfect SEO alignment:

1.  **Core Markup**: Semantic **HTML5** with metadata schemas, optimized header hierarchies, aria attributes, and keyboard skip-links.
2.  **Styling**: Modern **Vanilla CSS3** featuring:
    *   Custom HSL property systems for fluid light/dark transitions.
    *   CSS Grid and Flexbox for seamless, responsive mobile-first layouts.
    *   Scroll-linked triggers and button ripple micro-animations.
3.  **Client-side Logic**: Pure **Vanilla JavaScript (ES6)**:
    *   `IntersectionObserver` to lazy-animate elements as they enter the screen and track scroll positions for active nav state updates.
    *   Dynamic sticky header scaling with background blur overlays.
    *   Interactive floating form label transitions.
    *   Robust bulk inquiry validation checking name length, 10-digit Indian telephone patterns, and minimum wholesale volumes (>= 50).

---

## 📂 File Directory

```
mann-and-leaf/
├── assets/
│   ├── hero_broom.png        # Close-up launch product spotlight
│   ├── coconut_scrubber.png  # Sustainable kitchen care pads
│   ├── jute_bag.png          # Golden jute everyday carry tote
│   └── clay_pot.png          # Rustic terracotta tableware
├── index.html                # Semantic structure, sections & SVGs
├── style.css                 # Custom design variables & responsive grid
├── app.js                    # observers, togglers, and form checks
├── .gitignore                # Filters deployment configurations
└── README.md                 # Project documentation
```

---

## 🚀 Running Locally

You can run this project locally without any complex build dependencies or setups.

### 1. Prerequisite
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Start a Local Dev Server
Navigate to the project directory and run a local server:

```bash
# Spin up a fast static server using npx
npx http-server -p 8080
```

### 3. Open in Browser
Open your browser and navigate to:
👉 **[http://localhost:8080](http://localhost:8080)**

---

## 🌐 Deploying Online

This static single-page application is ready to deploy to any cloud provider:

### Option A: Vercel CLI (Recommended)
1. Install or authenticate Vercel:
   ```bash
   npx vercel login
   ```
2. Deploy directly:
   ```bash
   npx vercel --prod --yes
   ```

### Option B: GitHub Dashboard
Since this code is already linked to GitHub, you can import this project directly on the [Vercel Web Dashboard](https://vercel.com/dashboard) or [Netlify Dashboard](https://app.netlify.com/) for automatic, zero-config continuous deployments whenever you push to the `main` branch.

---

## 🌾 Sustainable Livelihoods
Mann & Leaf operates on a fair-trade, direct-sourcing model. Every purchase on Amazon, Flipkart, or Meesho, and every bulk wholesale inquiry submitted through our landing form helps provide dignified, decentralized employment to artisan families in Alappuzha, Kerala, keeping centuries-old craftsmanship alive.
