# 🚀 My Portfolio Website

A modern, minimalist portfolio website built with React, Tailwind CSS, and Vite. Perfect for showcasing your projects and skills!

## ✨ Features

- **Responsive Design** - Works beautifully on mobile, tablet, and desktop
- **Dark/Light Theme** - Toggle between dark and light modes
- **Modern UI** - Built with Tailwind CSS for a professional look
- **Smooth Animations** - Subtle animations and transitions
- **Fast Performance** - Built with Vite for blazing-fast development and builds
- **Easy to Customize** - Simple component structure for easy modifications

## 📁 Project Structure

```
src/
├── Navbar.tsx          # Navigation bar with theme toggle
├── Hero.tsx            # Hero/landing section
├── About.tsx           # About me section
├── Projects.tsx        # Portfolio projects section
├── Skills.tsx          # Skills display
├── Contact.tsx         # Contact form and social links
├── Footer.tsx          # Footer
├── projects.ts         # Project data
├── skills.ts           # Skills data
├── App.tsx             # Main app component
├── index.css           # Global styles
└── main.tsx            # Entry point
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open in browser:**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 📝 Customization Guide

### Update Your Information

**1. Edit projects data** (`src/projects.ts`):
```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description",
    image: "image-url",
    tags: ["React", "Node.js"],
    link: "https://github.com/yourprofile/repo",
    demo: "https://project-demo.com"
  }
];
```

**2. Edit skills data** (`src/skills.ts`):
```typescript
export const skills = {
  frontend: ["React", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Express"],
  tools: ["Git", "GitHub", "VS Code"],
  soft: ["Communication", "Problem Solving"]
};
```

**3. Update contact information** (`src/Contact.tsx`):
- Replace email addresses
- Update social media links (GitHub, LinkedIn, Twitter)

**4. Personalize Hero section** (`src/Hero.tsx`):
- Change the welcome message
- Update description text
- Modify the emoji or add your image

## 🎨 Customize Styling

### Colors
Colors are managed through Tailwind CSS classes. To change theme colors:
- Edit color values in components (e.g., `from-blue-500 to-purple-600`)
- Refer to [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)

### Dark Mode
The dark mode is controlled by the `isDark` state in `App.tsx`. Pass it to all components.

## 🚀 Deployment Options

### **Vercel** (Recommended - Free)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### **Netlify** (Free)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Auto-deploys on every push

### **GitHub Pages**
```bash
npm run build
# Upload dist/ folder to GitHub Pages
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🎯 Next Steps

1. **Replace Sample Projects** - Add your real projects
2. **Update Skills** - List your actual tech stack
3. **Add Your Photo** - Replace emoji with your image in About section
4. **Setup Email** - Integrate contact form with email service (Formspree, EmailJS)
5. **Deploy** - Choose a hosting platform and go live!

## 📧 Contact Form Integration

To make the contact form functional:

### Option 1: Formspree
1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a form
3. Update the form submission in `Contact.tsx`

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Get your service ID and template ID
3. Update the Contact component with EmailJS integration

## 🐛 Troubleshooting

**Port 5173 already in use:**
```bash
npm run dev -- --port 3000
```

**Build errors:**
```bash
rm -rf node_modules
npm install
npm run build
```

## 📄 License

This project is open source and available for personal and commercial use.

## 💡 Tips for Beginners

- Start by customizing the data files (projects.ts, skills.ts)
- Learn by modifying component styling
- Practice by adding new sections
- Build real projects to showcase
- Deploy early and iterate

Happy coding! 🎉

