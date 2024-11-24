import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const experiences = [
  {
    title: "Full Stack JavaScript Engineer",
    company: "Emeria Technologies",
    period: "June 2024 - Present",
    description: "Developing and optimizing billing and property management solutions. Integrating critical features to improve user experience and operational efficiency, including contract management and accounting systems. Contributing to the 'Tech Quality' community with end-to-end testing improvements."
  },
  {
    title: "Online Tutor (Full Stack JavaScript)",
    company: "Superprof",
    period: "February 2020 - Present",
    description: "Helping students improve their web development skills with a focus on APIs and algorithms. Providing mentorship in full stack JavaScript technologies."
  },
  {
    title: "Software Engineer",
    company: "Planity",
    period: "September 2023 - March 2024",
    description: "Developed a proof of concept for integrating the Stripe API (Payment Link). Maintained the appointment management platform and optimized queries for better performance."
  },
  {
    title: "Lead Developer",
    company: "BOLK",
    period: "January 2023 - September 2023",
    description: "Led the roadmap planning and prioritization in collaboration with the CTO. Managed a fleet of 10 machines deployed across multiple locations in Paris. Developed and maintained back-office systems using Node.js and Vue.js, and ensured API monitoring and crash management. Implemented unit and integration tests using Jest and Cucumber."
  },
  {
    title: "Full Stack Developer @ TheFork",
    company: "Celaneo - Agence Digitale",
    period: "June 2021 - January 2023",
    description: "Enhanced the billing system (country configuration), maintained billing and contract management APIs, and revamped restaurant settings (availability management). Managed data verification and scripting in Snowflake, with a focus on SQL. Migrated system to TypeScript."
  },
  {
    title: "Backend Developer @ France.TV",
    company: "Celaneo - Agence Digitale",
    period: "August 2020 - June 2021",
    description: "Implemented BDD testing modules with Cucumber and Gherkin, optimized API performance, and worked on authentication and service proxy microservices. Managed environment deployment with Jenkins, Docker, and Kubernetes. Contributed to user consent management and marketing email services."
  },
  {
    title: "Backend Developer @ Spaycial",
    company: "Celaneo - Agence Digitale",
    period: "November 2019 - August 2020",
    description: "Integrated third-party banking data providers via API (PSD2) into a Node.js backend. Developed OAuth authentication for user login and created RESTful services."
  },
  {
    title: "Associate Software Engineer",
    company: "AGILEUM",
    period: "January 2018 - October 2019",
    description: "Launched mobile applications for the government of Mauritius, including MoKouran, School App, and Emergency Alert. Created web and mobile app back-ends using Loopback (Node.js), Angular/ReactJS, and Xamarin/React Native for mobile solutions. Deployed systems on Linux/Windows and incorporated DevOps practices (Docker/Jenkins)."
  },
  {
    title: "Full Stack Developer",
    company: "AGILEUM",
    period: "July 2017 - December 2017",
    description: "Developed web and mobile applications with a focus on cross-platform solutions using Angular/React and Xamarin."
  },
  {
    title: "Intern (Developer) - Augmented and Virtual Reality",
    company: "EON Reality",
    period: "August 2016 - June 2017",
    description: "Developed VR and AR applications, including refactoring iDome simulations for cinema experiences. Designed shaders in GLSL and worked on simulation management systems for EON Reality's office (Java, Unity 3D)."
  },
];


export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-beige" id="experience">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-black mb-12">Experience</h2>
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
              <h3 className="text-xl font-semibold text-black">{exp.title}</h3>
              <p className="text-blue-400 mb-2">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
              <p className="text-black">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}