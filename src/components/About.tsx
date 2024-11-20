import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20" id="about">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
        <div className="max-w-3xl">
          <p className="text-gray-300 mb-6">
            I'm a passionate Full Stack Developer with expertise in building modern web applications.
            Currently working at Bocasay Madagascar, I specialize in developing robust solutions using cutting-edge technologies.
          </p>
          <p className="text-gray-300 mb-6">
            My expertise spans across both frontend and backend development, with a strong foundation in
            React, Node.js, and various modern web technologies. I have a particular interest in creating
            scalable applications and solving complex technical challenges.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>React.js</li>
                <li>Vue.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
              <ul className="text-gray-300 space-y-2">
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