"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fadeInVariant, textVariant } from "@/app/util/variants";

function Start({ scrollVal, scale, translate }) {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-16 z-50">
      <motion.div className="flex max-w-6xl h-auto py-24 px-3 justify-between">
        <motion.div
          className="flex flex-col gap-4 justify-center transform-preserve"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          style={{
            opacity: scrollVal,
            scale: scale,
            translateY: translate,
          }}
        >
          <h1 className="font-sans text-8xl text-white tracking-wider">
            pyucation
          </h1>
          <p className="text-zinc-500 text-xl mt-10 ml-10 tracking-widest">
            Weiterbildung und Beratung in Python: praxisorientiert,
            projektbasiert und individuell gestaltbar
          </p>
        </motion.div>
        {/* dark:drop-shadow-[0_0_0.3rem_#27B2DA] */}
        <motion.div
          style={{
            opacity: scrollVal,
            scale: scale,
            translateY: translate,
          }}
        >
          <Image
            className="flex relative animate-fade-in-drop-shadow z-10"
            src="/logo_notext.svg"
            alt="Next.js Logo"
            width={800}
            height={800}
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Start;
