import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Projects from "./Projects/Projects";

const technos = [
  {
    image: "logos/technos/nodedotjs.svg",
  },
  {
    image: "logos/technos/awslambda-color.svg",
  },
  {
    image: "logos/technos/cucumber-color.svg",
  },
  {
    image: "logos/technos/docker-color.svg",
  },
  {
    image: "logos/technos/graphql-color.svg",
  },
  {
    image: "logos/technos/jest-color.svg",
  },
  {
    image: "logos/technos/mocha-color.svg",
  },
  {
    image: "logos/technos/nestjs-color.svg",
  },
  {
    image: "logos/technos/postgresql-color.svg",
  },
  {
    image: "logos/technos/prisma-color.svg",
  },
  {
    image: "logos/technos/react-color.svg",
  },
  {
    image: "logos/technos/sequelize-color.svg",
  },
  {
    image: "logos/technos/snowflake-color.svg",
  },
  {
    image: "logos/technos/temporal-color.svg",
  },
  {
    image: "logos/technos/typescript-color.svg",
  },
];
export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
        <h2 className="text-3xl font-bold text-black mb-8">About Me</h2>
        <div className="max-w-3xl">
          <p className="text-black mb-6">
            I'm a seasoned Full Stack Developer with 8 years of experience
            building dynamic and scalable web applications. I specialize in API
            development, API integration, real-time applications, and
            finance-related systems such as billing and contract APIs.
          </p>
          <p className="text-black mb-6">
            Throughout my career, I have successfully worked across diverse
            sectors, including real estate, food tech, and fintech, tailoring
            robust solutions to meet unique business challenges. My deep
            understanding of modern web technologies enables me to bridge the
            gap between complex backend systems and intuitive frontend
            interfaces, ensuring seamless user experiences.
          </p>
        </div>
        <div className="container mx-auto flex space-x-4 ">
          {technos.map((techno, index) => (
            <div
              key={index}
              className="flex-none w-20 aspect-square rounded-full flex justify-center items-center shadow-md p-4 hover:shadow-lg hover:scale-105 transition-transform hover:bg-beige transition-all duration-150"
            >
              <img src={techno.image} className="text-color: #5FA04E" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
