"use client";

import Image from "next/image";
import Bubble from "./components/reviewBubble";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeInVariant } from "./util/variants";
import Navbar from "./components/navbar";
import Start from "./components/start";
import Contact from "./components/contact";
import Services from "./components/services";
import Reviews from "./components/reviews";
import Carousel from "./components/reviewCarousel";

export default function Home() {
  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    container: ref,
  });
  const scrollVal = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15],
    [1, 1, 0.1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15],
    [1, 1, 0.6, 0.2]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15],
    [0, 0, 65, 90]
  );
  const fixate = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15],
    [0, 0.05, 0.1, 0.15]
  );

  const secRef = useRef(null);
  const isInView = useInView(secRef);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <main
      ref={ref}
      className="bg-pyucation-1 bg-cover pb-40 h-screen overflow-auto"
    >
      {/*NavBar */}
      <Navbar />

      {/*Landing page content */}
      {/* <section className=""> */}
      <Start scrollVal={scrollVal} scale={scale} translate={fixate} />
      {/* </section> */}
      {/*Services / Dienstleistungen */}
      <section ref={secRef}>
        <Services inView={isInView} />
      </section>
      {/*Customer Reviews */}
      <Carousel />

      {/*Contact Information / About the company */}
      <Contact />
    </main>
  );
}
