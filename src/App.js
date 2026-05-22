import React from 'react';
import ChatBot from './components/ChatBot';
import { Mail, Award, Code, Briefcase, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';

import docReaderImg from './assets/images/DocReader.png';
import PromptOptimizerImg from './assets/images/Optmizer.png';
import clarittyImg from './assets/images/Claritty.png';
import storeMgmtImg from './assets/images/Storemanagement.jpg';
import googleCertImg from './assets/images/Googlecertificate.jpg';
import dsCertImg from './assets/images/DataScience Certification.png';
import reactCertImg from './assets/images/Reactjs.png';

function App() {
  const projects = [
    {
      title: "DocReader Q&A",
      date: "Feb 2026",
      image: docReaderImg,
      link: "https://docpilot.streamlit.app/",
      description: "Production-grade Document Intelligence application using Google 2.5 Flash. Supports 12 file formats with context-locked Q&A and multi-turn memory.",
      tags: ["Streamlit", "Google Gemini", "Python"]
    },
    {
      title: "Claritty-AI Extension",
      date: "Nov 2025",
      image: clarittyImg,
      link: "https://github.com/ChetanKumar-Meegada",
      description: "AI-powered extension providing instant explanations and topic breakdowns directly on webpages using Gemini API, improving reading efficiency by 40%.",
      tags: ["JavaScript", "Gemini API"]
    },
    {
      title: "AI Prompt Optimizer",
      date: "Nov 2025",
      image: PromptOptimizerImg,
      link: "https://github.com/ChetanKumar-Meegada",
      description: "Chrome extension that enhances and refines prompts across AI platforms to generate clearer, smarter, and more effective AI responses instantly.",
      tags: ["JavaScript", "Gemini API"]
    },
    {
      title: "Store Management",
      date: "Aug 2025",
      image: storeMgmtImg,
      link: "https://payrollapp.streamlit.app/",
      description: "Full-stack application to manage employees, track shifts, and calculate payroll with real-time access for both employees and store managers.",
      tags: ["Flask", "Streamlit", "Neon Database"]
    }
  ];

  const experience = [
    {
      company: "Synectiks (India)",
      role: "Backend Engineer",
      period: "Aug 2023 - Dec 2024",
      points: [
        "Implemented secure user authentication and authorization via AWS Cognito, improving onboarding speed by 35% and reducing auth-related issues by 40%.",
        "Designed and managed PostgreSQL schemas with optimized indexing and query optimization algorithms, resulting in 30% faster query performance.",
        "Developed robust, modular RESTful APIs in Node.js to provide maintainable and scalable backend functionalities.",
        "Automated CI/CD workflows by integrating Jenkins with GitHub, reducing deployment time by 70% through scripted automation and dependency management.",
        "Deployed backend services to AWS Lambda, enhancing scalability and reducing operational costs by 60% via pay-per-use execution.",
        "Engineered CLI tools and APIs in Golang for Project Synefo to fetch and visualize metrics from AWS CloudWatch and CloudTrail.",
        "Utilized AWS SDK to interact with EC2, S3, and billing APIs, enabling automated cost tracking and real-time cloud resource monitoring.",
        "Built 'Synthia', a Python AI assistant using LLM models and Function Calling techniques, improving task automation efficiency by 65%.",
        "Integrated AWS APIs to automate EC2 instance retrieval and resource provisioning, reducing manual operational overhead by 50%."
      ]
    },
    {
      company: "UpGrad Insofe",
      role: "Machine Learning Engineer",
      period: "Jan 2022 - Aug 2023",
      points: [
        "Built and evaluated predictive models using supervised and unsupervised ML algorithms, improving prediction accuracy by 28% across various projects.",
        "Architected end-to-end data pipelines including cleaning, feature engineering, and NLP-based sentiment analysis, boosting classification accuracy by 22%.",
        "Visualized complex data insights using Tableau, Matplotlib, and Seaborn to drive data-driven business decisions.",
        "Deployed ML models using Flask and AWS Lambda for real-time inference and high-availability production use.",
        "Collaborated within Agile/Scrum workflows using Git/GitHub for version control, improving team development efficiency by 25% through consistent sprint planning."
      ]
    }
  ];

  const certifications = [
    {
      title: "Agentic Applications",
      issuer: "Google Cloud",
      image: googleCertImg,
      link: "https://www.google.com"
    },
    {
      title: "Computational Data Science",
      issuer: "Case Western Reserve",
      image: dsCertImg,
      link: "https://www.upgrad.com"
    },
    {
      title: "ReactJS for Beginners",
      issuer: "Simplilearn",
      image: reactCertImg,
      link: "https://www.simplilearn.com"
    }
  ];

  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Chethan Kumar Meegada<span>.</span></h1>
          <nav>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-badge">Available for opportunities</div>
          <h2 className="hero-title"> 
            <span className="gradient-text">Software Engineer AI & ML</span>
          </h2>
          <p className="hero-summary">
            I am a Software Engineer specializing in Artificial Intelligence, Machine Learning, 
            and cloud-native application development, currently pursuing a <strong>Master’s in Computer Science </strong> at University of Bridgeport. I have experience building AI-powered automation systems, conversational AI assistants, machine learning models, and scalable full-stack applications using Python, AWS, Generative AI, LLMs, and modern backend technologies. My work focuses on developing intelligent, production-ready solutions that improve operational efficiency, automate workflows, and deliver impactful user experiences across AI, cloud, and software engineering domains.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/chethan-kumar-meegada-23b88923a/" target="_blank" rel="noreferrer" className="social-btn"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/ChetanKumar-Meegada" target="_blank" rel="noreferrer" className="social-btn"><FaGithub /> GitHub</a>
            <a href="mailto:chethankumar.vas12@gmail.com" className="social-btn primary"><Mail /> Contact Me</a>
          </div>
        </div>
      </section>

      <section id="experience" className="section bg-light">
        <div className="container">
          <h3 className="section-title"><Briefcase size={28} /> Experience</h3>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="exp-header">
                  <h4>{exp.role}</h4>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <span className="date">{exp.period}</span>
                <ul>
                  {exp.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h3 className="section-title"><Code size={28} /> Featured Projects</h3>
          <div className="grid">
            {projects.map((proj, index) => (
              <a href={proj.link} target="_blank" rel="noreferrer" key={index} className="project-card">
                <div className="img-container">
                  <img src={proj.image} alt={proj.title} />
                  <div className="overlay-icon"><ExternalLink /></div>
                </div>
                <div className="card-content">
                  <h4>{proj.title}</h4>
                  <p>{proj.description}</p>
                  <div className="tags">
                    {proj.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section bg-light">
        <div className="container">
          <h3 className="section-title"><Award size={28} /> Certifications</h3>
          <div className="grid grid-3">
            {certifications.map((cert, index) => (
              <a href={cert.link} target="_blank" rel="noreferrer" key={index} className="cert-card">
                <img src={cert.image} alt={cert.title} />
                <div className="cert-info">
                  <p className="cert-title">{cert.title}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 Chethan Kumar Meegada. Software Engineer AI & ML.</p>
        </div>
      </footer>
      <ChatBot />
    </div>
  );
}

export default App;