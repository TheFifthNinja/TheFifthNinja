"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Design and build responsive web applications using modern frameworks such as React and Tailwind CSS.",
    href: ""
  },
  {
    num: "02",
    title: "Database Management",
    description: "Develop and maintain relational and NoSQL databases, ensuring data integrity and performance optimization.",
    href: ""
  },
  {
    num: "03",
    title: "Cloud Computing",
    description: "Deploy and manage cloud-based applications using platforms like AWS, Azure, and Google Cloud.",
    href: ""
  },
  {
    num: "04",
    title: "DevOps and CI/CD",
    description: "Implement CI/CD pipelines and automated workflows using tools like GitHub Actions.",
    href: ""
  }
];

import { motion } from "framer-motion";

const Services = () => {
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
          {services.map((service, index) => {
            return (
              <div 
              key={index} 
              className='flex-1 flex flex-col justify-center gap-6 group'>
                {/* Top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold'>{service.num}</div>
                  <Link href={service.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                {/* Heading */}
                <h2>{service.title}</h2>
                {/* Description */}
                <p>{service.description}</p>
                {/* Border*/}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services