import React, { useState } from "react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button
          className="nav left gap-10"
          onClick={() => setActive((i) => i - 1)}
        >
          <FaArrowLeft />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container transition-all"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};

function ReviewCarousel() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Card
            key={"key- " + i}
            title={"Card " + (i + 1)}
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
          />
        ))}
      </Carousel>
    </div>
  );
}
export default ReviewCarousel;
