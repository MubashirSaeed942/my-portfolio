import React from "react";
import { LuCheckCircle } from "react-icons/lu";
import styles from "@/myComponent/Skills/Skills.module.css"

export default function Skills() {
  return (
    <div id="skills">
    <div className= {styles.skillsBg}>
        <div className="h-[4px] w-full bg-[#1a3c69]"> </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#e0d040]">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[3rem]">
            {/* styles */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#e0d040] text-white flex-shrink-0">
                    <LuCheckCircle className="font-bold text-xl text-black" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="h-1 w-full bg-gray-400 relative rounded-2xl">
                    <div className="h-1 bg-[#15706fc2] absolute w-[90%]"></div>
                </div>
                <p className="text-[#15706fc2] text-right mt-2 font-bold">90%</p>
              </div>
            </div>
            {/* styles */}
             <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#e0d040]  text-white flex-shrink-0">
                    <LuCheckCircle className="font-bold text-xl text-black" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="h-1 w-full bg-gray-400 relative rounded-2xl">
                    <div className="h-1 bg-[#15706fc2] absolute w-[70%]"></div>
                </div>
                <p className="text-[#15706fc2] text-right mt-2 font-bold">70%</p>
              </div>
            </div>
            {/* styles */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#e0d040] text-white flex-shrink-0">
                    <LuCheckCircle className="font-bold text-xl text-black" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JavaScript/TypeScript
                  </h2>
                </div>
                <div className="h-1 w-full bg-gray-400 relative rounded-2xl">
                    <div className="h-1 bg-[#15706fc2] absolute w-[60%]"></div>
                </div>
                <p className="text-[#15706fc2] text-right mt-2 font-bold">60%</p>
              </div>
            </div>
            {/* styles */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#e0d040] text-white flex-shrink-0">
                    <LuCheckCircle className="font-bold text-xl text-black" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Next JS
                  </h2>
                </div>
                <div className="h-1 w-full bg-gray-400 relative rounded-2xl">
                    <div className="h-1 bg-[#15706fc2] absolute w-[80%]"></div>
                </div>
                <p className="text-[#15706fc2] text-right mt-2 font-bold">80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
