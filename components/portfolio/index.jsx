"use client";
import { data } from "../../data/data.js";
import Image from "next/image";
import { PiArrowSquareUpRightLight } from "react-icons/pi";
import Projects from "./Projects.jsx";

export default function Portfolio() {
  return (
    <div className="mx-auto p-2 sm:p-3 md:p-4 space-y-4 w-full h-full ">
      <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800 dark:text-white">
        Side Fun Projects
      </h1>
      <div className="flex flex-col space-y-3 mb-2">
        {data.map((el) => (
          <div
            key={el.id}
            className="border-l-4 border-slate-400 bg-slate-100 p-2 text-slate-800 dark:bg-slate-700 dark:border-slate-500  dark:text-slate-100"
          >
            <h2 className="text-lg md:text-xl font-bold">{el.title}</h2>
            <p className="text-md md:text-lg ">{el.description.intro}</p>
            {/* <div className="flex flex-wrap items-center space-x-2 space-y-3">
              {el.images.map((img) => (
                <Image
                  src={img.url}
                  alt={img.id}
                  key={img.id}
                  className="object-cover h-[40px] w-[60px] rounded-sm cursor-pointer"
                  width={0}
                  height={0}
                />
              ))}
            </div> */}
            <Projects images={el.images}/>
            <div className="flex text-xl md:text-2xl justify-end text-green-500">
              <PiArrowSquareUpRightLight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
