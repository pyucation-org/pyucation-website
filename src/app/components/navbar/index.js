import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="sticky top-5 w-full z-50">
      <div className="xl:max-w-6xl max-w-2xl min-w-2xl flex-grow h-16 bg-black bg-opacity-40 rounded-full mx-auto">
        <div className="flex flex-row justify-evenly items-center h-full">
          <Link className="navbar-button" href="/services">
            <p className="text-white text-lg">Dienstleistungen</p>
          </Link>
          <Link className="navbar-button" href="/contact">
            <p className="text-white text-lg">Kontakt</p>
          </Link>
          <Link className="navbar-button" href="/imprint">
            <p className="text-white text-xl">Impressum</p>
          </Link>
        </div>
      </div>
      <div className="hidden 2xl:flex flex-row absolute gap-1 top-2 right-5 max-w-lg h-8 justify-start items-start">
        <SocialIcon
          url="https://twitter.com/jaketrent"
          className="w-4 h-4 cursor-pointer"
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
      </div>
    </header>
  );
};

export default Navbar;
