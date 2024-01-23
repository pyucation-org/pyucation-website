"use client";

import Start from "./components/start";
import Reviews from "./components/reviews";
import Vision from "./components/vision";

export default function Home() {
  /**
   * @description:
   * Landing page of the website. Includes branding, vision and user reviews/recommendations
   */

  return (
    <main className="pb-40 h-screen overflow-auto overflow-x-hidden">
      {/*Branding Section with logo */}
      <section className="md:h-full h-fit mb-20">
        <Start />
      </section>

      {/*Vision Section */}
      <section className="xl:h-full h-fit mb-20">
        <Vision />
      </section>

      {/*Customer Reviews */}
      <section className="md:h-full h-fit xl:mt-0 mt-20 mb-20">
        <Reviews />
      </section>
    </main>
  );
}
