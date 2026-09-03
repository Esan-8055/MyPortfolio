export interface MilestoneItem {
  id: string;
  milestoneNum: string;
  journeyTitle: string;
  role: string;
  company: string;
  badge: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  imageSrc: string;
  imageAlt: string;
}

export const journeyMilestones: MilestoneItem[] = [
  {
    id: "tarcin",
    milestoneNum: "01",
    journeyTitle: "Scaling Internship Operations",
    role: "Software Developer Intern",
    company: "Tarcin Robotics LLP",
    badge: "Internship",
    period: "May 2026 – Present",
    location: "Remote / On-site",
    summary: "Engineered an end-to-end internship management platform for 500+ interns and 10+ mentors, streamlining onboarding, task tracking, AI coaching, and automated certification.",
    highlights: [
      "Engineered an end-to-end internship management platform for 500+ interns and 10+ mentors, integrating onboarding, mentor allocation, task tracking, submissions, meetings, feedback, an AI Career Coach, and automated certificates, reducing manual coordination by 30–40% and supporting a 94% program completion rate.",
      "Applied AI/ML fundamentals (API-driven response handling) to build the AI Career Coach, and wrote unit/integration tests for core task-tracking workflows to improve release reliability."
    ],
    techStack: ["React.js", "Node.js", "Express", "PostgreSQL", "TypeScript", "AI Integration", "Unit & Integration Testing"],
    imageSrc: "/experience/tarcin.png",
    imageAlt: "Tarcin Robotics Internship Platform Architecture"
  },
  {
    id: "hybix",
    milestoneNum: "02",
    journeyTitle: "Engineering Community Solutions",
    role: "Lead Developer & President",
    company: "HYBIX Tech Community",
    badge: "Leadership & Development",
    period: "Jul 2025 – Present",
    location: "KARE Campus",
    summary: "Led full-stack application development, AI/ML solutions, and IoT hardware prototypes across community engineering projects.",
    highlights: [
      "Led the development of full-stack applications, AI/ML solutions, and IoT prototypes using REST APIs, real-time dashboards, ESP32, and Arduino, improving project usability and data accessibility by 25–30% while reducing manual implementation effort by 20–25%.",
      "Introduced code review and testing checkpoints across team projects, reducing post-deployment bugs."
    ],
    techStack: ["Full-Stack", "AI/ML", "IoT", "ESP32", "Arduino", "REST APIs", "Real-Time Dashboards", "Code Review"],
    imageSrc: "/experience/hybix.png",
    imageAlt: "HYBIX Tech Community IoT & Software Workspace"
  },
  {
    id: "vcodez",
    milestoneNum: "03",
    journeyTitle: "Machine Learning & NLP Pipelines",
    role: "Data Science Intern",
    company: "VCodez",
    badge: "Internship",
    period: "May 2026 – Jul 2026",
    location: "On-site",
    summary: "Built end-to-end machine-learning pipelines through data preprocessing, feature engineering, model training, and evaluation.",
    highlights: [
      "Built end-to-end machine-learning pipelines through data preprocessing, feature engineering, model training, and evaluation, developing an NLP-based Fake News Detection Model that achieved 80–90% classification performance.",
      "Applied AI/ML fundamentals — model evaluation metrics, train/test splitting, and overfitting checks — to validate model performance before deployment."
    ],
    techStack: ["Python", "Machine Learning", "NLP", "Feature Engineering", "Scikit-Learn", "Model Evaluation"],
    imageSrc: "/experience/vcodes.png",
    imageAlt: "VCodez Data Science ML Analytics Workbench"
  },
  {
    id: "kare-10x",
    milestoneNum: "04",
    journeyTitle: "Empowering Developer Cohorts",
    role: "Full Stack Team Lead",
    company: "KARE 10X Club",
    badge: "Leadership & Mentorship",
    period: "Jul 2024 – Present",
    location: "KARE Campus",
    summary: "Led 11 student developers, organized SDG Coding Hackathons, and mentored 347+ students in full-stack web engineering.",
    highlights: [
      "Led 11 student developers, organised an SDG Coding Hackathon, and mentored 347+ students in full-stack web engineering.",
      "Established standard code review practices and guided student engineering teams in building robust web applications."
    ],
    techStack: ["Full-Stack Web Engineering", "Mentorship", "SDG Hackathon", "React.js", "Node.js"],
    imageSrc: "/experience/codingblocks.png",
    imageAlt: "KARE 10X Club Full-Stack Hackathon Session"
  },
  {
    id: "tedx",
    milestoneNum: "05",
    journeyTitle: "High-Profile Event Engineering",
    role: "Lead, Video Production & Technical Operations",
    company: "TEDxKARE",
    badge: "Technical Operations",
    period: "2024 – 2025",
    location: "KARE Campus Auditorium",
    summary: "Directed media production and live technical execution for high-profile TEDx campus conferences.",
    highlights: [
      "Directed media production and live technical execution for high-profile TEDx campus conferences.",
      "Coordinated multi-camera video stage routing, audio synchronization, and live event broadcasting."
    ],
    techStack: ["Video Production", "Technical Operations", "Live Broadcast", "Stage Management"],
    imageSrc: "/experience/tedx.png",
    imageAlt: "TEDxKARE Technical Operations & Live Broadcast"
  },
  {
    id: "kare-edu",
    milestoneNum: "06",
    journeyTitle: "Academic Foundation",
    role: "Bachelor of Technology in Information Technology",
    company: "Kalasalingam Academy of Research and Education",
    badge: "Education",
    period: "Aug 2023 – June 2027 (Expected)",
    location: "KARE Campus, Tamil Nadu",
    summary: "Pursuing B.Tech in IT with deep focus on CS Fundamentals (DSA, OOP, OS, DBMS), Full-Stack, AI/ML, and IoT systems.",
    highlights: [
      "Rigorous academic training in Core Computer Science: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, DBMS.",
      "Consistently applying theoretical AI/ML concepts and full-stack software practices to industry software engineering roles."
    ],
    techStack: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "SQL", "DSA", "DBMS"],
    imageSrc: "/experience/kare.png",
    imageAlt: "Kalasalingam Academy Academic Journey"
  }
];

