import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const visibleTechnologies = project.technologies?.slice(0, 4) || [];

  return (
    <article className="project-card card h-100" data-aos="zoom-in-up">
      {project.flagship && (
        <div className="featured-project-badge">Featured Project</div>
      )}

      <div className="project-image-wrapper">
        <img
          src={project.image}
          className="card-img-top project-card-image"
          alt={`${project.title} preview`}
        />
      </div>

      <div className="card-body d-flex flex-column project-card-content">
        <p className="project-card-category text-uppercase small mb-2">
          {project.category} • {project.year}
        </p>

        <h3 className="h5 mb-3">{project.title}</h3>

        <p className="card-text mb-3">{project.shortDescription}</p>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {visibleTechnologies.map((tech, index) => (
            <span key={index} className="badge text-bg-secondary">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-actions mt-auto">
          <Link to={`/projects/${project.slug}`} className="btn btn-dark">
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
