"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import InfoContent from "../components/infoContent";
import PricingCards from "../components/pricingCards";
import TabIndicator from "../components/tabIndicator";
import { fadeInVariant } from "../util/variants";

export default function Page() {
  //State of Information Tab
  const [infoState, setInfoState] = useState("ai");

  //Scroll State
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    console.log("scroll y : ", scrollYProgress);
  }, [scrollYProgress]);

  return (
    <main className="pb-40 h-screen overflow-auto overflow-x-hidden">
      <div className="flex flex-col h-auto max-w-6xl  justify-start items-start mx-auto mt-28">
        {/*Title */}
        <motion.div
          className="flex align-center justify-start"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-white text-6xl font-semibold align-start leading-snug">
            Unsere <br />
            Dienstleistungen
          </h1>
        </motion.div>

        {/*Tabs */}
        <div className="flex align-center justify-between w-full mt-28">
          <div className="flex flex-col px-20 py-10 mr-4 w-1/2">
            <button className="px-6" onClick={() => setInfoState("ai")}>
              <h2 className="text-5xl text-white">AI-Beratung</h2>
            </button>
            {infoState == "ai" && <TabIndicator />}
          </div>
          <div className="flex flex-col px-20 py-10 ml-4 w-1/2">
            <button className="px-6" onClick={() => setInfoState("python")}>
              <h2 className="text-5xl text-white">Python-Kurs</h2>
            </button>
            {infoState == "python" && <TabIndicator />}
          </div>
        </div>

        {/*Content */}
        <div className="mx-auto w-full mt-10">
          <InfoContent content={infoState} />
        </div>

        {/*Pricing */}
        <motion.div className="w-full">
          <h2 className="mx-auto w-full text-center mt-20 text-white text-4xl">
            Preismodelle
          </h2>
        </motion.div>
        <div className="mx-auto w-full mt-10">
          <PricingCards content={infoState} />
        </div>
      </div>
    </main>
  );
}
