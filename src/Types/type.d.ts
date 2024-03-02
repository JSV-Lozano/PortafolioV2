export type ContextProps = {
  showInfo: string;
  handleShowInfo: (info: string) => void;
  leangue: string;
  setLeangue: React.Dispatch<React.SetStateAction<string>>;
};
