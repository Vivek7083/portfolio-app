import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2 whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:1}} className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((it, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration: 1, delay:0.5}} className="w-full lg:w-1/4">
                <img className="rounded-lg mb-6" src={it.image} width={150} height={150} alt={it.title} />
              </motion.div>
              <div className="w-full max-w-xl lg:w-3/4">
                <motion.h6 whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration: 1, delay:0.3}} className="text-xl font-semibold">{it.title}</motion.h6>
                <motion.p whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration: 1, delay:0.7}} className="my-4">{it.description}</motion.p>
                <motion.div whileInView={{x:0, y:0, opacity:1}} initial={{x:100, y:20,  opacity:0}} transition={{duration:2, repeat:0, delay:0.3}}>
                {it.technologies.map((tech, index)=>{
                    return(
                        < motion.span className="mr-2 rounded px-2 py-1 bg-neutral-900 text-sm font-medium text-purple-600" key={index}>
                            {tech}
                        </motion.span>
                    )
                })}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
