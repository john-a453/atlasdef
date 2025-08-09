import React, { useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Network, ArrowRight, Zap, Users, CheckCircle, Globe, Shield, Database, Monitor, Lock, Server, Wifi, Cloud, Settings, Eye, Layers, Router, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const NetworkEngineeringPage = () => {
  // State for UniFi-style expandable services grid
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // UniFi-style Services Data with icons and descriptions
  const unifiServices = [
    // Row 1
    [
      {
        id: 'network-architecture',
        icon: <Layers className="w-12 h-12 text-blue-600" />,
        title: 'Network Architecture',
        subtitle: 'Enterprise Design',
        description: 'Build secure, scalable, and high-performance networks that grow with your business.',
        features: [
          'VXLAN & EVPN fabric design',
          'VRF & VLAN segmentation',
          'Hierarchical network models',
          'Redundancy & failover planning'
        ],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'wireless-solutions',
        icon: <Wifi className="w-12 h-12 text-blue-600" />,
        title: 'Wireless Solutions',
        subtitle: 'Wi-Fi 6/6E/7',
        description: 'Deliver fast, reliable, and secure wireless across offices, campuses, and large venues.',
        features: [
          'Wi-Fi 6/6E/7 deployment',
          'RF planning & optimization',
          'WPA3 enterprise security',
          'IoT device integration'
        ],
        image: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'cloud-networking',
        icon: <Cloud className="w-12 h-12 text-blue-600" />,
        title: 'Cloud Networking',
        subtitle: 'Hybrid Connectivity',
        description: 'Connect your on-premises and cloud workloads with speed and security.',
        features: [
          'AWS Direct Connect',
          'Azure ExpressRoute',
          'Multi-cloud architectures',
          'Hybrid network design'
        ],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'network-security',
        icon: <Shield className="w-12 h-12 text-blue-600" />,
        title: 'Network Security',
        subtitle: 'Zero Trust',
        description: 'Protect your infrastructure, data, and users against advanced threats.',
        features: [
          'SASE implementation',
          'Network access control',
          'Microsegmentation',
          'DDoS mitigation'
        ],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    // Row 2
    [
      {
        id: 'sd-wan',
        icon: <Router className="w-12 h-12 text-blue-600" />,
        title: 'SD-WAN',
        subtitle: 'Intelligent Routing',
        description: 'Keep branches, remote workers, and partners securely connected.',
        features: [
          'Software-defined WAN',
          'MPLS & internet hybrid',
          'Application-aware routing',
          'Centralized policy management'
        ],
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'network-monitoring',
        icon: <Eye className="w-12 h-12 text-blue-600" />,
        title: 'Network Monitoring',
        subtitle: '24/7 Visibility',
        description: 'Boost network performance, reduce downtime, and simplify operations.',
        features: [
          'Real-time monitoring',
          'Performance analytics',
          'Automated alerting',
          'Capacity planning'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'data-center',
        icon: <Server className="w-12 h-12 text-blue-600" />,
        title: 'Data Center',
        subtitle: 'Fabric Design',
        description: 'Handle large-scale, mission-critical routing for enterprises and ISPs.',
        features: [
          'Spine-leaf architecture',
          'BGP route reflection',
          'Load balancing',
          'High availability design'
        ],
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'automation',
        icon: <Settings className="w-12 h-12 text-blue-600" />,
        title: 'Network Automation',
        subtitle: 'DevOps Integration',
        description: 'Transition to new technologies without downtime or disruption.',
        features: [
          'Infrastructure as Code',
          'Ansible automation',
          'CI/CD pipelines',
          'Configuration management'
        ],
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  ];

  const handleCardClick = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  useEffect(() => {
    document.title = 'Network Engineering | Atlas Defenders';

    // Add Ubiquiti-inspired premium CSS
    const style = document.createElement('style');
    style.textContent = `
      .ubiquiti-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      .ubiquiti-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        border-color: #3b82f6;
      }
      .logo-hover {
        transition: all 0.3s ease;
        filter: grayscale(100%) opacity(0.7);
      }
      .logo-hover:hover {
        filter: grayscale(0%) opacity(1);
        transform: scale(1.05);
      }
      .hero-text {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        letter-spacing: -0.025em;
      }
      .btn-primary {
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        border: none;
        border-radius: 12px;
        padding: 16px 32px;
        font-weight: 600;
        color: white;
        transition: all 0.3s ease;
        box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.3);
      }
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px 0 rgba(59, 130, 246, 0.4);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Counter component for metrics
  const Counter = ({ end, duration = 2.5, suffix = '', prefix = '' }: { end: number, duration?: number, suffix?: string, prefix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime: number;
        const startCount = 0;

        const updateCount = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount);
          setCount(currentCount);

          if (progress >= 1) {
            setCount(end);
          } else {
            requestAnimationFrame(updateCount);
          }
        };

        requestAnimationFrame(updateCount);
      }
    }, [isInView, end, duration]);

    return (
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
        {prefix}{count}{suffix}
      </span>
    );
  };

  // Networking Services Data
  const networkingServices = [
    {
      title: 'Network Architecture & Design',
      businessValue: 'Build secure, scalable, and high-performance networks that grow with your business.',
      keyTechnologies: 'VXLAN, EVPN, VRF, VLAN segmentation, HSRP/VRRP/GLBP, EtherChannel, STP/RSTP/MSTP, hierarchical design models.'
    },
    {
      title: 'Wireless Networking Solutions',
      businessValue: 'Deliver fast, reliable, and secure wireless across offices, campuses, and large venues.',
      keyTechnologies: 'Wi-Fi 6/6E/7, RF planning & optimization, WPA3 security, 802.1X, QoS for voice/video, wireless OTT & IoT integration.'
    },
    {
      title: 'Unified Communications & Collaboration',
      businessValue: 'Enable crystal-clear voice, video, and messaging for teams anywhere.',
      keyTechnologies: 'VoIP, SIP trunking, Microsoft Teams, Cisco Webex, Zoom UC, SRST, QoS traffic prioritization.'
    },
    {
      title: 'WAN, Remote Connectivity & ISP Solutions',
      businessValue: 'Keep branches, remote workers, and partners securely connected.',
      keyTechnologies: 'SD-WAN, MPLS L2/L3 VPN, DMVPN/FlexVPN, OSPF/BGP/EIGRP, QoS over WAN, CDN integration, ZTNA.'
    },
    {
      title: 'Cloud & Hybrid Networking',
      businessValue: 'Connect your on-premises and cloud workloads with speed and security.',
      keyTechnologies: 'AWS Direct Connect, Azure ExpressRoute, OCI FastConnect, hybrid architectures, IPSec VPN to cloud.'
    },
    {
      title: 'Network Optimization & Automation',
      businessValue: 'Boost network performance, reduce downtime, and simplify operations.',
      keyTechnologies: 'QoS design, CoPP, NetFlow/SNMP, Zabbix, Ansible/Python automation, traffic engineering, Segment Routing.'
    },
    {
      title: 'Security-Driven Networking',
      businessValue: 'Protect your infrastructure, data, and users against threats.',
      keyTechnologies: 'SASE, secure SD-WAN, NAC (802.1X), IPSec/MACsec, firewalls, IDS/IPS, DDoS mitigation, microsegmentation.'
    },
    {
      title: 'Advanced Routing & Carrier-Grade Services',
      businessValue: 'Handle large-scale, mission-critical routing for enterprises and ISPs.',
      keyTechnologies: 'BGP (iBGP/eBGP, route reflectors), advanced OSPF, MPLS VPNs, VRF-lite, LISP, convergence tuning.'
    },
    {
      title: 'Migration & Upgrade Services',
      businessValue: 'Transition to new technologies without downtime or disruption.',
      keyTechnologies: 'Multi-vendor migrations, data center fabric cutovers, IPv4–IPv6 transition, high-speed core upgrades.'
    },
    {
      title: 'Business Continuity & Disaster Recovery',
      businessValue: 'Ensure your network stays online during failures or disasters.',
      keyTechnologies: 'Redundant links, HA routing/switching, DR site failover, compliance (ISO, PCI-DSS, GDPR).'
    }
  ];

  // Technologies We Use
  const networkingTechnologies = [
    { name: 'Cisco', logo: '/Logos/Cisco_logo.svg', tagline: 'Certified Expertise' },
    { name: 'Juniper', logo: '/Logos/Juniper_Networks_logo.svg', tagline: 'Proven at Scale' },
    { name: 'Fortinet', logo: '/Logos/Fortinet_logo.svg', tagline: 'Security First' },
    { name: 'Palo Alto', logo: '/Logos/paloalto_logo.svg', tagline: 'Next-Gen Security' },
    { name: 'Huawei', logo: '/Logos/huawei_logo.svg', tagline: 'Global Infrastructure' },
    { name: 'Aruba', logo: '/Logos/Aruba_Networks_logo.svg', tagline: 'Wireless Excellence' },
    { name: 'Ubiquiti', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ubiquiti_Networks_2016.svg/2560px-Ubiquiti_Networks_2016.svg.png', tagline: 'Scalable Solutions' },
    { name: 'TP-Link', logo: '/Logos/TPLINK_Logo.svg', tagline: 'Enterprise Ready' },
    { name: 'Sophos', logo: '/Logos/Sophos_logo.svg', tagline: 'Secure Networks' },
    { name: 'F5', logo: '/Logos/F5_Logo_0.svg', tagline: 'Application Delivery' },
    { name: 'pfSense', logo: '/Logos/PfSense_logo.png', tagline: 'Open Source Power' },
    { name: 'PRTG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/PRTG_Network_Monitor_Logo.svg/2560px-PRTG_Network_Monitor_Logo.svg.png', tagline: 'Network Monitoring' }
  ];

  // Networking Certifications
  const networkingCertifications = [
    { name: 'CCNA', logo: '/Logos/Cisco_logo.svg', type: 'Associate' },
    { name: 'CCNP Enterprise', logo: '/Logos/Cisco_logo.svg', type: 'Professional' },
    { name: 'CCNP Security', logo: '/Logos/Cisco_logo.svg', type: 'Security' },
    { name: 'JNCIA', logo: '/Logos/Juniper_Networks_logo.svg', type: 'Associate' },
    { name: 'JNCIS', logo: '/Logos/Juniper_Networks_logo.svg', type: 'Specialist' },
    { name: 'JNCIP', logo: '/Logos/Juniper_Networks_logo.svg', type: 'Professional' },
    { name: 'PCSNE', logo: '/Logos/paloalto_logo.svg', type: 'Palo Alto' },
    { name: 'NSE 4', logo: '/Logos/Fortinet_logo.svg', type: 'Fortinet' },
    { name: 'NSE 7', logo: '/Logos/Fortinet_logo.svg', type: 'Expert' }
  ];

  // Client Testimonials
  const testimonials = [
    {
      quote: "Atlas Defenders transformed our network infrastructure — zero downtime, maximum performance.",
      company: "Global Enterprise Corp",
      role: "CTO"
    },
    {
      quote: "From design to execution, their large-scale networking expertise is unmatched.",
      company: "TechFlow Solutions",
      role: "Network Director"
    },
    {
      quote: "Our uptime and performance have never been better — exactly what we needed.",
      company: "DataCenter Pro",
      role: "Infrastructure Manager"
    },
    {
      quote: "We trust Atlas Defenders with mission-critical connectivity — they deliver every time.",
      company: "ISP Networks Ltd",
      role: "Operations Chief"
    }
  ];

  return (
    <>
      {/* Hero Section - NETGEAR Style */}
      <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
        {/* Blue Geometric Shapes - NETGEAR Style */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 transform rotate-45 rounded-3xl opacity-60"></div>
            <div className="absolute top-40 right-40 w-64 h-64 bg-blue-200 transform rotate-12 rounded-2xl opacity-80"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300 transform -rotate-12 rounded-xl opacity-70"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Brand/Service Name - Exact NETGEAR Style */}
              <div className="space-y-1">
                <h1 className="text-6xl lg:text-7xl font-light text-gray-900 tracking-tight">
                  atlas <span className="font-bold">Network</span>
                </h1>
                <div className="text-3xl font-light text-gray-700 -mt-2">Engineering</div>
              </div>

              {/* Headlines - Exact NETGEAR Style */}
              <div className="space-y-2 mt-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Serious performance.
                </h2>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Seriously reliable.
                </h2>
              </div>

              {/* Description - Your Exact Content */}
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg mt-6">
                From enterprise LANs to ISP backbones — Atlas Defenders designs, deploys, and optimizes networks that are fast, secure, and built for scale.
              </p>

              {/* Buttons - Exact NETGEAR Style */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold text-sm tracking-wider rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  START YOUR PROJECT
                </Link>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold text-sm tracking-wider rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  LEARN MORE
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Professional Network Equipment */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Network Equipment Image */}
                <div className="relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Professional Network Equipment"
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                </div>

                {/* Background Blue Geometric Shape */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute bottom-0 right-0 w-full h-3/4 bg-gradient-to-tr from-blue-400 to-blue-600 transform rotate-3 rounded-3xl opacity-20"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1 — Why Global Leaders Choose Us */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-12 shadow-xl">
                <div className="text-center">
                  <Globe size={120} className="text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Network Infrastructure</h3>
                  <p className="text-slate-600">Connecting enterprises worldwide with carrier-grade reliability</p>
                </div>
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Why Global Leaders Choose Us
              </h2>

              {/* For Executives */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">99.999% uptime network designs</h3>
                    <p className="text-slate-600">Mission-critical infrastructure that never fails when you need it most</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Zero-downtime migrations</h3>
                    <p className="text-slate-600">Seamless transitions that keep your business running without interruption</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Scalable for future growth</h3>
                    <p className="text-slate-600">Networks designed to grow with your business for years to come</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-lg font-semibold text-slate-800">
                  "Trusted by enterprises, telecoms, and governments worldwide."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXACT UniFi-Style Expandable Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Enterprise Network Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Click any service to explore detailed capabilities and features.
            </p>
          </motion.div>

          {/* EXACT UniFi Grid Layout */}
          <div className="space-y-3">
            {unifiServices.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {row.map((service) => {
                  const isExpanded = expandedCard === service.id;
                  const isRowExpanded = row.some(s => expandedCard === s.id);
                  const shouldShrink = isRowExpanded && !isExpanded;

                  return (
                    <motion.div
                      key={service.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        layout: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2 }
                      }}
                      viewport={{ once: true }}
                      className={`
                        relative bg-white border border-gray-200 cursor-pointer
                        transition-all duration-300 ease-in-out overflow-hidden
                        hover:shadow-sm hover:border-gray-300
                        ${isExpanded ? 'lg:col-span-4 md:col-span-2 shadow-sm border-gray-300' : ''}
                        ${shouldShrink ? 'opacity-40 scale-95' : 'opacity-100'}
                      `}
                      style={{
                        borderRadius: '6px',
                        minHeight: isExpanded ? 'auto' : '180px'
                      }}
                      onClick={() => handleCardClick(service.id)}
                    >
                      {!isExpanded ? (
                        /* EXACT UniFi Collapsed Card */
                        <div className="p-5 text-center h-full flex flex-col justify-between">
                          <div className="flex-1 flex flex-col justify-center space-y-3">
                            {/* Icon - Exact UniFi Style */}
                            <div className="flex justify-center">
                              <div className="w-14 h-14 flex items-center justify-center">
                                {React.cloneElement(service.icon, { 
                                  className: "w-10 h-10 text-gray-700",
                                  strokeWidth: 1.2 
                                })}
                              </div>
                            </div>
                            
                            {/* Title - Exact UniFi Typography */}
                            <h3 className="text-base font-semibold text-gray-900 leading-tight px-1">
                              {service.title}
                            </h3>
                            
                            {/* Subtitle - Exact UniFi Style */}
                            <p className="text-xs text-blue-600 font-medium">
                              {service.subtitle}
                            </p>
                            
                            {/* Description - Exact UniFi Style */}
                            <p className="text-xs text-gray-600 leading-relaxed px-1">
                              {service.description}
                            </p>
                          </div>
                          
                          {/* Bottom Indicator - EXACT UniFi Style with Black Arrow */}
                          <div className="mt-3 flex justify-center">
                            <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* EXACT UniFi Expanded Card */
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="grid lg:grid-cols-3 gap-6 p-6"
                            style={{ minHeight: '240px' }}
                          >
                            {/* Left Section - Image/Visual (1 column) */}
                            <div className="lg:col-span-1">
                              <div className="h-full bg-gray-50 rounded border border-gray-200 overflow-hidden">
                                <div className="h-full flex items-center justify-center p-6">
                                  <div className="text-center">
                                    {React.cloneElement(service.icon, { 
                                      className: "w-16 h-16 text-gray-700 mx-auto mb-3",
                                      strokeWidth: 1.2 
                                    })}
                                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                      {service.title}
                                    </h4>
                                    <p className="text-xs text-blue-600 font-medium">
                                      {service.subtitle}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Right Section - Details (2 columns) */}
                            <div className="lg:col-span-2 flex flex-col justify-between">
                              <div>
                                {/* Header */}
                                <div className="mb-4">
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {service.title}
                                  </h3>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>

                                {/* Features List - Exact UniFi Style */}
                                <div className="space-y-2">
                                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Key Capabilities
                                  </h4>
                                  <ul className="space-y-1">
                                    {service.features.map((feature, index) => (
                                      <li key={index} className="flex items-start text-xs text-gray-600">
                                        <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* Bottom Actions - Exact UniFi Style */}
                              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                                <Link
                                  to="/contact"
                                  className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors duration-200"
                                >
                                  Learn More
                                  <ArrowRight size={12} className="ml-1.5" />
                                </Link>
                                
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setExpandedCard(null);
                                  }}
                                  className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Technologies We Use */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry-leading networking vendors and tools that power enterprise infrastructure worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {networkingTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="ubiquiti-card p-6 text-center group relative overflow-hidden"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="logo-hover max-h-10 max-w-full object-contain"
                    title={tech.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-slate-600 font-semibold text-sm">${tech.name}</div>`;
                      }
                    }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{tech.name}</h3>
                <p className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.tagline}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Our Networking Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Global Certifications in Networking Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our team holds the industry's most prestigious networking certifications from leading vendors.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {networkingCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="ubiquiti-card p-6 text-center group"
              >
                <div className="h-12 flex items-center justify-center mb-4">
                  <img
                    src={cert.logo}
                    alt={`${cert.name} certification`}
                    className="logo-hover max-h-8 max-w-full object-contain"
                    title={cert.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-slate-600 font-semibold text-sm">${cert.name}</div>`;
                      }
                    }}
                  />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{cert.name}</h3>
                <p className="text-xs text-slate-500">{cert.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — What Our Clients Say */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Proven Results. Trusted Worldwide.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See what our clients say about our networking expertise and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="ubiquiti-card p-8"
              >
                <div className="mb-6">
                  <div className="flex text-blue-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg text-slate-700 leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.company}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Proof of Scale */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proof of Scale
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our global network engineering achievements speak for themselves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                <Globe size={36} className="text-blue-400" />
              </div>
              <div className="mb-4">
                <Counter end={12} suffix="+" duration={2.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Countries Served</h3>
              <p className="text-gray-300">Global network infrastructure deployments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                <Users size={36} className="text-green-400" />
              </div>
              <div className="mb-4">
                <Counter end={500000} suffix="+" duration={2.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Concurrent Users Supported</h3>
              <p className="text-gray-300">Peak network capacity delivered</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                <Zap size={36} className="text-yellow-400" />
              </div>
              <div className="mb-4">
                <Counter end={99.999} suffix="%" duration={2.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Uptime Delivered</h3>
              <p className="text-gray-300">Carrier-grade reliability achieved</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8 — Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-16 border border-white/20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <Network size={48} className="text-white" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="hero-text text-4xl md:text-5xl font-black text-white mb-8"
              >
                Let's Build the Network That Drives Your Business
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Ready to transform your network infrastructure? Our certified engineers are standing by to design and implement enterprise-grade solutions that scale with your ambitions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center text-lg px-12 py-6"
                >
                  Request a Consultation
                  <ArrowRight size={24} className="ml-3" />
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-white/20"
              >
                <div className="flex items-center text-gray-300">
                  <CheckCircle size={20} className="text-green-400 mr-2" />
                  <span className="font-medium">CCIE Certified Engineers</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle size={20} className="text-green-400 mr-2" />
                  <span className="font-medium">24/7 Global Support</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle size={20} className="text-green-400 mr-2" />
                  <span className="font-medium">99.999% Uptime SLA</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NetworkEngineeringPage;