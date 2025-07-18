import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Shield, Search, AlertTriangle, ArrowRight, Zap, Users, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const OffensiveSecurityPage = () => {
  useEffect(() => {
    document.title = 'Offensive Security | Atlas Defenders';
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
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-orange-400">
        {prefix}{count}{suffix}
      </span>
    );
  };

  const offensiveCategories = [
    {
      id: 'web-app-testing',
      title: 'Web Application Testing',
      description: 'Comprehensive security assessment of web applications and APIs.',
      tools: [
        { name: 'Burp Suite', logo: '/Logos/bruipsuite_logo.svg' },
        { name: 'OWASP ZAP', logo: '/Logos/owasp_logo.svg' },
        { name: 'Acunetix', logo: '/Logos/acuentix_logo.png' },
        { name: 'Netsparker', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/n/n5/Netsparker_logo.svg/2560px-Netsparker_logo.svg.png' }
      ],
      gradient: 'from-red-600 to-orange-600'
    },
    {
      id: 'network-testing',
      title: 'Network Penetration Testing',
      description: 'Advanced network infrastructure security assessment and exploitation.',
      tools: [
        { name: 'Nmap', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Metasploit', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Wireshark', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Wireshark_icon_new.png/1200px-Wireshark_icon_new.png' },
        { name: 'Nessus', logo: '/Logos/nessus_logo.png' }
      ],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'mobile-testing',
      title: 'Mobile Application Testing',
      description: 'Security assessment of iOS and Android mobile applications.',
      tools: [
        { name: 'MobSF', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Frida', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Objection', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Checkmarx', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Checkmarx_logo.svg/2560px-Checkmarx_logo.svg.png' }
      ],
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'cloud-testing',
      title: 'Cloud Security Testing',
      description: 'Assessment of cloud infrastructure and configuration security.',
      tools: [
        { name: 'ScoutSuite', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Prowler', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'CloudMapper', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Pacu', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
      ],
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'social-engineering',
      title: 'Social Engineering Testing',
      description: 'Human factor security assessment through phishing and social attacks.',
      tools: [
        { name: 'Gophish', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'SET', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'King Phisher', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'BeEF', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
      ],
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      id: 'physical-testing',
      title: 'Physical Security Testing',
      description: 'Assessment of physical security controls and access systems.',
      tools: [
        { name: 'Lock Picking', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'RFID Cloning', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Badge Cloning', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
        { name: 'Flipper Zero', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
      ],
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  const metrics = [
    { value: 500, suffix: '+', label: 'Penetration Tests', icon: Target },
    { value: 15, suffix: ' min', label: 'Avg Breach Time', prefix: '< ', icon: Clock },
    { value: 98, suffix: '%', label: 'Critical Findings', icon: AlertTriangle },
    { value: 150, suffix: '+', label: 'Satisfied Clients', icon: Users }
  ];

  const whyChooseReasons = [
    {
      title: 'Certified Ethical Hackers',
      description: 'Team of certified penetration testers with real-world attack experience',
      icon: Shield
    },
    {
      title: 'Comprehensive Methodology',
      description: 'OWASP, NIST, and PTES-based testing methodologies for thorough assessment',
      icon: CheckCircle
    },
    {
      title: 'Detailed Reporting',
      description: 'Executive summaries and technical reports with clear remediation guidance',
      icon: Search
    },
    {
      title: 'Continuous Support',
      description: 'Post-assessment support and retesting to verify security improvements',
      icon: Zap
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Offensive Security Testing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-orange-900/85 to-yellow-900/90"></div>
        </div>

        {/* Floating Target Effects */}
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-orange-400">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Security Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              <div className="w-12 h-0.5 bg-orange-400 mr-4"></div>
              <span className="text-lg font-medium text-orange-400 tracking-wide uppercase">
                Ethical Hacking Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white"
            >
              Offensive Security
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-orange-300 mb-8 font-medium"
            >
              Advanced Security Assessment & Penetration Testing
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              Identify vulnerabilities before attackers do with comprehensive penetration testing, 
              security assessments, and ethical hacking services that strengthen your security posture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                to="/contact"
                className="group inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Schedule Penetration Test</span>
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
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
              
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center relative">
                  <Target size={32} className="text-white" />
                  <motion.div
                    className="absolute inset-0 bg-orange-400/20 rounded-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Offensive Security testing simulates real-world attacks to identify vulnerabilities in your systems 
                before malicious actors can exploit them. Our certified ethical hackers use the same tools and 
                techniques as attackers to provide comprehensive security assessments and actionable remediation guidance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offensive Security Solutions Section */}
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
              Comprehensive Penetration Testing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our offensive security portfolio covers all attack vectors, from web applications 
              to physical security, providing complete visibility into your security posture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offensiveCategories.map((category, index) => (
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
              Our offensive security approach combines advanced testing methodologies with expert analysis 
              to provide actionable insights that strengthen your security posture.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-red-600 transition-colors duration-300">
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
      <section className="py-20 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white relative overflow-hidden">
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
              Proven Testing Results
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our offensive security testing delivers measurable insights that help organizations 
              understand and improve their security posture.
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
                    <Icon size={28} className="text-orange-400" />
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
            className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Target size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 max-w-xl mx-auto">
                Ready to Test Your Defenses?
              </h2>
              
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Discover vulnerabilities before attackers do. Our comprehensive penetration testing 
                services will help you understand your security posture and strengthen your defenses.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-white text-red-600 hover:bg-white/90 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Penetration Test
                </Link>
                <Link 
                  to="/services" 
                  className="btn bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  View All Security Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OffensiveSecurityPage;