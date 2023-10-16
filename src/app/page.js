"use client";

import Image from "next/image";
import Bubble from "./components/reviewBubble";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { fadeInVariant } from "./util/variants";
import Navbar from "./components/navbar";
import Start from "./components/start";
import Contact from "./components/contact";
import Services from "./components/services";
import Reviews from "./components/reviews";
import Carousel from "./components/reviewCarousel";

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  return (
    <main
      ref={scrollRef}
      className="bg-pyucation-1 bg-cover pb-40 h-screen overflow-auto"
    >
      <Navbar />
      {/*Landing page content */}
      <Start />
      {/*Customer Reviews */}
      <Carousel />
      {/* <Reviews /> */}
      {/*Services / Dienstleistungen */}
      <Services />
      {/*Contact Information / About the company */}
      <Contact />
    </main>
  );
}
