function ProjectCard({ project, onPreview }) {
  return (
    <div className="project-card card h-100" data-aos="zoom-in-up">
      <div className="project-image-wrapper">
        <img
          src={project.image}
          className="card-img-top project-card-image"
          alt={project.title}
        />
      </div>

      <div className="card-body d-flex flex-column project-card-content">
        <p className="text-uppercase small mb-2">{project.category}</p>
        <h3 className="h5 mb-3">{project.title}</h3>
        <p className="card-text mb-3">{project.shortDescription}</p>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="badge text-bg-secondary">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => onPreview(project)}
          >
            Quick Preview
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
