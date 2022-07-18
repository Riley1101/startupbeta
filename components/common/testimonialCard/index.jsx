import React from "react";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="w-full space-y-6 cursor-pointer shrink-0">
      <Image src="/static/quote.svg" alt="Quote" width={32} height={32}></Image>
      <p className="text-md text-neutral-500 md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem
        in illo temporibus iste mollitia cumque non iure eum, veritatis aperiam
        impedit. Molestiae dolorum illo cupiditate, tenetur similique odio
        consectetur.
      </p>
      <span className="text-lg text-neutral-500 relative after:contents=' ' flex items-center gap-4  after:w-12 after:h-[2px] after:bg-blue-500 ">
        John Doe CEO
      </span>
    </div>
  );
};
export default TestimonialCard;
