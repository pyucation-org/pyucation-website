import React from "react";
import Card from "./card";
import { pricingsAI, pricingsPython } from "@/app/util/pricingOptions";

function PricingCards({ content = "python" }) {
  return (
    <div className="flex flex-row gap-4 w-full justify-between">
      {content == "python"
        ? pricingsPython.map((el, index) => {
            return (
              <Card
                key={"key-index"}
                name={el.name}
                tag={el.tag}
                price={el.price}
                text={el.description}
              />
            );
          })
        : pricingsAI.map((el, index) => {
            return (
              <Card
                key={"key-index"}
                name={el.name}
                tag={el.tag}
                price={el.price}
                text={el.description}
              />
            );
          })}
    </div>
  );
}

export default PricingCards;
