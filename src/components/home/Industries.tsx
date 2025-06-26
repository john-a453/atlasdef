import { motion } from 'framer-motion';
import { Building2, GraduationCap, HeartPulse, LandPlot, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    id: 'enterprise',
    icon: Building2,
    title: 'Enterprise',
    description: 'Comprehensive security solutions for large organizations with complex infrastructure needs.'
  },
  {
    id: 'sme',
    icon: Building,
    title: 'SMEs',
    description: 'Tailored, cost-effective security packages for small and medium-sized businesses.'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    description: 'Specialized solutions for schools and universities to protect student data and research.'
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'HIPAA-compliant security for protecting sensitive patient information and medical systems.'
  },
  {
    id: 'government',
    icon: LandPlot,
    title: 'Government',
    description: 'High-security solutions for government agencies and public sector organizations.'
  }
];

const Industries = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2 className="mb-4">Industries We Serve</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We provide specialized IT and cybersecurity solutions for various industries, each with unique requirements and compliance needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {industries.map((industry, index) => {
            const { icon: Icon, title, description } = industry;
            
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-text-muted">{description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/industries" className="btn btn-outline">
            Learn More About Industry Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries;