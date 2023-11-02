import { motion } from "framer-motion";
import React from "react";
import Carousel from "../reviewCarousel";
import { fadeInVariant } from "@/app/util/variants";
import ReviewCard from "./reviewCard";

function Reviews() {
  const num_reviews = 6;

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
      <motion.div
        className="flex flex-wrap justify-start items-center w-full mt-28 gap-4"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />

        {/* <Carousel /> */}
      </motion.div>
    </motion.div>
  );
}

export default Reviews;
