import PDF from "@Assets/CV-Jhoan.pdf";
import { Anchor } from "@Components/Anchor";
import { Button } from "@Components/Button";
import { useLeangue } from "@Hooks/useLeangue";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
function AboutMe2(): JSX.Element {
  const { handleChangeLeague, leangue } = useLeangue();
  return (
    <section className="flex gap-3 flex-col items-center justify-center w-full h-full">
      <h2 className="typewriter text-3xl sm:text-7xl font-semibold">
        Jhoan Vásquez
      </h2>
      <p className="typewriter text-xl sm:text-4xl opacity-80 mb-5">
        Front-End Developer
      </p>
      <div className="xl:hidden w-full flex flex-col gap-5 items-center">
        <div className="flex justify-center w-full h-full gap-5">
          <Anchor
            css="shadow-lg duration-200 ease-in-out transition-all transform  hover:scale-110 hover:text-purple-400"
            url="https://github.com/JSV-Lozano"
            icon={<FiGithub size={50} />}
          />
          <Anchor
            css="shadow-lg duration-200 ease-in-out transition-all transform  hover:scale-110 hover:text-purple-400"
            url="https://www.linkedin.com/in/jhoan-stiven-v%C3%A1squez-lozano-3212941b3/"
            icon={<FiLinkedin size={50} />}
          />
          <Anchor
            css="shadow-lg duration-200 ease-in-out transition-all transform  hover:scale-110 hover:text-purple-400"
            url="mailto:kjsvlozano17104@gmail.com"
            icon={<MdEmail size={50} />}
          />
        </div>
        <Anchor
          url={PDF}
          text="CV"
          css="w-[80%] text-center text-xl my-auto bg-purple-400 p-3 rounded-xl font-bold transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-[#ffffff1e]"
        />
        <div className="flex gap-7">
          <Button
            onClick={() => handleChangeLeague("en")}
            css={`text-3xl p-3 font-bold transition-all ease-in-out duration-300 ${
              leangue === "en" ? "border-b-2 border-purple-400" : "border-b"
            }`}
            text="en"
          />
          <Button
            onClick={() => handleChangeLeague("es")}
            css={`text-3xl p-3 font-bold transition-all ease-in-out duration-300 ${
              leangue === "es" ? "border-b-2 border-purple-400" : "border-b"
            }`}
            text="es"
          />
        </div>
      </div>
    </section>
  );
}

export { AboutMe2 };
