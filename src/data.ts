import { ServiceItem, ProcessStep, WhyChooseItem, ProjectSample } from './types';

export const HERO_DATA = {
  title: "Hi, I'm Nithil",
  subheading: "Professional Website Developer",
  description: "I create modern, responsive, and user-friendly websites for businesses, startups, restaurants, cafes, and personal brands.",
  phone: "7416775421",
  whatsappUrl: "https://wa.me/917416775421",
};

export const ABOUT_DATA = {
  title: "About Me",
  tagline: "Bridging the gap between brilliant ideas and exceptional digital experiences.",
  text: "I'm Nithil, a passionate Website Developer who helps businesses build a strong online presence. I design and develop modern websites that are fast, responsive, and visually appealing.",
  detailedParagraph: "Whether you run a high-traffic local restaurant, a growing startup, or a professional agency, your website is your digital storefront. I focus on creating pixel-perfect, lightning-fast sites tailored to your unique audience, utilizing modern frameworks to ensure you convert visitors into active, loyal clients.",
  stats: [
    { value: "4.9★", label: "Client Rating" },
    { value: "100%", label: "Mobile Responsive" },
    { value: "Fast", label: "Delivery Speed" },
    { value: "24/7", label: "Support Ready" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "website-design",
    title: "Website Design",
    description: "Visually stunning, clean, and intuitive UI/UX designs crafted specifically for your target audience, reflecting your unique brand identity.",
    iconName: "Palette",
    features: [
      "Custom Typography & Layouts",
      "Interactive Prototyping",
      "High-Contrast Color Harmonies",
      "Brand-Aligned Styling"
    ],
    duration: "3-5 Days",
    pageCount: "Figma Mockups & Wireframes",
    matchTier: "Perfect for new brands starting online"
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Feature-rich professional websites to establish your startup or agency. Designed to command authority and convert traffic into leads.",
    iconName: "Briefcase",
    features: [
      "Dynamic Lead Capture Forms",
      "Services & Team Showcases",
      "Integrated Testimonials Grid",
      "SEO-Ready Setup"
    ],
    duration: "7-10 Days",
    pageCount: "Multi-page (5-10 Pages)",
    matchTier: "Perfect for Agencies, Consultants, Startups"
  },
  {
    id: "restaurant-websites",
    title: "Restaurant Websites",
    description: "Enticing websites featuring digital menus, live reservation systems, Google Maps integration, and gorgeous high-resolution food showcases.",
    iconName: "Utensils",
    features: [
      "Interactive Filterable Menu",
      "Table Inquiry system",
      "Mobile-First Call & Map Links",
      "Social Media Integrations"
    ],
    duration: "5-7 Days",
    pageCount: "Custom Speed Optimized pages",
    matchTier: "Perfect for Cafes, Restaurants, Bakeries"
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description: "Elegant, clean showpieces for artists, designers, recruiters, writers, and freelancers looking to stand out in their industry.",
    iconName: "FolderGit2",
    features: [
      "Stately Case Study Layouts",
      "Interactive Filter Elements",
      "Built-in CV/Resume Downloaders",
      "Direct Call-to-Action sections"
    ],
    duration: "4-6 Days",
    pageCount: "Highly Optimized (1-3 Pages)",
    matchTier: "Perfect for Freelancers, Artists, Job Seekers"
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "High-converting single-page layouts focused on a single call-to-action. Rigorously optimized for marketing campaigns and product launches.",
    iconName: "Sparkles",
    features: [
      "Conversion Rate Optimization (CRO)",
      "Above-the-fold Capture Forms",
      "Brisk Loading Speed (< 1s)",
      "Custom Micro-animations"
    ],
    duration: "2-4 Days",
    pageCount: "High-Intent Single Page",
    matchTier: "Perfect for Ad Campaigns, Ebooks, App Launches"
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "Breathe new life into aging, slow, or low-converting websites with a complete visual makeup, speed overhaul, and mobile optimization.",
    iconName: "RefreshCw",
    features: [
      "Comprehensive Speed Auditing",
      "Modern Color & Card styling",
      "Transition from old builder to custom code",
      "Core Web Vitals Boost"
    ],
    duration: "5-8 Days",
    pageCount: "Full Audit & Overhaul",
    matchTier: "Perfect for Outdated Business Sites"
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Discussion",
    tag: "Understand & Strategize",
    description: "We dive deep into your objective. We discuss your ideal target market, your absolute preferred brand aesthetics, necessary key page capabilities, and establish a firm roadmap.",
    deliverables: ["Project Roadmap Document", "Sitemap Outline", "Timeline Estimate"]
  },
  {
    stepNumber: 2,
    title: "Design",
    tag: "Visualize & Approve",
    description: "I construct sleek, high-fidelity UI/UX layouts in Figma focusing on visual rhythm, negative space, modern card components, and interactive responsive pathways.",
    deliverables: ["Figma Layout Link", "Typography & Color board", "Mobile/Desktop Wireframes"]
  },
  {
    stepNumber: 3,
    title: "Development",
    tag: "Code & Optimize",
    description: "I write high-performance, responsive code adhering to semantic HTML standards. I integrate state management, smooth framer motions, and ensure lightning-fast speed results.",
    deliverables: ["Interactive Beta Link", "Responsive Verification", "Speed Audit Reports"]
  },
  {
    stepNumber: 4,
    title: "Launch",
    tag: "Go Live & Support",
    description: "After strict multi-browser testing, your site is deployed to a high-speed production server, hooked up to your domain name, indexed with basic SEO, and launched into the world.",
    deliverables: ["Domain Routing Check", "SEO Index Setup", "1-Month Free Premium Support"]
  }
];

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: "modern-design",
    title: "Modern Design",
    description: "No generic templates. I design bespoke interfaces following Swiss minimal design grids, gorgeous negative spaces, and striking visual elements.",
    iconName: "Paintbrush",
    badge: "Bespoke Styles"
  },
  {
    id: "mobile-responsive",
    title: "Mobile Responsive",
    description: "Over 60% of web traffic is mobile. I rigorously test and build to ensure your site performs perfectly on iPhones, Androids, tablets, and wide monitors.",
    iconName: "Layers",
    badge: "100% Flex-fluid"
  },
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description: "I respect your marketing calendar. By utilizing modern web tech and focused milestones, I deliver clean products on or ahead of the deadline.",
    iconName: "Zap",
    badge: "Strict Milestones"
  },
  {
    id: "professional-support",
    title: "Professional Support",
    description: "I don't leave you stranded after launch. You get real, reliable human support to answer questions, make quick changes, and keep your site humming.",
    iconName: "ShieldCheck",
    badge: "Peace of Mind"
  },
  {
    id: "affordable-pricing",
    title: "Affordable Pricing",
    description: "Premium freelance solutions without standard bloated agency overhead costs. Fair, transparent tier-pricing tailored strictly to your specific budget size.",
    iconName: "DollarSign",
    badge: "High Roi"
  }
];

