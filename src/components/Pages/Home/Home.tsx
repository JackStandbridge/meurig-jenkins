import type { HomePage } from "@/types/content";

import { Page } from "@/components/Page";
import { Hero } from "@/components/Hero";

export type HomeProps = {
  page: HomePage;
};

export const Home = ({ page }: HomeProps): JSX.Element => (
  <Page description="A portfolio site for Meurig Jenkins">
    <Hero text={page.text} />
  </Page>
);
