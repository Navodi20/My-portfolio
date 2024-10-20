"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Currently reading for a BSc in IT at University of Sri Jayawardenepura</li>
        <li>
          Advanced Levels at Devi Balika Vidyalaya,Colombo 8 (Art stream) - Achieved 3 A's with a GPA of 1.81
        </li>
        <li>Ordinary Levels at Gothami Balika Vidyalaya,Colombo 10 - Achieved 8 A's and 1 B</li>
      </ul>
    ),
  },
  {
    title: "Diplomas",
    id: "diplomas",
    content: (
      <ul className="list-disc pl-2">
        <li>Diploma in Internal relations - BCIS(Bandaranaike Center for International Studies)</li>
        <li>Diploma in Human Resources Mnagement - SITC camous</li>
        <li>Diploma in IT(Ditec) - Esoft Metro Campus</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>SQL</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition(); 
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="./images/image 2.jpg" width={500} height={500} alt="About me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a motivated and curious individual with a strong passion for continuous learning and growth. I thrive in dynamic environments that challenge me to think critically and creatively. Collaboration and teamwork are at the core of my approach, and I’m always eager to take on new challenges that push me to develop both personally and professionally.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("diplomas")}
              active={tab === "diplomas"}
            >
              Diplomas
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
          </div>
          <div className="mt-8">
            {isPending ? (
              <div>Loading...</div> 
            ) : (
              TAB_DATA.find((t) => t.id === tab).content
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
