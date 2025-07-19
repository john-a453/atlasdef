import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const OffensiveSecurityPage = () => {
  useEffect(() => {
    document.title = 'Offensive Security | Atlas Defenders';
  }, []);

  // Counter component for animated statistics
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
      <span ref={ref}>
        {prefix}{count}{suffix}
      </span>
    );
  };

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

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Request a Red Team Assessment</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <button
                  onClick={() => {
                    const servicesSection = document.getElementById('offensive-services-section');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="group relative inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden"
                >
                  <span className="relative z-10 font-medium tracking-wide">View Service Details</span>

                  {/* Professional hover effect overlay */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Subtle glow effect */}
                  <div className="absolute -inset-1 bg-white rounded-lg blur opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:blur-md"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </button>
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
                  {/* White Hat Icon */}
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.91 1.47 2.2 2.59 3.68 3.16.74.29 1.52.29 2.26 0 1.48-.57 2.77-1.69 3.68-3.16C16.5 12.37 17 10.74 17 9c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 1.25-.36 2.45-1.03 3.5-.67 1.05-1.6 1.84-2.68 2.25-.21.08-.43.08-.64 0-1.08-.41-2.01-1.2-2.68-2.25C9.36 11.45 9 10.25 9 9c0-2.76 2.24-5 5-5z" />
                    <path d="M12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                    <path d="M4 20c0-4.42 3.58-8 8-8s8 3.58 8 8v2H4v-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Red Team Simulation</h3>
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
      <section id="offensive-services-section" className="py-20 bg-gray-50">
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

      {/* Client Success & Project Statistics Section - Oblique Design */}
      <section className="relative overflow-hidden">
        {/* Oblique Background with Linear Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-800 to-black transform -skew-y-1 origin-top-left scale-110"></div>

        {/* Content Container */}
        <div className="relative z-10 py-16 px-4">
          <div className="container max-w-6xl mx-auto">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Proven Excellence in Cybersecurity
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Our offensive security expertise delivers measurable results across global enterprises
              </p>
            </motion.div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

              {/* Satisfied Clients */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">
                  <Counter end={6561} suffix="+" duration={3} />
                </div>
                <div className="text-gray-200 font-semibold text-base tracking-wide">
                  Satisfied Clients
                </div>
              </motion.div>

              {/* Penetration Tests */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">
                  <Counter end={600} suffix="+" duration={3} />
                </div>
                <div className="text-gray-200 font-semibold text-base tracking-wide">
                  Penetration Tests
                </div>
              </motion.div>

              {/* Security Experts */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">
                  <Counter end={250} suffix="+" duration={3} />
                </div>
                <div className="text-gray-200 font-semibold text-base tracking-wide">
                  Security Experts
                </div>
              </motion.div>

              {/* Vulnerabilities Found */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">
                  <Counter end={15420} suffix="+" duration={3} />
                </div>
                <div className="text-gray-200 font-semibold text-base tracking-wide">
                  Vulnerabilities Found
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Offensive Security Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Offensive Security Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our red team experts hold industry-leading offensive security certifications, ensuring advanced penetration testing and ethical hacking capabilities
            </p>
          </motion.div>

          {/* Professional Certification Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center flex-wrap gap-8 lg:gap-12"
          >
            {/* eJPTv2 */}
            <img src="/Logos/ejptv2_logo.svg" alt="eJPTv2" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* eCPPT */}
            <img src="/Logos/ecppt_logo.svg" alt="eCPPT" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* OSCP */}
            <img src="/Logos/oscp_logo.svg" alt="OSCP" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* OSEP */}
            <img src="/Logos/osep_logo.svg" alt="OSEP" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* OSWP */}
            <img src="/Logos/oswp_logo.svg" alt="OSWP" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* CRTP */}
            <img src="/Logos/crtp_logo.svg" alt="CRTP" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />

            {/* CRTE */}
            <img src="/Logos/crte_logo.svg" alt="CRTE" className="h-28 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section - CrowdStrike Style */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Diagonal Red Lines Background - Exact CrowdStrike Pattern */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 200">
            <defs>
              <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 py-16 px-4">
          <div className="container max-w-6xl mx-auto text-center">

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white"
            >
              Ready to Uncover the Gaps in Your Security?
            </motion.h2>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Primary Red Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Secondary Black Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-semibold text-base transition-all duration-300"
              >
                <span>Contact us</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-relaxed"
            >
              Don't wait for a breach to happen. Get proactive protection with our comprehensive offensive security services.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OffensiveSecurityPage;