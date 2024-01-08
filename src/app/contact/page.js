"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInVariant } from "../util/variants";

export default function Page() {
  return (
    <main className="pb-20 h-screen overflow-auto overflow-x-hidden">
      <motion.div
        className="flex flex-col h-auto max-w-6xl justify-start items-start mx-auto mt-28"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="flex"></div>
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="text-white md:text-5xl text-4xl font-semibold mb-4 tracking-tight text-center">
            Kontaktieren Sie uns!
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Wir freuen uns von Ihnen zu hören.
          </p>
          <form
            action="https://formspree.io/f/maykjwkv"
            method="POST"
            className="space-y-8"
          >
            <div className="flex flex-row gap-4 align-center mx-auto">
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-zinc-400"
                >
                  Vorname
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Max"
                  required
                ></input>
              </div>
              <div>
                <label
                  for="surname"
                  className="block mb-2 text-sm font-medium text-zinc-400"
                >
                  Nachname
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Mustermann"
                  required
                ></input>
              </div>
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium  text-zinc-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="example@pyucation.de"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-zinc-400"
              >
                Telefonnummer
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Beschreiben Sie Ihr Anliegen"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit focus:ring-4 focus:outline-none focus:ring-secondary bg-secondary hover:bg-primary"
            >
              Absenden
            </button>
          </form>
        </div>
      </motion.div>
    </main>
  );
}
