"use client";
import { data } from "../../data/data.js";
import { PiArrowSquareUpRightLight } from "react-icons/pi";
import Title from "../heading/index.jsx";

export default function Portfolio() {
  return (
    <div className="flex flex-col justify-center min-h-screen mx-auto px-2 md:px-4 space-y-4 text-muted">
      <Title title="Side Fun Projects ..." />
      <div className="flex flex-col space-y-3 mb-2">
        {data.map((el) => (
          <div key={el.id} className="p-2 md:p-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-md md:text-lg">{el.title}</p>
              <div className="text-xl text-dark dark:text-light">
                <PiArrowSquareUpRightLight />
              </div>
            </div>
            <p className="text-md md:text-lg">{el.description.intro}</p>
            <div className="flex flex-wrap items-center justify-start">
              {el.description.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-muted text-sm border rounded-sm p-[2px] mt-1 mr-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
