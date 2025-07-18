import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mohamed Larbi',
    position: 'CTO, Maroc Telecom',
    content: 'Atlas Defenders implemented a comprehensive security infrastructure that significantly improved our threat detection capabilities. Their team demonstrated exceptional expertise in network security.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Aisha Benali',
    position: 'IT Director, Bank Al-Maghrib',
    content: 'We\'ve been working with Atlas Defenders for over 5 years now. Their approach to security is proactive and comprehensive, addressing the unique challenges faced by financial institutions.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Karim Belhassan',
    position: 'Network Manager, Royal Air Maroc',
    content: 'The SD-WAN solution implemented by Atlas Defenders has transformed our network infrastructure, providing unparalleled reliability and performance across all our locations.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2 className="text-white mb-4">What Our Clients Say</h2>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto">
            Hear from organizations that have transformed their security posture with our solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm relative"
            >
              <Quote className="absolute top-4 right-4 text-white/20" size={32} />
              <p className="text-gray-200 mb-6 z-10 relative">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;