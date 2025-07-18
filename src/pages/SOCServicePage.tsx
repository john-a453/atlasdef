import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Activity, 
  Clock, 
  Users, 
  FileText, 
  Zap,
  ChevronRight,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SOCServicePage = () => {
  useEffect(() => {
    document.title = 'SOC as a Service | Atlas Defenders';
  }, []);

  const [activeCategory, setActiveCategory] = useState('siem');

  // Technology categories with their tools
  const technologyCategories = {
    siem: {
      title: 'SIEM',
      description: 'Security Information and Event Management',
      tools: [
        { name: 'Splunk', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Splunk_logo.svg/2560px-Splunk_logo.svg.png' },
        { name: 'ELK Stack', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Elasticsearch_logo.svg/2560px-Elasticsearch_logo.svg.png' },
        { name: 'IBM QRadar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' },
        { name: 'Graylog', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Graylog_logo.svg/2560px-Graylog_logo.svg.png' },
        { name: 'Security Onion', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
      ]
    },
    edr: {
      title: 'EDR/XDR',
      description: 'Endpoint Detection and Response / Extended Detection and Response',
      tools: [
        { name: 'Cortex XDR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palo_Alto_Networks_logo.svg/2560px-Palo_Alto_Networks_logo.svg.png' },
        { name: 'Wazuh', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Wazuh_logo.svg/2560px-Wazuh_logo.svg.png' },
        { name: 'CrowdStrike', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/CrowdStrike_logo.svg/2560px-CrowdStrike_logo.svg.png' },
        { name: 'SentinelOne', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/SentinelOne_logo.svg/2560px-SentinelOne_logo.svg.png' },
        { name: 'Cybereason', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cybereason_logo.svg/2560px-Cybereason_logo.svg.png' }
      ]
    },
    ids: {
      title: 'IDS/IPS',
      description: 'Intrusion Detection and Prevention Systems',
      tools: [
        { name: 'Snort', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Snort_logo.svg/2560px-Snort_logo.svg.png' },
        { name: 'Suricata', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Suricata_logo.svg/2560px-Suricata_logo.svg.png' },
        { name: 'Zeek', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Zeek_logo.svg/2560px-Zeek_logo.svg.png' },
        { name: 'pfSense', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/PfSense_logo.png/1200px-PfSense_logo.png' },
        { name: 'Fortinet', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/2560px-Fortinet_logo.svg.png' }
      ]
    },
    threat: {
      title: 'Threat Intelligence',
      description: 'Threat Intelligence Platforms and Feeds',
      tools: [
        { name: 'MISP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MISP_logo.svg/2560px-MISP_logo.svg.png' },
        { name: 'AlienVault OTX', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/AT%26T_logo_2016.svg/2560px-AT%26T_logo_2016.svg.png' },
        { name: 'IBM X-Force', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' },
        { name: 'Recorded Future', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Recorded_Future_logo.svg/2560px-Recorded_Future_logo.svg.png' },
        { name: 'ThreatConnect', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/t/t8/ThreatConnect_logo.svg/2560px-ThreatConnect_logo.svg.png' }
      ]
    },
    soar: {
      title: 'SOAR',
      description: 'Security Orchestration, Automation and Response',
      tools: [
        { name: 'Cortex XSOAR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palo_Alto_Networks_logo.svg/2560px-Palo_Alto_Networks_logo.svg.png' },
        { name: 'TheHive', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Splunk SOAR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Splunk_logo.svg/2560px-Splunk_logo.svg.png' },
        { name: 'IBM Resilient', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' },
        { name: 'Rapid7 InsightConnect', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Rapid7_logo.svg/2560px-Rapid7_logo.svg.png' }
      ]
    },
    vuln: {
      title: 'Vulnerability Mgmt',
      description: 'Vulnerability Management and Assessment',
      tools: [
        { name: 'Nessus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tenable_logo.svg/2560px-Tenable_logo.svg.png' },
        { name: 'Qualys VMDR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Qualys_logo.svg/2560px-Qualys_logo.svg.png' },
        { name: 'OpenVAS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Acunetix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Acunetix_logo.svg/2560px-Acunetix_logo.svg.png' },
        { name: 'Rapid7 Nexpose', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Rapid7_logo.svg/2560px-Rapid7_logo.svg.png' }
      ]
    }
  };

  // SOC Services offered
  const socServices = [
    {
      icon: Clock,
      title: '24/7 Threat Monitoring',
      description: 'Continuous monitoring of your infrastructure with real-time threat detection and alerting.',
      features: ['Real-time log analysis', 'Behavioral anomaly detection', 'Multi-source correlation', 'Instant alerting']
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response & Containment',
      description: 'Rapid response to security incidents with expert-led containment and remediation.',
      features: ['15-minute response time', 'Automated containment', 'Forensic analysis', 'Recovery planning']
    },
    {
      icon: Activity,
      title: 'SIEM Management & Correlation',
      description: 'Professional SIEM deployment, tuning, and management for optimal threat visibility.',
      features: ['Custom rule development', 'False positive reduction', 'Use case optimization', 'Performance tuning']
    },
    {
      icon: Eye,
      title: 'EDR/XDR Endpoint Visibility',
      description: 'Complete endpoint visibility with advanced detection and response capabilities.',
      features: ['Endpoint monitoring', 'Process analysis', 'Memory inspection', 'Network behavior analysis']
    },
    {
      icon: Shield,
      title: 'Threat Intelligence Enrichment',
      description: 'Enhanced threat context using global intelligence feeds and custom indicators.',
      features: ['IOC enrichment', 'Attribution analysis', 'Campaign tracking', 'Predictive intelligence']
    },
    {
      icon: Zap,
      title: 'SOAR Automation Playbooks',
      description: 'Automated response workflows to accelerate incident handling and reduce response times.',
      features: ['Custom playbooks', 'Automated enrichment', 'Response orchestration', 'Workflow optimization']
    },
    {
      icon: FileText,
      title: 'Vulnerability Correlation & Prioritization',
      description: 'Intelligent vulnerability management with threat-based prioritization.',
      features: ['Risk-based prioritization', 'Exploit correlation', 'Patch management', 'Compliance tracking']
    },
    {
      icon: Users,
      title: 'Compliance & Audit Readiness',
      description: 'Comprehensive compliance support for regulatory requirements and audit preparation.',
      features: ['Compliance mapping', 'Audit trail generation', 'Report automation', 'Evidence collection']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="SOC Operations Center"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-indigo-900/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
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
                SOC as a Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white"
            >
              24/7 Security
              <span className="block text-accent mt-2">Operations Center</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              Enterprise-grade security monitoring and incident response delivered as a service. 
              Protect your organization with our expert-staffed SOC, advanced threat detection, 
              and rapid response capabilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                to="/contact"
                className="group inline-flex items-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Get SOC Assessment</span>
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

      {/* Introduction Block */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Shield size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Enterprise SOC as a Service
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Atlas Defenders offers a full-featured, cloud-enabled Security Operations Center as a Service (SOCaaS), 
                combining advanced detection, threat response, and compliance readiness — powered by real-time intelligence 
                and expert analysts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Block - Interactive Categories */}
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
              Advanced SOC Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our SOC leverages best-in-class security technologies across all major categories 
              to provide comprehensive threat detection and response capabilities.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(technologyCategories).map(([key, category]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.title}
                </motion.button>
              ))}
            </div>

            {/* Active Category Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {technologyCategories[activeCategory as keyof typeof technologyCategories].title}
                  </h3>
                  <p className="text-gray-600">
                    {technologyCategories[activeCategory as keyof typeof technologyCategories].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {technologyCategories[activeCategory as keyof typeof technologyCategories].tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-16 flex items-center justify-center mb-4">
                        <img 
                          src={tool.logo} 
                          alt={`${tool.name} logo`}
                          className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <h4 className="text-center font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                        {tool.name}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Services Offered Block */}
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
              Comprehensive SOC Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our SOC as a Service delivers complete security operations capabilities, 
              from continuous monitoring to incident response and compliance support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socServices.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-primary/20"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="text-primary font-semibold text-sm hover:text-secondary transition-colors duration-300 flex items-center group-hover:translate-x-1">
                      Learn More
                      <ChevronRight size={14} className="ml-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOC Process Section (Existing - keeping in place) */}
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
              How Our SOC Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Security Operations Center follows a proven methodology to detect, analyze, 
              and respond to security threats in real-time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Continuous Monitoring',
                description: 'Real-time monitoring of your infrastructure using advanced SIEM and detection technologies.',
                icon: Eye
              },
              {
                step: '02',
                title: 'Threat Detection',
                description: 'AI-powered analysis and correlation of security events to identify potential threats.',
                icon: AlertTriangle
              },
              {
                step: '03',
                title: 'Incident Analysis',
                description: 'Expert analysts investigate and validate security incidents for accurate threat assessment.',
                icon: Users
              },
              {
                step: '04',
                title: 'Response & Recovery',
                description: 'Rapid containment, remediation, and recovery actions to minimize business impact.',
                icon: Shield
              }
            ].map((process, index) => {
              const Icon = process.icon;
              
              return (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {/* Connection Line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon size={32} className="text-white" />
                    </div>
                    
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {process.step}
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary mb-4">
                      {process.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
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
              Ready to Enhance Your Security Posture?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Get started with our SOC as a Service and benefit from 24/7 expert monitoring, 
              advanced threat detection, and rapid incident response capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="btn bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start Free SOC Assessment
              </Link>
              <Link 
                to="/services" 
                className="btn bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                View All Security Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SOCServicePage;