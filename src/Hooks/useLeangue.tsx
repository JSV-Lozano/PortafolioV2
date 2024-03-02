import { useTranslation } from "react-i18next";
import { usePortafolioContext } from "@Context/PortafolioContext";

function useLeangue() {
  const [t, i18n] = useTranslation("global");
  const { leangue, setLeangue } = usePortafolioContext();
  const handleChangeLeague = (lng: string) => {
    i18n.changeLanguage(lng);
    setLeangue(lng);
  };
  return { t, handleChangeLeague, leangue };
}

export { useLeangue };
