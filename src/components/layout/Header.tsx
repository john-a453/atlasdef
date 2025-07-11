import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('cybersecurity');
  const [selectedIndustry, setSelectedIndustry] = useState('enterprise');
  const [currentInfraSlide, setCurrentInfraSlide] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const industriesTimeoutRef = useRef<NodeJS.Timeout>();
  const carouselTimeoutRef = useRef<NodeJS.Timeout>();

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

  // Auto-carousel for infrastructure services
  useEffect(() => {
    if (showServicesDropdown && selectedCategory === 'infrastructure') {
      carouselTimeoutRef.current = setInterval(() => {
        setCurrentInfraSlide(prev => prev === 0 ? 1 : 0);
      }, 4000); // 4 seconds interval

      return () => {
        if (carouselTimeoutRef.current) {
          clearInterval(carouselTimeoutRef.current);
        }
      };
    }
  }, [showServicesDropdown, selectedCategory]);

  // Services dropdown handlers
  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowServicesDropdown(true);
    setShowIndustriesDropdown(false);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServicesDropdown(false);
      setCurrentInfraSlide(0); // Reset carousel when closing
    }, 150);
  };

  // Industries dropdown handlers
  const handleIndustriesMouseEnter = () => {
    if (industriesTimeoutRef.current) {
      clearTimeout(industriesTimeoutRef.current);
    }
    setShowIndustriesDropdown(true);
    setShowServicesDropdown(false);
  };

  const handleIndustriesMouseLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setShowIndustriesDropdown(false);
    }, 150);
  };

  // Manual carousel navigation
  const handlePrevSlide = () => {
    setCurrentInfraSlide(0);
    // Reset auto-carousel timer
    if (carouselTimeoutRef.current) {
      clearInterval(carouselTimeoutRef.current);
      carouselTimeoutRef.current = setInterval(() => {
        setCurrentInfraSlide(prev => prev === 0 ? 1 : 0);
      }, 4000);
    }
  };

  const handleNextSlide = () => {
    setCurrentInfraSlide(1);
    // Reset auto-carousel timer
    if (carouselTimeoutRef.current) {
      clearInterval(carouselTimeoutRef.current);
      carouselTimeoutRef.current = setInterval(() => {
        setCurrentInfraSlide(prev => prev === 0 ? 1 : 0);
      }, 4000);
    }
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

  // UniFi-style services data structure with infrastructure carousel
  const servicesData = {
    cybersecurity: {
      title: 'Cybersecurity Solutions',
      services: [
        {
          title: 'Defensive Security',
          subtitle: 'Modern cyber defense using XDR, EDR, SIEM, IDS/IPS, and behavioral detection to ensure proactive threat prevention and response',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          link: '/services#cybersecurity'
        },
        {
          title: 'Offensive Security',
          subtitle: 'Advanced penetration testing services covering web, network, mobile, cloud, and physical attack simulations',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          ),
          link: '/services#cybersecurity'
        },
        {
          title: 'SOC as a Service',
          subtitle: '24/7 managed Security Operations Center with incident detection, alerting, and escalation',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ),
          link: '/services#cybersecurity'
        },
        {
          title: 'Compliance & GRC',
          subtitle: 'Support for ISO 27001, NIST, GDPR, and comprehensive Governance, Risk & Compliance services',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          link: '/services#cybersecurity'
        }
      ]
    },
    infrastructure: {
      title: 'Infrastructure Solutions',
      services: [
        // First slide (4 services)
        [
          {
            title: 'Next-Generation Data Centers',
            subtitle: 'Design, build, and modernize full-scale data centers with optimal energy and performance standards',
            icon: (
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            ),
            link: '/services#infrastructure'
          },
          {
            title: 'Network Engineering',
            subtitle: 'Professional routing, switching, BGP, MPLS, VLANs, and SD-WAN implementations',
            icon: (
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            ),
            link: '/services#infrastructure'
          },
          {
            title: 'Cloud Integration',
            subtitle: 'Hybrid and multi-cloud integration across AWS, Azure, GCP, and OCI',
            icon: (
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            ),
            link: '/services#infrastructure'
          },
          {
            title: 'Virtualization',
            subtitle: 'VMware, Proxmox, Nutanix, and XCP-ng setups for optimized virtual environments',
            icon: (
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            ),
            link: '/services#infrastructure'
          }
        ],
        // Second slide (4 services)
        [
          {
            title: 'Server Administration',
            subtitle: 'Expert administration for Windows Server, Linux, Active Directory, and user access policies',
            icon: (
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            ),
            link: '/services#infrastructure'
          },
          {
            title: 'Infrastructure Monitoring',
            subtitle: 'Real-time infrastructure observability using Zabbix, Prometheus, Grafana, and PRTG',
            icon: (
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            ),
            link: '/services#infrastructure'
          },
          {
            title: 'Backup & Recovery',
            subtitle: 'Veeam-powered data protection, RTO/RPO strategies, and business continuity planning',
            icon: (
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            ),
            link: '/services#infrastructure'
          },
          {
            title: 'Performance Optimization',
            subtitle: 'Infrastructure tuning, load balancing, and uptime assurance',
            icon: (
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            link: '/services#infrastructure'
          }
        ]
      ]
    },
    development: {
      title: 'Development & DevOps',
      services: [
        {
          title: 'Web Development',
          subtitle: 'Full-Stack Applications & Platforms',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          link: '/services#enterprise'
        },
        {
          title: 'Mobile Development',
          subtitle: 'iOS & Android Applications',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
            </svg>
          ),
          link: '/services#enterprise'
        },
        {
          title: 'DevOps & CI/CD',
          subtitle: 'Docker, Kubernetes, Automation',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ),
          link: '/services#enterprise'
        },
        {
          title: 'Enterprise Software',
          subtitle: 'ERP, CRM, HRMS Solutions',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          link: '/services#enterprise'
        }
      ]
    }
  };

  // UniFi-style industries data structure
  const industriesData = {
    enterprise: {
      title: 'Enterprise Solutions',
      industries: [
        {
          title: 'Large Corporations',
          subtitle: 'Fortune 500 & Multinational Companies',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          link: '/industries#enterprise'
        },
        {
          title: 'Small & Medium Business',
          subtitle: 'Growing Companies & Startups',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          link: '/industries#sme'
        },
        {
          title: 'Manufacturing',
          subtitle: 'Industrial & Production Facilities',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          ),
          link: '/industries#manufacturing'
        },
        {
          title: 'Technology Companies',
          subtitle: 'Software & IT Service Providers',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          link: '/industries#technology'
        }
      ]
    },
    public: {
      title: 'Public Sector',
      industries: [
        {
          title: 'Government Agencies',
          subtitle: 'Federal, State & Local Government',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3a2 2 0 002 2h4a2 2 0 002-2v-3M8 14V9a2 2 0 012-2h4a2 2 0 012 2v5M8 14H6a2 2 0 01-2-2V9a2 2 0 012-2h2m8 0h2a2 2 0 012 2v3a2 2 0 01-2 2h-2" />
            </svg>
          ),
          link: '/industries#government'
        },
        {
          title: 'Educational Institutions',
          subtitle: 'Universities, Schools & Research Centers',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          ),
          link: '/industries#education'
        },
        {
          title: 'Healthcare Systems',
          subtitle: 'Hospitals, Clinics & Medical Centers',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          ),
          link: '/industries#healthcare'
        },
        {
          title: 'Non-Profit Organizations',
          subtitle: 'NGOs, Foundations & Charities',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          link: '/industries#nonprofit'
        }
      ]
    },
    financial: {
      title: 'Financial Services',
      industries: [
        {
          title: 'Banking & Credit Unions',
          subtitle: 'Commercial & Investment Banks',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          link: '/industries#banking'
        },
        {
          title: 'Insurance Companies',
          subtitle: 'Life, Health & Property Insurance',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          link: '/industries#insurance'
        },
        {
          title: 'Investment Firms',
          subtitle: 'Asset Management & Trading',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          ),
          link: '/industries#investment'
        },
        {
          title: 'Fintech Companies',
          subtitle: 'Digital Payment & Blockchain',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
            </svg>
          ),
          link: '/industries#fintech'
        }
      ]
    },
    specialized: {
      title: 'Specialized Sectors',
      industries: [
        {
          title: 'Energy & Utilities',
          subtitle: 'Power, Oil, Gas & Renewable Energy',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          link: '/industries#energy'
        },
        {
          title: 'Transportation & Logistics',
          subtitle: 'Shipping, Airlines & Supply Chain',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
          ),
          link: '/industries#transportation'
        },
        {
          title: 'Retail & E-commerce',
          subtitle: 'Online & Physical Retail Stores',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          ),
          link: '/industries#retail'
        },
        {
          title: 'Media & Entertainment',
          subtitle: 'Broadcasting, Gaming & Content',
          icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          ),
          link: '/industries#media'
        }
      ]
    }
  };

  // UniFi-style navigation categories
  const categories = [
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'development', label: 'Development' }
  ];

  // UniFi-style industry categories
  const industryCategories = [
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'public', label: 'Public Sector' },
    { id: 'financial', label: 'Financial Services' },
    { id: 'specialized', label: 'Specialized Sectors' }
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
          
          {/* UniFi-Style Services Mega Dropdown */}
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

            {/* UniFi-Style Services Mega Dropdown */}
            <AnimatePresence>
              {showServicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50"
                  style={{ marginLeft: '-150px' }}
                >
                  <div className="flex">
                    {/* Left Sidebar - Exact UniFi Style */}
                    <div className="w-56 bg-white border-r border-gray-200">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h3>
                        <nav className="space-y-1">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onMouseEnter={() => {
                                setSelectedCategory(category.id);
                                if (category.id === 'infrastructure') {
                                  setCurrentInfraSlide(0); // Reset to first slide when entering infrastructure
                                }
                              }}
                              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                                selectedCategory === category.id
                                  ? 'bg-blue-50 text-blue-700 font-medium'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                              }`}
                            >
                              {category.label}
                            </button>
                          ))}
                        </nav>
                      </div>
                      
                      {/* Bottom Links - UniFi Style */}
                      <div className="border-t border-gray-200 p-6">
                        <div className="space-y-3">
                          <Link 
                            to="/about"
                            className="block text-sm text-blue-600 hover:text-blue-700 font-medium"
                            onClick={() => setShowServicesDropdown(false)}
                          >
                            How It Works?
                          </Link>
                          <Link 
                            to="/partners"
                            className="block text-sm text-gray-600 hover:text-gray-700"
                            onClick={() => setShowServicesDropdown(false)}
                          >
                            Resources
                          </Link>
                          <Link 
                            to="/industries"
                            className="block text-sm text-gray-600 hover:text-gray-700"
                            onClick={() => setShowServicesDropdown(false)}
                          >
                            Case Studies
                          </Link>
                          <Link 
                            to="/contact"
                            className="block text-sm text-gray-600 hover:text-gray-700"
                            onClick={() => setShowServicesDropdown(false)}
                          >
                            Site Map
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Main Content Area - Exact UniFi Style */}
                    <div className="flex-1 p-8">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedCategory}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center justify-between mb-8">
                            <h4 className="text-xl font-semibold text-gray-900">
                              {servicesData[selectedCategory as keyof typeof servicesData].title}
                            </h4>
                            
                            {/* Carousel Navigation for Infrastructure */}
                            {selectedCategory === 'infrastructure' && (
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={handlePrevSlide}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    currentInfraSlide === 0 
                                      ? 'bg-blue-100 text-blue-600' 
                                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
                                  }`}
                                >
                                  <ChevronLeft size={16} />
                                </button>
                                
                                {/* Slide Indicators */}
                                <div className="flex space-x-1">
                                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                    currentInfraSlide === 0 ? 'bg-blue-600' : 'bg-gray-300'
                                  }`} />
                                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                    currentInfraSlide === 1 ? 'bg-blue-600' : 'bg-gray-300'
                                  }`} />
                                </div>
                                
                                <button
                                  onClick={handleNextSlide}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    currentInfraSlide === 1 
                                      ? 'bg-blue-100 text-blue-600' 
                                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
                                  }`}
                                >
                                  <ChevronRight size={16} />
                                </button>
                              </div>
                            )}
                          </div>

                          {/* Service Grid - Infrastructure Carousel or Regular Grid */}
                          {selectedCategory === 'infrastructure' ? (
                            <div className="relative overflow-hidden">
                              <motion.div
                                className="flex transition-transform duration-700 ease-in-out"
                                animate={{ x: `${-currentInfraSlide * 100}%` }}
                              >
                                {servicesData.infrastructure.services.map((slideServices, slideIndex) => (
                                  <div key={slideIndex} className="w-full flex-shrink-0">
                                    <div className="grid grid-cols-2 gap-8">
                                      {slideServices.map((service, index) => (
                                        <motion.div
                                          key={service.title}
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.3, delay: index * 0.1 }}
                                          className="group"
                                        >
                                          <Link 
                                            to={service.link}
                                            className="block"
                                            onClick={() => setShowServicesDropdown(false)}
                                          >
                                            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                              {/* Icon */}
                                              <div className="mb-4">
                                                {service.icon}
                                              </div>
                                              
                                              {/* Title */}
                                              <h5 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                                {service.title}
                                              </h5>
                                              
                                              {/* Subtitle */}
                                              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                                {service.subtitle}
                                              </p>
                                              
                                              {/* Learn More Link - Exact UniFi Style */}
                                              <div className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-200 flex items-center">
                                                Learn More
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                              </div>
                                            </div>
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </motion.div>
                            </div>
                          ) : (
                            /* Regular Grid for other categories */
                            <div className="grid grid-cols-2 gap-8">
                              {servicesData[selectedCategory as keyof typeof servicesData].services.map((service: any, index: number) => (
                                <motion.div
                                  key={service.title}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.1 }}
                                  className="group"
                                >
                                  <Link 
                                    to={service.link}
                                    className="block"
                                    onClick={() => setShowServicesDropdown(false)}
                                  >
                                    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                      {/* Icon */}
                                      <div className="mb-4">
                                        {service.icon}
                                      </div>
                                      
                                      {/* Title */}
                                      <h5 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                        {service.title}
                                      </h5>
                                      
                                      {/* Subtitle */}
                                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        {service.subtitle}
                                      </p>
                                      
                                      {/* Learn More Link - Exact UniFi Style */}
                                      <div className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-200 flex items-center">
                                        Learn More
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </div>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* UniFi-Style Industries Mega Dropdown */}
          <div 
            className="relative"
            ref={industriesRef}
            onMouseEnter={handleIndustriesMouseEnter}
            onMouseLeave={handleIndustriesMouseLeave}
          >
            <button 
              className={`font-medium transition-colors duration-300 flex items-center ${
                isScrolled ? 'text-text-dark hover:text-secondary' : 'text-white hover:text-accent'
              }`}
            >
              Industries
              <ChevronDown 
                size={16} 
                className={`ml-1 transition-transform duration-300 ${showIndustriesDropdown ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* UniFi-Style Industries Mega Dropdown */}
            <AnimatePresence>
              {showIndustriesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50"
                  style={{ marginLeft: '-150px' }}
                >
                  <div className="flex">
                    {/* Left Sidebar - Exact UniFi Style */}
                    <div className="w-56 bg-white border-r border-gray-200">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Industries We Serve</h3>
                        <nav className="space-y-1">
                          {industryCategories.map((category) => (
                            <button
                              key={category.id}
                              onMouseEnter={() => setSelectedIndustry(category.id)}
                              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                                selectedIndustry === category.id
                                  ? 'bg-blue-50 text-blue-700 font-medium'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                              }`}
                            >
                              {category.label}
                            </button>
                          ))}
                        </nav>
                      </div>
                      
                      {/* Bottom Links - UniFi Style */}
                      <div className="border-t border-gray-200 p-6">
                        <div className="space-y-3">
                          <Link 
                            to="/about"
                            className="block text-sm text-blue-600 hover:text-blue-700 font-medium"
                            onClick={() => setShowIndustriesDropdown(false)}
                          >
                            How It Works?
                          </Link>
                          <Link 
                            to="/partners"
                            className="block text-sm text-gray-600 hover:text-gray-700"
                            onClick={() => setShowIndustriesDropdown(false)}
                          >
                            Resources
                          </Link>
                          <Link 
                            to="/services"
                            className="block text-sm text-gray-600 hover:text-gray-700"
                            onClick={() => setShowIndustriesDropdown(false)}
                          >
                            Case Studies
                          </Link>
                          <Link 
                            to="/contact"
                            className="block text-sm text-gray-600 hover:text-gray-700"
                            onClick={() => setShowIndustriesDropdown(false)}
                          >
                            Site Map
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Main Content Area - Exact UniFi Style */}
                    <div className="flex-1 p-8">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedIndustry}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h4 className="text-xl font-semibold text-gray-900 mb-8">
                            {industriesData[selectedIndustry as keyof typeof industriesData].title}
                          </h4>

                          {/* Industry Grid - Exact UniFi Layout */}
                          <div className="grid grid-cols-2 gap-8">
                            {industriesData[selectedIndustry as keyof typeof industriesData].industries.map((industry, index) => (
                              <motion.div
                                key={industry.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group"
                              >
                                <Link 
                                  to={industry.link}
                                  className="block"
                                  onClick={() => setShowIndustriesDropdown(false)}
                                >
                                  <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                    {/* Icon */}
                                    <div className="mb-4">
                                      {industry.icon}
                                    </div>
                                    
                                    {/* Title */}
                                    <h5 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                      {industry.title}
                                    </h5>
                                    
                                    {/* Subtitle */}
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                      {industry.subtitle}
                                    </p>
                                    
                                    {/* Learn More Link - Exact UniFi Style */}
                                    <div className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-200 flex items-center">
                                      Learn More
                                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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