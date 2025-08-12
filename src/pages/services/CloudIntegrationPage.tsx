import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cloud, Server, Database, ArrowRight, Zap, Users, Clock, CheckCircle, Shield, Globe, Award, Lock, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const CloudIntegrationPage = () => {
  useEffect(() => {
    document.title = 'Seamless Cloud Integration for the Future | Atlas Defenders';
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
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-cyan-400">
        {prefix}{count}{suffix}
      </span>
    );
  };

  const cloudCategories = [
    {
      id: 'aws-integration',
      title: 'AWS Cloud Integration',
      description: 'Comprehensive Amazon Web Services implementation and migration.',
      tools: [
        { name: 'AWS EC2', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
        { name: 'AWS VPC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
        { name: 'AWS Lambda', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
        { name: 'AWS RDS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' }
      ],
      gradient: 'from-orange-600 to-yellow-600'
    },
    {
      id: 'azure-integration',
      title: 'Microsoft Azure',
      description: 'Enterprise Azure cloud solutions and hybrid connectivity.',
      tools: [
        { name: 'Azure VMs', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png' },
        { name: 'Azure AD', logo: '/Logos/azure_active_directory_logo.svg' },
        { name: 'Azure Functions', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png' },
        { name: 'Azure SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png' }
      ],
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'gcp-integration',
      title: 'Google Cloud Platform',
      description: 'GCP services integration with advanced analytics and AI.',
      tools: [
        { name: 'Compute Engine', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png' },
        { name: 'Cloud Storage', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png' },
        { name: 'BigQuery', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png' },
        { name: 'Cloud Functions', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png' }
      ],
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'oracle-cloud',
      title: 'Oracle Cloud Infrastructure',
      description: 'Enterprise-grade OCI solutions for mission-critical workloads.',
      tools: [
        { name: 'OCI Compute', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
        { name: 'OCI Database', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
        { name: 'OCI Networking', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
        { name: 'OCI Security', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' }
      ],
      gradient: 'from-red-600 to-pink-600'
    },
    {
      id: 'hybrid-cloud',
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud environments.',
      tools: [
        { name: 'VMware Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png' },
        { name: 'Azure Arc', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png' },
        { name: 'AWS Outposts', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
        { name: 'Google Anthos', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png' }
      ],
      gradient: 'from-purple-600 to-violet-600'
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      description: 'Comprehensive security for cloud workloads and data.',
      tools: [
        { name: 'AWS Security Hub', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
        { name: 'Azure Sentinel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png' },
        { name: 'Cloud Security Command Center', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png' },
        { name: 'Prisma Cloud', logo: '/Logos/paloalto_logo.svg' }
      ],
      gradient: 'from-teal-600 to-cyan-600'
    }
  ];

  const metrics = [
    { value: 150, suffix: '+', label: 'Cloud Migrations', icon: Cloud },
    { value: 40, suffix: '%', label: 'Cost Reduction', icon: Zap },
    { value: 99.9, suffix: '%', label: 'Cloud Uptime', icon: Server },
    { value: 80, suffix: '+', label: 'Cloud Clients', icon: Users }
  ];

  const whyChooseReasons = [
    {
      title: 'Multi-Cloud Expertise',
      description: 'Certified professionals across AWS, Azure, GCP, and Oracle Cloud platforms',
      icon: Globe
    },
    {
      title: 'Security-First Approach',
      description: 'Cloud security best practices integrated into every deployment',
      icon: Shield
    },
    {
      title: 'Cost Optimization',
      description: 'Strategic cloud architecture to minimize costs while maximizing performance',
      icon: CheckCircle
    },
    {
      title: 'Seamless Migration',
      description: 'Zero-downtime migration strategies with comprehensive testing and validation',
      icon: Clock
    }
  ];

  // Technology Partners Data
  const technologyPartners = [
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
    { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png' },
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png' },
    { name: 'Oracle Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
    { name: 'Linode', logo: 'https://www.linode.com/wp-content/uploads/2021/01/Linode-Logo-Black.svg' },
    { name: 'DigitalOcean', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/2560px-DigitalOcean_logo.svg.png' },
    { name: 'Hostinger', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hostinger_logo.svg/2560px-Hostinger_logo.svg.png' }
  ];

  // Cloud Integration Services Data (Netgear Style)
  const cloudServices = [
    {
      id: 'hybrid-cloud',
      title: 'Hybrid Cloud Architecture',
      subtitle: 'Seamless Integration',
      description: 'Seamlessly integrate private and public cloud environments for maximum flexibility.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Private-Public Integration', 'Seamless Data Flow', 'Unified Management', 'Cost Optimization']
    },
    {
      id: 'cloud-virtualization',
      title: 'Cloud Virtualization',
      subtitle: 'Resource Optimization',
      description: 'Optimize resources with cutting-edge virtualization technology.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['VM Management', 'Container Orchestration', 'Resource Scaling', 'Performance Monitoring']
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security & Compliance',
      subtitle: 'Enterprise Protection',
      description: 'Enterprise-grade security controls and compliance frameworks.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Zero Trust Architecture', 'Compliance Automation', 'Threat Detection', 'Data Encryption']
    },
    {
      id: 'cloud-backup',
      title: 'Cloud Backup & Disaster Recovery',
      subtitle: 'Business Continuity',
      description: 'Continuous protection with rapid recovery options.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Automated Backups', 'Point-in-Time Recovery', 'Cross-Region Replication', 'RTO/RPO Optimization']
    },
    {
      id: 'multi-cloud',
      title: 'Multi-Cloud Management',
      subtitle: 'Centralized Control',
      description: 'Centralized control of all your cloud platforms in one dashboard.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Unified Dashboard', 'Cost Management', 'Performance Analytics', 'Policy Enforcement']
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      subtitle: 'Seamless Transition',
      description: 'Fast, secure, and seamless migration with minimal downtime.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Assessment & Planning', 'Zero-Downtime Migration', 'Data Validation', 'Post-Migration Support']
    }
  ];

  // Certifications Data
  const certifications = [
    { name: 'ISO/IEC 27001', description: 'Information Security Management', icon: Shield },
    { name: 'ISO/IEC 27017', description: 'Cloud Security Guidelines', icon: Cloud },
    { name: 'ISO/IEC 27018', description: 'Protection of Personal Data in the Cloud', icon: Lock },
    { name: 'SOC 2 Type II', description: 'Security, Availability, and Confidentiality Controls', icon: Award },
    { name: 'GDPR', description: 'General Data Protection Regulation', icon: Globe },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act', icon: Shield },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard', icon: Lock }
  ];

  return (
    <>
      {/* Hero Section - Authentik Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gradient Background - Authentik Style */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            {/* Left Content - Authentik Style */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
              >
                Seamless Cloud Integration for the Future
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl"
              >
                Unifying your infrastructure, optimizing performance, and ensuring scalability — all in the cloud.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link 
                  to="#services"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Our Solutions
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Login Card Style */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Cloud size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Cloud Integration!</h3>
                  <p className="text-gray-600">Transform your infrastructure with enterprise-grade cloud solutions</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center mb-2">
                      <Shield size={20} className="text-blue-600 mr-2" />
                      <span className="font-semibold text-gray-900">Enterprise Security</span>
                    </div>
                    <p className="text-sm text-gray-600">Bank-level security with compliance frameworks</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-100">
                    <div className="flex items-center mb-2">
                      <Zap size={20} className="text-purple-600 mr-2" />
                      <span className="font-semibold text-gray-900">High Performance</span>
                    </div>
                    <p className="text-sm text-gray-600">Optimized for speed and reliability</p>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4 border border-indigo-100">
                    <div className="flex items-center mb-2">
                      <Globe size={20} className="text-indigo-600 mr-2" />
                      <span className="font-semibold text-gray-900">Global Scale</span>
                    </div>
                    <p className="text-sm text-gray-600">Multi-region deployment capabilities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Partners Section - Authentik Style */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-12">
              Trusted by Global Technology Leaders
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20 py-8">
              {technologyPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-center min-h-16 min-w-32">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      style={{
                        height: partner.name === 'Google Cloud' ? '80px' : 
                               partner.name === 'DigitalOcean' ? '100px' : 
                               partner.name === 'Hostinger' ? '100px' : '48px',
                        width: 'auto',
                        maxWidth: '200px'
                      }}
                      className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Integration Services Section - Netgear Style */}
      <section className="py-20 bg-white" id="services">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Cloud Integration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to accelerate your digital transformation journey with enterprise-grade security and performance.
            </p>
          </motion.div>

          {/* Netgear-Style Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - Netgear Style */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Integration Solutions Section */}
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
              Comprehensive Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cloud integration portfolio spans all major cloud platforms, providing complete 
              solutions for migration, hybrid connectivity, and cloud-native development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudCategories.map((category, index) => (
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
              Our cloud integration approach combines deep technical expertise with strategic business insights 
              to deliver cloud solutions that drive innovation and growth.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-cyan-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-cyan-600 transition-colors duration-300">
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

      {/* Certifications & Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We ensure every cloud integration project aligns with international security and quality standards, 
              giving our clients peace of mind and compliance readiness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 group text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-blue-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
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
            className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Cloud size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 max-w-xl mx-auto">
                Ready to Transform with Cloud?
              </h2>
              
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Accelerate your digital transformation with our expert cloud integration services. 
                Let us help you leverage the power of multi-cloud architecture for your business success.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-white text-cyan-600 hover:bg-white/90 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Cloud Migration
                </Link>
                <Link 
                  to="/services" 
                  className="btn bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  View All Cloud Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CloudIntegrationPage;