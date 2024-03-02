import { ReactElement } from "react";
type anchorProps = {
  url?: string;
  css: string;
  icon?: ReactElement;
  text?: string;
};

function Anchor({ css, url, icon, text }: anchorProps) {
  return (
    <a
      className={css}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      {text}
    </a>
  );
}

export { Anchor };
