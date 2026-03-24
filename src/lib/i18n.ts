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
  contactCardNote: string;
  openLabelPrefix: string;
  yourName: string;
  email: string;
  message: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  sendMessage: string;
  formHintDefault: string;
  formHintSent: string;
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
    name: "Tran Van Quân",
    role: "Thực Tập Sinh Full-stack Developer",
    location: "TP. Hồ Chí Minh, Việt Nam",
    intro:
      "Mình xây dựng giao diện phản hồi tốt và luồng backend ổn định cho các sản phẩm cần nhanh, mượt và sẵn sàng cho đội ngũ quốc tế.",
    bio:
      "Mình là ứng viên thực tập full-stack, thích biến ý tưởng sản phẩm thành trải nghiệm sạch sẽ, dễ bảo trì. Mình tập trung vào giao diện hiện đại, dễ dùng và được hậu thuẫn bởi dịch vụ backend thực tiễn.",
    goals:
      "Mục tiêu của mình là gia nhập một đội ngũ kỹ thuật quốc tế, đóng góp vào sản phẩm thực tế, nâng tư duy hệ thống và phát triển thành kỹ sư kết nối tốt giữa chất lượng thiết kế và độ tin cậy backend.",
    strengths: [
      "Chủ động từ ý tưởng đến bản triển khai sẵn sàng",
      "Làm tốt cả React UI, REST API và quy trình Git theo nhóm",
      "Tư duy sản phẩm, chú ý UX, hiệu năng và độ rõ ràng của code"
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
      description: "Giao diện sạch, phản hồi tốt và chú trọng trải nghiệm.",
      items: [
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 78 },
        { name: "JavaScript / TypeScript", level: 76 }
      ]
    },
    {
      title: "Backend",
      description: "API và dịch vụ tập trung vào khả năng mở rộng thực tế.",
      items: [
        { name: "Java Spring Boot", level: 77 },
        { name: "C# / .NET", level: 75 },
        { name: "Node.js", level: 74 }
      ]
    },
    {
      title: "Công cụ",
      description: "Công cụ hằng ngày để ship nhanh và cộng tác tốt hơn.",
      items: [
        { name: "Git", level: 79 },
        { name: "GitHub", level: 77 },
        { name: "VS Code", level: 80 }
      ]
    }
  ],
  projects: [
    {
      slug: "sole-mundo-commerce",
      title: "Sole Mundo Commerce Platform",
      category: "Nền tảng Thương mại điện tử",
      summary:
        "Trải nghiệm mua sắm full-stack với giao diện storefront mượt, luồng xác thực và kiến trúc danh mục dễ mở rộng.",
      description:
        "Thiết kế trải nghiệm e-commerce cao cấp để giới thiệu bộ sưu tập giày chọn lọc, điều hướng hiện đại, khu vực tài khoản an toàn và hành trình duyệt sản phẩm tối ưu chuyển đổi.",
      challenge:
        "Thách thức chính là tạo storefront cao cấp ở frontend nhưng vẫn dễ quản trị danh mục và đơn hàng ở backend.",
      solution:
        "Mình xây dựng giao diện React responsive kết hợp backend Spring Boot có cấu trúc, tổ chức model dữ liệu sản phẩm và tạo component tái sử dụng cho card, chi tiết sản phẩm và luồng checkout.",
      outcome:
        "Kết quả là một dự án thương mại điện tử theo tiêu chuẩn production, thể hiện tốt cả độ chỉn chu UI lẫn tư duy full-stack cho mục tiêu thực tập.",
      stack: ["React", "Tailwind CSS", "Java Spring Boot", "REST API", "MySQL"],
      metrics: ["UX xoay quanh danh mục", "Component sản phẩm tái sử dụng", "Kiến trúc sẵn sàng xác thực"],
      githubUrl: "https://github.com/your-username/sole-mundo-commerce",
      demoUrl: "https://solemundo-demo.vercel.app",
      accent: "from-sky-500/25 via-blue-500/20 to-indigo-500/30"
    },
    {
      slug: "inventory-pulse-dashboard",
      title: "Inventory Pulse Dashboard",
      category: "Dashboard Vận hành",
      summary:
        "Dashboard quản lý tồn kho, cập nhật nhà cung cấp và báo cáo dễ theo dõi cho nhóm.",
      description:
        "Xây dựng dashboard giúp đội nhỏ theo dõi sức khỏe tồn kho, hàng sắp về và điểm nghẽn xử lý đơn qua hệ card, biểu đồ và phân nhóm trạng thái rõ ràng.",
      challenge:
        "Dashboard vận hành thường dễ rối mắt, nên thách thức cốt lõi là làm dữ liệu phức tạp trở nên dễ đọc ngay từ cái nhìn đầu.",
      solution:
        "Mình tổ chức UI theo thứ bậc rõ ràng, widget mô-đun và endpoint backend hỗ trợ số liệu tổng quan, lọc và truy xuất nhanh trạng thái tồn kho quan trọng.",
      outcome:
        "Dự án này thể hiện khả năng thiết kế dashboard, tư duy API và biến dữ liệu thô thành thông tin hỗ trợ quyết định.",
      stack: ["React", "Framer Motion", "Node.js", "Express", "PostgreSQL"],
      metrics: ["KPI rõ ràng", "Bố cục sẵn sàng cho bộ lọc", "Báo cáo thân thiện theo nhóm"],
      githubUrl: "https://github.com/your-username/inventory-pulse-dashboard",
      demoUrl: "https://inventory-pulse.vercel.app",
      accent: "from-emerald-500/25 via-teal-500/20 to-cyan-500/30"
    },
    {
      slug: "campus-event-hub",
      title: "Campus Event Hub",
      category: "Nền tảng Cộng đồng",
      summary:
        "Nền tảng dành cho sinh viên để khám phá, lưu và quản lý sự kiện trong một trải nghiệm web hiện đại.",
      description:
        "Tạo trải nghiệm tập trung giúp sinh viên duyệt sự kiện sắp diễn ra, xem chi tiết và tương tác theo danh mục với cảm giác trực quan trên cả mobile và desktop.",
      challenge:
        "Sản phẩm cần hỗ trợ nhiều loại sự kiện và thao tác người dùng mà vẫn giữ giao diện rõ ràng trên màn hình nhỏ.",
      solution:
        "Mình thiết kế module danh mục tái sử dụng, card theo lịch và endpoint dịch vụ giữ dữ liệu sự kiện có cấu trúc, dễ mở rộng.",
      outcome:
        "Sản phẩm cuối thể hiện tư duy frontend hướng người dùng, kỷ luật responsive và khả năng tổ chức tính năng tăng trưởng sạch sẽ.",
      stack: ["React", "Tailwind CSS", "C#", ".NET", "SQL Server"],
      metrics: ["Duyệt sự kiện mobile-first", "Cấu trúc nội dung dễ mở rộng", "Luồng onboarding thân thiện"],
      githubUrl: "https://github.com/your-username/campus-event-hub",
      demoUrl: "https://campus-event-hub.vercel.app",
      accent: "from-amber-500/25 via-orange-500/20 to-rose-500/30"
    },
    {
      slug: "focuslane-habit-tracker",
      title: "FocusLane Habit Tracker",
      category: "Ứng dụng Năng suất",
      summary:
        "Ứng dụng năng suất cá nhân gọn nhẹ để theo dõi streak, mục tiêu và đà tiến bộ theo tuần.",
      description:
        "Phát triển trải nghiệm tập trung vào năng suất với chỉ báo tiến độ rõ ràng, tương tác nhẹ và hệ thống hình ảnh giúp duy trì động lực mà không rối.",
      challenge:
        "Sản phẩm thói quen dễ gây lặp lại, nên thách thức là tạo tương tác đủ tạo động lực nhưng vẫn đơn giản và nhanh.",
      solution:
        "Mình dùng phản hồi chuyển động, card mục tiêu có cấu trúc và cách lưu trữ gọn nhẹ để mang lại trải nghiệm mượt, dễ tiếp cận.",
      outcome:
        "Dự án cho thấy cách mình tư duy về UX giữ chân người dùng, micro-interaction và chuyển hóa hành vi thành giao diện sản phẩm.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      metrics: ["Tập trung micro-interaction", "UX hỗ trợ giữ chân", "Insight tuần đơn giản"],
      githubUrl: "https://github.com/your-username/focuslane-habit-tracker",
      demoUrl: "https://focuslane.vercel.app",
      accent: "from-fuchsia-500/25 via-violet-500/20 to-indigo-500/30"
    }
  ],
  timeline: [
    {
      type: "Experience",
      title: "Thực hành Dự án Full-stack",
      organization: "Dự án cá nhân + học thuật",
      period: "2024 - Nay",
      description:
        "Xây dựng portfolio, dashboard và nền tảng theo định hướng production để nâng năng lực tư duy sản phẩm đầu cuối và sẵn sàng thực tập.",
      highlights: [
        "Chuyển ý tưởng UI thành ứng dụng React responsive",
        "Thiết kế dịch vụ backend với Spring Boot, .NET và Node.js",
        "Rèn luyện cấu trúc code sạch, quy trình Git và component tái sử dụng"
      ]
    },
    {
      type: "Experience",
      title: "Thành viên Cộng tác Frontend",
      organization: "Dự án nhóm sinh viên",
      period: "2023 - 2025",
      description:
        "Làm việc cùng đồng đội để triển khai giao diện, thống nhất quy trình GitHub và lặp nhanh theo phản hồi.",
      highlights: [
        "Chuyển wireframe thành các phần giao diện có thể phát hành",
        "Tập trung vào tính nhất quán thị giác, khoảng cách và responsive",
        "Hỗ trợ phân chia nhiệm vụ và tái sử dụng component"
      ]
    },
    {
      type: "Education",
      title: "Kỹ thuật Phần mềm",
      organization: "Lộ trình Đại học",
      period: "Dự kiến tốt nghiệp 2027",
      description:
        "Xây nền tảng về nguyên lý kỹ thuật phần mềm, cấu trúc dữ liệu, phát triển web app và triển khai dự án cộng tác.",
      highlights: [
        "Học phần phục vụ phát triển ứng dụng full-stack",
        "Áp dụng lập trình qua dự án học tập và cá nhân",
        "Liên tục cải thiện giao tiếp kỹ thuật bằng tiếng Anh"
      ]
    }
  ],
  contactLinks
};

