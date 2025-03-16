import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    const storedTheme = localStorage.getItem("isLight");
    return storedTheme === "true";
  });

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  function toggleTheme() {
    setIsLightTheme((prev) => {
      const newTheme = !prev;
      localStorage.setItem("isLight", newTheme);
      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
