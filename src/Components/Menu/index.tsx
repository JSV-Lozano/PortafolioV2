import { Button } from "@Components/Button";
import { usePortafolioContext } from "@Context/PortafolioContext";
import { FaHouseUser, FaBuilding } from "react-icons/fa";
import { FaUser, FaSuitcase } from "react-icons/fa6";
function Menu(): JSX.Element {
  const { handleShowInfo } = usePortafolioContext();
  const css =
    "flex justify-center hover:text-purple-500 transition-all ease-in-out duration-300";
  return (
    <div className="xl:h-[30%] w-[75%] sm:w-[40%] xl:w-[3%] flex xl:flex-col gap-8 justify-center mt-2 xl:mt-0 bg-[#2e2e2e] z-10 text-white p-2 rounded-xl shadow-xl shadow-[#1f1f1f]">
      <Button
        onClick={() => handleShowInfo("About")}
        css={css}
        icon={<FaHouseUser size={35} />}
        idTooltip="About"
        texTooltip="About"
      />
      <Button
        onClick={() => handleShowInfo("Skills")}
        css={css}
        icon={<FaUser size={35} />}
        idTooltip="Skills"
        texTooltip="Skills"
      />
      <Button
        onClick={() => handleShowInfo("Experience")}
        css={css}
        icon={<FaBuilding size={35} />}
        idTooltip="Experience"
        texTooltip="Experience"
      />
      <Button
        onClick={() => handleShowInfo("Projects")}
        css={css}
        icon={<FaSuitcase size={35} />}
        idTooltip="Projects"
        texTooltip="Projects"
      />
    </div>
  );
}

export { Menu };
