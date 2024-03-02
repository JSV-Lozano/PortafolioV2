import { AboutMe } from "@Components/AboutMe";
import { Info } from "@Components/Info";

function Card(): JSX.Element {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between gap-4 w-[90%] xl:w-[70%] h-[90%] sm:h-[80%] rounded-3xl bg-[#2e2e2e] text-white p-5 z-10 shadow-xl shadow-[#1f1f1f]">
      <AboutMe />
      <Info />
    </div>
  );
}

export { Card };
