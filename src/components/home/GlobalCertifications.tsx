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
            {/* Animated Columns Container - 4 Columns */}
            <div className="flex justify-center space-x-3 h-full">

              {/* Column 1 - Moving Up - Cisco */}
              <div className="flex flex-col space-y-4 animate-[slideUp_20s_linear_infinite]">
                <CertificationCube cert="CCNA" />
                <CertificationCube cert="CCNP" />
                <CertificationCube cert="CCNP Security" />
                {/* Duplicate for seamless loop */}
                <CertificationCube cert="CCNA" />
                <CertificationCube cert="CCNP" />
                <CertificationCube cert="CCNP Security" />
                <CertificationCube cert="CCNA" />
                <CertificationCube cert="CCNP" />
              </div>

              {/* Column 2 - Moving Down - Juniper & Palo Alto */}
              <div className="flex flex-col space-y-4 animate-[slideDown_25s_linear_infinite]">
                <CertificationCube cert="JNCIA-JUNOS" />
                <CertificationCube cert="JNCIA-DC" />
                <CertificationCube cert="JNCIA-SEC" />
                <CertificationCube cert="JNCIS-ENT" />
                <CertificationCube cert="JNCIP-DC" />
                <CertificationCube cert="JNCIP-ENT" />
                <CertificationCube cert="PCSNE" />
                <CertificationCube cert="PCNSP" />
                {/* Duplicate for seamless loop */}
                <CertificationCube cert="JNCIA-JUNOS" />
                <CertificationCube cert="JNCIA-DC" />
                <CertificationCube cert="PCSNE" />
              </div>

              {/* Column 3 - Moving Up - Fortinet, VMware, Red Hat, Nutanix */}
              <div className="flex flex-col space-y-4 animate-[slideUp_30s_linear_infinite]">
                <CertificationCube cert="FCA" />
                <CertificationCube cert="FCF" />
                <CertificationCube cert="FCP" />
                <CertificationCube cert="VCP-DCV" />
                <CertificationCube cert="RHCSA" />
                <CertificationCube cert="RHCE" />
                <CertificationCube cert="NCA" />
                <CertificationCube cert="NCP-MCI" />
                <CertificationCube cert="NCM-MCI" />
                <CertificationCube cert="CKA" />
                {/* Duplicate for seamless loop */}
                <CertificationCube cert="FCA" />
                <CertificationCube cert="VCP-DCV" />
                <CertificationCube cert="RHCSA" />
              </div>

              {/* Column 4 - Moving Down - Cloud & Security Certifications */}
              <div className="flex flex-col space-y-4 animate-[slideDown_35s_linear_infinite]">
                <CertificationCube cert="AZ-104" />
                <CertificationCube cert="AZ-800" />
                <CertificationCube cert="AZ-801" />
                <CertificationCube cert="AWS SAA" />
                <CertificationCube cert="AWS SAP" />
                <CertificationCube cert="AWS ANS" />
                <CertificationCube cert="AWS SCS" />
                <CertificationCube cert="GCP ACE" />
                <CertificationCube cert="GCP PCA" />
                <CertificationCube cert="GCP PCNE" />
                <CertificationCube cert="CompTIA A+" />
                <CertificationCube cert="CompTIA Network+" />
                <CertificationCube cert="CompTIA Security+" />
                <CertificationCube cert="CompTIA CySA+" />
                <CertificationCube cert="CompTIA SecurityX" />
                <CertificationCube cert="LPIC-1" />
                <CertificationCube cert="LPIC-2" />
                <CertificationCube cert="LPIC-3" />
                <CertificationCube cert="CISSP" />
                <CertificationCube cert="CISA" />
                <CertificationCube cert="CISM" />
                <CertificationCube cert="CC" />
                {/* Duplicate for seamless loop */}
                <CertificationCube cert="AZ-104" />
                <CertificationCube cert="AWS SAA" />
                <CertificationCube cert="CompTIA Security+" />
                <CertificationCube cert="CISSP" />
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
  // Certification logo mapping - using actual logos from /public/Certifications/
  const getCertLogo = (certName: string) => {
    const logoMap: { [key: string]: string } = {
      // Cisco Certifications
      'CCNA': '/Certifications/CCNA.png',
      'CCNP': '/Certifications/CCNP.png',
      'CCNP Security': '/Certifications/CCNP_SECURITY.png',
      
      // Juniper Certifications
      'JNCIA-JUNOS': '/Certifications/Jncia-junos.png',
      'JNCIA-DC': '/Certifications/JNCIA-DC.png',
      'JNCIA-SEC': '/Certifications/JNCIA-Sec.png',
      'JNCIS-ENT': '/Certifications/JNCIS-ENT.png',
      'JNCIP-DC': '/Certifications/JNCIP-DC.png',
      'JNCIP-ENT': '/Certifications/JNCIP-ENT.png',
      
      // Palo Alto Certifications
      'PCSNE': '/Certifications/PCSNE.png',
      'PCNSP': '/Certifications/Palo alto Certified Network Security Professional.png',
      
      // Fortinet Certifications
      'FCA': '/Certifications/FCA.png',
      'FCF': '/Certifications/FCF.png',
      'FCP': '/Certifications/FCP.png',
      
      // VMware Certifications
      'VCP-DCV': '/Certifications/VCP-DCV.png',
      
      // Red Hat Certifications
      'RHCSA': '/Certifications/Red Hat Certified System Administrator.png',
      'RHCE': '/Certifications/Red Hat Certified Engineer.png',
      
      // Nutanix Certifications
      'NCA': '/Certifications/Nutanix Certified Associate.png',
      'NCP-MCI': '/Certifications/NUTANIX Professional Multicloud Infrastructure.png',
      'NCM-MCI': '/Certifications/NUTANIX Multicloud Infrastructure Master.png',
      
      // Microsoft Azure Certifications
      'AZ-104': '/Certifications/Az 104.png',
      'AZ-800': '/Certifications/AZ 800.png',
      'AZ-801': '/Certifications/AZ 801.png',
      
      // AWS Certifications
      'AWS SAA': '/Certifications/AWS Certified Solution Architect Associate.png',
      'AWS SAP': '/Certifications/AWS Certified Solution Architect Professional.png',
      'AWS ANS': '/Certifications/AWS Certified Advanced Networking.png',
      'AWS SCS': '/Certifications/AWS Certified Security Specialist.png',
      
      // Google Cloud Certifications
      'GCP ACE': '/Certifications/Associate Cloud Engineer Certification.png',
      'GCP PCA': '/Certifications/Professional Cloud Architect Certification.png',
      'GCP PCNE': '/Certifications/Professional Cloud Network Engineer Certification.png',
      
      // Kubernetes Certifications
      'CKA': '/Certifications/Certified Kubernetes Administrator.png',
      
      // CompTIA Certifications
      'CompTIA A+': '/Certifications/Comptia A+.png',
      'CompTIA Network+': '/Certifications/Comptia Network+.png',
      'CompTIA Security+': '/Certifications/Comptia Security+.png',
      'CompTIA CySA+': '/Certifications/Comptia Cysa+.png',
      'CompTIA SecurityX': '/Certifications/Comptia SecurityX.png',
      
      // Linux Professional Institute
      'LPIC-1': '/Certifications/LIPIC1.png',
      'LPIC-2': '/Certifications/LIPIC2.png',
      'LPIC-3': '/Certifications/LIPIC3.png',
      
      // Cybersecurity & GRC
      'CISSP': '/Certifications/CISSP.png',
      'CISA': '/Certifications/Certified Information Systems Auditor.png',
      'CISM': '/Certifications/Certified Information Security Manager.png',
      'CC': '/Certifications/CC.png'
    };
    return logoMap[certName] || '/Certifications/CISSP.png';
  };

  // All certifications show logo only (no text) for cleaner look
  const shouldShowName = () => {
    return false; // Show logo only for all certifications
  };

  // Bigger sizing for all certification logos
  const getLogoSize = () => {
    return 'w-32 h-32'; // Much larger logos without background
  };

  return (
    <div className="flex items-center justify-center hover:scale-110 transition-all duration-300 group">
      <div className={`${getLogoSize()} group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
        <img
          src={getCertLogo(cert)}
          alt={`${cert} certification`}
          className="max-w-full max-h-full object-contain drop-shadow-lg"
          onError={(e) => {
            // Fallback to CISSP logo if image fails to load
            (e.target as HTMLImageElement).src = '/Certifications/CISSP.png';
          }}
        />
      </div>
    </div>
  );
};

export default GlobalCertifications;