import React, { useState, useEffect, useCallback } from 'react';
import { Home, Folder, Mail, Twitter, ChevronRight, User, Code, Briefcase, FolderOpen, Phone, MapPin, Github, Linkedin, Award, Target, Zap, Coffee, Database, Server, Building, Calendar, Clock, MessageSquare, Send, CheckCircle, Star, TrendingUp, ExternalLink, Download, Globe, ChevronLeft } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

type PageType = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: Folder, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  // Particles.js initialization
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded callback
  }, []);

  // Gradual page load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (page: PageType) => {
    if (page === currentPage) return;
    
    setIsLoading(true);
    setIsVisible(false);
    
    setTimeout(() => {
      setCurrentPage(page);
      setTimeout(() => {
        setIsLoading(false);
        setIsVisible(true);
      }, 150);
    }, 200);
  };

  const getCurrentPageIndex = () => {
    return navigationItems.findIndex(item => item.id === currentPage);
  };

  const handleNextPage = () => {
    const currentIndex = getCurrentPageIndex();
    if (currentIndex < navigationItems.length - 1) {
      handlePageChange(navigationItems[currentIndex + 1].id as PageType);
    }
  };

  const handlePrevPage = () => {
    const currentIndex = getCurrentPageIndex();
    if (currentIndex > 0) {
      handlePageChange(navigationItems[currentIndex - 1].id as PageType);
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const currentIndex = getCurrentPageIndex();
      
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handlePageChange(navigationItems[currentIndex - 1].id as PageType);
      } else if (e.key === 'ArrowRight' && currentIndex < navigationItems.length - 1) {
        handlePageChange(navigationItems[currentIndex + 1].id as PageType);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  const renderPageContent = () => {
    const content = (() => {
      switch (currentPage) {
        case 'home':
          return (
            <div className="bg-white/95 shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl backdrop-blur-sm relative">
              {/* Navigation Arrows */}
              {getCurrentPageIndex() > 0 && (
                <button
                  onClick={handlePrevPage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white/30 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 z-10 group"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={24} className="transform transition-transform duration-200 group-hover:-translate-x-1" />
                </button>
              )}
              
              {getCurrentPageIndex() < navigationItems.length - 1 && (
                <button
                  onClick={handleNextPage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white/30 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 z-10 group"
                  aria-label="Next page"
                >
                  <ChevronRight size={24} className="transform transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              )}

              <div className="p-8 sm:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  {/* Left side - Text content */}
                  <div className="flex-1 lg:pr-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 sm:mb-6 leading-tight transform transition-all duration-700 hover:text-blue-600 animate-slide-in-left">
                      Hi, I am Neha <span className="animate-wave">👋</span>
                    </h1>
                    <p className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 font-semi-bold mb-6 sm:mb-8 transform transition-all duration-500 hover:scale-105 animate-slide-in-right">
                      Full Stack Developer
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-3xl transform transition-all duration-600 hover:text-gray-700 animate-fade-in-up mb-8">
                      Software Developer with 3+ years of experience in designing and delivering full-stack web applications, combining front-end and back-end expertise to build scalable, cloud-based solutions. I specialize in Java, Spring Boot, Microservices, and modern cloud technologies. I have proven ability to collaborate in Agile teams to develop secure, reliable systems that enhance business performance. Throughout my experience, I’ve consistently developed high-performing solutions that increased efficiency, minimized errors, and improved overall user experience.
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex gap-4 animate-slide-in-bottom">
                      <a 
                        href="https://www.linkedin.com/in/nehac209/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 group"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin size={20} className="transform transition-transform duration-200 group-hover:scale-110" />
                      </a>
                      <a 
                        href="mailto:nehachowdary209@gmail.com"
                        className="w-12 h-12 bg-sky-400 text-white rounded-xl flex items-center justify-center hover:bg-sky-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300 group"
                        aria-label="Send Email"
                      >
                        <Mail size={20} className="transform transition-transform duration-200 group-hover:scale-110" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Right side - Action buttons */}
                  <div className="flex flex-col gap-4 lg:min-w-[280px]">
                    <a 
                      href="https://drive.google.com/file/d/1-GVclgUkfucgupZ4r7WwK271SLUSd526/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 group text-center"
                    >
                      <span className="transform transition-transform duration-200 group-hover:translate-x-1 flex items-center justify-center gap-2">
                        <Download size={18} />
                        Download CV
                      </span>
                    </a>
                    <button 
                      onClick={() => handlePageChange('projects')}
                      className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-300 group"
                    >
                      <span className="transform transition-transform duration-200 group-hover:translate-x-1 flex items-center justify-center gap-2">
                        <FolderOpen size={18} />
                        View Projects
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );

        case 'about':
          return (
            <div className="bg-white/95 shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl backdrop-blur-sm">
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-6 sm:mb-8 group animate-slide-in-left">
                  <User className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 transform transition-all duration-400 group-hover:scale-110 group-hover:rotate-12" />
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 transform transition-all duration-400 group-hover:text-blue-600">About Me</h1>
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      "I am a Software Developer with over three years of experience designing and delivering full-stack web applications. My expertise lies in developing scalable backend services using Java, Spring Boot, and microservices architecture, while creating responsive frontend applications with React, Next.js, Angular, and TypeScript. I have delivered impactful projects at CVS Health and Hirecraft Software, focusing on healthcare applications, recruitment portals, and cloud-native solutions that improved system efficiency and business outcomes.",
                      "On the backend, I specialize in building RESTful and GraphQL APIs with Spring Boot, leveraging Java 8+ features like Lambda expressions and Stream API. I have extensive experience with database optimization using PostgreSQL, MongoDB, and Cassandra, implementing caching strategies with Redis, and managing high-volume messaging with Kafka and RabbitMQ. I also have hands-on experience with performance testing using JMeter and comprehensive testing strategies with JUnit, Mockito, and Selenium.",
                      "Beyond development, I have significant experience with cloud and DevOps practices, working with AWS and Azure for containerized deployments using Docker and Kubernetes. I have automated CI/CD pipelines with Jenkins and Azure DevOps, implemented monitoring with CloudWatch, Prometheus, and ELK stack, and managed infrastructure as code with Terraform. My ability to collaborate in Agile/Scrum teams, coupled with strong problem-solving skills, helps me deliver high-quality, scalable solutions with measurable impact."
                    ].map((paragraph, index) => (
                      <p 
                        key={index}
                        className="text-gray-700 leading-relaxed text-base sm:text-lg transform transition-all duration-500 hover:text-gray-800 hover:scale-[1.01] animate-fade-in-up"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-blue-50 p-4 sm:p-6 rounded-xl border border-blue-100 transform transition-all duration-400 hover:scale-105 hover:shadow-xl hover:bg-blue-100 animate-slide-in-left">
                      <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 group">
                        <Award className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500 transform transition-all duration-300 group-hover:rotate-12" />
                        Professional Details
                      </h3>
                      <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                        {[
                          { label: 'Location', value: 'New York, NY' },
                          { label: 'Experience', value: '3.5+ Years Java/Full-Stack' },
                          { label: 'Education', value: 'MS Computer Science' },
                          { label: 'Certifications', value: 'AWS Cloud Practitioner, Azure Developer' }
                        ].map((item, index) => (
                          <li 
                            key={index}
                            className="flex justify-between transform transition-all duration-300 hover:text-blue-700 hover:translate-x-2"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <strong>{item.label}:</strong> <span>{item.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 sm:p-6 rounded-xl border border-indigo-100 transform transition-all duration-400 hover:scale-105 hover:shadow-xl hover:bg-indigo-100 animate-slide-in-right">
                      <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 group">
                        <Target className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-500 transform transition-all duration-300 group-hover:rotate-12" />
                        Core Specializations
                      </h3>
                      <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                        {[
                          'Java/Spring Boot Development',
                          'RESTful API Development',
                          'Cloud Technologies (AWS/Azure)',
                          'Microservices Architecture'
                        ].map((item, index) => (
                          <li 
                            key={index}
                            className="flex items-center gap-2 transform transition-all duration-300 hover:text-indigo-700 hover:translate-x-2"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-500 transform transition-transform duration-200 hover:scale-125" /> 
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );

        case 'skills':
          return (
            <div className="bg-white/95 shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl backdrop-blur-sm">
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-6 sm:mb-8 group animate-slide-in-left">
                  <Code className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 transform transition-all duration-400 group-hover:scale-110 group-hover:rotate-12" />
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 transform transition-all duration-400 group-hover:text-blue-600">Technical Skills</h1>
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  {[
                    {
                      title: 'Programming & Frameworks',
                      icon: Code,
                      color: 'blue',
                      skills: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'Python', 'Node.js', 'React/Next.js', 'Angular', 'TypeScript', 'JavaScript']
                    },
                    {
                      title: 'Databases & APIs',
                      icon: Server,
                      color: 'green',
                      skills: ['PostgreSQL', 'MongoDB', 'Cassandra', 'Oracle', 'REST APIs', 'GraphQL', 'JSON/XML', 'JWT/OAuth 2.0']
                    },
                    {
                      title: 'Cloud & DevOps',
                      icon: Database,
                      color: 'purple',
                      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Terraform', 'CloudWatch']
                    },
                    {
                      title: 'Testing & Messaging',
                      icon: Coffee,
                      color: 'orange',
                      skills: ['JUnit', 'Mockito', 'Selenium', 'JMeter', 'Kafka', 'RabbitMQ', 'Redis', 'Postman']
                    }
                  ].map((category, categoryIndex) => (
                    <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 group">
                        <category.icon className={`w-4 sm:w-5 h-4 sm:h-5 text-${category.color}-600 transform transition-all duration-300 group-hover:rotate-12`} />
                        {category.title}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                        {category.skills.map((skill, index) => (
                          <div 
                            key={index} 
                            className={`bg-gray-200 px-2 sm:px-3 py-2 rounded text-center text-gray-700 font-medium transition-all duration-400 border border-gray-200 text-xs sm:text-sm transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 cursor-pointer active:scale-95 animate-scale-in ${
                              category.color === 'blue' ? 'hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300' :
                              category.color === 'green' ? 'hover:bg-green-50 hover:text-green-700 hover:border-green-300' :
                              category.color === 'purple' ? 'hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300' :
                              category.color === 'orange' ? 'hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300' :
                              'hover:bg-gray-50 hover:text-gray-700'
                            }`}
                            style={{ animationDelay: `${index * 50}ms` }}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <span className="transform transition-transform duration-200 hover:scale-105">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );

        case 'experience':
          return (
            <div className="bg-white/95 shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl backdrop-blur-sm">
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-6 sm:mb-8 group animate-slide-in-left">
                  <Briefcase className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 transform transition-all duration-400 group-hover:scale-110 group-hover:rotate-12" />
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 transform transition-all duration-400 group-hover:text-blue-600">Professional Experience</h1>
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  {[
                    {
                      company: 'CVS Health',
                      position: 'Software Development Engineer',
                      period: 'August 2024 - Present',
                      location: 'New York, NY',
                      description: 'Built cloud-hosted healthcare web applications using Spring Boot microservices, React/Next.js frontend and AWS deployment to improve service accessibility.',
                      achievements: [
                        'Developed and optimized RESTful APIs to manage patient onboarding, care plans, and notifications, improving payload efficiency and overall response times.',
                        'Wrote complex stored procedures in PostgreSQL, applying indexing and query optimization to enhance performance and reporting.',
                        'Developed dynamic and responsive React and Next.js UI components, leveraging Redux for state management and ensuring WCAG 2.1 accessibility compliance for patient and care team portals.',
                        'Performed integration, regression and unit testing using JUnit with Mockito, validating APIs with Postman and automated flows with Selenium.',
                        'Implemented Redis caching to cut database load and boost response times by 40%.',
                        'Managed Kafka producers and consumers for high-volume messaging and automated build/configuration using Maven/Gradle.',
                        'Built CI/CD pipelines in Jenkins to automate testing, builds and deployments with TDD/BDD practices using JUnit and Mockito.',
                        'Deployed containerized microservices using Docker, orchestrated with Kubernetes and provisioned infrastructure on AWS with Terraform.',
                        'Collaborated with QA teams to automate manual processes, reducing errors by 70% and accelerating release cycles.'
                      ]
                    },
                    {
                      company: 'Hirecraft Software Private Limited',
                      position: 'Software Engineer',
                      period: 'June 2021 - July 2023',
                      location: 'Bengaluru, KA',
                      description: 'Built role-based recruitment portals with TypeScript, Node.js, Express.js and MongoDB, improving efficiency for hiring managers, recruiters, vendors, employees and applicants.',
                      achievements: [
                        'Designed reusable UI components with RxJS and optimized change detection, improving frontend performance.',
                        'Visualized recruitment data using Chart.js, enabling data-driven hiring insights and reducing decision turnaround time.',
                        'Developed RESTful APIs in Express.js for CRUD operations, authentication and role-based access, securing endpoints with OAuth 2.0 and JWT.',
                        'Optimized MongoDB schemas and queries with indexing and aggregation for high-volume recruitment data.',
                        'Implemented unit, integration and end-to-end testing with Jasmine and Karma to maintain quality and reduce release bugs.',
                        'Containerized and deployed applications on Azure Kubernetes Service (AKS) using Docker, achieving seamless scalability and faster deployment cycles.',
                        'Built end-to-end CI/CD pipelines in Azure DevOps, automating build, test, and deployment workflows to accelerate delivery and improve release reliability.',
                        'Integrated RabbitMQ messaging to enable asynchronous communication across services, handling event-driven flows.',
                        'Established monitoring with Prometheus, Grafana, OpenTelemetry and ELK stack to improve observability and reduce MTTR.',
                        'Secured applications by managing secrets and configurations with Azure Key Vault, ensuring compliance and safe deployments.'
                      ]
                    }
                  ].map((job, index) => (
                    <div 
                      key={index} 
                      className="border-l-4 border-blue-500 pl-4 sm:pl-6 pb-4 sm:pb-6 transform transition-all duration-500 hover:border-blue-600 hover:shadow-xl hover:bg-blue-50/30 rounded-r-lg hover:scale-[1.02] animate-slide-in-right"
                      style={{ animationDelay: `${index * 300}ms` }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2 group">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 transform transition-all duration-300 group-hover:text-blue-600">{job.position}</h3>
                        <span className="text-blue-600 font-medium text-sm sm:text-base transform transition-all duration-300 group-hover:scale-105">{job.period}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
                        <h4 className="text-base sm:text-lg text-gray-700 font-semibold transform transition-all duration-300 hover:text-blue-600">{job.company}</h4>
                        <div className="flex items-center gap-1 text-gray-600 text-sm sm:text-base transform transition-all duration-300 hover:text-blue-600">
                          <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-blue-500" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base transform transition-all duration-300 hover:text-gray-700">{job.description}</p>
                      <ul className="space-y-1 sm:space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li 
                            key={i} 
                            className="text-gray-600 flex items-start text-sm sm:text-base transform transition-all duration-300 hover:text-gray-800 hover:translate-x-2 animate-fade-in-left"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <span className="text-blue-500 mr-2 transform transition-all duration-200 hover:scale-125">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );

        case 'projects':
          return (
            <div className="bg-white/95 shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl backdrop-blur-sm">
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-6 sm:mb-8 group animate-slide-in-left">
                  <FolderOpen className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 transform transition-all duration-400 group-hover:scale-110 group-hover:rotate-12" />
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 transform transition-all duration-400 group-hover:text-blue-600">Featured Projects</h1>
                </div>
                
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      title: 'Inventory Management System',
                      description: 'Built an Inventory Management app using PHP CodeIgniter, jQuery, Bootstrap, and MySQL, enabling real-time stock updates, accurate tracking and streamlined daily operations for shop owners.',
                      tech: ['PHP', 'CodeIgniter', 'jQuery', 'Bootstrap', 'MySQL'],
                      image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg'
                    },
                    {
                      title: 'News Aggregator App',
                      description: 'Developed a modern, responsive news aggregation platform using React, TypeScript and Tailwind CSS with advanced features for browsing, searching and bookmarking articles in a newspaper-style interface.',
                      tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
                      image: 'https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg'
                    },
                    {
                      title: 'Healthcare Web Application',
                      description: 'Cloud-hosted healthcare web application using Spring Boot microservices, React frontend and AWS deployment to improve service accessibility and patient care.',
                      tech: ['Spring Boot', 'React', 'AWS', 'PostgreSQL', 'Docker'],
                      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg'
                    },
                    {
                      title: 'Recruitment Portal',
                      description: 'Role-based recruitment portal with Angular, Node.js, and MongoDB, featuring real-time dashboards, automated workflows, and comprehensive candidate management.',
                      tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Azure'],
                      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
                    }
                  ].map((project, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 cursor-pointer group animate-scale-in"
                      style={{ animationDelay: `${index * 200}ms` }}
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div 
                        className="h-32 sm:h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 transform transition-all duration-300 group-hover:text-blue-600">{project.title}</h3>
                        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base transform transition-all duration-300 group-hover:text-gray-700">{project.description}</p>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                          {project.tech.map((tech, i) => (
                            <span 
                              key={i} 
                              className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium transform transition-all duration-300 hover:bg-blue-200 hover:scale-110 animate-fade-in"
                              style={{ animationDelay: `${i * 50}ms` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );

        case 'contact':
          return (
            <div className="bg-white/95 shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl backdrop-blur-sm">
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-6 sm:mb-8 group animate-slide-in-left">
                  <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 transform transition-all duration-400 group-hover:scale-110 group-hover:rotate-12" />
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 transform transition-all duration-400 group-hover:text-blue-600">Let's Connect</h1>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="animate-slide-in-left">
                    <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 transform transition-all duration-400 hover:text-gray-800">
                      I'm always interested in discussing software development opportunities, 
                      innovative projects, or potential collaborations. Whether you need 
                      a full-stack developer or want to discuss technical solutions, let's talk!
                    </p>
                    
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        { icon: Mail, title: 'Email', value: 'nehachowdary209@gmail.com' },
                        { icon: Phone, title: 'Phone', value: '+1 (646) 948-6990' },
                        { icon: MapPin, title: 'Location', value: 'New York, NY (Open to relocate)' }
                      ].map((contact, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 sm:gap-4 group transform transition-all duration-400 hover:translate-x-3 animate-fade-in-up"
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110 group-hover:rotate-12">
                            <contact.icon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 text-sm sm:text-base transform transition-all duration-300 group-hover:text-blue-600">{contact.title}</h3>
                            <p className="text-gray-600 text-sm sm:text-base transform transition-all duration-300 group-hover:text-blue-500">{contact.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
                      {[
                        { icon: Github, link: 'https://github.com/nehad2809', bg: 'bg-gray-800', hover: 'hover:bg-gray-700', ring: 'focus:ring-gray-300' },
                        { icon: Linkedin, link: 'https://www.linkedin.com/in/nehac209/', bg: 'bg-blue-600', hover: 'hover:bg-blue-700', ring: 'focus:ring-blue-300' },
                        { icon: Mail, bg: 'bg-sky-400', hover: 'hover:bg-sky-500', ring: 'focus:ring-sky-300' }
                      ].map((social, index) => (
                        <a 
                          key={index}
                          href={social.link || `mailto:nehachowdary209@gmail.com`}
                          target={social.link ? "_blank" : "_self"}
                          rel={social.link ? "noopener noreferrer" : ""}
                          className={`w-10 sm:w-12 h-10 sm:h-12 ${social.bg} text-white rounded-xl flex items-center justify-center ${social.hover} transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 ${social.ring} animate-bounce-in`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <social.icon size={18} className="sm:w-5 sm:h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="animate-slide-in-right">
                    {/* Professional Links */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-800">Professional Links</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {[
                          { 
                            icon: Linkedin, 
                            label: 'LinkedIn Profile', 
                            description: 'Connect with me professionally',
                            color: 'bg-blue-600 hover:bg-blue-700',
                            link: 'https://www.linkedin.com/in/nehac209/'
                          },
                          { 
                            icon: Github, 
                            label: 'GitHub Portfolio', 
                            description: 'View my code repositories',
                            color: 'bg-gray-800 hover:bg-gray-700',
                            link: 'https://github.com/nehad2809'
                          },
                          { 
                            icon: Download, 
                            label: 'Download Resume', 
                            description: 'Get my latest CV',
                            color: 'bg-green-600 hover:bg-green-700',
                            link: 'https://drive.google.com/file/d/1-GVclgUkfucgupZ4r7WwK271SLUSd526/view?usp=drive_link'
                          }
                        ].map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-4 p-4 ${item.color} text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
                          >
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm">{item.label}</h4>
                              <p className="text-xs opacity-90">{item.description}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transform transition-all duration-200 group-hover:translate-x-1" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );

        default:
          return null;
      }
    })();

    return (
      <div className={`transition-all duration-500 ${isLoading ? 'opacity-0 scale-95' : isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {content}
      </div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Particles.js Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#ffffff", "#3b82f6", "#6366f1", "#8b5cf6", "#06b6d4"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            shape: {
              type: ["circle", "triangle", "polygon"],
              options: {
                polygon: {
                  sides: 6,
                },
              },
            },
            size: {
              value: { min: 1, max: 5 },
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Static Background Gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600" />

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Navigation Icons */}
        <div className="flex justify-center pt-6 sm:pt-8 pb-3 sm:pb-4">
          <div className="flex gap-4 sm:gap-6 lg:gap-8 relative px-4">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="relative group">
                  <button 
                    onClick={() => handlePageChange(item.id as PageType)}
                    className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-400 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/30 animate-float backdrop-blur-sm ${
                      currentPage === item.id 
                        ? 'bg-white/60 shadow-xl scale-110' 
                        : 'bg-white/40 hover:bg-white/50 hover:shadow-lg'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    aria-label={item.label}
                  >
                    <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white transform transition-all duration-300 group-hover:rotate-12" />
                  </button>
                  
                  {/* Enhanced Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm border border-white/20 shadow-xl">
                    {item.label}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Pointer/Arrow Indicator */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative flex gap-4 sm:gap-6 lg:gap-8 px-4">
            {navigationItems.map((_, index) => (
              <div key={index} className="w-10 sm:w-12 flex justify-center">
                {index === getCurrentPageIndex() && (
                  <div className="w-0 h-0 border-l-[8px] sm:border-l-[10px] border-r-[8px] sm:border-r-[10px] border-b-[12px] sm:border-b-[14px] border-l-transparent border-r-transparent border-b-white/80 animate-bounce-slow transform transition-all duration-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="max-w-6xl mx-auto">
            {renderPageContent()}
          </div>
        </div>

        {/* Footer outside the card */}
        <div className="text-center pb-6 sm:pb-8 text-white/80 text-xs sm:text-sm px-4">
          <p className="transform transition-all duration-300 hover:text-white/90 backdrop-blur-sm">
            © {new Date().getFullYear()} Neha | Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;