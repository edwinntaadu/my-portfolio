import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useStickyHeader from "../../hooks/useStickyHeader";
import useActiveSection from "../../hooks/useActiveSection";
import NavScrollLink from "../common/NavScrollLink";

function Header() {
  const isSticky = useStickyHeader(50);
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");

    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToHome();
      }, 100);

      return;
    }

    scrollToHome();
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <header className={`site-header ${isSticky ? "site-header-sticky" : ""}`}>
      <nav className="container site-navbar" aria-label="Main navigation">
        <Link
          to="/"
          className="site-logo text-reset"
          onClick={handleLogoClick}
          aria-label="Go to home section"
        >
          <img
            src="/images/profile2.jpg"
            alt="Edwin Ntaadu"
            className="site-logo-image"
          />
        </Link>

        <button
          type="button"
          className={`site-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          id="site-nav-links"
          className={`site-nav-links ${menuOpen ? "open" : ""}`}
        >
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
