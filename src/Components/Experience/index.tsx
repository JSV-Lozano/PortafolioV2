import { useTranslation } from "react-i18next";
function Experience(): JSX.Element {
  const [t] = useTranslation("global");
  return (
    <section className="p-4 h-full w-full flex flex-col items-center gap-5 overflow-auto">
      <p className="text-purple-500 text-4xl">{t("experience.title")}</p>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-purple-700"></div>
          <div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {t("experience.date1")}
            </time>
            <p className="mb-1 text-xl leading-none text-purple-400 dark:text-purple-400 font-bold">
              {t("experience.experience1")}
            </p>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("experience.rollexperience1")}
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {t("experience.desexperience1")}
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-purple-700"></div>
          <div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {t("experience.date2")}
            </time>
            <p className="mb-1 text-xl leading-none text-purple-400 dark:text-purple-400 font-bold">
              {t("experience.experience2")}
            </p>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("experience.rollexperience2")}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {t("experience.desexperience2")}
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-purple-700"></div>
          <div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {t("experience.date3")}
            </time>
            <p className="mb-1 text-xl leading-none text-purple-400 dark:text-purple-400 font-bold">
              {t("experience.experience3")}
            </p>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("experience.rollexperience3")}
          </h3>
        </li>
      </ol>
    </section>
  );
}

export { Experience };
