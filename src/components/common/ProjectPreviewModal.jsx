import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProjectPreviewModal({ project, isOpen, onClose }) {
  useEffect(() => {
    document.body.classList.toggle("modal-open", isOpen);

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const previewDescription =
    project.description && project.description.length > 320
      ? `${project.description.slice(0, 320)}...`
      : project.description;

  return (
    <div
      className="project-modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="project-modal-content compact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project preview"
        >
          ×
        </button>

        <div className="project-modal-image-wrap compact-image-wrap">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="project-modal-image compact-image"
          />
        </div>

        <div className="project-modal-body compact-modal-body">
          <p className="project-modal-category">{project.category}</p>

          <h2 id="project-modal-title" className="project-modal-title">
            {project.title}
          </h2>

          <p className="project-modal-text">{project.shortDescription}</p>

          {previewDescription && (
            <div className="project-preview-section">
              <h3 className="project-preview-heading">Project Overview</h3>
              <p className="project-preview-description">
                {previewDescription}
              </p>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="project-preview-section">
              <h3 className="project-preview-heading">Technologies Used</h3>

              <div className="project-modal-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="badge text-bg-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="project-modal-actions">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
              >
                View Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                className="btn btn-outline-secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            )}

            <Link
              to={`/projects/${project.slug}`}
              className="btn btn-outline-secondary"
              onClick={onClose}
            >
              Full Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreviewModal;
