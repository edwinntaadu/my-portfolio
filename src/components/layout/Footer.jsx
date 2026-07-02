import personalInfo from "../../data/personalInfo";
import NavScrollLink from "../common/NavScrollLink";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <h3 className="footer-title">Edwin Ntaadu</h3>

            <p className="footer-text">
              Full Stack Developer & UI/UX Designer based in Berlin.
            </p>

            <a href={`mailto:${personalInfo.email}`} className="footer-contact">
              {personalInfo.email}
            </a>
          </div>

          <div className="col-lg-4">
            <div className="footer-links">
              <NavScrollLink to="#home">Home</NavScrollLink>
              <NavScrollLink to="#about">About</NavScrollLink>
              <NavScrollLink to="#services">Services</NavScrollLink>
              <NavScrollLink to="#portfolio">Portfolio</NavScrollLink>
              <NavScrollLink to="#contact">Contact</NavScrollLink>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footer-socials">
              <a
                href={personalInfo.github}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© {currentYear} Edwin Ntaadu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
