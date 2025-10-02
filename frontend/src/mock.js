// Mock data for portfolio website
export const portfolioData = {
  personal: {
    name: "Tharak Koneni",
    title: "Computer Science Graduate Student & Research Assistant",
    location: "Tampa, FL",
    email: "tharak.env@gmail.com",
    phone: "(813)-534-2315",
    github: "https://github.com/tah-rak",
    linkedin: "https://www.linkedin.com/in/tharak-k",
    photo: \"frontend/public/image/profile.jpg",
    bio: "Passionate Computer Science graduate student specializing in Machine Learning, AI, and Data Science. Experienced in building production-grade systems and conducting cutting-edge research in NLP and predictive modeling."
  },
  
  skills: {
    languages: ["Python", "Java", "C/C++", "JavaScript"],
    frameworks: ["SpringBoot", "Node.js", "TensorFlow", "PyTorch", "Flask", "React"],
    cloud: ["Terraform", "AWS", "Azure", "Firebase", "Snowflake", "Databricks"],
    tools: ["Git", "Excel", "Docker", "Jenkins", "IntelliJ", "VS Code", "JIRA", "Postman"],
    databases: ["MySQL", "SQLite", "MongoDB", "Cassandra", "PostgreSQL", "Hadoop", "DynamoDB"]
  },
  
  education: [
    {
      id: 1,
      institution: "University of South Florida (USF)",
      degree: "M.S. in Computer Science",
      duration: "Aug 2024 – May 2026",
      gpa: "3.61/4.0",
      coursework: ["Data Structures", "Machine Learning", "AI", "NLP", "Operating Systems", "Computer Architecture"]
    },
    {
      id: 2,
      institution: "New Horizon College of Engineering (NHCE)",
      degree: "B.E. in Computer Science",
      duration: "Jul 2020 – June 2024",
      gpa: "8.46/10",
      coursework: ["Computer Networks", "Database Management Systems", "Pattern Recognition", "Data Warehousing", "Big Data Analytics", "Compiler Design", "Object Oriented Programming"]
    }
  ],
  
  publications: [
    {
      id: 1,
      title: "Smart Predictive Enhancement for Ensuring Safe-guard Well-being Using Machine Learning Technique",
      conference: "IEEE ICRISST 2024",
      description: "Building predictive models for mental health and well-being using ML techniques.",
      link: "https://ieeexplore.ieee.org/document/10921958",
      tags: ["Machine Learning", "Healthcare", "Predictive Modeling"]
    },
    {
      id: 2,
      title: "NCS in Security, Based on Self Organizing Maps",
      journal: "IJSRCSEIT 2023 (Vol. 9, Issue 8, May-June 2023)",
      description: "Explored Neural Network-based approaches for network security.",
      link: "https://ijsrcseit.com/home/issue/view/article.php?id=CSEIT239832",
      tags: ["Neural Networks", "Security", "Self-Organizing Maps"]
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "School of Information, University of South Florida",
      position: "Graduate Assistant",
      duration: "Aug 2025 – Present",
      description: "Running LLM fine-tuning & evaluation to improve content understanding and response quality.",
      achievements: [
        "Ran LLM fine-tuning & evaluation (BLEU/ROUGE/BERTScore) to improve content understanding and response quality",
        "Added retrieval & safety-validation modules",
        "Built reproducible experiment pipelines and dashboards for rapid iteration",
        "Partnered with stakeholders to translate findings into productized modules and accessibility improvements"
      ]
    },
    {
      id: 2,
      company: "College of Public Health, University of South Florida",
      position: "Research Assistant",
      duration: "Jan 2025 – Jul 2025",
      description: "Training predictive models on time-series epidemiological and environmental data.",
      achievements: [
        "Trained predictive models on time-series epidemiological and environmental data",
        "Used SHAP-driven feature insights to improve forecast precision by 25%",
        "Simulated SEIR-based infection dynamics using Bayesian inference and parallel computing"
      ]
    },
    {
      id: 3,
      company: "College of Medicine, University of South Florida",
      position: "Research Assistant",
      duration: "Aug 2024 – Dec 2024",
      description: "Optimizing data pipelines for high-throughput sequencing data processing.",
      achievements: [
        "Optimized data pipelines (Pandas, Airflow) to process high-throughput sequencing data, boosting throughput by 40%",
        "Developed scikit-learn/PyTorch classifiers for T-cell & B-cell identification",
        "Tuned hyperparameters with cross-validation, improving read-recovery efficiency by 35%",
        "Integrated a Flask dashboard for real-time review cycles"
      ]
    },
    {
      id: 4,
      company: "Crystal Experts Inc",
      position: "Data Science Intern",
      duration: "Feb 2024 – Jun 2024",
      description: "Transforming ML prototypes into production-grade microservices on AWS.",
      achievements: [
        "Transformed ML prototypes into production-grade Spring Boot & Node.js microservices on AWS ECS (Docker)",
        "Slashed inference defects by 70% through Jenkins and AWS CodeBuild driven pipelines",
        "Architected ETL workflows from MySQL & Cassandra into Snowflake",
        "Delivered analytics-ready data 50% faster for experimentation, reporting, and downstream teams"
      ]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Knowledge Conflict Resolution using RAG",
      duration: "Aug 2024 – Dec 2024",
      description: "Built a retrieval and reranking pipeline for contradiction detection with 50% reduction in factual inconsistencies.",
      technologies: ["LangChain", "Vector DB", "Hugging Face", "GPT-3.5", "Mistral", "RAG"],
      achievements: [
        "Built a retrieval and reranking pipeline for contradiction detection (50% reduction in factual inconsistencies)",
        "Engineered a retrieval framework integrating vector database search and adaptive reranking (40% improvement in LLM retrieval precision, reduced hallucinations)",
        "Deployed and tested semantic-search workflows using Pinecone/FAISS with a Flask backend"
      ],
      github: "https://github.com/tah-rak/rag-bot",
      demo: null
    },
    {
      id: 2,
      title: "Suicidal Ideation Detection from Social Media",
      duration: "Oct 2023 – Jan 2024",
      description: "Constructed supervised ML and Deep Learning models to detect suicidal ideation in social media text with 87% accuracy.",
      technologies: ["Python", "NLP", "ML", "Deep Learning", "Transformers"],
      achievements: [
        "Constructed supervised ML and Deep Learning models (TF-IDF, BERT, RNN) to detect suicidal ideation in social media text",
        "Achieved 87% accuracy and 85% F1-score",
        "Implemented reproducible training/eval pipelines with PyTorch Lightning"
      ],
      github: "https://github.com/tah-rak/Suicidal-ideation-detection", 
      demo: null
    }
  ],
  
  achievements: [
    {
      id: 1,
      title: "Editorial Head, College Magazine",
      description: "Led a 10-member team, oversaw ideation, content creation, and final publication.",
      organization: "New Horizon College of Engineering"
    },
    {
      id: 2,
      title: "NHCE Quantum Hackathon Winner",
      description: "Created a platform providing pre-designed resume templates.",
      organization: "New Horizon College of Engineering"
    },
    {
      id: 3,
      title: "NHCE Idea Hackathon Winner",
      description: "Devised a solution to enhance the security and safety of payments in public transportation.",
      organization: "New Horizon College of Engineering"
    }
  ]
};
