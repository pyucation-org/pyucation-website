import { fadeInRight } from "@/app/util/variants";
import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
function index() {
  return (
    <motion.div
      className="bottom-2 right-0 absolute z-50 flex flex-row max-w-lg w-40 h-8 justify-center items-center"
      // variants={fadeInRight}
      // initial="hidden"
      // animate="visible"
      // transition={{ delay: 1 }}
    >
      <SocialIcon
        url="https://github.com/pyucation"
        className="cursor-pointer hover:fill-gray-800"
        fgColor="gray"
        bgColor="transparent"
        style={{ height: 40, width: 40 }}
      />
      <SocialIcon
        url="https://www.youtube.com/@pyucation"
        className="cursor-pointer"
        fgColor="gray"
        bgColor="transparent"
        style={{ height: 40, width: 40 }}
      />
      <SocialIcon
        url="https://www.linkedin.com/company/pyucation/"
        className="cursor-pointer"
        network="linkedin"
        fgColor="gray"
        bgColor="transparent"
        style={{ height: 40, width: 40 }}
      />
    </motion.div>
  );
}

export default index;
