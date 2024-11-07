import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image
              src={"/assets/pic.png"}
              height={100}
              width={100}
              alt={"Image"}
              className="rounded-3xl h-14 w-14"
            />
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Mubashir Portfolio—
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/mubashir-saeed-68401b320/"
              className="text-gray-500"
            >
              <FaLinkedin className="h-10 w-10 hover:text-blue-700" />
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/mubashir.saeed.5891/"
              className="text-gray-500"
            >
              <FaFacebookSquare className="h-10 w-10 hover:text-blue-700" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
