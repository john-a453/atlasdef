import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('cybersecurity');
  const [infrastructureIndex, setInfrastructureIndex] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const autoScrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Check if we're on the offensive security page
  const isOffensiveSecurityPage = location.pathname === '/services/cybersecurity/offensive-security';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced auto-scroll for infrastructure services with pause functionality
  useEffect(() => {
    if (selectedCategory === 'infrastructure' && showServicesDropdown && !isAutoScrollPaused) {
      const interval = setInterval(() => {
        setInfrastructureIndex(prev => (prev + 4) % 8);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [selectedCategory, showServicesDropdown, isAutoScrollPaused]);

  // Resume auto-scroll after 5 seconds when paused
  useEffect(() => {
    if (isAutoScrollPaused) {
      autoScrollTimeoutRef.current = setTimeout(() => {
        setIsAutoScrollPaused(false);
      }, 5000);
      return () => {
        if (autoScrollTimeoutRef.current) {
          clearTimeout(autoScrollTimeoutRef.current);
        }
      };
    }
  }, [isAutoScrollPaused]);

  // Services dropdown handlers
  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 150);
  };

  // UniFi-style header classes - background turns white when dropdown is active
  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${showServicesDropdown || isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`;

  // Exact services data from your images
  const servicesData = {
    cybersecurity: {
      title: 'Cybersecurity Solutions',
      services: [
        {
          title: 'Defensive Security',
          subtitle: 'XDR, EDR, SIEM, IDS, IPS and real-time defense systems',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          link: '/services/cybersecurity/defensive-security'
        },
        {
          title: 'Offensive Security',
          subtitle: 'Advanced security assessment & penetration testing',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          ),
          link: '/services/cybersecurity/offensive-security'
        },
        {
          title: 'SOC as a Service',
          subtitle: '24/7 Security Operations Center',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ),
          link: '/services/cybersecurity/soc-as-a-service'
        },
        {
          title: 'GRC',
          subtitle: 'Governance, Risk & Compliance',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          link: '/services/cybersecurity/grc'
        }
      ]
    },
    infrastructure: {
      title: 'Infrastructure Solutions',
      services: [
        {
          title: 'Next-Gen Data Center Design',
          subtitle: 'Next-Gen Infrastructure',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          link: '/services/infrastructure/data-center-design'
        },
        {
          title: 'Network Engineering',
          subtitle: 'BGP, MPLS, SD-WAN',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          ),
          link: '/services/infrastructure/network-engineering'
        },
        {
          title: 'Cloud Integration',
          subtitle: 'AWS, Azure, GCP, OCI',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          ),
          link: '/services/infrastructure/cloud-integration'
        },
        {
          title: 'Virtualization',
          subtitle: 'VMware, Proxmox, Nutanix',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          ),
          link: '/services/infrastructure/virtualization'
        },
        {
          title: 'Server Administration',
          subtitle: 'Active Directory, Windows Server, Linux',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          ),
          link: '/services/infrastructure/server-administration'
        },
        {
          title: 'Infrastructure Monitoring',
          subtitle: 'Zabbix, Prometheus, Grafana',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          link: '/services/infrastructure/monitoring'
        },
        {
          title: 'Backup & Recovery',
          subtitle: 'Veeam-powered BDR',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
          link: '/services/infrastructure/backup-recovery'
        },
        {
          title: 'Performance Optimization',
          subtitle: 'Load Balancing & Tuning',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          link: '/services/infrastructure/performance-optimization'
        }
      ]
    },
    development: {
      title: 'Development & DevOps',
      services: [
        {
          title: 'Web Development',
          subtitle: 'Full-Stack Applications',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          link: '/services/development/web-development'
        },
        {
          title: 'Mobile Development',
          subtitle: 'iOS & Android Apps',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
            </svg>
          ),
          link: '/services/development/mobile-development'
        },
        {
          title: 'DevOps & CI/CD',
          subtitle: 'Docker, Kubernetes',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ),
          link: '/services/development/devops-cicd'
        },
        {
          title: 'Enterprise Software',
          subtitle: 'ERP, CRM, HRMS',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          link: '/services/development/enterprise-software'
        }
      ]
    }
  };

  // Navigation categories
  const categories = [
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'development', label: 'Development' }
  ];

  const nextInfrastructure = () => {
    setInfrastructureIndex(prev => (prev + 4) % 8);
    setIsAutoScrollPaused(true); // Pause auto-scroll for 5 seconds
  };

  const prevInfrastructure = () => {
    setInfrastructureIndex(prev => (prev - 4 + 8) % 8);
    setIsAutoScrollPaused(true); // Pause auto-scroll for 5 seconds
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex items-center h-16">
        {/* Logo - Clickable to go home with offensive security red styling */}
        <Link to="/" className="flex items-center space-x-2 mr-12">
          <Shield className={`h-8 w-8 transition-colors duration-300 ${showServicesDropdown || isScrolled
            ? (isOffensiveSecurityPage ? 'text-red-600' : 'text-blue-600')
            : 'text-white'
            }`} />
          <span className={`text-xl font-bold font-poppins transition-colors duration-300 ${showServicesDropdown || isScrolled
            ? (isOffensiveSecurityPage ? 'text-red-600' : 'text-blue-600')
            : 'text-white'
            }`}>
            Atlas Defenders
          </span>
        </Link>

        {/* Desktop Navigation - Left-oriented like UniFi */}
        <nav className="hidden md:flex items-center space-x-8 flex-1">

          {/* UniFi-style Services Dropdown */}
          <div
            className="relative"
            ref={servicesRef}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              className={`font-medium transition-colors duration-300 flex items-center ${showServicesDropdown || isScrolled
                ? (isOffensiveSecurityPage ? 'text-gray-900 hover:text-red-600' : 'text-gray-900 hover:text-blue-600')
                : 'text-white hover:text-accent'
                }`}
            >
              Services
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Perfect UniFi-Style Full Width Dropdown */}
            <AnimatePresence>
              {showServicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 top-16 w-full bg-white shadow-xl z-40"
                  style={{
                    height: '320px'
                  }}
                >
                  <div className="flex h-full">
                    {/* Clean Left Sidebar - Exactly Like UniFi */}
                    <div className="w-56 bg-gray-50 border-r border-gray-200 h-full">
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
                        <nav className="space-y-1">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onMouseEnter={() => setSelectedCategory(category.id)}
                              className={`w-full text-left px-3 py-2 text-sm font-medium transition-all duration-150 relative ${selectedCategory === category.id
                                ? (isOffensiveSecurityPage ? 'text-red-600 border-r-2 border-red-600' : 'text-blue-600 border-r-2 border-blue-600')
                                : (isOffensiveSecurityPage ? 'text-gray-700 hover:text-red-600 hover:border-r-2 hover:border-red-600' : 'text-gray-700 hover:text-blue-600 hover:border-r-2 hover:border-blue-600')
                                }`}
                            >
                              {category.label}
                            </button>
                          ))}
                        </nav>

                        {/* Simple Bottom Links - Like UniFi */}
                        <div className="border-t border-gray-200 pt-4 mt-8">
                          <div className="space-y-1">
                            <Link
                              to="/services"
                              className={`block text-xs transition-colors py-1 ${isOffensiveSecurityPage ? 'text-gray-500 hover:text-red-600' : 'text-gray-500 hover:text-blue-600'
                                }`}
                              onClick={() => setShowServicesDropdown(false)}
                            >
                              All Services
                            </Link>
                            <Link
                              to="/partners"
                              className={`block text-xs transition-colors py-1 ${isOffensiveSecurityPage ? 'text-gray-500 hover:text-red-600' : 'text-gray-500 hover:text-blue-600'
                                }`}
                              onClick={() => setShowServicesDropdown(false)}
                            >
                              Resources
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main Content Area with Services */}
                    <div className="flex-1 p-8 bg-white relative">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-normal text-gray-900">
                          {servicesData[selectedCategory as keyof typeof servicesData].title}
                        </h2>

                        {/* Navigation arrows for Infrastructure */}
                        {selectedCategory === 'infrastructure' && (
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={prevInfrastructure}
                              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <ChevronLeft size={20} className="text-gray-600" />
                            </button>
                            <div className="flex space-x-1">
                              <div className={`w-2 h-2 rounded-full ${infrastructureIndex === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                              <div className={`w-2 h-2 rounded-full ${infrastructureIndex === 4 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                            </div>
                            <button
                              onClick={nextInfrastructure}
                              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <ChevronRight size={20} className="text-gray-600" />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Services Grid */}
                      <div className="grid grid-cols-4 gap-8">
                        {selectedCategory === 'infrastructure' ? (
                          // Infrastructure with carousel
                          servicesData.infrastructure.services
                            .slice(infrastructureIndex, infrastructureIndex + 4)
                            .map((service, index) => (
                              <Link
                                key={index}
                                to={service.link}
                                onClick={() => setShowServicesDropdown(false)}
                                className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                              >
                                <div className="mb-4">
                                  {React.cloneElement(service.icon, {
                                    className: `w-12 h-12 ${isOffensiveSecurityPage ? 'text-red-500' : 'text-blue-500'}`
                                  })}
                                </div>
                                <h3 className="text-base font-normal text-gray-900 mb-2">
                                  {service.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">
                                  {service.subtitle}
                                </p>
                                <span className={`text-sm font-medium group-hover:underline ${isOffensiveSecurityPage ? 'text-red-600' : 'text-blue-600'
                                  }`}>
                                  Learn More →
                                </span>
                              </Link>
                            ))
                        ) : (
                          // Cybersecurity and Development (4 services each)
                          servicesData[selectedCategory as keyof typeof servicesData].services.map((service, index) => (
                            <Link
                              key={index}
                              to={service.link}
                              onClick={() => setShowServicesDropdown(false)}
                              className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                            >
                              <div className="mb-4">
                                {React.cloneElement(service.icon, {
                                  className: `w-12 h-12 ${isOffensiveSecurityPage ? 'text-red-500' : 'text-blue-500'}`
                                })}
                              </div>
                              <h3 className="text-base font-normal text-gray-900 mb-2">
                                {service.title}
                              </h3>
                              <p className="text-sm text-gray-600 mb-3">
                                {service.subtitle}
                              </p>
                              <span className={`text-sm font-medium group-hover:underline ${isOffensiveSecurityPage ? 'text-red-600' : 'text-blue-600'
                                }`}>
                                Learn More →
                              </span>
                            </Link>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Navigation Items */}
          <Link
            to="/industries"
            className={`font-medium transition-colors duration-300 ${showServicesDropdown || isScrolled
              ? (isOffensiveSecurityPage ? 'text-gray-900 hover:text-red-600' : 'text-gray-900 hover:text-blue-600')
              : 'text-white hover:text-accent'
              }`}
          >
            Industries
          </Link>

          <Link
            to="/partners"
            className={`font-medium transition-colors duration-300 ${showServicesDropdown || isScrolled
              ? (isOffensiveSecurityPage ? 'text-gray-900 hover:text-red-600' : 'text-gray-900 hover:text-blue-600')
              : 'text-white hover:text-accent'
              }`}
          >
            Partners
          </Link>

          <Link
            to="/about"
            className={`font-medium transition-colors duration-300 ${showServicesDropdown || isScrolled
              ? (isOffensiveSecurityPage ? 'text-gray-900 hover:text-red-600' : 'text-gray-900 hover:text-blue-600')
              : 'text-white hover:text-accent'
              }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`font-medium transition-colors duration-300 ${showServicesDropdown || isScrolled
              ? (isOffensiveSecurityPage ? 'text-gray-900 hover:text-red-600' : 'text-gray-900 hover:text-blue-600')
              : 'text-white hover:text-accent'
              }`}
          >
            Contact
          </Link>
        </nav>

        {/* Ultra-Professional Get Consultation Button with Offensive Security Styling */}
        <div className="hidden md:block ml-8">
          <Link
            to="/contact"
            className={`group relative inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all duration-500 rounded-xl transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden ${isOffensiveSecurityPage && !isScrolled
              ? 'bg-white border-2 border-white text-red-600 hover:bg-gray-50 hover:shadow-2xl hover:shadow-red-500/25 focus:ring-red-500 shadow-lg'
              : isOffensiveSecurityPage && isScrolled
                ? 'bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white hover:from-red-700 hover:via-red-800 hover:to-red-900 hover:shadow-2xl hover:shadow-red-500/25 focus:ring-red-500'
                : 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-blue-500/25 focus:ring-blue-500'
              }`}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span className="font-medium tracking-wide">Get Consultation</span>
              <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            {/* Animated background layers */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isOffensiveSecurityPage && !isScrolled
              ? 'bg-gray-100'
              : isOffensiveSecurityPage && isScrolled
                ? 'bg-gradient-to-r from-red-700 via-red-800 to-red-900'
                : 'bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700'
              }`}></div>
            <div className={`absolute -inset-1 rounded-xl blur opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:blur-md ${isOffensiveSecurityPage && !isScrolled
              ? 'bg-gradient-to-r from-red-600 via-red-700 to-red-800'
              : isOffensiveSecurityPage && isScrolled
                ? 'bg-gradient-to-r from-red-600 via-red-700 to-red-800'
                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'
              }`}></div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 rounded-md ${showServicesDropdown || isScrolled ? 'text-gray-900' : 'text-white'
            }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                <Link
                  to="/services"
                  className={`block font-medium ${isOffensiveSecurityPage ? 'text-text-dark hover:text-red-600' : 'text-text-dark hover:text-secondary'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/industries"
                  className={`block font-medium ${isOffensiveSecurityPage ? 'text-text-dark hover:text-red-600' : 'text-text-dark hover:text-secondary'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  to="/partners"
                  className={`block font-medium ${isOffensiveSecurityPage ? 'text-text-dark hover:text-red-600' : 'text-text-dark hover:text-secondary'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Partners
                </Link>
                <Link
                  to="/about"
                  className={`block font-medium ${isOffensiveSecurityPage ? 'text-text-dark hover:text-red-600' : 'text-text-dark hover:text-secondary'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`block font-medium ${isOffensiveSecurityPage ? 'text-text-dark hover:text-red-600' : 'text-text-dark hover:text-secondary'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/contact"
                  className={`block px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center mt-4 ${isOffensiveSecurityPage
                    ? 'bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Get Consultation
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;