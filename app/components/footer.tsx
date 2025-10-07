import IconButtonsHero from "./iconButtonsHero";
import Link from "next/link";
import React from "react";

const footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved.</p>
        <button className="btn btn-link text-neutral-content">
          <Link href="/impressum">Impressum</Link>
        </button>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <IconButtonsHero></IconButtonsHero>
      </nav>
    </footer>
  );
};

export default footer;
