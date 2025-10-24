import { Metadata } from "next";
import BackButtonImpressum from "../../components/backButtonImpressum";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50">
        <BackButtonImpressum></BackButtonImpressum>
      </div>
      <div className="p-10 pt-16">
        <h1 className="text-4xl font-bold">Personal Website</h1>
      </div>
    </div>
  );
};

export default page;
