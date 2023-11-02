import { motion, stagger } from "framer-motion";
import React from "react";
import Carousel from "../reviewCarousel";
import { fadeInVariant } from "@/app/util/variants";
import ReviewCard from "./reviewCard";

function Reviews() {
  const num_reviews = 6;

  const demoVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col h-auto max-w-6xl justify-start items-start mx-auto mt-56"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
    >
      <h1 className="text-white text-6xl font-semibold align-start leading-snug">
        100% Kundenzufriedenheit
      </h1>
      <div className="flex flex-wrap justify-start items-center w-full mt-28 gap-4">
        <motion.div
          variants={demoVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <ReviewCard />
        </motion.div>
        <motion.div
          variants={demoVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <ReviewCard />
        </motion.div>
        <motion.div
          variants={demoVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <ReviewCard />
        </motion.div>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />

        {/* <Carousel /> */}
      </div>
    </motion.div>
  );
}

export default Reviews;
