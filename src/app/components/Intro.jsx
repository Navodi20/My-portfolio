"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Navodi Dhananjana...",
                1000,
                "an Undergraduate...",
                1000,
                "a freelancer...",
                1000,
                "", 
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I am a quick learner and I am always looking to expand my knowledge and skill set. I thrive in collaborative environments where I can contribute my skills while also learning from others. My passion for technology drives me to stay updated with the latest industry trends and best practices, ensuring that I bring fresh ideas and innovative solutions to every project. I enjoy tackling complex challenges and finding effective ways to solve problems.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/#projects"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                My projects
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative rounded-full bg-gradient-to-r from-[#181818] via-[#282828] to-[#181818] p-1 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
          <div className="rounded-full bg-[#181818] w-full h-full relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="./images/image.png"
              alt="image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 scale-100 hover:scale-110 transition-transform duration-300"
              width={300}
              height={300}
            />
          </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
