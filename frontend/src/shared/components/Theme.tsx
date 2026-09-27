import useTheme from "../hooks/useTheme";
import ThemeProvider from "../providers/ThemeProvider";
import { Moon, Sun, SunMoon } from "lucide-react";

function BotaoTema() {
  const { theme, changeTheme } = useTheme();
  console.log(document.documentElement);

  return (
    <>
      <div>
        <Sun />
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={() => changeTheme("light")}
        />
        <label>Claro</label>

        <Moon />
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={() => changeTheme("dark")}
        />
        <label>Escuro</label>

        <SunMoon />
        <input
          type="radio"
          name="theme"
          value="system"
          checked={theme === "system"}
          onChange={() => changeTheme("system")}
        />
        <label>Sistema</label>
      </div>
    </>
  );
}

export default function Botao() {
  return (
    <ThemeProvider>
      <BotaoTema />
    </ThemeProvider>
  );
}
