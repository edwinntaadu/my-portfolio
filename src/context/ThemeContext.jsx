import { useMemo, useState } from "react";
import { ThemeContext } from "./themeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme === "light" ? "theme-light" : "theme-dark"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
