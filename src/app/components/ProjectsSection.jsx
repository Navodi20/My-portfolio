"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Restaurant Management System",
    description: "This project is a restaurant management system developed with Next.js to enhance efficiency and user experience. It features dynamic routing for menu categories—breakfast, lunch, dinner, beverages, and desserts—allowing customers to easily browse and order their favorite dishes. The website includes a services page to introduce the restaurant and a contact page for inquiries. Users can select food items and quantities seamlessly, streamlining the ordering process for a better dining experience.",
    image: "./images/projects/1.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "DriveEase - Taxi booking system",
    description: "This project is a taxi booking system developed using Java to streamline the process of car rentals. It features a user-friendly menu for selecting options like car registration, customer management, rentals, and returns. Drivers can easily register their vehicles in the system, while customers can effortlessly book cars based on their needs. The platform enhances the overall booking experience by simplifying interactions between drivers and customers, making transportation more accessible and efficient.",
    image: "./images/projects/2.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Movie Explorer",
    description: "This project is a movie explorer web application developed using Next.js, designed to provide an engaging platform for film enthusiasts. Utilizing an API, the application features a comprehensive table of films, allowing users to search for specific movie titles. The user interface is intuitive, enabling seamless navigation through various film genres and categories. Users can explore detailed information about each film. By integrating a robust search function and user-friendly design, this project aims to create a satisfying and efficient film exploration experience.",
    image: "./images/projects/3.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 4,
    title: "To-Do List",
    description: "This project is a simple to-do list application developed using JavaScript, designed to help users manage their tasks effectively. The application features an intuitive interface that allows users to easily add, edit, and delete tasks, making it a convenient tool for staying organized. The application aims to enhance productivity by simplifying task management, allowing users to focus on what matters most. This is a practical solution for anyone looking to streamline their daily tasks and improve overall efficiency.",
    image: "./images/projects/4.png",
    tag: ["All", "Todo-List"],
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Rock-Paper-Scissors - Simple game",
    description: "This project is a simple game developed using JavaScript, designed to provide an interactive and fun experience for users. In this game, the computer randomly selects a move, and users can then choose their own move, either rock, paper, or scissors. The application determines the winner based on the classic game rules: rock crushes scissors, scissors cuts paper, and paper covers rock. Users receive instant feedback on the outcome of each round, enhancing engagement and enjoyment.",
    image: "./images/projects/5.png",
    tag: ["All", "Game"],
    previewUrl: "/",
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
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Todo-List"
          isSelected={tag === "Todo-List"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
              
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
