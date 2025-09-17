# Mizu Studio Website

A modern, responsive website for **Mizu Studio**, a creative studio based in Ndirande, Blantyre, specializing in photography, videography, and photo editing.

This website showcases their portfolio, highlights services, and provides easy booking options for clients.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Folder Structure](#folder-structure)
- [Branching Workflow](#branching-workflow)
- [Contributing](#contributing)
- [License / Ownership](#license--ownership)

---

## Technologies

This project is built using:

- [Next.js](https://nextjs.org/) – React framework for server-side rendering
- [TypeScript](https://www.typescriptlang.org/) – Static typing for safety
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [ShadCN UI](https://ui.shadcn.com/) – Prebuilt React components
- [Lucide Icons](https://lucide.dev/) – SVG icon library
- [tw-animate-css](https://www.npmjs.com/package/tw-animate-css) – CSS animation utilities

---

## Installation

Follow these steps to get the project running locally:

1. **Clone the repository**  
```bash
git clone https://github.com/wisdomphiri408/mizuStudio.git
cd mizu-studio
```

2. **Install dependencies**  
```bash
npm install
# or
yarn
```

3. **Start the development server**  
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**  
Visit [http://localhost:3000](http://localhost:3000) to see the website.

---

## Development

While working on the project:

- Use your **feature branches** for any page or component work:
```bash
git checkout -b feature/branch-name
```

- Commit your changes frequently:
```bash
git add .
git commit -m "Describe your changes"
```

- Push your branch to GitHub:
```bash
git push -u origin feature/branch-name
```

---

## Building for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

Start the production server locally:

```bash
npm start
# or
yarn start
```

✅ Your main branch should always contain a **stable, production-ready version** of the website.

---

## Folder Structure

```
mizu-studio/
├─ src/
│  ├─ app/             # Next.js App Router directory
│  │  ├─ layout.tsx    # Root layout with headers/footer
│  │  ├─ page.tsx      # Home page entry
│  │  └─ ...           # Other pages
│  ├─ components/      # Reusable UI components (buttons, cards, nav, etc.)
│  ├─ styles/          # Global CSS and Tailwind configuration
│  │  ├─ globals.css
│  │  └─ ...
│  └─ lib/             # Optional: helper functions, API utils
├─ public/             # Static assets (images, icons, videos)
├─ tailwind.config.ts  # Tailwind CSS configuration
├─ package.json
└─ ...
```

---

## Branching Workflow

- `main` → always stable; contains **shared components, global CSS, headers, footer**. Do **not edit directly**.  
- `feature/ui-core` → optional backup branch for **core shared components/layout**.  
- `feature/home`, `feature/contact`, `feature/portfolio` → page-specific content branches:  
  - Branch off **main**.  
  - Work independently on content or page tweaks.  
  - Merge to **main** only when tested.  
- **Pull Requests** are recommended for merging to main for safety and code review.

---

## Contributing

To keep Mizu Studio's codebase stable and organized, follow these guidelines:

1. **Branching**  
   - Always create a **feature branch** for your work:
```bash
git checkout main
git pull origin main
git checkout -b feature/branch-name
```
   - Page-specific branches: `feature/home`, `feature/contact`, `feature/portfolio`  
   - Optional: `feature/ui-core` for shared components or global CSS changes.

2. **Committing**
```bash
git add .
git commit -m "Add homepage hero section"
```

3. **Pushing**
```bash
git push -u origin feature/branch-name
```

4. **Pull Requests (PRs)**  
- Always create a PR when merging your feature branch into main.  
- PRs allow team review and ensure main stays stable.

5. **Code Safety**  
- Never work directly on `main`.  
- Test your changes locally before merging.  
- If main has new updates while you’re working, pull main into your branch and resolve conflicts:
```bash
git checkout feature/branch-name
git pull origin main
```

6. **Deleting Branches**
```bash
git branch -d feature/branch-name
git push origin --delete feature/branch-name
```

✅ Following these guidelines ensures safe collaboration, prevents accidental overwrites, and keeps the main branch stable.

---

## License / Ownership

This project and its code are proprietary and owned by **Mizu Studio**.  
Unauthorized use, copying, or distribution is prohibited.
