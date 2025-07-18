import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  Zap, 
  Shield, 
  Thermometer, 
  Network, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Target, 
  TrendingUp,
  Globe,
  Database,
  Settings,
  Activity,
  BarChart3,
  Layers,
  Cloud,
  Lock,
  Eye,
  Cpu,
  HardDrive,
  Building,
  Gauge,
  Wifi
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataCenterPage = () => {
  useEffect(() => {
    document.title = 'Next-Gen Data Center Design | Atlas Defenders';
  }, []);

  const [activeTab, setActiveTab] = useState('overview');

  // UniFi-style feature cards
  const dataCenterFeatures = [
    {
      icon: Server,
      title: 'Tier IV Design',
      subtitle: '99.995% Uptime',
      description: 'Fault-tolerant infrastructure with concurrent maintainability',
      metrics: ['2N+1 Redundancy', 'Zero Downtime', '96 Hours Outage/Year']
    },
    {
      icon: Zap,
      title: 'Power Systems',
      subtitle: 'Redundant Power',
      description: 'N+1 UPS systems with generator backup and smart PDUs',
      metrics: ['2N Power Path', 'Smart Monitoring', '15min Backup']
    },
    {
      icon: Thermometer,
      title: 'Cooling Solutions',
      subtitle: 'Precision Climate',
      description: 'Advanced cooling with hot/cold aisle containment',
      metrics: ['PUE < 1.3', 'Liquid Cooling', 'AI Optimization']
    },
    {
      icon: Network,
      title: 'Network Fabric',
      subtitle: 'High-Speed Connectivity',
      description: 'Multi-gigabit switching with fiber backbone',
      metrics: ['100Gbps Links', 'Zero Latency', 'SDN Ready']
    },
    {
      icon: Shield,
      title: 'Security Layers',
      subtitle: 'Multi-Factor Protection',
      description: 'Biometric access with 24/7 monitoring and compliance',
      metrics: ['Biometric Access', 'CCTV 24/7', 'SOC 2 Ready']
    },
    {
      icon: Cloud,
      title: 'Hybrid Ready',
      subtitle: 'Cloud Integration',
      description: 'Seamless multi-cloud connectivity and edge computing',
      metrics: ['Multi-Cloud', 'Edge Computing', 'API Integration']
    }
  ];

  // UniFi-style specifications
  const specifications = {
    overview: {
      title: 'Data Center Overview',
      items: [
        { label: 'Tier Classification', value: 'Tier III & IV Certified' },
        { label: 'Uptime Guarantee', value: '99.99% SLA' },
        { label: 'Power Density', value: 'Up to 30kW per rack' },
        { label: 'Cooling Efficiency', value: 'PUE < 1.3' },
        { label: 'Network Capacity', value: '100Gbps+ backbone' },
        { label: 'Security Level', value: 'Multi-layer physical & logical' }
      ]
    },
    power: {
      title: 'Power & Electrical',
      items: [
        { label: 'Primary Power', value: 'Dual utility feeds' },
        { label: 'UPS Systems', value: 'N+1 redundant configuration' },
        { label: 'Generator Backup', value: '2N diesel generators' },
        { label: 'Power Distribution', value: 'Smart PDUs with monitoring' },
        { label: 'Voltage Options', value: '120V, 208V, 480V available' },
        { label: 'Power Quality', value: '<3% THD, 99.9% availability' }
      ]
    },
    cooling: {
      title: 'Cooling & Environment',
      items: [
        { label: 'Cooling Type', value: 'Precision air + liquid cooling' },
        { label: 'Redundancy', value: 'N+1 CRAC units' },
        { label: 'Temperature Range', value: '68-77°F (20-25°C)' },
        { label: 'Humidity Control', value: '45-55% RH ±5%' },
        { label: 'Containment', value: 'Hot/cold aisle separation' },
        { label: 'Efficiency', value: 'Variable speed drives, free cooling' }
      ]
    },
    network: {
      title: 'Network Infrastructure',
      items: [
        { label: 'Backbone Speed', value: '100Gbps+ fiber infrastructure' },
        { label: 'Switch Fabric', value: 'Non-blocking architecture' },
        { label: 'Redundancy', value: 'Dual-path connectivity' },
        { label: 'Protocols', value: 'BGP, OSPF, MPLS support' },
        { label: 'Monitoring', value: 'Real-time traffic analysis' },
        { label: 'Security', value: 'DDoS protection, firewalls' }
      ]
    }
  };

  // Metrics with counters
  const metrics = [
    { value: 99.99, suffix: '%', label: 'Uptime SLA', color: 'text-green-500' },
    { value: 30, suffix: 'kW', label: 'Max Power/Rack', color: 'text-blue-500' },
    { value: 1.25, suffix: '', label: 'PUE Rating', color: 'text-purple-500' },
    { value: 100, suffix: 'Gbps', label: 'Network Speed', color: 'text-orange-500' }
  ];

  return (
    <>
      {/* Hero Section - UniFi Style */}
      <section className="relative bg-white">
        {/* Clean header with breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container py-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-primary">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-primary">Data Center Design</span>
            </div>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Building size={16} className="mr-2" />
                Infrastructure Solutions
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Next-Generation
                <span className="block text-primary">Data Center Design</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise-grade data center infrastructure designed for maximum uptime, 
                efficiency, and scalability. From Tier III to Tier IV specifications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Assessment
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <button className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  View Specifications
                </button>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                {/* Data Center Visualization */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Server size={16} className="text-primary" />
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-600">Rack {i + 1}</div>
                      <div className="text-xs text-gray-400">Online</div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Status indicators */}
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-gray-600">All Systems Operational</span>
                  </div>
                  <div className="text-gray-500">99.99% Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid - UniFi Style */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Data Center Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive infrastructure solutions designed for mission-critical operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataCenterFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">{feature.title}</div>
                      <div className="text-xs text-gray-500">{feature.subtitle}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-1">
                    {feature.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-500">
                        <CheckCircle size={12} className="text-green-500 mr-2" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications Section - UniFi Style */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Detailed specifications for enterprise data center infrastructure
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap border-b border-gray-200 mb-8">
              {Object.entries(specifications).map(([key, spec]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === key
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {spec.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specifications[activeTab as keyof typeof specifications].items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <span className="text-gray-900 font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Performance Metrics
            </h2>
            <p className="text-lg text-gray-600">
              Industry-leading performance and reliability standards
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              Proven methodology for successful data center delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Assessment', icon: Target, description: 'Site evaluation and requirements analysis' },
              { title: 'Design', icon: Settings, description: 'Detailed engineering and architectural plans' },
              { title: 'Build', icon: Building, description: 'Professional construction and installation' },
              { title: 'Optimize', icon: TrendingUp, description: 'Testing, commissioning, and optimization' }
            ].map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Data Center?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get started with a comprehensive assessment and custom design proposal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Start Assessment
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DataCenterPage;