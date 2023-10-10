"use client";

import Image from "next/image";
import Bubble from "./components/reviewBubble";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex flex-col max-h-screen  items-center justify-between py-20 mt-20">
      <div className=" flex max-w-6xl h-auto py-24 px-6 gap-2">
        <motion.div
          className="flex flex-col gap-4 justify-center mt-10"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
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
        <Image
          className="flex relative animate-fade-in-drop-shadow"
          src="/logo_notext.svg"
          alt="Next.js Logo"
          width={600}
          height={600}
          priority
        />
      </div>
      <div className="flex flex-col max-w-6xl h-fit items-end gap-10 mt-40">
        <Bubble />
      </div>
      <div className="flex flex-col max-w-6xl h-fit items-start gap-10 mt-40">
        <Bubble orientation="left" />
      </div>
      <div className="flex flex-col max-w-6xl h-fit items-end gap-10 mt-40">
        <Bubble orientation="right" />
      </div>
    </main>
  );
}
