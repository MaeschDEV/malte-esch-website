"use client";

import TypeWriter from "typewriter-effect";
import IconButtonsHero from "./iconButtonsHero";

const hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/background.webp)",
      }}
    >
      <div className="hero-overlay bg-black/60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-8xl font-bold">Hey 👋</h1>
          <span className="mb-5 text-5xl font-bold">
            <TypeWriter
              onInit={(typeWriter) => {
                typeWriter
                  .typeString("I am Malte Esch.")
                  .stop() // Stoppt die Engine
                  .callFunction(() => {
                    // Blendet den Cursor über CSS aus
                    const cursor = document.querySelector(
                      ".Typewriter__cursor",
                    ) as HTMLElement;
                    if (cursor) {
                      cursor.style.display = "none";
                    }
                  })
                  .start();
              }}
            />
          </span>
          <span className="mb-5 text-xl">
            <TypeWriter
              onInit={(typeWriter) => {
                typeWriter
                  .pauseFor(3000)
                  .typeString(
                    "Dual student in Business Informatics at SAP and DHBW Mannheim.",
                  )
                  .pauseFor(5000)
                  .deleteAll()
                  .pauseFor(1000)
                  .typeString(
                    "Currently in my first rotation at S/4 HANA Cloud Foundation.",
                  )
                  .pauseFor(5000)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: true, delay: 50, deleteSpeed: 30 }}
            />
          </span>
          <div className="divider divider-primary"></div>
          <IconButtonsHero></IconButtonsHero>
        </div>
      </div>
    </div>
  );
};

export default hero;
