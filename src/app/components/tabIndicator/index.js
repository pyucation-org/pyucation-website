"use client";

import { motion } from "framer-motion";
import React from "react";

function TabIndicator() {
  const indicatorVariant = {
    hidden: { scaleX: 0 },
    visible: { scaleX: "100%" },
  };

  return (
    <motion.div
      className="flex flex-row items-center"
      variants={indicatorVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="rounded-full w-6 h-6 bg-primary"></div>
      <div className="w-full h-1 bg-gradient-to-r from-primary"></div>
    </motion.div>
  );
}

export default TabIndicator;
