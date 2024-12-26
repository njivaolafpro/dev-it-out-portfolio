import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./about.style.css";

const technos = [
  { image: "logos/technos/nodedotjs.svg", name: "Node.js" },
  { image: "logos/technos/awslambda-color.svg", name: "AWS Lambda" },
  { image: "logos/technos/cucumber-color.svg", name: "Cucumber" },
  { image: "logos/technos/docker-color.svg", name: "Docker" },
  { image: "logos/technos/graphql-color.svg", name: "GraphQL" },
  { image: "logos/technos/jest-color.svg", name: "Jest" },
  { image: "logos/technos/mocha-color.svg", name: "Mocha" },
  { image: "logos/technos/nestjs-color.svg", name: "NestJS" },
  { image: "logos/technos/postgresql-color.svg", name: "PostgreSQL" },
  { image: "logos/technos/prisma-color.svg", name: "Prisma" },
  { image: "logos/technos/react-color.svg", name: "React" },
  { image: "logos/technos/sequelize-color.svg", name: "Sequelize" },
  { image: "logos/technos/snowflake-color.svg", name: "Snowflake" },
  { image: "logos/technos/temporal-color.svg", name: "Temporal" },
  { image: "logos/technos/typescript-color.svg", name: "TypeScript" },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100" id="about">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 sm:px-12"
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I'm a seasoned Full Stack Developer with 8 years of experience
            building dynamic and scalable web applications. I specialize in API
            development, integration, real-time applications, and
            finance-related systems such as billing and contract APIs.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            My expertise spans diverse sectors, including real estate, food
            tech, and fintech, where I’ve crafted robust solutions to address
            complex business needs. By merging advanced backend systems with
            seamless frontend experiences, I ensure solutions that are both
            functional and user-friendly.
          </p>
        </div>

        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Technologies I love working with
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mx-auto">
          {technos.map((techno, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center justify-center bg-beige from-gray-100 to-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={techno.image}
                alt={`${techno.name} Icon`}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-700 text-center">
                {techno.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
