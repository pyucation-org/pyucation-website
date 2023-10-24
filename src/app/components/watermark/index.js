import Image from "next/image";
import React, { useEffect, useState } from "react";

function Watermark() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="hidden xl:flex text-md text-zinc-200 tracking-widest">
        pyucation
      </div>
      <Image
        className="right-4 min-w-[40px]"
        src="/logo_notext_white.svg"
        alt="Next.js Logo"
        width={35}
        height={35}
        priority
      />
    </div>
  );
}

export default Watermark;
