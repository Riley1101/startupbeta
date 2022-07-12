import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
const Process = () => {
  return (
    <motion.section className="overflow-y-scroll relative hide-scroll  grid md:h-[100vh]  grid-cols-1 mt-4   st-container md:grid-cols-2 md:my-28 md:gap-24">
      <div className="left-0 z-20 grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden transition-all md:sticky top-1 aspect-square ">
        <div className="relative flex items-center justify-end p-0 text-xl font-bold cursor-pointer aspect-square ">
          <div className="w-[50%] h-[5px] bg-slate-900"></div>
        </div>
        <div className="bg-[#53c7ff] aspect-square font-bold p-4  relative text-xl  justify-start  hover:shadow-lg cursor-pointer">
          <p>
            BRAIN <br /> STORMING
          </p>
          <span className="absolute bottom-0 text-[8em] right-[-.1em] opacity-60">
            01
          </span>
        </div>
        <div className="bg-[#e54b7d] p-4 aspect-square font-bold relative text-xl  justify-between  hover:shadow-lg cursor-pointer">
          <p>DEVELOPMENT</p>
          <span className="absolute bottom-0  text-[8em] right-[-.1em] opacity-60">
            02
          </span>
        </div>
        <div className="bg-[#316cf4] aspect-square font-bold p-4 relative text-xl  justify-between  hover:shadow-lg cursor-pointer">
          <p>PRDOUCTION</p>
          <span className="absolute bottom-0 text-[8em] right-[-.1em] opacity-60">
            03
          </span>
        </div>
      </div>
      <div className="block w-full overflow-y-scroll md:contents aspect-square snap-y snap-mandatory hide-scroll">
        <div className="w-full h-full snap-center md:aspect-square">
          <div className="flex flex-col gap-4 py-8">
            <div>
              <h2 className="font-sans text-3xl uppercase md:text-7xl md:font-bold md:mt-24">
                Brain Storm
              </h2>
              <span className="block text-xl uppercase md:my-4">
                your solutions
              </span>
            </div>
            <p className="text-sm text-neutral-500 leading-[1.5] md:text-base md:w-[70%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              iure deserunt quaerat vitae, incidunt ipsam labore itaque aliquam
              at natus!
            </p>
            <button className="px-12 mt-4 text-white rounded-full max-w-max btn gradient-btn md:mt-2">
              Call now !
            </button>
          </div>
        </div>
        <div></div>
        <div className="w-full h-full snap-center md:aspect-square">
          <div className="flex flex-col gap-4 py-8">
            <div>
              <h2 className="font-sans text-3xl uppercase md:text-7xl md:font-bold md:mt-24">
                Brain Storm
              </h2>
              <span className="block text-xl uppercase md:my-4">
                your solutions
              </span>
            </div>
            <p className="text-sm text-neutral-500 leading-[1.5] md:text-base md:w-[70%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              iure deserunt quaerat vitae, incidunt ipsam labore itaque aliquam
              at natus!
            </p>
            <button className="px-12 mt-4 text-white rounded-full max-w-max btn gradient-btn md:mt-2">
              Call now !
            </button>
          </div>
        </div>
        <div></div>
        <div className="w-full h-full snap-center md:aspect-square md:mb-24">
          <div className="flex flex-col gap-4 py-8">
            <div>
              <h2 className="font-sans text-3xl uppercase md:text-7xl md:font-bold md:mt-24">
                Brain Storm
              </h2>
              <span className="block text-xl uppercase md:my-4">
                your solutions
              </span>
            </div>
            <p className="text-sm text-neutral-500 leading-[1.5] md:text-base md:w-[70%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              iure deserunt quaerat vitae, incidunt ipsam labore itaque aliquam
              at natus!
            </p>
            <button className="px-12 mt-4 text-white rounded-full max-w-max btn gradient-btn md:mt-2">
              Call now !
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </motion.section>
  );
};
export default Process;
