import BackButtonImpressum from "@/app/components/backButtonImpressum";
import TechStack from "@/app/components/techStack";
import PhonePhoto from "@/app/components/phonePhoto";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaFlutter } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50">
        <BackButtonImpressum></BackButtonImpressum>
      </div>
      <div className="p-10 pt-16">
        <h1 className="mb-5 text-4xl font-bold">Zentime</h1>
        <h2 className="mb-2 text-xl font-semibold">Description</h2>
        <p>
          A small app for tracking working hours. Since my employer doesn't
          track my working hours, I developed this app. The app tracks working
          hours using check-in/out buttons. It also generates a daily and weekly
          overview. Currently, the app is very limited, but I plan to expand its
          functionality.
        </p>
        <div className="divider divider-primary"></div>
        <h2 className="mb-2 text-xl font-semibold">Screenshots</h2>
        <div className="flex justify-center gap-8 md:gap-32">
          <PhonePhoto
            srcLight="/overview_white.png"
            srcDark="/overview_dark.png"
            alt="Zentime Overview Screenshot"
          />
          <div className="hidden sm:block">
            <PhonePhoto
              srcLight="/today_white.png"
              srcDark="/today_dark.png"
              alt="Zentime Today Screenshot"
            />
          </div>
        </div>
        <div className="divider divider-primary"></div>
        <h2 className="mt-5 mb-2 text-xl font-semibold">Technical</h2>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            These tools were used in the project
          </li>

          <TechStack
            icon={<FaFlutter className="size-10 rounded-box" />}
            title="Flutter"
            description="A UI-Framework for building apps for mobile, web and desktop"
            link="https://flutter.dev/"
          ></TechStack>
        </ul>
        <button className="mt-5 btn">
          <FaGithub className="w-5 h-5"></FaGithub>
          <Link href="https://github.com/MaeschDEV/zentime" target="_blank">
            View the code on GitHub
          </Link>
        </button>
      </div>
    </div>
  );
};

export default page;
