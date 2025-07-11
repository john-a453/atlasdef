import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Users, Clock, Shield, Zap, Target, ArrowRight } from 'lucide-react';

const ServiceDetailPage = () => {
  const { category, service } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, service]);

  // Service data structure
  const serviceData: any = {
    cybersecurity: {
      title: 'Cybersecurity',
      gradient: 'from-red-600 to-pink-700',
      services: {
        'soc-service': {
          title: 'SOC as a Service',
          subtitle: '24/7 Security Operations Center',
          description: 'Comprehensive managed security operations center providing round-the-clock monitoring, threat detection, and incident response capabilities.',
          longDescription: 'Our SOC as a Service delivers enterprise-grade security monitoring and response capabilities without the overhead of building and maintaining an in-house security operations center. We provide 24/7 monitoring, advanced threat detection, incident response, and comprehensive security analytics.',
          image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            '24/7 continuous monitoring and threat detection',
            'Rapid incident response and containment',
            'Advanced threat intelligence and analytics',
            'Compliance reporting and documentation',
            'Cost-effective alternative to in-house SOC',
            'Expert security analysts and threat hunters'
          ],
          features: [
            'Real-time security event monitoring',
            'Automated threat detection and alerting',
            'Incident response and forensics',
            'Vulnerability management',
            'Security awareness training',
            'Compliance and regulatory reporting'
          ],
          technologies: [
            { name: 'Wazuh', description: 'Open-source SIEM and XDR platform' },
            { name: 'Elastic Stack', description: 'Log analysis and visualization' },
            { name: 'Suricata', description: 'Network intrusion detection' },
            { name: 'CrowdStrike', description: 'Endpoint detection and response' },
            { name: 'Cortex XDR', description: 'Extended detection and response' }
          ],
          process: [
            { step: 1, title: 'Assessment', description: 'Evaluate current security posture and requirements' },
            { step: 2, title: 'Design', description: 'Create customized SOC architecture and procedures' },
            { step: 3, title: 'Implementation', description: 'Deploy monitoring tools and establish processes' },
            { step: 4, title: 'Monitoring', description: '24/7 security monitoring and threat detection' },
            { step: 5, title: 'Response', description: 'Rapid incident response and remediation' }
          ]
        },
        'penetration-testing': {
          title: 'Penetration Testing',
          subtitle: 'Advanced Security Assessment',
          description: 'Comprehensive security testing to identify vulnerabilities and strengthen your security posture through simulated cyber attacks.',
          longDescription: 'Our penetration testing services provide thorough security assessments using real-world attack scenarios. We identify vulnerabilities, test security controls, and provide actionable recommendations to strengthen your security posture.',
          image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Identify security vulnerabilities before attackers do',
            'Validate security controls and policies',
            'Meet compliance requirements',
            'Reduce risk of data breaches',
            'Improve incident response capabilities',
            'Enhance security awareness'
          ],
          features: [
            'Network penetration testing',
            'Web application security testing',
            'Mobile application testing',
            'Social engineering assessments',
            'Physical security testing',
            'Wireless network testing'
          ],
          technologies: [
            { name: 'Metasploit', description: 'Penetration testing framework' },
            { name: 'Burp Suite', description: 'Web application security testing' },
            { name: 'Nmap', description: 'Network discovery and security auditing' },
            { name: 'OWASP ZAP', description: 'Web application security scanner' },
            { name: 'Kali Linux', description: 'Penetration testing distribution' }
          ],
          process: [
            { step: 1, title: 'Planning', description: 'Define scope, objectives, and testing methodology' },
            { step: 2, title: 'Reconnaissance', description: 'Gather information about target systems' },
            { step: 3, title: 'Scanning', description: 'Identify live systems and potential vulnerabilities' },
            { step: 4, title: 'Exploitation', description: 'Attempt to exploit identified vulnerabilities' },
            { step: 5, title: 'Reporting', description: 'Document findings and provide remediation recommendations' }
          ]
        },
        'threat-detection': {
          title: 'Threat Detection',
          subtitle: 'XDR & EDR Solutions',
          description: 'Advanced threat detection and response capabilities using extended detection and response (XDR) and endpoint detection and response (EDR) technologies.',
          longDescription: 'Our threat detection services leverage cutting-edge XDR and EDR technologies to provide comprehensive visibility across your entire IT environment. We detect, investigate, and respond to advanced threats in real-time.',
          image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Real-time threat detection and response',
            'Comprehensive visibility across all endpoints',
            'Advanced behavioral analytics',
            'Automated threat hunting',
            'Reduced false positives',
            'Faster incident response times'
          ],
          features: [
            'Endpoint detection and response (EDR)',
            'Extended detection and response (XDR)',
            'Behavioral analytics and machine learning',
            'Automated threat hunting',
            'Incident investigation and forensics',
            'Threat intelligence integration'
          ],
          technologies: [
            { name: 'CrowdStrike Falcon', description: 'Cloud-native endpoint protection' },
            { name: 'Cortex XDR', description: 'Extended detection and response platform' },
            { name: 'SentinelOne', description: 'AI-powered endpoint security' },
            { name: 'Microsoft Defender', description: 'Enterprise endpoint protection' },
            { name: 'Carbon Black', description: 'Next-generation endpoint security' }
          ],
          process: [
            { step: 1, title: 'Deployment', description: 'Install and configure detection agents' },
            { step: 2, title: 'Baseline', description: 'Establish normal behavior patterns' },
            { step: 3, title: 'Monitoring', description: 'Continuous threat detection and analysis' },
            { step: 4, title: 'Investigation', description: 'Analyze and investigate security alerts' },
            { step: 5, title: 'Response', description: 'Contain and remediate identified threats' }
          ]
        },
        'compliance-grc': {
          title: 'Compliance & GRC',
          subtitle: 'ISO 27001, NIST, GDPR',
          description: 'Comprehensive governance, risk, and compliance services to help organizations meet regulatory requirements and industry standards.',
          longDescription: 'Our GRC services help organizations establish robust governance frameworks, manage security risks effectively, and maintain compliance with industry regulations and standards including ISO 27001, NIST, GDPR, and more.',
          image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Achieve and maintain regulatory compliance',
            'Reduce business and operational risks',
            'Improve security governance',
            'Streamline audit processes',
            'Enhance stakeholder confidence',
            'Avoid regulatory penalties'
          ],
          features: [
            'ISO 27001 implementation and certification',
            'NIST Cybersecurity Framework adoption',
            'GDPR compliance and data protection',
            'Risk assessment and management',
            'Policy development and implementation',
            'Audit preparation and support'
          ],
          technologies: [
            { name: 'GRC Platforms', description: 'Governance, risk, and compliance tools' },
            { name: 'Risk Assessment Tools', description: 'Automated risk analysis and reporting' },
            { name: 'Policy Management', description: 'Centralized policy and procedure management' },
            { name: 'Audit Tools', description: 'Compliance monitoring and reporting' },
            { name: 'Documentation Systems', description: 'Compliance documentation and tracking' }
          ],
          process: [
            { step: 1, title: 'Assessment', description: 'Evaluate current compliance posture' },
            { step: 2, title: 'Gap Analysis', description: 'Identify compliance gaps and requirements' },
            { step: 3, title: 'Implementation', description: 'Develop and implement compliance programs' },
            { step: 4, title: 'Monitoring', description: 'Continuous compliance monitoring' },
            { step: 5, title: 'Improvement', description: 'Regular review and improvement of programs' }
          ]
        }
      }
    },
    infrastructure: {
      title: 'Infrastructure',
      gradient: 'from-blue-600 to-indigo-700',
      services: {
        'data-center-design': {
          title: 'Data Center Design',
          subtitle: 'Next-Generation Infrastructure',
          description: 'Comprehensive data center design and implementation services for modern, efficient, and scalable infrastructure.',
          longDescription: 'Our data center design services provide end-to-end solutions for building modern, efficient, and scalable data centers. We focus on optimal performance, energy efficiency, and future-ready architecture.',
          image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Optimized performance and efficiency',
            'Scalable and future-ready design',
            'Energy-efficient operations',
            'High availability and redundancy',
            'Compliance with industry standards',
            'Cost-effective infrastructure'
          ],
          features: [
            'Infrastructure architecture design',
            'Power and cooling optimization',
            'Network infrastructure planning',
            'Security and access control',
            'Monitoring and management systems',
            'Disaster recovery planning'
          ],
          technologies: [
            { name: 'Cisco UCS', description: 'Unified computing systems' },
            { name: 'VMware vSphere', description: 'Virtualization platform' },
            { name: 'NetApp Storage', description: 'Enterprise storage solutions' },
            { name: 'APC Power Systems', description: 'Uninterruptible power supplies' },
            { name: 'Schneider Electric', description: 'Data center infrastructure' }
          ],
          process: [
            { step: 1, title: 'Requirements', description: 'Analyze business and technical requirements' },
            { step: 2, title: 'Design', description: 'Create detailed infrastructure design' },
            { step: 3, title: 'Planning', description: 'Develop implementation and migration plans' },
            { step: 4, title: 'Implementation', description: 'Deploy and configure infrastructure' },
            { step: 5, title: 'Optimization', description: 'Fine-tune and optimize performance' }
          ]
        },
        'network-engineering': {
          title: 'Network Engineering',
          subtitle: 'BGP, MPLS, SD-WAN',
          description: 'Advanced network engineering services including routing protocols, MPLS networks, and software-defined WAN solutions.',
          longDescription: 'Our network engineering services provide comprehensive design, implementation, and optimization of enterprise networks using advanced technologies like BGP, MPLS, and SD-WAN.',
          image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'High-performance network connectivity',
            'Improved network reliability and uptime',
            'Optimized traffic routing and QoS',
            'Scalable network architecture',
            'Enhanced security and segmentation',
            'Cost-effective WAN solutions'
          ],
          features: [
            'BGP routing and optimization',
            'MPLS network design and implementation',
            'SD-WAN deployment and management',
            'Network segmentation and VLANs',
            'Quality of Service (QoS) implementation',
            'Network monitoring and troubleshooting'
          ],
          technologies: [
            { name: 'Cisco Routers', description: 'Enterprise routing solutions' },
            { name: 'Juniper Networks', description: 'High-performance networking' },
            { name: 'SD-WAN Solutions', description: 'Software-defined WAN platforms' },
            { name: 'MPLS Providers', description: 'Multi-protocol label switching' },
            { name: 'Network Monitoring', description: 'Performance monitoring tools' }
          ],
          process: [
            { step: 1, title: 'Assessment', description: 'Analyze current network infrastructure' },
            { step: 2, title: 'Design', description: 'Create optimized network architecture' },
            { step: 3, title: 'Implementation', description: 'Deploy network components and configurations' },
            { step: 4, title: 'Testing', description: 'Validate performance and functionality' },
            { step: 5, title: 'Optimization', description: 'Fine-tune and optimize network performance' }
          ]
        },
        'cloud-integration': {
          title: 'Cloud Integration',
          subtitle: 'AWS, Azure, GCP, OCI',
          description: 'Seamless cloud integration services for hybrid and multi-cloud environments across major cloud platforms.',
          longDescription: 'Our cloud integration services help organizations seamlessly integrate with major cloud platforms including AWS, Azure, GCP, and Oracle Cloud, enabling hybrid and multi-cloud strategies.',
          image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Seamless hybrid cloud connectivity',
            'Multi-cloud strategy implementation',
            'Improved scalability and flexibility',
            'Cost optimization and efficiency',
            'Enhanced disaster recovery capabilities',
            'Simplified cloud management'
          ],
          features: [
            'Cloud migration planning and execution',
            'Hybrid cloud architecture design',
            'Multi-cloud management and orchestration',
            'Cloud security and compliance',
            'Cost optimization and monitoring',
            'Disaster recovery and backup'
          ],
          technologies: [
            { name: 'AWS', description: 'Amazon Web Services cloud platform' },
            { name: 'Microsoft Azure', description: 'Microsoft cloud computing platform' },
            { name: 'Google Cloud', description: 'Google Cloud Platform services' },
            { name: 'Oracle Cloud', description: 'Oracle Cloud Infrastructure' },
            { name: 'Terraform', description: 'Infrastructure as code tool' }
          ],
          process: [
            { step: 1, title: 'Strategy', description: 'Develop cloud integration strategy' },
            { step: 2, title: 'Assessment', description: 'Evaluate current infrastructure and requirements' },
            { step: 3, title: 'Migration', description: 'Plan and execute cloud migration' },
            { step: 4, title: 'Integration', description: 'Integrate cloud and on-premises systems' },
            { step: 5, title: 'Optimization', description: 'Optimize performance and costs' }
          ]
        },
        'virtualization': {
          title: 'Virtualization',
          subtitle: 'VMware, Proxmox, Nutanix',
          description: 'Comprehensive virtualization solutions using leading platforms for improved efficiency and resource utilization.',
          longDescription: 'Our virtualization services help organizations maximize resource utilization, improve efficiency, and reduce costs through comprehensive virtualization solutions using VMware, Proxmox, Nutanix, and other leading platforms.',
          image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Improved resource utilization',
            'Reduced hardware and operational costs',
            'Enhanced disaster recovery capabilities',
            'Simplified management and maintenance',
            'Increased scalability and flexibility',
            'Better security and isolation'
          ],
          features: [
            'Server virtualization and consolidation',
            'Desktop virtualization (VDI)',
            'Application virtualization',
            'Storage virtualization',
            'Network virtualization',
            'Backup and disaster recovery'
          ],
          technologies: [
            { name: 'VMware vSphere', description: 'Enterprise virtualization platform' },
            { name: 'Proxmox VE', description: 'Open-source virtualization platform' },
            { name: 'Nutanix AHV', description: 'Hyperconverged infrastructure' },
            { name: 'Microsoft Hyper-V', description: 'Windows virtualization platform' },
            { name: 'Citrix XenServer', description: 'Enterprise virtualization solution' }
          ],
          process: [
            { step: 1, title: 'Assessment', description: 'Evaluate current infrastructure and requirements' },
            { step: 2, title: 'Planning', description: 'Design virtualization architecture' },
            { step: 3, title: 'Implementation', description: 'Deploy virtualization platform' },
            { step: 4, title: 'Migration', description: 'Migrate workloads to virtual environment' },
            { step: 5, title: 'Optimization', description: 'Optimize performance and resource allocation' }
          ]
        },
        'server-administration': {
          title: 'Server Administration',
          subtitle: 'Windows, Linux, Active Directory',
          description: 'Professional server administration services for Windows and Linux environments with Active Directory management.',
          longDescription: 'Our server administration services provide comprehensive management of Windows and Linux servers, Active Directory environments, and enterprise server infrastructure to ensure optimal performance and security.',
          image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Reliable server performance and uptime',
            'Enhanced security and compliance',
            'Proactive monitoring and maintenance',
            'Efficient user and resource management',
            'Automated backup and recovery',
            'Cost-effective server operations'
          ],
          features: [
            'Windows Server administration',
            'Linux server management',
            'Active Directory services',
            'User and group management',
            'Server monitoring and maintenance',
            'Backup and disaster recovery'
          ],
          technologies: [
            { name: 'Windows Server', description: 'Microsoft server operating system' },
            { name: 'Linux Distributions', description: 'Various Linux server distributions' },
            { name: 'Active Directory', description: 'Microsoft directory services' },
            { name: 'PowerShell', description: 'Windows automation framework' },
            { name: 'Bash/Shell', description: 'Linux command line and scripting' }
          ],
          process: [
            { step: 1, title: 'Assessment', description: 'Evaluate current server environment' },
            { step: 2, title: 'Planning', description: 'Develop administration strategy' },
            { step: 3, title: 'Implementation', description: 'Deploy administration tools and processes' },
            { step: 4, title: 'Monitoring', description: 'Continuous server monitoring and maintenance' },
            { step: 5, title: 'Optimization', description: 'Optimize server performance and security' }
          ]
        },
        'monitoring': {
          title: 'Infrastructure Monitoring',
          subtitle: 'Zabbix, Prometheus, Grafana',
          description: 'Comprehensive infrastructure monitoring solutions using industry-leading tools for real-time visibility and alerting.',
          longDescription: 'Our infrastructure monitoring services provide comprehensive visibility into your IT environment using advanced monitoring tools like Zabbix, Prometheus, and Grafana for proactive issue detection and resolution.',
          image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Real-time infrastructure visibility',
            'Proactive issue detection and alerting',
            'Performance optimization insights',
            'Reduced downtime and outages',
            'Comprehensive reporting and analytics',
            'Improved capacity planning'
          ],
          features: [
            'Real-time monitoring and alerting',
            'Performance metrics and analytics',
            'Custom dashboards and reporting',
            'Automated incident response',
            'Capacity planning and forecasting',
            'Integration with existing tools'
          ],
          technologies: [
            { name: 'Zabbix', description: 'Enterprise monitoring solution' },
            { name: 'Prometheus', description: 'Open-source monitoring system' },
            { name: 'Grafana', description: 'Analytics and visualization platform' },
            { name: 'PRTG', description: 'Network monitoring software' },
            { name: 'Nagios', description: 'IT infrastructure monitoring' }
          ],
          process: [
            { step: 1, title: 'Planning', description: 'Define monitoring requirements and strategy' },
            { step: 2, title: 'Deployment', description: 'Install and configure monitoring tools' },
            { step: 3, title: 'Configuration', description: 'Set up monitoring rules and alerts' },
            { step: 4, title: 'Monitoring', description: 'Continuous monitoring and alerting' },
            { step: 5, title: 'Optimization', description: 'Fine-tune monitoring and improve processes' }
          ]
        },
        'backup-recovery': {
          title: 'Backup & Recovery',
          subtitle: 'Veeam-powered BDR',
          description: 'Enterprise backup and disaster recovery solutions powered by Veeam for comprehensive data protection.',
          longDescription: 'Our backup and disaster recovery services provide comprehensive data protection using Veeam and other leading technologies to ensure business continuity and rapid recovery from any disaster.',
          image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Comprehensive data protection',
            'Rapid recovery and minimal downtime',
            'Automated backup processes',
            'Compliance with retention policies',
            'Cost-effective storage solutions',
            'Peace of mind and business continuity'
          ],
          features: [
            'Automated backup scheduling',
            'Instant VM recovery',
            'Granular file and folder recovery',
            'Replication and disaster recovery',
            'Cloud backup integration',
            'Compliance reporting'
          ],
          technologies: [
            { name: 'Veeam Backup', description: 'Enterprise backup and recovery' },
            { name: 'VMware vSphere', description: 'Virtualization platform integration' },
            { name: 'Microsoft Hyper-V', description: 'Windows virtualization support' },
            { name: 'Cloud Storage', description: 'AWS, Azure, Google Cloud integration' },
            { name: 'Tape Libraries', description: 'Long-term archival storage' }
          ],
          process: [
            { step: 1, title: 'Assessment', description: 'Evaluate backup and recovery requirements' },
            { step: 2, title: 'Design', description: 'Create backup and disaster recovery strategy' },
            { step: 3, title: 'Implementation', description: 'Deploy backup infrastructure and policies' },
            { step: 4, title: 'Testing', description: 'Regular backup and recovery testing' },
            { step: 5, title: 'Monitoring', description: 'Continuous monitoring and optimization' }
          ]
        },
        'performance-optimization': {
          title: 'Performance Optimization',
          subtitle: 'Load Balancing & Tuning',
          description: 'Comprehensive performance optimization services including load balancing, tuning, and capacity planning.',
          longDescription: 'Our performance optimization services help organizations maximize the performance of their IT infrastructure through load balancing, system tuning, and comprehensive performance analysis.',
          image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Improved application performance',
            'Enhanced user experience',
            'Optimized resource utilization',
            'Reduced infrastructure costs',
            'Better scalability and reliability',
            'Proactive performance management'
          ],
          features: [
            'Load balancing and traffic distribution',
            'Application performance tuning',
            'Database optimization',
            'Network performance optimization',
            'Capacity planning and forecasting',
            'Performance monitoring and alerting'
          ],
          technologies: [
            { name: 'F5 Load Balancers', description: 'Application delivery controllers' },
            { name: 'HAProxy', description: 'Open-source load balancer' },
            { name: 'NGINX', description: 'Web server and reverse proxy' },
            { name: 'Performance Monitoring', description: 'APM and infrastructure monitoring' },
            { name: 'Database Tuning', description: 'SQL and NoSQL optimization tools' }
          ],
          process: [
            { step: 1, title: 'Analysis', description: 'Analyze current performance metrics' },
            { step: 2, title: 'Identification', description: 'Identify performance bottlenecks' },
            { step: 3, title: 'Optimization', description: 'Implement performance improvements' },
            { step: 4, title: 'Testing', description: 'Validate performance improvements' },
            { step: 5, title: 'Monitoring', description: 'Continuous performance monitoring' }
          ]
        }
      }
    },
    development: {
      title: 'Development & DevOps',
      gradient: 'from-green-600 to-emerald-700',
      services: {
        'web-development': {
          title: 'Web Development',
          subtitle: 'Full-Stack Applications',
          description: 'Modern web application development using cutting-edge technologies and frameworks for scalable, responsive solutions.',
          longDescription: 'Our web development services deliver modern, scalable, and responsive web applications using the latest technologies and frameworks. We focus on user experience, performance, and maintainability.',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Modern, responsive web applications',
            'Scalable and maintainable code',
            'Enhanced user experience',
            'Cross-platform compatibility',
            'SEO-optimized solutions',
            'Fast development cycles'
          ],
          features: [
            'Frontend development (React, Vue, Angular)',
            'Backend development (Node.js, Python, PHP)',
            'Database design and integration',
            'API development and integration',
            'Responsive design and mobile optimization',
            'Performance optimization'
          ],
          technologies: [
            { name: 'React', description: 'Modern JavaScript library' },
            { name: 'Node.js', description: 'JavaScript runtime environment' },
            { name: 'Python Django', description: 'High-level Python web framework' },
            { name: 'PostgreSQL', description: 'Advanced relational database' },
            { name: 'MongoDB', description: 'NoSQL document database' }
          ],
          process: [
            { step: 1, title: 'Requirements', description: 'Gather and analyze project requirements' },
            { step: 2, title: 'Design', description: 'Create UI/UX design and architecture' },
            { step: 3, title: 'Development', description: 'Build frontend and backend components' },
            { step: 4, title: 'Testing', description: 'Comprehensive testing and quality assurance' },
            { step: 5, title: 'Deployment', description: 'Deploy and maintain the application' }
          ]
        },
        'mobile-development': {
          title: 'Mobile Development',
          subtitle: 'iOS & Android Apps',
          description: 'Native and cross-platform mobile application development for iOS and Android platforms.',
          longDescription: 'Our mobile development services create high-quality native and cross-platform mobile applications for iOS and Android, focusing on performance, user experience, and platform-specific features.',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Native and cross-platform solutions',
            'Optimized performance and user experience',
            'Platform-specific feature integration',
            'Scalable and maintainable architecture',
            'App store optimization',
            'Ongoing support and updates'
          ],
          features: [
            'Native iOS development (Swift)',
            'Native Android development (Kotlin)',
            'Cross-platform development (React Native, Flutter)',
            'Backend API integration',
            'Push notifications and real-time features',
            'App store submission and optimization'
          ],
          technologies: [
            { name: 'Swift', description: 'iOS native development language' },
            { name: 'Kotlin', description: 'Android native development language' },
            { name: 'React Native', description: 'Cross-platform mobile framework' },
            { name: 'Flutter', description: 'Google\'s UI toolkit for mobile' },
            { name: 'Firebase', description: 'Mobile backend services' }
          ],
          process: [
            { step: 1, title: 'Strategy', description: 'Define mobile strategy and platform selection' },
            { step: 2, title: 'Design', description: 'Create mobile-first UI/UX design' },
            { step: 3, title: 'Development', description: 'Build and integrate mobile features' },
            { step: 4, title: 'Testing', description: 'Device testing and quality assurance' },
            { step: 5, title: 'Launch', description: 'App store submission and launch' }
          ]
        },
        'devops-cicd': {
          title: 'DevOps & CI/CD',
          subtitle: 'Docker, Kubernetes',
          description: 'Modern DevOps practices and CI/CD pipeline implementation using containerization and orchestration technologies.',
          longDescription: 'Our DevOps services implement modern development and deployment practices using containerization, orchestration, and automated CI/CD pipelines to improve development efficiency and deployment reliability.',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Faster development and deployment cycles',
            'Improved code quality and reliability',
            'Automated testing and deployment',
            'Scalable and resilient infrastructure',
            'Enhanced collaboration between teams',
            'Reduced operational overhead'
          ],
          features: [
            'CI/CD pipeline design and implementation',
            'Containerization with Docker',
            'Kubernetes orchestration',
            'Infrastructure as Code (IaC)',
            'Automated testing and quality gates',
            'Monitoring and logging integration'
          ],
          technologies: [
            { name: 'Docker', description: 'Containerization platform' },
            { name: 'Kubernetes', description: 'Container orchestration system' },
            { name: 'Jenkins', description: 'Automation server for CI/CD' },
            { name: 'GitLab CI', description: 'Integrated CI/CD platform' },
            { name: 'Terraform', description: 'Infrastructure as code tool' }
          ],
          process: [
            { step: 1, title: 'Assessment', description: 'Evaluate current development processes' },
            { step: 2, title: 'Strategy', description: 'Design DevOps strategy and toolchain' },
            { step: 3, title: 'Implementation', description: 'Implement CI/CD pipelines and tools' },
            { step: 4, title: 'Training', description: 'Train teams on new processes and tools' },
            { step: 5, title: 'Optimization', description: 'Continuously improve and optimize' }
          ]
        },
        'enterprise-software': {
          title: 'Enterprise Software',
          subtitle: 'ERP, CRM, HRMS',
          description: 'Custom enterprise software development and integration for ERP, CRM, and HRMS systems.',
          longDescription: 'Our enterprise software services provide custom development and integration of business-critical systems including ERP, CRM, and HRMS solutions tailored to your organization\'s specific needs.',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1',
          benefits: [
            'Streamlined business processes',
            'Improved operational efficiency',
            'Better data visibility and reporting',
            'Enhanced customer relationship management',
            'Automated workflows and approvals',
            'Scalable and flexible solutions'
          ],
          features: [
            'Custom ERP development and integration',
            'CRM system implementation',
            'HRMS and payroll systems',
            'Business process automation',
            'Data migration and integration',
            'Training and support'
          ],
          technologies: [
            { name: 'Odoo', description: 'Open-source ERP platform' },
            { name: 'Salesforce', description: 'Cloud-based CRM platform' },
            { name: 'SAP', description: 'Enterprise resource planning' },
            { name: 'Microsoft Dynamics', description: 'Business applications suite' },
            { name: 'Custom Development', description: 'Tailored enterprise solutions' }
          ],
          process: [
            { step: 1, title: 'Analysis', description: 'Analyze business requirements and processes' },
            { step: 2, title: 'Design', description: 'Design system architecture and workflows' },
            { step: 3, title: 'Development', description: 'Build and customize enterprise software' },
            { step: 4, title: 'Integration', description: 'Integrate with existing systems' },
            { step: 5, title: 'Training', description: 'User training and change management' }
          ]
        }
      }
    }
  };

  // Get the current service data
  const categoryData = serviceData[category as string];
  const currentService = categoryData?.services[service as string];

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The requested service could not be found.</p>
          <Link to="/services" className="btn btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    document.title = `${currentService.title} | ${categoryData.title} | Atlas Defenders`;
  }, [currentService.title, categoryData.title]);

  return (
    <>
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br ${categoryData.gradient}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={currentService.image}
            alt={currentService.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 text-white pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center mb-8"
            >
              <Link to="/services" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Services
              </Link>
              <span className="mx-3 text-white/60">→</span>
              <span className="text-white/80">{categoryData.title}</span>
              <span className="mx-3 text-white/60">→</span>
              <span className="text-white">{currentService.title}</span>
            </motion.div>

            {/* Category Label */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center mb-6"
            >
              <div className="w-12 h-0.5 bg-white mr-4"></div>
              <span className="text-lg font-medium text-white/90 tracking-wide uppercase">
                {categoryData.title}
              </span>
            </motion.div>

            {/* Service Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
            >
              {currentService.title}
            </motion.h1>

            {/* Service Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-white/90 mb-8 font-medium"
            >
              {currentService.subtitle}
            </motion.p>

            {/* Service Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-white/80 mb-12 max-w-3xl leading-relaxed"
            >
              {currentService.longDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                to="/contact"
                className="group inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
              
              <button className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 font-semibold backdrop-blur-sm">
                <span>Learn More</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our {currentService.title.toLowerCase()} service can transform your business operations and drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <CheckCircle size={24} className="text-green-500 mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-8">Service Features</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our comprehensive {currentService.title.toLowerCase()} service includes all the features you need for success.
              </p>
              
              <div className="space-y-4">
                {currentService.features.map((feature: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={currentService.image}
                alt={currentService.title}
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Technologies & Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading technologies and platforms to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.technologies.map((tech: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful implementation and optimal results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {currentService.process.map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                
                {index < currentService.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br ${categoryData.gradient} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Contact our experts today to discuss how our {currentService.title.toLowerCase()} service can help your organization achieve its goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="btn bg-white text-gray-900 hover:bg-white/90 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/services" 
                className="btn bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;