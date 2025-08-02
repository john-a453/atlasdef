import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Network, Wifi, Router, ArrowRight, Zap, Users, Clock, CheckCircle, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const NetworkEngineeringPage = () => {
  useEffect(() => {
    document.title = 'Network Engineering | Atlas Defenders';
  }, []);

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-blue-400">
        {prefix}{count}{suffix}
      </span>
    );
  };

  const networkCategories = [
    {
      id: 'routing-switching',
      title: 'Routing & Switching',
      description: 'Advanced routing protocols and enterprise switching solutions.',
      tools: [
        { name: 'Cisco', logo: '/Logos/Cisco_logo.svg' },
        { name: 'Juniper', logo: '/Logos/Juniper_Networks_logo.svg' },
        { name: 'Aruba', logo: '/Logos/Aruba_Networks_logo.svg' },
        { name: 'Huawei', logo: '/Logos/huawei_logo.svg' }
      ],
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'sd-wan',
      title: 'SD-WAN Solutions',
      description: 'Software-defined wide area networking for modern enterprises.',
      tools: [
        { name: 'Cisco Viptela', logo: '/Logos/Cisco_logo.svg' },
        { name: 'VMware VeloCloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png' },
        { name: 'Silver Peak', logo: '/Logos/Aruba_Networks_logo.svg' },
        { name: 'Fortinet', logo: '/Logos/Fortinet_logo.svg' }
      ],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'wireless',
      title: 'Wireless Networks',
      description: 'Enterprise Wi-Fi 6/6E and mesh networking solutions.',
      tools: [
        { name: 'Ubiquiti', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ubiquiti_Networks_2016.svg/2560px-Ubiquiti_Networks_2016.svg.png' },
        { name: 'TP-Link Omada', logo: '/Logos/TPLINK_Logo.svg' },
        { name: 'Cisco Meraki', logo: '/Logos/Cisco_logo.svg' },
        { name: 'Aruba', logo: '/Logos/Aruba_Networks_logo.svg' }
      ],
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'mpls-bgp',
      title: 'MPLS & BGP',
      description: 'Advanced routing protocols for service provider networks.',
      tools: [
        { name: 'Cisco IOS-XR', logo: '/Logos/Cisco_logo.svg' },
        { name: 'Juniper JUNOS', logo: '/Logos/Juniper_Networks_logo.svg' },
        { name: 'Nokia SR OS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nokia_wordmark.svg/2560px-Nokia_wordmark.svg.png' },
        { name: 'Huawei VRP', logo: '/Logos/huawei_logo.svg' }
      ],
      gradient: 'from-red-600 to-orange-600'
    },
    {
      id: 'network-automation',
      title: 'Network Automation',
      description: 'Infrastructure as Code and automated network management.',
      tools: [
        { name: 'Ansible', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/2560px-Ansible_logo.svg.png' },
        { name: 'Terraform', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Terraform_Logo.svg/2560px-Terraform_Logo.svg.png' },
        { name: 'NAPALM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Netmiko', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
      ],
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      id: 'load-balancing',
      title: 'Load Balancing',
      description: 'Application delivery and traffic distribution solutions.',
      tools: [
        { name: 'F5 BIG-IP', logo: '/Logos/F5_Logo_0.svg' },
        { name: 'HAProxy', logo: '/Logos/Haproxy_logo.png' },
        { name: 'Nginx', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/2560px-Nginx_logo.svg.png' },
        { name: 'Citrix ADC', logo: '/Logos/Citrix_logo.svg' }
      ],
      gradient: 'from-teal-600 to-cyan-600'
    }
  ];

  const metrics = [
    { value: 200, suffix: '+', label: 'Networks Deployed', icon: Network },
    { value: 99.9, suffix: '%', label: 'Uptime Achieved', icon: Zap },
    { value: 50, suffix: 'K+', label: 'Devices Managed', icon: Router },
    { value: 100, suffix: '+', label: 'Enterprise Clients', icon: Users }
  ];

  const whyChooseReasons = [
    {
      title: 'Certified Network Engineers',
      description: 'Team of CCIE, JNCIE, and vendor-certified networking professionals',
      icon: Shield
    },
    {
      title: 'Scalable Architectures',
      description: 'Future-proof network designs that grow with your business needs',
      icon: CheckCircle
    },
    {
      title: 'High Availability Design',
      description: 'Redundant and resilient network architectures for maximum uptime',
      icon: Globe
    },
    {
      title: '24/7 Network Monitoring',
      description: 'Proactive monitoring and rapid response to network issues',
      icon: Clock
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Network Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90"></div>
        </div>

        {/* Floating Network Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 opacity-20"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-blue-400">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Network Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
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
              <div className="w-12 h-0.5 bg-blue-400 mr-4"></div>
              <span className="text-lg font-medium text-blue-400 tracking-wide uppercase">
                Network Infrastructure Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white"
            >
              Network Engineering
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-blue-300 mb-8 font-medium"
            >
              Professional Routing, Switching & SD-WAN Solutions
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              Design and implement robust network infrastructure with advanced routing protocols, 
              VLAN segmentation, and high-availability configurations that support your business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                to="/contact"
                className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Network Assessment</span>
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

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200 relative overflow-hidden">
              {/* Tech accent glow */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center relative">
                  <Network size={32} className="text-white" />
                  <motion.div
                    className="absolute inset-0 bg-blue-400/20 rounded-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Network Engineering is the backbone of modern digital infrastructure. At Atlas Defenders, we design 
                and implement enterprise-grade networks using advanced routing protocols, SD-WAN technologies, and 
                high-availability architectures that ensure optimal performance, security, and scalability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Network Engineering Solutions Section */}
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
              Comprehensive Network Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our network engineering portfolio covers all aspects of modern networking, from traditional 
              routing and switching to cutting-edge SD-WAN and automation technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-gray-300 overflow-hidden h-full">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      animate={hoveredCard === category.id ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                  </div>

                  {/* Tools Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {category.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: toolIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-300 group/tool"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="h-8 flex items-center justify-center mb-2">
                            <img 
                              src={tool.logo} 
                              alt={`${tool.name} logo`}
                              className="max-h-6 max-w-full object-contain transition-all duration-300"
                              title={tool.name}
                            />
                          </div>
                          <p className="text-xs text-gray-600 text-center font-medium group-hover/tool:text-gray-800 transition-colors duration-300">
                            {tool.name}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover pulse effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Atlas Defenders Section */}
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
              Why Choose Atlas Defenders?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our network engineering approach combines industry best practices with innovative technologies 
              to deliver reliable, scalable, and secure network infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseReasons.map((reason, index) => {
              const Icon = reason.icon;
              
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 group"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
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
              Proven Network Performance
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our network engineering solutions deliver measurable results that improve performance, 
              reliability, and business continuity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                    <Icon size={28} className="text-blue-400" />
                  </div>
                  
                  <div className="mb-4">
                    <Counter 
                      end={metric.value} 
                      suffix={metric.suffix}
                      prefix={metric.prefix || ''}
                      duration={2.5}
                    />
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

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Network size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 max-w-xl mx-auto">
                Ready to Upgrade Your Network?
              </h2>
              
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Transform your network infrastructure with our expert engineering services. 
                Let us design and implement a network that supports your business growth and digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-white text-blue-600 hover:bg-white/90 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Network Assessment
                </Link>
                <Link 
                  to="/services" 
                  className="btn bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  View All Infrastructure Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NetworkEngineeringPage;