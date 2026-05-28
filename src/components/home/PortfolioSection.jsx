import { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "../cards/ProjectCard";
import ProjectPreviewModal from "../common/ProjectPreviewModal";

function PortfolioSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePreviewOpen = (project) => {
    setSelectedProject(project);
  };

  const handlePreviewClose = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="portfolio-section py-5">
      <div className="container">
        <div className="section-heading text-center mb-5" data-aos="fade-up">
          <p className="section-subtitle">Portfolio</p>
          <h2>My Projects</h2>
        </div>

        <div className="row g-4">
          {featuredProjects.map((project, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProjectCard project={project} onPreview={handlePreviewOpen} />
            </div>
          ))}
        </div>
      </div>

      <ProjectPreviewModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handlePreviewClose}
      />
    </section>
  );
}

export default PortfolioSection;
