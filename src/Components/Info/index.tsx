import { usePortafolioContext } from "@Context/PortafolioContext";
import { Skills } from "@Components/Skills";
import { AboutMe2 } from "@Components/AboutMe/AboutMe2";
import { Experience } from "@Components/Experience";
import { Projects } from "@Components/Projects";

function Info(): JSX.Element {
  const { showInfo } = usePortafolioContext();
  return (
    <div className="rounded-xl w-full h-full bg-[#2020209d] p-5">
      {showInfo === "About" && <AboutMe2 />}
      {showInfo === "Skills" && <Skills />}
      {showInfo === "Experience" && <Experience />}
      {showInfo === "Projects" && <Projects />}
    </div>
  );
}

export { Info };
