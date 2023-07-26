import React from "react";
import Link from "next/link";
import Circle from "./Circle";

export default function Hero() {
  return (
    <>
      <div className="w-[100%] h-[100%] flex flex-row">
        <div className="w-[60%] h-[90%] flex flex-col items-start justify-center ">
          <h1 className="text-black text-3xl">Welcome!</h1>
          <h1 className="text-[#354853] font-bold text-5xl pb-5">
            Hi! I'm Clark Steven
            <br />
            Software Programmer
          </h1>
          <div className="flex flex-row">
            <div className="p-2 mr-3 bg-[#354853] rounded-lg text-2xl">
              <Link href="#">About me</Link>
            </div>
            <div className="p-2 bg-[#354853] rounded-lg text-2xl">
              <Link href="#">My Works</Link>
            </div>
          </div>
        </div>
        <div className=" w-[40%] h-[90%]">
          <Circle />
        </div>
      </div>
    </>
  );
}
