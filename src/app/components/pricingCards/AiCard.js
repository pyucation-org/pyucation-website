import React from "react";
import Link from 'next/link';
import ContactButton from "../contactButton";

function AICard({ name, tag, text, popular }) {
  const bgColorClass = popular
    ? "bg-primary bg-opacity-70 shadow-accentDark shadow-xl"
    : "bg-zinc-200 bg-opacity-60";

  return (
    <div
      className={`flex flex-col gap-4 p-6 ml-4 w-72 h-fit justify-start ${bgColorClass} backdrop-blur-xl rounded-xl`}
    >
      <p className="text-sm font-bold text-zinc-900 uppercase">{tag}</p>
      <p className="font-semibold text-zinc-900 md:text-2xl text-lg">{name}</p>
      <p className="text-zinc-900 text-1xl">{text}</p>
      <ContactButton></ContactButton>
    </div>
  );
}

export default AICard;