import IconButtonsHero from "./iconButtonsHero";
import LoopingTypingEffect from "./loopingTypingEffect";

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
          <h2 className="mb-5 text-5xl font-bold">I am Malte Esch.</h2>
          <LoopingTypingEffect
            text1="Dual student in Business Informatics at SAP and DHBW Mannheim."
            text2="Currently in my first rotation at S/4 HANA Cloud Foundation."
          ></LoopingTypingEffect>
          <div className="divider divider-primary"></div>
          <IconButtonsHero></IconButtonsHero>
        </div>
      </div>
    </div>
  );
};

export default hero;
