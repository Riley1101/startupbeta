import Image from "next/image";
const Hero = () => {
  return (
    <section className=" md:h-[calc(100vh-5em)] flex md:flex-row flex-col relative">
      <div className=" basis-[50%] my-12  space-y-12 md:justify-between md:space-y-24 md:flex md:flex-col  p-4 md:pl-[10%]">
        <h1 className="text-5xl md:pt-12  uppercase md:text-7xl text-slate-900 font-bold font-sans md:leading-[1.3]">
          We build <br /> Softwares <br /> for you
        </h1>
        <div className="space-y-8 ">
          <p className="text-slate-800 line-clamp-3 w-[80%] md:w-full md:w-[60%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, vel.
          </p>
          <button className=" shadow-md md:absolute md:px-10 md:py-4 md:top-[60%] md:left-[50%]  z-20 max-w-max md:w-full md:w-full animated-btn md:translate-x-[-50%]">
            Schedule a meeting
          </button>
        </div>
      </div>
      <div className="basis-[50%] pt-8 aspect-square p-4 relative bg-[url('/static/patternpad.svg')] bg-cover bg-center bg-opacity-5">
        <div className="flex flex-col gap-4 text-black">
          <h2 className="text-xl uppercase md:text-3xl md:pt-12">
            Design Agency for you
          </h2>
          <p className="text-base w-[90%] text-slate-700 md:w-[50%] ">
            Lorem ipsum dolor sit amet consectetur adipisic elit. Consequuntur
            obcaecati similique saepe tempore provident.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="grid p-1 border rounded-full place-items-center border-slate-700 text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="grid p-1 border rounded-full place-items-center border-slate-700 text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
