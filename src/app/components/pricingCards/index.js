import React from "react";
import Card from "./card";
import AICard from "./AiCard";
import { pricingsAI, pricingsPython } from "@/app/util/pricingOptions";

function PricingCards({ content = "python" }) {
  return (
    <div className="flex flex-wrap gap-2 w-full lg:justify-between justify-center">
      {content == "python"
        ? pricingsPython.map((el, index) => {
            return (
              <Card
                key={"key-index"}
                name={el.name}
                tag={el.tag}
                price={el.price}
                text={el.description}
                popular={el.popular}
              />
            );
          })
        : pricingsAI.map((el, index) => {
            return (
              <AICard
                key={"key-index"}
                name={el.name}
                tag={el.tag}
                text={el.description}
                popular={el.popular}
              />
            );
          })}
    </div>
  );
}

export default PricingCards;
