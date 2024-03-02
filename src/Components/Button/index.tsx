import { ReactElement } from "react";
import { Tooltip } from "react-tooltip";

type buttonProps = {
  css: string;
  text?: string;
  icon?: ReactElement;
  idTooltip?: string;
  texTooltip?: string;
  directTooltip?: "string";
  onClick?: () => void;
};

function Button({
  css,
  text,
  icon,
  onClick,
  idTooltip,
  texTooltip,
}: buttonProps): JSX.Element {
  return (
    <>
      <button
        {...(idTooltip && {
          "data-tooltip-id": idTooltip,
          "data-tooltip-content": texTooltip,
        })}
        className={css}
        onClick={onClick}
      >
        {icon}
        {text}
      </button>
      {idTooltip && (
        <Tooltip
          id={idTooltip}
          place="left"
        />
      )}
    </>
  );
}

export { Button };
