"use client";

import { fadeInVariant } from "@/app/util/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Offerings from "./offerings";

function Vision() {
  /**
   * @description:
   * Unsere Vision content: Marketing stuff to improve conversion rate
   */
  return (
    <motion.div
      className="flex flex-col md:h-auto h-fit max-w-6xl md:justify-start items-start mx-auto xl:px-0 px-8"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
    
      <h1 className="text-white md:text-6xl text-3xl font-semibold align-start text-center md:text-start leading-snug mt-20 md:w-auto w-full">
        Unser Angebot für Sie
      </h1>
      <motion.p
        className="mx-auto p-4 mt-20 max-w-4xl text-white md:text-2xl text-xl font-light text-center leading-9 md:tracking-wider tracking-wide"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Wir möchten jedem Menschen die Grundlagen der Künstlichen Intelligenz
        näherbringen, um die Welt rund um diese Technologie besser zu verstehen.
        Das Werkzeug Python ist dabei unverzichtbar.
      </motion.p>
      <motion.div
        className="flex flex-row mx-auto mt-20"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <div>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css" rel="stylesheet"></link>
      <Offerings/></div>

      </motion.div>
    </motion.div>
  );
}

export default Vision;
