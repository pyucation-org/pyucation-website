import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-screen max-w-6xl min-w-2xl h-16 mx-auto bg-black bg-opacity-40 sticky top-12 rounded-full">
        <div className="flex flex-row justify-evenly items-center h-full">
          <Link className="navbar-button" href="/services">
            <p>Dienstleistungen</p>
          </Link>
          <Link className="navbar-button" href="/contact">
            <p>Kontakt</p>
          </Link>
          <Link className="navbar-button" href="/contact">
            <p>Impressum</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
