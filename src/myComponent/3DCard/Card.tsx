"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export  default function MyCardDemo() {
  return (
    <CardContainer className="inter-var w-full max-w-[400px] h-auto"
>
      <CardBody className="bg-gray-300 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-serif text-[#077a78] dark:text-white"
        >
          My Blog Project
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/assets/first_blog.png"
            height={1000}
            width={1000}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://ssr-api-s.vercel.app/"
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-[#077a78] dark:text-white"
          >
            click to full view →
          </CardItem>
        
        </div>
      </CardBody>
    </CardContainer>
  );
}
