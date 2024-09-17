import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const constraintRef = useRef();
  const container = (delay) => ({
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-2 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Name */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-thin tracking-tight mt-8 pb-10 lg:mt-16 lg:pb-16 lg:text-7xl"
            >
              Vivek Pillai
            </motion.h1>

            {/* Title */}
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className=" cursor-pointer bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:text-4xl selection:bg-purple-400"
            >
              Full Stack Developer
            </motion.span>

            {/* Hero Content */}
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8" ref={constraintRef}>
          <div className="flex justify-center lg:justify-end">
            <motion.img
              drag
              dragConstraints={constraintRef}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
              src={profilePic}
              alt="Vivek Pillai"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
