export interface Achievement {
  id: string;
  number: string;
  grade: "Grade S" | "Grade A" | "Grade B";
  title: string;
  event: string;
  badge: string;
  date: string;
  description: string;
  image: string;
  aspect: "tall" | "square" | "wide";
  metrics: { label: string; value: string }[];
  details: {
    role: string;
    location: string;
    tags: string[];
    verificationUrl?: string;
    narrative: string;
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  badge: string;
  image?: string;
  verifyUrl?: string;
}

export const certificationsList: Certification[] = [
  {
    id: "google-ai",
    title: "Google AI Professional Certificate",
    issuer: "Google",
    date: "2025",
    skills: ["AI Fundamentals", "Machine Learning", "Prompt Engineering", "API Handling"],
    badge: "PROFESSIONAL CERTIFICATE",
    image: "/certifications/google_cert_1.png"
  },
  {
    id: "google-ai-2",
    title: "Google Cloud & Generative AI Certification",
    issuer: "Google Cloud",
    date: "2025",
    skills: ["Cloud AI", "Generative Models", "Data Analytics", "Cloud Services"],
    badge: "GOOGLE CLOUD CERTIFIED",
    image: "/certifications/google_cert_2.png"
  },
  {
    id: "jpmorgan-swe",
    title: "JPMorgan Chase Software Engineering Simulation",
    issuer: "JPMorgan Chase & Co. / Forage",
    date: "2025",
    skills: ["Software Engineering", "Data Feeds", "TypeScript", "React", "Python"],
    badge: "JOB SIMULATION",
    image: "/certifications/jpmorgan_cert.png"
  },
  {
    id: "oracle-oci-ai",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    skills: ["Oracle Cloud Infrastructure", "AI Foundations", "Machine Learning", "Cloud AI"],
    badge: "ORACLE CERTIFIED",
    image: "/certifications/oracle_cert.png"
  }
];

export const verifiedAchievements: Achievement[] = [
  {
    id: "marine-x",
    number: "01",
    grade: "Grade S",
    title: "Marine-X RC, 3-Wing Drone & Boxing Bots Winner",
    event: "National Robotics Competition",
    badge: "1ST PLACE WINNER",
    date: "2024–2025",
    description: "Secured 1st place in Marine-X RC Board Challenge, 3-Wing Drone navigation, and Boxing Bots robotics competitions through high-precision hardware calibration and motor agility.",
    image: "/achievements/marine_rc.png",
    aspect: "wide",
    metrics: [
      { label: "Robotics Wins", value: "3 Titles" },
      { label: "Precision", value: "99.4%" },
      { label: "Category", value: "Winner #1" }
    ],
    details: {
      role: "Lead Systems & Robotics Engineer",
      location: "National Robotics Arena",
      tags: ["ESP32", "PWM Motors", "Aquatic Dynamics", "Robotics", "Drones"],
      narrative: "Designed custom wireless thrusters and flight controllers for Marine-X RC watercraft, 3-Wing Drones, and Boxing Bots. Outperformed competing university teams to claim 1st Place across multiple robotics divisions."
    }
  },
  {
    id: "sih-qualifier",
    number: "02",
    grade: "Grade S",
    title: "Smart India Hackathon (SIH) Regional Qualifier",
    event: "Smart India Hackathon",
    badge: "REGIONAL QUALIFIER",
    date: "2024",
    description: "Qualified in the regional round of Smart India Hackathon (SIH), building high-impact software solutions for national problem statements.",
    image: "/achievements/sih_hackathon.png",
    aspect: "square",
    metrics: [
      { label: "Event", value: "SIH 2024" },
      { label: "Status", value: "Regional Qualifier" },
      { label: "Domain", value: "National Software" }
    ],
    details: {
      role: "Full-Stack Developer & Team Lead",
      location: "SIH Regional Nodal Center",
      tags: ["Full-Stack", "React.js", "Node.js", "REST APIs", "Problem Solving"],
      narrative: "Engineered a rapid full-stack application prototype addressing critical national challenges, successfully qualifying for the SIH regional presentation round."
    }
  },
  {
    id: "kare-10x-lead",
    number: "03",
    grade: "Grade A",
    title: "Full Stack Team Lead & SDG Hackathon Organizer",
    event: "KARE 10X Club",
    badge: "FULL STACK LEAD",
    date: "Jul 2024 – Present",
    description: "Led 11 student developers, organized an SDG Coding Hackathon, and mentored 347+ students in full-stack web engineering.",
    image: "/achievements/kare_10x_hack.png",
    aspect: "square",
    metrics: [
      { label: "Mentored", value: "347+ Students" },
      { label: "Team Size", value: "11 Developers" },
      { label: "Scope", value: "SDG Hackathon" }
    ],
    details: {
      role: "Full Stack Team Lead",
      location: "KARE Campus",
      tags: ["Full-Stack", "React.js", "Node.js", "Mentorship", "SDG Hackathon"],
      narrative: "Directing 11 student developers in building production-ready web applications, organizing campus-wide SDG hackathons, and conducting technical mentorship bootcamps for 347+ students."
    }
  },
  {
    id: "tedx-lead",
    number: "04",
    grade: "Grade A",
    title: "Lead, Video Production & Technical Operations",
    event: "TEDxKARE Conferences",
    badge: "TECHNICAL OPS LEAD",
    date: "2024–2025",
    description: "Directed media production, multi-camera live switching, audio sync routing, and technical execution for high-profile TEDx campus conferences.",
    image: "/achievements/tedx_kare.png",
    aspect: "wide",
    metrics: [
      { label: "Audience", value: "500+" },
      { label: "Speakers", value: "High-Profile" },
      { label: "Broadcast", value: "Live Technical Ops" }
    ],
    details: {
      role: "Lead, Video Production & Technical Operations",
      location: "KARE Main Auditorium",
      tags: ["Technical Ops", "Live Broadcast", "Video Production", "Stage Ops"],
      narrative: "Managed end-to-end stage technical operations, multi-channel live video mixing, and audio synchronization for official TEDx campus events."
    }
  },
  {
    id: "edu-sdg-hackathon",
    number: "05",
    grade: "Grade B",
    title: "EDU SDG Hackathon Participant",
    event: "EDU SDG Hackathon",
    badge: "HACKATHON FINALIST",
    date: "2024",
    description: "Engineered technology solutions addressing UN Sustainable Development Goals in an intensive innovation hackathon.",
    image: "/achievements/gdg_eduhackathon.png",
    aspect: "wide",
    metrics: [
      { label: "UN Goals", value: "SDGs" },
      { label: "Sprint", value: "24 Hours" },
      { label: "Focus", value: "Clean Water & Tech" }
    ],
    details: {
      role: "Full Stack & IoT Developer",
      location: "Innovation Center",
      tags: ["SDG", "Full-Stack", "IoT", "React.js"],
      narrative: "Participated in the EDU SDG Hackathon, rapidly prototyping sustainable technology solutions for community impact."
    }
  }
];

export const researchItems = [
  {
    id: "welfare-path-paper",
    title: "AI-Assisted Bilingual Framework for Citizen Welfare Discovery",
    status: "Research & Implementation",
    topic: "Bilingual NLP • Public Service Accessibility • Social Impact",
    abstract: "Explores the design and algorithmic architecture of a bilingual natural language assistant to eliminate bureaucratic friction and language barriers in accessing public welfare entitlements across rural and urban populations."
  }
];
