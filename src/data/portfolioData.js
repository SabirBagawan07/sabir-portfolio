export const portfolioData = {
  personal: {
    name: "Sabir Mubin Bagawan",
    role: "Data Analyst | Python Developer",
    tagline: "Passionate about transforming raw data into actionable insights and building intelligent Python solutions.",
    bio: "I am an MCA student and an aspiring Data Analyst / Python Developer with a strong foundation in computer science (BCS CGPA 8.86/10). I enjoy uncovering patterns in data, solving complex analytical problems, and creating data visualization dashboards. My current focus is developing hands-on expertise in Python, SQL, Power BI, Pandas, Matplotlib, and Machine Learning concepts.",
    location: "Kolhapur, Maharashtra, India",
    status: "Fresher • Open for Entry-Level Data & Python Roles",
    avatar: "/profile.jpg",
    resumeUrl: "/resume.pdf",
    web3formsKey: "", // OPTIONAL: Get a free key at https://web3forms.com in 5 seconds to receive messages directly in your inbox!
    socials: {
      github: "https://github.com/SabirBagawan07",
      linkedin: "https://linkedin.com/in/sabir-bagawan-4b841b3b9",
      email: "sabirbagawan078@gmail.com",
      phone: "+91 9359253568"
    }
  },

  highlights: [
    { label: "Current Status", value: "MCA Student", subtext: "Pursuing Master's Degree" },
    { label: "BCS CGPA", value: "8.86 / 10", subtext: "New College, Kolhapur" },
    { label: "Primary Focus", value: "Data & Analytics", subtext: "Python, SQL & Power BI" },
    { label: "Role Target", value: "Data Analyst", subtext: "Python / Data-oriented roles" }
  ],

  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ],

  skillsCategories: [
    {
      category: "Data Analytics & Visualization",
      description: "Data processing, wrangling, statistical analysis, and interactive dashboard creation",
      skills: [
        { name: "SQL", level: "Core", icon: "Database" },
        { name: "Power BI", level: "Core", icon: "BarChart3" },
        { name: "Microsoft Excel", level: "Advanced", icon: "FileSpreadsheet" },
        { name: "Pandas", level: "Core", icon: "Table" },
        { name: "NumPy", level: "Core", icon: "Binary" },
        { name: "Matplotlib", level: "Core", icon: "LineChart" },
        { name: "Data Visualization", level: "Proficient", icon: "PieChart" }
      ]
    },
    {
      category: "Programming & Web",
      description: "Core programming languages and foundational web technologies",
      skills: [
        { name: "Python", level: "Primary", icon: "Code2" },
        { name: "JavaScript", level: "Basic", icon: "FileCode" },
        { name: "HTML5", level: "Foundational", icon: "Globe" },
        { name: "CSS3", level: "Foundational", icon: "Layout" }
      ]
    },
    {
      category: "Databases & Storage",
      description: "Relational database management, querying, and schemas",
      skills: [
        { name: "MySQL", level: "Proficient", icon: "Server" },
        { name: "Relational Queries", level: "Proficient", icon: "Layers" }
      ]
    },
    {
      category: "Tools & Environment",
      description: "Development environments, version control, and productivity tools",
      skills: [
        { name: "Git", level: "Version Control", icon: "GitBranch" },
        { name: "GitHub", level: "Collaboration", icon: "Github" },
        { name: "VS Code", level: "IDE", icon: "Terminal" },
        { name: "Basic Machine Learning", level: "Exploratory", icon: "Cpu" }
      ]
    }
  ],

  projects: [
    {
      id: "sports-management",
      title: "Sports Management & Online Buying System",
      category: "Web Application / BCS Project",
      description: "A comprehensive web-based sports product management and online purchasing platform created as a BCS graduation project.",
      technologies: ["HTML", "CSS", "PHP", "MySQL", "XAMPP"],
      features: [
        "User registration and secure login authentication",
        "Interactive product browsing with categories",
        "Real-time shopping cart and online checkout",
        "Stock availability tracking and product inventory",
        "Admin panel for managing products, categories & customer orders"
      ],
      githubUrl: "https://github.com/SabirBagawan07",
      liveUrl: null,
      featured: true,
      badge: "BCS Capstone"
    },
    {
      id: "fake-news-detector",
      title: "AI Fake News & Misinformation Detector",
      category: "Machine Learning & Python",
      description: "An intelligent Machine Learning solution designed to classify news articles as authentic or fake using Natural Language Processing.",
      technologies: ["Python", "Pandas", "Scikit-learn", "NLTK", "TF-IDF", "PassiveAggressiveClassifier", "Joblib"],
      features: [
        "Text preprocessing and noise cleanup pipeline",
        "Natural language tokenization and stop-word filtering",
        "TF-IDF vectorizer feature extraction",
        "High-accuracy PassiveAggressiveClassifier model training",
        "Instant text prediction and confidence evaluation output"
      ],
      githubUrl: "https://github.com/SabirBagawan07",
      liveUrl: null,
      featured: true,
      badge: "Machine Learning"
    },
    {
      id: "data-analytics-portfolio",
      title: "Data Analytics & Dashboard Projects",
      category: "Data Analysis & Visualization",
      description: "Exploratory data analysis (EDA), statistical investigations, and visual dashboard projects analyzing real-world datasets.",
      technologies: ["Python", "SQL", "Excel", "Power BI", "Pandas", "Matplotlib"],
      features: [
        "Exploratory Data Analysis (EDA) on structured datasets",
        "Data cleaning, missing value imputation, and transformation",
        "Interactive Power BI executive dashboards",
        "SQL queries for aggregated business metrics calculation",
        "Statistical plots and correlation heatmaps with Matplotlib"
      ],
      githubUrl: "https://github.com/SabirBagawan07",
      liveUrl: null,
      featured: true,
      badge: "Data Portfolio"
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Chhatrapati Shahu Institute of Business Education and Research (CSIBER)",
      location: "Kolhapur, Maharashtra",
      status: "Currently Pursuing",
      period: "Present",
      description: "Advanced study in computer applications, database management, software development methodologies, analytical techniques, and modern computing tools.",
      current: true
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      institution: "New College, Kolhapur",
      location: "Kolhapur, Maharashtra",
      status: "Completed",
      period: "Graduated",
      grade: "CGPA: 8.86 (77.56%)",
      description: "Comprehensive foundation in computer programming, database systems, web development, data structures, algorithms, and software engineering principles.",
      current: false
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Science Stream",
      location: "Kolhapur, Maharashtra",
      status: "Completed",
      period: "Completed",
      grade: "62%",
      description: "Core coursework in Mathematics, Physics, Chemistry, and Information Technology.",
      current: false
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "State Board",
      location: "Kolhapur, Maharashtra",
      status: "Completed",
      period: "Completed",
      grade: "87%",
      description: "General academic curriculum with strong performance in Mathematics and Science.",
      current: false
    }
  ],

  certifications: [
    {
      title: "Power BI for Data Analytics",
      issuer: "Power BI Dashboard Project",
      status: "Completed (2026)",
      issueDate: "2026",
      credentialUrl: "/resume.pdf",
      skillsLearned: ["DAX Queries", "Data Modeling", "Dashboard Creation", "Power Query"]
    },
    {
      title: "SQL for Data Analysis",
      issuer: "Data Analytics Course",
      status: "Completed",
      issueDate: "2026",
      credentialUrl: "/resume.pdf",
      skillsLearned: ["Joins & Aggregations", "Subqueries", "Window Functions", "Data Filtering"]
    },
    {
      title: "Python for Data Science & Analytics",
      issuer: "Python Data Stack",
      status: "Completed",
      issueDate: "2026",
      credentialUrl: "/resume.pdf",
      skillsLearned: ["Pandas Dataframes", "NumPy Arrays", "Matplotlib Plotting", "EDA"]
    }
  ]
};
