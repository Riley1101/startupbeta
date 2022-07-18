import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="h-auto st-container md:py-12" id="contactSection">
      <div className="space-y-4 md:my-4">
        <h2 className="font-sans text-4xl font-bold md:text-6xl">
          Contact <br />
          with us
        </h2>
        <p className="text-xl text-neutral-500">
          We are a software company based in US.
        </p>
        <span className="text-[12px] relative after:contents=' ' flex items-center gap-4  after:w-12 after:h-[2px] after:bg-white "></span>
      </div>

      <div className="flex flex-col gap-8 py-4 md:flex-row ">
        <div className="space-y-5 md:basis-[60%] flex">
          <div className="relative w-full space-y-8 md:max-w-[70%] md:my-6 aspect-video md:aspect-auto">
            <div className="flex flex-col w-full gap-2 border-b border-b-text-muted-secondary">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="w-full mb-2 bg-transparent border-none outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 border-b border-b-text-muted-secondary">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="mb-2 bg-transparent border-none outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 border-b border-b-text-muted-secondary">
              <label htmlFor="message">Message</label>
              <textarea className="mb-2 bg-transparent border-none outline-none" />
            </div>
            <motion.button
              whileHover={{
                duration: 2,
                backgroundColor: "#3a3a3a",
              }}
              className="px-12 mt-4 text-white rounded-full max-w-max btn gradient-btn md:mt-2"
            >
              Send Now
            </motion.button>
          </div>
        </div>
        <div className="flex  items-center gap-4 md:basis-[40%]">
          <div className="">
            <h3 className="mb-2 text-lg">New York</h3>
            <p className="text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              molestiae, doloremque consequuntur.
            </p>
            <ul className="my-4 space-y-1">
              <li className="grid grid-cols-[1fr_5px_4fr] gap-4">
                <span>Phone </span>
                <span>:</span>
                <span className="underline">+55 (977) 2435 9372+55 </span>
              </li>
              <li className="grid grid-cols-[1fr_5px_4fr] gap-4">
                <span>Email </span>
                <span>:</span>
                <span className="underline">company@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
