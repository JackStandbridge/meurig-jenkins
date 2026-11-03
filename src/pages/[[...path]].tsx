import type { GetStaticPaths, GetStaticProps } from "next";
import type { PageData, Site } from "@/types/content";

import { getContent } from "@/loader/loadContent";
import { Home } from "@/components/Pages/Home";
import { Standard } from "@/components/Pages/Standard";

type ContentPageProps = {
  site: Site;
  page: PageData;
};

type Params = {
  path?: string[];
};

export const getStaticPaths: GetStaticPaths<Params> = () => ({
  paths: getContent().pages.map(({ path }) => ({
    params: { path: path === "/" ? [] : path.slice(1).split("/") },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ContentPageProps, Params> = ({
  params,
}) => {
  const { site, pages } = getContent();
  const path = `/${(params?.path ?? []).join("/")}`;
  const page = pages.find((page) => page.path === path);

  if (!page) {
    return { notFound: true };
  }

  return { props: { site, page } };
};

const ContentPage = ({ page }: ContentPageProps): JSX.Element =>
  page.layout === "home" ? <Home page={page} /> : <Standard page={page} />;

export default ContentPage;
