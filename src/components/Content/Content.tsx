import { marked } from "marked";

export type ContentProps = {
  children: string;
};

export const Content = ({ children }: ContentProps) => {
  const content = children.replace(/^ +/gm, "");

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(content, { breaks: true }),
      }}
    />
  );
};
