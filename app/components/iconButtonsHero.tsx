"use client";
import IconButton from "./iconButton";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const iconButtonsHero = () => {
  return (
    <div>
      <IconButton
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/malte-esch-154964323/",
            "_blank"
          )
        }
      >
        <FaLinkedinIn className="w-5 h-5"></FaLinkedinIn>
      </IconButton>
      <IconButton
        onClick={() => window.open("https://github.com/MaeschDEV", "_blank")}
      >
        <FaGithub className="w-5 h-5"></FaGithub>
      </IconButton>
      <IconButton
        onClick={() =>
          window.open("https://instagram.com/maesch1508", "_blank")
        }
      >
        <FaInstagram className="w-5 h-5"></FaInstagram>
      </IconButton>
    </div>
  );
};

export default iconButtonsHero;
