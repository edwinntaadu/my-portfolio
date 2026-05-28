import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/cards/ProjectCard";
import ProjectPreviewModal from "../components/common/ProjectPreviewModal";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePreviewOpen = (project) => {
    setSelectedProject(project);
  };

  const handlePreviewClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container py-5">
      <div className="mb-5">
        <h1 className="mb-3">Portfolio Projects</h1>
        <p className="projects-page-text">
          These projects represent my practical learning journey in frontend and
          software development. They include user interfaces, responsive
          layouts, authentication practice, and component-based React projects.
        </p>
      </div>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <ProjectCard project={project} onPreview={handlePreviewOpen} />
          </div>
        ))}
      </div>

      <ProjectPreviewModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handlePreviewClose}
      />
    </div>
  );
}

export default ProjectsPage;
