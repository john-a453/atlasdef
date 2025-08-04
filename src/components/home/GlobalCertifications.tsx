import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalCertifications = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Title */}
            <div>
              <div className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                ATLAS DEFENDERS + GLOBAL EXPERTISE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Our Global Certifications
              </h2>
            </div>

            {/* Strategic Paragraph */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Atlas Defenders, our expertise is validated by industry-leading certifications across cybersecurity, infrastructure, cloud technologies, and offensive security.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our team holds prestigious certifications spanning multiple domains, ensuring comprehensive coverage across:
              </p>

              {/* Checkmark List */}
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Infrastructure & Cloud Technologies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Cybersecurity & GRC Excellence</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Advanced Offensive Security Operations</span>
                </li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                From foundational IT support to elite red team operations — we maintain the highest standards of professional certification.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Verify Our Expertise</span>
                <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Animated Certification Cubes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[600px] overflow-hidden"
          >
            {/* Animated Columns Container */}
            <div className="flex justify-center space-x-4 h-full">

              {/* Column 1 - Moving Up */}
              <div className="flex flex-col space-y-4 animate-[slideUp_20s_linear_infinite]">
                <CertificationCube cert="CISSP" />
                <CertificationCube cert="OSCP" />
                <CertificationCube cert="CCNA" />
                <CertificationCube cert="CISA" />
                <CertificationCube cert="Security+" />
                <CertificationCube cert="RHCSA" />
                <CertificationCube cert="CISM" />
                {/* Duplicate for seamless loop */}
                <CertificationCube cert="CISSP" />
                <CertificationCube cert="OSCP" />
                <CertificationCube cert="CCNA" />
                <CertificationCube cert="CISA" />
              </div>

              {/* Column 2 - Moving Down */}
              <div className="flex flex-col space-y-4 animate-[slideDown_25s_linear_infinite]">
                <CertificationCube cert="AWS Solutions Architect" />
                <CertificationCube cert="CCNP Enterprise" />
                <CertificationCube cert="CRTP" />
                <CertificationCube cert="VCP-DCV" />
                <CertificationCube cert="CySA+" />
                <CertificationCube cert="JNCIA" />
                <CertificationCube cert="OSDA" />
                <CertificationCube cert="RHCE" />
                {/* Duplicate for seamless loop */}
                <CertificationCube cert="AWS Solutions Architect" />
                <CertificationCube cert="CCNP Enterprise" />
                <CertificationCube cert="CRTP" />
                <CertificationCube cert="VCP-DCV" />
              </div>

              {/* Column 3 - Moving Up (Different Speed) */}
              <div className="flex flex-col space-y-4 animate-[slideUp_30s_linear_infinite]">
                <CertificationCube cert="OSAP" />
                <CertificationCube cert="AZ-104" />
                <CertificationCube cert="PCSNE" />
                <CertificationCube cert="CRTE" />
                <CertificationCube cert="JNCIS" />
                <CertificationCube cert="NSE 7" />
                <CertificationCube cert="CDSA" />
                <CertificationCube cert="eJPT" />
                {/* Duplicate for seamless loop */}
                <CertificationCube cert="OSAP" />
                <CertificationCube cert="AZ-104" />
                <CertificationCube cert="PCSNE" />
                <CertificationCube cert="CRTE" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes slideDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

// Certification Cube Component
const CertificationCube = ({ cert }: { cert: string }) => {
  // Certification logo mapping - using actual logos from /public/Logos/
  const getCertLogo = (certName: string) => {
    const logoMap: { [key: string]: string } = {
      // Infrastructure & Cloud
      'CCNA': '/Logos/Cisco_logo.svg',
      'CCNP Enterprise': '/Logos/Cisco_logo.svg',
      'JNCIA': '/Logos/Juniper_Networks_logo.svg',
      'JNCIS': '/Logos/Juniper_Networks_logo.svg',
      'JNCIP': '/Logos/Juniper_Networks_logo.svg',
      'PCSNE': '/Logos/paloalto_logo.svg',
      'NSE 7': '/Logos/Fortinet_logo.svg',
      'VCP-DCV': '/Logos/Proxmox_logo.svg', // Using Proxmox as VMware alternative
      'RHCSA': '/Logos/Red_Hat_Logo.svg',
      'RHCE': '/Logos/Red_Hat_Logo.svg',
      'Nutanix Certified': '/Logos/Nutanix_Logo.svg',
      'AZ-900': '/Logos/azure_active_directory_logo.svg',
      'AZ-104': '/Logos/azure_active_directory_logo.svg',
      'AWS Solutions Architect': '/Logos/Datacenter1.jpg', // Using datacenter image as AWS alternative
      'Google Cloud Associate': '/Logos/Datacenter2.jpg',
      'OCI Cloud Infrastructure': '/Logos/monitoring_img.png',
      
      // IT Support & Service Management
      'CompTIA A+': '/Logos/itsupport_background_image.jpg',
      'ITIL v4 Foundation': '/Logos/itsupport_background_image.jpg',
      
      // Cybersecurity & GRC
      'CISA': '/Logos/CISA_Logo.svg',
      'CISM': '/Logos/CISM_logo.svg',
      'CISSP': '/Logos/CISSP_logo.png',
      'ISO/IEC 27001': '/Logos/cybersecurity_image.jpg',
      'Security+': '/Logos/security+_logo.png',
      'CySA+': '/Logos/cysa+_logo.png',
      
      // Offensive Security
      'OSCP': '/Logos/oscp_logo.svg',
      'OSAP': '/Logos/osep_logo.svg', // Using OSEP as alternative
      'OSWP': '/Logos/oswp_logo.svg',
      'OSDA': '/Logos/osda_logo.svg',
      'CRTP': '/Logos/crtp_logo.svg',
      'CRTE': '/Logos/crte_logo.svg',
      'CDSA': '/Logos/CDSA_logo.svg',
      'eJPT': '/Logos/ejptv2_logo.svg',
      'eCPPT': '/Logos/ecppt_logo.svg'
    };
    return logoMap[certName] || '/Logos/cybersecurity_image.jpg';
  };

  // Special display rules: Some certs show logo only (no name)
  const shouldShowName = (certName: string) => {
    return !['AWS Solutions Architect', 'Google Cloud Associate', 'CompTIA A+', 'ITIL v4 Foundation', 'ISO/IEC 27001'].includes(certName);
  };

  // Special logo sizing for very big logos
  const getLogoSize = (certName: string) => {
    if (['CISSP', 'Security+', 'CySA+', 'CISA', 'CISM'].includes(certName)) {
      return 'w-20 h-20'; // Very big logos for major certs
    }
    return 'w-12 h-12'; // Normal size
  };

  return (
    <div className="w-32 h-32 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className={`${getLogoSize(cert)} ${shouldShowName(cert) ? 'mb-2' : ''} group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
        <img
          src={getCertLogo(cert)}
          alt={`${cert} certification`}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            // Fallback to cybersecurity image if logo fails to load
            (e.target as HTMLImageElement).src = '/Logos/cybersecurity_image.jpg';
          }}
        />
      </div>
      {shouldShowName(cert) && (
        <div className="text-xs font-semibold text-gray-700 text-center px-2 leading-tight">
          {cert}
        </div>
      )}
    </div>
  );
};

export default GlobalCertifications;