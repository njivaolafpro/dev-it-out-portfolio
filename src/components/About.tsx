import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-beige" id="about">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-black mb-8">About Me</h2>
        <div className="max-w-3xl">
          <p className="text-black mb-6">
            I'm a seasoned Full Stack Developer with 8 years of experience building dynamic and scalable web applications.
            I specialize in API development, API integration, real-time applications, and finance-related systems 
            such as billing and contract APIs.
          </p>
          <p className="text-black mb-6">
            My work spans various industries including real estate, food tech, and fintech, where I've successfully 
            delivered robust solutions tailored to unique business needs.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Frontend</h3>
              <ul className="text-black space-y-2">
                <li>React.js</li>
                <li>Vue.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Backend</h3>
              <ul className="text-black space-y-2">
                <li>Node.js</li>
                <li>NestJS</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
