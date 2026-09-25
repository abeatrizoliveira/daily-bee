import "./app.css";
import { AppRoutes } from "./routes/appRoutes";

function App() {
  setInterval(() => {
    return <AppRoutes />;
  }, 1000);

  return (
    <div className="app">
      <div className="image-fill">
        <img
          src="../src/assets/daily_bee_icon_w_letter.png"
          className="image gray"
        />
        <img
          src="../src/assets/daily_bee_icon_w_letter.png"
          className="image color"
        />
      </div>
      carregando...
    </div>
  );
}

export default App;
