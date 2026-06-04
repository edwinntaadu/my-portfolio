import { Link, useLocation, useNavigate } from "react-router-dom";

function NavScrollLink({
  to,
  children,
  className = "",
  onNavigate,
  isActive = false,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (!to.startsWith("#")) {
      if (onNavigate) onNavigate();
      return;
    }

    event.preventDefault();

    const id = to.replace("#", "");

    const scrollToSection = () => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (onNavigate) onNavigate();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToSection();
      }, 100);

      return;
    }

    scrollToSection();
  };

  const combinedClassName =
    `${className} ${isActive ? "nav-link-active" : ""}`.trim();

  if (to.startsWith("#")) {
    return (
      <a href={to} onClick={handleClick} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={combinedClassName}
      onClick={() => {
        if (onNavigate) onNavigate();
      }}
    >
      {children}
    </Link>
  );
}

export default NavScrollLink;
