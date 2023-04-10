import { Projects } from "@/components/Pages/Projects";
import { content } from "@/content/projects";

const ProjectsPage = () => (
  <Projects
    projects={Object.fromEntries(
      Object.entries(content.projects).filter(
        ([_, { type }]) => type === "personal"
      )
    )}
  />
);

export default ProjectsPage;
