# Shivam Public School Website

**Knowledge · Values · Excellence**

A modern, production-grade pre-school website for Shivam Public School, Kodipura, Kanakapura Taluk, Bengaluru South District – 562119.

---

## 🚀 Quick Setup in VS Code

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org))
- VS Code ([Download](https://code.visualstudio.com))

### Steps

```bash
# 1. Open the project folder in VS Code
# File → Open Folder → select "shivam-school"

# 2. Open the integrated terminal
# Terminal → New Terminal  (or Ctrl + `)

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser. Hot-reload is enabled.

---

## 📁 Project Structure

```
shivam-school/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/              ← Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Cards.tsx    (Card, Badge, Spinner, Divider, SectionHeader, Avatar, StarRating, Toast)
│   │   │   ├── Inputs.tsx   (Input, Textarea, Select, Checkbox, RadioGroup)
│   │   │   ├── Modal.tsx
│   │   │   └── index.ts
│   │   ├── layout/          ← Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── index.ts
│   │   └── sections/        ← (Phase 2) Page sections
│   ├── pages/               ← Page components
│   │   ├── Home.tsx         ← Full homepage with all sections
│   │   ├── Placeholders.tsx ← Stub pages (Phase 2 & 3 content)
│   │   └── index.ts
│   ├── context/
│   │   └── index.tsx        ← Toast + Modal + AppProvider
│   ├── hooks/
│   │   └── index.ts         ← useScrollAnimation, useCountUp, useToast, etc.
│   ├── constants/
│   │   └── index.ts         ← All school data, programs, nav, footer
│   ├── types/
│   │   └── index.ts         ← TypeScript interfaces
│   ├── styles/
│   │   └── globals.css      ← Tailwind + custom design system
│   ├── App.tsx              ← Router + providers
│   └── main.tsx             ← Entry point
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Design System

| Token        | Value         | Usage                    |
|-------------|---------------|--------------------------|
| Navy         | `#1B3A8C`     | Primary brand, headers   |
| Gold         | `#D4A017`     | Accents, CTAs, highlights|
| Emerald      | `#059669`     | Success, features        |
| Warm BG      | `#FFFBF0`     | Page backgrounds         |
| Font Display | Playfair Display | Headings              |
| Font Body    | Nunito        | Body text                |
| Font Kannada | Noto Sans Kannada | Kannada text          |

---

## 🗺️ Pages & Routes

| Route                  | Component         | Status     |
|------------------------|-------------------|------------|
| `/`                    | HomePage          | ✅ Phase 1  |
| `/about`               | AboutPage         | 🔄 Phase 2  |
| `/programs`            | ProgramsPage      | 🔄 Phase 2  |
| `/programs/:id`        | ProgramDetailPage | 🔄 Phase 2  |
| `/admissions`          | AdmissionsPage    | 🔄 Phase 2  |
| `/admissions/apply`    | ApplyPage         | 🔄 Phase 3  |
| `/appointments`        | AppointmentsPage  | 🔄 Phase 3  |
| `/gallery`             | GalleryPage       | 🔄 Phase 2  |
| `/contact`             | ContactPage       | 🔄 Phase 3  |
| `/privacy`             | PrivacyPage       | 🔄 Phase 2  |
| `/terms`               | TermsPage         | 🔄 Phase 2  |

---

## 📦 Build for Production

```bash
npm run build
# Output goes to /dist — deploy to Netlify, Vercel, or any static host
```

---

## 📞 School Contact

**Shivam Public School**  
Kodipura, Kanakapura Taluk, Bengaluru South – 562119  
📞 98865 51304 | 99001 94111

---

## 🗓️ Phase Roadmap

| Phase | Contents |
|-------|----------|
| **Phase 1** ✅ | Setup, design system, UI components, Navbar, Footer, Layout, Homepage, all routes wired |
| **Phase 2** | About, Programs detail pages, Gallery (masonry + lightbox), rich animations |
| **Phase 3** | Online Admission Form (4-step), Appointment Booking (calendar), Contact Form (EmailJS) |
| **Phase 4** | Fee structure, Blog/News, SEO, PWA, performance optimization |
