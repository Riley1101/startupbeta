import Hero from "@/components/home/hero";
import { useRef, useEffect } from "react";
import Container from "@/layout/container";
import Header from "@/components/common/header";
import Process from "@/components/home/process";
import useScrollSnap from "react-use-scroll-snap";

export default function Home() {
  const scrollRef = useRef();
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <Container>
      <div className="snap-y snap-mandatory">
        <div className="snap-start">
          <Header></Header>
          <Hero />
        </div>
        <div className="snap-start">
          <Process />
        </div>
        <div className="bg-blue-200" style={{ height: "100vh" }}></div>
      </div>
    </Container>
  );
}
