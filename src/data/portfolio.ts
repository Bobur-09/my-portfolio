import { Figma } from "lucide-react";

// Saytning asosiy ma'lumotlarini shu fayldan o'zgartirasiz.
export const portfolio = {
  name: "Bobur Mirzo Mirzayev",
  initials: "BM",
  role: "Frontend Developer & UI/UX Designer",
  greeting: "Hello, I'm",
  headline: "Turning ideas into digital experiences.",
  intro:
    "I create modern and user-friendly web applications that help businesses grow and make an impact.",
  location: "Tashkent, Uzbekistan",
  email: "bobur.mirzayev345@gmail.com",
  phone: "+998 77 153 63 00",
  experience: "1.5+ Years",
  cvUrl: "/cv.pdf", // public/cv.pdf faylini o'zingiz joylang
  portrait: "/images/profile.jpg", // public/images/profile.jpg
  aboutImage: "/images/workspace.jpg", // public/images/workspace.jpg
  socials: [
    { label: "GitHub", url: "https://github.com/Bobur-09" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/bobur-mirzo-mirzayev-7b97b0444" },
    { label: "Telegram", url: "https://t.me/umarovich_bm" }
  ],
  skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Figma", "UI/UX", "Antd design"],
  categories: ["All", "Web Apps", "UI/UX Design", "Landing Pages"],
  projects: [
    {
      title: "Travel Website",
      category: "Web Apps",
      description: "A travel experience platform with destination discovery.",
      image: "/images/project-travel.jpg",
      stack: ["Next.js", "React", "Tailwind"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/Bobur-09/"
    },
    {
      title: "Bizda Admin Panel",
      category: "Web Apps",
      description: "A clean online store admin panel with product browsing and checkout UI.",
      image: "/images/project-shop.jpg",
      stack: ["React.js", "Tailwind CSS", "Ant Design", "TypeScript", "Figma"],
      liveUrl: "https://admin.bizda.uz/",
      codeUrl: "https://github.com/Bobur-09/"
    },
    {
      title: "Bizda Landing Page",
      category: "UI/UX Design",
      description: "A responsive landing page for the Bizda platform.",
      image: "/images/project-shop.jpg",
      stack: ["Figma", "Next.js", "Tailwind", "Ant Design", "TypeScript"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/yourusername/dashboard"
    },
    {
      title: "Portfolio Website",
      category: "Landing Pages",
      description: "A personal portfolio with dark and light themes.",
      image: "/images/project-portfolio.jpg",
      stack: ["Next.js", "Tailwind"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/yourusername/portfolio"
    }
  ]
} as const;
