"use client";

import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
function Page() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  return (
    <div
      ref={scrollRef}
      className="flex flex-col gap-20 mt-24 mx-auto items-center h-80 bg-green-500 overflow-scroll"
    >
      {[1, 2, 3, 4, 5, 6, 7].map((el) => (
        <motion.div
          className="text-white w-20 h-20 bg-red-500"
          style={{ scaleX: scrollYProgress }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scaleX: "100%" }}
          key={el}
        >
          page
        </motion.div>
      ))}
    </div>
  );
}

export default Page;
