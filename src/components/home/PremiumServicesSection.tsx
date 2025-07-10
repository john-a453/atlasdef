import { motion } from 'framer-motion';
import { Shield, Network, Cloud, Eye, Server, LineChart, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity & SOC',
    subtitle: 'Advanced Threat Protection',
    description: 'Enterprise-grade security operations center with 24/7 monitoring, threat detection, and incident response capabilities.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    gradient: 'from-blue-600 via-purple-600 to-indigo-700',
    glowColor: 'shadow-blue-500/20'
  },
  {
    id: 'network',
    icon: Network,
    title: 'Network Infrastructure',
    subtitle: 'Enterprise Networking',
    description: 'Professional network design, implementation, and management using industry-leading technologies and best practices.',
    image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    glowColor: 'shadow-emerald-500/20'
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Integration',
    subtitle: 'Multi-Cloud Solutions',
    description: 'Seamless cloud adoption and hybrid infrastructure with AWS, Azure, GCP, and Oracle Cloud platforms.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    gradient: 'from-orange-600 via-red-600 to-pink-700',
    glowColor: 'shadow-orange-500/20'
  },
  {
    id: 'monitoring',
    icon: Eye,
    title: 'AI-Powered Monitoring',
    subtitle: 'Intelligent Observability',
    description: 'Advanced monitoring and analytics with predictive insights, automated alerting, and comprehensive dashboards.',
    image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-700',
    glowColor: 'shadow-violet-500/20'
  },
  {
    id: 'virtualization',
    icon: Server,
    title: 'Virtualization',
    subtitle: 'Infrastructure Optimization',
    description: 'Modern virtualization solutions with high availability, disaster recovery, and performance optimization.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    gradient: 'from-slate-600 via-gray-600 to-zinc-700',
    glowColor: 'shadow-slate-500/20'
  },
  {
    id: 'analytics',
    icon: LineChart,
    title: 'Business Intelligence',
    subtitle: 'Data-Driven Insights',
    description: 'Transform your data into actionable insights with advanced analytics, reporting, and business intelligence solutions.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    gradient: 'from-amber-600 via-yellow-600 to-orange-700',
    glowColor: 'shadow-amber-500/20'
  }
];

// Floating 3D Elements Component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Geometric Shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className={`w-${4 + Math.floor(Math.random() * 4)} h-${4 + Math.floor(Math.random() * 4)} bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg transform rotate-45 opacity-20`}
          />
        </motion.div>
      ))}
      
      {/* Floating Orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-3 h-3 bg-gradient-to-r from-accent/30 to-secondary/30 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Network Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2EC4B6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3E92CC" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0F2C59" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={`connection-${i}`}
            d={`M ${Math.random() * 100}% ${Math.random() * 100}% Q ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const PremiumServicesSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 overflow-hidden">
      {/* Background Elements */}
      <FloatingElements />
      
      {/* Glassmorphism Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent/3 to-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
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
            className="inline-flex items-center bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 mb-8 border border-gray-200/60 shadow-lg shadow-gray-100/50"
          >
            <Sparkles size={20} className="text-accent mr-3" />
            <span className="text-gray-700 text-sm font-semibold tracking-wider uppercase">
              Professional IT Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
          >
            We Deliver the
            <span className="block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent mt-2">
              Best Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Enterprise-grade IT solutions designed to address specific business needs, streamline operations, 
            and drive growth. Our comprehensive services combine cutting-edge technology with proven expertise.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-700 hover:bg-white/80 shadow-xl hover:shadow-2xl">
                  {/* Background Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}></div>
                    
                    {/* Floating Icon */}
                    <motion.div
                      className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={28} className="text-white" />
                    </motion.div>
                    
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Service Title on Image */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-white/90 text-sm font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Read More Button */}
                    <motion.button
                      className="group/btn inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
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
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                  />
                  
                  {/* Premium Accent */}
                  <motion.div
                    className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
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
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Shield size={20} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Network size={20} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Cloud size={20} className="text-white" />
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-primary mb-4">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Our expert team is ready to design and implement solutions that drive your business forward. 
              Let's discuss how we can help you achieve your technology goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="btn bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
              </Link>
              <Link 
                to="/contact" 
                className="btn bg-white/80 hover:bg-white backdrop-blur-xl text-primary px-8 py-4 rounded-full border border-gray-200/60 hover:border-gray-300/60 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServicesSection;