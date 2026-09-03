export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  highlight: string;
  technologies: string[];
  featured: boolean;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    myRole: string;
    architecture: string[];
    keyFeatures: string[];
    challenges: string;
    learned: string;
  };
}

// ── 1. Software & Full-Stack Projects ──────────────────────────────────────────
export const softwareProjects: Project[] = [
  {
    id: "tarcin-workspace",
    slug: "tarcin-workspace",
    number: "01",
    title: "TARCIN Intern Portal",
    category: "FULL STACK • EDTECH • AI • INTERNSHIP MANAGEMENT",
    shortDescription: "Centralized internship management platform supporting 500+ interns and 10+ mentors with automated task tracking, AI Career Coach, and PDF certificates.",
    fullDescription: "Created a centralized internship management platform connecting 500+ interns with technology mentors and managing the internship journey from application to certification. Integrated Email OTP onboarding, resume upload, mentor allocation, task tracking, meeting scheduling, automated certificates, and an AI Career Coach, sustaining a 94% completion rate.",
    highlight: "Built a centralized internship ecosystem supporting 500+ interns and 10+ mentors, reported 94% completion rate.",
    technologies: ["React.js", "Node.js", "Express", "PostgreSQL", "TypeScript", "AI Integration", "Email OTP"],
    featured: true,
    image: "/projects/tarcin_workspace.png",
    githubUrl: "https://github.com/tarcinrobotics/Tarcin-Intern-Portal",
    liveUrl: "https://internship.tarcin.in/",
    caseStudy: {
      problem: "Internship programs often require separate disconnected systems for applications, mentor assignment, task submissions, meetings, feedback, and certificates.",
      solution: "Engineered an end-to-end unified platform managing the full lifecycle: Apply → Match → Build → Feedback → Certification, complete with an AI Career Coach.",
      myRole: "Software Developer Intern — designed TypeScript data models, Express RESTful endpoints, PostgreSQL database schemas, and unit test suites.",
      architecture: [
        "React.js frontend application with role-based intern & mentor portals",
        "Node.js & Express RESTful API backend handling submission queues",
        "PostgreSQL relational database storing user profiles, tasks, and submission history",
        "API-driven AI Career Coach chatbot offering automated guidance",
        "PDF Certificate rendering pipeline triggering on 100% task completion"
      ],
      keyFeatures: [
        "Email OTP onboarding & resume upload parsing",
        "Mentor allocation & 1:1 meeting scheduling module",
        "Task assignment, submission, and mentor feedback loops",
        "AI Career Coach offering real-time career guidance",
        "Automated PDF completion certificate generation",
        "500+ interns & 10+ active mentors supported across multiple domains",
        "94% program completion rate achieved"
      ],
      challenges: "Automating mentor-intern matching while scaling concurrent task submission uploads reliably.",
      learned: "TypeScript architecture, building API-driven AI assistants, writing integration unit tests, and optimizing database schema performance."
    }
  },
  {
    id: "spaceman-academy",
    slug: "spaceman-academy",
    number: "02",
    title: "SpaceMan Academy",
    category: "EDTECH • WEB DEVELOPMENT • BILINGUAL LEARNING",
    shortDescription: "Educational platform for Life Sciences & Biotech students preparing for competitive exams (CSIR, DBT-JRF, GATE, TN SET, TRB) with bilingual learning tools.",
    fullDescription: "An educational platform for Life Sciences and Biotechnology students preparing for competitive examinations (CSIR, DBT-JRF, GATE, Tamil Nadu SET, College TRB, PG-TRB). Developed a digital platform presenting coaching programs, bilingual Tamil/English explanations, PYQ analysis, and 30-student cohort mentorship.",
    highlight: "Created a focused digital learning platform featuring bilingual Tamil-English scientific learning and PYQ problem-solving engines.",
    technologies: ["React.js", "Node.js", "Express", "Tailwind CSS", "REST APIs", "Bilingual UI"],
    featured: true,
    image: "/projects/spaceman_academy.png",
    githubUrl: "https://github.com/Esan-8055",
    caseStudy: {
      problem: "Competitive-exam aspirants in Life Sciences & Biotech need structured conceptual learning combined with previous-year-question (PYQ) analysis and focused batch mentorship.",
      solution: "Built a structured EdTech web platform combining course discovery, bilingual Tamil-English scientific terminology, PYQ Part B/C problem solving, and cohort tracking.",
      myRole: "Full-Stack Web Developer — built responsive UI components, course catalog routing, and bilingual content rendering layer.",
      architecture: [
        "React.js single-page frontend application styled with Tailwind CSS",
        "Node.js RESTful API serving course structures and PYQ question banks",
        "Bilingual Tamil-English UI translation layer",
        "Interactive PYQ Part B & Part C problem-solving engine"
      ],
      keyFeatures: [
        "Course & program discovery for CSIR, DBT-JRF, GATE, TN SET, TRB",
        "Bilingual learning: Tamil conceptual explanations + Standard English scientific terms",
        "PYQ analysis engine covering Part B & Part C problem solving",
        "Full-length exam simulation & batch tracking",
        "Maximum 30-student batch size model for personalized mentorship"
      ],
      challenges: "Structuring multi-subject exam taxonomies while maintaining seamless bilingual rendering speeds.",
      learned: "EdTech product architecture, bilingual UI design patterns, and RESTful API data structuring."
    }
  },
  {
    id: "hybix-website",
    slug: "hybix-website",
    number: "03",
    title: "HYBIX Groups Digital Platform",
    category: "WEB DEVELOPMENT • FULL STACK • DIGITAL SOLUTIONS",
    shortDescription: "Official web portal for HYBIX Groups engineering premium web applications, scalable mobile solutions, and intelligent AI platforms.",
    fullDescription: "Engineering digital solutions for the next generation of business. Architected a modern, high-performance web platform presenting HYBIX's full stack software development capabilities, AI solutions, cloud infrastructure, and student developer initiatives.",
    highlight: "Created a professional responsive web presence showcasing HYBIX's AI, web, mobile, and cloud software solutions.",
    technologies: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    featured: true,
    image: "/projects/hybix_website.png",
    githubUrl: "https://github.com/mrfaseed/hybix",
    liveUrl: "https://hybixgroups.com/",
    caseStudy: {
      problem: "HYBIX Groups required a modern digital presence to communicate web engineering, mobile app, and AI solution offerings clearly to enterprise and community partners.",
      solution: "Engineered a modern web portal featuring dynamic project showcases, interactive service discovery, and animated component layouts.",
      myRole: "Lead Developer & President — architected front-end components, project showcase data structures, and deployment pipelines.",
      architecture: [
        "Next.js App Router for fast server rendering and client animations",
        "Tailwind CSS with custom design system variables",
        "Framer Motion page transition and scroll-reveal animations"
      ],
      keyFeatures: [
        "Responsive UI with modern landing page visual hierarchy",
        "Service & open-source project presentation showcase",
        "Interactive team & project showcase components",
        "Mobile-friendly layout optimized for student & client browsing"
      ],
      challenges: "Creating engaging micro-animations while keeping overall page load times extremely fast.",
      learned: "Modern design system implementation, Framer Motion choreography, and web branding."
    }
  },
  {
    id: "craftconnect",
    slug: "craftconnect",
    number: "04",
    title: "CraftConnect Marketplace & Academy",
    category: "FULL STACK • E-COMMERCE • MARKETPLACE • EDTECH",
    shortDescription: "Heritage artisan marketplace connecting 12,000+ verified Indian craftspeople with 85,000+ buyers across 350+ districts with Artisan Academy.",
    fullDescription: "A heritage artisan marketplace and educational academy connecting buyers directly with verified Indian craftspeople. Created a marketplace ecosystem combining Marketplace + Artisan Discovery + Cultural Education, supporting 12,000+ artisans, 85,000+ buyers, 2,400+ handlooms, and Artisan Academy with 80+ courses.",
    highlight: "Created a large-scale heritage marketplace concept supporting 12,000+ verified artisans, 85,000+ buyers, and 350+ districts.",
    technologies: ["React.js", "Node.js", "Express", "PostgreSQL", "UPI / Card Payments", "REST APIs"],
    featured: true,
    image: "/projects/craftconnect.png",
    githubUrl: "https://github.com/Esan-8055/craft-connect",
    liveUrl: "https://github.com/Esan-8055/craft-connect",
    caseStudy: {
      problem: "Traditional Indian craftspeople lack direct digital access to regional and global customers, while buyers struggle to verify authentic handloom and craft origin.",
      solution: "Engineered a direct-trade e-commerce marketplace featuring artisan verification, origin certificates, craft stories, multi-channel payment gateways, and Artisan Academy.",
      myRole: "Full-Stack Developer — built product catalog filters, artisan verification badge workflow, payment gateway integration, and inventory schemas.",
      architecture: [
        "React.js frontend application with category filter navigation",
        "Node.js & Express RESTful API handling orders, inventory, and payment callbacks",
        "PostgreSQL relational database managing artisan profiles, 6,000+ product SKUs, and buyer reviews",
        "Payment integration supporting UPI, Cards, and Cash on Delivery (COD)"
      ],
      keyFeatures: [
        "Artisan discovery & origin certificate verification",
        "Product marketplace covering 2,400+ Handloom, 1,200+ Pottery, 980+ Wood-carving items",
        "Direct-trade model eliminating intermediaries",
        "Multi-channel payments: UPI, Credit/Debit Cards, Cash on Delivery",
        "Pan-India shipping & 7-day return management",
        "Artisan Academy featuring 80+ skill courses for craftspeople",
        "Scale: 12,000+ verified artisans, 85,000+ buyers, 350+ districts, 4.8★ rating"
      ],
      challenges: "Designing multi-category product inventory queries capable of handling complex artisan origin filters quickly.",
      learned: "E-commerce platform engineering, payment gateway integration, database schema optimization, and marketplace architecture."
    }
  },
  {
    id: "renomate-dialysis",
    slug: "renomate-dialysis",
    number: "05",
    title: "Sri Ramakrishna Renomate Dialysis",
    category: "HEALTHCARE • MEDICAL DEVICES • WEB PLATFORM",
    shortDescription: "Sri Ramakrishna's Renomate Medical Device & Hemodialysis Fluid Manufacturers portal providing global standard renal care solutions.",
    fullDescription: "Sri Ramakrishna's Renomate digital portal for medical devices and hemodialysis fluid manufacturing. Delivered a global-standard healthcare web platform presenting dialysis innovations, product specifications, clinical safety compliance, and healthcare partner inquiries.",
    highlight: "Created a professional medical device web experience showcasing global-standard hemodialysis solutions.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    featured: true,
    image: "/projects/renomate_dialysis.png",
    githubUrl: "https://github.com/mrfaseed/renomatedialysis",
    liveUrl: "https://renomatedialysis.com/",
    caseStudy: {
      problem: "Medical device manufacturers need a global-standard digital portal to present hemodialysis fluid specifications and hospital partnership options clearly.",
      solution: "Designed a clean, clinical web application organizing dialysis fluid product catalogs, manufacturing compliance standards, and partner discovery flows.",
      myRole: "Front-End Developer & UI Designer — built responsive pages, patient navigation structure, and accessible typography layout.",
      architecture: [
        "React.js single-page application styled with responsive Tailwind CSS components",
        "Patient-oriented information taxonomy separating treatment FAQs, services, and contact channels",
        "Accessible, high-contrast color scheme optimized for medical professional readability"
      ],
      keyFeatures: [
        "Healthcare service presentation & dialysis treatment guides",
        "Responsive patient-oriented navigation interface",
        "Dialysis clinical information & service discovery",
        "Organized medical content layout & partner inquiry integration"
      ],
      challenges: "Designing clean healthcare layouts that convey medical information clearly without overwhelming non-technical users.",
      learned: "Healthcare UX design best practices, accessible typography, and responsive web component development."
    }
  },
  {
    id: "ramakrishna-hospitals",
    slug: "ramakrishna-hospitals",
    number: "06",
    title: "Sri Ramakrishna Hospitals",
    category: "HEALTHCARE • CARDIAC CARE • HOSPITAL PORTAL",
    shortDescription: "Centralized web platform for Sri Ramakrishna Hospitals & Gyaneswari Heart Center featuring advanced cardiology services and doctor profiles.",
    fullDescription: "Centralized digital presence for Sri Ramakrishna Hospitals & Gyaneswari Heart Center — a leading Centre of Excellence in Cardiac Care. Developed a responsive hospital platform showcasing interventional cardiology, general medicine, electrophysiology services, and doctor profiles.",
    highlight: "Delivered a responsive hospital website providing a centralized digital presence for cardiac care excellence.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Responsive UI", "Web Performance"],
    featured: true,
    image: "/projects/ramakrishna_hospitals.png",
    githubUrl: "https://github.com/mrfaseed/sriramakrishnahospitals",
    liveUrl: "https://sriramakrishnahospitals.com/",
    caseStudy: {
      problem: "Hospitals require a trustworthy, modern digital presence to communicate clinical specialties, doctor profiles, and emergency services clearly to the public.",
      solution: "Developed a responsive hospital web application featuring department discovery, emergency contact widgets, doctor listings, and patient information sections.",
      myRole: "Web Developer — built HTML5/CSS3 page structures, interactive department tabs, and mobile-friendly layouts.",
      architecture: [
        "Semantic HTML5 page structure with modular CSS styling",
        "JavaScript component scripts managing interactive department filter tabs",
        "Optimized asset loading pipeline for fast hospital landing page speeds"
      ],
      keyFeatures: [
        "Hospital information & clinical service presentation",
        "Department & specialty organization (Cardiology, Orthopedics, Pediatrics)",
        "Patient-oriented navigation & emergency contact integration",
        "Responsive, mobile-friendly design across all devices"
      ],
      challenges: "Structuring large amounts of hospital department data into intuitive, bite-sized navigation menus.",
      learned: "Web content hierarchy, performance optimization, and building responsive institutional websites."
    }
  },
  {
    id: "busapp",
    slug: "busapp",
    number: "07",
    title: "BusApp Transit Navigator",
    category: "FULL STACK • TRANSPORTATION • WEB & MOBILE",
    shortDescription: "Public transportation application providing commuters with real-time bus route coordinates, arrival timetables, and stop location discovery.",
    fullDescription: "A transportation-focused application designed to provide users with accessible bus-related information. Created a web and mobile application displaying bus routes, stop schedules, arrival estimates, and accessible transit navigation for local commuters.",
    highlight: "Developed a functional public transit application providing accessible route and bus stop information.",
    technologies: ["React.js", "Node.js", "Express", "Firebase", "REST APIs", "Map Services"],
    featured: false,
    image: "/projects/busapp_software.png",
    githubUrl: "https://github.com/Ahamedin/Bus-app",
    liveUrl: "https://bustrackin-app.web.app/",
    caseStudy: {
      problem: "Commuters struggle to locate updated bus routes, stop timetables, and transit information in a simplified digital format.",
      solution: "Built a lightweight full-stack transit application structuring bus routes, stop coordinates, and schedule lookup tables into a clean search UI.",
      myRole: "Full-Stack Developer — implemented Express route search endpoints, React front-end views, and transit data models.",
      architecture: [
        "React.js frontend interface styled for high contrast mobile readability",
        "Node.js & Express RESTful API servicing route search queries",
        "Firebase database storing bus numbers, stop listings, and schedule timetables"
      ],
      keyFeatures: [
        "Bus route lookup & timetable information display",
        "User-friendly transportation search interface",
        "Stop location discovery & route mapping",
        "Responsive mobile & desktop interface"
      ],
      challenges: "Designing fast search queries over multi-stop bus routes.",
      learned: "RESTful API query design, transit data structuring, and responsive mobile web UI."
    }
  },
  {
    id: "reya-makeover",
    slug: "reya-makeover",
    number: "08",
    title: "Riya Makeover Platform",
    category: "WEB DEVELOPMENT • UI/UX • BEAUTY & STYLING",
    shortDescription: "Elite styling and couture hair mastery platform featuring bridal makeover packages, client reviews, and booking workflows.",
    fullDescription: "A premium beauty and makeover business platform designed to showcase couture hair mastery and elite styling services. Built a responsive web platform featuring service discovery, client gallery portfolios, business details, and mobile-friendly contact workflows.",
    highlight: "Professional business website elevating digital visibility for beauty and styling services.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "UI/UX"],
    featured: false,
    image: "/projects/reya_makeover.png",
    githubUrl: "https://github.com/mrfaseed/Riya_beauty",
    liveUrl: "https://riyamakeover.in/",
    caseStudy: {
      problem: "Local beauty studios require an elegant digital platform to display bridal portfolios, makeover packages, pricing, and client inquiry options.",
      solution: "Developed a stylish web application featuring curated image galleries, detailed service packages, customer testimonials, and an interactive contact flow.",
      myRole: "Web Developer & Designer — designed visual theme, image gallery components, and responsive mobile layouts.",
      architecture: [
        "React.js frontend styled with modern responsive CSS layouts",
        "Interactive photo gallery with category filter tabs (Bridal, Party, Hair)",
        "Mobile-first responsive navigation menu"
      ],
      keyFeatures: [
        "Makeover service package showcase & pricing structure",
        "Client photo gallery & visual work presentation",
        "Responsive, mobile-friendly interface",
        "Business information & direct inquiry workflow"
      ],
      challenges: "Designing an elegant aesthetic that highlights high-contrast beauty photography cleanly on mobile screens.",
      learned: "Visual layout design, portfolio gallery organization, and business web development."
    }
  },
  {
    id: "reyatato-shop",
    slug: "reyatato-shop",
    number: "09",
    title: "Riya Tattoo Shop",
    category: "E-COMMERCE • TATTOO STUDIO • STOREFRONT",
    shortDescription: "Custom tattoo art and equipment storefront featuring package rates, custom tattoo design showcases, and appointment bookings.",
    fullDescription: "An online storefront designed to showcase custom tattoo artistry, studio equipment, and package details. Developed an e-commerce platform for custom tattoo merchandise, studio supplies, and art prints, featuring product cards, pricing, detail views, and responsive storefront navigation.",
    highlight: "Responsive e-commerce storefront created for tattoo merchandise and custom studio products.",
    technologies: ["React.js", "Node.js", "Express", "Tailwind CSS", "REST APIs", "JavaScript"],
    featured: false,
    image: "/projects/reyatato_shop.png",
    githubUrl: "https://github.com/Starlord786/riyatatoo-in",
    liveUrl: "https://riyamakeover.in/tattoo",
    caseStudy: {
      problem: "Specialized art and tattoo studios need a custom digital storefront to showcase unique merchandise and equipment to customers online.",
      solution: "Built a responsive e-commerce web application featuring product category filters, detail modals, price cards, and interactive shopping flows.",
      myRole: "Full-Stack Developer — built front-end product card grid, Express product catalog REST API, and shopping cart state.",
      architecture: [
        "React.js single-page application with client-side shopping cart state",
        "Express RESTful API serving product inventory schemas",
        "Responsive grid layout styled with Tailwind CSS"
      ],
      keyFeatures: [
        "Product catalog with price cards & detail views",
        "Category filter navigation for merchandise & art supplies",
        "Interactive product discovery & shopping interface",
        "Responsive storefront optimized for mobile & desktop"
      ],
      challenges: "Managing client-side shopping cart state seamlessly across page transitions.",
      learned: "E-commerce front-end patterns, state management, and REST API integration."
    }
  },
  {
    id: "smart-gps-bus-tracker-web",
    slug: "smart-gps-bus-tracker-web",
    number: "10",
    title: "Smart GPS Bus Tracking Platform",
    category: "FULL STACK • TRANSPORTATION • REAL-TIME GPS TELEMETRY",
    shortDescription: "Real-time fleet tracking & bus management web platform with live GPS coordinates, student/parent portals, and route maintenance alerts.",
    fullDescription: "A comprehensive full-stack transit management web platform interfacing IoT GPS telemetry with a live administrative dashboard. Features live fleet tracking, route planning, student/parent management, active bus status telemetry (TN-81-AX-1234), emergency notices, and automated delay notifications deployed on Vercel.",
    highlight: "Live fleet overview dashboard managing buses, active routes, parent notifications, and real-time GPS telemetry.",
    technologies: ["React.js", "Next.js", "Node.js", "Express", "Tailwind CSS", "Map Services", "Real-Time Telemetry", "Vercel"],
    featured: true,
    image: "/projects/smart_gps_bus_tracker_web.png",
    githubUrl: "https://github.com/Esan-8055/bustracking_application",
    liveUrl: "https://bustracking-application.vercel.app/",
    caseStudy: {
      problem: "Parents, students, and fleet administrators struggle to monitor live bus locations, speed metrics, route maintenance delays, and emergency notices in real-time.",
      solution: "Engineered an end-to-end web dashboard interfacing with GPS tracking telemetry to display live fleet status, speed metrics, location logs, and notice board warnings.",
      myRole: "Lead Full-Stack Developer — built Fleet Overview Dashboard, RESTful telemetry search endpoints, live map markers, and Vercel deployment pipeline.",
      architecture: [
        "Next.js & React.js frontend styled with modern responsive dashboard layout",
        "Express RESTful API endpoints handling GPS coordinate telemetry streams",
        "Noticeboard alert system broadcasting maintenance & heavy rainfall emergency warnings",
        "Deployed on Vercel high-performance global network"
      ],
      keyFeatures: [
        "Fleet Overview Dashboard displaying active buses, total students, and parent accounts",
        "Live Fleet Status tracking bus plate numbers, speed (km/h), and lat/lng coordinates",
        "Notice Board broadcasting route maintenance and weather delay alerts",
        "Seed Demo Data workflow for simulation testing",
        "Responsive mobile & desktop fleet management interface"
      ],
      challenges: "Streaming real-time latitude/longitude updates efficiently while keeping administrative dashboard render speeds fast.",
      learned: "Next.js dashboard engineering, real-time telemetry streaming, Vercel deployment, and transportation UX design."
    }
  }
];

