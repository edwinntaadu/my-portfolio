import projects from "../data/projects";
import ProjectCard from "../components/cards/ProjectCard";

function ProjectsPage() {
  return (
    <main className="projects-page">
      <div className="container py-5">
        <div className="mb-5">
          <p className="section-subtitle">Portfolio</p>
          <h1 className="mb-3">All Projects</h1>
          <p className="projects-page-text">
            A collection of web development and design projects showcasing
            practical frontend, backend, and UI/UX work.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
