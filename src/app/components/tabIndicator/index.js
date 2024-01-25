"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function TabIndicator({ isVisible }) {
  const indicatorVariant = {
    hidden: { scaleX: 0 },
    visible: { scaleX: "100%" },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex flex-row items-center"
          variants={indicatorVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="rounded-full w-6 h-6 bg-primary"></div>
          <div className="w-full h-1 bg-gradient-to-r from-primary"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TabIndicator;
