"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Design and build responsive web applications using modern frameworks such as React and Tailwind CSS.",
    href: "https://markoste.com/"
  },
  {
    num: "02",
    title: "Database Management",
    description: "Develop and maintain relational and NoSQL databases, ensuring data integrity and performance optimization.",
    href: "https://github.com/mayry685/Info310"
  },
  {
    num: "03",
    title: "Cloud Computing",
    description: "Deploy and manage cloud-based applications using platforms like AWS, Azure, and Google Cloud.",
    href: "https://github.com/TheFifthNinja/PropertySleeze"
  },
  {
    num: "04",
    title: "DevOps and CI/CD",
    description: "Implement CI/CD pipelines and automated workflows using tools like GitHub Actions.",
    href: "https://github.com/TheFifthNinja"
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
                {/* Description */}
                <p className='text-white/60 '>{service.description}</p>
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