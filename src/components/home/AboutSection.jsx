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
              <h4 className="h5 text-center">Design Tools</h4>

              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                {personalInfo.designTools.map((tool, index) => (
                  <span key={index} className="badge text-bg-secondary">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <h4 className="h5 text-center">Technologies and Skills</h4>

              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                {personalInfo.technologies.map((tech, index) => (
                  <span key={index} className="badge text-bg-dark">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <h4 className="h5 text-center mb-4">Work Process</h4>

              <div className="row">
                {personalInfo.workProcess.map((step, index) => (
                  <div className="col-6 col-md-3 mb-3" key={index}>
                    <div className="border rounded p-3 h-100 text-center">
                      <strong>0{index + 1}</strong>

                      <div className="mt-2">{step}</div>
                    </div>
                  </div>
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
