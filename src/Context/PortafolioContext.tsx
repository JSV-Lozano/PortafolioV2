import React, { createContext, useContext, useState, ReactNode } from "react";
import type { ContextProps } from "../Types/type";



const PortafolioContext = createContext<ContextProps | undefined>(undefined);

const PortafolioProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showInfo, setShowInfo] = useState<string>("About");
  const [leangue, setLeangue] = useState<string>("en");

  const handleShowInfo = (info: string) => {
    setShowInfo(info);
  };
  const contexValue = {
    showInfo,
    handleShowInfo,
    leangue,
    setLeangue,
  };
  return (
    <PortafolioContext.Provider value={contexValue}>
      {children}
    </PortafolioContext.Provider>
  );
};
const usePortafolioContext = () => {
  const context = useContext(PortafolioContext);
  if (!context) {
    throw new Error("usePortafolio must be used within a PortafolioProvider");
  }
  return context;
};
// eslint-disable-next-line react-refresh/only-export-components
export { PortafolioProvider, usePortafolioContext };
