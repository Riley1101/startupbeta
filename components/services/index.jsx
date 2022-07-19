const Services = () => {
  return (
    <section className="my-6 st-container">
      <h1 className="my-4 text-2xl font-bold text-center uppercase md:text-4xl md:my-20">
        Our Services
      </h1>
      <div>
        <div className="flex">
          <div className="md:h-[170px]   text-white bg-[#212429] md:text-2xl md:aspect-square grid items-center md:grow-0 p-4 text-center  cursor-pointer grow">
            Website
          </div>
          <div className="md:h-[170px] hover:bg-gray-100 md:text-2xl md:aspect-square grid items-center md:grow-0 p-4 text-center  cursor-pointer grow">
            eCommerce
          </div>
          <div className="md:h-[170px] hover:bg-gray-100 md:text-2xl md:aspect-square grid items-center md:grow-0 p-4 text-center  cursor-pointer grow">
            CMS
          </div>
        </div>
        <div className="grid gap-4 p-4 py-6 bg-[#212429]  shadow-sm md:flex md:flex-row-reverse">
          <ul className="space-y-2 md:basis-[50%] p-4 md:p-16">
            <li className="flex items-center gap-4 text-white text-md md:gap-4">
              <span className="block w-3 rounded-full gradient-btn aspect-square"></span>
              Lorem ipsum dolor.
            </li>

            <li className="flex items-center gap-4 text-white text-md md:gap-4">
              <span className="block w-3 rounded-full gradient-btn aspect-square"></span>
              Lorem ipsum dolor.
            </li>
            <li className="flex items-center gap-4 text-white text-md md:gap-4">
              <span className="block w-3 rounded-full gradient-btn aspect-square"></span>
              Lorem ipsum dolor.
            </li>
            <li className="flex items-center gap-4 text-white text-md md:gap-4">
              <span className="block w-3 rounded-full gradient-btn aspect-square"></span>
              Lorem ipsum dolor.
            </li>
          </ul>
          <div className=" md:basis-[50%] p-4 md:p-4 md:p-12">
            <h2 className="relative text-2xl text-white md:mb-16 md:text-4xl max-w-max">
              <span className="absolute top-[-20px] block w-full h-[5px] gradient-btn"></span>
              Strategia
            </h2>
            <p className="text-neutral-300 md:text-lg">
              Dobre zaplanowanie i przemyślenie po podstawa sukcesu każdej
              strony internetowej i platformy e-commerce. Współpraca z nami
              rozpoczyna się właśnie od tego etapu. Strony internetowe i sklepy
              internetowe, które nie przejdą tego
            </p>
            <button className="relative text-white rounded-full md:mt-12 md:text-lg ">
              Dobre zaplanowanie
              <span className="absolute bottom-[-3px] block w-full h-[3px] gradient-btn"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
