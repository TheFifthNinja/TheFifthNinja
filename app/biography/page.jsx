'use client';

import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaAws, FaJava, FaLinux, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiKotlin, SiMysql, SiVagrant, SiMongodb } from "react-icons/si";
import { BiLogoCPlusPlus, BiLogoPostgresql } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

// About Data
const about = {
  title: "About me",
  description: "I am a Software Engineering and Computer Science major, eagerly awaiting graduation at the end of the year. I'm known for being friendly and quick-witted, though some would say I can be a bit of a 'waffler' at times. In my free time, I'm a huge basketball enthusiast — I not only play the sport but also closely follow the NBA. While basketball is my greatest passion, I've also developed a love for other sports like tennis and rugby. Cooking is another interest I inherited from my mother, who has worked as a restaurant chef. With a background in both athletics and culinary arts, my path to a career in IT might seem like an unexpected twist, but such is life.",
  info: [
    { fieldName: "Name", fieldValue: "Kevin Albert" },
    { fieldName: "Email", fieldValue: "Kevinalbert774@gmail.com" },
    { fieldName: "Phone", fieldValue: "(+64) 21 239 3379" },
    { fieldName: "Nationality", fieldValue: "New Zealand" },
    { fieldName: "Availability", fieldValue: "Ready to go" },
    { fieldName: "Languages", fieldValue: "English, Tamil" }
  ]
};

// Experience Data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "Work Experience",
  description: "Gained leadership, communication, and problem-solving skills through managing teams and daily operations.",
  items: [
    { company: "Four Square", position: "Sales Assistant", duration: "2017 - 2018" },
    { company: "Four Square", position: "Duty Manager", duration: "2018 - 2020" },
  ]
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description: "I have a strong academic background in software engineering and computer science. Here are some of the key details of my education:",
  items: [
    { institution: "University of Otago", degree: "Bachelor of Applied Science", major: "Software Engineering and Computer Science (Double Major)", duration: "2022 - 2024" }
  ]
}

// Skills Data
const skills = {
  title: "Skills",
  description: "I have experience working with a wide range of technologies and tools. Here are some of the key skills that I bring to the table:",
  skillList: [
    { icon: <BiLogoCPlusPlus />, name: "C++", link: "https://isocpp.org/" },
    { icon: <FaHtml5 />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { icon: <FaCss3 />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { icon: <FaJs />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { icon: <FaReact />, name: "React", link: "https://react.dev/" },
    { icon: <SiNextdotjs />, name: "Next.js", link: "https://nextjs.org/" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { icon: <FaNodeJs />, name: "Node.js", link: "https://nodejs.org/" },
    { icon: <FaPython />, name: "Python", link: "https://www.python.org/" },
    { icon: <FaAws />, name: "AWS", link: "https://aws.amazon.com/" },
    { icon: <FaJava />, name: "Java", link: "https://www.java.com/" },
    { icon: <FaFigma />, name: "Figma", link: "https://www.figma.com/" },
    { icon: <FaLinux />, name: "Linux", link: "https://www.linux.org/" },
    { icon: <FaDocker />, name: "Docker", link: "https://www.docker.com/" },
    { icon: <SiTypescript />, name: "TypeScript", link: "https://www.typescriptlang.org/" },
    { icon: <SiKotlin />, name: "Kotlin", link: "https://kotlinlang.org/" },
    { icon: <BiLogoPostgresql />, name: "PostgreSQL", link: "https://www.postgresql.org/" },
    { icon: <SiMysql />, name: "MySQL", link: "https://www.mysql.com/" },
    { icon: <SiVagrant />, name: "Vagrant", link: "https://www.vagrantup.com/" },
    { icon: <SiMongodb />, name: "MongoDB", link: "https://www.mongodb.com/" },
  ]
};

const titleVariants = {
  animate: {
    borderBottom: ['2px solid rgba(228, 0, 58, 0.2)', '2px solid rgba(228, 0, 58, 0.8)', '2px solid rgba(228, 0, 58, 0.2)'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};


const Resume = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(about.info[1].fieldValue);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col gap-[30px]">
          <TabsList className="flex justify-center space-x-2 mb-8">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="flex-1">
            {/* About Me */}
            <TabsContent value="about" className="w-full text-center">
              <div className="flex flex-col gap-[30px]">
                <motion.h3
                  className="text-4xl font-bold p-2 inline-block"
                  variants={titleVariants}
                  animate="animate"
                  style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.2)' }}
                >
                  {about.title}
                </motion.h3>
                <p className="max-w-[800px] text-lg text-white/80 mx-auto leading-relaxed">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-[620px] mx-auto">
                  {about.info.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-center gap-4"
                    >
                      <span className="text-white/60 font-medium">{item.fieldName}:</span>
                      {item.fieldName === "Email" ? (
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger onClick={handleCopyEmail} className="cursor-pointer text-xl text-white">
                              {item.fieldValue}
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{copied ? "Copied!" : "Click to copy"}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        <span className="text-xl text-white">{item.fieldValue}</span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center">
                <motion.h3
                  className="text-4xl font-bold p-2 inline-block rounded"
                  variants={titleVariants}
                  animate="animate"
                >
                  {experience.title}
                </motion.h3>
                <p className="max-w-[800px] text-lg text-white/80 mx-auto leading-relaxed">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <img src={experience.icon} alt={item.company} className="w-16 h-16 mx-auto" />
                        <div className="text-lg font-semibold text-white">{item.position}</div>
                        <div className="text-white/70">{item.company}</div>
                        <div className="text-white/50">{item.duration}</div>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center">
                <motion.h3
                  className="text-4xl font-bold p-2 inline-block rounded"
                  variants={titleVariants}
                  animate="animate"
                >
                  {education.title}
                </motion.h3>
                <p className="max-w-[800px] text-lg text-white/80 mx-auto leading-relaxed">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <img src={education.icon} alt={item.institution} className="w-16 h-16 mx-auto" />
                        <div className="text-lg font-semibold text-white">{item.degree}</div>
                        <div className="text-yellow-500">{item.major}</div>
                        <div className="text-white/70">{item.institution}</div>
                        <div className="text-white/50">{item.duration}</div>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center">
                <motion.h3
                  className="text-4xl font-bold p-2 inline-block rounded"
                  variants={titleVariants}
                  animate="animate"
                >
                  {skills.title}
                </motion.h3>
                <p className="max-w-[1200px] text-lg text-white/80 mx-auto leading-relaxed">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8 mx-auto max-w-[1400px]">
                  {skills.skillList.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={skill.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-col items-center hover:scale-110 transition-transform group"
                            >
                              <div className="text-8xl text-white group-hover:text-[#E4003A] transition-colors">
                                {skill.icon}
                              </div>
                              <span className="text-white mt-4 group-hover:text-[#E4003A] transition-colors">
                                {skill.name}
                              </span>
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Click to visit {skill.name} documentation</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
