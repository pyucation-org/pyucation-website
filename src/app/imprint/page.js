"use client";

import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { fadeInVariant } from "../util/variants";
function Page() {
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
            Impressum
          </h1>
          <p className="text-white mb-2">
            <strong>Marc Benesch - pyucation</strong>
          </p>
          <p className="text-white mb-6">Wiegandweg 4, 80937 München</p>
          <p className="text-white mb-2">Telefon: +49 152 58521568</p>
          <p className="text-white mb-2">Email: marc.benesch@pyucation.de</p>
          <p className="text-white mb-6">Geschäftsführer: Marc Benesch</p>
          <p className="text-white mb-2">Handelsregister: tbd</p>
          <p className="text-white mb-2">
            Umsatzsteuer-ID: umsatzsteuerbefreit nach § 19 UStG
          </p>
          <p className="text-white my-2">
            Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV): Marc Benesch
          </p>
          <p className="text-white mt-10">
            © {new Date().getFullYear()} pyucation. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </main>
  );
}

export default Page;
