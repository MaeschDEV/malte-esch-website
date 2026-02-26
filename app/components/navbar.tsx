import Link from "next/link";
import { MdMenu } from "react-icons/md";

const navbar = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-sm fixed top-0 z-10">
          {/* Name links */}
          <div className="navbar-start">
            <Link href="#" className="btn btn-ghost text-xl">
              Malte Esch
            </Link>
          </div>
          {/* Mittelteil, hidden auf kleinem Bildschirm */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#education">Education</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {/* Button rechts für den Drawer, hidden auf großem Bildschirm */}
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <MdMenu className="w-5 h-5"></MdMenu>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Drawer */}
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content */}
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>

          <li>
            <Link href="#education">Education</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
