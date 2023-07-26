import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-100 h-[100vh] px-32 pt-8 bg-white">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
