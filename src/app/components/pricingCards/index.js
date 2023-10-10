import React from "react";
import Card from "./card";

function PricingCards({ content = "python" }) {
  const pricingsPython = [
    {
      name: "Schnupperstunde",
      tag: "Kostenlos",
      price: "0",
      description:
        "gemeinsame Installation, gemütliches Kennenlernen, Organisatorisches, erste Schritte mit Python",
    },
    {
      name: "Seminarstunde",
      tag: "Beliebt",
      price: "50",
      description:
        "gemeinsame Installation, gemütliches Kennenlernen, Organisatorisches, erste Schritte mit Python",
    },
    {
      name: "Kleingruppen",
      tag: "Für Unternehmen",
      price: "140",
      description:
        "gemeinsame Installation, gemütliches Kennenlernen, Organisatorisches, erste Schritte mit Python",
    },
  ];

  return (
    <div className="flex flex-row gap-4 w-full justify-between">
      {content == "python" ? (
        pricingsPython.map((el, index) => {
          return <Card key={"key-index"} />;
        })
      ) : (
        <div> NOTHING</div>
      )}
    </div>
  );
}

export default PricingCards;
