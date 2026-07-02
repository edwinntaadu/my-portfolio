import Button from "../common/Button";

function HeroSection({ personalInfo }) {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row hero-content-row align-items-center justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="hero-text">
              <h1
                className="display-4 fw-bold mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {personalInfo.name}
              </h1>

              <div
                className="availability-badge mb-4"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <span className="availability-dot"></span>
                Open to Opportunities
              </div>

              <h2
                className="hero-role mb-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {personalInfo.role}
              </h2>

              <p className="mb-4" data-aos="fade-up" data-aos-delay="400">
                {personalInfo.heroDescription}
              </p>

              <div
                className="hero-actions"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Button to="#portfolio" variant="dark">
                  View Projects
                </Button>

                <a
                  href={personalInfo.github}
                  className="btn btn-outline-light"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github me-2"></i>
                  View GitHub
                </a>
              </div>

              <div className="scroll-indicator">
                <a href="#about">
                  <i className="bi bi-chevron-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
