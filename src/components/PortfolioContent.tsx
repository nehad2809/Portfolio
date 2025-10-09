import React from 'react';
import { User, Coffee, Briefcase, FolderOpen, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Server, Database, Code2, Award, Target, Zap } from 'lucide-react';

export const AboutContent = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <User className="w-6 h-6 text-blue-600" />
      <h2 className="text-2xl font-bold text-slate-800">About Me</h2>
    </div>
    
    <div className="prose prose-lg max-w-none">
      <p className="text-slate-700 leading-relaxed text-lg">
        I am a passionate Software Engineer with over 2 years of hands-on experience in designing and developing scalable, user-centric applications. My expertise spans full-stack development, automation, and AI-powered systems, with a strong foundation in both frontend and backend technologies. I have actively contributed across all phases of the Software Development Life Cycle (SDLC), ensuring high-quality, reliable, and maintainable code in every project I work on.
      </p>
      
      <p className="text-slate-700 leading-relaxed">
        On the frontend, I specialize in crafting responsive and interactive user interfaces using HTML5, CSS3, JavaScript, Vue.js, and React.js. I am equally skilled on the backend, with practical experience building robust APIs, managing data with SQL and NoSQL databases, and implementing real-time messaging solutions using Kafka. I also specialize in Spring ecosystem technologies and have extensive experience with cloud-native development, containerization, and DevOps practices. I'm passionate about writing maintainable code, implementing best practices, and mentoring junior developers in the art of Java development.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            Professional Details
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li className="flex justify-between"><strong>Location:</strong> <span>New Jersey, USA</span></li>
            <li className="flex justify-between"><strong>Experience:</strong> <span>3+ Years Full-Stack</span></li>
            <li className="flex justify-between"><strong>Education:</strong> <span>MS Computer Science</span></li>
            <li className="flex justify-between"><strong>Certifications:</strong> <span>Azure, AWS</span></li>
          </ul>
        </div>
        
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
          <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-600" />
            Specializations
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-500" /> Enterprise Java Applications</li>
            <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-500" /> Microservices Architecture</li>
            <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-500" /> RESTful API Development</li>
            <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-500" /> Performance Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const SkillsContent = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <Coffee className="w-6 h-6 text-blue-600" />
      <h2 className="text-2xl font-bold text-slate-800">Technical Skills</h2>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Coffee className="w-5 h-5 text-amber-600" />
          Core Java
        </h3>
        <div className="space-y-4">
          {[
            { skill: 'Java 17/21', level: 95 },
            { skill: 'Spring Boot', level: 95 },
            { skill: 'Spring Security', level: 90 },
            { skill: 'JPA/Hibernate', level: 88 }
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-slate-700 font-medium">{item.skill}</span>
                <span className="text-slate-600">{item.level}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Database className="w-5 h-5 text-purple-600" />
          Database & Cloud
        </h3>
        <div className="space-y-4">
          {[
            { skill: 'PostgreSQL/MySQL', level: 90 },
            { skill: 'MongoDB', level: 85 },
            { skill: 'AWS/Azure', level: 80 },
            { skill: 'Docker/Kubernetes', level: 85 }
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-slate-700 font-medium">{item.skill}</span>
                <span className="text-slate-600">{item.level}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <Server className="w-5 h-5 text-green-600" />
        Frameworks & Tools
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          'Spring MVC', 'Spring Data', 'Maven', 'Gradle', 
          'JUnit', 'Mockito', 'Redis', 'Kafka',
          'Jenkins', 'SonarQube', 'Swagger', 'Postman'
        ].map((tool, index) => (
          <div key={index} className="bg-slate-100 px-3 py-2 rounded-lg text-center text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border border-slate-200 text-sm">
            {tool}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ExperienceContent = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <Briefcase className="w-6 h-6 text-blue-600" />
      <h2 className="text-2xl font-bold text-slate-800">Professional Experience</h2>
    </div>
    
    <div className="space-y-8">
      {[
        {
          company: 'Enterprise Solutions Inc.',
          position: 'Senior Java Developer',
          period: '2021 - Present',
          description: 'Leading development of enterprise Java applications using Spring Boot and microservices architecture. Architecting scalable backend systems for high-traffic applications.',
          achievements: [
            'Designed and implemented 12+ microservices handling 1M+ requests/day',
            'Reduced application startup time by 60% through optimization',
            'Led migration from monolith to microservices architecture',
            'Mentored team of 6 junior Java developers'
          ]
        },
        {
          company: 'FinTech Innovations',
          position: 'Java Backend Developer',
          period: '2019 - 2021',
          description: 'Developed secure financial applications using Spring Security and implemented RESTful APIs for mobile and web clients.',
          achievements: [
            'Built payment processing system handling $10M+ transactions',
            'Implemented OAuth2 and JWT authentication systems',
            'Achieved 99.9% uptime for critical financial services',
            'Optimized database queries reducing response time by 40%'
          ]
        },
        {
          company: 'TechStart Solutions',
          position: 'Java Developer',
          period: '2017 - 2019',
          description: 'Developed web applications using Spring MVC and implemented data persistence layers with JPA/Hibernate.',
          achievements: [
            'Built 15+ REST APIs for various client applications',
            'Implemented comprehensive unit testing with 90%+ coverage',
            'Integrated third-party services and payment gateways',
            'Participated in code reviews and agile development practices'
          ]
        }
      ].map((job, index) => (
        <div key={index} className="border-l-4 border-blue-600 pl-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-800">{job.position}</h3>
            <span className="text-blue-600 font-medium">{job.period}</span>
          </div>
          <h4 className="text-lg text-slate-700 font-semibold mb-3">{job.company}</h4>
          <p className="text-slate-600 mb-4">{job.description}</p>
          <ul className="space-y-1">
            {job.achievements.map((achievement, i) => (
              <li key={i} className="text-slate-600 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export const ProjectsContent = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <FolderOpen className="w-6 h-6 text-blue-600" />
      <h2 className="text-2xl font-bold text-slate-800">Featured Projects</h2>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          title: 'E-Commerce Microservices',
          description: 'Scalable e-commerce platform built with Spring Boot microservices, featuring user management, product catalog, order processing, and payment integration.',
          tech: ['Spring Boot', 'Spring Cloud', 'PostgreSQL', 'Redis', 'Docker'],
          image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
          github: '#',
          live: '#'
        },
        {
          title: 'Banking API Gateway',
          description: 'Secure API gateway for banking services with OAuth2 authentication, rate limiting, and comprehensive logging. Handles 100K+ daily transactions.',
          tech: ['Spring Gateway', 'Spring Security', 'JWT', 'MySQL', 'Kafka'],
          image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
          github: '#',
          live: '#'
        },
        {
          title: 'Inventory Management System',
          description: 'Enterprise inventory management system with real-time tracking, automated reordering, and comprehensive reporting dashboard.',
          tech: ['Spring MVC', 'Hibernate', 'PostgreSQL', 'Thymeleaf', 'Bootstrap'],
          image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
          github: '#',
          live: '#'
        },
        {
          title: 'Real-time Chat Application',
          description: 'Scalable chat application using WebSockets with Spring Boot, featuring real-time messaging, file sharing, and user presence indicators.',
          tech: ['Spring WebSocket', 'STOMP', 'MongoDB', 'Redis', 'WebSocket'],
          image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
          github: '#',
          live: '#'
        }
      ].map((project, index) => (
        <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div 
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
            <p className="text-slate-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a 
                href={project.github}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 text-sm font-medium"
              >
                <Github size={16} />
                Code
              </a>
              <a 
                href={project.live}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ContactContent = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <Mail className="w-6 h-6 text-blue-600" />
      <h2 className="text-2xl font-bold text-slate-800">Let's Connect</h2>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <p className="text-slate-700 text-lg mb-6">
          I'm always interested in discussing Java development opportunities, 
          architecture challenges, or potential collaborations. Whether you need 
          a senior Java developer or want to discuss technical solutions, let's talk!
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Email</h3>
              <p className="text-slate-600">java.developer@example.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Phone</h3>
              <p className="text-slate-600">+1 (555) 987-6543</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Location</h3>
              <p className="text-slate-600">Seattle, WA</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 mt-8">
          <a 
            href="#"
            className="w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a 
            href="#"
            className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      
      <div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-1">
              Project Type
            </label>
            <select
              id="project"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
            >
              <option>Enterprise Application</option>
              <option>Microservices Architecture</option>
              <option>API Development</option>
              <option>System Integration</option>
              <option>Performance Optimization</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
              Project Details
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
              placeholder="Tell me about your Java project requirements..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors duration-200 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);