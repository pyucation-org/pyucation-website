import { motion, stagger } from "framer-motion";
import React from "react";
import Carousel from "../reviewCarousel";
import { fadeInVariant } from "@/app/util/variants";
import ReviewCard from "./reviewCard";
import LogoCard from "./logoCard";

function Reviews() {
  // Array of review data
  const reviews = [
    {
      reviewText:
        "Didaktisch ausgezeichnet. So funktioniert Wissensvermittlung bei hochkomplexen Themen wie Künstliche Intelligenz. Super Vortrag!",
      name: "Benedict",
      location: "München",
    },
    {
      reviewText:
        "Marc schafft durch seine ruhige, sympathische und kompetente Art eine gemütliche Lernatmosphäre in der man sich wohlfühlt. Er erklärte mir alles sehr ausführlich und konnte mir bei jeder Frage weiterhelfen. Ich kann ihn nur weiterempfehlen. :)",
      name: "Andreas",
      location: "Stuttgart",
    },
    {
      reviewText:
        "Marc ist genau in dem Tempo durch den Stoff gegangen, das ich brauchte. Er hat mir geholfen mich innerhalb von zwei Woche so gut auf die Klausur in Python vorzubereiten, dass ich eine 2+ geschrieben habe. ICH BIN SO DANKBAR. IMMER WIEDER GERNE!",
      name: "Bettina",
      location: "Trier",
    },
    {
      reviewText:
        "Zielgerichtete und individuell auf Bedürfnisse angestimmte Wissensvermittlung.",
      name: "Kim",
      location: "Zürich",
    },
    {
      reviewText:
        "Marc ist einfach Top! :) Ich habe bereits einen längeren Zeitraum Nachhilfe bei Marc und bin super zufrieden. Er ist extrem bemüht und fachlich wirklich Sehr gut!!",
      name: "Sophia",
      location: "Stuttgart",
    },
    {
      reviewText:
        "Marc erklärt das ganz sehr anschaulich und liefert zu jedem Thema immer gute Übungen, das ein tieferes Verständniss gebildet wird. Er hat eine sehr ruhige und sympatische Art die ein lockeres Klima schaffen, von ihm kann man viel lernen, sehr empfehlenswert",
      name: "René",
      location: "Karlsruhe",
    },
    {
      reviewText:
        "Marc ist ein sehr kompetenter Lehrer. Er verfügt über genügend Übungsmaterialien. Ich scheue mich nicht zu sagen, dass ich etwas nicht verstehe, weil er gut erklärt und geduldig ist. Ich empfehle ihn für alle, die schnell zum Erfolg kommen wollen.",
      name: "Valerie",
      location: "Berlin",
    },
    {
      reviewText:
        "Marc bringt als Lehrer alle Voraussetzungen mit, um den Unterricht sowohl lehrreich als auch praxisorientiert zu gestalten. Durch seine Art ist es für Anfänger einfach, in die Materie einzusteigen. Er richtet sich individuell nach meinem Lernfortschritt und ist in seiner Unterrichtsgestaltung sehr flexibel.",
      name: "Anne",
      location: "Hamburg",
    },
  ];

  const partnerLogos = [
    { src: "public/partners/BPP-Polizei.webp", alt: "Bayerische Bereitschaftspolizei" },
    { src: "public/partners/Burg-Waechter.webp", alt: "Burg-Wächter GmbH & Co. KG" },
    { src: "public/partners/cmt-logo.webp", alt: "cmt GmbH" },
    { src: "public/partners/fraunhofer-iao.webp", alt: "Fraunhofer IAO Stuttgart" },
    { src: "public/partners/hs-luftfilterbau.webp", alt: "HS Luftfilterbau GmbH" },
    { src: "public/partners/Matterkind.webp", alt: "Matterkind" },
    { src: "public/partners/PWC.webp", alt: "PWC Deutschland" },
    { src: "public/partners/SV_Group.webp", alt: "SV Group" },
    { src: "public/partners/SWM.webp", alt: "Stadtwerke München" },
  ]

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

      <h1 className="text-white md:text-6xl text-3xl font-semibold align-start text-center md:text-start leading-snug mt-5 md:w-auto w-full">
        Wir sind stolz auf 100% Kundenzufriedenheit:
      </h1>
      <div className="flex flex-wrap md:justify-start justify-center items-center w-full mt-28 gap-4">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <ReviewCard
              reviewText={review.reviewText}
              name={review.name}
              location={review.location}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Reviews;
