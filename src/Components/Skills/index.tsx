import { useTranslation } from "react-i18next";

type skills = {
  name: string;
  img: string;
};
const mySkills: skills[] = [
  { name: "HTML", img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  {
    name: "JavaScript",
    img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  },
  {
    name: "TypeScript",
    img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Next Js", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "Git", img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
  {
    name: "Node",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Tailwind-CSS",
    img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },

  {
    name: "Boostrap",
    img: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg",
  },
];
function Skills(): JSX.Element {
  const [t] = useTranslation("global");
  return (
    <section className="w-full h-full p-4 flex flex-col gap-5 items-center overflow-auto">
      <h3 className="text-purple-500 text-4xl">{t("skills.title")}</h3>
      <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-3 items-center justify-items-center text-center">
        {mySkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col justify-center items-center gap-3 text-xl font-semibold"
          >
            <img
              className="w-[40%]"
              src={skill.img}
              alt={`Logo ${skill.name}`}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Skills };
