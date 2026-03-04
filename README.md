# Cloneable Personal Portfolio

A modern, responsive, and easily customizable personal portfolio template built with Next.js 15, Tailwind CSS, and TypeScript.

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

- Node.js (v18 or newer recommended)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Customization

This portfolio is designed to be easily customized by editing the configuration files located in `src/constants/`. You don't need to dive deep into the component code to change the content.

### 1. Personal Information

Edit `src/constants/PersonalInfomation.tsx` (Note: filename as is) to update your contact details and social links.

```typescript
// src/constants/PersonalInfomation.tsx

public static readonly location = {
  text: "New York, USA", // Your Location
  href: "...",
};
public static readonly email = {
  text: "your.email@example.com", // Your Email
  href: "mailto:your.email@example.com",
};
```

### 2. Experience & Education

Edit `src/constants/Experience.tsx` to add your work history and education.

```typescript
// src/constants/Experience.tsx

{
  id: "1",
  role: "Software Engineer",
  company: "Tech Corp",
  period: "2023 - Present",
  description: [
    "Developed web applications...",
    "Improved performance by...",
  ],
  type: "work", // or "education"
  icon: <Briefcase ... />,
},
```

### 3. Projects Showcase

Edit `src/constants/Project.tsx` to modify your project portfolio.

```typescript
// src/constants/Project.tsx

{
  id: "1",
  title: "My Awesome Project",
  description: "A brief description of what you built...",
  techStack: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://demo.com",
  imageGradient: "from-blue-600 to-violet-600", // Tailwind CSS gradient classes
},
```

### 4. Skills

Edit `src/constants/SkillGroup.tsx` to update your technical skills.

```typescript
// src/constants/SkillGroup.tsx

public static readonly frontend = {
  label: "Frontend",
  skills: ["React", "Vue", "Angular"], // Add your skills here
};
```

## 🎨 Themes & Styling

The project uses **Tailwind CSS** for styling.

- Global styles are in `src/app/globals.css`.
- Theme colors (primary, background, etc.) are defined in the CSS variables within `src/app/globals.css`.

To change the color scheme, simply update the CSS variables:

```css
/* src/app/globals.css */
--color-brand: #your-color;
--color-bg-primary: #your-bg-color;
```

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Static typing
- [Lucide React](https://lucide.dev/) - Icons

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will auto-detect the build settings.
4. Click **Deploy**.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
