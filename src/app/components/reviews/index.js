import { motion } from "framer-motion";
import React from "react";
import Bubble from "../reviewBubble";

function Reviews() {
  return (
    <div className="flex flex-col h-auto max-w-6xl  justify-start items-start mx-auto">
      <motion.div
        className="flex flex-col max-w-6xl h-fit items-end gap-10 mt-40"
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Bubble />
      </motion.div>
      <motion.div
        className="flex flex-col max-w-6xl h-fit items-start gap-10 mt-40"
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Bubble orientation="left" />
      </motion.div>
      <motion.div
        className="flex flex-col max-w-6xl h-fit items-end gap-10 mt-40"
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Bubble orientation="right" />
      </motion.div>
    </div>
  );
}

export default Reviews;
