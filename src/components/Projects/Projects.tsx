import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './style.css';

const projects = [
  {
    title: "To do",
    description: "Good tools make application development quicker and easier to maintain than if you did everything by hand.",
    image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
  },
  {
    title: "To do",
    description: "Good tools make application development quicker and easier to maintain than if you did everything by hand.",
    image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
  },
  {
    title: "To do",
    description: "Good tools make application development quicker and easier to maintain than if you did everything by hand.",
    image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
  },
  {
    title: "To do",
    description: "Good tools make application development quicker and easier to maintain than if you did everything by hand.",
    image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
  },
  {
    title: "To do",
    description: "Good tools make application development quicker and easier to maintain than if you did everything by hand.",
    image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
  },
  // Repeat other projects...
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20" id="projects">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        {/* Grid Container */}
        <div className="grid-container">
          {projects.map((project, index) => (
            <div key={index} className="flip">
              <div
                className="front"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              >
                <h1>{project.title}</h1>
              </div>
              <div className="back">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
