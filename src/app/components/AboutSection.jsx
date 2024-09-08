"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Mongo DB</li>
        <li>Nest.js</li>
        {/* <li>Flutter</li> */}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Thakur College of Science and Commerce, Mumbai</li>
        <li>Shri TP Bhatia College of Science, Mumbai</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Engineering in Agile process from Coursera</li>
        <li>Database Operations in MariaDB using Python from Infosys</li>
        <li>
          Introduction to cloud 1 & Introduction to cloud 2 & Machine Learning
          from AWS Academy.
        </li>
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
            I am Basant Mandal, a Software Engineer from Kandivali (West),
            Mumbai. I have experience in both frontend and backend development,
            with expertise in React JS, Node JS, Prisma, MySQL, PostgreSQL, and
            MongoDB. I previously worked as a Jr. Software Developer at One
            Percent Startups, contributing to projects like NRICH and ITK. I
            hold a BSc in Computer Science from Thakur College of Science &
            Commerce, Mumbai. I am a quick learner and always looking to expand
            my knowledge and skill set. I am a team player and excited to work
            with others to create amazing applications. Additionally, I have
            certifications in Agile processes, cloud computing, and machine
            learning, focusing on building efficient web and mobile applications
            with cloud integration.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
