import { CardProject } from "@Components/CardProject";
import { useTranslation } from "react-i18next";
type Technology = {
  name: string;
  css: string;
};

type Project = {
  nameProject: string;
  descrip: string;
  tech: Technology[];
  link?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    nameProject: "WeatherAPP",
    descrip: "project.weatherappDescription",
    tech: [
      {
        name: "React",
        css: "bg-blue-500",
      },
      {
        name: "TailwindCss",
        css: "bg-cyan-500",
      },
    ],
    link: "https://github-search-users-pied.vercel.app/",
    repo: "https://github.com/JSV-Lozano/WeatherAPP",
  },
  {
    nameProject: "GitHub-SearchUsers",
    descrip: "project.gitHubsearchusersDescription",
    tech: [
      {
        name: "React",
        css: "bg-blue-500",
      },
      {
        name: "TailwindCss",
        css: "bg-cyan-500",
      },
    ],
    link: "https://weather-app-nu-one-85.vercel.app/",
    repo: "https://github.com/JSV-Lozano/GitHub-SearchUsers",
  },
  {
    nameProject: "Next.JS-Dashboard ",
    descrip: "project.nextjSdashboardDescription",
    tech: [
      {
        name: "Next.JS",
        css: "bg-black",
      },
      {
        name: "React",
        css: "bg-blue-500",
      },
      {
        name: "TailwindCss",
        css: "bg-cyan-500",
      },
    ],
    link: "",
    repo: "https://github.com/JSV-Lozano/Next.JS-Dashboard",
  },
  {
    nameProject: "Landing-page",
    descrip: "project.landingpageDescription",
    tech: [
      {
        name: "Html",
        css: "bg-orange-500",
      },
      {
        name: "Css",
        css: "bg-blue-500",
      },
    ],
    link: "",
    repo: "https://github.com/JSV-Lozano/Landing-page",
  },
];
function Projects(): JSX.Element {
  const [t] = useTranslation("global");
  return (
    <section className="w-full h-full p-4 flex flex-col items-center gap-5 overflow-auto">
      <h3 className="text-purple-500 text-4xl">{t("project.title")}</h3>
      <div className="w-full h-full flex flex-col sm:grid xl:grid-cols-2 gap-3 xl:justify-items-center">
        {projects.map((project) => (
          <CardProject
            key={project.nameProject}
            descrip={t(project.descrip)}
            nameProject={project.nameProject}
            tech={project.tech}
            link={project.link}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
}

export { Projects };
