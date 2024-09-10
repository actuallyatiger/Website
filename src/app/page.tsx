import { Metadata } from "next";
import Image from "next/image";

import pfp from "@/images/pfp.webp";
import Tiles from "@/components/Tiles";

import tilesets from "./data";

export const metadata: Metadata = {
  title: `Links | Tiger Taylor ${
    process.env.NODE_ENV == "development" ? " (Dev)" : ""
  }`,
  description: "Links to my social media and accounts",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center grow sm:min-h-0 max-sm:bg-white max-sm:bg-opacity-20 max-sm:backdrop-blur-lg">
        <div className="sm:h-auto w-full max-w-md p-8 sm:bg-white sm:bg-opacity-20 sm:backdrop-blur-lg sm:rounded-3xl sm:shadow-xl flex flex-col items-center">
          <div className="flex flex-col items-center mb-4 pb-4 border-b border-white border-opacity-60">
            <Image
              src={pfp}
              alt="Profile"
              width={1024}
              height={1024}
              className="w-56 h-56 rounded-full shadow-lg mb-6"
            />
            <h1 className="text-5xl font-bold text-white mb-2">Tiger Taylor</h1>
          </div>
          <div className="flex flex-col items-center gap-8">
            {tilesets.map((tileset) => (
              <Tiles key={tileset.title} tileset={tileset} />
            ))}
          </div>
        </div>
      </main>
      <footer className="flex justify-center items-center h-10 max-sm:bg-white max-sm:bg-opacity-20 max-sm:backdrop-blur-lg">
        &copy; Tiger Taylor 2024
      </footer>
    </>
  );
}
