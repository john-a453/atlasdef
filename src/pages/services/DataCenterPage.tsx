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

  // Why Choose Atlas Defenders
  const whyChooseUs = [
    { title: 'Certified engineers with multi-vendor expertise', icon: Award },
    { title: 'Experience in private, public, and hybrid environments', icon: Cloud },
    { title: 'Scalable designs tailored to your industry', icon: Target },
    { title: 'Secure-by-default implementations', icon: Shield },
    { title: 'Post-deployment documentation and training', icon: FileText },
    { title: 'Comprehensive support and maintenance', icon: Users }
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading technologies and platforms we specialize in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {stack.category}
                </h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Atlas Defenders?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven expertise and commitment to delivering exceptional infrastructure solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
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