const uiTextMap: Record<Language, UiText> = {
  en: {
    loadingExperience: "Loading portfolio experience...",
    toggleThemeAria: "Toggle theme",
    languageButtonAria: "Toggle language",
    letsTalk: "Let's Talk",
    toggleNavigationAria: "Toggle navigation",
    heroAvailability: "Available for international internship opportunities",
    heroTitleBefore: "Building modern products with",
    heroTitleHighlight: "frontend polish",
    heroTitleAfter: "and backend clarity.",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
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
      "Open to internship roles where I can grow through real product delivery, mentorship, and high engineering standards.",
    aboutEyebrow: "About Me",
    aboutTitle: "A full-stack foundation shaped by product thinking",
    aboutDescription:
      "I approach internship preparation like real product work: build thoughtfully, communicate clearly, and keep polishing until the experience feels trustworthy.",
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
      "Each project is framed to show how I think about the end user, engineering tradeoffs, and the kind of product ownership expected in strong internship environments.",
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
      "Whether it is an internship opportunity, collaboration, or a product conversation, I am open to connecting with teams that care about craftsmanship and growth.",
    contactCardNote:
      "I can also customize this portfolio with your real personal details, real project links, and bilingual content if you want a version ready to deploy immediately.",
    openLabelPrefix: "Open",
    yourName: "Your name",
    email: "Email",
    message: "Message",
    namePlaceholder: "Jane Doe",
    emailPlaceholder: "jane@company.com",
    messagePlaceholder: "Tell me about the role, team, or product you are hiring for.",
    sendMessage: "Send Message",
    formHintDefault: "This form opens your default mail client.",
    formHintSent: "Mail client opened with your draft message.",
    inquiryFrom: "Portfolio inquiry from",
    inquiryFallbackName: "a potential recruiter",
    inquiryDefaultMessage: "Hi, I would like to connect about an opportunity.",
    footerTagline:
      "Crafted for international internship applications with modern UI, motion, and clean engineering.",
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
    heroAvailability: "Sẵn sàng cho các cơ hội thực tập quốc tế",
    heroTitleBefore: "Xây dựng sản phẩm hiện đại với",
    heroTitleHighlight: "giao diện chỉn chu",
    heroTitleAfter: "và backend rõ ràng.",
    viewProjects: "Xem Dự Án",
    downloadCv: "Tải CV",
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
      "Sẵn sàng cho vị trí thực tập nơi mình có thể phát triển qua sản phẩm thực tế, mentoring và tiêu chuẩn kỹ thuật cao.",
    aboutEyebrow: "Giới Thiệu",
    aboutTitle: "Nền tảng full-stack được định hình bởi tư duy sản phẩm",
    aboutDescription:
      "Mình chuẩn bị cho thực tập như làm sản phẩm thật: xây kỹ, trao đổi rõ ràng và liên tục tinh chỉnh đến khi trải nghiệm đủ tin cậy.",
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
      "Mỗi dự án được trình bày để thể hiện cách mình nghĩ về người dùng cuối, đánh đổi kỹ thuật và tinh thần làm chủ sản phẩm trong môi trường thực tập tốt.",
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
      "Dù là cơ hội thực tập, hợp tác hay trao đổi về sản phẩm, mình luôn sẵn sàng kết nối với các đội ngũ coi trọng tay nghề và sự phát triển.",
    contactCardNote:
      "Mình cũng có thể tùy chỉnh portfolio này với thông tin thật của bạn, link dự án thật và nội dung song ngữ để sẵn sàng triển khai ngay.",
    openLabelPrefix: "Mở",
    yourName: "Tên của bạn",
    email: "Email",
    message: "Nội dung",
    namePlaceholder: "Nguyễn Văn A",
    emailPlaceholder: "ban@congty.com",
    messagePlaceholder: "Hãy chia sẻ về vị trí, đội ngũ hoặc sản phẩm bạn đang tuyển.",
    sendMessage: "Gửi Tin Nhắn",
    formHintDefault: "Form này sẽ mở ứng dụng email mặc định của bạn.",
    formHintSent: "Đã mở ứng dụng email với bản nháp của bạn.",
    inquiryFrom: "Liên hệ từ portfolio của",
    inquiryFallbackName: "một nhà tuyển dụng tiềm năng",
    inquiryDefaultMessage: "Xin chào, tôi muốn trao đổi về một cơ hội phù hợp.",
    footerTagline:
      "Được xây dựng cho hồ sơ ứng tuyển thực tập quốc tế với UI hiện đại, chuyển động mượt và kỹ thuật sạch.",
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
