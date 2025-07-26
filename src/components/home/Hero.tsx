import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      badge: "Cyber Defense Services",
      title: "Strengthen Your",
      titleHighlight: "Infrastructure",
      titleEnd: "Before the Attack Comes.",
      description: "We design and deploy next-generation security solutions — from firewalls and Zero Trust to EDR, XDR, and SIEM — building resilient infrastructures that stop threats before they strike.",
      cta: "Ready to Fortify Your Cyber Defense Stack?",
      image: "/Logos/cybersecurity_image.jpg",
      alt: "Cybersecurity",
      theme: "cyan",
      badgeColor: "text-cyan-400",
      titleHighlightColor: "text-cyan-400",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
      overlayColor: "from-black via-black/40 to-transparent"
    },
    {
      badge: "24/7 SOC Services",
      title: "Always Watching.",
      titleHighlight: "Always Protecting",
      titleEnd: "— 24/7.",
      description: "Our global Security Operations Center (SOC) monitors your systems around the clock — detecting attacks, stopping breaches, and keeping your business one step ahead.",
      cta: "Start 24/7 Protection Today",
      image: "/Logos/xdr_image.png",
      alt: "XDR Security",
      theme: "cyan",
      badgeColor: "text-cyan-400",
      titleHighlightColor: "text-cyan-400",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
      overlayColor: "from-black via-black/40 to-transparent"
    },
    {
      badge: "Offensive Security Services",
      title: "Think You're Safe?",
      titleHighlight: "Let's Put It",
      titleEnd: "to the Test.",
      description: "Atlas Defenders simulates real-world attacks to uncover your vulnerabilities before malicious actors do. From red teaming to advanced penetration testing — we break in before they can.",
      cta: "Challenge Your Defenses",
      image: "/Logos/hacker_logo.svg",
      alt: "Offensive Security",
      theme: "red",
      badgeColor: "text-red-400",
      titleHighlightColor: "text-red-400",
      buttonColor: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600",
      overlayColor: "from-black via-red-900/30 to-transparent"
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    })
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.1
    },
    center: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.9
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex">
          {/* Left side - Pure black background */}
          <div className="w-1/2 bg-black"></div>
          
          {/* Right side - Animated Images */}
          <div className="w-1/2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                className="absolute inset-0"
              >
                <img 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
                {/* Dynamic gradient overlay based on slide theme */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].overlayColor}`}></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Additional blur effect in the middle */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      </div>

      {/* Main Content with Smooth Transitions */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={currentSlide}>
                <motion.div
                  key={currentSlide}
                  custom={currentSlide}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    staggerChildren: 0.1
                  }}
                  className="space-y-6"
                >
                  {/* Service Category Badge */}
                  <motion.div
                    variants={{
                      enter: { opacity: 0, y: 20 },
                      center: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 }
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className={`${slides[currentSlide].badgeColor} text-sm font-semibold uppercase tracking-widest`}>
                      {slides[currentSlide].badge}
                    </span>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h1
                    variants={{
                      enter: { opacity: 0, y: 30 },
                      center: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -30 }
                    }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-white"
                  >
                    {slides[currentSlide].title}{" "}
                    <span className={slides[currentSlide].titleHighlightColor}>{slides[currentSlide].titleHighlight}</span>
                    <br />
                    {slides[currentSlide].titleEnd}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={{
                      enter: { opacity: 0, y: 20 },
                      center: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 }
                    }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-300 leading-relaxed max-w-xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    variants={{
                      enter: { opacity: 0, y: 20, scale: 0.9 },
                      center: { opacity: 1, y: 0, scale: 1 },
                      exit: { opacity: 0, y: -20, scale: 0.9 }
                    }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="pt-4"
                  >
                    <Link 
                      to="/contact"
                      className={`inline-block ${slides[currentSlide].buttonColor} text-white px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105`}
                    >
                      {slides[currentSlide].cta}
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side - Space for image (handled by absolute positioning) */}
            <div className="lg:col-span-5">
              {/* This space allows the image to show through */}
            </div>
          </div>
        </div>
      </div>

      {/* CrowdStrike-Style Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-4 px-6 shadow-lg border-t-4 border-blue-600">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                  Live Security Monitor
                </span>
              </div>
              <span className="text-gray-800 font-medium">
                Advanced Threat Detection: Protecting Against SOPHISTICATED CYBER ATTACKS
              </span>
            </div>
            <Link 
              to="/services" 
              className="text-blue-600 hover:text-blue-800 font-bold text-sm uppercase tracking-wider transition-colors duration-300 flex items-center"
            >
              Learn More
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;