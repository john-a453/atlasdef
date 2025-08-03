import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const EmpoweringInnovation = () => {
    const blocks = [
        {
            id: 1,
            title: 'Cybersecurity Operations',
            description: 'Advanced protection delivered through offensive and defensive security, SOC-as-a-Service, SIEM, and Zero Trust architecture.',
            image: '/Logos/cybersecurity_image.jpg',
            imagePosition: 'left'
        },
        {
            id: 2,
            title: 'IT Infrastructure',
            description: 'From data center builds and hybrid cloud to virtualization, networking, and resilient architectures — engineered for uptime.',
            image: '/Logos/Datacenter1.jpg',
            imagePosition: 'right'
        },
        {
            id: 3,
            title: 'Business Software',
            description: 'Tailored ERP, CRM, ITSM, HRMS, and collaboration platforms that align with your business goals and scale as you grow.',
            image: '/Logos/erp_background_image.png',
            imagePosition: 'left'
        },
        {
            id: 4,
            title: 'Custom Development',
            description: 'Modern web and mobile app development — secure, scalable, and optimized for user experience and performance.',
            image: '/Logos/development_background_image.jpg',
            imagePosition: 'right'
        },
        {
            id: 5,
            title: 'Training & Education',
            description: 'Hands-on learning paths in cybersecurity, cloud, and systems — designed for upskilling teams with real-world expertise.',
            image: '/Logos/itsupport_background_image.jpg',
            imagePosition: 'left'
        },
        {
            id: 6,
            title: 'Technology Consulting',
            description: 'From audits to strategy — actionable insights, architecture planning, and compliance guidance to drive innovation.',
            image: '/Logos/monitoring_img.png',
            imagePosition: 'right'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Empowering Innovation
                        <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2">
                            & Protection
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Comprehensive solutions spanning cybersecurity, infrastructure, development, and strategic consulting —
                        designed for IT professionals and business leaders who demand excellence.
                    </p>
                </motion.div>

                {/* Alternating Blocks */}
                <div className="space-y-24">
                    {blocks.map((block, index) => (
                        <motion.div
                            key={block.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col lg:flex-row items-center gap-12 ${block.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image Section */}
                            <div className="flex-1 relative">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative overflow-hidden rounded-2xl shadow-2xl"
                                >
                                    <img
                                        src={block.image}
                                        alt={block.title}
                                        className="w-full h-80 object-cover"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                    {/* Floating Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                                    >
                                        <span className="text-primary font-semibold text-sm">
                                            0{block.id}
                                        </span>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: block.imagePosition === 'left' ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        {block.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        {block.description}
                                    </p>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center text-primary font-semibold text-lg group"
                                    >
                                        <span>Learn More</span>
                                        <motion.div
                                            className="ml-2"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ArrowRight size={20} />
                                        </motion.div>
                                    </motion.button>
                                </motion.div>

                                {/* Decorative Elements */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex space-x-2"
                                >
                                    {[...Array(3)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-secondary' : 'bg-accent'
                                                }`}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-20 pt-16 border-t border-gray-200"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Ready to Transform Your Technology Strategy?
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let's discuss how Atlas Defenders can elevate your security posture,
                        optimize your infrastructure, and accelerate your digital transformation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-primary via-secondary to-accent text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            Schedule Consultation
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            Explore Services
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EmpoweringInnovation;