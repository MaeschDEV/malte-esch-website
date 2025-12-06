import Link from "next/link";
import React from "react";
import ProjectCard from "./projectCard";

const projects = () => {
  return (
    <div className="p-10">
      <h1 className="mb-5 text-2xl font-semibold text-left">Projects</h1>
      <ProjectCard></ProjectCard>
    </div>
  );
};

export default projects;
