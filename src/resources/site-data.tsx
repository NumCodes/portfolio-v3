const siteData = {
  meta: {
    baseURL: "https://numcodes.vercel.app",
    keywords: [
      "Num Codes",
      "Nweze Ugochukwu Matthew",
      "Full-stack developer",
      "AI Systems Researcher",
      "Content Creator",
      "Community Management",
      "Social Media Management",
      "Next.js",
      "Discord bots",
      "Digital marketplace",
    ],
  },
  person: {
    firstName: "Matthew",
    lastName: "Nweze",
    name: "Num Codes",
    role: "AI Systems Researcher · Full-Stack Developer ",
    avatar: "/images/avatar.jpg",
    email: "iamnumcodes@gmail.com",
    phone: "+234 903 791 0725",
    website: "https://numcodes.vercel.app",
    timezone: "Africa/Nigeria",
    address: "Ebonyi, Nigeria",
    languages: ["Spanish", "English"],
    biography:
      "Professional software developer & AI systems researcher with 4+ years of experience in full-stack development, community management, and social media.",
  },
  hero: {
    headline: "Full-Stack Developer & AI Researcher",
    subline: (
      <>
        2+ years building scalable platforms, managing communities, and creating content across
        Instagram, YouTube, and TikTok. Founder of <strong>Anion</strong> — shipping
        products used by millions worldwide.
      </>
    ),
    featured: {
      label: "An!on Editor",
      href: "https://anion-editor.vercel.app/",
      badge: "A Simple Editor for Building in the Browser",
    },
    ctaPrimary: {
      label: "Explore An!on",
      href: "https://anion-editor.vercel.app/",
    },
    ctaSecondary: {
      label: "Watch Accessilearn in action",
      href: "https://accessilearn.app",
    },
    stats: [
      { value: "15K+", label: "Developers inside An!on" },
      { value: "1.2M+", label: "Accessilearn users across Africa" },
      { value: "2+", label: "Years in community & social media management" },
    ],
  },
  newsletter: {
    display: false,
    title: "Build log",
    description: "Shipping notes from An!on, Accessilearn, and creator studio automations.",
  },
  social: [
    { name: "Instagram", icon: "instagram", link: "https://instagram.com/num_codes" },
    { name: "YouTube", icon: "youtube", link: "http://www.youtube.com/@numcodes" },
    { name: "TikTok", icon: "tiktok", link: "https://tiktok.com/@numcodes" },
    { name: "Discord", icon: "discord", link: "https://discord.gg/numcodes_18763" },
    { name: "GitHub", icon: "github", link: "https://github.com/numcodes" },
    { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/ugochukwu-nweze-08812a2b8" },
    { name: "Twitter", icon: "twitter", link: "https://x.com/CodesNum80638" },
    { name: "Telegram", icon: "telegram", link: "#" },
  ],
  about: {
    introTitle: "Who I am",
    introDescription:
      "I am a professional web developer and software engineer with a strong focus on building scalable, high-performance applications. Over the years, I have been deeply involved in full-stack development, designing and developing platforms from the ground up. My expertise includes working with modern technologies such as JavaScript, React.js, Next.js, and backend systems that power reliable and efficient digital products. I have experience building dynamic web applications, AI-powered tools, and robust infrastructures that deliver seamless user experiences. My work spans web platforms, digital solutions, and performance-driven systems designed for real-world use.",
    experiences: [
      {
        company: "An!on Editor",
        timeframe: "Jan 2026 - Present",
        role: "Founder & CEO",
        achievements: [
          "An!on Code Editor is your all-in-one web development playground right in the browser. It's designed for developers who want a seamless environment to craft, preview, and manage their web projects without the hassle of context switching.",
        ],
        images: [],
        link: "https://anion-editor.vercel.app/",
      },
    ],
    studies: [
      {
        name: "Computer Science Education (in-progress)",
        description:
          "Alex Ekwueme Federal University of Nigeria Abakaliki - four-year program focused on Computer Science Education.",
      },
      {
        name: "Web Design and Coding (Associate)",
        description:
          "Digital Dreams Academy - specializing in modern web tech, UI/UX, and AI-assisted front-end projects.",
      },
    ],
    technical: [
      {
        title: "Frontend Development",
        description: "95% proficiency",
        images: [],
        tags: [
          { name: "React.js", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Tailwind CSS", icon: "css" },
          { name: "HTML5", icon: "html" },
          { name: "CSS3", icon: "css" },
        ],
      },
      {
        title: "Backend Development",
        description: "90% proficiency",
        images: [],
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Php", icon: "Php"},
          { name: "Express.js", icon: "javascript" },
          { name: "Socket.IO", icon: "javascript" },
          { name: "Go", icon: "code" },
        ],
      },
      {
        title: "Database & Data",
        description: "85% proficiency",
        images: [],
        tags: [
          { name: "MongoDB", icon: "database" },
          { name: "MySQL", icon: "database" },
          { name: "PostgreSQL", icon: "database" },
        ],
      },
      {
        title: "DevOps & Tools",
        description: "90% proficiency",
        images: [],
        tags: [
          { name: "Git", icon: "github" },
          { name: "GitHub", icon: "github" },
          { name: "Linux", icon: "terminal" },
          { name: "Windows", icon: "terminal" },
          { name: "Vercel", icon: "vercel" },
          { name: "Heroku", icon: "code" },
          { name: "Glitch", icon: "code" },
        ],
      },
    ],
  },
  gallery: [
    "/images/projects/anion.png",
    "/images/projects/accessilearn.png",
    "/images/projects/viptransfertr.png",
    "/images/projects/dnzgeridonusum.png",
    "/images/projects/umutxyp.jpg",
  ],
  github: {
    username: "numcodes",
    highlight: [
      "An!on",
      "Accessilearn",
    ],
    description:
      "Learning is not a burden, but a ticket out of confusion.",
  },
};

export default siteData;
