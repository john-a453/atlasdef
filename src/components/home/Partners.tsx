import { motion } from 'framer-motion';

const Partners = () => {
  // Organize logos into 3 rows for infinite scrolling
  const row1Logos = [
    { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1200px-Cisco_logo.svg.png' },
    { name: 'Juniper Networks', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Juniper_Networks_logo.svg/2560px-Juniper_Networks_logo.svg.png' },
    { name: 'HP Aruba', logo: 'https://cdn.1min30.com/wp-content/uploads/2018/07/Aruba-logo.jpg' },
    { name: 'TP-Link', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TP-Link_logo.svg/2560px-TP-Link_logo.svg.png' },
    { name: 'Ubiquiti', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ubiquiti_Networks_2016.svg/2560px-Ubiquiti_Networks_2016.svg.png' },
    { name: 'Huawei', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei.svg/2560px-Huawei.svg.png' },
    { name: 'Fortinet', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/2560px-Fortinet_logo.svg.png' },
    { name: 'Palo Alto Networks', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palo_Alto_Networks_logo.svg/2560px-Palo_Alto_Networks_logo.svg.png' },
    { name: 'pfSense', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/PfSense_logo.png/1200px-PfSense_logo.png' },
    { name: 'OPNsense', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/OPNsense_logo.png/1200px-OPNsense_logo.png' },
    { name: 'Sophos', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sophos_logo.svg/2560px-Sophos_logo.svg.png' }
  ];

  const row2Logos = [
    { name: 'Amazon Web Services', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
    { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png' },
    { name: 'Google Cloud Platform', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png' },
    { name: 'Oracle Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
    { name: 'VMware', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png' },
    { name: 'Nutanix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nutanix_logo.svg/2560px-Nutanix_logo.svg.png' },
    { name: 'Microsoft Hyper-V', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
    { name: 'Proxmox', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Proxmox-logo.svg/2560px-Proxmox-logo.svg.png' },
    { name: 'XCP-ng', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/XCP-ng_logo.svg/2560px-XCP-ng_logo.svg.png' },
    { name: 'Zabbix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Zabbix_logo.svg/2560px-Zabbix_logo.svg.png' },
    { name: 'PRTG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/PRTG_Network_Monitor_Logo.png/1200px-PRTG_Network_Monitor_Logo.png' }
  ];

  const row3Logos = [
    { name: 'Prometheus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2560px-Prometheus_software_logo.svg.png' },
    { name: 'Grafana', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/1024px-Grafana_icon.svg.png' },
    { name: 'Nagios', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Nagios_logo.png/1200px-Nagios_logo.png' },
    { name: 'Wazuh', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Wazuh_logo.svg/2560px-Wazuh_logo.svg.png' },
    { name: 'CrowdStrike', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/CrowdStrike_logo.svg/2560px-CrowdStrike_logo.svg.png' },
    { name: 'Okta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Okta_Logo.svg/2560px-Okta_Logo.svg.png' },
    { name: 'Splunk', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Splunk_logo.svg/2560px-Splunk_logo.svg.png' },
    { name: 'Nessus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tenable_logo.svg/2560px-Tenable_logo.svg.png' },
    { name: 'Qualys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Qualys_logo.svg/2560px-Qualys_logo.svg.png' },
    { name: 'Windows Server', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png' },
    { name: 'Red Hat', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/2560px-Red_Hat_logo.svg.png' }
  ];

  const LogoRow = ({ logos, direction, speed = 30 }: { logos: any[], direction: 'left' | 'right', speed?: number }) => {
    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];
    
    return (
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex items-center space-x-12"
          animate={{
            x: direction === 'left' ? [0, -100 * logos.length] : [-100 * logos.length, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          style={{ width: `${200 * logos.length}%` }}
        >
          {duplicatedLogos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center group"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="max-h-12 max-w-full object-contain grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Trusted Technology Partners
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            We collaborate with industry-leading technology providers to deliver comprehensive solutions across all aspects of IT infrastructure and security.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Row 1 - Left to Right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <LogoRow logos={row1Logos} direction="left" speed={35} />
          </motion.div>

          {/* Row 2 - Right to Left */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <LogoRow logos={row2Logos} direction="right" speed={40} />
          </motion.div>

          {/* Row 3 - Left to Right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <LogoRow logos={row3Logos} direction="left" speed={32} />
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Partners;