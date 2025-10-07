import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <Image
              src="/avatar.webp"
              alt="Avatar Image"
              width={720}
              height={720}
            />
          </div>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title text-2xl">About Me</h6>
        <p>
          Hey! I&apos;m Malte Esch, a dual student in Business Informatics at
          SAP.
        </p>
        <p>I&apos;m 18 and love gaming, coding, and playing table tennis 🏓.</p>
        <p>
          Right now, I&apos;m studying for my Bachelor of Science at DHBW
          Mannheim.
        </p>
      </nav>
      <nav>
        <h6 className="footer-title text-2xl">Contact</h6>
        <p>Malte Esch</p>
        <p>Mannheim, Germany 📍</p>
        <p>malte-esch.de</p>
      </nav>
    </footer>
  );
};

export default about;
