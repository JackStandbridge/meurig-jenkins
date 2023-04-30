import { Shortfilm } from "@/components/Pages/Shortfilm";
import { useRouter } from "next/router";
import { content } from "@/content/shortfilms";

const ShortfilmPage = (): JSX.Element | undefined => {
  const router = useRouter();

  const { id } = router.query;

  if (!id) {
    return;
  }

  if (typeof id === "string" && id in content.shortfilms) {
    return <Shortfilm id={id} />;
  }

  router.push("/shortfilms");
};

export default ShortfilmPage;