export const PROJECT_SAMPLES: ProjectSample[] = [
  {
    id: "1",
    title: "Bistro Verre",
    category: "Restaurant Websites",
    description: "A gorgeous, immersive web presence for a fine dining restaurant with fluid digital menus, custom reservation inquiry forms, and elegant micro-interactions.",
    tags: ["Restaurant", "Interactive Menu", "Mobile Booking"],
    mockImage: "utensils"
  },
  {
    id: "2",
    title: "Apex Logistics",
    category: "Business Websites",
    description: "A bold, corporate-grade page structure designed for a global logistics fleet, complete with quick shipment calculators, interactive quote triggers, and real-time support prompts.",
    tags: ["Corporate", "Lead Capturing", "Grid Layout"],
    mockImage: "briefcase"
  },
  {
    id: "3",
    title: "Sora Creative Agency",
    category: "Portfolio Websites",
    description: "A striking, heavy-typography showcase built for a motion production house. Features immersive image-fade lazy load panels and structured case study sections.",
    tags: ["Minimalist", "Agency", "Stagger Animations"],
    mockImage: "palette"
  },
  {
    id: "4",
    title: "Verdant.ly SaaS",
    category: "Landing Pages",
    description: "A crisp, nature-accented direct conversion landing page for a smart farming application. Designed for maximum signups and responsive feature highlighting.",
    tags: ["SaaS", "High Conversion", "Fast Load"],
    mockImage: "sparkles"
  }
];
