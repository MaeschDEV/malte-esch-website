"use client";

import BackButtonImpressum from "../../components/backButtonImpressum";
import IconButton from "@/app/components/iconButton";
import TechStack from "@/app/components/techStack";
import { VscVscode } from "react-icons/vsc";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiEslint } from "react-icons/si";
import { SiPrettier } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";

const page = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50">
        <BackButtonImpressum></BackButtonImpressum>
      </div>
      <div className="p-10 pt-16">
        <h1 className="mb-5 text-4xl font-bold">Personal Website</h1>
        <h2 className="mb-2 text-xl font-semibold">Description</h2>
        <p>
          A small personal website to showcase my resume, education and
          projects. It is a hobby project developed by me.
        </p>
        <div className="divider divider-primary"></div>
        <h2 className="mt-5 mb-2 text-xl font-semibold">Technical</h2>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            These tools were used in the project
          </li>

          <TechStack
            icon={VscVscode}
            title="Visual Studio Code"
            description="An IDE for coding by Microsoft."
            link="https://code.visualstudio.com/"
          ></TechStack>
          <TechStack
            icon={RiNextjsFill}
            title="Next.js"
            description="A React framework for server-side rendering and static websites."
            link="https://nextjs.org/"
          ></TechStack>
          <TechStack
            icon={SiTypescript}
            title="TypeScript"
            description="Adds additional syntax to JavaScript"
            link="https://www.typescriptlang.org/"
          ></TechStack>
          <TechStack
            icon={RiTailwindCssFill}
            title="Tailwindcss"
            description="CSS framework for consistent and responsive design."
            link="https://tailwindcss.com/"
          ></TechStack>
          <TechStack
            icon={IoLogoVercel}
            title="Vercel"
            description="Hosting platform for automated deployments directly from GitHub."
            link="https://vercel.com/"
          ></TechStack>
          <TechStack
            icon={SiEslint}
            title="ESLint"
            description="Handles error detection for JavaScript and TypeScript."
            link="https://eslint.org/"
          ></TechStack>
          <TechStack
            icon={SiPrettier}
            title="Prettier"
            description="Code formatter for Visual Studio Code."
            link="https://prettier.io/"
          ></TechStack>
        </ul>
        <button className="mt-5 btn">
          <FaGithub className="w-5 h-5"></FaGithub>
          <Link
            href="https://github.com/MaeschDEV/malte-esch-website"
            target="_blank"
          >
            View the code on GitHub
          </Link>
        </button>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Malte Esch - Projects: Website",
  description: "An overview over my website project",
  openGraph: {
    title: "Malte Esch - Projects: Website",
    description: "An overview over my website project",
    url: "https://malte-esch.de/projects/website",
    siteName: "Malte Esch",
    images: [
      {
        url: "/avatar.webp",
        width: 720,
        height: 720,
        alt: "Malte Esch",
      },
      {
        url: "/background.webp",
        width: 2560,
        height: 1928,
        alt: "Background",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default page;
