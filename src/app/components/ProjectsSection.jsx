"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Foodiiee",
    description:
      "Created an online food ordering platform with a React.js frontend and Django REST Framework backend, highlighting expertise in full-stack development.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/worthym330/foodiiee",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "DayBreakPass",
    description:
      "Daybreakpass is an innovative platform allowing users to access hotel amenities through daily passes. Built with TypeScript, React, Tailwind CSS, Express.js, and MongoDB, the project provides a seamless experience for users to book and utilize various hotel services without booking a room. It features a user-friendly interface, dynamic booking system, and efficient management of amenities across multiple hotels.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/worthym330",
    previewUrl: "https://www.daybreakpass.com",
  },
  {
    id: 2,
    title: "SpikeReach",
    description:
      "Daybreakpass is an innovative platform allowing users to access hotel amenities through daily passes. Built with TypeScript, React, Tailwind CSS, Express.js, and MongoDB, the project provides a seamless experience for users to book and utilize various hotel services without booking a room. It features a user-friendly interface, dynamic booking system, and efficient management of amenities across multiple hotels.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/worthym330",
    previewUrl: "https://www.spikereach.com",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "Developed a fully functional e-commerce website using Webpack, React, and Redux for the frontend, and Express.js with MongoDB for the backend. Implemented dynamic product listing, user authentication, shopping cart, and order management features. Leveraged Redux for efficient state management and integrated MongoDB for scalable data storage, ensuring smooth performance and a seamless user experience.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://eyecare-ui.vercel.app/",
  },
  {
    id: 4,
    title: "MSKEndocare",
    description: "Developed Endocare, a doctor's clinic website using HTML, CSS, and JavaScript. The website provides patients with easy access to clinic information, appointment scheduling, and doctor profiles. Focused on building a clean and responsive interface for a seamless user experience across devices.",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://mskendocarev2.vercel.app/"
  },
  {
    id: 5,
    title: "Advay Borivali — Advertisement",
    description: "Created a landing page for advertisements using HTML, CSS, and JavaScript. The landing page was designed to be visually appealing and responsive, focusing on effective user engagement through call-to-action elements and sleek design, aimed at maximizing conversions and lead generation.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/worthym330/Kalpataru",
    previewUrl: "https://www.advay-borivali.site"
  },
  {
    id: 6,
    title: "NRICH",
    description:
      "Developed and implemented a comprehensive invoicing system using Nest JS, ReactJS, and MySQL. Designed a feature allowing easy creation of invoices by class, reducing manual effort and improving productivity. Integrated Xero services for streamlined invoicing, enabling teachers to manage invoices and access financial records with ease.",
    image: "https://www.nrichlearning.com.au/wp-content/uploads/2022/11/e-nrich-logo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Solitaire Planet",
    description:
      "Built and enhanced critical features for Solitaire Planet using React, Nest JS, and PostgreSQL. Developed lead conversion features, automated invoice generation, and implemented order completion tracking for seamless order management and invoicing.",
    image: "https://solitaireplanet.com/static/media/solitaire_planet_logo-remove.f3d5854106539990e8dc.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "ITK",
    description:
      "Spearheaded the creation of the App Lab feature using NestJS, Prisma, PostgreSQL, MongoDB, ReactJS, and Redux. Integrated the feature across platforms and ensured a consistent user experience. Architected scalable backend infrastructure to support future growth.",
    image: "https://itkkids.xyz/images/itk%20logo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Clinica-Med",
    description:
      "Contributed as a Frontend Developer using React.js and Fuse for UI design. Implemented a versatile component architecture and security measures in the student testing module, enhancing usability and preventing unauthorized access. Introduced a user-centric feature for automatic test submission on tab changes.",
    image: "https://clinica-med.com/assets/images/logo/CMLwhitelogo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Wix Website — Diabetic Doctors",
    description: "Developed a Wix website tailored for diabetic doctors. The site was designed to provide essential information and resources for diabetic care, featuring a user-friendly interface and easy navigation. It includes sections for doctor profiles, patient resources, and appointment scheduling.",
    image: "https://static.wixstatic.com/media/841e12_5eb753735a5e471db61b19c4fb5b72ef~mv2.png/v1/fill/w_133,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0799e6b3-4535-4580-9203-9330996c65c0-removebg-preview.png",
    tag: ["All", "No Code"],
    gitUrl: "https://github.com/worthym330",
    previewUrl: "https://www.mysugars.in"
  },
  {
    id: 11,
    title: "Doctors — Advertisement",
    description: "Developed Endocare, a doctor's clinic website using HTML, CSS, and JavaScript. The website provides patients with easy access to clinic information, appointment scheduling, and doctor profiles. Focused on building a clean and responsive interface for a seamless user experience across devices.",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://mskendocarev2.vercel.app/"
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
        <ProjectTag
          onClick={handleTagChange}
          name="No Code"
          isSelected={tag === "No Code"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
