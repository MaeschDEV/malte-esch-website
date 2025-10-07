"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const backButtonImpressum = () => {
  const router = useRouter();

  return (
    <a className="btn btn-ghost" onClick={() => router.back()}>
      <MdArrowBackIosNew className="w-5 h-5"></MdArrowBackIosNew>
    </a>
  );
};

export default backButtonImpressum;
