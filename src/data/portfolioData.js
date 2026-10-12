// ============================================================
// portfolioData.js — Real Portfolio Data
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "ROSHAN E S",
  firstName: "ROSHAN E S",
  brandName: "ROSHAN E S", // shown in the preloader, navbar and footer
  title: "Technical Trainer",
  location: "Bengaluru, India",
  phone: "9606529639",
  emails: {
    primary: "roshan@thetapacademy.com",
    secondary: "",
  },
  summary: "Computer Science Graduate currently working as a Technical Trainer",
  resumeUrl: "/Resume(4).pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/roshanes3019",
  linkedin: "https://www.linkedin.com/in/roshan-e-s-67b3182ba/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm ROSHAN E S",
  titleHighlight: "Technical Trainer",
  subtitle: "Java Trainer and Technical Mentor empowering students with core programming, problem-solving, and industry-ready software engineering skills.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:roshan@thetapacademy.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume(4).pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">ROSHAN E S</span>, a Technical Trainer and Computer Science graduate based in Bengaluru, India. I specialize in Java programming fundamentals, object-oriented design, and problem solving, guiding students toward placement readiness and technical excellence.`,
  techStack: ["Java", "Python", "SQL", "Kotlin", "JavaScript", "MySQL"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured approach from concept and architecture to practical implementation and deployment.",
  cards: [
    { number: "01", title: "Research", text: "Analyze problem statements, explore technical requirements, and define clear architecture goals." },
    { number: "02", title: "Design", text: "Architect scalable database schemas, object-oriented abstractions, and interactive user interfaces." },
    { number: "03", title: "Develop", text: "Write clean, robust code with modular logic, efficient algorithms, and best design patterns." },
    { number: "04", title: "Deploy", text: "Test, debug, optimize performance, and deploy reliable solutions ready for real-world impact." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Python" }, { name: "SQL" }, { name: "Kotlin" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML & CSS" }, { name: "JavaScript" }, { name: "Flask" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }],
    },
    {
      title: "Tools & Frameworks",
      skills: [{ name: "Git" }, { name: "GitHub" }, { name: "OpenCV" }, { name: "Android Studio" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Technical Mentorship & Placement Bootcamps",
    description: "Conducted hands-on coding sessions, mock technical interviews, and debugging workshops to prepare aspiring engineers for software roles.",
    role: "Technical Mentor",
    badge: "Mentorship",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Technical Trainer",
    duration: "2023 - Present",
    skills: ["Java Mentoring", "Problem Solving", "Technical Interview Preparation", "Debugging"],
    tech: ["Java", "OOP", "Collections", "SQL", "Git"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Fostering teamwork through collaborative problem-solving, code reviews, and active knowledge sharing." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex programming challenges into intuitive, modular, and optimized solutions." },
  { name: "Analytical Thinking", icon: "📈", desc: "Evaluating edge cases, debugging data flows, and optimizing algorithmic efficiency." },
  { name: "Time Management", icon: "⏱️", desc: "Balancing instructional delivery, student assessments, and curriculum development efficiently." },
];

export const projects = [
  {
    id: "anthar-jala-watch",
    number: "01",
    badge: "🚀 Flagship Project", // use null for no badge
    title: "Anthar-Jala Watch",
    description: "An Android-based groundwater monitoring app addressing groundwater depletion and borewell failure through GPS-enabled data collection and Google Maps heatmap visualizations.",
    techTags: ["Kotlin", "Android Studio", "Google Maps API", "GenAI"],
    links: { github: "https://github.com/roshanes3019", demo: "" }, // demo "" shows "Demo Coming Soon"
    isFlagship: true,
  },
  {
    id: "iot-guard",
    number: "02",
    badge: null,
    title: "IoT-Guard",
    description: "A next-generation IoT firewall using ESP8266 and ESP-NOW for secure peer-to-peer communication with AES-128 encryption, MAC-based authentication, and real-time anomaly detection.",
    techTags: ["JavaScript", "Python", "HTML", "CSS"],
    links: { github: "https://github.com/roshanes3019", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Java Full Stack Development", issuer: "TAP Academy", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/roshan-e-s-67b3182ba/",
};

export const education = {
  degree: "BE in Computer Science",
  institution: "SJCIT",
  cgpa: "2019 - 2023",
  graduation: "2023",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Technical Trainer", "Java · Python · Problem Solving", "Empowering Future Developers"],
  credential: "BE in Computer Science",
  copyright: `© ${new Date().getFullYear()} ROSHAN E S | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
