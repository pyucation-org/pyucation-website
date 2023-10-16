import { motion } from "framer-motion";
import React from "react";
import Bubble from "../reviewBubble";
import Image from "next/image";
import { fadeInVariant } from "@/app/util/variants";

function Start() {
  return (
    <div className="flex flex-col items-center justify-between py-20 ">
      <div className=" flex max-w-6xl h-auto py-24 px-6 gap-2">
        <motion.div
          className="flex flex-col gap-4 justify-center mt-10"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          // style={{ opacity: scrollYProgress }}
        >
          <h1 className="font-sans text-7xl text-white tracking-wide">
            pyucation
          </h1>
          <p className="text-zinc-500 text-lg mt-7 ml-10 tracking-widest">
            Weiterbildung und Beratung in Python: praxisorientiert,
            projektbasiert und individuell gestaltbar
          </p>
        </motion.div>
        {/* dark:drop-shadow-[0_0_0.3rem_#27B2DA] */}
        <motion.div
        // style={{ opacity: scrollYProgress }}
        >
          <Image
            className="flex relative animate-fade-in-drop-shadow"
            src="/logo_notext.svg"
            alt="Next.js Logo"
            width={600}
            height={600}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Start;
