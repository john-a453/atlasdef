import { motion } from 'framer-motion';
import { Building2, GraduationCap, HeartPulse, LandPlot, Building, ArrowRight, CheckCircle, Shield, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    id: 'enterprise',
    icon: Building2,
    title: 'Enterprise',
    subtitle: 'Fortune 500 & Large Corporations',
    description: 'Comprehensive security solutions for large organizations with complex infrastructure needs and regulatory requirements.',
    features: ['Zero-Trust Architecture', 'Advanced Threat Protection', 'Compliance Management', '24/7 SOC Services'],
    clients: '50+',
    color: 'from-blue-600 to-indigo-700',
    bgColor: 'bg-blue-50',
    image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: 'sme',
    icon: Building,
    title: 'SMEs',
    subtitle: 'Small & Medium Enterprises',
    description: 'Tailored, cost-effective security packages for growing businesses that need enterprise-grade protection.',
    features: ['Managed Security', 'Cloud Protection', 'Endpoint Security', 'Security Training'],
    clients: '80+',
    color: 'from-emerald-600 to-teal-700',
    bgColor: 'bg-emerald-50',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    subtitle: 'Universities & Schools',
    description: 'Specialized solutions for educational institutions to protect student data and research while maintaining accessibility.',
    features: ['Student Data Protection', 'Research Security', 'Campus Networks', 'BYOD Management'],
    clients: '25+',
    color: 'from-purple-600 to-violet-700',
    bgColor: 'bg-purple-50',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare',
    subtitle: 'Hospitals & Medical Centers',
    description: 'HIPAA-compliant security for protecting sensitive patient information and ensuring system availability.',
    features: ['HIPAA Compliance', 'Medical Device Security', 'Patient Data Protection', 'Critical System Uptime'],
    clients: '15+',
    color: 'from-red-600 to-pink-700',
    bgColor: 'bg-red-50',
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: 'government',
    icon: LandPlot,
    title: 'Government',
    subtitle: 'Public Sector & Agencies',
    description: 'High-security solutions for government agencies and public sector organizations with critical infrastructure.',
    features: ['Critical Infrastructure', 'Nation-State Defense', 'Secure Communications', 'Compliance Frameworks'],
    clients: '10+',
    color: 'from-orange-600 to-amber-700',
    bgColor: 'bg-orange-50',
    image: 'https://images.pexels.com/photos/1652361/pexels-photo-1652361.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  }
];

const FloatingElement = ({ delay, children, className = "" }: { delay: number, children: React.ReactNode, className?: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 6 + Math.random() * 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const Industries = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Modern Background with 3D Elements */}
      <div className="absolute inset-0">
        {/* Clean foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-blue-50/20"></div>
        
        {/* Floating geometric shapes */}
        <FloatingElement delay={0} className="top-20 left-10 w-20 h-20 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-45"></div>
        </FloatingElement>
        
        <FloatingElement delay={2} className="top-40 right-20 w-16 h-16 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-accent to-primary rounded-full"></div>
        </FloatingElement>
        
        <FloatingElement delay={4} className="bottom-32 left-1/4 w-12 h-12 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-secondary to-accent rounded-lg transform rotate-12"></div>
        </FloatingElement>
        
        <FloatingElement delay={1} className="bottom-20 right-1/3 w-24 h-24 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-accent to-secondary rounded-3xl transform -rotate-12"></div>
        </FloatingElement>

        {/* Network connection lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`connection-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + Math.random() * 40}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{
                duration: 5,
                delay: i * 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="120" height="60" className="overflow-visible">
                <motion.path
                  d={`M 0 30 Q 60 ${10 + Math.random() * 40} 120 30`}
                  stroke="url(#industryGradient)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 5,
                    delay: i * 1.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <defs>
                  <linearGradient id="industryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2EC4B6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3E92CC" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0F2C59" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        {/* Modern Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 mb-8 border border-primary/20"
          >
            <Shield size={20} className="text-primary mr-3" />
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Industry Expertise</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
          >
            Specialized Solutions for
            <span className="block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent mt-2">
              Every Industry
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We understand that each industry faces unique security challenges. Our specialized solutions 
            are tailored to meet the specific compliance, operational, and security requirements of your sector.
          </motion.p>
        </motion.div>

        {/* Modern Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-gray-200">
                  {/* Background Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}></div>
                    
                    {/* Floating Icon */}
                    <motion.div
                      className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={28} className="text-white" />
                    </motion.div>
                    
                    {/* Client Count Badge */}
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 border border-white/30">
                      <span className="text-white font-semibold text-sm">{industry.clients} Clients</span>
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{industry.title}</h3>
                      <p className="text-white/90 text-sm font-medium">{industry.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {industry.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * i }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Action Button */}
                    <motion.button
                      className={`w-full ${industry.bgColor} hover:bg-opacity-80 text-gray-800 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center group-hover:shadow-lg`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Learn More</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </motion.button>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                  />
                </div>
                
                {/* Floating Accent */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${industry.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Modern CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 border border-primary/10">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Users size={20} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Shield size={20} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Zap size={20} className="text-white" />
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-primary mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              We work with organizations across all sectors. Our security experts can develop 
              customized solutions for your specific industry requirements and compliance needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/industries" 
                className="btn bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Explore All Industries
              </Link>
              <Link 
                to="/contact" 
                className="btn bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-full border border-primary/20 hover:border-primary/30 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Custom Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;