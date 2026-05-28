import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetailsPage() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="container py-5">
        <h1 className="mb-3">Project Not Found</h1>
        <p className="mb-4">The project you are looking for does not exist.</p>
        <Link to="/projects" className="btn btn-dark">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <p className="text-uppercase small mb-2">{project.category}</p>
        <h1 className="mb-3">{project.title}</h1>
        <p className="lead mb-4">{project.shortDescription}</p>
      </div>

      <div className="mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid rounded shadow-sm"
        />
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="mb-4">
            <h2 className="h4 mb-3">About This Project</h2>
            <p>{project.description}</p>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5 mb-3">Technologies Used</h2>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="badge text-bg-secondary">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="d-grid gap-2">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    className="btn btn-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    className="btn btn-outline-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repository
                  </a>
                )}

                <Link
                  to="/projects"
                  className="btn btn-link text-decoration-none"
                >
                  Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
