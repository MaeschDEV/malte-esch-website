"use client";
import TypeWriter from "typewriter-effect";

interface Props {
  text1: string;
  text2: string;
}

const loopingTypingEffect = ({ text1, text2 }: Props) => {
  return (
    <span className="mb-5 text-xl">
      <TypeWriter
        onInit={(typeWriter) => {
          typeWriter
            .typeString(text1)
            .pauseFor(5000)
            .deleteAll()
            .pauseFor(1000)
            .typeString(text2)
            .pauseFor(5000)
            .deleteAll()
            .start();
        }}
        options={{ loop: true, delay: 35 }}
      />
    </span>
  );
};

export default loopingTypingEffect;
