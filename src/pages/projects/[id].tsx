import { Project } from "@/components/Project";
import { useRouter } from "next/router";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  const router = useRouter();

  const { id } = router.query;

  if (!id) {
    return;
  }

  if (typeof id === "string" && id in projects) {
    return <Project id={id} />;
  }

  return <div>404</div>;
};

export default ProjectsPage;
