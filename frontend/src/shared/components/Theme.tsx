import useTheme from "../hooks/useTheme";
import ThemeProvider from "../providers/ThemeProvider";

function BotaoTema() {
  const { theme, changeTheme } = useTheme();
  console.log(document.documentElement);

  return (
    <>
      <div>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={() => changeTheme("light")}
        />
        <label>Claro</label>

        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={() => changeTheme("dark")}
        />
        <label>Escuro</label>

        <input
          type="radio"
          name="theme"
          value="system"
          checked={theme === "system"}
          onChange={() => changeTheme("system")}
        />
        <label>Sistema</label>
      </div>
      <div></div>
      <p>Tema atual: {theme}</p>
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
