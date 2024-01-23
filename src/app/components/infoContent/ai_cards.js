import React from "react";

function AiCards() {
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center lg:w-2/3 w-full gap-4 mx-auto mt-10 mb-10">
      <div className=" bg-zinc-200 bg-opacity-10 backdrop-blur-sm w-80 h-96 rounded-lg flex-col text-center text-white py-2 hover:bg-accentLight hover:bg-opacity-10 transition-all">
        <p className="mt-4 text-3xl font-sans">Grundlagen</p>
        <div className="p-4 mt-2">
          <hr className="border-zinc-400"></hr>
        </div>
        <ul className="list-square text-left ml-10 text-lg tracking-wider leading-6 font-sans mt-2 space-y-3">
          <li>Begriffe kennen und differenzieren</li>
          <li>grundlegende Theorie zu Themen:</li>
          <ul className="list-disc text-left ml-4 text-md tracking-wider font-light space-y-2">
            <li>Maschinelles Lernen</li>
            <li>Deep Learning und Neuronale Netze</li>
            <li>Generative AI</li>
          </ul>
        </ul>
      </div>
      <div className=" bg-zinc-200 bg-opacity-10 backdrop-blur-sm w-80 h-96 rounded-lg flex-col text-center text-white py-2 hover:bg-accentLight hover:bg-opacity-10 transition-all">
        <p className="mt-4 text-3xl font-sans">Erweiterte Konzepte</p>
        <div className="p-4 mt-2">
          <hr className="border-zinc-400"></hr>
        </div>
        <ul className="list-square text-left ml-10 text-lg tracking-wider leading-6 font-sans mt-2 space-y-3">
          <li>AI/ML-Lifecycle</li>
          <li className="mt-2">
            Algorithmen und Modelle: Unterschiede und Stäken (bspw. SVM,
            Decision Trees)
          </li>
          <li>Evaluation Metrics</li>
          <li>Bias und Fairness in Zusammenhang mit Daten</li>
          <li>Tools</li>
        </ul>
      </div>
    </div>
  );
}

export default AiCards;
