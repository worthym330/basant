"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js & Express.js</li>
        <li>React.js & Next.js</li>
        <li>TypeScript</li>
        <li>AWS, GCP, Vercel</li>
        <li>PostgreSQL, MySQL, MongoDB</li>
        <li>Jenkins, GitHub Actions</li>
        <li>Prometheus, Grafana</li>
        <li>Core PHP</li>
      </ul>
    ),
  },
  {
    title: "Key Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Designed and implemented scalable web applications using TypeScript, NodeJS, and PostgreSQL</li>
        <li>Built NRICH invoicing system with ReactJS, NestJS, and MySQL</li>
        <li>Developed DayBreakPass booking platform using TypeScript, React, ExpressJS, and MongoDB</li>
        <li>Achieved 25% reduction in page load times through optimization</li>
      </ul>
    ),
  },
  {
    title: "Expertise",
    id: "expertise",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Development</li>
        <li>DevOps & Cloud Infrastructure</li>
        <li>Database Management</li>
        <li>System Architecture</li>
        <li>Performance Optimization</li>
        <li>Team Leadership</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/images/about-image.png" className="w-full h-full"/>
        <div className="mt-4 lg:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a highly skilled and adaptable Full Stack and DevOps Engineer with a strong background in building scalable, 
            efficient, and user-friendly applications. With extensive experience in NodeJS, ExpressJS, and modern frontend frameworks, 
            I specialize in delivering end-to-end solutions that meet business needs. My expertise extends to implementing robust 
            DevOps practices, ensuring seamless deployment, and maintaining high system availability.
            <br/><br/>
            I bring comprehensive knowledge in backend development with NodeJS and ExpressJS, frontend development using ReactJS 
            and NextJS, and cloud platforms including AWS, GCP, and Vercel. My focus on continuous learning and staying updated 
            with industry trends enables me to deliver innovative solutions while maintaining high standards of code quality 
            and system performance.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              Achievements
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("expertise")}
              active={tab === "expertise"}
            >
              Expertise
            </TabButton>
          </div>
          <div className="mt-8"></div>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
    </section>
  );
};

export default AboutSection;
