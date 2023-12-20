import React from "react";

function ReviewCard({ reviewText, name, location }) {
  /**
   * @param reviewText: text of the review
   * @param name: name of the customer
   * @param location: Where the customer is from
   */

  function getRandomShadeColor(baseColor) {
    /**
     * @param baseColor: base color to generate random shades from
     */
    const shade = Math.floor(Math.random() * 41) - 20; // Generate a random shade value between -10 and 10
    const hex = parseInt(baseColor.substring(1), 16);
    const r = ((hex >> 16) & 255) + shade;
    const g = ((hex >> 8) & 255) + shade;
    const b = (hex & 255) + shade;

    const adjustedR = Math.min(255, Math.max(0, r));
    const adjustedG = Math.min(255, Math.max(0, g));
    const adjustedB = Math.min(255, Math.max(0, b));

    return `rgb(${adjustedR},${adjustedG},${adjustedB})`;
  }

  return (
    <div className="review-card" style={{ backgroundColor: getRandomShadeColor("#032530") }}>
      <p className="text-white font-light italic text-sm leading-relaxed tracking-wider">
        {reviewText}
      </p>
      <p className="mt-4 text-end text-sm font-medium text-zinc-300">
        - {name}, {location}
      </p>
    </div>
  );
}

export default ReviewCard;
