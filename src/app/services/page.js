"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import InfoContent from "../components/infoContent";
import PricingCards from "../components/pricingCards";
import TabIndicator from "../components/tabIndicator";
import { fadeInVariant } from "../util/variants";
import PrivacyModal from "../components/privacyModal";

export default function Page() {
  //State of Information Tab
  const [infoState, setInfoState] = useState("ai");

  //Scroll State
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    console.log("scroll y : ", scrollYProgress);
  }, [scrollYProgress]);

  return (
    <main className="pb-40 h-screen overflow-auto overflow-x-hidden px-4">
      <div className="flex flex-col h-auto max-w-6xl justify-start md:items-start items-center mx-auto mt-28">
        {/*Title */}
        <motion.div
          className="flex align-center md:justify-start justify-center max-w-sm md:max-w-none"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-white sm:text-6xl text-4xl font-semibold align-start leading-snug">
            Unsere <br />
            Dienstleistungen
          </h1>
        </motion.div>

        {/*Tabs */}
        <div className="flex align-center justify-between w-full mt-28">
          <div className="flex flex-col md:px-20 py-10 mr-4 w-1/2">
            <button
              className="px-6 min-w-fit"
              onClick={() => setInfoState("ai")}
            >
              <h2
                className={`py-1 md:text-5xl text-2xl text-transparent gradient-text ${
                  infoState !== "ai" && "hover:animate-gradient"
                }`}
              >
                AI-Beratung
              </h2>
            </button>
            <TabIndicator isVisible={infoState == "ai" ? true : false} />
          </div>
          <div className="flex flex-col md:px-20 py-10 ml-4 w-1/2">
            <button className="px-6" onClick={() => setInfoState("python")}>
              <h2
                className={`py-1 md:text-5xl text-2xl text-transparent gradient-text ${
                  infoState !== "python" && "hover:animate-gradient"
                }`}
              >
                Python-Kurs
              </h2>
            </button>
            <TabIndicator isVisible={infoState == "python" ? true : false} />
          </div>
        </div>

        {/*Content */}
        <div className="mx-auto w-full mt-10">
          <InfoContent content={infoState} />
        </div>

        {/*Pricing */}
        <motion.div className="w-full">
          <h2 className="mx-auto w-full text-center mt-20 text-white md:text-4xl text-3xl">
            Unsere Kursmodelle
          </h2>
        </motion.div>
        <div className="mx-auto w-full mt-10">
          <PricingCards content={infoState} />
        </div>
      </div>
      {/*Data Privacy Consent */}
      <PrivacyModal />
    </main>
  );
}
