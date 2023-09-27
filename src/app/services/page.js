"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 0.5 },
    },
  };

  const transition = { duration: 1, ease: "easeInOut" };

  return (
    <div className="min-h-screen flex flex-col bg-white p-24 gap-8">
      <div className="flex align-center justify-center">
        <h1 className="text-black text-4xl font-semibold align-center">
          Dienstleistungen
        </h1>
      </div>
      <div className="flex align-center justify-center mx-56">
        <p className="text-gray-600 tracking-widest leading-7 text-center text-lg">
          Wir möchten jedem das Potenzial der Programmiersprache Python zeigen.
          Die Entwicklung von generellen Lösungsstrategien zur Automatisierung
          und Datenverarbeitung sowie ein grundlegendes technisches Verständnis
          sind Fähigkeiten, die heutzutage unverzichtbar sind. Entsprechend ist
          unser Portfolio an Dienstleistungen aufgebaut.
          <br></br>
          Wir bieten sowohl Einführungen für Anfänger als auch Kurse für
          Fortgeschrittene an. Module wie numpy, pandas, pytorch, sklearn, flask
          und viele mehr können wir ebenso bedienen.
        </p>
      </div>
      {/* Row of Services */}
      <div className="flex flex-row gap-3 justify-between align-center mx-56">
        <div className="flex flex-col gap-2 justify-center align-center px-8 w-1/3">
          <div className="w-20 rounded-xl bg-gray-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <motion.path
                  fill="none"
                  d="M11.7518 6.24359C12.983 5.01246 14.782 4.69543 16.3057 5.29249L13.5532 8.04496C13.2216 8.37659 13.2216 8.91425 13.5532 9.24588L14.7541 10.4468C15.0857 10.7784 15.6234 10.7784 15.955 10.4468L18.7075 7.69432C19.3046 9.21796 18.9875 11.017 17.7564 12.2482C16.5253 13.4793 14.7262 13.7963 13.2026 13.1993L7.89927 18.5026C7.23602 19.1658 6.16068 19.1658 5.49744 18.5026C4.83419 17.8393 4.83419 16.764 5.49744 16.1007L10.8007 10.7974C10.2037 9.2738 10.5207 7.47472 11.7518 6.24359Z"
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={transition}
                />
              </g>
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-black">
            Hoher Praxisbezug
          </h2>
          <p className="text-md leading-6 text-gray-800">
            Wir werden gemeinsam sehr viele Übungsaufgaben und Mini-Projekte
            lösen. Unser Ziel ist es, Deinen Erfahrungsschatz auszubauen.
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center align-center px-8 w-1/3">
          <div className="w-20 rounded-xl bg-gray-400 p-2">
            <svg
              fill="#000000"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <motion.path
                  stroke="#111827"
                  d="M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={transition}
                ></motion.path>
              </g>
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-black">Beratung</h2>
          <p className="text-md leading-6 text-gray-800">
            Wir helfen Dir bei der Verwirklichung eigener Projektideen und
            unterstützen von der Ideenentwicklung bis zur Implementierung.
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center align-center px-8 w-1/3">
          <div className="w-20 bg-gray-400 rounded-xl p-2">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <motion.path
                  d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={transition}
                ></motion.path>
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={transition}
                  fill="none"
                  d="M0 0h24v24H0z"
                ></motion.path>
              </g>
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-black">Prüfungen</h2>
          <p className="text-md leading-6 text-gray-800">
            Du benötigst ein Zertifikat für Schule, Ausbildungsstätte oder
            Arbeitgeber? Kein Problem.
          </p>
        </div>
      </div>
      <hr className="mt-28 mb-28"></hr>

      {/* marc */}
      <div className="flex flex-row gap-20 justify-center align-center mx-56">
        <div className="w-1/2 border-gray-600 border-2">
          <Image
            className="flex relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/marc_cropped.png"
            alt="marc knaussen"
            width={600}
            height={600}
            priority
          />
        </div>
        <div className="w-1/2 flex flex-col gap-3 justify-center">
          <h2 className="text-black font-semibold text-3xl">Marc Knaussen</h2>
          <h3 className="text-black text-xl">Gründer</h3>
          <p className="text-lg text-gray-600 tracking-widest leading-8 font-sans">
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
      </div>
    </div>
  );
}
