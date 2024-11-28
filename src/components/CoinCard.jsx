"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

export default function CoinComponent(){
  return(
    <div className="flex flex-wrap justify-around">
      <CoinCard title={"Basic"} desc={"Coin"} image={"/coin05.jpeg"}/>
      <CoinCard title={"Basic"} desc={"Coin"} image={"/coin10.jpeg"}/>
      <CoinCard title={"Basic"} desc={"Coin"} image={"/coin50.jpeg"}/>
  </div>
  )
}


export function CoinCard({title, image, desc}) {
  return (
    (<CardContainer className="inter-var">
      <CardBody
        className="relative bg-white group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
         {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-full group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
      </CardBody>
    </CardContainer>)
  );
}