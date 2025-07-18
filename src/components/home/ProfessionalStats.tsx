import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const Counter = ({ end, duration = 2.5, suffix = '', prefix = '', decimals = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isComplete) {
      let startTime: number;
      const startCount = 0;
      
      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Use easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = easeOutQuart * (end - startCount) + startCount;
        
        setCount(decimals > 0 ? parseFloat(currentCount.toFixed(decimals)) : Math.floor(currentCount));
        
        if (progress >= 1) {
          setCount(end);
          setIsComplete(true);
        } else {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isInView, end, duration, decimals, isComplete]);

  return (
    <span ref={ref} className="font-bold">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </span>
  );
};

// Professional SVG Icons for Enterprise Appeal
const ProjectsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
  </svg>
);

const SatisfactionIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="m16 11 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="2" fill="currentColor" opacity="0.3"/>
  </svg>
);

const ExperienceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.2"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

const CertificationsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" stroke="currentColor" strokeWidth="2"/>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.3"/>
  </svg>
);

const SecurityShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" opacity="0.1"/>
  </svg>
);

const ProfessionalStats = () => {
  const stats = [
    {
      id: 'projects',
      icon: ProjectsIcon,
      value: 200,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Enterprise security implementations completed with zero security incidents',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'satisfaction',
      icon: SatisfactionIcon,
      value: 98.9,
      suffix: '%',
      decimals: 1,
      label: 'Client Retention',
      description: 'Long-term partnerships with Fortune 500 and government entities',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'experience',
      icon: ExperienceIcon,
      value: 15,
      suffix: '+',
      label: 'Years Excellence',
      description: 'Proven track record in mission-critical cybersecurity solutions',
      color: 'from-purple-600 to-violet-700'
    },
    {
      id: 'certifications',
      icon: CertificationsIcon,
      value: 50,
      suffix: '+',
      label: 'Expert Certifications',
      description: 'Industry-leading credentials from Cisco, Fortinet, Microsoft, AWS',
      color: 'from-orange-600 to-red-700'
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      {/* Modern White Background with Subtle Patterns */}
      <div className="absolute inset-0">
        {/* Clean white foundation */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Ultra-subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30"></div>
        
        {/* Professional geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
              <defs>
                <pattern id="modern-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
                  <circle cx="20" cy="20" r="1" fill="currentColor" className="text-primary"/>
                </pattern>
                <radialGradient id="white-spotlight" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="rgba(46, 196, 182, 0.08)" />
                  <stop offset="50%" stopColor="rgba(62, 146, 204, 0.04)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#modern-grid)" />
              <rect width="100%" height="100%" fill="url(#white-spotlight)" />
            </svg>
          </div>
        </div>

        {/* Floating modern elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 opacity-[0.015]"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-45"></div>
            </motion.div>
          ))}
        </div>

        {/* 3D Floating Network Nodes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute w-3 h-3 bg-accent/30 rounded-full border border-accent/50"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                delay: Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* 3D Security Shield Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`shield-${i}`}
              className="absolute w-8 h-8 opacity-10"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
              animate={{
                rotate: [0, 360],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                delay: Math.random() * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-primary">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </motion.div>
          ))}
        </div>

        {/* 3D Data Flow Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`flow-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 20}%`,
                top: `${20 + Math.random() * 40}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 4,
                delay: i * 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="150" height="80" className="overflow-visible">
                <motion.path
                  d={`M 0 0 Q 75 40 150 80`}
                  stroke="url(#dataGradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 4,
                    delay: i * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <defs>
                  <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2EC4B6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#2EC4B6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3E92CC" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          ))}
        </div>

        {/* 3D Hexagonal Network Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`hex-${i}`}
              className="absolute opacity-5"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + Math.random() * 40}%`,
              }}
              animate={{
                rotate: [0, 360],
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{
                duration: 25 + Math.random() * 10,
                delay: i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <svg width="40" height="40" viewBox="0 0 100 100">
                <polygon
                  points="50,5 85,25 85,75 50,95 15,75 15,25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                />
                <polygon
                  points="50,20 70,30 70,70 50,80 30,70 30,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-secondary"
                />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Subtle accent lighting */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Left Side - Executive Messaging */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 mb-8 border border-gray-200/60 shadow-lg shadow-gray-100/50"
            >
              <SecurityShieldIcon />
              <span className="text-gray-700 text-sm font-semibold tracking-wider uppercase ml-3">
                Enterprise Excellence
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-[0.9]"
            >
              Trusted by
              <span className="block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent mt-2">
                Industry Leaders
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl font-light"
            >
              When Fortune 500 companies and government institutions need uncompromising cybersecurity, 
              they choose Atlas Defenders. Our proven methodology and enterprise-grade solutions have 
              protected billions in digital assets across critical infrastructure.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/about"
                className="group inline-flex items-center bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-accent/20 transition-all duration-300 transform hover:scale-105"
              >
                <span>Executive Overview</span>
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </Link>
              
              <Link 
                to="/contact"
                className="group inline-flex items-center bg-white/80 hover:bg-white backdrop-blur-xl text-primary px-8 py-4 rounded-full border border-gray-200/60 hover:border-gray-300/60 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                <span>Schedule Consultation</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Premium Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.6 + (index * 0.2),
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Premium Card Container */}
                  <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl p-6 border border-gray-200/40 hover:border-gray-300/60 transition-all duration-700 hover:bg-white shadow-xl hover:shadow-2xl overflow-hidden">
                    {/* Subtle gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 rounded-3xl`}></div>
                    
                    {/* Professional Icon Container */}
                    <motion.div
                      className="relative z-10 mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} p-4 shadow-2xl shadow-black/10`}>
                        <IconComponent />
                      </div>
                    </motion.div>
                    
                    {/* Statistics Display */}
                    <div className="relative z-10 mb-4">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2 tracking-tight">
                        <Counter 
                          end={stat.value} 
                          suffix={stat.suffix}
                          decimals={stat.decimals || 0}
                          duration={3}
                        />
                      </div>
                      <h3 className="text-base font-semibold text-gray-800 mb-2 tracking-wide">
                        {stat.label}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        {stat.description}
                      </p>
                    </div>
                    
                    {/* Premium accent indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-accent to-secondary rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.7,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Executive Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-2xl rounded-full px-8 py-4 border border-gray-200/60 shadow-lg shadow-gray-100/50">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-4 animate-pulse"></div>
            <span className="text-gray-700 font-medium text-lg tracking-wide">
              Protecting 150+ organizations across Morocco and North Africa
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalStats;