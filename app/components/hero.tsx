import React from "react";

const hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/PXL_20250706_132924764.jpg)",
      }}
    >
      <div className="hero-overlay bg-black/60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-8xl font-bold">Hey 👋</h1>
          <p className="mb-5 text-5xl font-bold">I am Malte Esch.</p>
          <p className="mb-5 text-2xl">
            Dual student in Business Informatics at SAP and DHBW Mannheim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default hero;
