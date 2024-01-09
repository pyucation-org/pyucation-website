"use client";

import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { fadeInRight } from "@/app/util/variants";
import Watermark from "../watermark";

const Navbar = () => {
  return (
    <header className="top-0 w-full z-50 absolute overflow-hidden">
      <div className="flex flex-row items-center justify-evenly bg-black bg-opacity-40 backdrop-blur-lg rounded-b-2xl">
        <div className="hidden sm:flex flex-row max-w-lg w-56 h-8 justify-evenly items-center">
          <Watermark />
        </div>
        <div className="2xl:max-w-4xl max-w-2xl flex-grow 2xl:h-16 h-12">
          <div className="flex flex-row justify-evenly items-center h-full gap-1 overflow-hidden">
            <Link className="navbar-button group" href="/services">
              <div className="bg-secondary bg-opacity-40 w-0 2xl:h-16 h-12 rounded-full absolute group-hover:w-[150px] transition-all blur-lg"></div>
              <p className="text-white lg:text-base text-sm">
                Dienstleistungen
              </p>
            </Link>
            <Link className="navbar-button group" href="/contact">
              <div className="bg-secondary bg-opacity-40 w-0 2xl:h-16 h-12 rounded-full  absolute group-hover:w-[150px] transition-all blur-lg"></div>
              <p className="text-white lg:text-base text-sm">Kontakt</p>
            </Link>
            <Link className="navbar-button group" href="/imprint">
              <div className="bg-secondary bg-opacity-40 w-0 2xl:h-16 h-12 rounded-full  absolute group-hover:w-[150px] transition-all blur-lg"></div>
              <p className="text-white lg:text-base text-sm">Impressum</p>
            </Link>
          </div>
        </div>
        <motion.div
          className="hidden sm:flex flex-row max-w-lg w-56 h-8 justify-center items-center"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <SocialIcon
            url="https://github.com/pyucation"
            className="cursor-pointer hover:fill-gray-800"
            fgColor="white"
            bgColor="transparent"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.youtube.com/@pyucation"
            className="cursor-pointer"
            fgColor="white"
            bgColor="transparent"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/company/pyucation/"
            className="cursor-pointer"
            network="linkedin"
            fgColor="white"
            bgColor="transparent"
            style={{ height: 40, width: 40 }}
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
