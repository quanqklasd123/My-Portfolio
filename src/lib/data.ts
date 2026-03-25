export type NavItem = {
  id: string;
  label: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  items: Array<{
    name: string;
    level: number;
  }>;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  stack: string[];
  metrics: string[];
  githubUrl: string;
  demoUrl: string;
  accent: string;
};

export type TimelineItem = {
  type: "Experience" | "Education";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  intro: string;
  bio: string;
  goals: string;
  strengths: string[];
};

export type HeroStat = {
  value: string;
  label: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const profile: Profile = {
  name: "Tran Van Quan",
  role: "Frontend Developer",
  location: "Hiep Phu Ward, Thu Duc City",
  intro:
    "Final-year Information Technology student building responsive web interfaces with practical project experience across modern frontend and backend ecosystems.",
  bio:
    "I am a final-year IT student majoring in Software Engineering at HUTECH University. I enjoy building practical products with clean architecture and user-friendly interfaces, and I have hands-on project experience with React, TypeScript, Java Spring Boot, and ASP.NET Core.",
  goals:
    "I am applying for a Frontend Developer role to work in a real-world environment, contribute to actual products, and continue improving my ability to design responsive UI and collaborate in complete web system delivery.",
  strengths: [
    "Hands-on project delivery with reusable component architecture",
    "Solid understanding of OOP, MVC, REST API, and CRUD principles",
    "Strong adaptability with modern tools, AI-assisted workflows, and team collaboration"
  ]
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export const heroStats: HeroStat[] = [
  { value: "4+", label: "Production-style projects" },
  { value: "3", label: "Primary backend ecosystems" },
  { value: "100%", label: "Responsive-first mindset" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive and user-friendly interfaces with modern frameworks.",
    items: [
      { name: "React", level: 80 },
      { name: "Vue.js", level: 76 },
      { name: "JavaScript / TypeScript", level: 78 }
    ]
  },
  {
    title: "Backend",
    description: "Service development and API implementation with practical architecture patterns.",
    items: [
      { name: "Java Spring Boot", level: 77 },
      { name: "ASP.NET Core", level: 75 },
      { name: "Node.js", level: 74 }
    ]
  },
  {
    title: "Tools",
    description: "Version control, editor workflow, and deployment automation tools.",
    items: [
      { name: "Git", level: 79 },
      { name: "GitHub", level: 78 },
      { name: "GitHub Actions", level: 74 }
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "sole-mundo-commerce",
    title: "Sole Mundo (Shoes Shop)",
    category: "E-commerce Project",
    summary:
      "A layered-architecture e-commerce project focused on maintainability, role management, and practical database handling.",
    description:
      "Built an e-commerce system based on a real-world model with Java Spring Boot, MySQL, and Thymeleaf, emphasizing structure and scalability.",
    challenge:
      "Ensuring the architecture remains easy to maintain and extend while handling user roles and core commerce flows.",
    solution:
      "Applied a layered design (Controller - Service - Repository), implemented role-based behaviors, and organized MySQL operations with clear data flow boundaries.",
    outcome:
      "Strengthened understanding of system architecture, data handling, and scalability in backend-driven web applications.",
    stack: ["Java Spring Boot", "MySQL", "Thymeleaf"],
    metrics: ["Layered architecture", "Role management", "Scalable backend foundation"],
    githubUrl: "https://github.com/quanqklasd123/Sole-Mundo",
    demoUrl: "https://github.com/quanqklasd123/Sole-Mundo",
    accent: "from-sky-500/25 via-blue-500/20 to-indigo-500/30"
  },
  {
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    category: "Frontend Project",
    summary:
      "A bilingual (English/Vietnamese) portfolio with responsive design and smooth motion-driven user experience.",
    description:
      "Developed a modern portfolio focused on clean UI architecture, reusable components, and practical product interactions.",
    challenge:
      "Building a scalable frontend structure that remains clean while supporting multiple sections, languages, and interaction flows.",
    solution:
      "Implemented reusable components, custom hooks, centralized content management, language switching, dark/light mode, and project detail routing.",
    outcome:
      "Improved frontend architecture thinking and practical skills in building responsive, user-friendly product interfaces.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: ["Bilingual UI", "Reusable architecture", "Responsive UX"],
    githubUrl: "https://github.com/quanqklasd123/My-Portfolio",
    demoUrl: "https://github.com/quanqklasd123/My-Portfolio",
    accent: "from-emerald-500/25 via-teal-500/20 to-cyan-500/30"
  },
  {
    slug: "no-code-web-app-builder",
    title: "No-code Web App Builder",
    category: "Full-stack Platform",
    summary:
      "A drag-and-drop web app builder with a publishing marketplace and multi-tenant architecture.",
    description:
      "Built a platform that allows users to create applications through visual interactions and publish them to a shared community marketplace.",
    challenge:
      "Supporting multiple users and applications while keeping tenant data isolated and secure.",
    solution:
      "Implemented a multi-tenant architecture with separated data contexts, combined with a React-based drag-and-drop interface and ASP.NET Core services.",
    outcome:
      "Gained practical experience in system thinking, user-centric features, and market-oriented product development.",
    stack: ["React", "ASP.NET Core", "MongoDB"],
    metrics: ["Drag-and-drop builder", "Marketplace sharing", "Multi-tenant security"],
    githubUrl: "https://github.com/quanqklasd123/NEXUS-403",
    demoUrl: "https://github.com/quanqklasd123/NEXUS-403",
    accent: "from-amber-500/25 via-orange-500/20 to-rose-500/30"
  }
];

export const timeline: TimelineItem[] = [
  {
    type: "Experience",
    title: "Project-based Software Development",
    organization: "Academic + Personal Projects",
    period: "2023 - Present",
    description:
      "Delivered multiple real-world inspired projects across frontend and backend technologies to strengthen practical engineering skills.",
    highlights: [
      "Built and maintained layered and multi-tenant architectures",
      "Implemented responsive interfaces with React and modern CSS frameworks",
      "Collaborated through Git workflows and project documentation"
    ]
  },
  {
    type: "Education",
    title: "Information Technology (Software Engineering)",
    organization: "HUTECH University",
    period: "2022 - 2026",
    description:
      "Final-year student with academic focus on software engineering fundamentals and web system development.",
    highlights: [
      "Major: Software Engineering",
      "GPA: 3.0 / 4.0",
      "Coursework and projects in frontend, backend, and database systems"
    ]
  },
  {
    type: "Experience",
    title: "Certifications and Self-learning",
    organization: "Cisco NetAcad + Self-study",
    period: "2025",
    description:
      "Continually improved technical foundations through structured certificates and independent learning.",
    highlights: [
      "Networking Basics (Nov 2025)",
      "JavaScript Essentials 1",
      "JavaScript Essentials 2 (Dec 2025)"
    ]
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "tvquan2004@gmail.com",
    href: "mailto:tvquan2004@gmail.com"
  },
  {
    label: "GitHub",
    value: "github.com/quanqklasd123",
    href: "https://github.com/quanqklasd123"
  }
];
