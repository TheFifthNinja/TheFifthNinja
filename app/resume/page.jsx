'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaAws, FaJava, FaLinux, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiKotlin, SiMysql, SiVagrant, SiMongodb } from "react-icons/si";
import { BiLogoCPlusPlus, BiLogoPostgresql } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import { useState } from "react";

// About Data
const about = {
  title: "About me",
  description: "I am a Software Engineering and Computer Science major, eagerly awaiting graduation at the end of the year. I’m known for being friendly and quick-witted, though some would say I can be a bit of a ”waffler” at times. In my free time, I’m a huge basketball enthusiast—I not only play the sport but also closely follow the NBA. While basketball is my greatest passion, I’ve also developed a love for other sports like tennis and rugby. Cooking is another interest I inherited from my mother, who has worked as a restaurant chef. With a background in both athletics and culinary arts, my path to a career in IT might seem like an unexpected twist, but such is life.",
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
    { company: "Four Square", position: "Duty Manager", duration: "2018 - 2020" }
  ]
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description: "I have a strong academic background in software engineering and computer science. Here are some of the key details of my education:",
  items: [
    { institution: "University of Otago", degree: "Bachelor of Applied Science", major: "Software Engineering and Computer Science (Double Major)", duration: "2021 - 2024" }
  ]
}

// Skills Data
const skills = {
  title: "Skills",
  description: "I have experience working with a wide range of technologies and tools. Here are some of the key skills that I bring to the table:",
  skillList: [
    { icon: <BiLogoCPlusPlus />, name: "C++" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiKotlin />, name: "Kotlin" },
    { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiVagrant />, name: "Vagrant" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ]
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
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            
          </TabsList>

          {/* Content */}
          <div className="flex-1">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <p className="text-yellow-400">{item.major}</p> {/* Bright color for major */}
                        <div className="flex items-center gap-3">
                          {/* Dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About Me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
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
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
