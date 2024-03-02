import { Anchor } from "@Components/Anchor";
import { FiGithub } from "react-icons/fi";
import { BsBrowserChrome } from "react-icons/bs";

type Technology = {
  name: string;
  css: string;
};

type cardProjectsProps = {
  nameProject: string;
  descrip: string;
  tech: Technology[];
  link?: string;
  repo?: string;
};
function CardProject({
  descrip,
  link,
  nameProject,
  tech,
  repo,
}: cardProjectsProps): JSX.Element {
  const css =
    "text-2xl duration-200 ease-in-out transition-all transform hover:scale-110 hover:text-purple-500 cursor-pointer";
  return (
    <article className="bg-[#2e2e2e] p-4  xl:w-[20rem] rounded-xl flex flex-col gap-5 transition-all ease-in-out duration-300 hover:shadow-xl hover:shadow-[#a46dfd33]">
      <h3 className="text-purple-400 text-2xl text-center">{nameProject}</h3>
      <p>{descrip}</p>
      <div className="flex flex-col gap-4 my-auto h-full">
        <div className="flex flex-wrap gap-3">
          {tech?.map((tech) => (
            <p
              className="flex items-center gap-2"
              key={tech.name}
            >
              <div className={`w-2 h-2 ${tech.css} rounded-full`}></div>
              {tech.name}
            </p>
          ))}
        </div>
        <div className="flex gap-5 justify-end my-auto">
          <Anchor
            url={repo}
            css={css}
            icon={<FiGithub />}
          />
          {link && (
            <Anchor
              url={link}
              css={css}
              icon={<BsBrowserChrome />}
            />
          )}
        </div>
      </div>
    </article>
  );
}

export { CardProject };
