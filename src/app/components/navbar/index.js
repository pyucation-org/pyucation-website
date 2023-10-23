'use client'

import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { fadeInRight } from "@/app/util/variants";
import Watermark from "../watermark";


const Navbar = () => {
  return (
    <header className="sticky top-0 w-full z-50">
      <div className="flex flex-row items-center justify-evenly bg-black bg-opacity-40 backdrop-blur-lg rounded-b-2xl">
      <div className="hidden 2xl:flex flex-row max-w-lg w-56 h-8 justify-evenly items-center">
        <Watermark/>
      </div>
      <div className="2xl:max-w-4xl max-w-2xl flex-grow 2xl:h-16 h-12">
        <div className="flex flex-row justify-evenly items-center h-full">
          <Link className="navbar-button" href="/services">
            <p className="text-white text-md">Dienstleistungen</p>
          </Link>
          <Link className="navbar-button" href="/contact">
            <p className="text-white text-md">Kontakt</p>
          </Link>
          <Link className="navbar-button" href="/imprint">
            <p className="text-white text-md">Impressum</p>
          </Link>
        </div>
      </div>
      <motion.div className="hidden 2xl:flex flex-row max-w-lg w-56 h-8 justify-center items-center"
      variants={fadeInRight}
      initial="hidden"
      animate="visible"
      transition={{delay: 1}}>
        <SocialIcon
          url="https://twitter.com/jaketrent"
          className="cursor-pointer"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/@pyucation"
          className="cursor-pointer"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/@pyucation"
          className="cursor-pointer"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
