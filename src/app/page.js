"use client";

import Start from "./components/start";
import Reviews from "./components/reviews";
import Vision from "./components/vision";
import Partners from "./components/partners";
import Footer from "./components/footer";
import PrivacyModal from "./components/privacyModal";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  /**
   * @description:
   * Landing page of the website. Includes branding, vision and user reviews/recommendations
   */

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  // Use useTransform to scale scrollYProgress
  const scaledProgress = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main
      ref={scrollRef}
      className="pb-40 h-screen overflow-auto overflow-x-hidden"
    >
      {/*Footer with social links only for mobile view */}
      <div className="md:hidden flex">
        <Footer />
      </div>
      {/*Branding Section with logo */}
      <section className="md:h-full h-fit mb-20">
        <Start scrollYProgress={scaledProgress} />
      </section>

      {/*Vision Section */}
      <section className="xl:h-fit h-fit mb-20">
        <Vision />
      </section>

      {/*Customer Reviews */}
      <section className="md:h-full h-fit xl:mt-0 mt-20 mb-20">
        <Reviews />
      </section>

      {/*Partners Section */}
      <section className="xl:h-fit h-fit mb-20">
        <Partners />
      </section>

      {/*Data Privacy Consent */}
      <PrivacyModal />
    </main>
  );
}
