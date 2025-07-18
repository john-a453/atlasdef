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
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl">
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
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive offensive security testing across all attack vectors and platforms.
            </p>
          </motion.div>

          {/* First Row - 3 Services */}
          <div className="grid lg:grid-cols-3 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional Web Security Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <circle cx="32" cy="32" r="4" fill="currentColor" />
                  <circle cx="16" cy="16" r="3" fill="currentColor" />
                  <circle cx="48" cy="16" r="3" fill="currentColor" />
                  <circle cx="16" cy="48" r="3" fill="currentColor" />
                  <circle cx="48" cy="48" r="3" fill="currentColor" />
                  <path d="M32 28 L32 36 M28 32 L36 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M32 8 L32 24 M8 32 L24 32 M32 40 L32 56 M40 32 L56 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M20 20 L28 28 M44 20 L36 28 M20 44 L28 36 M44 44 L36 36" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                Web Application Penetration Testing
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                Simulate attacks against your websites using OWASP and zero-day discovery techniques.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">OWASP Top 10 Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Zero-day Discovery</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Business Logic Flaws</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Authentication Bypass</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional Mobile Security Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <rect x="18" y="8" width="28" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="22" y="16" width="20" height="28" fill="currentColor" opacity="0.1" />
                  <circle cx="32" cy="50" r="2" fill="currentColor" />
                  <path d="M26 12 L38 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M28 20 L36 20 M28 24 L36 24 M28 28 L32 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="38" cy="32" r="2" fill="currentColor" />
                  <path d="M24 36 L40 36 M24 40 L36 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                Mobile Application Testing
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                Evaluate Android & iOS apps against OWASP Mobile Top 10.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">iOS Security Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Android Penetration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Mobile API Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Runtime Analysis</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional API Security Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <rect x="8" y="20" width="48" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="32" r="3" fill="currentColor" />
                  <circle cx="32" cy="32" r="3" fill="currentColor" />
                  <circle cx="44" cy="32" r="3" fill="currentColor" />
                  <path d="M23 32 L29 32 M35 32 L41 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M32 8 L32 20 M32 44 L32 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 8 L16 20 M48 8 L48 20 M16 44 L16 56 M48 44 L48 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="16" cy="6" r="2" fill="currentColor" />
                  <circle cx="32" cy="6" r="2" fill="currentColor" />
                  <circle cx="48" cy="6" r="2" fill="currentColor" />
                  <circle cx="16" cy="58" r="2" fill="currentColor" />
                  <circle cx="32" cy="58" r="2" fill="currentColor" />
                  <circle cx="48" cy="58" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                API Penetration Testing
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                Test your APIs against abuse, insecure endpoints, and authorization bypass.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">REST API Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">GraphQL Security</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Authorization Bypass</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Rate Limiting Tests</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Second Row - 3 Services */}
          <div className="grid lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional Network Security Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <circle cx="32" cy="32" r="6" fill="currentColor" />
                  <circle cx="16" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="48" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="16" cy="48" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="48" cy="48" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 20 L26 26 M44 20 L38 26 M20 44 L26 38 M44 44 L38 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="16" cy="16" r="2" fill="currentColor" />
                  <circle cx="48" cy="16" r="2" fill="currentColor" />
                  <circle cx="16" cy="48" r="2" fill="currentColor" />
                  <circle cx="48" cy="48" r="2" fill="currentColor" />
                  <path d="M8 32 L24 32 M40 32 L56 32 M32 8 L32 24 M32 40 L32 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                Network & Infrastructure Testing
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                Simulate external and internal attacks to find misconfigurations and escalation vectors.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">External Penetration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Internal Network Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Privilege Escalation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Lateral Movement</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional Cloud Security Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <path d="M16 40 C12 40 8 36 8 32 C8 28 12 24 16 24 C18 20 22 16 28 16 C34 16 38 20 40 24 C44 24 48 28 48 32 C48 36 44 40 40 40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="32" r="2" fill="currentColor" />
                  <circle cx="32" cy="32" r="2" fill="currentColor" />
                  <circle cx="44" cy="32" r="2" fill="currentColor" />
                  <path d="M22 32 L30 32 M34 32 L42 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M32 44 L32 52 M28 48 L36 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="16" cy="48" r="1.5" fill="currentColor" />
                  <circle cx="24" cy="48" r="1.5" fill="currentColor" />
                  <circle cx="40" cy="48" r="1.5" fill="currentColor" />
                  <circle cx="48" cy="48" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                Cloud Security Assessment
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                AWS, Azure & GCP red teaming — IAM misconfigurations, public buckets, exposed secrets.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Multi-Cloud Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">IAM Misconfigurations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Container Security</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Serverless Testing</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Professional Social Engineering Icon */}
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-red-600">
                  <circle cx="32" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M32 28 C28 28 24 32 24 36 L24 44 L40 44 L40 36 C40 32 36 28 32 28 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="32" cy="20" r="4" fill="currentColor" />
                  <path d="M16 52 L48 52 M20 48 L44 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="56" r="2" fill="currentColor" />
                  <circle cx="20" cy="56" r="2" fill="currentColor" />
                  <circle cx="32" cy="56" r="2" fill="currentColor" />
                  <circle cx="44" cy="56" r="2" fill="currentColor" />
                  <circle cx="52" cy="56" r="2" fill="currentColor" />
                  <path d="M8 8 L16 16 M48 8 L56 16 M8 16 L16 8 M48 16 L56 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                Social Engineering Simulations
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 px-4">
                Phishing, vishing, USB drop, and physical breach attempts.
              </p>
              <ul className="text-left space-y-3 px-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Phishing Campaigns</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Vishing Attacks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">USB Drop Tests</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Pretexting Scenarios</span>
                </li>
              </ul>
            </motion.div>
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