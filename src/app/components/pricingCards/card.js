import React from "react";

function Card({ name, tag, price, text, popular }) {
  const bgColorClass = popular ? "bg-primary bg-opacity-30" : "bg-zinc-200 bg-opacity-40";

  return (
    <div className={`flex flex-col gap-4 p-6 ml-4 w-80 h-fit justify-start ${bgColorClass} backdrop-blur-sm rounded-xl`}>
      <p className="text-sm text-zinc-800 uppercase">{tag}</p>
      <div className="flex flex-row gap-4 justify-start items-end">
        <p className=" font-bold text-black text-6xl">{price} €</p>
        <p className="text-zinc-800 text-xl">/ h</p>
      </div>
      <p className="font-semibold text-zinc-900 text-2xl">{name}</p>
      <p className="text-zinc-900 text-1xl">{text}</p>
    </div>
  );
}

export default Card;
