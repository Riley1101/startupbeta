import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

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
    <section className="py-12 st-container md:py-24">
      <motion.div
        whileInView={true}
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col  gap-4 md:grid relative w-full  grid-cols-1 mt-4  md:grid-cols-[1fr_1fr]   md:gap-y-0 md:gap-12"
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
        <div className="flex gap-12 overflow-x-scroll md:contents snap-mandatory snap-x">
          <motion.div
            data-aos="zoom-in-up"
            className="flex flex-col justify-center col-start-2 gap-4 mt-4 snap-center basis-full md:pt-16 shrink-0 md:my-8 md:gap-8"
          >
            <div className="z-10 row-span-2 my-6 space-y-4 md:my-12">
              <h2 className="text-4xl font-bold text-black md:text-6xl">
                Our Process
              </h2>
              <p className="text-xl text-neutral-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                quidem dignissimos dolores, consequatur eius sapiente! officiis
                molestias eum, quos sapiente neque exercitationem excepturi
                totam, consequuntur eveniet.
              </p>
              <span className="text-[12px] text-black relative after:contents=' ' flex items-center gap-4  after:w-12 after:h-[2px] after:bg-black ">
                Performance {"& "}Productivity
              </span>
            </div>
          </motion.div>
          <motion.div
            data-aos="zoom-in-up"
            className="flex flex-col justify-center col-start-2 gap-4 mt-4 snap-center basis-full md:pt-16 shrink-0 md:my-8 md:gap-8"
          >
            <div className="z-10 row-span-2 my-6 space-y-4 md:my-12">
              <h2 className="text-4xl font-bold text-black md:text-6xl">
                Brain Storm
              </h2>
              <p className="text-xl text-neutral-500 w-[70%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                quidem dignissimos dolores.
              </p>
              <span className="text-[12px] text-black relative after:contents=' ' flex items-center gap-4  after:w-12 after:h-[2px] after:bg-pink-400 ">
                Solution for your need
              </span>
            </div>
            <div className="relative w-full md:w-[70%] aspect-video">
              <Image
                src="/images/company.jpg"
                layout="fill"
                alt="company"
                objectFit="cover"
              />
            </div>
          </motion.div>
          <motion.div
            data-aos="zoom-in-up"
            className="flex flex-col justify-center col-start-2 gap-4 mt-4 snap-center basis-full md:pt-16 shrink-0 md:my-8 md:gap-8"
          >
            <div className="z-10 row-span-2 my-6 space-y-4 md:my-12">
              <h2 className="text-4xl font-bold text-black md:text-6xl">
                Development
              </h2>
              <p className="text-xl text-neutral-500 w-[70%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                quidem dignissimos dolores.
              </p>
              <span className="text-[12px] text-black relative after:contents=' ' flex items-center gap-4  after:w-12 after:h-[2px] after:bg-teal-400 ">
                Our professional team develop
              </span>
            </div>
            <div className="relative w-full md:w-[70%] aspect-video">
              <Image
                src="/images/company.jpg"
                layout="fill"
                alt="company"
                objectFit="cover"
              />
            </div>
          </motion.div>
          <motion.div
            data-aos="zoom-in-up"
            className="flex flex-col justify-center col-start-2 gap-4 mt-4 md:mb-24 snap-center basis-full md:pt-16 shrink-0 md:my-8 md:gap-8"
          >
            <div className="z-10 row-span-2 my-6 space-y-4 md:my-12">
              <h2 className="text-4xl font-bold text-black md:text-6xl">
                Production
              </h2>
              <p className="text-xl text-neutral-500 w-[70%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                quidem dignissimos dolores.
              </p>
              <span className="text-[12px] text-black relative after:contents=' ' flex items-center gap-4  after:w-12 after:h-[2px] after:bg-teal-400 ">
                Our professional team develop
              </span>
            </div>
            <div className="relative w-full md:w-[70%] aspect-video">
              <Image
                src="/images/company.jpg"
                layout="fill"
                alt="company"
                objectFit="cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
export default Process;
