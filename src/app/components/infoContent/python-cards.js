import React from "react";

function PythonCards() {
  return (
    // <div className="flex md:flex-row flex-col md:justify-evenly items-center w-full gap-4 mx-auto mt-10 mb-10 px-10">
    //   <div className=" bg-zinc-200 bg-opacity-10 backdrop-blur-sm w-92 h-fit rounded-lg text-center text-white py-6 px-10">
    //     <p className="text-2xl font-sans">Beratung</p>
    //   </div>
    //   <div className=" bg-accentLight bg-opacity-10 backdrop-blur-sm w-92 h-fit rounded-lg text-center text-white py-6 px-10">
    //     <p className="text-2xl font-sans">Viele Übungsaufgaben</p>
    //   </div>
    //   <div className=" bg-accentDark bg-opacity-10 backdrop-blur-sm w-92 h-fit rounded-lg text-center text-white py-6 px-10">
    //     <p className="text-2xl font-sans">Projekte zum Lernen</p>
    //   </div>
    // </div>
    <div className="flex md:flex-row flex-col md:justify-evenly items-center w-full gap-4 mx-auto mt-10 mb-10 px-10">
      <div className="flex-grow bg-zinc-200 bg-opacity-10 backdrop-blur-sm w-72 h-fit rounded-lg text-center text-white py-6 px-10 hover:bg-opacity-40 transition-all">
        <p className="xl:text-2xl text-xl font-sans">Beratung</p>
      </div>

      <div className="flex-grow bg-accentLight bg-opacity-10 backdrop-blur-sm w-72 h-fit rounded-lg text-center text-white py-6 px-10 hover:bg-opacity-40 transition-all">
        <p className="xl:text-2xl text-xl font-sans">Viele Übungsaufgaben</p>
      </div>

      <div className="flex-grow bg-accentDark bg-opacity-10 backdrop-blur-sm w-72 h-fit rounded-lg text-center text-white py-6 px-10 hover:bg-opacity-40 transition-all">
        <p className="xl:text-2xl text-xl font-sans">Projekte zum Lernen</p>
      </div>
    </div>
  );
}

export default PythonCards;
