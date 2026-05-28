import Button from "../common/Button";
import useTypewriter from "../../hooks/useTypewriter";

function HeroSection({ personalInfo }) {
  const typedRole = useTypewriter(personalInfo.roles, 120, 1400);

  return (
    <section id="home" className="hero-section py-5">
      <div className="container">
        <div className="row hero-content-row align-items-center justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="hero-text">
              <h6 className="mb-3" data-aos="fade-up" data-aos-delay="100">
                {personalInfo.greeting}
              </h6>

              <h1
                className="display-4 fw-bold mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {personalInfo.name}
              </h1>

              <h2 className="h3 mb-4" data-aos="fade-up" data-aos-delay="300">
                <span className="hero-role">{typedRole}</span>
                <span className="hero-cursor">|</span>
              </h2>

              <p className="mb-4" data-aos="fade-up" data-aos-delay="400">
                {personalInfo.heroDescription}
              </p>

              <div data-aos="fade-up" data-aos-delay="500">
                <Button to="#portfolio" variant="dark">
                  See My Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