// ── 2. Hardware, IoT & Robotics Projects ──────────────────────────────────────
export const hardwareProjects: Project[] = [
  {
    id: "crop-disease-rover",
    slug: "crop-disease-rover",
    number: "01",
    title: "Crop Disease Detection & Spraying Rover",
    category: "AI/ML • COMPUTER VISION • ROBOTICS • IOT",
    shortDescription: "Autonomous agricultural rover combining computer vision, sensor arrays, and ESP32 embedded control for real-time crop disease detection and targeted spraying.",
    fullDescription: "An intelligent agricultural rover designed to detect crop diseases and automate targeted spraying, combining AI-based image analysis with robotic movement and a spraying mechanism. Implemented an end-to-end pipeline connecting Disease Detection → Decision → Rover Movement → Targeted Spraying.",
    highlight: "Built a functional agricultural automation prototype integrating AI, computer vision, robotics, embedded systems, and targeted treatment.",
    technologies: ["Python", "OpenCV", "PyTorch", "ESP32", "Arduino", "Robotics", "IoT", "Sensors"],
    featured: true,
    image: "/projects/crop_disease_rover.jpeg",
    caseStudy: {
      problem: "Manual crop inspection and spraying can be time-consuming, labor-intensive, and often results in unnecessary chemical treatment of healthy crops.",
      solution: "Engineered an autonomous rover equipped with computer vision sensors and PyTorch models to detect foliage pathogens and trigger targeted localized spraying.",
      myRole: "AI/ML & Robotics Developer — built computer vision inference pipeline, PyTorch disease classifier, and ESP32 motor control firmware.",
      architecture: [
        "ESP32 & Arduino microcontrollers managing differential drive motors and solenoid spray actuators",
        "Python backend executing OpenCV image preprocessing and PyTorch disease inference",
        "Sensor array capturing foliage health and environmental metrics",
        "Targeted chemical solenoid spray nozzle system"
      ],
      keyFeatures: [
        "Crop foliage disease detection via OpenCV & PyTorch",
        "End-to-end detection → decision → movement → spraying pipeline",
        "Automated rover movement & obstacle navigation",
        "Targeted spraying mechanism reducing chemical wastage",
        "Sensor integration & embedded motor control",
        "Real-world agricultural automation prototype"
      ],
      challenges: "Optimizing ML inference speeds for edge processing while maintaining detection precision under varying field lighting conditions.",
      learned: "PyTorch model inference optimization, OpenCV image preprocessing, sensor telemetry fusion, and embedded motor control."
    }
  },
  {
    id: "hybix-smart-shoe",
    slug: "hybix-smart-shoe",
    number: "02",
    title: "HYBIX Smart Medical Shoe",
    category: "HEALTHCARE • IOT • EMBEDDED SYSTEMS • THREE.JS 3D",
    shortDescription: "Smart footwear prototype for real-time gait and plantar-pressure analysis using ESP32, MPU6050, 3 FSR sensors, 10 FPS WebSockets, and 3D visualization.",
    fullDescription: "A smart footwear prototype for real-time gait and plantar-pressure analysis using motion and pressure sensors. Built using an ESP32, MPU6050 accelerometer/gyroscope, and three FSR sensors positioned at the heel, midfoot, and toe. Streams sensor data over WebSockets at ~10 FPS to an interactive 3D shoe dashboard in Three.js.",
    highlight: "Implemented real-time sensor broadcasting at 10 FPS with live gait analysis, posture stability detection, and 3D interactive shoe visualization.",
    technologies: ["ESP32", "MPU6050", "FSR Sensors", "Arduino C++", "WebSockets", "Three.js", "OrbitControls", "JavaScript"],
    featured: true,
    image: "/projects/smartshoe_simulation.png",
    caseStudy: {
      problem: "Walking patterns, foot pressure distribution, balance, and impact provide vital biomechanical signals, but collecting and visualizing them manually is difficult.",
      solution: "Built a smart footwear system with embedded force sensors and an IMU broadcasting real-time pressure vectors over WebSockets to a Three.js 3D web dashboard.",
      myRole: "Embedded Hardware & Web Developer — designed FSR voltage divider circuit, ESP32 WebSocket C++ server, and Three.js 3D model visualization.",
      architecture: [
        "ESP32 microcontroller sampling 3 FSR pressure sensors (heel, midfoot, toe) and MPU6050 IMU",
        "Firmware built with Adafruit_MPU6050, WebSocketsServer, and WiFi libraries",
        "Real-time WebSocket JSON telemetry stream running at ~10 FPS",
        "Frontend web dashboard built with HTML, CSS, JavaScript, Three.js, and OrbitControls"
      ],
      keyFeatures: [
        "Heel, midfoot, and toe pressure monitoring",
        "Accelerometer-based motion tracking & temperature sensing",
        "Walking, running, and idle movement classification",
        "Plantar pressure heatmap & gait-analysis indicators",
        "Pronation, supination, high-impact, toe-drag, and postural instability detection",
        "Interactive 3D shoe model visualization in Three.js",
        "Real-time 10 FPS WebSocket communication"
      ],
      challenges: "Calibrating analog force sensitive resistors (FSRs) while maintaining low latency WebSockets streaming without frame drops.",
      learned: "Biomechanical sensor calibration, ESP32 C++ WebSockets server implementation, and real-time 3D canvas rendering with Three.js."
    }
  },
  {
    id: "solar-water-filter",
    slug: "solar-water-filter",
    number: "03",
    title: "Solar Electro-Bio Water Filter",
    category: "IOT • HARDWARE • RENEWABLE ENERGY • WATER TECH",
    shortDescription: "Sustainable water purification prototype combining solar energy power management with electro-bio filtration, microcontroller sensing, and low-power electronics.",
    fullDescription: "A sustainable water purification prototype combining solar energy with an electro-bio filtration approach. Designed a solar-powered purification system integrating water-treatment components with electronic control, sensor monitoring, and low-power energy management for off-grid deployment.",
    highlight: "Developed a working prototype demonstrating a solar-powered water purification concept focused on sustainable, off-grid operation.",
    technologies: ["Solar Panel", "Arduino/ESP32", "Sensors", "Electro-Bio Filter", "Power Management", "Embedded C++"],
    featured: true,
    image: "/waterpurifier_hardware.jpeg",
    caseStudy: {
      problem: "Traditional water purification systems require continuous grid power and are difficult to deploy in low-resource or remote off-grid communities.",
      solution: "Designed a solar-powered purification system integrating electro-bio filtration with microcontroller monitoring and automated power management.",
      myRole: "Hardware & Embedded Systems Developer — designed solar power management circuit, sensor monitoring firmware, and filtration sequence.",
      architecture: [
        "Solar photovoltaic panel connected to smart battery charge controller",
        "Microcontroller running power optimization algorithms and sensor polling",
        "Electro-bio filtration bed with multi-stage water treatment",
        "Electronic flow control relays and water quality sensor array"
      ],
      keyFeatures: [
        "Solar-powered autonomous operation",
        "Electro-bio filtration water treatment",
        "Embedded microcontroller telemetry & sensor monitoring",
        "Low-power electronics & power management design",
        "Sustainable off-grid deployment capability"
      ],
      challenges: "Balancing solar power consumption under cloudy conditions while maintaining consistent electro-bio filtration flow rates.",
      learned: "Solar power management circuit design, sensor telemetry, and sustainable embedded product engineering."
    }
  },
  {
    id: "rfid-safety-band",
    slug: "rfid-safety-band",
    number: "04",
    title: "RFID Safety Band",
    category: "EMBEDDED SYSTEMS • RFID • IOT • SAFETY",
    shortDescription: "Wearable RFID-based identification and safety system designed for real-time card/tag detection and UID verification.",
    fullDescription: "A wearable RFID-based identification and safety system designed for real-time card/tag detection. Developed an RFID wearable using a microcontroller and RFID reader, implementing UID extraction, UID verification, and serial monitoring for authorized access control.",
    highlight: "Successfully demonstrated real-time RFID identification and safety access control through a wearable prototype.",
    technologies: ["Arduino", "RFID Reader RC522", "RFID Card", "Embedded C++", "Serial Communication"],
    featured: true,
    image: "/rfid2.jpeg",
    caseStudy: {
      problem: "Safety and identification verification systems in institutions require compact, reliable wearable devices to instantly identify authorized users.",
      solution: "Developed a wearable RFID wristband system paired with an RC522 reader node executing real-time UID extraction and verification.",
      myRole: "Embedded Firmware Developer — implemented RFID reader driver, UID verification logic, and serial debugging suite.",
      architecture: [
        "Passive RFID token wristband containing unique 4-byte ISO14443A UID",
        "Arduino microcontroller connected to MFRC522 SPI RFID reader module",
        "UID lookup database executing instant match/deny logic",
        "Serial telemetry monitoring output for real-time logs"
      ],
      keyFeatures: [
        "Real-time RFID card/tag detection",
        "UID extraction & instant verification logic",
        "Real-time authorized user identification",
        "Wearable wristband form factor",
        "Serial telemetry logging"
      ],
      challenges: "Ensuring stable SPI bus communication between the microcontroller and RFID module in a compact wearable enclosure.",
      learned: "SPI protocol communication, RFID card UID parsing, and embedded C++ access control state machines."
    }
  },
  {
    id: "smart-gps-bus-tracker",
    slug: "smart-gps-bus-tracker",
    number: "05",
    title: "Smart GPS Bus Tracker",
    category: "IOT • GPS • REAL-TIME TRACKING • TRANSPORTATION",
    shortDescription: "GPS-enabled transportation tracking hardware unit collecting real-time bus location telemetry and streaming coordinates to the cloud.",
    fullDescription: "A GPS-enabled transportation tracking system designed to provide real-time bus-location information. Developed a GPS-based hardware tracking unit that collects vehicle location coordinates and displays movement through a digital map-based tracking interface.",
    highlight: "Created a functional prototype for real-time bus tracking and transportation telemetry monitoring.",
    technologies: ["GPS Module", "Microcontroller", "Node.js", "Web Maps API", "Embedded C++", "Real-Time Data"],
    featured: true,
    image: "/bus_tracker_hardware.jpeg",
    caseStudy: {
      problem: "Transit passengers lack convenient, real-time access to current bus locations, leading to uncertain wait times at bus stops.",
      solution: "Built a hardware GPS logger mounted on vehicles that streams real-time latitude/longitude coordinates to a user-facing map dashboard.",
      myRole: "IoT & Full-Stack Developer — configured GPS hardware module, NMEA sentence parser, and web mapping interface.",
      architecture: [
        "NEO-6M GPS hardware module polling satellite geolocation data",
        "Microcontroller parsing NMEA sentences into latitude, longitude, and speed",
        "Node.js backend API receiving live coordinate streams",
        "Web-based interactive map tracking interface for passengers"
      ],
      keyFeatures: [
        "Real-time GPS location tracking & NMEA parsing",
        "Live bus movement & speed monitoring",
        "Interactive map-based visualization interface",
        "Passenger-facing location discovery dashboard",
        "Transportation telemetry data collection"
      ],
      challenges: "Handling intermittent cellular signal loss during vehicle transit without dropping location history logs.",
      learned: "GPS NMEA sentence parsing, web mapping integrations, and building real-time vehicle tracking pipelines."
    }
  },
  {
    id: "pathol-detection-cycle",
    slug: "pathol-detection-cycle",
    number: "06",
    title: "Pathol Detection Cycle",
    category: "AI/ML • HEALTHCARE • COMPUTER VISION",
    shortDescription: "AI-assisted pathological detection pipeline leveraging machine learning and OpenCV computer vision for clinical image analysis.",
    fullDescription: "An AI-assisted pathological detection project exploring the use of machine learning and computer vision for healthcare-related analysis. Developed a prototype demonstrating how AI-based image analysis, feature extraction, and classification support pathological cell detection workflows.",
    highlight: "Developed a prototype demonstrating how AI-based analysis can support pathological detection workflows.",
    technologies: ["Python", "OpenCV", "Scikit-Learn", "PyTorch", "Image Processing", "Machine Learning"],
    featured: true,
    image: "/projects/pathol_detection_cycle.jpeg",
    caseStudy: {
      problem: "Manual biological cell and tissue sample classification under microscopes is labor-intensive and prone to diagnostic fatigue.",
      solution: "Developed a computer vision machine learning pipeline executing automatic feature extraction, edge detection, and cell classification.",
      myRole: "AI/ML Engineer — built OpenCV image preprocessing pipeline, feature extraction script, and classification model.",
      architecture: [
        "Python image processing script using OpenCV for contrast enhancement and noise reduction",
        "Feature extraction layer generating color histograms and texture vectors",
        "Machine learning classifier (Scikit-Learn/PyTorch) predicting cell pathology classes"
      ],
      keyFeatures: [
        "Microscopic image preprocessing & noise suppression",
        "Automated AI-assisted pathological feature extraction",
        "Cell image classification workflow",
        "Diagnostic analysis metric evaluation"
      ],
      challenges: "Eliminating background image artifacts and staining variations across digital microscope slide samples.",
      learned: "OpenCV image filtering, computer vision feature engineering, and medical image classification workflows."
    }
  },
  {
    id: "smart-health-show",
    slug: "smart-health-show",
    number: "07",
    title: "Smart Health Show Monitoring System",
    category: "IOT • HEALTHCARE • EMBEDDED SYSTEMS",
    shortDescription: "Smart health monitoring prototype integrating physiological sensors, microcontroller telemetry, and real-time vital readings display.",
    fullDescription: "A smart healthcare monitoring prototype integrating sensors and embedded electronics to collect and display health-related information. Built a hardware system measuring physiological parameters in real-time, streaming readings to a telemetry display dashboard.",
    highlight: "Real-time biometric sensor telemetry and health data display built on embedded microcontrollers.",
    technologies: ["Arduino/ESP32", "Biometric Sensors", "Embedded C++", "Wi-Fi Telemetry", "Serial / Web Display"],
    featured: true,
    image: "/projects/smart_health_show.jpeg",
    caseStudy: {
      problem: "Continuous vital sign tracking often requires bulky medical instruments that are expensive and non-portable.",
      solution: "Engineered a compact embedded prototype interfacing pulse rate, temperature, and biometric sensors with microcontrollers for instant display.",
      myRole: "Embedded Hardware Developer — wired biometric sensor modules, wrote C++ sampling loops, and designed display output.",
      architecture: [
        "Arduino/ESP32 microcontroller running sensor polling loops",
        "Biometric sensor conditioning circuits (pulse rate, body temperature)",
        "OLED / Web display module rendering live vital sign waveforms"
      ],
      keyFeatures: [
        "Biometric sensor monitoring & real-time telemetry readings",
        "Embedded microcontroller data processing",
        "Health metric digital dashboard display",
        "Compact hardware form factor"
      ],
      challenges: "Filtering analog signal noise caused by body movement during sensor polling.",
      learned: "Biometric sensor signal processing, analog-to-digital conversion (ADC), and embedded telemetry displays."
    }
  }
];

export const allProjects: Project[] = [...softwareProjects, ...hardwareProjects];
export const featuredProjects: Project[] = softwareProjects;
export const secondaryProjects: Project[] = hardwareProjects;
