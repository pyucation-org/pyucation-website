"use client";

import { fadeInVariant } from "@/app/util/variants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col h-auto max-w-6xl justify-start items-start mx-auto mt-28">
      <div className="flex">
        <h1 className="text-white text-6xl font-semibold align-start leading-snug">
          Unser Team
        </h1>
      </div>
      <motion.div
        className="flex flex-row gap-10 justify-center align-center mt-40"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="w-1/2 max-w-6xl mx-auto">
          <Image
            className="flex relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-xl"
            src="/marc.jpg"
            alt="marc knaussen"
            width={600}
            height={600}
            priority
          />
        </div>
        <div className="w-1/2 flex flex-col gap-3 justify-center">
          <h2 className="text-white font-semibold text-5xl">Marc Knaussen</h2>
          <h3 className="text-zinc-400 text-2xl">Gründer</h3>
          <p className="text-lg text-gray-400 tracking-wider leading-8 font-light">
            "Ein Grundverständnis zur Analyse von Daten und das Wissen, wie man
            die gewonnenen Informationen nutzt, ist eine wertvolle Fähigkeit.
            <br></br>
            Python ist eine mächtige Programmiersprache und sollte meiner
            Meinung nach ein Standardwerkzeug im Baukasten jedes Menschen sein.
            Ob für den privaten oder beruflichen Alltag spielt keine Rolle. Wir
            helfen Dir, den Einstieg zu finden und bauen Deine Kompetenzen
            entsprechend Deiner Wünsche aus."
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col items-center">
        <h2 className="text-white"> </h2>
      </div>
    </div>
  );
}
