'use client'

import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { fadeInRight } from "@/app/util/variants";


const Navbar = () => {
  return (
    <header className="sticky top-5 w-full z-50">
      <div className="2xl:max-w-4xl max-w-2xl flex-grow 2xl:h-16 h-12 bg-black bg-opacity-40 backdrop-blur-lg rounded-lg mx-auto">
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
      <motion.div className="hidden 2xl:flex flex-row absolute gap-1 top-2 right-5 max-w-lg h-8 justify-start items-start"
      variants={fadeInRight}
      initial="hidden"
      animate="visible"
      transition={{delay: 1}}>
        <SocialIcon
          url="https://twitter.com/jaketrent"
          className="w-2 h-2 cursor-pointer"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/@pyucation"
          className="w-2 h-2 cursor-pointer"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/@pyucation"
          className="w-4 h-4 cursor-pointer"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          className="w-4 h-4 cursor-pointer"
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
};

export default Navbar;
