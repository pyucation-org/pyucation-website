import React from "react";

function ReviewCard({ reviewText, name, location }) {
  return (
    <div className="review-card">
      <p className="text-white font-light italic text-sm leading-relaxed tracking-wider">
        Perfekt! Marc schafft durch seine ruhige, sympathische und kompetente
        Art eine gemütliche Lernatmosphäre in der man sich wohlfühlt. Er
        erklärte mir alles sehr ausführlich und konnte mir bei jeder Frage
        weiterhelfen. Ich kann ihn nur weiterempfehlen. :)
      </p>
      <p className="mt-4 text-end text-sm font-medium text-zinc-300">
        - Andreas, Stuttgart
      </p>
    </div>
  );
}

export default ReviewCard;
