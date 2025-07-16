"use client";

import { MainContentProps, SectionKey } from "@/types/types";
import About from "./About";
import Portfolio from "./Portfolio";
import Work from "./Work";

const COMPONENTS: Record<SectionKey, JSX.Element> = {
  about: <About />,
  work: <Work />,
  portfolio: <Portfolio />,
};

export default function Main({ active }: MainContentProps) {
  return (
    <div className="flex-1 flex flex-col max-w-[960px] mx-auto justify-center">
      {COMPONENTS[active]}
    </div>
  );
}
