import React from "react";
import ReviewCarousel from "./carousel";

const CARDS = 10;

const Card = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

function Carousel() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ReviewCarousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Card
            key={"key- " + i}
            title={"Card " + (i + 1)}
            content="Lorem upsum dolor sit amet, consectetur adipiscing elit, sed do ei"
          />
        ))}
      </ReviewCarousel>
    </div>
  );
}
export default Carousel;
