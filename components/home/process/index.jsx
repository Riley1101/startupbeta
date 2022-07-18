import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Process = () => {
  return (
    <motion.section
      whileInView={true}
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col py-12 gap-4 md:grid relative w-full  grid-cols-1 mt-4  st-container md:grid-cols-[1fr_1fr] md:py-24 md:py-24 md:gap-y-0 md:gap-12"
    >
      <motion.div className="md:sticky relative w-full md:p-6 top-[10%] left-0 z-20 grid grid-cols-2 grid-rows-2 gap-2 transition-all md:col-start-1 aspect-square ">
        <motion.div
          variants={item}
          className="relative flex items-center justify-end p-0 text-xl font-bold cursor-pointer aspect-square "
        >
          <div className="w-[50%] h-[5px] bg-slate-900"></div>
        </motion.div>
        <motion.div
          variants={item}
          className="bg-[#53c7ff] overflow-hidden aspect-square font-bold p-4  relative text-xl  justify-start  hover:shadow-lg cursor-pointer"
        >
          <p>
            BRAIN <br /> STORMING
          </p>
          <span className="absolute bottom-0 text-[8em] right-[-.1em] opacity-60">
            01
          </span>
        </motion.div>
        <motion.div
          variants={item}
          className="bg-[#e54b7d] overflow-hidden p-4 aspect-square font-bold relative text-xl  justify-between  hover:shadow-lg cursor-pointer"
        >
          <p>DEVELOPMENT</p>
          <span className="absolute bottom-0  text-[8em] right-[-.1em] opacity-60">
            02
          </span>
        </motion.div>
        <motion.div
          variants={item}
          className="bg-[#316cf4]  overflow-hidden aspect-square font-bold p-4 relative text-xl  justify-between  hover:shadow-lg cursor-pointer"
        >
          <p>PRDOUCTION</p>
          <span className="absolute bottom-0 text-[8em] right-[-.1em] opacity-60">
            03
          </span>
        </motion.div>
      </motion.div>
      <div className="flex gap-4 overflow-x-scroll md:contents">
        <motion.div
          data-aos="zoom-in-up"
          className="flex basis-full shrink-0 md:h-[500px] flex-col justify-center mt-4 md:mt-0 col-start-2 gap-4 md:gap-8"
        >
          <div>
            <h2 className="font-sans text-3xl lowercase md:text-7xl md:font-bold ">
              Brain Storm
            </h2>
            <span className="block text-xl uppercase md:my-2">
              your solutions
            </span>
          </div>
          <p className="text-sm text-neutral-500 leading-[1.5] md:text-base md:w-[70%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iure
            deserunt quaerat vitae, incidunt ipsam labore itaque aliquam at
            natus!
          </p>
          <button className="px-12 mt-4 text-white rounded-full max-w-max btn gradient-btn md:mt-2">
            Call now !
          </button>
        </motion.div>
        <motion.div
          data-aos="zoom-in-up"
          className="flex basis-full shrink-0 md:h-[500px] flex-col justify-center mt-4 md:mt-0 col-start-2 gap-4 md:gap-8"
        >
          <div>
            <h2 className="font-sans text-3xl lowercase md:text-7xl md:font-bold ">
              Brain Storm
            </h2>
            <span className="block text-xl uppercase md:my-2">
              your solutions
            </span>
          </div>
          <p className="text-sm text-neutral-500 leading-[1.5] md:text-base md:w-[70%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iure
            deserunt quaerat vitae, incidunt ipsam labore itaque aliquam at
            natus!
          </p>
          <button className="px-12 mt-4 text-white rounded-full max-w-max btn gradient-btn md:mt-2">
            Call now !
          </button>
        </motion.div>
        <motion.div
          data-aos="zoom-in-up"
          className="flex basis-full shrink-0 md:h-[500px] flex-col justify-center mt-4 md:mt-0 col-start-2 gap-4 md:gap-8"
        >
          <div>
            <h2 className="font-sans text-3xl lowercase md:text-7xl md:font-bold ">
              Brain Storm
            </h2>
            <span className="block text-xl uppercase md:my-2">
              your solutions
            </span>
          </div>
          <p className="text-sm text-neutral-500 leading-[1.5] md:text-base md:w-[70%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iure
            deserunt quaerat vitae, incidunt ipsam labore itaque aliquam at
            natus!
          </p>
          <button className="px-12 mt-4 text-white rounded-full max-w-max btn gradient-btn md:mt-2">
            Call now !
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default Process;
