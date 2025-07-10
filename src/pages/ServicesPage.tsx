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
  AlertTriangle
} from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Expertise. Your Advantage. | Atlas Defenders';
  }, []);

  const [expandedSection, setExpandedSection] = useState<string | null>('network');
  const [activeNavItem, setActiveNavItem] = useState('network');

  const serviceCategories = [
    {
      id: 'network',
      icon: Network,
      title: 'Professional Network Architecture & Infrastructure',
      subtitle: 'Enterprise-Grade Network Solutions',
      description: 'High availability enterprise networks with spine-leaf architecture, dual-core redundancy, and advanced routing protocols.',
      features: [
        'Spine-Leaf, dual-core, redundant distribution architecture',
        'BGP, OSPF, MPLS, VRF, route redistribution protocols',
        'SD-WAN & hybrid WAN implementations',
        'QoS, multicast, IP SLA optimization',
        'Secure WiFi 6/7, VLANs, 802.1X, NAC deployment'
      ],
      technologies: [
        { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1200px-Cisco_logo.svg.png' },
        { name: 'Juniper', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Juniper_Networks_logo.svg/2560px-Juniper_Networks_logo.svg.png' },
        { name: 'Huawei', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei.svg/2560px-Huawei.svg.png' },
        { name: 'Ubiquiti', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ubiquiti_Networks_2016.svg/2560px-Ubiquiti_Networks_2016.svg.png' },
        { name: 'Aruba', logo: 'https://cdn.1min30.com/wp-content/uploads/2018/07/Aruba-logo.jpg' }
      ],
      gradient: 'from-blue-600 to-indigo-700',
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      id: 'firewall',
      icon: Shield,
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
      gradient: 'from-red-600 to-pink-700',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      id: 'virtualization',
      icon: Server,
      title: 'Virtualization & System Administration',
      subtitle: 'Enterprise Hypervisor Solutions',
      description: 'Comprehensive virtualization platforms with Linux & Windows Server administration, clustering, and container support.',
      features: [
        'Hypervisors: VMware, Proxmox, XCP-NG, Hyper-V',
        'Linux & Windows Server: RHEL, Ubuntu, AD, DNS, GPO',
        'Resource management, clustering, security hardening',
        'Container support: Docker, LXD, Kubernetes',
        'High availability and disaster recovery setup'
      ],
      technologies: [
        { name: 'VMware', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png' },
        { name: 'Proxmox', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Proxmox-logo.svg/2560px-Proxmox-logo.svg.png' },
        { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
        { name: 'Red Hat', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/2560px-Red_Hat_logo.svg.png' },
        { name: 'XCP-ng', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/XCP-ng_logo.svg/2560px-XCP-ng_logo.svg.png' }
      ],
      gradient: 'from-purple-600 to-violet-700',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Computing & Integration',
      subtitle: 'Multi-Cloud Architecture Excellence',
      description: 'Comprehensive cloud deployments with landing zone creation, network peering, IAM, and secure hybrid architectures.',
      features: [
        'AWS, Azure, GCP, OCI deployments and migrations',
        'Landing zone creation, network peering, IAM setup',
        'Bastion hosts, NAT gateways, private endpoints',
        'Secure hybrid & multi-cloud architecture design',
        'Cloud backups and disaster recovery plans'
      ],
      technologies: [
        { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
        { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png' },
        { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png' },
        { name: 'Oracle Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
        { name: 'Nutanix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nutanix_logo.svg/2560px-Nutanix_logo.svg.png' }
      ],
      gradient: 'from-emerald-600 to-teal-700',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      id: 'monitoring',
      icon: LineChart,
      title: 'Monitoring & Observability',
      subtitle: 'Real-Time Infrastructure Intelligence',
      description: 'Advanced monitoring solutions with real-time alerts, NetFlow analysis, log correlation, and custom dashboards for SLA management.',
      features: [
        'Monitoring platforms: Zabbix, Prometheus, Grafana, PRTG',
        'Real-time alerts, uptime checks, NetFlow, SNMP monitoring',
        'Log correlation with Wazuh/Splunk/ELK stack',
        'Custom dashboards for SLA & infrastructure health',
        'Performance analytics and capacity planning'
      ],
      technologies: [
        { name: 'Zabbix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Zabbix_logo.svg/2560px-Zabbix_logo.svg.png' },
        { name: 'Grafana', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/1024px-Grafana_icon.svg.png' },
        { name: 'Prometheus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2560px-Prometheus_software_logo.svg.png' },
        { name: 'PRTG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/PRTG_Network_Monitor_Logo.png/1200px-PRTG_Network_Monitor_Logo.png' },
        { name: 'Splunk', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Splunk_logo.svg/2560px-Splunk_logo.svg.png' }
      ],
      gradient: 'from-orange-600 to-amber-700',
      image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      id: 'backup',
      icon: HardDrive,
      title: 'Backup & Disaster Recovery (DR)',
      subtitle: 'Enterprise Data Protection',
      description: 'Comprehensive backup solutions with immutable storage, cloud integration, and verified disaster recovery strategies.',
      features: [
        'Enterprise backup: Veeam, Bacula, Acronis, Wasabi',
        'Immutable backups and ransomware protection',
        'Backup to S3/Cloud + on-premises hybrid solutions',
        'RTO/RPO strategy optimization',
        'DR simulation tests and business continuity planning'
      ],
      technologies: [
        { name: 'Veeam', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Veeam_logo.png' },
        { name: 'Acronis', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Acronis_logo.svg/2560px-Acronis_logo.svg.png' },
        { name: 'Bacula', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Bacula_logo.svg/2560px-Bacula_logo.svg.png' },
        { name: 'Wasabi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Wasabi_logo.svg/2560px-Wasabi_logo.svg.png' },
        { name: 'Commvault', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Commvault_logo.svg/2560px-Commvault_logo.svg.png' }
      ],
      gradient: 'from-slate-600 to-gray-700',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      id: 'cybersecurity',
      icon: Eye,
      title: 'Cybersecurity Services',
      subtitle: 'Comprehensive Security Operations',
      description: 'Full-spectrum cybersecurity including offensive security, defensive operations, and governance risk & compliance.',
      features: [
        'Offensive Security: Web, Mobile, Network, Cloud pentesting',
        'Defensive Security: SOC as a Service, XDR/EDR solutions',
        'Red Team engagements and phishing simulations',
        'SIEM correlation, forensic response, patch management',
        'GRC: ISO 27001, GDPR, HIPAA, NIST CSF compliance'
      ],
      technologies: [
        { name: 'Wazuh', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Wazuh_logo.svg/2560px-Wazuh_logo.svg.png' },
        { name: 'CrowdStrike', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/CrowdStrike_logo.svg/2560px-CrowdStrike_logo.svg.png' },
        { name: 'Cortex', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palo_Alto_Networks_logo.svg/2560px-Palo_Alto_Networks_logo.svg.png' },
        { name: 'SentinelOne', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/SentinelOne_logo.svg/2560px-SentinelOne_logo.svg.png' },
        { name: 'Suricata', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Suricata_logo.svg/2560px-Suricata_logo.svg.png' }
      ],
      gradient: 'from-indigo-600 to-blue-700',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
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
                onClick={() => scrollToSection('network')}
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
                                  
                                  <h4 className="text-xl font-bold text-primary mb-4">Key Capabilities</h4>
                                  <ul className="space-y-3 mb-8">
                                    {category.features.map((feature, i) => (
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

                                  {/* Technology Logos */}
                                  <h4 className="text-xl font-bold text-primary mb-4">Technologies & Partners</h4>
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