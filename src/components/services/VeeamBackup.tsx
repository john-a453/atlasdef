import { motion } from 'framer-motion';
import { Cloud as CloudBackup, Server, Cloud, Shield, LineChart, Database, Clock2 as Clock24, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VeeamBackup = () => {
  const services = [
    {
      icon: Server,
      title: 'VMware & Hyper-V Backup',
      description: 'Enterprise-grade backup solutions for virtual environments with instant recovery capabilities.'
    },
    {
      icon: Database,
      title: 'Microsoft 365 Backup',
      description: 'Complete protection for Exchange Online, SharePoint Online, and OneDrive for Business data.'
    },
    {
      icon: Cloud,
      title: 'Disaster Recovery as a Service',
      description: 'Automated DR orchestration with verified recoverability and minimal downtime.'
    },
    {
      icon: Shield,
      title: 'Ransomware Protection',
      description: 'Advanced threat detection and immutable backups to ensure data integrity and quick recovery.'
    },
    {
      icon: CloudBackup,
      title: 'Cloud Backup',
      description: 'Secure cloud backup to AWS, Azure, and other cloud providers with optimized data transfer.'
    },
    {
      icon: LineChart,
      title: 'Monitoring & Reporting',
      description: 'Comprehensive monitoring and analytics for backup infrastructure and compliance reporting.'
    }
  ];

  return (
    <section id="veeam-backup" className="py-16 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Enterprise Backup & Disaster Recovery with Veeam</h2>
          <p className="text-lg text-text-muted max-w-4xl mx-auto">
            In today's digital landscape, data protection is crucial for business continuity. 
            As certified Veeam partners, we deliver enterprise-grade backup and disaster recovery 
            solutions that ensure your critical data is always protected and recoverable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-text-muted">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Veeam_logo.png"
            alt="Veeam Logo"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/VMWARE_logo.svg"
            alt="VMware Logo"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft Logo"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            alt="AWS Logo"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
            alt="Azure Logo"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        {/* Why Choose Us */}
        <div className="bg-background rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Atlas Defenders</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <Shield size={24} />
              </div>
              <h4 className="font-semibold mb-2">Certified Expertise</h4>
              <p className="text-text-muted">Veeam Certified Engineers with years of enterprise backup experience</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <Clock24 size={24} />
              </div>
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-text-muted">Round-the-clock monitoring and emergency recovery assistance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <Settings size={24} />
              </div>
              <h4 className="font-semibold mb-2">Customized Strategy</h4>
              <p className="text-text-muted">Tailored backup solutions aligned with your business objectives</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/contact" 
            className="btn btn-primary inline-flex items-center"
          >
            Request a Free Backup Audit
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VeeamBackup;