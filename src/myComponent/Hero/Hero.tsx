"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import styles from "@/myComponent/Hero/Hero.module.css"
import Link from "next/link";


export default function Hero() {
  return (
    <div className="mt-3 ">
    <div className={styles.customImage}>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#c7bd33]">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [" Full Stack Web Developer with latest technologies ", "UI/UX Desginer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="h-[2px] w-[15rem] bg-[#077a78]"> </div>
            <p className="mb-8 leading-relaxed text-[#c7bd33]" >
              Think of me as the person who brings websites to life—from looks
              to brains—using smart tools like Next.js and TypeScript.
            </p>
            <div className="flex justify-center">
              <Link href='#Contact'>
              <button className="inline-flex text-[#d6cb30] bg-[#15706fc2] 0 border-0 py-2 px-6 focus:outline-none hover:bg-[#c7bd33] hover:text-black hover:px-8 rounded text-lg duration-500">
                Contact Me
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center ">
            <Image
              className="object-cover object-center rounded-3xl "
              alt="hero"
              height={300}
              width={300}
              src="/assets/frontpic.jpg"
            />
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
