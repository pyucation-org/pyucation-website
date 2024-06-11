import { motion } from "framer-motion";
import React from "react";
import { fadeInVariant } from "@/app/util/variants";
import LogoCard from "./logoCard"; // Use default import

function Partners() {
  const partnerLogos = [
    { src: "/partners/BPP-Polizei.webp", alt: "Bayerische Bereitschaftspolizei" },
    { src: "/partners/Burg-Waechter.webp", alt: "Burg-Wächter GmbH & Co. KG" },
    { src: "/partners/cmt-logo.webp", alt: "cmt GmbH" },
    { src: "/partners/fraunhofer-iao.webp", alt: "Fraunhofer IAO Stuttgart" },
    { src: "/partners/hs-luftfilterbau.webp", alt: "HS Luftfilterbau GmbH" },
    { src: "/partners/Matterkind.webp", alt: "Matterkind" },
    { src: "/partners/PWC.webp", alt: "PWC Deutschland" },
    { src: "/partners/SV_Group.webp", alt: "SV Group" },
    { src: "/partners/SWM.webp", alt: "Stadtwerke München" }
  ];

  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col h-auto max-w-6xl justify-start items-start mx-auto xl:mt-56 pb-20 xl:px-0 px-8"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

        <h1 className="text-white md:text-6xl text-3xl font-semibold align-start text-center md:text-start leading-snug mt-5 md:w-auto w-full">
            Kunden und Partner:
        </h1>

        <div className="flex flex-wrap justify-center items-center w-full mt-10 gap-4">
        {partnerLogos.map((logo, index) => (
            <motion.div
            key={index}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            >
            <LogoCard src={logo.src} alt={logo.alt} />
            </motion.div>
        ))}
        </div>
    </motion.div>
  );
}

export default Partners;
