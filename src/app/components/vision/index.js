"use client";

import { fadeInVariant } from "@/app/util/variants";
import { motion } from "framer-motion";
import React from "react";

function Vision() {
  /**
   * @description:
   * Unsere Vision content: Marketing stuff to improve conversion rate
   */
  return (
    <motion.div
      className="flex flex-col h-auto max-w-6xl justify-start items-start mx-auto mt-56"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
    >
      <h1 className="text-white text-6xl font-semibold align-start leading-snug">
        Unsere Vision
      </h1>
      <motion.p
        className="mx-auto p-4 mt-20 max-w-4xl text-white text-2xl font-light text-center leading-9 tracking-wider"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
      >
        Wir möchten jedem Menschen die Grundlagen der Künstlichen Intelligenz
        näherbringen, um die Welt rund um diese Technologie besser zu verstehen. Das "Werkzeug Python" ist dabei unverzichtbar.
      </motion.p>
      <motion.div
        className="flex flex-row mx-auto p-4 mt-20"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
      >
        <div className="w-100 h-80 shadow-2x1 text-center">
        <img src="/vision.png" alt="Description of Image" className="w-full h-full object-contain"/>
      </div>
      </motion.div>
    </motion.div>
  );
}

export default Vision;
