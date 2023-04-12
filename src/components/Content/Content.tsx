export type ContentProps = {
  children: string;
};

export const Content = ({ children }: ContentProps) => (
  <>
    {children
      .trim()
      .split(/\n\n/)
      .map((paragraph, i) => (
        <p
          key={i}
          dangerouslySetInnerHTML={{
            __html: paragraph.replace(/\n/g, "<br />"),
          }}
        />
      ))}
  </>
);
