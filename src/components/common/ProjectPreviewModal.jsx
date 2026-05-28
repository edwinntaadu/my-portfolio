import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProjectPreviewModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

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

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal-content compact-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close preview"
        >
          ×
        </button>

        <div className="project-modal-image-wrap compact-image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="project-modal-image compact-image"
          />
        </div>

        <div className="project-modal-body compact-modal-body">
          <p className="project-modal-category">{project.category}</p>
          <h2 className="project-modal-title">{project.title}</h2>

          <p className="project-modal-text">{project.shortDescription}</p>

          <div className="project-preview-section">
            <h3 className="project-preview-heading">About this project</h3>
            <p className="project-preview-description">
              {project.description.length > 220
                ? `${project.description.slice(0, 220)}...`
                : project.description}
            </p>
          </div>

          <div className="project-preview-section">
            <h3 className="project-preview-heading">Technologies</h3>
            <div className="project-modal-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge text-bg-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-preview-section">
            <h3 className="project-preview-heading">Quick actions</h3>
            <div className="project-modal-actions">
              <Link
                to={`/projects/${project.slug}`}
                className="btn btn-dark"
                onClick={onClose}
              >
                View Full Details
              </Link>

              {project.github && (
                <a
                  href={project.github}
                  className="btn btn-outline-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  className="btn btn-outline-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreviewModal;
