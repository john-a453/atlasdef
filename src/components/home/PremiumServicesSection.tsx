import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Shield, Network, Cloud, Eye, Server, LineChart, ArrowRight, Sparkles, ChevronLeft, ChevronRight, Target, Lock, Users, Zap, Database, Wifi, Settings, FileText, Search, Globe, AlertTriangle, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumServicesSection = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Service categories with comprehensive services
  const serviceCategories = [
    {
      id: 'defensive-security',
      title: 'Defensive Security',
      subtitle: 'Advanced Threat Protection',
      description: 'Comprehensive security operations with 24/7 monitoring, threat detection, and incident response capabilities.',
      icon: Shield,
      gradient: 'from-blue-600 via-blue-700 to-indigo-800',
      services: [
        { name: 'SIEM & Log Management', icon: Database, description: 'Centralized security information and event management' },
        { name: 'EDR/XDR Solutions', icon: Eye, description: 'Endpoint detection and response with extended visibility' },
        { name: 'Threat Intelligence', icon: Search, description: 'Advanced threat hunting and intelligence feeds' },
        { name: 'Incident Response', icon: AlertTriangle, description: 'Rapid response and forensic analysis' }
      ]
    },
    {
      id: 'offensive-security',
      title: 'Offensive Security',
      subtitle: 'Ethical Hacking & Penetration Testing',
      description: 'Advanced security assessments to identify vulnerabilities before attackers do.',
      icon: Target,
      gradient: 'from-red-600 via-red-700 to-pink-800',
      services: [
        { name: 'Web App Testing', icon: Globe, description: 'Comprehensive web application security assessment' },
        { name: 'Network Penetration', icon: Network, description: 'Infrastructure and network security testing' },
        { name: 'Mobile App Testing', icon: Wifi, description: 'iOS and Android application security testing' },
        { name: 'Social Engineering', icon: Users, description: 'Human factor security assessment' }
      ]
    },
    {
      id: 'grc',
      title: 'GRC (Governance, Risk & Compliance)',
      subtitle: 'Regulatory Compliance & Risk Management',
      description: 'Comprehensive governance, risk management, and compliance solutions.',
      icon: FileText,
      gradient: 'from-green-600 via-green-700 to-emerald-800',
      services: [
        { name: 'ISO 27001 Compliance', icon: Shield, description: 'Information security management system certification' },
        { name: 'GDPR Compliance', icon: Lock, description: 'Data protection and privacy compliance' },
        { name: 'Risk Assessment', icon: Activity, description: 'Comprehensive risk analysis and mitigation' },
        { name: 'Audit & Reporting', icon: FileText, description: 'Compliance auditing and documentation' }
      ]
    },
    {
      id: 'soc-service',
      title: 'SOC as a Service',
      subtitle: '24/7 Security Operations Center',
      description: 'Fully managed security operations center with expert analysts and advanced tools.',
      icon: Eye,
      gradient: 'from-purple-600 via-purple-700 to-violet-800',
      services: [
        { name: '24/7 Monitoring', icon: Eye, description: 'Continuous security monitoring and alerting' },
        { name: 'Threat Detection', icon: Search, description: 'AI-powered threat detection and analysis' },
        { name: 'Incident Response', icon: Zap, description: 'Rapid incident containment and remediation' },
        { name: 'Compliance Reporting', icon: FileText, description: 'Automated compliance and audit reports' }
      ]
    },
    {
      id: 'data-center',
      title: 'Next-Generation Data Centers',
      subtitle: 'Modern Infrastructure Design',
      description: 'State-of-the-art data center design, implementation, and optimization.',
      icon: Server,
      gradient: 'from-cyan-600 via-cyan-700 to-blue-800',
      services: [
        { name: 'Infrastructure Design', icon: Settings, description: 'Scalable and efficient data center architecture' },
        { name: 'Virtualization', icon: Server, description: 'VMware, Proxmox, and Nutanix solutions' },
        { name: 'Cloud Integration', icon: Cloud, description: 'Hybrid and multi-cloud connectivity' },
        { name: 'Performance Optimization', icon: Zap, description: 'Resource optimization and tuning' }
      ]
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      subtitle: 'Enterprise Networking Solutions',
      description: 'Professional network design, implementation, and management.',
      icon: Network,
      gradient: 'from-orange-600 via-orange-700 to-red-800',
      services: [
        { name: 'Routing & Switching', icon: Network, description: 'Advanced routing protocols and switching' },
        { name: 'SD-WAN Solutions', icon: Globe, description: 'Software-defined wide area networking' },
        { name: 'Wireless Networks', icon: Wifi, description: 'Enterprise Wi-Fi 6/6E deployment' },
        { name: 'Network Security', icon: Lock, description: 'Firewall and perimeter security' }
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentCategory((prev) => (prev + 1) % serviceCategories.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, serviceCategories.length]);

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % serviceCategories.length);
    setIsAutoPlaying(false);
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length);
    setIsAutoPlaying(false);
  };

  const selectCategory = (index: number) => {
    setCurrentCategory(index);
    setIsAutoPlaying(false);
  };

  const currentService = serviceCategories[currentCategory];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Modern Background with 3D Elements */}
      <div className="absolute inset-0">
        {/* Clean foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-blue-50/20"></div>
        
        {/* Floating geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className={`w-${4 + Math.floor(Math.random() * 4)} h-${4 + Math.floor(Math.random() * 4)} bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg transform rotate-45`} />
          </motion.div>
        ))}

        {/* Network connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#1D4ED8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={`connection-${i}`}
              d={`M ${Math.random() * 100}% ${Math.random() * 100}% Q ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 8,
                delay: i * 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 mb-8 border border-blue-200/60 shadow-lg shadow-blue-100/50"
          >
            <Sparkles size={20} className="text-blue-600 mr-3" />
            <span className="text-blue-800 text-sm font-semibold tracking-wider uppercase">
              SOLUTIONS WE DELIVER
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
          >
            We Deliver the
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent mt-2">
              Best Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Enterprise-grade IT and cybersecurity solutions designed to address specific business needs, 
            streamline operations, and drive growth through cutting-edge technology and proven expertise.
          </motion.p>
        </motion.div>

        {/* Main Content Area */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevCategory}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-lg rounded-full flex items-center justify-center text-blue-600 hover:bg-white hover:text-blue-700 transition-all duration-300 border border-blue-200/60 shadow-lg hover:shadow-xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextCategory}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-lg rounded-full flex items-center justify-center text-blue-600 hover:bg-white hover:text-blue-700 transition-all duration-300 border border-blue-200/60 shadow-lg hover:shadow-xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
          >
            <ChevronRight size={20} />
          </button>

          {/* Category Indicators */}
          <div className="flex justify-center mb-8 space-x-2">
            {serviceCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => selectCategory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCategory 
                    ? 'bg-blue-600 scale-125 shadow-lg shadow-blue-600/50' 
                    : 'bg-blue-200 hover:bg-blue-300'
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
              />
            ))}
          </div>

          {/* Main Service Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-white/80 backdrop-blur-2xl rounded-3xl overflow-hidden border border-blue-200/40 shadow-2xl"
            >
              {/* Header Section */}
              <div className={`bg-gradient-to-r ${currentService.gradient} p-8 md:p-12 text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Content */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex items-center mb-6"
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6 border border-white/30">
                        <currentService.icon size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                          {currentService.title}
                        </h3>
                        <p className="text-white/90 text-lg font-medium">
                          {currentService.subtitle}
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-white/90 text-lg leading-relaxed mb-8"
                    >
                      {currentService.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <Link 
                        to="/services"
                        className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 backdrop-blur-sm"
                      >
                        Learn More
                        <ArrowRight size={18} className="ml-2" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Right Side - 3D Visual Element */}
                  <motion.div
                    initial={{ opacity: 0, x: 30, rotateY: -15 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="relative w-full h-64 md:h-80 perspective-1000">
                      <motion.div
                        animate={{ 
                          rotateY: [0, 5, -5, 0],
                          rotateX: [0, 2, -2, 0]
                        }}
                        transition={{ 
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center transform-gpu"
                      >
                        <currentService.icon size={80} className="text-white/80" />
                      </motion.div>
                      
                      {/* Floating elements around the main icon */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 bg-white/30 rounded-full"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {currentService.services.map((service, index) => {
                    const ServiceIcon = service.icon;
                    
                    return (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                        className="group relative"
                      >
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/40 hover:border-blue-300/60 transition-all duration-300 hover:bg-white/80 hover:shadow-lg h-full">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <ServiceIcon size={24} className="text-blue-600" />
                          </div>
                          
                          <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {service.name}
                          </h4>
                          
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {service.description}
                          </p>
                          
                          {/* Hover effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200/60">
              <div className={`w-2 h-2 rounded-full mr-2 ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isAutoPlaying ? 'Auto-playing' : 'Manual control'}
              </span>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="ml-2 text-xs text-blue-600 hover:text-blue-700 font-medium"
              >
                {isAutoPlaying ? 'Pause' : 'Resume'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-12 border border-blue-200/40 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Shield size={20} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Network size={20} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Cloud size={20} className="text-white" />
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-primary mb-4">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Our expert team is ready to design and implement solutions that drive your business forward. 
              Let's discuss how we can help you achieve your technology goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="btn bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
              </Link>
              <Link 
                to="/contact" 
                className="btn bg-white/80 hover:bg-white backdrop-blur-xl text-blue-600 px-8 py-4 rounded-full border border-blue-200/60 hover:border-blue-300/60 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServicesSection;