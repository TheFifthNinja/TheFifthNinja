import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Kevin Albert</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in creating seamless and engaging digital experiences
              and have a strong command of a range of programming languages and technologies.
            </p>
            {/* Button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Download Resume Button */}
              <div className="relative">
                <a
                  href="/resume.pdf"
                  download="Kevin_Albert_Resume.pdf"
                  className="uppercase flex items-center gap-2"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 relative"
                  >
                    <span>Download Resume</span>
                    <FiDownload className="text-xl" />
                  </Button>
                  {/* Badge */}
                  <div className="absolute top-0 right-10 transform translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center justify-center bg-yellow-500 text-white text-xs font-semibold rounded-full p-1">
                      <FaStar className="text-yellow-300 mr-1" /> {/* Gold star */}
                      Updated!
                    </div>
                  </div>
                </a>
              </div>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default page;
