"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+64) 21 239 3379",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Kevinalbert774@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "835 George Street, Dunedin, New Zealand",
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xovargbo");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClearing, setIsClearing] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsSuccess(true);
      setIsClearing(true);
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setIsClearing(false);
        document.querySelector("form").reset();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'd love to hear from you. Let's create something amazing together.
              </p>
              {/* Input */}
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                aria-required="true"
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                aria-required="true"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                required
                aria-required="true"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                aria-required="true"
              />
              <Select name="service" required aria-required="true">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="database-management">Database Management</SelectItem>
                    <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                    <SelectItem value="devops-ci-cd">DevOps and CI/CD</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here..."
                required
                aria-required="true"
              />
              {/* Error Message */}
              {state.errors?.length > 0 && (
                <p className="text-red-500">Something went wrong. Please try again.</p>
              )}
              {/* Success Message */}
              {isSuccess && (
                <p className="text-green-500">Thank you! Your message has been sent.</p>
              )}
              {/* Submit Button */}
              <Button
                type="submit"
                disabled={state.submitting || isClearing}
                size="md"
                className="max-w-40"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
