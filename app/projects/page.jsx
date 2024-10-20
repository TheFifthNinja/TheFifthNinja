"use client";

import React from 'react';
import { BiLogoCPlusPlus, BiLogoPostgresql } from "react-icons/bi";
import { FaWindows, FaReact, FaPython, FaCloudBolt } from "react-icons/fa6";
import { SiFormspree, SiAwsamplify, SiGooglegemini, SiAmazonec2, SiAmazonroute53, SiAndroidstudio, SiXcode, SiAmazons3, SiAcm, SiTailwindcss, SiKotlin } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { BsArrowDownRight } from 'react-icons/bs';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Tempo",
    description: "Alongside 3 other developers, we created a terminal-based timer program to set timers, alarms and stop-watches. The twist for the project is that we were restricted to only using the built-in Windows API libraries.",
    tools: [
      { icon: <BiLogoCPlusPlus />, name: "C++", url: "https://isocpp.org/" },
      { icon: <FaWindows />, name: "Windows API", url: "https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list" },
    ],
    href: "https://github.com/stobitejnr/Tempo"
  },
  {
    num: "02",
    title: "PantryPal",
    description: "Create a web app with a team of other developers that incorporate AI to generate recipes from a custom pantry. It also deployed on Android and iOS using the WebView framework.",
    tools: [
      { icon: <SiGooglegemini />, name: "Google Cloud", url: "https://cloud.google.com/" },
      { icon: <FaReact />, name: "React", url: "https://reactjs.org/" },
      { icon: <DiDjango />, name: "Django", url: "https://www.djangoproject.com/" },
      { icon: <FaPython />, name: "Python", url: "https://www.python.org/" },
      { icon: <BiLogoPostgresql />, name: "PostgreSQL", url: "https://www.postgresql.org/" },
      { icon: <SiAmazonec2 />, name: "AWS", url: "https://aws.amazon.com/" },
      { icon: <SiAmazonroute53 />, name: "Route 53", url: "https://aws.amazon.com/route53/" },
      { icon: <SiAndroidstudio />, name: "Android Studio", url: "https://developer.android.com/studio" },
      { icon: <SiXcode />, name: "Xcode", url: "https://developer.apple.com/xcode/" }
    ],
    href: "https://github.com/bluewolf44/PantryPal"
  },
  {
    num: "03",
    title: "PropertySleeze",
    description: "Using AWS services, I made a web app for property rentals. The core of the project was focused on using AWS services rather than the functionality of the web app",
    tools: [
      { icon: <SiAmazonec2 />, name: "AWS", url: "https://aws.amazon.com/" },
      { icon: <SiAmazons3 />, name: "S3", url: "https://aws.amazon.com/s3/" },
      { icon: <SiAmazonroute53 />, name: "Route 53", url: "https://aws.amazon.com/route53/" },
      { icon: <SiAcm />, name: "Amazon Certificate Manager", url: "https://aws.amazon.com/certificate-manager/" },
      { icon: <FaCloudBolt />, name: "CloudFront", url: "https://aws.amazon.com/cloudfront/" },
      { icon: <FaReact />, name: "React", url: "https://reactjs.org/" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", url: "https://tailwindcss.com/" },
      { icon: <SiKotlin />, name: "Kotlin", url: "https://kotlinlang.org/" },
      { icon: <BiLogoPostgresql />, name: "PostgreSQL", url: "https://www.postgresql.org/" }
    ],
    href: "https://github.com/TheFifthNinja/PropertySleeze"
  },
  {
    num: "04",
    title: "Online Portfolio",
    description: "Created a modern portfolio with a form to communicate with me.",
    tools: [
      { icon: <FaReact />, name: "React", url: "https://reactjs.org/" },
      { icon: <RiNextjsFill />, name: "Next.js", url: "https://nextjs.org/" },
      { icon: <SiAwsamplify />, name: "AWS Amplify", url: "https://aws.amazon.com/amplify/" },
      { icon: <SiFormspree />, name: "Formspree", url: "https://formspree.io/" }, 
    ],
    href: "https://github.com/TheFifthNinja/TheFifthNinja"
  }
];

const Projects = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {projects.map((service, index) => (
            <div
              key={index}
              className='flex-1 flex flex-col justify-center gap-6 group'>
              {/* Top */}
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
                  transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl' />
                </Link>
              </div>
              {/* Heading */}
              <h2 className='text-[42px] font-bold leading-none text-white
               group-hover:text-accent transition-all duration-500'>
                {service.title}
              </h2>
              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, index) => (
                  <TooltipProvider key={index} delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-10 h-10 bg-[#232329] rounded-md flex justify-center items-center group hover:bg-accent transition-all duration-300">
                        <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                          <div className="text-xl group-hover:text-white">
                            {tool.icon}
                          </div>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="capitalize">{tool.name}</div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
              {/* Description */}
              <p className='text-white/60 '>{service.description}</p>
              {/* Border*/}
              <div className='border-b border-white/20 w-full'></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;