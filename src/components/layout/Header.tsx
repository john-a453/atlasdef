import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('cybersecurity');
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

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

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors duration-300 ${
      isActive
        ? isScrolled ? 'text-accent' : 'text-accent'
        : isScrolled ? 'text-text-dark hover:text-secondary' : 'text-white hover:text-accent'
    }`;

  const headerClasses = `fixed w-full z-50 transition-all duration-300 py-4 ${
    isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
  }`;

  // Services mega menu data with images
  const servicesData = {
    cybersecurity: {
      title: 'Cybersecurity',
      subtitle: 'Advanced Security Solutions',
      services: [
        {
          title: 'Offensive Security',
          subtitle: 'Web, Network, Mobile Pentesting',
          image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#cybersecurity'
        },
        {
          title: 'Defensive Security',
          subtitle: 'SOC, XDR, Firewalls, SIEM',
          image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#cybersecurity'
        },
        {
          title: 'GRC & Compliance',
          subtitle: 'ISO 27001, NIST, GDPR, Risk Management',
          image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#cybersecurity'
        }
      ]
    },
    infrastructure: {
      title: 'IT Infrastructure & Data Centers',
      subtitle: 'Enterprise Infrastructure',
      services: [
        {
          title: 'Network Engineering',
          subtitle: 'MPLS, BGP, SD-WAN, VLANs, Routing/Switching',
          image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#network'
        },
        {
          title: 'Data Center Migrations',
          subtitle: 'Full-stack setup, cabling, racks, relocation',
          image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#virtualization'
        },
        {
          title: 'Virtualization & Cloud',
          subtitle: 'VMware, Proxmox, Nutanix, AWS, Azure, OCI',
          image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#cloud'
        }
      ]
    },
    monitoring: {
      title: 'System Admin & Monitoring',
      subtitle: 'Operations & Observability',
      services: [
        {
          title: 'Server Administration',
          subtitle: 'Windows, Linux, Active Directory',
          image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#virtualization'
        },
        {
          title: 'Monitoring & Observability',
          subtitle: 'Zabbix, Prometheus, Grafana, PRTG',
          image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#monitoring'
        },
        {
          title: 'Backup & DR',
          subtitle: 'Veeam, RTO/RPO, Business Continuity',
          image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#backup'
        }
      ]
    },
    devops: {
      title: 'Software Engineering & DevOps',
      subtitle: 'Development & Automation',
      services: [
        {
          title: 'Web Development',
          subtitle: 'Frontend + Backend Web Apps',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#enterprise'
        },
        {
          title: 'Mobile App Dev',
          subtitle: 'Android/iOS development',
          image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#enterprise'
        },
        {
          title: 'DevOps & Automation',
          subtitle: 'CI/CD, Docker, GitHub Actions, Terraform',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
          link: '/services#enterprise'
        }
      ]
    }
  };

  const categories = [
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'infrastructure', label: 'Infrastructure & Data Centers' },
    { id: 'monitoring', label: 'System Administration' },
    { id: 'devops', label: 'Software Engineering & DevOps' }
  ];

  return (
    <header className={headerClasses}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
          <span className={`text-xl font-bold font-poppins ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Atlas Defenders
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          
          {/* Services with Dynamic Mega Dropdown */}
          <div 
            className="relative"
            ref={servicesRef}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button 
              className={`font-medium transition-colors duration-300 flex items-center ${
                isScrolled ? 'text-text-dark hover:text-secondary' : 'text-white hover:text-accent'
              }`}
            >
              Services
              <ChevronDown 
                size={16} 
                className={`ml-1 transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Dynamic Mega Dropdown */}
            <AnimatePresence>
              {showServicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                  style={{ marginLeft: '-150px' }}
                >
                  <div className="flex">
                    {/* Left Column - Categories */}
                    <div className="w-64 bg-gray-50 p-6 border-r border-gray-200">
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-primary mb-1">Our Services</h3>
                        <p className="text-sm text-gray-600">Select a category</p>
                      </div>
                      
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onMouseEnter={() => setSelectedCategory(category.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                              selectedCategory === category.id
                                ? 'bg-primary text-white shadow-md'
                                : 'text-gray-700 hover:bg-white hover:shadow-sm'
                            }`}
                          >
                            <span className="font-medium text-sm">{category.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Right Section - Dynamic Content */}
                    <div className="flex-1 p-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedCategory}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Category Header */}
                          <div className="mb-6">
                            <h4 className="text-xl font-bold text-primary mb-1">
                              {servicesData[selectedCategory as keyof typeof servicesData].title}
                            </h4>
                            <p className="text-gray-600">
                              {servicesData[selectedCategory as keyof typeof servicesData].subtitle}
                            </p>
                          </div>

                          {/* Service Cards */}
                          <div className="grid grid-cols-3 gap-4">
                            {servicesData[selectedCategory as keyof typeof servicesData].services.map((service, index) => (
                              <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group"
                              >
                                <Link 
                                  to={service.link}
                                  className="block rounded-xl overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-white"
                                  onClick={() => setShowServicesDropdown(false)}
                                >
                                  {/* Image with Gradient Overlay */}
                                  <div className="relative h-32 overflow-hidden">
                                    <img 
                                      src={service.image}
                                      alt={service.title}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Blue gradient overlay from bottom to top */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/70 via-blue-600/20 to-transparent"></div>
                                    
                                    {/* Video placeholder indicator */}
                                    <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                      <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[3px] border-y-transparent ml-0.5"></div>
                                    </div>
                                  </div>

                                  {/* Content */}
                                  <div className="p-4">
                                    <h5 className="font-semibold text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                                      {service.title}
                                    </h5>
                                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                      {service.subtitle}
                                    </p>

                                    {/* Learn More Button */}
                                    <div className="flex items-center text-xs text-primary group-hover:text-secondary transition-colors duration-300">
                                      <span className="font-medium">Learn More</span>
                                      <motion.div
                                        className="ml-1"
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                      >
                                        <ArrowRight size={12} />
                                      </motion.div>
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <Link 
                      to="/services"
                      className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors duration-300"
                      onClick={() => setShowServicesDropdown(false)}
                    >
                      View All Services
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/industries" className={navLinkClasses}>
            Industries
          </NavLink>
          <NavLink to="/partners" className={navLinkClasses}>
            Partners
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        <Link 
          to="/contact" 
          className={`hidden md:block btn ${
            isScrolled 
              ? 'btn-primary' 
              : 'bg-white text-primary hover:bg-white/90'
          }`}
        >
          Get a Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'} focus:outline-none`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <nav className="container flex flex-col space-y-4">
            <NavLink
              to="/"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/industries"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Industries
            </NavLink>
            <NavLink
              to="/partners"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Partners
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <Link
              to="/contact"
              className="btn btn-primary w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Get a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;