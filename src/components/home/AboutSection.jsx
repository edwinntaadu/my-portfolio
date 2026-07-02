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
            <p>
              My Mathematics background helps me break down complex problems,
              think through user flows logically, and build solutions with
              structure and attention to detail.
            </p>

            <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <h4 className="h5 text-center">Technologies & Skills</h4>

              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                {personalInfo.technologies.map((tool, index) => (
                  <span key={index} className="badge text-bg-secondary">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <h4 className="h5 text-center">Design & Collaboration</h4>

              <p className="about-list-text">
                {personalInfo.designTools.join(" • ")}
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <h4 className="h5 text-center">Professional Interests</h4>

              <p className="about-list-text">
                {personalInfo.areasOfInterest.join(" • ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
