function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 className="footer-title">Edwin Ntaadu</h3>
            <p className="footer-text">
              Building responsive web experiences with modern technologies.
            </p>
          </div>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Edwin Ntaadu. All rights reserved.</p>
          <p>Made with 🤍</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
