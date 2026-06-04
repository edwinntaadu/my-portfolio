function ProjectCard({ project, onPreview }) {
  const visibleTechnologies = project.technologies?.slice(0, 3) || [];
  const extraTechCount =
    project.technologies?.length - visibleTechnologies.length;

  return (
    <article className="project-card card h-100" data-aos="zoom-in-up">
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

          {extraTechCount > 0 && (
            <span className="badge text-bg-secondary">+{extraTechCount}</span>
          )}
        </div>

        <div className="project-card-actions mt-auto">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => onPreview(project)}
          >
            View Project
          </button>

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              className="project-card-link"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
