import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Network, Shield, Wifi, Server, Cloud, LineChart, CheckCircle as CircleCheck } from 'lucide-react';
import VeeamBackup from '../components/services/VeeamBackup';
import GridServices from '../components/services/GridServices';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Services | Atlas Defenders';
  }, []);

  const services = [
    {
      id: 'network',
      icon: Network,
      title: 'Professional Network Configuration',
      description: 'We design, implement, and manage enterprise-grade network infrastructure using leading technologies.',
      features: [
        'Network design and architecture planning',
        'Switch and router configuration (Cisco, Juniper, Fortinet, HP Aruba)',
        'Network segmentation and VLANs',
        'Quality of Service (QoS) implementation',
        'Network documentation and diagrams'
      ],
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'firewall',
      icon: Shield,
      title: 'Firewall Deployment & Security Architecture',
      description: 'Protect your organization with advanced firewall solutions and comprehensive security architecture.',
      features: [
        'Next-generation firewall implementation (Fortinet, Palo Alto, Sophos)',
        'Security policy design and implementation',
        'Intrusion Prevention System (IPS) configuration',
        'VPN setup and management',
        'Security audit and compliance reporting'
      ],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'wireless',
      icon: Wifi,
      title: 'Wireless Solutions',
      description: 'Design and deploy high-performance wireless networks with enterprise-grade access points and controllers.',
      features: [
        'Wireless site surveys and RF planning',
        'Enterprise Wi-Fi deployment (Cisco, MikroTik, Fortinet, HP Aruba)',
        'Wireless security implementation (WPA3, 802.1X)',
        'Guest network and captive portal setup',
        'Wireless troubleshooting and optimization'
      ],
      image: 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'virtualization',
      icon: Server,
      title: 'Virtualization Solutions',
      description: 'Optimize your IT infrastructure with enterprise virtualization platforms to improve efficiency and reduce costs.',
      features: [
        'Virtualization platform implementation (Proxmox, XCP-ng, VMware ESXi, Hyper-V)',
        'Physical to virtual (P2V) migrations',
        'Virtual machine management and optimization',
        'High availability and disaster recovery setup',
        'Storage virtualization and optimization'
      ],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamlessly integrate cloud services into your infrastructure for enhanced flexibility and scalability.',
      features: [
        'Cloud strategy and migration planning',
        'Multi-cloud implementation (Azure, AWS, GCP, OCI)',
        'Hybrid cloud architecture design',
        'Cloud security and compliance',
        'Cloud cost optimization and management'
      ],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'monitoring',
      icon: LineChart,
      title: 'Monitoring & Observability',
      description: 'Gain comprehensive visibility into your IT infrastructure with advanced monitoring and observability tools.',
      features: [
        'Monitoring platform implementation (Zabbix, Prometheus, Grafana)',
        'Custom dashboard creation and alerting',
        'Performance monitoring and capacity planning',
        'Log aggregation and analysis',
        'Network traffic analysis and anomaly detection'
      ],
      image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-20">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white mb-6"
          >
            Our Comprehensive Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Atlas Defenders offers a wide range of IT and cybersecurity services to help organizations
            protect their digital assets and optimize their infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Grid Interactive Services Section */}
      <GridServices />

      {/* Services Detail Section */}
      <section className="py-16 bg-white">
        <div className="container">
          {services.map((service, index) => {
            const { id, icon: Icon, title, description, features, image } = service;
            const isEven = index % 2 === 0;
            
            return (
              <div key={id} id={id} className="scroll-mt-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${!isEven && 'lg:flex-row-reverse'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary">
                        <Icon size={24} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
                    </div>
                    <p className="text-text-muted mb-6 text-lg">{description}</p>
                    <ul className="space-y-3 mb-6">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CircleCheck size={20} className="text-success mr-3 flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={isEven ? 'lg:order-last' : 'lg:order-first'}
                  >
                    <img 
                      src={image}
                      alt={title}
                      className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                    />
                  </motion.div>
                </div>
                {index < services.length - 1 && <hr className="border-gray-200" />}
              </div>
            );
          })}
        </div>
      </section>

      {/* Veeam Backup Section */}
      <VeeamBackup />

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white mb-6"
          >
            Ready to Transform Your IT Security?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Contact us today to discuss your specific needs and discover how our expert team can help secure
            your organization's digital infrastructure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="/contact" className="btn bg-accent hover:bg-accent/90 text-white">
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;