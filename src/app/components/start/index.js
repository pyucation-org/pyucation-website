"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fadeInVariant, textVariant } from "@/app/util/variants";

function Start() {
  return (
    <div className="flex flex-row lg:max-w-4xl max-w-2xl justify-center items-center h-full mt-16 mx-auto">
      <motion.div
        className="flex lg:max-w-4xl max-w-2xl h-auto py-24 px-3 justify-between"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col gap-4 justify-center transform-preserve">
          <h1 className="font-sans text-8xl text-white tracking-wider">
            pyucation
          </h1>
          <p className="text-zinc-500 text-xl mt-10 ml-10 tracking-widest">
            Weiterbildung und Beratung in Python: praxisorientiert,
            projektbasiert und individuell gestaltbar
          </p>
        </motion.div>

        <motion.div className="flex items-center">
          <Image
            className="relative left-20 -top-10 animate-fade-in-drop-shadow z-10"
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
