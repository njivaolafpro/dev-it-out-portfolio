import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Bocasay Madagascar",
    period: "2023 - Present",
    description: "Developing and maintaining web applications using Vue.js, NestJS, and PostgreSQL. Working in an agile environment with international teams."
  },
  {
    title: "Full Stack Developer",
    company: "Ingenosya",
    period: "2022 - 2023",
    description: "Built and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality solutions."
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2021 - 2022",
    description: "Developed custom web solutions for various clients, focusing on React and Node.js applications."
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-800" id="experience">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>
        <div className="max-w-3xl space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-blue-500"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-blue-400 mb-2">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}