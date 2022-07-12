import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="font-nunito st-container w-full h-[5em] grid grid-cols-3 md:grid-cols-[200px_1fr_200px] items-center justify-between border-b border-b-gray-100 shadow-sm">
      <button className="md:hidden md:pointer-events-none pointer-events-auto block  max-w-max">
        MENU
      </button>
      <Link href="/">
        <span className="uppercase font-semibold  md:font-bold text-center md:text-left ">
          Company.
        </span>
      </Link>
      <ul className="items-center flex justify-center uppercase md-auto md:gap-12 items-center hidden pointer-events-none  md:flex md:pointer-events-auto ">
        <li>
          <Link href="/">
            <span className="cursor-pointer  link-underline link-underline-black ">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className="cursor-pointer link-underline link-underline-black">
              Contact
            </span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className="cursor-pointer link-underline link-underline-black">
              About
            </span>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <span className="  cursor-pointer text-black  ml-auto ">Follow us</span>
      </Link>
    </header>
  );
}
