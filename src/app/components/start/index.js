"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fadeInVariant, textVariant } from "@/app/util/variants";

function Start() {
  return (
    <div className="flex flex-row lg:max-w-4xl max-w-2xl justify-center items-center h-full mt-16 mx-auto">
      <motion.div
        className="flex md:flex-row flex-col lg:max-w-4xl max-w-2xl md:h-auto h-screen py-24 px-3 md:justify-between items-center"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col gap-4 justify-center transform-preserve md:w-auto w-72">
          <h1 className="font-sans md:text-8xl text-6xl text-white tracking-wider">
            pyucation
          </h1>
          <p className="text-zinc-500 md:text-xl text-lg mt-10 ml-10 tracking-widest">
            Weiterbildungen und Beratung rund um Künstliche Intelligenz und
            Programmieren in Python
          </p>
        </motion.div>

        <motion.div className="flex items-center w-72 md:w-auto">
          <Image
            className="relative md:left-20 md:-top-10 top-20 animate-fade-in-drop-shadow z-10"
            src="/logo_notext.svg"
            alt="Pyucation Logo"
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
