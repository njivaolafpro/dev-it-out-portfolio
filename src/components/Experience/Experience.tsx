import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './experience.style.css';

const experiences = [
  {
    title: "Full Stack JavaScript Engineer",
    company: "Emeria Technologies",
    period: "June 2024 - Present",
    description: "Developed and optimized billing and property management solutions. Integrating critical features to improve user experience and operational efficiency, including contract management and accounting systems. Contributing to the 'Tech Quality' community with end-to-end testing improvements.",
    logo: "logos/Emeria_logo.jpg",
    badges: [
      "Node Js",
      "React Js",
      "Typescript",
      "MongoDB",
      "Snowflake"

    ]
  },
  {
    title: "Online Tutor (Full Stack JavaScript)",
    company: "Superprof",
    period: "February 2020 - Present",
    description: "Helping students improve their web development skills with a focus on APIs and algorithms. Providing mentorship in full stack JavaScript technologies.",
    logo: "logos/logo-superprof.png",
    badges: [
      "Functional programming",
      "Javascript",
      "Typescript",
      "Database design"
    ]
  },
  {
    title: "Software Engineer",
    company: "Planity",
    period: "September 2023 - March 2024",
    description: "Developed a proof of concept for integrating the Stripe API (Payment Link). Maintained the appointment management platform and optimized queries for better performance."
    ,logo: "logos/planity.png",
    badges: [
      "Node Js",
      "AWS Lambda",
      "Firebase Functions",
      "Firebase",
      "React Js",
      "Algolia",
      "Stripe",
      "ElasticSearch"
    ]
  },
  {
    title: "Lead Developer",
    company: "BOLK",
    period: "January 2023 - September 2023",
    description: "Led the roadmap planning and prioritization in collaboration with the CTO. Managed a fleet of 10 machines deployed across multiple locations in Paris. Developed and maintained back-office systems using Node.js and Vue.js, and ensured API monitoring and crash management. Implemented unit and integration tests using Jest and Cucumber."
    ,logo: "logos/bolk.jpeg",
    badges: [
      "Node Js",
      "Socket.IO",
      "Vue Js",
      "Jest",
      "PostgreSQL"
    ]

  },
  {
    title: "Full Stack Developer @ TheFork",
    company: "Celaneo - Agence Digitale",
    period: "June 2021 - January 2023",
    description: "Enhanced the billing system (country configuration), maintained billing and contract management APIs, and revamped restaurant settings (availability management). Managed data verification and scripting in Snowflake, with a focus on SQL. Migrated system to TypeScript."
    ,logo: "unknown",
    badges: [
      "Node Js",
      "React Js",
      "Typescript",
      "Snowflake",
      "PostgreSQL"
    ]
  },
  {
    title: "Backend Developer @ France.TV",
    company: "Celaneo - Agence Digitale",
    period: "August 2020 - June 2021",
    description: "Implemented BDD testing modules with Cucumber and Gherkin, optimized API performance, and worked on authentication and service proxy microservices. Managed environment deployment with Jenkins, Docker, and Kubernetes. Contributed to user consent management and marketing email services."
    ,logo: "logos/ftv.png",
    badges: [
      "Koa Js",
      "Express Js",
      "Cucumber",
      "Gherkin",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Microservices",
    ]

  },
  {
    title: "Backend Developer @ Spaycial",
    company: "Celaneo - Agence Digitale",
    period: "November 2019 - August 2020",
    description: "Integrated third-party banking data providers via API (PSD2) into a Node.js backend. Developed OAuth authentication for user login and created RESTful services."
    ,logo: "logos/spaycial.png"

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
    ,logo: "logos/eon.jpg"

  },
];
export default function ExperienceTimeline() {
  return (
  <section
    className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200"
    id="experience"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        My Experience
      </h2>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-0 left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-yellow-500"></div>
  
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col sm:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute w-6 h-6 bg-yellow-500 rounded-full border-4 border-white z-10 left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2`}
              ></div>
  
              {/* Experience Content */}
              <div
                className={`relative shadow-md rounded-lg p-4 sm:p-6 w-full sm:w-10/12 md:w-5/12 bg-gradient-to-r from-yellow-200 ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                {/* Logo */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 overflow-hidden shadow-md rounded-full flex items-center justify-center bg-gray-50 mb-4 sm:mb-0 sm:me-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="object-contain max-w-[70%] max-h-[70%]"
                  />
                </div>
  
                {/* Text Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-blue-500 font-medium text-sm sm:text-base mb-2">
                    {exp.company}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-4">
                    {exp.period}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.badges?.map((badge, i) => (
                      <span
                        key={i}
                        className="bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
  
  );
}
