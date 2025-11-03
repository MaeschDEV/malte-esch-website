"use client";

import React from "react";
import { MdOpenInNew } from "react-icons/md";
import IconButton from "./iconButton";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const techStack = ({ icon, title, description, link }: Props) => {
  return (
    <li className="list-row">
      <div>{icon}</div>
      <div>
        <div>{title}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {description}
        </div>
      </div>
      <IconButton
        onClick={() => window.open(link, "_blank")}
        color="text-base-content"
      >
        <MdOpenInNew className="w-5 h-5"></MdOpenInNew>
      </IconButton>
    </li>
  );
};

export default techStack;
