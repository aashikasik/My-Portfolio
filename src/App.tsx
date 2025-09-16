
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Moon, Sun, ChevronDown, ExternalLink } from 'lucide-react';
import Carousel from './Carousel';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showCVModal, setShowCVModal] = useState(false);
  const titles = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
  ];
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  useEffect(() => {
    let timeout: any;
    let interval: any;
    const currentTitle = titles[currentTitleIdx];
    let charIdx = 0;
    setTypedText('');
    interval = setInterval(() => {
      if (charIdx <= currentTitle.length) {
        setTypedText(currentTitle.substring(0, charIdx));
        charIdx++;
      } else {
        clearInterval(interval);
        timeout = setTimeout(() => {
          setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
        }, 1200);
      }
    }, 70);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentTitleIdx]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    {
      name: 'HTML',
      level: 95,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      level: 92,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React',
      level: 78,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Python',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'MongoDB',
      level: 60,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'MySQL',
      level: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      name: 'Node.js',
      level: 60,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'GitHub',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      name: 'VS Code',
      level: 98,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg',
    },
  ];

  const projects = [
    {
      title: 'Bharakath Mutton Curry Shop',
      description: 'Bharakath Mutton Curry Shop is an online ordering platform featuring a searchable and filterable menu, easy order placement, secure admin login, real-time order management, and permanent storage in a MySQL database. The system also supports order notifications via Email/WhatsApp and a responsive design for both mobile and desktop users.',
      images: [
        'project 1.png'
      ],
      tech: ['React.js', 'Python', 'Flask', 'MySQL'],
      codeLinks: [
        { url: 'https://github.com/aashikasik/Bharakath-Mutton-Curry-Shop.git', label: 'Full Code' },
        { url: 'https://bharakath-mutton-curry-shop.onrender.com/', label: 'Live Demo' }
      ]
    },
    {
      title: 'Crypto Currency Dashboard',
      description: 'Crypto Currency Dashboard is a real-time crypto tracking platform built with Next.js, TypeScript, and Tailwind CSS. It features live market data from the CoinGecko API, searchable and filterable coin lists, detailed coin pages, a personal watchlist stored in LocalStorage, and a responsive design optimized for all devices.',
      images: [
        'project 2.png'
      ],
      tech: ['Next.js', 'Tailwind CSS', 'CoinGecko API'],
      codeLinks: [
        { url: 'https://github.com/aashikasik/CryptoCurrency-Dashboard.git', label: 'Full Code' },
        { url: 'https://crypto-currency-dashboard-pi.vercel.app/', label: 'Live Demo' },
      ]
    },
    {
      title: 'House Price Prediction',
      description: 'House Price Prediction is a machine learning web application built with React.js, Flask, and Scikit-learn. It predicts property prices based on user-input features using a trained regression model, with a clean, responsive interface and real-time result display.',
      images: [
        'project 3.jpg'
      ],
      tech: ['React.js', 'Flask', 'Scikit-learn'],
      codeLinks: [
        { url: 'https://github.com/aashikasik/House-Price-Prediction.git', label: 'Full Code' },
        { url: '', label: 'Live Demo' }
      ]
    },
    {
      title: 'E-commerce Website',
      description: 'E-Commerce Website is an online shopping platform featuring a product catalog, search and filter options, a shopping cart system, secure checkout, and responsive design for both desktop and mobile users. It offers a smooth browsing experience with dynamic product loading and user-friendly navigation.',
      images: [
        'E-Commerce Website.jpg'
      ],
      tech: ['React.js', 'Node.js', 'MongoDB'],
      codeLinks: [
        { url: 'https://github.com/aashikasik/E-Commerce-Website.git', label: 'Full Code' },
        { url: '', label: 'Live Demo' }
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and contact information.',
      images: [
        'portfolio.png'
      ],
      tech: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML & CSS'],
      codeLinks: [
        { url: 'https://github.com/aashikasik/My-Portfolio.git', label: 'Full Code' },
        { url: 'https://asikportfolio.netlify.app', label: 'Live Demo' }
      ]
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
             My Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 capitalize transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="main img.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
              Asik Mohamed B
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              <span className="whitespace-pre">{typedText}</span>
            </p>
            
            <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Motivated and detail-oriented Full-Stack Developer with hands-on experience in frontend and backend development. Passionate about clean, maintainable code and continuous learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2 ${
                  isDarkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' 
                    : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                Get In Touch
              </button>
              <button
                onClick={() => setShowCVModal(true)}
                className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-blue-600 text-blue-600 bg-white dark:bg-gray-900 dark:text-blue-400 shadow-lg"
              >
                Get CV
              </button>
            </div>

            <div className="animate-bounce">
              <ChevronDown size={32} className="mx-auto text-gray-400" />
            </div>
            {/* CV Modal */}
            {showCVModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 w-80 text-center`}>
                  <h3 className="text-xl font-bold mb-4">Get My CV</h3>
                  <div className="flex flex-col gap-4 mb-6">
                    <a
                      href="Asik Mohamed Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                    >
                      View CV
                    </a>
                    <a
                      href="Asik Mohamed Resume.pdf"
                      download
                      className="border-2 border-blue-600 text-blue-600 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-800"
                    >
                      Download CV
                    </a>
                  </div>
                  <button
                    onClick={() => setShowCVModal(false)}
                    className="mt-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Passionate Developer</h3>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
               I’m a motivated Full-Stack Developer with practical experience in building both frontend and backend applications.
               Proficient in HTML, CSS, Python, React, Node.js, and MySQL, with a strong foundation in software development principles. 
               Recently earned my Master’s degree in Computer Science from Jamal Mohamed College and passionate about creating efficient, user-focused digital solutions.
              </p>
              
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                I'm passionate about creating efficient, scalable solutions and have experience working with various
                technologies including Python, React.js, Next.js, Node.js, MySQL and MongoDB. I believe in continuous
                learning and staying up-to-date with the latest technologies and best practices.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Python Expert
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Frontend Developer
                </span>
                <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Backend Developer
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`flex flex-col items-center rounded-2xl p-8 w-44 h-56 transition-all duration-300 hover:scale-105
                  ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl border border-gray-700' : 'bg-white shadow-lg border border-gray-200'}`}
              >
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
                <span className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-blue-200' : 'text-gray-900'}`}>{skill.name}</span>
                <span className={`text-lg font-bold ${isDarkMode ? 'text-purple-300' : 'text-gray-700'}`}>{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                {/* إذا كان المشروع هو Job Board Platform، اعرض كاروسيل الصور */}
                {(project.images && Array.isArray(project.images)) ? (
                  <Carousel images={project.images} />
                ) : (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* أزرار code متعددة لكل مشروع */}
                  {project.codeLinks && project.codeLinks.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.codeLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 border border-gray-300 dark:border-gray-600 rounded px-3 py-1"
                        >
                          {link.label === 'Live Demo' ? <ExternalLink size={16} /> : <Github size={16} />}
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a
               href="mailto:asikasat777@gmail.com"
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105`}
              >
                <Mail size={32} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
               <p className="text-gray-600 dark:text-gray-300">asikasat777@gmail.com</p>
              </a>
              
              <a
               href="https://www.linkedin.com/in/asik-mohamed-b9b526250"
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105`}
              >
                <Linkedin size={32} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-300">Connect with me</p>
              </a>
              
              <a
               href="https://github.com/aashikasik"
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105`}
              >
                <Github size={32} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-300">Check out my code</p>
              </a>
            </div>
            
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-xl`}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-gray-50 border-gray-300'
                      }`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-gray-50 border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-gray-50 border-gray-300'
                    }`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Asik Mohamed. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;