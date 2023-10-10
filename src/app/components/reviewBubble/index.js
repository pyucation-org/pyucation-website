import React from "react";
import Link from "next/link";

const Bubble = ({ orientation = "right" }) => {
  return (
    // <div>
    //   <div className="h-48 w-96 rounded-3xl bg-blue-700"></div>
    //   <div class="w-0 h-20 border-t-[10px] border-t-transparent border-r-[50px] border-r-blue-500 border-b-[60px] border-b-transparent rounded-3xl"></div>
    // </div>
    <div className="p-2 w-3/4 h-fit">
      <div className="relative h-fit rounded-3xl bg-speechBubble shadow-lg">
        {orientation == "right" ? (
          <div className="absolute right-14 bottom-0 h-14 w-14 translate-x-8 translate-y-1/3 rotate-45 rounded-md transform bg-speechBubble"></div>
        ) : (
          <div className="absolute left-14 bottom-0 h-14 w-14 -translate-x-8 translate-y-1/3 rotate-45 rounded-md transform bg-speechBubble"></div>
        )}

        <div className="px-8">
          <p className="text-zinc-900 px-5 pt-8 pb-5 tracking-widest text-lg">
            Perfekt! Marc schafft durch seine ruhige, sympathische und
            kompetente Art eine gemütliche Lernatmosphäre in der man sich
            wohlfühlt. Er erklärte mir alles sehr ausführlich und konnte mir bei
            jeder Frage weiterhelfen. Ich kann ihn nur weiterempfehlen. :)
          </p>
          <p className="text-black px-5 pb-8 text-center font-medium text-lg">
            Aron, Stuttgart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bubble;
