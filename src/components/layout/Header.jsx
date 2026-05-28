import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useStickyHeader from "../../hooks/useStickyHeader";
import useActiveSection from "../../hooks/useActiveSection";
import NavScrollLink from "../common/NavScrollLink";

function Header() {
  const isSticky = useStickyHeader(50);
  const activeSection = useActiveSection();

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isHomePage = location.pathname === "/";

  const handleLogoClick = (event) => {
    event.preventDefault();

    closeMenu();

    navigate("/");

    setTimeout(() => {
      const homeSection = document.getElementById("home");

      if (homeSection) {
        homeSection.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <header className={`site-header ${isSticky ? "site-header-sticky" : ""}`}>
      <nav className="container site-navbar">
        <Link to="/" className="site-logo text-reset" onClick={handleLogoClick}>
          <img
            src="/images/profile1.jpg"
            alt="Edwin"
            className="site-logo-image"
          />
        </Link>

        <button
          type="button"
          className={`site-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`site-nav-links ${menuOpen ? "open" : ""}`}>
          <NavScrollLink
            to="#home"
            className="text-reset nav-link-custom"
            onNavigate={closeMenu}
            isActive={isHomePage && activeSection === "home"}
          >
            Home
          </NavScrollLink>

          <NavScrollLink
            to="#about"
            className="text-reset nav-link-custom"
            onNavigate={closeMenu}
            isActive={isHomePage && activeSection === "about"}
          >
            About
          </NavScrollLink>

          <NavScrollLink
            to="#services"
            className="text-reset nav-link-custom"
            onNavigate={closeMenu}
            isActive={isHomePage && activeSection === "services"}
          >
            Services
          </NavScrollLink>

          <NavScrollLink
            to="#portfolio"
            className="text-reset nav-link-custom"
            onNavigate={closeMenu}
            isActive={isHomePage && activeSection === "portfolio"}
          >
            Portfolio
          </NavScrollLink>

          <NavScrollLink
            to="#contact"
            className="text-reset nav-link-custom"
            onNavigate={closeMenu}
            isActive={isHomePage && activeSection === "contact"}
          >
            Contact
          </NavScrollLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
