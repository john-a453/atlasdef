import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Clock, Folder, Headphones, Shield, Award, Users, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  duration: number;
  label: string;
  suffix?: string;
  icon: React.ElementType;
  color?: string;
  delay?: number;
  description?: string;
}

const Counter = ({ 
  end, 
  duration, 
  label, 
  suffix = '', 
  icon: Icon, 
  color = 'bg-secondary', 
  delay = 0,
  description = ''
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref: counterRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const controls = useAnimation();
  const textControls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      controls.start('visible');
      textControls.start('visible');
      
      // Add a delay before starting the counter
      const timer = setTimeout(() => {
        let startTime: number | null = null;
        let animationFrameId: number;

        const updateCount = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const percentage = Math.min(progress / (duration * 1000), 1);
          
          // Improved easing function (elastic ease-out)
          const easedProgress = percentage === 1 
            ? 1 
            : 1 - Math.pow(2, -10 * percentage) * Math.sin((percentage * 10 - 0.75) * (2 * Math.PI) / 3);
          
          const currentCount = Math.floor(easedProgress * end);
          setCount(currentCount);

          if (percentage < 1) {
            animationFrameId = requestAnimationFrame(updateCount);
          }
        };

        animationFrameId = requestAnimationFrame(updateCount);
      }, delay * 1000);

      return () => {
        clearTimeout(timer);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [inView, end, duration, delay, controls, textControls, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: delay * 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
        delay: 0.1 + (delay * 0.1)
      }
    }
  };
  
  const numberVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2 + (delay * 0.1)
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.3 + (delay * 0.1)
      }
    }
  };

  return (
    <motion.div
      ref={counterRef}
      className={`flex flex-col items-center p-6 bg-primary bg-opacity-95 rounded-xl shadow-xl backdrop-blur-sm transition-all duration-500 border border-gray-800 hover:border-secondary/50 overflow-hidden relative group`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Background glow effect */}
      <motion.div 
        className={`absolute inset-0 ${color.replace('bg-', 'bg-')} opacity-10 blur-xl`}
        animate={{
          scale: hovered ? 1.2 : 1,
          opacity: hovered ? 0.2 : 0.1,
        }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Animated border gradient */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent)`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: hovered ? ['0% 0%', '200% 0%'] : '0% 0%',
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      
      <motion.div
        className={`mb-6 p-5 rounded-full ${color} text-text-light relative z-10`}
        variants={iconVariants}
      >
        <motion.div
          animate={{
            rotate: hovered ? [0, 15, -15, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <Icon size={36} />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="text-5xl font-bold mb-3 text-text-light flex items-baseline relative z-10"
        variants={numberVariants}
      >
        <AnimatePresence>
          <motion.span
            key={count}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {count}
          </motion.span>
        </AnimatePresence>
        <motion.span 
          className="ml-1 text-secondary"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {suffix}
        </motion.span>
      </motion.div>
      
      <motion.p 
        className="text-text-light text-center font-medium text-lg mb-2 relative z-10"
        variants={textVariants}
      >
        {label}
      </motion.p>
      
      {description && (
        <motion.p 
          className="text-text-light/70 text-center text-sm relative z-10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: hovered ? 1 : 0, 
            height: hovered ? 'auto' : 0,
            marginTop: hovered ? 8 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

const SupportDisplay = () => {
  const { ref: containerRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [blinking, setBlinking] = useState(false);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Start blinking effect after component is visible
      const timer = setTimeout(() => {
        setBlinking(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [inView, controls]);
  
  // Blinking effect for 24/7 text
  useEffect(() => {
    if (!blinking) return;
    
    const interval = setInterval(() => {
      setBlinking(prev => !prev);
      setTimeout(() => setBlinking(true), 100);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [blinking]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.4,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
        delay: 0.5
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.6
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col items-center p-6 bg-primary bg-opacity-95 rounded-xl shadow-xl backdrop-blur-sm transition-all duration-500 border border-gray-800 hover:border-green-500/50 overflow-hidden relative group"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Background glow effect */}
      <motion.div 
        className="absolute inset-0 bg-green-500 opacity-10 blur-xl"
        animate={{
          scale: hovered ? 1.2 : 1,
          opacity: hovered ? 0.2 : 0.1,
        }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Animated border gradient */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.2), transparent)`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: hovered ? ['0% 0%', '200% 0%'] : '0% 0%',
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 opacity-0"
        animate={{
          opacity: [0, 0.1, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      
      <motion.div
        className="mb-6 p-5 rounded-full bg-green-500 text-text-light relative z-10"
        variants={iconVariants}
      >
        <motion.div
          animate={{
            rotate: hovered ? [0, 15, -15, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <Headphones size={36} />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="text-5xl font-bold mb-3 text-text-light flex items-baseline relative z-10"
        variants={textVariants}
        animate={{
          opacity: blinking ? [1, 0.5, 1] : 1,
          textShadow: blinking ? ['0 0 0px rgba(34, 197, 94, 0)', '0 0 10px rgba(34, 197, 94, 0.8)', '0 0 0px rgba(34, 197, 94, 0)'] : '0 0 0px rgba(34, 197, 94, 0)',
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span className="text-green-400">24/7</span>
      </motion.div>
      
      <motion.p 
        className="text-text-light text-center font-medium text-lg mb-2 relative z-10"
        variants={textVariants}
      >
        Support Availability
      </motion.p>
      
      <motion.p 
        className="text-text-light/70 text-center text-sm relative z-10"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: hovered ? 1 : 0, 
          height: hovered ? 'auto' : 0,
          marginTop: hovered ? 8 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        Our team is always ready to assist you
      </motion.p>
    </motion.div>
  );
};

const StatsSection = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  const controls = useAnimation();
  const titleControls = useAnimation();
  const [activeTab, setActiveTab] = useState('main');
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      titleControls.start('visible');
    } else {
      controls.start('hidden');
      titleControls.start('hidden');
    }
  }, [inView, controls, titleControls]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.6
      }
    }
  };
  
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 }
    }
  };
  
  // Additional stats for the expanded view
  const additionalStats = [
    {
      id: 'clients',
      icon: Users,
      end: 150,
      suffix: '+',
      label: 'Satisfied Clients',
      color: 'bg-blue-500',
      description: 'Businesses that trust our services'
    },
    {
      id: 'certifications',
      icon: Award,
      end: 25,
      suffix: '+',
      label: 'Industry Certifications',
      color: 'bg-purple-500',
      description: 'Professional qualifications'
    },
    {
      id: 'response',
      icon: Zap,
      end: 30,
      suffix: 'min',
      label: 'Avg. Response Time',
      color: 'bg-amber-500',
      description: 'Fast incident response'
    },
    {
      id: 'security',
      icon: Shield,
      end: 99,
      suffix: '%',
      label: 'Security Success Rate',
      color: 'bg-red-500',
      description: 'Proven protection record'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dynamic background with animated gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#0a1f3d] to-[#192333] z-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      />
      
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '30px 30px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-secondary opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={sectionRef}
          className="text-center mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={titleControls}
        >
          <motion.div 
            className="inline-block mb-2 px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-secondary text-sm font-medium">Proven Excellence</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-text-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Track Record
          </motion.h2>
          
          <motion.p 
            className="text-text-light text-opacity-80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Delivering excellence in cybersecurity and IT solutions with proven results
          </motion.p>
        </motion.div>
        
        {/* Tab navigation for expanded stats */}
        <motion.div 
          className="flex justify-center mb-10"
          variants={tabVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="inline-flex bg-primary/50 backdrop-blur-sm rounded-full p-1 border border-gray-800">
            <motion.button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'main' ? 'bg-secondary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('main')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Key Metrics
            </motion.button>
            <motion.button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'expanded' ? 'bg-secondary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('expanded')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Detailed Stats
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'main' ? (
            <motion.div
              key="main"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={sectionVariants}
              initial="hidden"
              animate={controls}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
            >
              <Counter
                end={15}
                duration={2}
                label="Years of Experience"
                suffix="+"
                icon={Clock}
                color="bg-blue-500"
                delay={0}
                description="Dedicated to cybersecurity excellence"
              />
              <Counter
                end={200}
                duration={2.5}
                label="Projects Delivered"
                suffix="+"
                icon={Folder}
                color="bg-purple-500"
                delay={0.2}
                description="Successful implementations"
              />
              <SupportDisplay />
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={sectionVariants}
              initial="hidden"
              animate={controls}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            >
              {additionalStats.map((stat, index) => (
                <Counter
                  key={stat.id}
                  end={stat.end}
                  duration={2 + (index * 0.2)}
                  label={stat.label}
                  suffix={stat.suffix}
                  icon={stat.icon}
                  color={stat.color}
                  delay={index * 0.1}
                  description={stat.description}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Call to action button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: inView ? 1 : 0, 
            y: inView ? 0 : 20 
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a 
            href="/about" 
            className="inline-flex items-center px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-full transition-all duration-300 group"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Our Success
            <motion.span 
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                repeatType: 'loop',
                ease: 'easeInOut' 
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;