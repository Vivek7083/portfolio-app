import { CONTACT } from "../constants";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-4xl my-20"
      >
        Get <motion.span className="text-neutral-500">in </motion.span>
        Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{scale:1.1, transition:{duration:0.3, delay:0}}}
          className="my-4 cursor-pointer"
        >
          {CONTACT.address}
        </motion.p>
        <motion.a
          href={CONTACT.linkedIn}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{scale:1.1, transition:{duration:0.3, delay:0}}}
          className="my-4 cursor-pointer"
        >
          LinkedIn
        </motion.a>
        <br/>
        <motion.a
          href={CONTACT.github}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{scale:1.1, transition:{duration:0.3, delay:0}}}
          className="my-4 cursor-pointer"
        >
          Github
        </motion.a>
        <br/>
        <motion.a
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{scale:1.1, transition:{duration:0.3, delay:0}}}
          href="#"
          className="border-b border-neutral-500"
          onClick={(e)=>{
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'})
          }}
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};
