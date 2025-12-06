import Link from "next/link";
import React from "react";

const projectCard = () => {
  return (
    <div className="card bg-neutral text-neutral-content lg:w-96 shadow-sm">
      <figure>
        <img src="/website_preview.webp" alt="Website Preview Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Website</h2>
        <p>
          A small personal website to showcase my resume and projects. It is the
          website you are currently visiting!
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link href="/projects/website">See more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
