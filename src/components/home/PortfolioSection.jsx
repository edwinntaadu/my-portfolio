import { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "../cards/ProjectCard";

function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("web");

  const filteredProjects = projects.filter(
    (project) => project.featured && project.type === activeFilter,
  );

  return (
    <section className="portfolio-section py-5">
      <div className="container">
        <div className="section-heading text-center mb-5" data-aos="fade-up">
          <p className="section-subtitle">Portfolio</p>
          <h2>Projects</h2>
          <p className="mx-auto portfolio-section-text">
            A growing collection of full-stack development, frontend, and UI/UX
            work focused on practical, user-centered digital experiences.
          </p>
        </div>

        <div className="portfolio-filter-wrapper" data-aos="fade-up">
          <button
            type="button"
            className={`portfolio-filter-btn ${
              activeFilter === "web" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("web")}
          >
            Web
          </button>

          <button
            type="button"
            className={`portfolio-filter-btn ${
              activeFilter === "design" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("design")}
          >
            Design
          </button>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="row g-4">
            {filteredProjects.map((project, index) => (
              <div
                className="col-md-6 col-lg-4"
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="portfolio-empty-state" data-aos="fade-up">
            <i className="bi bi-bezier2" aria-hidden="true"></i>
            <h3>UI/UX Case Studies in Progress</h3>
            <p>
              I am preparing detailed case studies covering user flows,
              wireframes, interface design, prototypes, and design decisions.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default PortfolioSection;
