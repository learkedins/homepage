import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="w-100 flex flex-row items-center justify-between">
        <h1 className="text-black text-2xl font-semibold cursor-pointer">
          Clark
        </h1>
        <div className="flex flex-row">
          <Link href="#" className="text-black text-2xl px-2">
            Blog
          </Link>

          <Link href="#" className="text-black text-2xl px-2">
            Works
          </Link>

          <Link href="#" className="text-black text-2xl px-2">
            Social
          </Link>
        </div>
      </div>
    </>
  );
}
