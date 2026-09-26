import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext} from "../context/ThemeContext";
import { type Theme } from "../types/theme";

type ThemeproviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeproviderProps) {
  const [theme, setTheme] = useState<Theme>(()=>{
    const savedTheme = localStorage.getItem("theme");

    if(
      savedTheme === "light" || savedTheme === "dark" || savedTheme === "system"
    ){
      return savedTheme;
    }
    return "light";
  });

  function changeTheme(theme:Theme) {
    localStorage.setItem("theme", theme);
     setTheme(theme);
  }

  useEffect(()=>{
    const root = document.documentElement;
    if(theme === "system"){
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.setAttribute("data-theme", prefersDark ? "dark" : "light");
    }
    root.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
