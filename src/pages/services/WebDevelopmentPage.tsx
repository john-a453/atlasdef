import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  TrendingUp,
  Users,
  Settings,
  Database,
  Layout,
  Palette,
  Server,
  Monitor
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopmentPage = () => {
  useEffect(() => {
    document.title = 'Web Development | Atlas Defenders';
  }, []);

  const [currentTechSlide, setCurrentTechSlide] = useState(0);

  // Core capabilities
  const capabilities = [
    {
      icon: Layout,
      title: 'Custom Website Design & Development',
      description: 'Tailored web solutions built from the ground up to match your unique business requirements and brand identity.'
    },
    {
      icon: Globe,
      title: 'E-commerce Platforms',
      description: 'Robust online stores with secure payment processing, inventory management, and seamless user experiences.'
    },
    {
      icon: Monitor,
      title: 'Web Portals & Dashboards',
      description: 'Interactive portals and data visualization dashboards for enhanced user engagement and business insights.'
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps (PWA)',
      description: 'App-like web experiences that work offline, load instantly, and provide native mobile functionality.'
    },
    {
      icon: Database,
      title: 'Static & Dynamic Websites',
      description: 'From lightning-fast static sites to complex dynamic applications with real-time data integration.'
    },
    {
      icon: Server,
      title: 'Frontend + Backend Integration',
      description: 'Seamless full-stack development connecting beautiful interfaces with powerful server-side functionality.'
    }
  ];

  // Technologies organized by category
  const technologies = {
    frontend: [
      { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
      { name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png' },
      { name: 'Angular', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' },
      { name: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
      { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' },
      { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png' }
    ],
    backend: [
      { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' },
      { name: 'Django', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/2560px-Django_logo.svg.png' },
      { name: 'Laravel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png' },
      { name: 'Express.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/2560px-Expressjs.png' },
      { name: 'ASP.NET', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png' }
    ],
    cms: [
      { name: 'WordPress', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/2048px-WordPress_blue_logo.svg.png' },
      { name: 'Strapi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Strapi.svg/2560px-Strapi.svg.png' },
      { name: 'Ghost', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ghost_Logo.svg/2560px-Ghost_Logo.svg.png' }
    ],
    tools: [
      { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/2560px-Git-logo.svg.png' },
      { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/2560px-Docker_%28container_engine%29_logo.svg.png' },
      { name: 'GitHub Actions', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/GitHub_logo.svg/2560px-GitHub_logo.svg.png' }
    ]
  };

  // Why choose us differentiators
  const differentiators = [
    'Lightning-fast development with modern frameworks',
    'Enterprise-grade security and performance optimization',
    '24/7 support and maintenance services',
    'Scalable architecture for future growth',
    'SEO-optimized and mobile-first design',
    'Agile development methodology with regular updates'
  ];

  // Auto-rotate technology slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechSlide(prev => (prev + 1) % Object.keys(technologies).length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const techCategories = Object.keys(technologies);
  const currentCategory = techCategories[currentTechSlide];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Web Development"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-indigo-900/90"></div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-accent/30 font-mono text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {['<div>', '</div>', '{...}', '( )', '[ ]', '< />'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>

        <div className="container relative z-10 text-white pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center mb-8"
            >
              <div className="w-12 h-0.5 bg-accent mr-4"></div>
              <span className="text-lg font-medium text-accent tracking-wide uppercase">
                Development Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white"
            >
              Web Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              Build Secure, Scalable, and High-Performance Web Applications
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                to="/contact"
                className="group inline-flex items-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Get a Free Quote</span>
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Code size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Web Development Solutions
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Atlas Defenders delivers cutting-edge web development services that combine innovative design 
                with robust functionality. Our expert team creates scalable, secure, and high-performance 
                web applications that drive business growth and enhance user experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development services covering every aspect of modern web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-primary/20"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks for modern web development
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Category Indicators */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {techCategories.map((category, index) => (
                  <div
                    key={category}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTechSlide ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Technology Carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2 capitalize">
                    {currentCategory === 'cms' ? 'CMS Platforms' : currentCategory === 'tools' ? 'Development Tools' : currentCategory}
                  </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {technologies[currentCategory as keyof typeof technologies].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-16 flex items-center justify-center mb-4">
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`}
                          className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <h4 className="text-center font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300 text-sm">
                        {tech.name}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Why Choose Atlas Defenders */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose Atlas Defenders?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and innovation sets us apart in web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((differentiator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="flex items-center">
                  <CheckCircle size={24} className="text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-800 font-medium group-hover:text-primary transition-colors duration-300">
                    {differentiator}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Success Metrics
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our track record speaks for itself with measurable results across all projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '200+', label: 'Websites Delivered', icon: Globe },
              { value: '99.9%', label: 'Uptime Guarantee', icon: Zap },
              { value: '50%', label: 'Faster Load Times', icon: TrendingUp },
              { value: '24/7', label: 'Support Available', icon: Users }
            ].map((metric, index) => {
              const Icon = metric.icon;
              
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                    <Icon size={28} className="text-accent" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">
                    {metric.value}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white">
                    {metric.label}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Code size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
                Ready to Build Your Next Web Application?
              </h2>
              
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a custom web solution 
                that drives your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Free Quote Today
                </Link>
                <Link 
                  to="/services" 
                  className="btn bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  View All Development Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopmentPage;