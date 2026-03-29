import {
  contactLinks,
  heroStats,
  navItems,
  profile,
  projects,
  skillCategories,
  timeline,
  type ContactLink,
  type HeroStat,
  type NavItem,
  type Profile,
  type Project,
  type SkillCategory,
  type TimelineItem
} from "@/lib/data";
import type { Language } from "@/hooks/useLanguage";

type PortfolioData = {
  navItems: NavItem[];
  profile: Profile;
  heroStats: HeroStat[];
  skillCategories: SkillCategory[];
  projects: Project[];
  timeline: TimelineItem[];
  contactLinks: ContactLink[];
};

type UiText = {
  loadingExperience: string;
  toggleThemeAria: string;
  languageButtonAria: string;
  letsTalk: string;
  toggleNavigationAria: string;
  heroAvailability: string;
  heroTitleBefore: string;
  heroTitleHighlight: string;
  heroTitleAfter: string;
  viewProjects: string;
  downloadCv: string;
  profileIllustrationAlt: string;
  productMindset: string;
  productMindsetBody: string;
  currentFocus: string;
  heroFocusItems: string[];
  heroInternshipNote: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutCardTitles: {
    intro: string;
    goals: string;
    strengths: string;
  };
  skillsEyebrow: string;
  skillsTitle: string;
  skillsDescription: string;
  projectsEyebrow: string;
  projectsTitle: string;
  projectsDescription: string;
  featuredProject: string;
  quickView: string;
  caseStudy: string;
  liveDemo: string;
  timelineEyebrow: string;
  timelineTitle: string;
  timelineDescription: string;
  timelineType: {
    Experience: string;
    Education: string;
  };
  contactEyebrow: string;
  contactTitle: string;
  contactDescription: string;
  openLabelPrefix: string;
  yourName: string;
  email: string;
  message: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  sendMessage: string;
  formHintDefault: string;
  formHintSending: string;
  formHintSentSuccess: string;
  formHintSentError: string;
  formValidationError: string;
  inquiryFrom: string;
  inquiryFallbackName: string;
  inquiryDefaultMessage: string;
  footerTagline: string;
  footerBuiltWith: string;
  dialogChallenge: string;
  dialogSolution: string;
  dialogOutcome: string;
  dialogStack: string;
  dialogHighlights: string;
  projectNotFoundTitle: string;
  projectNotFoundDescription: string;
  backToProjects: string;
  detailOverview: string;
  detailChallenge: string;
  detailSolution: string;
  detailOutcome: string;
  detailTechStack: string;
  detailHighlights: string;
  detailNote: string;
  notFoundHeadline: string;
  notFoundDescription: string;
  returnHome: string;
  scrollToTopAria: string;
};

