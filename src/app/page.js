"use client";

import Image from "next/image";
import Bubble from "./components/reviewBubble";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeInVariant } from "./util/variants";
import Start from "./components/start";
import Contact from "./components/contact";
import Services from "./components/services";
import Reviews from "./components/reviews";
import Vision from "./components/vision";

export default function Home() {
  /**
   * @description:
   * Landing page of the website. Includes branding, vision and user reviews/recommendations
   */

  // const ref = useRef(null);
  // const { scrollY, scrollYProgress } = useScroll({
  //   container: ref,
  // });
  // const scrollVal = useTransform(
  //   scrollYProgress,
  //   [0, 0.05, 0.1, 0.15],
  //   [1, 1, 0.1, 0]
  // );

  // const reviewsRef = useRef(null);
  // const isReviewsInView = useInView(reviewsRef);

  return (
    <main className="pb-40 h-screen overflow-auto overflow-x-hidden">
      {/*Branding Section with logo */}
      <section className="h-full">
        <Start />
      </section>

      {/*Vision Section */}
      <section className="h-full mb-40">
        <Vision />
      </section>

      {/*Customer Reviews */}
      <section className="h-full mb-40">
        <Reviews />
      </section>
    </main>
  );
}
