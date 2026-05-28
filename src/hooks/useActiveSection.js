import { useEffect, useState } from "react";

const sectionIds = ["home", "about", "services", "portfolio", "contact"];

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + 120;

      let currentSection = "home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (element) {
          const { offsetTop } = element;

          if (scrollPosition >= offsetTop) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}

export default useActiveSection;