const viData: PortfolioData = {
  navItems: [
    { id: "about", label: "Giới Thiệu" },
    { id: "skills", label: "Kỹ Năng" },
    { id: "projects", label: "Dự Án" },
    { id: "timeline", label: "Hành Trình" },
    { id: "contact", label: "Liên Hệ" }
  ],
  profile: {
    name: "Trần Văn Quân",
    role: "Website Developer",
    location: "Phường Hiệp Phú, TP. Thủ Đức",
    intro:
      "Mình là sinh viên năm 4 ngành Công nghệ Thông tin, đam mê xây dựng website với giao diện trực quan, responsive cao và trải nghiệm người dùng mượt mà.",
    bio:
      "Mình là sinh viên năm 4 chuyên ngành Kỹ thuật Phần mềm tại HUTECH. Mình tập trung phát triển website theo định hướng thực tiễn với kiến trúc rõ ràng và giao diện thân thiện, đồng thời đã có kinh nghiệm dự án với React, TypeScript, Java Spring Boot, ASP.NET Core và Laravel.",
    goals:
      "Mình đang ứng tuyển vị trí Website Developer để áp dụng nền tảng đã học vào môi trường thực tế và tiếp tục nâng cao năng lực trên toàn bộ vòng đời phát triển và triển khai website.",
    strengths: [
      "Kinh nghiệm triển khai giao diện responsive với kiến trúc component tái sử dụng",
      "Nắm chắc OOP, MVC, REST API, CRUD và tích hợp backend thực tiễn",
      "Thích nghi nhanh với Git workflow, CI/CD và công cụ AI hỗ trợ phát triển"
    ]
  },
  heroStats: [
    { value: "4+", label: "Dự án mang phong cách production" },
    { value: "3", label: "Hệ sinh thái backend chính" },
    { value: "100%", label: "Ưu tiên responsive" }
  ],
  skillCategories: [
    {
      title: "Frontend",
      description: "Xây dựng giao diện responsive và thân thiện với người dùng.",
      items: [
        { name: "React", level: 80 },
        { name: "Vue.js", level: 76 },
        { name: "JavaScript / TypeScript", level: 78 }
      ]
    },
    {
      title: "Backend",
      description: "Phát triển dịch vụ và API theo định hướng kiến trúc rõ ràng.",
      items: [
        { name: "Java Spring Boot", level: 77 },
        { name: "ASP.NET Core", level: 75 },
        { name: "Node.js", level: 74 },
        { name: "PHP (Laravel)", level: 72 }
      ]
    },
    {
      title: "Công cụ",
      description: "Công cụ quản lý mã nguồn, dữ liệu và tự động hóa quy trình phát hành.",
      items: [
        { name: "Git", level: 79 },
        { name: "GitHub", level: 78 },
        { name: "GitHub Actions", level: 74 },
        { name: "MySQL / SQL Server", level: 73 }
      ]
    }
  ],
  projects: [
    {
      slug: "personal-portfolio-website",
      title: "Personal Portfolio Website",
      category: "Dự án Frontend",
      summary:
        "Website portfolio cá nhân được xây dựng để trình bày rõ ràng hồ sơ, kỹ năng kỹ thuật và các dự án tiêu biểu tới nhà tuyển dụng.",
      description:
        "Phát triển portfolio hiện đại với giao diện responsive cao, dễ điều hướng và hiệu ứng chuyển động mượt để đảm bảo trải nghiệm xuyên suốt trên nhiều thiết bị.",
      challenge:
        "Xây dựng một website thương hiệu cá nhân thể hiện rõ năng lực kỹ thuật nhưng vẫn giữ trải nghiệm trực quan, nhanh và nhất quán trên mọi kích thước màn hình.",
      solution:
        "Triển khai kiến trúc React + TypeScript có tổ chức, tái sử dụng section, kết hợp animation mượt và bố cục responsive để tối ưu trải nghiệm duyệt nội dung.",
      outcome:
        "Giúp mình thể hiện rõ định hướng UI/UX cá nhân và nâng cao năng lực xây dựng giao diện frontend responsive phục vụ mục tiêu ứng tuyển thực tế.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      metrics: ["UX responsive đa thiết bị", "Animation mượt", "Truyền tải thương hiệu cá nhân"],
      githubUrl: "https://github.com/quanqklasd123/My-Portfolio",
      demoUrl: "https://quanqklasd123.github.io/My-Portfolio/",
      accent: "from-emerald-500/25 via-teal-500/20 to-cyan-500/30"
    },
    {
      slug: "sole-mundo-commerce",
      title: "Sole Mundo (Shoes Shop)",
      category: "Dự án Thương mại điện tử",
      summary:
        "Nền tảng bán giày trực tuyến với đầy đủ chức năng duyệt sản phẩm, lọc tìm kiếm, quản lý giỏ hàng và thanh toán an toàn.",
      description:
        "Xây dựng hệ thống thương mại điện tử thực tiễn bằng Java Spring Boot, MySQL và Thymeleaf nhằm mang lại trải nghiệm mua sắm rõ ràng cho người dùng và vận hành backend ổn định.",
      challenge:
        "Cân bằng giữa trải nghiệm mua sắm thân thiện cho khách hàng và độ tin cậy của hệ thống backend trong quản lý sản phẩm và đơn hàng.",
      solution:
        "Triển khai các luồng nghiệp vụ cốt lõi như duyệt sản phẩm, lọc tìm kiếm, giỏ hàng và thanh toán trên kiến trúc phân lớp tách biệt rõ business logic và data layer.",
      outcome:
        "Hoàn thiện trải nghiệm mua sắm end-to-end và củng cố tư duy kiến trúc backend, quản lý dữ liệu cũng như khả năng bảo trì hệ thống.",
      stack: ["Java Spring Boot", "MySQL", "Thymeleaf"],
      metrics: ["Duyệt + lọc sản phẩm", "Giỏ hàng + thanh toán an toàn", "Nền tảng quản lý đơn hàng"],
      githubUrl: "https://github.com/quanqklasd123/Sole-Mundo",
      demoUrl: "https://github.com/quanqklasd123/Sole-Mundo",
      accent: "from-sky-500/25 via-blue-500/20 to-indigo-500/30"
    },
    {
      slug: "no-code-web-app-builder",
      title: "No-code Web App Builder",
      category: "Nền tảng Full-stack",
      summary:
        "Nền tảng cho phép người dùng xây dựng ứng dụng tùy chỉnh bằng thao tác kéo-thả và xuất bản lên marketplace cộng đồng.",
      description:
        "Phát triển trải nghiệm no-code bằng React, ASP.NET Core và MongoDB để hỗ trợ quá trình tạo ứng dụng trực quan và chia sẻ sản phẩm trong cộng đồng.",
      challenge:
        "Thiết kế hệ thống hỗ trợ mức độ tùy biến ứng dụng cao và nhiều sản phẩm do người dùng xuất bản, đồng thời vẫn giữ kiến trúc sạch và dữ liệu an toàn.",
      solution:
        "Kết hợp trình dựng kéo-thả ở frontend với các dịch vụ backend để lưu trữ, xuất bản và quản lý ứng dụng theo luồng vận hành hướng marketplace.",
      outcome:
        "Trao cho người dùng khả năng tự xây dựng ứng dụng linh hoạt, đồng thời giúp mình tiến bộ rõ rệt về tư duy kiến trúc tổng thể và thiết kế hệ thống.",
      stack: ["React", "ASP.NET Core", "MongoDB"],
      metrics: ["Trình dựng kéo-thả", "Xuất bản marketplace", "Nâng cao tư duy hệ thống"],
      githubUrl: "https://github.com/quanqklasd123/NEXUS-403",
      demoUrl: "https://github.com/quanqklasd123/NEXUS-403",
      accent: "from-amber-500/25 via-orange-500/20 to-rose-500/30"
    }
  ],
  timeline: [
    {
      type: "Experience",
      title: "Phát triển phần mềm theo dự án",
      organization: "Dự án học thuật + cá nhân",
      period: "2023 - Nay",
      description:
        "Thực hiện nhiều dự án mô phỏng thực tế ở cả frontend và backend để nâng cao kỹ năng triển khai sản phẩm.",
      highlights: [
        "Xây dựng kiến trúc phân lớp và multi-tenant",
        "Triển khai giao diện responsive với React và CSS framework hiện đại",
        "Rèn luyện quy trình làm việc với Git và tài liệu dự án"
      ]
    },
    {
      type: "Education",
      title: "Công nghệ Thông tin (Kỹ thuật Phần mềm)",
      organization: "Đại học HUTECH",
      period: "2022 - 2026",
      description:
        "Sinh viên năm cuối với định hướng chuyên sâu về kỹ thuật phần mềm và phát triển hệ thống web.",
      highlights: [
        "Major: Software Engineering",
        "GPA: 3.0 / 4.0",
        "Học phần và dự án về frontend, backend và cơ sở dữ liệu"
      ]
    },
    {
      type: "Experience",
      title: "Chứng chỉ và tự học",
      organization: "Cisco NetAcad + Tự học",
      period: "2025",
      description:
        "Liên tục củng cố kiến thức kỹ thuật qua các chứng chỉ và lộ trình tự học có cấu trúc.",
      highlights: [
        "Networking Basics (11/2025)",
        "JavaScript Essentials 1",
        "JavaScript Essentials 2 (12/2025)"
      ]
    }
  ],
  contactLinks: [
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
  ]
};

