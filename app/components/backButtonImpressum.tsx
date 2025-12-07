"use client";

import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

const BackButtonImpressum = () => {
  const router = useRouter();

  return (
    <a className="btn btn-ghost" onClick={() => router.back()}>
      <MdArrowBackIosNew className="w-5 h-5"></MdArrowBackIosNew>
    </a>
  );
};

export default BackButtonImpressum;
