import { Anchor } from "@Components/Anchor";
import { Button } from "@Components/Button";
import { useLeangue } from "@Hooks/useLeangue";
import PDF from "@Assets/CV-Jhoan.pdf";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
function AboutMe(): JSX.Element {
  const { handleChangeLeague, leangue, t } = useLeangue();
  const css =
    "duration-200 ease-in-out transition-all transform hover:scale-110 hover:text-purple-500 cursor-pointer";
  return (
    <section className="xl:flex flex-col items-center justify-center gap-10 w-[30%] p-5 hidden">
      <div className="flex flex-col gap-2 text-xl items-center w-full text-center">
        <h2 className="text-4xl font-bold">{t("info.name")}</h2>
        <p>{t("info.title")}</p>
      </div>
      <div className="flex gap-3">
        <Anchor
          css={css}
          url="https://github.com/JSV-Lozano"
          icon={<FiGithub size={40} />}
        />
        <Anchor
          css={css}
          url="https://www.linkedin.com/in/jhoan-stiven-v%C3%A1squez-lozano-3212941b3/"
          icon={<FiLinkedin size={40} />}
        />
        <Anchor
          css={css}
          url="mailto:kjsvlozano17104@gmail.com"
          icon={<MdEmail size={40} />}
        />
      </div>
      <Anchor
        css="w-[80%] bg-purple-500 text-center cursor-pointer p-3 rounded-xl font-bold transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-[#ffffff1e]"
        url={PDF}
        text="CV"
      />
      <div className="flex gap-7">
        <Button
          onClick={() => handleChangeLeague("en")}
          css={`text-xl p-3 font-bold transition-all ease-in-out duration-300 ${
            leangue === "en" ? "border-b-2 border-purple-400" : "border-b"
          }`}
          text="en"
        />
        <Button
          onClick={() => handleChangeLeague("es")}
          css={`text-xl p-3 font-bold transition-all ease-in-out duration-300 ${
            leangue === "es" ? "border-b-2 border-purple-400" : "border-b"
          }`}
          text="es"
        />
      </div>
    </section>
  );
}

export { AboutMe };