const uiTextMap: Record<Language, UiText> = {
  en: {
    loadingExperience: "Loading portfolio experience...",
    toggleThemeAria: "Toggle theme",
    languageButtonAria: "Toggle language",
    letsTalk: "Let's Talk",
    toggleNavigationAria: "Toggle navigation",
    heroAvailability: "Open to Website Developer opportunities",
    heroTitleBefore: "Building modern products with",
    heroTitleHighlight: "frontend polish",
    heroTitleAfter: "and backend clarity.",
    viewProjects: "View Projects",
    downloadCv: "Download CV (PDF)",
    profileIllustrationAlt: "Profile illustration",
    productMindset: "Product mindset",
    productMindsetBody: "I care about experiences that feel as intentional as the code behind them.",
    currentFocus: "Current focus",
    heroFocusItems: [
      "Responsive React interfaces with premium visual rhythm",
      "Backend services in Spring Boot, Node.js, and .NET",
      "Portfolio-ready projects for international company applications"
    ],
    heroInternshipNote:
      "Open to website development roles where I can contribute to real products, collaborate with teams, and keep improving engineering quality.",
    aboutEyebrow: "About Me",
    aboutTitle: "A full-stack foundation shaped by product thinking",
    aboutDescription:
      "I approach software development like real product work: build thoughtfully, communicate clearly, and keep polishing until the experience feels trustworthy.",
    aboutCardTitles: {
      intro: "Personal introduction",
      goals: "Career goals",
      strengths: "Strengths"
    },
    skillsEyebrow: "Skills",
    skillsTitle: "A stack designed for practical delivery",
    skillsDescription:
      "My toolkit is centered on shipping polished user interfaces while understanding the backend systems needed to support them cleanly.",
    projectsEyebrow: "Projects",
    projectsTitle: "Selected work that balances code quality and visual clarity",
    projectsDescription:
      "Each project is framed to show how I think about end users, engineering tradeoffs, and practical product ownership in real development teams.",
    featuredProject: "Featured project",
    quickView: "Quick View",
    caseStudy: "Case Study",
    liveDemo: "Live Demo",
    timelineEyebrow: "Experience & Education",
    timelineTitle: "A timeline built around growth, shipping, and readiness",
    timelineDescription:
      "Even at the intern stage, I want my portfolio to communicate progression clearly: what I have built, how I collaborate, and where I am heading next.",
    timelineType: {
      Experience: "Experience",
      Education: "Education"
    },
    contactEyebrow: "Contact",
    contactTitle: "Let's build something thoughtful together",
    contactDescription:
      "Whether it is a frontend opportunity, collaboration, or a product conversation, I am open to connecting with teams that care about craftsmanship and growth.",
    openLabelPrefix: "Open",
    yourName: "Your name",
    email: "Email",
    message: "Message",
    namePlaceholder: "Jane Doe",
    emailPlaceholder: "jane@company.com",
    messagePlaceholder: "Tell me about the role, team, or product you are hiring for.",
    sendMessage: "Send Message",
    formHintDefault: "Send your message directly from this form.",
    formHintSending: "Sending...",
    formHintSentSuccess: "Your message has been sent successfully.",
    formHintSentError: "Unable to send right now. Please try again in a moment.",
    formValidationError: "Please enter your name, a valid email, and your message.",
    inquiryFrom: "Portfolio inquiry from",
    inquiryFallbackName: "a potential recruiter",
    inquiryDefaultMessage: "Hi, I would like to connect about an opportunity.",
    footerTagline:
      "Crafted to showcase frontend engineering strengths with modern UI, smooth motion, and maintainable architecture.",
    footerBuiltWith: "Built with React, Tailwind CSS, Framer Motion, and a lot of attention to detail",
    dialogChallenge: "Challenge",
    dialogSolution: "Solution",
    dialogOutcome: "Outcome",
    dialogStack: "Stack",
    dialogHighlights: "Highlights",
    projectNotFoundTitle: "Project not found.",
    projectNotFoundDescription: "The case study you are looking for does not exist.",
    backToProjects: "Back to Projects",
    detailOverview: "Project overview",
    detailChallenge: "Challenge",
    detailSolution: "Solution",
    detailOutcome: "Outcome",
    detailTechStack: "Tech stack",
    detailHighlights: "Key highlights",
    detailNote:
      "This detailed route exists to make React Router meaningful in the portfolio and gives you a place to expand each project into a stronger case study later.",
    notFoundHeadline: "The page you requested is not here.",
    notFoundDescription: "The portfolio route may have changed, or the page was never created.",
    returnHome: "Return Home",
    scrollToTopAria: "Scroll to top"
  },
  vi: {
    loadingExperience: "Đang tải trải nghiệm portfolio...",
    toggleThemeAria: "Chuyển giao diện sáng tối",
    languageButtonAria: "Chuyển ngôn ngữ",
    letsTalk: "Trao Đổi",
    toggleNavigationAria: "Mở đóng menu điều hướng",
    heroAvailability: "Sẵn sàng cho các cơ hội Website Developer",
    heroTitleBefore: "Xây dựng sản phẩm hiện đại với",
    heroTitleHighlight: "giao diện chỉn chu",
    heroTitleAfter: "và backend rõ ràng.",
    viewProjects: "Xem Dự Án",
    downloadCv: "Tải CV (PDF)",
    profileIllustrationAlt: "Minh họa hồ sơ cá nhân",
    productMindset: "Tư duy sản phẩm",
    productMindsetBody: "Mình quan tâm đến những trải nghiệm chỉn chu như chính phần code phía sau chúng.",
    currentFocus: "Trọng tâm hiện tại",
    heroFocusItems: [
      "Giao diện React responsive với nhịp thị giác cao cấp",
      "Dịch vụ backend bằng Spring Boot, Node.js và .NET",
      "Dự án sẵn sàng cho hồ sơ ứng tuyển công ty quốc tế"
    ],
    heroInternshipNote:
      "Sẵn sàng cho các vị trí website development nơi mình có thể đóng góp cho sản phẩm thực tế và tiếp tục nâng cao chất lượng kỹ thuật.",
    aboutEyebrow: "Giới Thiệu",
    aboutTitle: "Nền tảng full-stack được định hình bởi tư duy sản phẩm",
    aboutDescription:
      "Mình tiếp cận phát triển phần mềm như làm sản phẩm thật: xây kỹ, trao đổi rõ ràng và liên tục tinh chỉnh đến khi trải nghiệm đủ tin cậy.",
    aboutCardTitles: {
      intro: "Giới thiệu bản thân",
      goals: "Mục tiêu nghề nghiệp",
      strengths: "Điểm mạnh"
    },
    skillsEyebrow: "Kỹ Năng",
    skillsTitle: "Bộ công nghệ hướng đến triển khai thực tế",
    skillsDescription:
      "Bộ kỹ năng của mình tập trung vào việc ship giao diện mượt mà, đồng thời hiểu rõ hệ thống backend để hỗ trợ sản phẩm sạch và ổn định.",
    projectsEyebrow: "Dự Án",
    projectsTitle: "Những sản phẩm cân bằng chất lượng code và tính rõ ràng thị giác",
    projectsDescription:
      "Mỗi dự án được trình bày để thể hiện cách mình nghĩ về người dùng cuối, đánh đổi kỹ thuật và tinh thần làm chủ sản phẩm trong môi trường phát triển thực tế.",
    featuredProject: "Dự án nổi bật",
    quickView: "Xem Nhanh",
    caseStudy: "Phân Tích Dự Án",
    liveDemo: "Bản Demo",
    timelineEyebrow: "Kinh Nghiệm & Học Vấn",
    timelineTitle: "Hành trình tập trung vào phát triển, triển khai và sẵn sàng",
    timelineDescription:
      "Ngay ở giai đoạn thực tập, mình muốn portfolio thể hiện tiến bộ rõ ràng: đã làm gì, cộng tác thế nào và sẽ đi tiếp ra sao.",
    timelineType: {
      Experience: "Kinh Nghiệm",
      Education: "Học Vấn"
    },
    contactEyebrow: "Liên Hệ",
    contactTitle: "Cùng xây dựng điều gì đó chỉn chu",
    contactDescription:
      "Dù là cơ hội frontend, hợp tác hay trao đổi về sản phẩm, mình luôn sẵn sàng kết nối với các đội ngũ coi trọng tay nghề và sự phát triển.",
    openLabelPrefix: "Mở",
    yourName: "Tên của bạn",
    email: "Email",
    message: "Nội dung",
    namePlaceholder: "Nguyễn Văn A",
    emailPlaceholder: "ban@congty.com",
    messagePlaceholder: "Hãy chia sẻ về vị trí, đội ngũ hoặc sản phẩm bạn đang tuyển.",
    sendMessage: "Gửi Tin Nhắn",
    formHintDefault: "Bạn có thể gửi tin nhắn trực tiếp từ form này.",
    formHintSending: "Đang gửi...",
    formHintSentSuccess: "Đã gửi tin nhắn thành công.",
    formHintSentError: "Gửi chưa thành công. Vui lòng thử lại sau ít phút.",
    formValidationError: "Vui lòng nhập đầy đủ họ tên, email hợp lệ và nội dung tin nhắn.",
    inquiryFrom: "Liên hệ từ portfolio của",
    inquiryFallbackName: "một nhà tuyển dụng tiềm năng",
    inquiryDefaultMessage: "Xin chào, tôi muốn trao đổi về một cơ hội phù hợp.",
    footerTagline:
      "Được xây dựng để thể hiện năng lực frontend với UI hiện đại, chuyển động mượt và kiến trúc dễ bảo trì.",
    footerBuiltWith: "Xây dựng bằng React, Tailwind CSS, Framer Motion và rất nhiều sự chăm chút",
    dialogChallenge: "Thách thức",
    dialogSolution: "Giải pháp",
    dialogOutcome: "Kết quả",
    dialogStack: "Công nghệ",
    dialogHighlights: "Điểm nổi bật",
    projectNotFoundTitle: "Không tìm thấy dự án.",
    projectNotFoundDescription: "Case study bạn đang tìm hiện không tồn tại.",
    backToProjects: "Quay Lại Dự Án",
    detailOverview: "Tổng quan dự án",
    detailChallenge: "Thách thức",
    detailSolution: "Giải pháp",
    detailOutcome: "Kết quả",
    detailTechStack: "Stack công nghệ",
    detailHighlights: "Điểm nhấn chính",
    detailNote:
      "Route chi tiết này giúp React Router có ý nghĩa hơn trong portfolio và là nơi để bạn mở rộng từng dự án thành case study mạnh hơn sau này.",
    notFoundHeadline: "Trang bạn yêu cầu không tồn tại.",
    notFoundDescription: "Đường dẫn portfolio có thể đã thay đổi hoặc trang này chưa được tạo.",
    returnHome: "Về Trang Chủ",
    scrollToTopAria: "Cuộn lên đầu trang"
  }
};

export function getUiText(language: Language) {
  return uiTextMap[language];
}

export function getPortfolioData(language: Language): PortfolioData {
  if (language === "vi") {
    return viData;
  }

  return {
    navItems,
    profile,
    heroStats,
    skillCategories,
    projects,
    timeline,
    contactLinks
  };
}
