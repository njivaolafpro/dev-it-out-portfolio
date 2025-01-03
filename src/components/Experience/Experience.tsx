import { useState } from 'react';
import './experience.style.css';

const experiences = [
  {
    title: "Full Stack JavaScript Engineer",
    company: "Emeria Technologies",
    period: "June 2024 - Present",
    description: "Developed and optimized billing and property management solutions. Integrating critical features to improve user experience and operational efficiency, including contract management and accounting systems. Contributing to the 'Tech Quality' community with end-to-end testing improvements.",
    logo: "logos/Emeria_logo.jpg",
    backgroundImage: "url('backgrounds/emeria.png')",
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
    backgroundImage: "url('backgrounds/superprof.png')",
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
    description: "Developed a proof of concept for integrating the Stripe API (Payment Link). Maintained the appointment management platform and optimized queries for better performance.",
    logo: "logos/planity.png",
    backgroundImage: "url('backgrounds/planity.png')",
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
    description: "Led the roadmap planning and prioritization in collaboration with the CTO. Managed a fleet of 10 machines deployed across multiple locations in Paris. Developed and maintained back-office systems using Node.js and Vue.js, and ensured API monitoring and crash management. Implemented unit and integration tests using Jest and Cucumber.",
    logo: "logos/bolk.jpeg",
    backgroundImage: "url('backgrounds/bolk.png')",
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
    description: "Enhanced the billing system (country configuration), maintained billing and contract management APIs, and revamped restaurant settings (availability management). Managed data verification and scripting in Snowflake, with a focus on SQL. Migrated system to TypeScript.",
    logo: "unknown",
    backgroundImage: "url('backgrounds/thefork.png')",
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
    description: "Implemented BDD testing modules with Cucumber and Gherkin, optimized API performance, and worked on authentication and service proxy microservices. Managed environment deployment with Jenkins, Docker, and Kubernetes. Contributed to user consent management and marketing email services.",
    logo: "logos/ftv.png",
    backgroundImage: "url('backgrounds/ftv.png')",
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
    description: "Integrated third-party banking data providers via API (PSD2) into a Node.js backend. Developed OAuth authentication for user login and created RESTful services.",
    logo: "logos/spaycial.png",
    backgroundImage: "url('backgrounds/spaycial.png')",
  },
  {
    title: "Associate Software Engineer",
    company: "AGILEUM",
    period: "July 2017 - October 2019",
    backgroundImage: "url('backgrounds/agileum.png')",
    description: "Launched mobile applications for the government of Mauritius, including MoKouran, School App, and Emergency Alert. Created web and mobile app back-ends using Loopback (Node.js), Angular/ReactJS, and Xamarin/React Native for mobile solutions. Deployed systems on Linux/Windows and incorporated DevOps practices (Docker/Jenkins)."
  },
  {
    title: "Intern (Developer) - Augmented and Virtual Reality",
    company: "EON Reality",
    period: "August 2016 - June 2017",
    backgroundImage: "url('backgrounds/eon-reality.png')",
    description: "Developed VR and AR applications, including refactoring iDome simulations for cinema experiences. Designed shaders in GLSL and worked on simulation management systems for EON Reality's office (Java, Unity 3D).",
    logo: "logos/eon.jpg"
  },
];
export default function ExperienceTimeline() {
  const [flipped, setFlipped] = useState<number|null>(null);

  const handleFlip = (index: number) => {
    if (flipped === index) {
      setFlipped(null);
    } else {
      setFlipped(index);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          My Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card-container relative" // Add relative positioning
              onClick={() => handleFlip(index)}
            >
              <div
                className={`experience-card ${flipped === index ? 'flipped' : ''}`}
              >
                {/* Front of the card */}
                <div className="experience-card-front" style={{ backgroundImage: exp.backgroundImage, backgroundSize: "cover", backgroundPosition: "center" }}>
                </div>

                {/* Back of the card */}
                <div className="experience-card-back">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-blue-500 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                  <p className="text-sm text-gray-700">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.badges?.map((badge, i) => (
                      <span
                        key={i}
                        className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
