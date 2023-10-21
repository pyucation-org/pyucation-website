import { motion } from "framer-motion";
import React from "react";
import Carousel from "../reviewCarousel";
function Reviews() {
  return (
    <div className="flex flex-col h-auto max-w-6xl justify-start items-start mx-auto mt-56">
      <h1 className="text-white text-6xl font-semibold align-start leading-snug">
        100% <br />Kundenzufriedenheit

      </h1>
      <div className="flex justify-center items-center w-full mt-28">
      <Carousel />
      </div>
    </div>
  );
}

export default Reviews;
