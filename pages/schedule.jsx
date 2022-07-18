import { motion } from "framer-motion";
import Container from "@/layout/container";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
const Schedule = () => {
  return (
    <Container>
      <Header></Header>
      <div className="h-auto p-4 st-container md:pt-12">
        <form className="leading-[1.5] space-y-4 md:w-[60%] mx-auto md:space-y-8 md:mb-12">
          <div className="space-y-2 ">
            <p className="mb-3 text-lg md:text-2xl md:mb-6">
              Please tell us what you want to build ?
            </p>
            <div className="flex flex-col gap-1 md:flex-row md:gap-12">
              <div className="flex items-center gap-4">
                <input type="radio" name="product" id="website" />
                <label htmlFor="website">Website</label>
              </div>
              <div className="flex items-center gap-4">
                <input type="radio" name="product" id="ecommerce" />
                <label htmlFor="ecommerce">eCommerce</label>
              </div>{" "}
              <div className="flex items-center gap-4">
                <input type="radio" name="product" id="cms" />
                <label htmlFor="cms">CMS</label>
              </div>{" "}
              <div className="flex items-center gap-4">
                <input type="radio" name="product" id="dontknow" />
                <label htmlFor="dontknow">Not Sure</label>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="mb-3 text-lg md:text-2xl ">
              What are the objectives, requirements and functionalities of this
              product? *
            </p>
            <textarea
              rows={5}
              type="text-area"
              name="requirement "
              className="w-full p-4 bg-transparent border outline-none placeholder:leading-relaxed border-text-muted placeholder:text-text-muted"
              placeholder="You can list down everything from points to paragraphs. The more we got the information the more we can help your business."
            />
          </div>
          <div className="space-y-2">
            <p className="mb-3 text-lg md:text-2xl ">
              Please schedule a meeting with our professional consultant.
            </p>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full py-2 border border-text-muted bg-theme-primary"
            />
          </div>
          <div className="space-y-2">
            <p className="mb-3 text-lg md:text-2xl ">Do you have a budget ?</p>
            <input
              placeholder="Your estimated cost"
              type="text"
              name="date"
              id="date"
              className="w-full py-2 border placeholder:text-text-muted border-text-muted bg-theme-primary"
            />
          </div>{" "}
          <div className="space-y-2">
            <p className="mb-3 text-lg md:text-2xl ">Estimated launch date ?</p>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full py-2 border placeholder:text-text-muted border-text-muted bg-theme-primary"
            />
          </div>
          <div className="space-y-2">
            <p className="mb-3 text-lg md:text-2xl ">
              Let{"'"} us know your email ?
            </p>

            <input
              type="email"
              name="date"
              placeholder="Your email address"
              id="date"
              className="w-full py-2 border placeholder:text-text-muted border-text-muted bg-theme-primary"
            />
          </div>
          <div className="flex flex-col w-full gap-4 md:flex-row">
            <div className="space-y-2 basis-[100%]">
              <p className="mb-3 text-lg md:text-xl ">Your bussiness name ?</p>
              <input
                placeholder="Your company"
                type="text"
                name="date"
                id="date"
                className="w-full py-2 border placeholder:text-text-muted border-text-muted bg-theme-primary"
              />
            </div>{" "}
            <div className="space-y-2 basis-[100%]">
              <p className="mb-3 text-lg md:text-xl ">
                Estimated launch date ?
              </p>
              <input
                type="text"
                name="date"
                id="date"
                placeholder="Your call number"
                className="w-full py-2 border placeholder:text-text-muted border-text-muted bg-theme-primary"
              />
            </div>
          </div>
          <motion.button className="px-12 mt-4 text-white rounded-full max-w-max btn gradient-btn md:mt-2">
            Send Now
          </motion.button>
        </form>
      </div>
      <Footer></Footer>
    </Container>
  );
};
export default Schedule;
