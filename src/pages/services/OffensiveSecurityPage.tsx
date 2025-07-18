import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const OffensiveSecurityPage = () => {
  useEffect(() => {
    document.title = 'Offensive Security | Atlas Defenders';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-black">
        <div className="container max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-semibold mb-4">
                  <Shield size={16} className="mr-2" />
                  Offensive Security Services
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-white">Uncover the</span>
                <br />
                <span className="text-red-500">Unknown</span>
                <br />
                <span className="text-white">Before Attackers Do</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Atlas Defenders simulates real-world cyberattacks to discover your weaknesses before hackers do. 
                Our certified red team experts use advanced techniques to test your defenses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Request a Red Team Assessment</span>
                  <ArrowRight size={20} className="ml-3" />
                </Link>
                
                <Link
                  to="/contact"
                  className="group inline-flex items-center bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  <Target size={20} className="mr-3" />
                  <span>View Service Details</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-black/80 rounded-lg p-6 border border-red-500/30 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-gray-400 text-sm">atlas-defenders-redteam.sh</span>
                </div>
                <div className="text-green-400 font-mono text-sm space-y-2">
                  <div>$ nmap -sS -O target.company.com</div>
                  <div>Starting Nmap scan...</div>
                  <div>PORT     STATE SERVICE</div>
                  <div>22/tcp   open  ssh</div>
                  <div>80/tcp   open  http</div>
                  <div>443/tcp  open  https</div>
                  <div className="text-red-400">$ sqlmap -u "https://target.com/login"</div>
                  <div className="text-red-400">Vulnerability detected: SQL Injection</div>
                  <div className="text-yellow-400">$ msfconsole</div>
                  <div className="text-yellow-400">Payload delivered successfully</div>
                  <div className="text-green-400">$ whoami</div>
                  <div className="text-green-400">root@target-server</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Is Offensive Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Is Offensive Security?
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Offensive security is the proactive approach to cybersecurity. Our certified experts simulate 
                real-world cyberattacks to detect vulnerabilities in your systems, applications, cloud, and 
                employees — before real adversaries exploit them.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unlike traditional security assessments, offensive security testing uses the same tools, 
                techniques, and procedures as actual attackers. This approach provides a realistic view of 
                your security posture and helps prioritize remediation efforts based on actual risk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white">
                <div className="mb-6">
                  <Target size={48} className="text-red-200" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Red Team Simulation</h3>
                <p className="text-red-100 mb-6">
                  Our red team exercises simulate advanced persistent threats, testing your organization's 
                  ability to detect, respond to, and recover from sophisticated attacks.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-red-200 mr-3" />
                    <span className="text-sm">Multi-vector attack simulation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-red-200 mr-3" />
                    <span className="text-sm">Stealth and persistence testing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-red-200 mr-3" />
                    <span className="text-sm">Detection capability assessment</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Offensive Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive offensive security testing across all attack vectors and platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Application Penetration Testing',
                description: 'Simulate attacks against your websites using OWASP and zero-day discovery techniques.',
                features: ['OWASP Top 10 Testing', 'Zero-day Discovery', 'Business Logic Flaws', 'Authentication Bypass']
              },
              {
                title: 'Mobile Application Testing',
                description: 'Evaluate Android & iOS apps against OWASP Mobile Top 10.',
                features: ['iOS Security Testing', 'Android Penetration', 'Mobile API Testing', 'Runtime Analysis']
              },
              {
                title: 'API Penetration Testing',
                description: 'Test your APIs against abuse, insecure endpoints, and authorization bypass.',
                features: ['REST API Testing', 'GraphQL Security', 'Authorization Bypass', 'Rate Limiting Tests']
              },
              {
                title: 'Network & Infrastructure Testing',
                description: 'Simulate external and internal attacks to find misconfigurations and escalation vectors.',
                features: ['External Penetration', 'Internal Network Testing', 'Privilege Escalation', 'Lateral Movement']
              },
              {
                title: 'Cloud Security Assessment',
                description: 'AWS, Azure & GCP red teaming — IAM misconfigurations, public buckets, exposed secrets.',
                features: ['Multi-Cloud Testing', 'IAM Misconfigurations', 'Container Security', 'Serverless Testing']
              },
              {
                title: 'Social Engineering Simulations',
                description: 'Phishing, vishing, USB drop, and physical breach attempts.',
                features: ['Phishing Campaigns', 'Vishing Attacks', 'USB Drop Tests', 'Pretexting Scenarios']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group hover:border-red-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle size={16} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-3 px-4 rounded-lg transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Uncover the Gaps in Your Security?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't wait for a breach to happen. Get proactive protection with our comprehensive 
              offensive security services.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight size={20} className="ml-3" />
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Target size={20} className="mr-3" />
                <span>Get a Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OffensiveSecurityPage;