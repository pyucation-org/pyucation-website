import React from "react";

function Card({ name, tag, price, text }) {
  return (
    <div className="flex flex-col gap-6 p-6 ml-4 w-72 h-fit justify-start bg-zinc-200 bg-opacity-40 backdrop-blur-sm rounded-xl">
      <p className=" text-sm text-zinc-800 uppercase">{tag}</p>
      <div className="flex flex-row gap-4 justify-start items-end">
        <p className=" font-bold text-black text-6xl">{price} €</p>
        <p className="text-zinc-800 text-xl">/ h</p>
      </div>
      <p className="font-semibold text-zinc-900 text-2xl">{name}</p>
    </div>
  );
}

export default Card;
