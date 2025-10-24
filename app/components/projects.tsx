import Link from "next/link";
import React from "react";

const projects = () => {
  return (
    <div className="p-16">
      <h1 className="mb-5 text-2xl font-semibold text-left">Projects</h1>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src="/website_preview.webp" alt="Website Preview" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Website</h2>
          <p>
            A small personal website to showcase my resume and projects. It is
            the website you are currently visiting!
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link href="/projects/website">See full project site</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
