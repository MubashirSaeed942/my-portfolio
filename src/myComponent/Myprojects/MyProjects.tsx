
import React from "react";
import MyCardDemo from "../3DCard/Card";
import MyCardDemo2 from "../3DCard/Card2";
import MyCardDemo3 from "../3DCard/Card3";
import styles from "@/myComponent/Myprojects/Myproject.module.css";

export default function MyProjects() {
  return (
    <div id="myprojects">
    <div className={styles.projectBg}>
      <div className="h-[4px] w-full bg-[#1a3c69]"> </div>
      {/* <h1 className="flex justify-center mt-4 text-4xl font-mono text-gray-200">My Projects</h1> */}

      <div className="flex flex-wrap justify-center p-4">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <MyCardDemo />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <MyCardDemo2 />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <MyCardDemo3 />
        </div>
      </div>
    </div>
    </div>
  );
}
