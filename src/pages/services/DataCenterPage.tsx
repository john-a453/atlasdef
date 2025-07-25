import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Globe,
  Server,
  Award,
  Target,
  BarChart3,
  Database,
  Network,
  Settings,
  Zap,
  Star,
  Play,
  Download,
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Lock,
  Cloud,
  Activity,
  FileText,
  Phone,
  Calendar,
  Building,
  Heart,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataCenterPage = () => {
  useEffect(() => {
    document.title = 'Next-Generation Data Centers - Modernize Your Infrastructure | Atlas Defenders';
    
    // Force logo and text colors but keep background transparent initially
    const forceNavColors = () => {
      const header = document.querySelector('header');
      if (header) {
        // Force logo to be blue always
        const logoElements = header.querySelectorAll('.h-8.w-8, .text-xl.font-bold');
        logoElements.forEach(element => {
          element.classList.remove('text-white');
          element.classList.add('text-blue-600');
        });
        
        // Force all navigation links to be dark always
        const navLinks = header.querySelectorAll('nav a:not([class*="bg-gradient"]), nav button:not([class*="bg-gradient"])');
        navLinks.forEach(link => {
          link.classList.remove('text-white');
          link.classList.add('text-gray-900');
        });
        
        // Only add white background when scrolled (let the header component handle this naturally)
        // Don't force background color - let the normal scroll behavior work
      }
    };

    // Apply colors immediately and keep them applied
    forceNavColors();
    
    // Keep colors applied even when header component tries to change them
    const interval = setInterval(forceNavColors, 200);
    
    // Cleanup function
    return () => {
      clearInterval(interval);
      // Reset colors when leaving the page
      const header = document.querySelector('header');
      if (header) {
        const logoElements = header.querySelectorAll('.h-8.w-8, .text-xl.font-bold');
        logoElements.forEach(element => {
          element.classList.remove('text-blue-600');
        });
        
        const navLinks = header.querySelectorAll('nav a, nav button');
        navLinks.forEach(link => {
          link.classList.remove('text-gray-900');
        });
      }
    };
  }, []);

  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeWhyChoose, setActiveWhyChoose] = useState(0);

  // Interactive Tabs Data with detailed services
  const interactiveTabs = [
    {
      title: 'Installation',
      services: [
        {
          title: 'Rack Installation & Cabling',
          features: [
            'Professional rack installation',
            'Structured cabling: Cat5e/Cat6/Cat6a/Fiber',
            'Horizontal & vertical cable management',
            'Power Distribution Unit (PDU) setup',
            'Cable labeling and documentation'
          ],
          images: ['/Logos/rack.jpg', '/Logos/structured cabling.jpg']
        },
        {
          title: 'Wireless & Access Point (AP) Installation',
          features: [
            'AP installation (Wi-Fi 6/6E/7 ready)',
            'PoE (Power over Ethernet) deployment',
            'Site survey & signal optimization',
            'Enterprise-grade coverage and configuration',
            'Integration with RADIUS / 802.1X authentication',
            'Guest & internal segmentation'
          ],
          images: ['/Logos/network_configuration.jpg', '/Logos/cabling.jpg']
        },
        {
          title: 'Data Center Rack & Power Setup',
          features: [
            'Dual-power supply design and setup',
            'Smart PDU configuration',
            'Rack grounding and surge protection',
            'UPS and failover system integration'
          ],
          images: ['/Logos/Datacenter1.jpg', '/Logos/server cabling.jpg']
        },
        {
          title: 'Access Control Systems',
          features: [
            'Door access with RFID & biometric readers',
            'Centralized identity & access management',
            'Integration with surveillance and alerting',
            'Logs for compliance and forensic auditing'
          ],
          images: ['/Logos/Datacenter2.jpg', '/Logos/structured cabling 2.jpg']
        },
        {
          title: 'Video Surveillance Systems',
          features: [
            'IP-based camera deployment (PTZ, 360°, Bullet)',
            'NVR/DVR configuration',
            'Integration with SOC/SIEM platforms',
            'Real-time and recorded video analytics'
          ],
          images: ['/Logos/monitoring_img.png', '/Logos/cabling 2.jpg']
        },
        {
          title: 'Audio & Paging Systems',
          features: [
            'Overhead paging and sound distribution',
            'Rack-mounted amplifiers and mixers',
            'Alert & announcement system integration'
          ],
          images: ['/Logos/structured cabling 3.jpg', '/Logos/cabling.jpg']
        }
      ]
    },
    {
      title: 'Network Design',
      services: [
        {
          title: 'Enterprise Network Architecture',
          features: [
            'Network topology design and optimization',
            'VLAN segmentation and security zones',
            'Redundancy and failover planning',
            'Bandwidth optimization and QoS',
            'Network monitoring and analytics'
          ],
          image: '/Logos/network_configuration.jpg'
        },
        {
          title: 'Security & Firewall Configuration',
          features: [
            'Next-generation firewall deployment',
            'Network access control (NAC)',
            'VPN and remote access solutions',
            'Intrusion detection and prevention',
            'Security policy management'
          ],
          image: '/Logos/Datacenter1.jpg'
        },
        {
          title: 'Wireless & Mobility Solutions',
          features: [
            'Enterprise Wi-Fi design and deployment',
            'Wireless controller configuration',
            'Mobile device management (MDM)',
            'Guest network implementation',
            'Wireless security optimization'
          ],
          image: '/Logos/Datacenter2.jpg'
        }
      ]
    },
    {
      title: 'Server Administration',
      services: [
        {
          title: 'Windows Server Management',
          features: [
            'Active Directory design and implementation',
            'Windows Server deployment and configuration',
            'Group Policy management',
            'Exchange Server administration',
            'SharePoint deployment and management'
          ],
          image: '/Logos/Datacenter2.jpg'
        },
        {
          title: 'Linux Server Administration',
          features: [
            'Red Hat and Ubuntu server deployment',
            'Container orchestration with Kubernetes',
            'Web server configuration (Apache, Nginx)',
            'Database administration (MySQL, PostgreSQL)',
            'Shell scripting and automation'
          ],
          image: '/Logos/Datacenter1.jpg'
        },
        {
          title: 'Virtualization & Hypervisors',
          features: [
            'VMware vSphere implementation',
            'Hyper-V deployment and management',
            'Virtual machine optimization',
            'High availability clustering',
            'Disaster recovery planning'
          ],
          image: '/Logos/network_configuration.jpg'
        }
      ]
    },
    {
      title: 'Cloud Architecture',
      services: [
        {
          title: 'Hybrid Cloud Solutions',
          features: [
            'AWS and Azure integration',
            'Hybrid cloud architecture design',
            'Cloud migration strategy',
            'Multi-cloud management',
            'Cost optimization and monitoring'
          ],
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
        }
      ]
    },
    {
      title: 'Backup',
      services: [
        {
          title: 'Disaster Recovery Solutions',
          features: [
            'Automated backup systems',
            'Disaster recovery planning',
            'Data replication and synchronization',
            'Recovery time optimization',
            'Compliance and audit reporting'
          ],
          image: '/Logos/Datacenter1.jpg'
        }
      ]
    },
    {
      title: 'Infrastructure Monitoring',
      services: [
        {
          title: 'Proactive Monitoring Systems',
          features: [
            'Real-time performance monitoring',
            'Predictive analytics and alerting',
            'Automated incident response',
            'Capacity planning and optimization',
            'Custom dashboards and reporting'
          ],
          image: '/Logos/monitoring_img.png'
        }
      ]
    },
    {
      title: 'Zero Trust',
      services: [
        {
          title: 'Zero Trust Security Framework',
          features: [
            'Identity and access management',
            'Network micro-segmentation',
            'Continuous security monitoring',
            'Multi-factor authentication',
            'Security policy automation'
          ],
          image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop'
        }
      ]
    }
  ];

  // Reset progress when tab changes manually
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  // What We Deliver Services
  const deliverables = [
    { title: 'Virtualization & Hyperconverged Infrastructure', subtitle: 'VMware, Nutanix, Proxmox', icon: Server },
    { title: 'Windows & Linux Server Administration', subtitle: 'Enterprise server management', icon: Monitor },
    { title: 'Cloud-Ready & Hybrid Architecture', subtitle: 'Seamless cloud integration', icon: Cloud },
    { title: 'Network Design & Firewall Configuration', subtitle: 'Secure network infrastructure', icon: Network },
    { title: 'Rack, Cabling & Power Planning', subtitle: 'Physical infrastructure design', icon: Zap },
    { title: 'Infrastructure Monitoring & Automation', subtitle: 'Proactive system management', icon: Activity },
    { title: 'Backup & Disaster Recovery Solutions', subtitle: 'Business continuity planning', icon: Database },
    { title: 'Zero Trust Security & Access Control', subtitle: 'Advanced security framework', icon: Shield }
  ];

  // Technology Stack
  const techStacks = [
    {
      category: 'Virtualization',
      technologies: ['VMware', 'Nutanix', 'Hyper-V', 'Proxmox']
    },
    {
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto']
    },
    {
      category: 'Automation',
      technologies: ['Ansible', 'Terraform', 'Zabbix', 'PRTG']
    },
    {
      category: 'Operating Systems',
      technologies: ['Windows Server', 'Red Hat', 'Ubuntu', 'Debian']
    },
    {
      category: 'Cloud Platforms',
      technologies: ['AWS', 'Azure', 'GCP']
    },
    {
      category: 'Network Hardware',
      technologies: ['Ubiquiti', 'MikroTik', 'Aruba', 'Meraki']
    }
  ];

  // Certifications
  const certifications = [
    'VCP-DCV (VMware Certified Professional – Data Center Virtualization)',
    'NCP-MCI (Nutanix Certified Professional – Multicloud Infrastructure)',
    'CCNA, JNCIA, Fortinet NSE 4–8, PCNSE',
    'RHCSA, LPIC, AZ-800/801, AWS Certified Architect',
    'GCP Associate / Pro Architect, ITIL, ISO 27001 / 22301'
  ];

  // Next-Gen Services
  const nextGenServices = [
    {
      title: 'Virtualization & Compute Infrastructure',
      features: [
        'Server provisioning and clustering (vSphere, AHV, KVM)',
        'Centralized compute resource pools',
        'High availability and fault tolerance'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    {
      title: 'Network Architecture & Security',
      features: [
        'LAN/WAN design with segmentation',
        'Firewall and ACL configuration (FortiGate, Palo Alto, pfSense)',
        'VPN setup and zero-trust network models'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      title: 'Monitoring & Automation',
      features: [
        'Real-time network monitoring (Zabbix, PRTG)',
        'Infrastructure-as-Code (Ansible, Terraform)',
        'Log collection and alerting systems (Syslog, Graylog)'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    {
      title: 'Cloud & Hybrid Deployments',
      features: [
        'Integration with AWS, Azure, GCP',
        'Hybrid solutions (e.g., Azure Stack, vCloud Director)',
        'Identity Federation & SSO (AD, ADFS, Keycloak)'
      ],
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop'
    },
    {
      title: 'Rack Deployment & Cabling',
      features: [
        'Physical setup, labeling, and patch panel design',
        'Power planning and cooling (PDU, UPS)',
        'Wireless deployment (Access Points, Controllers)'
      ],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop'
    }
  ];

  // Why Choose Atlas Defenders - Interactive Content
  const whyChooseUsData = [
    {
      id: 0,
      title: 'Expert Engineering',
      subtitle: 'Certified engineers with multi-vendor expertise',
      description: 'Our team of certified professionals brings decades of combined experience across all major infrastructure platforms and technologies.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      features: [
        'Industry-certified professionals with extensive hands-on experience',
        'Multi-vendor expertise across leading technology platforms',
        'Continuous training and certification maintenance programs',
        'Deep technical knowledge in emerging technologies'
      ]
    },
    {
      id: 1,
      title: 'Hybrid Expertise',
      subtitle: 'Experience in private, public, and hybrid environments',
      description: 'Seamless integration across on-premises, cloud, and hybrid infrastructures with proven methodologies and best practices.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      features: [
        'Proven track record in complex hybrid deployments',
        'Cloud-native and traditional infrastructure expertise',
        'Seamless migration and integration strategies',
        'Cost optimization across multi-cloud environments'
      ]
    },
    {
      id: 2,
      title: 'Tailored Solutions',
      subtitle: 'Scalable designs tailored to your industry',
      description: 'Custom-engineered solutions that align with your specific business requirements, compliance needs, and growth objectives.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      features: [
        'Industry-specific compliance and regulatory expertise',
        'Scalable architectures that grow with your business',
        'Custom integration with existing systems and workflows',
        'Performance optimization for your specific use cases'
      ]
    },
    {
      id: 3,
      title: 'Security First',
      subtitle: 'Secure-by-default implementations',
      description: 'Comprehensive security frameworks integrated from the ground up, ensuring your infrastructure is protected against evolving threats.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      features: [
        'Zero-trust security architecture implementation',
        'Advanced threat detection and response systems',
        'Compliance with industry security standards',
        'Regular security assessments and vulnerability management'
      ]
    },
    {
      id: 4,
      title: 'Complete Documentation',
      subtitle: 'Post-deployment documentation and training',
      description: 'Comprehensive documentation and knowledge transfer ensuring your team can effectively manage and maintain your infrastructure.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      features: [
        'Detailed technical documentation and runbooks',
        'Comprehensive training programs for your technical staff',
        'Best practices guides and troubleshooting procedures',
        'Ongoing knowledge transfer and skill development'
      ]
    },
    {
      id: 5,
      title: 'Ongoing Support',
      subtitle: 'Comprehensive support and maintenance',
      description: 'Proactive monitoring, maintenance, and support services ensuring optimal performance and minimal downtime for your critical systems.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      features: [
        '24/7 monitoring and proactive issue resolution',
        'Predictive maintenance and performance optimization',
        'Rapid response times for critical incidents',
        'Regular health checks and system updates'
      ]
    }
  ];

  // Industries We Serve
  const industries = [
    { name: 'Finance & Banking', icon: Building },
    { name: 'Healthcare', icon: Heart },
    { name: 'Government & Defense', icon: Shield },
    { name: 'Cloud Providers', icon: Cloud },
    { name: 'E-commerce', icon: ShoppingCart },
    { name: 'Critical Infrastructure', icon: Zap },
    { name: 'Education & Research', icon: GraduationCap },
    { name: 'Professional Services', icon: Briefcase }
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        <div className="flex min-h-screen">
          {/* Left Content */}
          <div className="flex-1 flex items-center justify-center px-6 lg:px-16 py-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl space-y-8"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Modernize Your Infrastructure with
                <span className="text-blue-600"> Next-Gen Data Centers</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Enterprise-ready, highly available, and scalable solutions — built for the cloud era.
              </p>

              {/* Email Input and Button */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap">
                    Get Started
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                  >
                    Request Infrastructure Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Talk to a Solution Architect
                  </Link>
                </div>
              </div>


            </motion.div>
          </div>

          {/* Right Curved Image Section */}
          <div className="flex-1 relative">
            {/* Curved overlay that creates the smooth curve */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600"
              style={{
                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
                borderRadius: '0 0 0 100px'
              }}
            >
              {/* Data center image */}
              <div className="relative w-full h-full">
                <img
                  src="/Logos/Datacenter1.jpg"
                  alt="Modern Data Center Infrastructure"
                  className="w-full h-full object-cover opacity-90"
                  onError={(e) => {
                    // Fallback to external image if local image fails
                    e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop";
                  }}
                />
                
                {/* Gradient overlay to match reference */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-600/50 to-indigo-700/60"></div>
                
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>


              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 2.5. INTERACTIVE SERVICES SHOWCASE - UniFi Style */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data center solutions with enterprise-grade reliability and performance.
            </p>
          </div>

          {/* Tab Navigation - UniFi Style */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {interactiveTabs.map((tab, index) => (
              <button
                key={tab.title}
                onClick={() => handleTabClick(index)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {tab.title}

              </button>
            ))}
          </div>

          {/* Dynamic Section Header */}
          <div className="text-center mb-20">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {interactiveTabs[activeTab].title}
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {activeTab === 0 
                  ? "We engineer and execute end-to-end infrastructure installations with military-grade precision, ensuring every cable, rack, and system is deployed to exceed enterprise standards."
                  : activeTab === 1
                  ? "Comprehensive network design with redundancy, segmentation, and scalability built-in for enterprise-grade performance."
                  : activeTab === 2
                  ? "Complete server lifecycle management from deployment to maintenance, ensuring optimal performance and security."
                  : activeTab === 3
                  ? "Seamless integration between on-premises and cloud environments with optimized performance and cost efficiency."
                  : activeTab === 4
                  ? "Comprehensive backup and disaster recovery solutions ensuring business continuity and data protection."
                  : activeTab === 5
                  ? "Real-time monitoring and alerting systems with predictive analytics for proactive infrastructure management."
                  : "Advanced security architecture with zero trust principles, ensuring comprehensive protection across all infrastructure layers."
                }
              </p>
            </motion.div>
          </div>

          {/* Dynamic Services Content - Two Images + Content Layout */}
          <div className="space-y-24">
            {interactiveTabs[activeTab].services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-16 items-center group ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
              >
                {/* Images Side */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative w-full h-[500px]">
                    {/* First Image - Background/Base - Tall Rectangle */}
                    <div className="absolute top-0 left-0 w-3/5 h-5/6 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-1 hover:scale-105 hover:rotate-1 transition-all duration-700 cursor-pointer">
                      <div className="w-full h-full rounded-xl overflow-hidden">
                        <img
                          src={service.images ? service.images[0] : service.image}
                          alt={`${service.title} - Image 1`}
                          className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:brightness-110"
                        />
                      </div>
                      {/* Individual Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-600/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Second Image - Overlapping/Stacked - Tall Rectangle - Individual hover */}
                    <div className="absolute bottom-0 right-0 w-3/5 h-5/6 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-purple-50 to-blue-100 p-1 hover:scale-105 hover:-rotate-2 transition-all duration-700 cursor-pointer">
                      <div className="w-full h-full rounded-xl overflow-hidden">
                        <img
                          src={service.images ? service.images[1] : service.image}
                          alt={`${service.title} - Image 2`}
                          className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:contrast-110"
                        />
                      </div>
                      {/* Individual Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/20 to-blue-600/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    {activeTab === 0 ? (
                      // Installation tab - use specific titles for each service
                      index === 0 ? (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Structured Rack &
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Cabling <span className="text-blue-600">Implementation</span>
                          </h2>
                        </>
                      ) : index === 1 ? (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Wireless Architecture &
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Access Point <span className="text-blue-600">Deployment</span>
                          </h2>
                        </>
                      ) : index === 2 ? (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Power & Redundancy
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Systems <span className="text-blue-600">Integration</span>
                          </h2>
                        </>
                      ) : index === 3 ? (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Smart Access Control &
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Identity <span className="text-blue-600">Management</span>
                          </h2>
                        </>
                      ) : index === 4 ? (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Video Surveillance &
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Analytics <span className="text-blue-600">Integration</span>
                          </h2>
                        </>
                      ) : (
                        <>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Enterprise
                          </h2>
                          <h2 className="text-4xl font-bold mb-6">
                            Audio <span className="text-blue-600">Systems</span>
                          </h2>
                        </>
                      )
                    ) : (
                      // Other tabs - keep the original "Disciplined Design Practices"
                      <>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">
                          Disciplined
                        </h2>
                        <h2 className="text-4xl font-bold mb-6">
                          Design <span className="text-blue-600">Practices</span>
                        </h2>
                      </>
                    )}
                  </div>

                  <div className="space-y-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 3. TECHNOLOGY STACK */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Layout exactly like reference image */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  ENABLE BROADER VISIBILITY
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Enterprise Infrastructure Platform
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Real-world expertise delivered using a world-class platform. Atlas Defenders 
                  combines infrastructure data from multiple technology sources in your environment 
                  and brings that together into one centralized platform, analyzing and 
                  prioritizing potential optimization opportunities.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Keep the infrastructure software you already have and get more ROI from your 
                  technology investments now and in the future.
                </p>
                
                <p className="text-sm text-gray-500 italic">
                  This is a representative sample of our 350+ technology integrations.
                </p>
              </motion.div>

              {/* Right Logo Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-3 gap-6">
                  {/* Row 1 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-red-600">Red Hat</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-blue-600">Cisco</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-orange-600">Proxmox</span>
                  </motion.div>

                  {/* Row 2 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-red-600">Fortinet</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-blue-600">Nutanix</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-orange-600">Palo Alto</span>
                  </motion.div>

                  {/* Row 3 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-green-600">Juniper</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-blue-600">Aruba</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-orange-600">AWS</span>
                  </motion.div>

                  {/* Row 4 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-blue-600">AZURE</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-gray-700">VMware</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-semibold text-green-600">Veeam</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CERTIFICATIONS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications That Back Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-recognized certifications ensuring the highest standards of service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-800 font-medium">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 6. WHY CHOOSE ATLAS DEFENDERS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Why Choose
              </h2>
              <h2 className="text-4xl font-bold mb-6">
                Atlas <span className="text-blue-600">Defenders?</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven expertise and commitment to delivering exceptional infrastructure solutions.
            </p>
          </div>

          {/* Interactive Services Layout - Exact Style from Reference */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 items-stretch">
              {/* Left Sidebar Menu */}
              <div className="lg:col-span-2 space-y-3 flex flex-col">
                {whyChooseUsData.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveWhyChoose(item.id)}
                    className={`relative w-full text-left p-5 rounded-xl shadow-lg transition-all duration-500 group overflow-hidden transform hover:scale-105 hover:-translate-y-1 ${
                      activeWhyChoose === item.id 
                        ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 shadow-2xl shadow-blue-500/25' 
                        : 'bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 hover:shadow-2xl hover:shadow-blue-500/25'
                    }`}
                  >
                    {/* Background shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex-1">
                        <span className={`text-lg font-bold transition-all duration-300 ${
                          activeWhyChoose === item.id 
                            ? 'text-white' 
                            : 'text-gray-900 group-hover:text-white'
                        }`}>
                          {item.title}
                        </span>
                        <div className={`text-sm mt-1 transition-all duration-300 ${
                          activeWhyChoose === item.id 
                            ? 'text-blue-100' 
                            : 'text-gray-500 group-hover:text-blue-100'
                        }`}>
                          {item.subtitle}
                        </div>
                      </div>
                      
                      <div className={`ml-4 p-2 rounded-full transition-all duration-300 ${
                        activeWhyChoose === item.id 
                          ? 'bg-white/20' 
                          : 'bg-gray-100 group-hover:bg-white/20'
                      }`}>
                        <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                          activeWhyChoose === item.id 
                            ? 'text-white' 
                            : 'text-gray-600 group-hover:text-white'
                        }`} />
                      </div>
                    </div>

                    {/* Active indicator */}
                    {activeWhyChoose === item.id && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"
                      />
                    )}

                    {/* Hover glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </motion.button>
                ))}
              </div>

              {/* Right Content Area - Dynamic */}
              <div className="lg:col-span-3 flex">
                <motion.div
                  key={activeWhyChoose}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 rounded-2xl overflow-hidden shadow-2xl w-full flex flex-col justify-between"
                  style={{ minHeight: 'calc(6 * 5rem + 5 * 0.75rem)' }} // 6 items * height + 5 gaps
                >


                  {/* Content */}
                  <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                    {/* Top Section */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-3"
                      >
                        <h3 className="text-4xl font-bold text-white leading-tight">
                          {whyChooseUsData[activeWhyChoose].title}
                        </h3>
                        <p className="text-cyan-300 text-base font-semibold">
                          {whyChooseUsData[activeWhyChoose].subtitle}
                        </p>
                      </motion.div>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-blue-100 text-lg leading-relaxed"
                      >
                        {whyChooseUsData[activeWhyChoose].description}
                      </motion.p>
                    </div>

                    {/* Features List */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="space-y-4"
                    >
                      <h4 className="text-xl font-semibold text-white mb-4">Key Benefits:</h4>
                      <ul className="space-y-4">
                        {whyChooseUsData[activeWhyChoose].features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                            className="flex items-start text-gray-200"
                          >
                            <div className="w-3 h-3 bg-cyan-400 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                            <span className="leading-relaxed text-base">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Bottom CTA Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="pt-8 border-t border-white/20 flex justify-center"
                    >
                      <Link
                        to="/contact"
                        className="group relative inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-white/25 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                      >
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        
                        {/* Button content */}
                        <div className="relative z-10 flex items-center space-x-3">
                          <span className="transition-all duration-300 group-hover:text-blue-600">
                            Get Started Today
                          </span>
                          <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                        </div>
                        
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-white to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-400" />
                      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions tailored to meet the unique requirements of various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {industry.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CLIENT SUCCESS SNAPSHOT */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote className="w-12 h-12 text-blue-200 mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-medium text-white mb-8 max-w-4xl mx-auto">
              "Atlas Defenders transformed our legacy infrastructure into a resilient,
              high-performing private cloud."
            </blockquote>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">40+</div>
                <div className="text-blue-200">Datacenter Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-200">Countries Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">99.99%</div>
                <div className="text-blue-200">Infrastructure Availability SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200">Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Build the Backbone of Your Digital Future
            </h2>

            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Ready to modernize your infrastructure? Our experts are here to design and implement
              the perfect data center solution for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Infrastructure Strategy Call
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
              >
                <Settings className="w-5 h-5 mr-2" />
                Explore Our Managed Services
              </Link>
            </div>

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-blue-800">
              <p className="text-blue-200 mb-4">
                Need immediate assistance? Our solution architects are standing by.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+1-800-ATLAS-DEF"
                  className="inline-flex items-center text-white hover:text-blue-300 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  1-800-ATLAS-DEF
                </a>
                <span className="hidden sm:block text-blue-400">|</span>
                <a
                  href="mailto:datacenter@atlasdefenders.com"
                  className="inline-flex items-center text-white hover:text-blue-300 transition-colors duration-200"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  datacenter@atlasdefenders.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DataCenterPage;