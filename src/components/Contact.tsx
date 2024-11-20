import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-800" id="contact">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div className="flex justify-center gap-8">
          <a href="mailto:njiva.olaf@gmail.com"
             className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/njiva-olaf/"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/njiva-olaf"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}