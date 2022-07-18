import Hero from "@/components/home/hero";
import { useRef, useEffect } from "react";
import Container from "@/layout/container";
import Header from "@/components/common/header";
import Process from "@/components/home/process";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/common/footer";
export default function Home() {
  return (
    <Container>
      <Header></Header>
      <Hero />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </Container>
  );
}
