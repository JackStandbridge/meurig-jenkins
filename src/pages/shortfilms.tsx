import { Shortfilms } from "@/components/Pages/Shortfilms";
import { content } from "@/content/shortfilms";

const ShortfilmsPage = (): JSX.Element => (
  <Shortfilms projects={content.shortfilms} />
);

export default ShortfilmsPage;
