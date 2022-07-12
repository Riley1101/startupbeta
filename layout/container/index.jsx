import SmoothScroll from "@/components/common/smoothScroll";
import Mouse from "@/components/common/mouse";
import Head from "next/head";
const Container = ({ children }) => {
  return (
    <div className="overflow-hidden font-nuno">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Mouse></Mouse>
      {/* {children} */}
      <SmoothScroll>{children}</SmoothScroll>
    </div>
  );
};
export default Container;
