import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Shield, 
  Server, 
  Cloud, 
  LineChart, 
  HardDrive, 
  Eye, 
  Building2,
  ChevronDown,
  ChevronRight,
  Zap,
  Lock,
  Database,
  Wifi,
  Settings,
  FileText,
  Users,
  Target,
  AlertTriangle,
  Activity,
  Cpu
} from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Expertise. Your Advantage. | Atlas Defenders';
  }, []);

  const [expandedSection, setExpandedSection] = useState<string | null>('infrastructure');
  const [activeNavItem, setActiveNavItem] = useState('infrastructure');

  const serviceCategories = [
    {
      id: 'infrastructure',
      icon: Server,
      title: 'Infrastructure Solutions',
      subtitle: 'Enterprise Infrastructure Excellence',
      description: 'Comprehensive infrastructure services from data center design to performance optimization, covering all aspects of modern IT infrastructure.',
      services: [
        {
          title: 'Next-Generation Data Centers',
          description: 'Design, build, and modernize full-scale data centers with optimal energy and performance standards.',
          category: 'Core Infrastructure Services'
        },
        {
          title: 'Network Engineering',
          description: 'Professional routing, switching, BGP, MPLS, VLANs, and SD-WAN implementations.',
          category: 'Core Infrastructure Services'
        },
        {
          title: 'Cloud Integration',
          description: 'Hybrid and multi-cloud integration across AWS, Azure, GCP, and OCI.',
          category: 'Core Infrastructure Services'
        },
        {
          title: 'Virtualization',
          description: 'VMware, Proxmox, Nutanix, and XCP-ng setups for optimized virtual environments.',
          category: 'Core Infrastructure Services'
        },
        {
          title: 'Server Administration',
          description: 'Expert administration for Windows Server, Linux, Active Directory, and user access policies.',
          category: 'Infrastructure Operations'
        },
        {
          title: 'Infrastructure Monitoring',
          description: 'Real-time infrastructure observability using Zabbix, Prometheus, Grafana, and PRTG.',
          category: 'Infrastructure Operations'
        },
        {
          title: 'Backup & Disaster Recovery',
          description: 'Veeam-powered data protection, RTO/RPO strategies, and business continuity planning.',
          category: 'Infrastructure Operations'
        },
        {
          title: 'Performance Optimization',
          description: 'Infrastructure tuning, load balancing, and uptime assurance.',
          category: 'Infrastructure Operations'
        }
      ],
      technologies: [
        { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1200px-Cisco_logo.svg.png' },
        { name: 'VMware', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png' },
        { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
        { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png' },
        { name: 'Proxmox', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Proxmox-logo.svg/2560px-Proxmox-logo.svg.png' }
      ],
      gradient: 'from-blue-600 to-indigo-700',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity Services',
      subtitle: 'Comprehensive Security Operations',
      description: 'Full-spectrum cybersecurity including defensive security, offensive operations, and governance risk & compliance.',
      services: [
        {
          title: 'Defensive Security',
          description: 'Modern cyber defense using XDR, EDR, SIEM, IDS/IPS, and behavioral detection to ensure proactive threat prevention and response.',
          category: 'Security Operations'
        },
        {
          title: 'Offensive Security',
          description: 'Advanced penetration testing services covering web, network, mobile, cloud, and physical attack simulations.',
          category: 'Security Operations'
        },
        {
          title: 'SOC as a Service',
          description: '24/7 managed Security Operations Center with incident detection, alerting, and escalation.',
          category: 'Security Operations'
        },
        {
          title: 'Compliance & GRC',
          description: 'Support for ISO 27001, NIST, GDPR, and comprehensive Governance, Risk & Compliance services.',
          category: 'Security Operations'
        }
      ],
      technologies: [
        { name: 'Wazuh', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Wazuh_logo.svg/2560px-Wazuh_logo.svg.png' },
        { name: 'CrowdStrike', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/CrowdStrike_logo.svg/2560px-CrowdStrike_logo.svg.png' },
        { name: 'Cortex', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palo_Alto_Networks_logo.svg/2560px-Palo_Alto_Networks_logo.svg.png' },
        { name: 'SentinelOne', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/SentinelOne_logo.svg/2560px-SentinelOne_logo.svg.png' },
        { name: 'Suricata', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Suricata_logo.svg/2560px-Suricata_logo.svg.png' }
      ],
      gradient: 'from-red-600 to-pink-700',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      id: 'firewall',
      icon: Lock,
      title: 'Firewall & Edge Security Architecture',
      subtitle: 'Next-Generation Security Perimeter',
      description: 'Advanced NGFW deployment with transparent and routed modes, comprehensive IPS/IDS, and redundant security architectures.',
      features: [
        'NGFW deployment (Palo Alto, Fortinet, pfSense, OPNsense)',
        'Transparent vs Routed mode firewall configurations',
        'IPS/IDS, NAT/PAT, ACL optimization',
        'Redundant firewalls (Active/Active, Active/Standby)',
        'Site-to-site and SSL VPN with client portals'
      ],
      technologies: [
        { name: 'Palo Alto', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palo_Alto_Networks_logo.svg/2560px-Palo_Alto_Networks_logo.svg.png' },
        { name: 'Fortinet', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/2560px-Fortinet_logo.svg.png' },
        { name: 'pfSense', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/PfSense_logo.png/1200px-PfSense_logo.png' },
        { name: 'OPNsense', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/OPNsense_logo.png/1200px-OPNsense_logo.png' },
        { name: 'Sophos', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sophos_logo.svg/2560px-Sophos_logo.svg.png' }
      ],
      gradient: 'from-orange-600 to-red-700',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      id: 'wireless',
      icon: Wifi,
      title: 'Wireless Solutions',
      subtitle: 'Enterprise Wireless Networks',
      description: 'Achieve full wireless coverage with modern Wi-Fi 6/6E mesh networks. We plan and deploy Ubiquiti, TP-Link Omada, Cisco Meraki, and Aruba solutions.',
      features: [
        'Wi-Fi 6/6E mesh network deployment',
        'Ubiquiti, TP-Link Omada, Cisco Meraki solutions',
        'Handover optimization and seamless roaming',
        'Secure access for corporate and guest VLANs',
        'Wireless site surveys and capacity planning'
      ],
      technologies: [
        { name: 'Ubiquiti', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ubiquiti_Networks_2016.svg/2560px-Ubiquiti_Networks_2016.svg.png' },
        { name: 'TP-Link', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TP-Link_logo.svg/2560px-TP-Link_logo.svg.png' },
        { name: 'Cisco Meraki', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1200px-Cisco_logo.svg.png' },
        { name: 'Aruba', logo: 'https://cdn.1min30.com/wp-content/uploads/2018/07/Aruba-logo.jpg' },
        { name: 'Huawei', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei.svg/2560px-Huawei.svg.png' }
      ],
      gradient: 'from-purple-600 to-violet-700',
      image: 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      id: 'enterprise',
      icon: Building2,
      title: 'Enterprise Software Hosting',
      subtitle: 'Business Application Infrastructure',
      description: 'Secure hosting for ERP, CRM, HRMS systems with multi-tier architecture, access control, and performance optimization.',
      features: [
        'ERP, CRM, HRMS hosting and management',
        'Enterprise tools: Odoo, Dolibarr, SAP deployment',
        'Secure multi-tier architecture design',
        'Access control: Keycloak, Authentik, Okta integration',
        'Load balancing and performance tuning'
      ],
      technologies: [
        { name: 'Odoo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Odoo_logo.svg/2560px-Odoo_logo.svg.png' },
        { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png' },
        { name: 'Keycloak', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Keycloak_Logo.png/1200px-Keycloak_Logo.png' },
        { name: 'Okta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Okta_Logo.svg/2560px-Okta_Logo.svg.png' },
        { name: 'Dolibarr', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dolibarr_logo.svg/2560px-Dolibarr_logo.svg.png' }
      ],
      gradient: 'from-cyan-600 to-blue-700',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    }
  ];

  const handleSectionClick = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
    setActiveNavItem(sectionId);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveNavItem(sectionId);
    setExpandedSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderInfrastructureServices = (category: any) => {
    const coreServices = category.services.filter((service: any) => service.category === 'Core Infrastructure Services');
    const operationsServices = category.services.filter((service: any) => service.category === 'Infrastructure Operations');

    return (
      <div className="space-y-8">
        {/* Core Infrastructure Services */}
        <div>
          <h5 className="text-lg font-bold text-primary mb-4 flex items-center">
            <Cpu size={20} className="mr-2" />
            Core Infrastructure Services
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreServices.map((service: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300"
              >
                <h6 className="font-semibold text-primary mb-2">{service.title}</h6>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Infrastructure Operations */}
        <div>
          <h5 className="text-lg font-bold text-primary mb-4 flex items-center">
            <Activity size={20} className="mr-2" />
            Infrastructure Operations
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {operationsServices.map((service: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (i + 4) * 0.1 }}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300"
              >
                <h6 className="font-semibold text-primary mb-2">{service.title}</h6>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderCybersecurityServices = (category: any) => {
    return (
      <div className="space-y-4">
        {category.services.map((service: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300"
          >
            <h6 className="font-semibold text-primary mb-2">{service.title}</h6>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderStandardServices = (category: any) => {
    return (
      <ul className="space-y-3 mb-8">
        {category.features.map((feature: string, i: number) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="flex items-start"
          >
            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-700">{feature}</span>
          </motion.li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Tech Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Technology Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-indigo-900/90"></div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
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
                Enterprise IT Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white"
            >
              Our Expertise.
              <span className="block text-accent mt-2">Your Advantage.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              Enterprise-grade IT infrastructure and cybersecurity solutions designed for decision-makers 
              who demand excellence. From network architecture to advanced threat protection, we deliver 
              the expertise your organization needs to thrive in the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button 
                onClick={() => scrollToSection('infrastructure')}
                className="group inline-flex items-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore Our Services</span>
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Sticky Navigation */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex gap-12">
            {/* Sticky Navigation Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden lg:block w-80 flex-shrink-0"
            >
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-6">Service Categories</h3>
                <nav className="space-y-2">
                  {serviceCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => scrollToSection(category.id)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center group ${
                          activeNavItem === category.id
                            ? 'bg-primary text-white shadow-lg'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <Icon 
                          size={20} 
                          className={`mr-3 ${
                            activeNavItem === category.id ? 'text-accent' : 'text-gray-400 group-hover:text-primary'
                          }`} 
                        />
                        <span className="font-medium text-sm leading-tight">
                          {category.title.split(' ').slice(0, 3).join(' ')}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Enterprise-Grade Service Portfolio
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Click any service category below to explore our comprehensive capabilities and technologies.
                </p>
              </motion.div>

              {/* Expandable Service Categories */}
              <div className="space-y-6">
                {serviceCategories.map((category, index) => {
                  const Icon = category.icon;
                  const isExpanded = expandedSection === category.id;

                  return (
                    <motion.div
                      key={category.id}
                      id={category.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                    >
                      {/* Category Header */}
                      <button
                        onClick={() => handleSectionClick(category.id)}
                        className="w-full p-8 text-left hover:bg-gray-50 transition-all duration-300 flex items-center justify-between group"
                      >
                        <div className="flex items-center flex-1">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} p-4 mr-6 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon size={32} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                              {category.title}
                            </h3>
                            <p className="text-gray-600 font-medium">
                              {category.subtitle}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-400 group-hover:text-primary"
                        >
                          <ChevronRight size={24} />
                        </motion.div>
                      </button>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                                {/* Left Side - Content */}
                                <div>
                                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    {category.description}
                                  </p>
                                  
                                  <h4 className="text-xl font-bold text-primary mb-4">
                                    {category.id === 'infrastructure' ? 'Service Categories' : 
                                     category.id === 'cybersecurity' ? 'Security Services' : 'Key Capabilities'}
                                  </h4>
                                  
                                  {/* Render services based on category type */}
                                  {category.id === 'infrastructure' && renderInfrastructureServices(category)}
                                  {category.id === 'cybersecurity' && renderCybersecurityServices(category)}
                                  {category.id !== 'infrastructure' && category.id !== 'cybersecurity' && renderStandardServices(category)}

                                  {/* Technology Logos */}
                                  <h4 className="text-xl font-bold text-primary mb-4 mt-8">Technologies & Partners</h4>
                                  <div className="flex flex-wrap gap-4">
                                    {category.technologies.map((tech, i) => (
                                      <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-300 group"
                                        title={tech.name}
                                      >
                                        <img 
                                          src={tech.logo} 
                                          alt={`${tech.name} logo`}
                                          className="h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>

                                {/* Right Side - Visual */}
                                <motion.div
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: 0.2 }}
                                  className="relative"
                                >
                                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                                    <img 
                                      src={category.image}
                                      alt={category.title}
                                      className="w-full h-64 object-cover"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`}></div>
                                    
                                    {/* Floating Animation Elements */}
                                    <div className="absolute inset-0 pointer-events-none">
                                      {[...Array(6)].map((_, i) => (
                                        <motion.div
                                          key={i}
                                          className="absolute w-2 h-2 bg-white/60 rounded-full"
                                          style={{
                                            left: `${20 + Math.random() * 60}%`,
                                            top: `${20 + Math.random() * 60}%`,
                                          }}
                                          animate={{
                                            y: [0, -10, 0],
                                            opacity: [0.6, 1, 0.6],
                                            scale: [1, 1.2, 1],
                                          }}
                                          transition={{
                                            duration: 2 + Math.random() * 2,
                                            delay: Math.random() * 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                          }}
                                        />
                                      ))}
                                    </div>

                                    {/* Tech Badge */}
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                                      <span className="text-xs font-semibold text-primary">Enterprise Grade</span>
                                    </div>
                                  </div>
                                </motion.div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Our expert team is ready to design and implement solutions that drive your business forward. 
              Let's discuss how we can help you achieve your technology goals with enterprise-grade expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="btn bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule Expert Consultation
              </a>
              <a 
                href="/about" 
                className="btn bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                Learn About Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;