"use client";

import { fadeInVariant } from "@/app/util/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
      <h1 className="text-white text-6xl font-semibold align-start text-center md:text-start leading-snug">
        Unsere Vision
      </h1>
      <motion.p
        className="mx-auto p-4 mt-20 max-w-4xl text-white text-2xl font-light text-center leading-9 tracking-wider"
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
        className="flex flex-row mx-auto p-4 md:mt-20"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-100% h-100% shadow-2x1 text-center">
          <Image
            src="/vision.webp"
            alt="our vision"
            /*className="w-full h-full object-contain"*/
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // Keeps the aspect ratio
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 90% at 55% 50%, black 30%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 60% 90% at 55% 50%, black 30%, transparent 100%)",
              maskMode: "alpha",
              maskComposite: "source-out",
            }}
            width={800}
            height={800}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Vision;
