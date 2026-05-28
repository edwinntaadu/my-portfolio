import { Link, useLocation, useNavigate } from "react-router-dom";

function Button({ children, to, href, className = "", variant = "dark" }) {
  const location = useLocation();
  const navigate = useNavigate();

  const classes =
    variant === "dark"
      ? `btn btn-dark ${className}`
      : `btn btn-outline-light ${className}`;

  const handleAnchorClick = (event) => {
    if (!to || !to.startsWith("#")) return;

    event.preventDefault();

    const id = to.replace("#", "");

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (to && to.startsWith("#")) {
    return (
      <a href={to} className={classes} onClick={handleAnchorClick}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}

export default Button;
