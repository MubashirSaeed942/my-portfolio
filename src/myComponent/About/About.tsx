import Image from "next/image";
import React from "react";
import styles from "@/myComponent/About/About.module.css";

export default function About() {
  return (
    <div id="about">
    <div className={styles.aboutBg}>
      <div className="h-[4px] w-full bg-[#1a3c69]"> </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded lg:ml-24 "
              alt="hero"
              src="/assets/frontpic.jpg"
              height={300}
              width={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#e0d040]">
              About Me
            </h1>
            <div className="bg-[#f8dd43] h-[2px] w-[160px] mb-3"></div>
            <p className="mb-8 leading-relaxed text-[#f8dd43] text-lg">
              👋 Hi! I’m Mubashir Saeed, a dedicated web developer currently
              expanding my skills through an AI agentic program. While I’m just
              beginning this journey and still learning the fundamentals, I’m
              actively working with Next.js and TypeScript to create dynamic,
              responsive web applications. My passion for technology drives me
              to explore new fields and continuously improve my craft.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#15706fc2] border-0 py-2 px-6 focus:outline-none hover:bg-[#e0d040] hover:text-black duration-500 hover:px-8  rounded text-lg">
                View my CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
