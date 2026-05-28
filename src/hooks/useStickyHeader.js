import { useEffect, useState } from "react";

function useStickyHeader(offset = 50) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > offset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return isSticky;
}

export default useStickyHeader;
