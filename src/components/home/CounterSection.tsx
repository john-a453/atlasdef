import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Clock, CheckCircle, Users } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) => {
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
        
        if (progress < 1) {
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

const CounterSection = () => {
  const counters = [
    {
      icon: Clock,
      value: 10,
      suffix: '+',
      label: 'Years of Experience',
      description: 'Protecting organizations across Morocco'
    },
    {
      icon: CheckCircle,
      value: 200,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful security implementations'
    },
    {
      icon: Users,
      value: 150,
      suffix: '+',
      label: 'Clients Served',
      description: 'Trusted by leading organizations'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
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
            Trusted by Organizations Across Morocco
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of organizations strengthen their cybersecurity posture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {counters.map((counter, index) => {
            const Icon = counter.icon;
            return (
              <motion.div
                key={counter.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <motion.div
                    className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={32} className="text-accent" />
                  </motion.div>
                  
                  {/* Animated ring */}
                  <motion.div
                    className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-2 border-accent/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                <div className="mb-4">
                  <Counter 
                    end={counter.value} 
                    suffix={counter.suffix}
                    duration={2.5}
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {counter.label}
                </h3>
                
                <p className="text-gray-300">
                  {counter.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;