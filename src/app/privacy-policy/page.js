"use client";

import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { fadeInVariant } from "../util/variants";

function PrivacyPolicy() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  return (
    <main className="pb-20 h-screen overflow-auto overflow-x-hidden flex flex-col items-center justify-center">
      <motion.div
        className="flex flex-col h-auto max-w-6xl justify-start items-start mx-auto mt-0"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="flex"></div>
        <div className="py-4 rounded-lg shadow-lg max-w-2xl px-4">
          <h1 className="text-white md:text-5xl text-4xl font-semibold mb-10 tracking-tight text-left">
            Datenschutzrichtlinien
          </h1>
          <p className="text-white mb-2">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns strikt an die Regeln der Datenschutzgesetze. Personenbezogene Daten werden auf dieser Webseite nur im technisch notwendigen Umfang erhoben. In keinem Fall werden die erhobenen Daten verkauft oder aus anderen Gründen an Dritte weitergegeben.
          </p>
          <p className="text-white mb-2">
            Die nachfolgende Erklärung gibt Ihnen einen Überblick darüber, wie wir diesen Schutz gewährleisten und welche Art von Daten zu welchem Zweck erhoben werden.
          </p>

          <p className="text-white mb-2">
            Nutzen Sie das Kontaktformular, werden Ihre Daten per E-Mail ans uns übertragen. Diese dienen lediglich der Kontaktaufnahme und werden für keine weiteren Zwecke als diesen verwendet.
          </p>

          <p className="text-white mt-10">
            © {new Date().getFullYear()} Marc Benesch - pyucation. Alle Rechte vorbehalten.
          </p>
        </div>
      </motion.div>
    </main>
  );
}

export default PrivacyPolicy;
