"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50 sticky top-0">
      <header className="text-gray-700 bg-gray-50 body-font shadow-2xl relative">
        
          {/* Hamburger Icon - Only on Small Screens */}
          <div className="flex justify-end w-full md:hidden mt-[3rem] absolute -mx-6">
            <button
              className="p-2 rounded-lg bg-purple-500 justify-end text-white"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>

        <div className="container mx-auto flex flex-wrap pt-1 pb-1 items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <Image
              src={"/assets/logo.png"}
              height={150}
              width={150}
              alt={"logo"}
              className=""
            />
          </Link>

          {/* Navbar Links */}
          <nav
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex md:ml-auto items-center text-base justify-center w-full`}
          >
            <Link
              href="/"
              className="mr-5 hover:text-blue-500 bg-gray-100 border-2 pr-3 pl-3 pt-1 pb-1 rounded-xl hover:opacity-80"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="mr-5 hover:text-blue-500 bg-gray-100 border-2 p-1 rounded-xl hover:opacity-80"
              onClick={toggleMenu}
            >
              About Me
            </Link>
            <Link
              href="#Contact"
              className="mr-5 hover:text-blue-500 bg-gray-100 border-2 p-1 rounded-xl hover:opacity-80"
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
            <Link
              href="#myprojects"
              className="mr-5 hover:text-blue-500 bg-gray-100 border-2 p-1 rounded-xl hover:opacity-80"
              onClick={toggleMenu}
            >
              My Projects
            </Link>
            <Link
              href="#skills"
              className="mr-5 hover:text-blue-500 bg-gray-100 border-2 p-1 rounded-xl hover:opacity-80"
              onClick={toggleMenu}
            >
              My Skills
            </Link>
          </nav>

          {/* CV Download Button - Right Aligned and Centered with Navbar Links */}
          <button className="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:opacity-80 rounded text-gray-700 ml-auto -mt-8">
            Download MyCV
            <Image
              src={"/assets/download.png"}
              height={20}
              width={20}
              alt={"logo"}
              className="ml-2"
            />
          </button>
        </div>
      </header>
    </div>
  );
}
