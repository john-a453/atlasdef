import { useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Shield,
    FileText,
    CheckCircle,
    AlertTriangle,
    ArrowRight,
    Zap,
    Users,
    Clock,
    Search,
    Globe,
    Database,
    Lock,
    Scale,
    Award,
    Target,
    TrendingUp,
    Eye,
    Activity,
    BarChart3,
    BookOpen,
    Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const GRCPage = () => {
    useEffect(() => {
        document.title = 'GRC - Governance, Risk & Compliance | Atlas Defenders';
    }, []);

    const [activeCategory, setActiveCategory] = useState('governance');

    // Counter component for metrics
    const Counter = ({ end, duration = 2.5, suffix = '', prefix = '' }: { end: number, duration?: number, suffix?: string, prefix?: string }) => {
        const [count, setCount] = useState(0);
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        useEffect(() => {
            if (isInView) {
                let startTime: number;
                const startCount = 0;

                const updateCount = (timestamp: number) => {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount);

                    setCount(currentCount);

                    if (progress >= 1) {
                        setCount(end);
                    } else {
                        requestAnimationFrame(updateCount);
                    }
                };

                requestAnimationFrame(updateCount);
            }
        }, [isInView, end, duration]);

        return (
            <span ref={ref} className="text-4xl md:text-5xl font-bold text-accent">
                {prefix}{count}{suffix}
            </span>
        );
    };

    // GRC Framework categories
    const grcFrameworks = {
        governance: {
            title: 'Governance',
            description: 'Strategic oversight and decision-making frameworks',
            tools: [
                { name: 'Board Governance', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Policy Management', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Strategic Planning', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Performance Metrics', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Stakeholder Management', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
            ]
        },
        risk: {
            title: 'Risk Management',
            description: 'Comprehensive risk identification, assessment, and mitigation',
            tools: [
                { name: 'Risk Assessment', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Risk Register', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Business Continuity', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Incident Management', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Crisis Management', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
            ]
        },
        compliance: {
            title: 'Compliance',
            description: 'Regulatory adherence and standards implementation',
            tools: [
                { name: 'ISO 27001', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'GDPR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'NIST Framework', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'SOX Compliance', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'HIPAA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
            ]
        },
        audit: {
            title: 'Audit & Assurance',
            description: 'Internal auditing and compliance validation',
            tools: [
                { name: 'Internal Audits', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Control Testing', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Compliance Monitoring', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Remediation Tracking', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Audit Reporting', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
            ]
        },
        privacy: {
            title: 'Data Privacy',
            description: 'Data protection and privacy management',
            tools: [
                { name: 'Data Mapping', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Privacy Impact Assessment', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Consent Management', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Data Subject Rights', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Breach Response', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
            ]
        },
        technology: {
            title: 'GRC Technology',
            description: 'Technology solutions for GRC automation',
            tools: [
                { name: 'GRC Platforms', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Risk Analytics', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Compliance Dashboards', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Automated Reporting', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
                { name: 'Integration APIs', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' }
            ]
        }
    };

    // GRC Services offered
    const grcServices = [
        {
            icon: Scale,
            title: 'Governance Framework Design',
            description: 'Establish robust governance structures aligned with business objectives and stakeholder expectations.',
            features: ['Board governance setup', 'Policy framework development', 'Decision-making processes', 'Performance measurement systems']
        },
        {
            icon: AlertTriangle,
            title: 'Enterprise Risk Management',
            description: 'Comprehensive risk identification, assessment, and mitigation strategies across all business functions.',
            features: ['Risk assessment methodologies', 'Risk register management', 'Business continuity planning', 'Crisis response protocols']
        },
        {
            icon: FileText,
            title: 'Regulatory Compliance',
            description: 'Ensure adherence to industry regulations and international standards with ongoing monitoring.',
            features: ['Compliance gap analysis', 'Regulatory mapping', 'Policy implementation', 'Training programs']
        },
        {
            icon: Search,
            title: 'Internal Audit Services',
            description: 'Independent assessment of controls, processes, and compliance with established policies.',
            features: ['Audit planning & execution', 'Control effectiveness testing', 'Finding remediation', 'Continuous monitoring']
        },
        {
            icon: Database,
            title: 'Data Privacy & Protection',
            description: 'Comprehensive data protection programs ensuring privacy compliance and data security.',
            features: ['Data classification', 'Privacy impact assessments', 'Consent management', 'Cross-border compliance']
        },
        {
            icon: Settings,
            title: 'GRC Technology Implementation',
            description: 'Deploy and integrate GRC technology solutions for automated compliance and risk management.',
            features: ['Platform selection & setup', 'Workflow automation', 'Dashboard development', 'System integration']
        },
        {
            icon: Award,
            title: 'Certification Support',
            description: 'Guide organizations through certification processes for ISO 27001, SOC 2, and other standards.',
            features: ['Readiness assessments', 'Documentation preparation', 'External audit coordination', 'Certification maintenance']
        },
        {
            icon: BookOpen,
            title: 'Training & Awareness',
            description: 'Build organizational capability through comprehensive GRC training and awareness programs.',
            features: ['Executive briefings', 'Staff training programs', 'Awareness campaigns', 'Competency development']
        }
    ];

    const metrics = [
        { value: 150, suffix: '+', label: 'GRC Projects Delivered', icon: Target },
        { value: 12, suffix: ' days', label: 'Avg Implementation Time', prefix: '< ', icon: Clock },
        { value: 99, suffix: '%', label: 'Compliance Success Rate', icon: CheckCircle },
        { value: 25, suffix: '+', label: 'Frameworks Supported', icon: Shield },
        { value: 500, suffix: 'K+', label: 'Risks Assessed', icon: AlertTriangle },
        { value: 50, suffix: '+', label: 'Industries Served', icon: Globe }
    ];

    const whyChooseReasons = [
        'Certified GRC Professionals (CISA, CISSP, CISM, CIA)',
        'End-to-End GRC Implementation Expertise',
        'Industry-Leading Compliance Success Rate',
        'Integrated Technology Solutions',
        'Continuous Support & Maintenance',
        'Cost-Effective Risk Reduction Strategies'
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                        alt="GRC Governance Risk Compliance"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/85 to-indigo-900/90"></div>
                </div>

                {/* Floating GRC Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-3 h-3 bg-accent/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -40, 0],
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 6 + Math.random() * 4,
                                delay: Math.random() * 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Geometric Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="container relative z-10 text-white pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex items-center mb-8"
                        >
                            <div className="w-12 h-0.5 bg-accent mr-4"></div>
                            <span className="text-lg font-medium text-accent tracking-wide uppercase">
                                Governance, Risk & Compliance
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white"
                        >
                            Strategic GRC
                            <span className="block text-accent mt-2">Excellence</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
                        >
                            Transform your organization with comprehensive Governance, Risk & Compliance solutions.
                            Build resilient frameworks, manage risks proactively, and achieve regulatory excellence
                            with our expert-led GRC services.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <Link
                                to="/contact"
                                className="group inline-flex items-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <span>Start GRC Assessment</span>
                                <motion.div
                                    className="ml-3"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <ArrowRight size={20} />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Block */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200 relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center relative">
                                    <Scale size={32} className="text-white" />
                                    <motion.div
                                        className="absolute inset-0 bg-accent/20 rounded-2xl"
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                Enterprise GRC Solutions
                            </h2>

                            <p className="text-xl text-gray-600 leading-relaxed font-light">
                                Atlas Defenders delivers comprehensive Governance, Risk & Compliance solutions that enable
                                organizations to build robust governance frameworks, manage risks effectively, and maintain
                                regulatory compliance while driving business value and operational excellence.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* GRC Framework Categories - Interactive */}
            <section className="py-20 bg-white">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            Comprehensive GRC Framework
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our integrated approach covers all aspects of governance, risk management, and compliance
                            to provide complete organizational resilience and regulatory adherence.
                        </p>
                    </motion.div>

                    {/* Category Tabs */}
                    <div className="mb-12">
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {Object.entries(grcFrameworks).map(([key, framework]) => (
                                <motion.button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === key
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {framework.title}
                                </motion.button>
                            ))}
                        </div>

                        {/* Active Category Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gray-50 rounded-2xl p-8"
                            >
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-primary mb-2">
                                        {grcFrameworks[activeCategory as keyof typeof grcFrameworks].title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {grcFrameworks[activeCategory as keyof typeof grcFrameworks].description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {grcFrameworks[activeCategory as keyof typeof grcFrameworks].tools.map((tool, index) => (
                                        <motion.div
                                            key={tool.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="h-16 flex items-center justify-center mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                                                    <FileText size={24} className="text-primary" />
                                                </div>
                                            </div>
                                            <h4 className="text-center font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300 text-sm">
                                                {tool.name}
                                            </h4>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* GRC Services Block */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            Complete GRC Services Portfolio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From governance framework design to compliance certification, our comprehensive
                            GRC services ensure your organization achieves operational excellence and regulatory compliance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {grcServices.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-primary/20"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={28} className="text-primary" />
                                    </div>

                                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-600">
                                                <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <button className="text-primary font-semibold text-sm hover:text-secondary transition-colors duration-300 flex items-center group-hover:translate-x-1">
                                            Learn More
                                            <ArrowRight size={14} className="ml-1" />
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Results & Metrics Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Proven GRC Excellence
                        </h2>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Our track record demonstrates consistent success in delivering comprehensive
                            GRC solutions that drive business value and regulatory compliance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {metrics.map((metric, index) => {
                            const Icon = metric.icon;

                            return (
                                <motion.div
                                    key={metric.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                                        <Icon size={28} className="text-accent" />
                                    </div>

                                    <div className="mb-4">
                                        <Counter
                                            end={metric.value}
                                            suffix={metric.suffix}
                                            prefix={metric.prefix || ''}
                                            duration={2.5}
                                        />
                                    </div>

                                    <h3 className="text-lg font-semibold text-white">
                                        {metric.label}
                                    </h3>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Atlas Defenders */}
            <section className="py-20 bg-white">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            Why Choose Atlas Defenders for GRC?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive approach, proven expertise, and commitment to excellence
                            make us the ideal partner for your GRC transformation journey.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {whyChooseReasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                            >
                                <div className="flex items-center">
                                    <CheckCircle size={24} className="text-green-500 mr-4 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium group-hover:text-primary transition-colors duration-300">
                                        {reason}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GRC Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            Our GRC Implementation Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A proven methodology that ensures successful GRC implementation
                            and sustainable organizational transformation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Assessment & Planning',
                                description: 'Comprehensive evaluation of current state and strategic planning for GRC transformation.',
                                icon: Search
                            },
                            {
                                step: '02',
                                title: 'Framework Design',
                                description: 'Custom GRC framework development aligned with business objectives and regulatory requirements.',
                                icon: Settings
                            },
                            {
                                step: '03',
                                title: 'Implementation & Integration',
                                description: 'Systematic deployment of GRC processes, controls, and technology solutions.',
                                icon: Zap
                            },
                            {
                                step: '04',
                                title: 'Monitoring & Optimization',
                                description: 'Continuous monitoring, performance measurement, and ongoing optimization of GRC capabilities.',
                                icon: TrendingUp
                            }
                        ].map((process, index) => {
                            const Icon = process.icon;

                            return (
                                <motion.div
                                    key={process.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-center relative"
                                >
                                    {/* Connection Line */}
                                    {index < 3 && (
                                        <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
                                    )}

                                    <div className="relative z-10">
                                        <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                            <Icon size={32} className="text-white" />
                                        </div>

                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {process.step}
                                        </div>

                                        <h3 className="text-xl font-bold text-primary mb-4">
                                            {process.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed">
                                            {process.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
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
                            Ready to Transform Your GRC Capabilities?
                        </h2>
                        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
                            Partner with Atlas Defenders to build robust governance frameworks, manage risks effectively,
                            and achieve regulatory excellence that drives business value.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/contact"
                                className="btn bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                Start Your GRC Assessment
                            </Link>
                            <Link
                                to="/services"
                                className="btn bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 font-semibold backdrop-blur-sm"
                            >
                                Explore All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default GRCPage;