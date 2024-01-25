"use client";

import { fadeInVariant } from "@/app/util/variants";
import { motion } from "framer-motion";
import React from "react";
import AiCards from "./ai_cards";
import PythonCards from "./python-cards";

function InfoContent({ content = "ai" }) {
  let infoText;
  let infoImage;
  let specialText;

  if (content === "ai") {
    infoText =
      "Unsere Schulungen werden auf die individuellen Bedürfnisse Ihrer Organisation zugeschnitten. Wir werden Ihnen und Ihren Mitarbeiterinnen und Mitarbeitern ein fundamentales Verständnis darüber vermitteln, wie Künstliche Intelligenz funktioniert. Dabei ist unser Anspruch, jeden Menschen unabhängig von seinem Vorwissen mitzunehmen. Grundlegend ist unser Weiterbildungsprogramm in zwei Bereiche aufgeteilt:";
    infoImage = "/ai-pillars.png";
    specialText = (
      <div className="font-light leading-8 tracking-wider">
        Unsere Vorträge bieten inspirierende Einblicke in die Welt der
        Künstlichen Intelligenz. Je nach Veranstaltung gestalten wir unsere
        Auftritte. Themen in der Vergangenheit waren u. a.:
        <ul className="list-disc list-outside md:ml-60 ml-10 text-left text-zinc-300 mt-4">
          <li>„Bullshit-Bingo vermeiden“ – Eine Begriffsabgrenzung zu KI</li>
          <li>Grundlagen des Maschinellen Lernens</li>
          <li>Deep Learning und Neuronale Netzwerke</li>
          <li>Generative AI – Potenziale und Gefahren</li>
          <li>Digitalisierung im Gesundheitswesen – KI in der Medizin</li>
        </ul>
      </div>
    );
  } else if (content === "python") {
    infoText =
      "Wir möchten jedem Menschen das Potenzial der Programmiersprache Python zeigen. Die Entwicklung von generellen Lösungsstrategien zur Automatisierung und Datenverarbeitung sowie ein grundlegendes technisches Verständnis sind Fähigkeiten, die heutzutage unverzichtbar sind.";
    infoImage = "/python-pillars.png";
    specialText = (
      <div className="font-light leading-8 tracking-wider md:text-xl text-md">
        Wir bieten sowohl Einführungen für Anfänger als auch Kurse für
        Fortgeschrittene an. Module wie numpy, pandas, pytorch, sklearn, flask
        und viele mehr können wir ebenso bedienen. Was uns auch hier besonders
        auszeichnet ist der hohe Praxisbezug und die individuelle Anpassung an
        unsere Kundinnen und Kunden. Wir unterstützen auch bei der
        Verwirklichung eigener Projektideen bis zur Implementierung.
      </div>
    );
  }

  return (
    //Layout transition is commented out due to sporadical stutter during the animation
    <motion.div
      // layout
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      // transition={{ layout: { duration: 0.1 } }}
    >
      <p className="text-zinc-200 md:text-xl text-md text-center tracking-widest leading-10 font-light">
        {infoText}
      </p>
      {/* <img src={infoImage} alt={content} className="w-full h-auto pt-10 pb-8" /> */}
      {content === "ai" ? <AiCards /> : <PythonCards />}
      {
        // show only if ai is selected
        content === "ai" ? (
          <div>
            <h2 className="text-zinc-300 font-semibold md:text-2xl text-xl mt-16 mb-2 text-center tracking-widest leading-12">
              AI-Vorträge und Key Notes
            </h2>
            ,
            <p className="text-zinc-200 md:text-xl text-md text-center font-light leading-8 tracking-wider">
              {specialText}
            </p>
          </div>
        ) : (
          // show only if python is selected
          <p className="text-zinc-200 text-xl text-center tracking-widest leading-10 font-light">
            {specialText}
          </p>
        )
      }
    </motion.div>
  );
}

export default InfoContent;
