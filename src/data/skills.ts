export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: string[];
}

export const technicalSkills: SkillCategory[] = [
  {
    title: "Programming Languages",
    subtitle: "Core computation & systems",
    iconName: "Code2",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "SQL"]
  },
  {
    title: "CS Fundamentals",
    subtitle: "Core computer science principles",
    iconName: "BinaryTree",
    skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Operating Systems", "Database Management Systems (DBMS)"]
  },
  {
    title: "AI / ML Fundamentals",
    subtitle: "Intelligent pipelines & vision systems",
    iconName: "Brain",
    skills: ["Model Training & Evaluation", "Feature Engineering", "NLP Basics", "Computer Vision", "OpenCV", "PyTorch"]
  },
  {
    title: "Testing & Quality",
    subtitle: "Software reliability & QA standards",
    iconName: "ShieldCheck",
    skills: ["Unit Testing", "Integration Testing", "Code Review Practices", "Manual QA Workflows"]
  },
  {
    title: "Backend & APIs",
    subtitle: "Server architectures & API endpoints",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "RESTful APIs", "API-Driven Response Handling"]
  },
  {
    title: "Databases",
    subtitle: "Relational, document & cloud data stores",
    iconName: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Aiven DB", "Firebase"]
  },
  {
    title: "Frontend Engineering",
    subtitle: "Modern responsive web interfaces",
    iconName: "Layout",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Developer Tools & Platforms",
    subtitle: "Workflow automation & deployment",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "Prisma ORM", "Vercel", "Firebase", "Google Cloud Platform (GCP)", "ESP32", "Arduino"]
  }
];

export const journeyStages = [
  {
    phase: "01",
    title: "Programming & CS Fundamentals",
    desc: "Solid mastery of Java, Python, C/C++, Data Structures & Algorithms, Object-Oriented Design, Operating Systems, and DBMS."
  },
  {
    phase: "02",
    title: "Full-Stack Web Engineering",
    desc: "Architecting responsive platforms with React.js, Next.js, Node.js, Express, PostgreSQL, Prisma, and RESTful APIs."
  },
  {
    phase: "03",
    title: "AI/ML & Computer Vision",
    desc: "Developing ML pipelines, NLP models (Fake News Detection), and PyTorch/OpenCV agricultural vision systems."
  },
  {
    phase: "04",
    title: "IoT & Embedded Automation",
    desc: "Designing hardware pipelines connecting ESP32, sensors, and robotics with real-time web telemetry and control."
  },
  {
    phase: "05",
    title: "Testing & Engineering Quality",
    desc: "Writing unit & integration test suites, establishing code review checkpoints, and reducing release defects."
  },
  {
    phase: "06",
    title: "Community Leadership & Startups",
    desc: "Leading 11 student developers as Full Stack Lead (KARE 10X Club) and serving as Lead Developer & President of HYBIX Tech Community."
  }
];

