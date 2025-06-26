import { motion } from 'framer-motion';
import { Shield, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background3D from './Background3D';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Background3D />
      
      {/* Content overlay */}
      <div className="relative z-10 container text-white h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-primary/20 rounded-full px-6 py-3 mb-8 border border-accent/30"
            >
              <Shield size={20} className="text-accent mr-3" />
              <span className="text-sm font-medium">Trusted Cybersecurity Experts</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white mb-8 leading-tight text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              Securing Your{' '}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Digital Future
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-200 mb-10 max-w-xl leading-relaxed"
            >
              Atlas Defenders provides enterprise-grade IT and cybersecurity solutions to protect your organization's most valuable digital assets in an evolving threat landscape.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                to="/contact" 
                className="btn bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get a Free Consultation
              </Link>
              <Link 
                to="/services" 
                className="btn bg-primary/30 border-2 border-white/30 text-white hover:bg-primary/50 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Explore Our Services
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Floating elements around the image */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shadow-xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Shield size={24} className="text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-xl"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </motion.div>

              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl"></div>
                <img 
                  src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Cybersecurity specialist working" 
                  className="relative z-10 rounded-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;