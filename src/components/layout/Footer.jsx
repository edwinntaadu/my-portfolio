function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <h3 className="footer-title">Edwin Ntaadu</h3>

            <p className="footer-text">
              Designing and building modern web experiences with a focus on
              usability, performance, and clean design.
            </p>
          </div>

          <div className="col-lg-4">
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footer-socials">
              <a href="#" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>

              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© {currentYear} Edwin Ntaadu. All rights reserved.</p>

          <p>Made with 🤍</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
