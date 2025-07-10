import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Professional Datacenter Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          alt="Professional IT Datacenter"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability - matching Atek style */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
      </div>

      {/* Floating geometric shapes - exact Atek style */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blue circle - top right */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Medium purple circle - bottom left */}
        <motion.div
          className="absolute bottom-32 left-32 w-64 h-64 bg-purple-500/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Small accent circles */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-accent/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-400/10 rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Main Content - Exact Atek Layout */}
      <div className="container relative z-10 text-white">
        <div className="max-w-4xl">
          {/* Professional Tagline with Arrow - Exact Atek Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center mb-8"
          >
            <motion.div
              className="w-12 h-0.5 bg-white mr-4"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <span className="text-lg font-normal text-white tracking-wide">
              Dynamic Security, Dynamic Results.
            </span>
          </motion.div>

          {/* Main Heading - Exact Atek Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight"
          >
            <span className="block text-white font-bold">Precision IT Solutions,</span>
            <span className="block text-white mt-2 font-bold">Tailored For You</span>
          </motion.h1>

          {/* Professional Subtitle - Exact Atek Style */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-normal"
          >
            Welcome to Atlas Defenders where we specialize in delivering tailored 
            cybersecurity and IT infrastructure solutions.
          </motion.p>

          {/* Professional Action Buttons - Exact Atek Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            {/* Primary CTA - Blue Button (Exact Atek Style) */}
            <Link 
              to="/about"
              className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Discover More</span>
              <motion.div
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </Link>

            {/* Secondary CTA - Outline Button (Exact Atek Style) */}
            <Link 
              to="/services"
              className="group inline-flex items-center bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <span>Our Services</span>
              <motion.div
                className="ml-3"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-3 font-light">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;