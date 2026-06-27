import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetailsPage() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-details-page">
        <div className="container py-5">
          <h1 className="mb-3">Project Not Found</h1>
          <p className="mb-4">
            The project you are looking for does not exist.
          </p>

          <Link to="/projects" className="btn btn-dark">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-details-page">
      <section className="project-details-hero">
        <div className="container">
          <Link to="/projects" className="project-back-link">
            ← Back to Projects
          </Link>

          <p className="project-card-category text-uppercase small mb-2">
            {project.category} • {project.year}
          </p>

          <h1 className="project-details-title">{project.title}</h1>

          <p className="project-details-lead">{project.shortDescription}</p>

          <div className="project-details-actions">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i>
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
                <i className="bi bi-github me-2"></i>
                GitHub Repository
              </a>
            )}
          </div>

          <div className="project-details-image-wrap">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-details-image"
            />
          </div>
        </div>
      </section>

      <section className="project-details-content">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="project-details-card mb-4">
                <h2>Project Overview</h2>
                <p>{project.description}</p>
              </div>

              {project.role && (
                <div className="project-details-card mb-4">
                  <h2>My Role</h2>
                  <p>{project.role}</p>
                </div>
              )}

              {project.keyFeatures?.length > 0 && (
                <div className="project-details-card mb-4">
                  <h2>Key Features</h2>
                  <ul className="project-details-list">
                    {project.keyFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technicalChallenges?.length > 0 && (
                <div className="project-details-card mb-4">
                  <h2>Technical Challenges</h2>
                  <ul className="project-details-list">
                    {project.technicalChallenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.plannedImprovements?.length > 0 && (
                <div className="project-details-card mb-4">
                  <h2>Planned Improvements</h2>
                  <ul className="project-details-list">
                    {project.plannedImprovements.map((improvement) => (
                      <li key={improvement}>{improvement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.whatILearned?.length > 0 && (
                <div className="project-details-card">
                  <h2>What I Learned</h2>
                  <ul className="project-details-list">
                    {project.whatILearned.map((lesson) => (
                      <li key={lesson}>{lesson}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="col-lg-4">
              <aside className="project-details-card project-sidebar">
                <h2>Project Info</h2>

                <div className="project-info-list">
                  <div>
                    <span>Category</span>
                    <strong>{project.category}</strong>
                  </div>

                  <div>
                    <span>Year</span>
                    <strong>{project.year}</strong>
                  </div>

                  <div>
                    <span>Type</span>
                    <strong>{project.type === "web" ? "Web" : "Design"}</strong>
                  </div>
                </div>

                <h3>Technologies</h3>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="badge text-bg-secondary">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="d-grid gap-2">
                  <Link to="/#contact" className="btn btn-outline-secondary">
                    Discuss a Similar Project
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetailsPage;
