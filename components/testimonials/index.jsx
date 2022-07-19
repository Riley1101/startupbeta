import { motion } from "framer-motion";
import Carousel from "framer-motion-carousel";
import TestimonialCard from "@/components/common/testimonialCard";
const Testimonial = () => {
  return (
    <section className="h-auto st-container md:py-24">
      <div className="my-8 space-y-4 md:my-4">
        <p className="text-xl ">Our goal is to solve your bussiness problems</p>
        <span className="text-[13px] relative after:contents=' ' flex items-center gap-4  after:w-12 after:h-[2px] after:bg-red-200 ">
          Testimonials
        </span>
      </div>
      <div className="flex flex-col gap-8 py-4 md:flex-row ">
        <div className="flex  items-center gap-4 md:basis-[50%]">
          <div className="space-y-6 md:w-[70%]">
            <motion.h2
              initial={{
                opacity: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-sans text-4xl font-bold md:text-6xl"
            >
              What our clients have to say about us
            </motion.h2>
          </div>
        </div>
        <div className="gap-4 relative hide-scroll space-y-5 md:basis-[50%] flex overflow-x-scroll gap-4">
          <Carousel
            renderDots={() => <div></div>}
            renderArrowLeft={() => <div></div>}
            renderArrowRight={() => <div></div>}
          >
            <TestimonialCard></TestimonialCard>
            <TestimonialCard></TestimonialCard>
            <TestimonialCard></TestimonialCard>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
