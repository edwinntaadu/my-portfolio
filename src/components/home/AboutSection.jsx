function AboutSection({ personalInfo }) {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="mb-3" data-aos="fade-up">
              {personalInfo.aboutTitle}
            </h2>

            <h5 className="mb-3" data-aos="fade-up" data-aos-delay="100">
              {personalInfo.aboutIntro}
            </h5>

            <p className="mb-4" data-aos="fade-up" data-aos-delay="200">
              {personalInfo.aboutDescription}
            </p>

            <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <h4 className="h5 text-center">Design Tool</h4>

              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                {personalInfo.designTools.map((tool, index) => (
                  <span key={index} className="badge text-bg-secondary">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <h4 className="h5 text-center">Technologies & Skills</h4>

              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                {personalInfo.technologies.map((tech, index) => (
                  <span key={index} className="badge text-bg-dark">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <h4 className="h5 text-center">Areas of Interest</h4>

              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                {personalInfo.areasOfInterest.map((interest, index) => (
                  <span key={index} className="badge text-bg-secondary">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
