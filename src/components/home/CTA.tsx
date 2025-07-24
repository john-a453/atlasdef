import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 md:p-16 text-white text-center relative overflow-hidden"
        >
          {/* Background Shapes */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Shield size={32} className="text-white" />
              </div>
            </div>
            
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 max-w-xl mx-auto">
              Ready to enhance your organization's security posture?
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you identify vulnerabilities and implement robust security solutions tailored to your organization's needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary hover:bg-white/90">
                Schedule a Consultation
              </Link>
              <Link to="/services" className="btn bg-transparent border-2 border-white/40 text-white hover:bg-white/10">
                Explore Our Services <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;