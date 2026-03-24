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

export const profile = {
  name: "Tran Van Quân",
  role: "Full-stack Developer Intern",
  location: "Ho Chi Minh City, Vietnam",
  intro:
    "I build responsive interfaces and reliable backend workflows for products that need to feel fast, polished, and ready for global teams.",
  bio:
    "I am a full-stack developer intern candidate who enjoys turning product ideas into clean, maintainable experiences. My focus is building interfaces that feel modern and intuitive while supporting them with practical backend services.",
  goals:
    "I am aiming to join an international engineering team where I can contribute to real product delivery, sharpen my system thinking, and grow into an engineer who bridges design quality with backend reliability.",
  strengths: [
    "Strong ownership from concept to deploy-ready implementation",
    "Comfortable across React UI, REST APIs, and collaborative Git workflows",
    "Product mindset with attention to UX detail, performance, and code clarity"
  ]
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export const heroStats = [
  { value: "4+", label: "Production-style projects" },
  { value: "3", label: "Primary backend ecosystems" },
  { value: "100%", label: "Responsive-first mindset" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces that feel clean, responsive, and conversion-aware.",
    items: [
      { name: "React", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript / TypeScript", level: 88 }
    ]
  },
  {
    title: "Backend",
    description: "API and service work focused on maintainability and practical scaling.",
    items: [
      { name: "Java Spring Boot", level: 87 },
      { name: "C# / .NET", level: 80 },
      { name: "Node.js", level: 78 }
    ]
  },
  {
    title: "Tools",
    description: "Daily workflow tools for shipping faster and collaborating better.",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 93 }
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "sole-mundo-commerce",
    title: "Sole Mundo Commerce Platform",
    category: "E-commerce Platform",
    summary:
      "A full-stack shopping experience with polished storefront UI, authentication flows, and scalable catalog architecture.",
    description:
      "Designed a premium e-commerce experience for showcasing curated footwear collections with modern navigation, secure account areas, and conversion-focused product browsing.",
    challenge:
      "The main challenge was creating a storefront that feels premium on the frontend while staying manageable from the backend for catalog updates and order handling.",
    solution:
      "I built a responsive React interface paired with a structured Spring Boot backend, organized product data models, and designed reusable components for cards, product details, and checkout-oriented flows.",
    outcome:
      "The result is a production-style commerce showcase that demonstrates both UI polish and full-stack implementation thinking suitable for internship applications.",
    stack: ["React", "Tailwind CSS", "Java Spring Boot", "REST API", "MySQL"],
    metrics: ["Catalog-first UX", "Reusable product components", "Auth-ready architecture"],
    githubUrl: "https://github.com/your-username/sole-mundo-commerce",
    demoUrl: "https://solemundo-demo.vercel.app",
    accent: "from-sky-500/25 via-blue-500/20 to-indigo-500/30"
  },
  {
    slug: "inventory-pulse-dashboard",
    title: "Inventory Pulse Dashboard",
    category: "Operations Dashboard",
    summary:
      "A management dashboard for stock visibility, supplier updates, and team-friendly reporting.",
    description:
      "Built a dashboard interface that helps small teams monitor inventory health, incoming stock, and fulfillment bottlenecks through clear cards, charts, and status groupings.",
    challenge:
      "Operational dashboards often become visually noisy, so the core challenge was making complex inventory data easy to read at a glance.",
    solution:
      "I structured the UI with a strong hierarchy, modular widgets, and backend endpoints that support summary metrics, filtering, and fast retrieval of critical stock states.",
    outcome:
      "This project highlights dashboard design, API thinking, and the ability to transform raw data into practical decision support.",
    stack: ["React", "Framer Motion", "Node.js", "Express", "PostgreSQL"],
    metrics: ["Clear KPI surfaces", "Filter-ready layout", "Team-focused reporting"],
    githubUrl: "https://github.com/your-username/inventory-pulse-dashboard",
    demoUrl: "https://inventory-pulse.vercel.app",
    accent: "from-emerald-500/25 via-teal-500/20 to-cyan-500/30"
  },
  {
    slug: "campus-event-hub",
    title: "Campus Event Hub",
    category: "Community Platform",
    summary:
      "A student-focused platform for exploring, saving, and managing campus events through a modern web experience.",
    description:
      "Created a centralized experience where students can browse upcoming events, review details, and interact with event categories in a way that feels intuitive on mobile and desktop.",
    challenge:
      "The product needed to support many event types and user actions without overwhelming the interface or losing clarity on smaller screens.",
    solution:
      "I designed reusable category modules, calendar-aware card layouts, and service endpoints that keep event data structured and easy to extend.",
    outcome:
      "The final product demonstrates user-centered frontends, responsive design discipline, and the ability to organize feature growth cleanly.",
    stack: ["React", "Tailwind CSS", "C#", ".NET", "SQL Server"],
    metrics: ["Mobile-first event browsing", "Scalable content structure", "Friendly onboarding flow"],
    githubUrl: "https://github.com/your-username/campus-event-hub",
    demoUrl: "https://campus-event-hub.vercel.app",
    accent: "from-amber-500/25 via-orange-500/20 to-rose-500/30"
  },
  {
    slug: "focuslane-habit-tracker",
    title: "FocusLane Habit Tracker",
    category: "Productivity App",
    summary:
      "A lightweight personal productivity app for tracking streaks, goals, and weekly momentum.",
    description:
      "Developed a productivity-focused experience with clean progress indicators, lightweight interactions, and a visual system built to keep users motivated without clutter.",
    challenge:
      "Habit products can feel repetitive, so the challenge was designing interactions that stay motivating while still being simple and fast.",
    solution:
      "I used motion-driven feedback, structured goal cards, and lightweight persistence patterns to deliver a smooth experience with an approachable learning curve.",
    outcome:
      "This project shows how I think about retention-oriented UX, micro-interactions, and translating user behavior into product-friendly interfaces.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    metrics: ["Micro-interaction driven", "Retention-friendly UX", "Simple weekly insights"],
    githubUrl: "https://github.com/your-username/focuslane-habit-tracker",
    demoUrl: "https://focuslane.vercel.app",
    accent: "from-fuchsia-500/25 via-violet-500/20 to-indigo-500/30"
  }
];

export const timeline: TimelineItem[] = [
  {
    type: "Experience",
    title: "Full-stack Developer Project Practice",
    organization: "Self-directed + Academic Projects",
    period: "2024 - Present",
    description:
      "Built production-style portfolio, dashboard, and platform projects to strengthen end-to-end product thinking and internship readiness.",
    highlights: [
      "Translated UI concepts into responsive React applications",
      "Designed backend services with Spring Boot, .NET, and Node.js",
      "Practiced clean code structure, Git workflows, and reusable components"
    ]
  },
  {
    type: "Experience",
    title: "Frontend Collaboration Contributor",
    organization: "Student Team Projects",
    period: "2023 - 2025",
    description:
      "Worked with teammates on delivering interfaces, aligning on GitHub workflows, and iterating quickly based on feedback.",
    highlights: [
      "Converted wireframes into shippable interface sections",
      "Focused on visual consistency, spacing, and responsive behavior",
      "Helped organize task ownership and component reuse"
    ]
  },
  {
    type: "Education",
    title: "Software Engineering",
    organization: "University Track",
    period: "Expected Graduation 2027",
    description:
      "Building a foundation in software engineering principles, data structures, web application development, and collaborative project delivery.",
    highlights: [
      "Coursework supporting full-stack application development",
      "Applied programming practice through academic and personal builds",
      "Continuously improving technical communication in English"
    ]
  }
];

export const contactLinks = [
  {
    label: "Email",
    value: "hello@minhanh.dev",
    href: "mailto:hello@minhanh.dev"
  },
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://linkedin.com/in/your-profile"
  }
];
