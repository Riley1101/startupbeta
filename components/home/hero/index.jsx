import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Hero = () => {
  const router = useRouter();
  return (
    <section className=" md:h-[calc(100vh-5em)] flex md:flex-row flex-col relative">
      <div className=" basis-[50%] my-12  space-y-12 md:justify-between md:space-y-24 md:flex md:flex-col  p-4 md:pl-[10%]">
        <motion.h1
          initial={{
            opacity: 0,
            x: 68,
          }}
          animate={{
            opacity: 1,
            x: -2,
          }}
          transition={{
            duration: 1,
          }}
          className="text-5xl md:pt-12  uppercase md:text-7xl text-slate-900 font-bold  md:leading-[1.3]"
        >
          We build <br /> Softwares <br /> for you
        </motion.h1>
        <div className="space-y-8 ">
          <motion.p
            initial={{
              opacity: 0,
              x: 68,
            }}
            animate={{
              opacity: 1,
              x: -2,
            }}
            transition={{
              duration: 1,
            }}
            className="text-slate-800 line-clamp-3 w-[80%] md:w-full md:w-[60%] "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, vel.
          </motion.p>
          <button
            onClick={() => router.push("/schedule")}
            className=" shadow-md md:absolute md:px-10 md:py-4 md:top-[60%] md:left-[50%]  z-20 max-w-max md:w-full md:w-full animated-btn md:translate-x-[-50%]"
          >
            Schedule a meeting
          </button>
        </div>
      </div>
      <motion.div className="basis-[50%] pt-8 aspect-square p-4 relative bg-[url('/static/patternpad.svg')] bg-cover bg-center bg-opacity-5">
        <motion.div className="flex flex-col gap-4 text-black">
          <motion.h2
            initial={{
              opacity: 0,
              x: 70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-xl uppercase md:text-3xl md:pt-12"
          >
            Design Agency for you
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              x: 70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-base w-[90%] text-slate-700 md:w-[50%] "
          >
            Lorem ipsum dolor sit amet consectetur adipisic elit. Consequuntur
            obcaecati similique saepe tempore provident.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
