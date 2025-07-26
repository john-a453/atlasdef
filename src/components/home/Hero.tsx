import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-blue-800 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }} />
        </div>
      </div>

      {/* Main Content - CrowdStrike Style */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Content - Identical to CrowdStrike */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Service Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
                    Cybersecurity Services
                  </span>
                </motion.div>

                {/* Main Headline - CrowdStrike Style */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] text-white"
                >
                  Expose, address,
                  <br />
                  and mitigate cyber{" "}
                  <span className="text-cyan-400">risks</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg text-gray-300 leading-relaxed max-w-xl"
                >
                  Identify, contain, and prevent cyber threats with advanced intelligence and expert-led services.
                </motion.p>

                {/* CTA Button - CrowdStrike Red Style but Blue */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="pt-4"
                >
                  <Link 
                    to="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Contact us
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Visual space for the character */}
            <div className="lg:col-span-6">
              {/* This space is filled by the absolute positioned elements above */}
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