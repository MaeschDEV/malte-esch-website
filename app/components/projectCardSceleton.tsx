import React from "react";

const projectCardSceleton = () => {
  return (
    <div className="card bg-neutral text-neutral-content lg:w-96 shadow-sm">
      <figure className="w-full aspect-video bg-base-200">
        <div className="skeleton w-full h-full"></div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">More added soon</h2>
        <p>
          I'm currently working on some projects, that I will soon add to this
          overview.
        </p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default projectCardSceleton;
