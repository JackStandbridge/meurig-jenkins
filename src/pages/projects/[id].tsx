import { Project } from "@/components/Pages/Project";
import { useRouter } from "next/router";
import { content } from "@/content/projects";

const ProjectsPage = () => {
  const router = useRouter();

  const { id } = router.query;

  if (!id) {
    return;
  }

  if (typeof id === "string" && id in content.projects) {
    return <Project id={id} />;
  }

  router.push("/projects");
};

export default ProjectsPage;
