# 📊 Next.js Hero UI Template – Component-Based Dashboard

This project is a modern, responsive web application built with **Next.js** using the **Hero UI** component library. It demonstrates a clean, modular design approach by organizing the UI into reusable components such as a **navbar**, **stat blocks**, **filters**, **cards**, and **tables**. The layout is optimized for both desktop and mobile views.

---

## ✨ Features

### ✅ Component-First Architecture
- **Navbar**: Includes icons and stat blocks.
- **Hero Section**: Simple heading with a call-to-action (Download button).
- **Card Component**:
  - Contains a search filter bar in the card header.
  - Table content built using `@heroui/table`.

### 🧠 Smart Rendering
- Table headers and cells are generated dynamically using a `switch-case` logic-based function returning `React.ReactNode`.

### 📱 Responsive Design
- Mobile-first optimizations for:
  - Filters (collapsed/scrollable layout)
  - Table (horizontally scrollable)
  - Mobile-friendly Navbar with hamburger menu and user avatar.

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/)
- [Hero UI](https://heroui.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (via Hero UI)
- TypeScript


---

## 📁 Folder Structure

```bash
├── app/ # App routing (Next.js App Router)
│ ├── error.tsx # Global error boundary
│ ├── layout.tsx # Root layout shared by all routes
│ ├── page.tsx # Main landing page
│ └── providers.tsx # Theme, context, or third-party providers

├── components/
│ └── reusables/ # Reusable components
│      └── Stats.tsx # The reusable stats card where i have the name and value in green thing
│ ├── CustomTable.tsx # Table with dynamic headers and cells
│ ├── Header.tsx # Top section with heading & CTA
│ └── primitives.ts # Shared base UI elements (icons, wrappers)

├── config/ # Application config, constants, etc.
├── data/ # Static data or mock responses
├── public/ # Public assets (images, icons)
├── styles/ # Global or scoped styles (if needed)
├── types/ # TypeScript interfaces and utility types

├── .vscode/ # Editor config (optional)
├── .gitignore
├── next.config.js # Next.js configuration
├── postcss.config.js
├── tailwind.config.js # Tailwind CSS setup
├── tsconfig.json # TypeScript config
├── package.json
├── LICENSE
├── README.md
