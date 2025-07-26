import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image on Right Side */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex">
          {/* Left side - Pure black background */}
          <div className="w-1/2 bg-black"></div>
          
          {/* Right side - Image with overlay */}
          <div className="w-1/2 relative">
            <img 
              src="/Logos/cybersecurity_image.jpg" 
              alt="Cybersecurity" 
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay to blend image with black background */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black/90"></div>
          </div>
        </div>
        
        {/* Additional blur effect in the middle */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Service Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
                    Cyber Defense Services
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] text-white"
                >
                  Strengthen Your{" "}
                  <span className="text-cyan-400">Infrastructure</span>
                  <br />
                  Before the Attack Comes.
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg text-gray-300 leading-relaxed max-w-xl"
                >
                  We design and deploy next-generation security solutions — from firewalls and Zero Trust to EDR, XDR, and SIEM — building resilient infrastructures that stop threats before they strike.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="pt-4"
                >
                  <Link 
                    to="/contact"
                    className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Ready to Fortify Your Cyber Defense Stack?
                  </Link>
                </motion.div>
              </motion.div>
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