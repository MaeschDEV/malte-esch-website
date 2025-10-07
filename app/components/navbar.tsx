import Link from "next/link";
import React from "react";
import { MdMenu } from "react-icons/md";

const navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Malte Esch</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <details>
              <summary>Resume</summary>
              <ul className="p-2">
                <li>
                  <Link href="#education">Education</Link>
                </li>
                <li>
                  <Link href="#work">Work</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdMenu className="w-5 h-5"></MdMenu>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#resume">Resume</Link>
              <ul className="p-2">
                <li>
                  <Link href="#education">Education</Link>
                </li>
                <li>
                  <Link href="#work">Work</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>{" "}
      </div>
    </div>
  );
};

export default navbar;
