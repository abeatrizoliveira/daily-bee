import { useEffect, useState } from "react";
import "./app.css";
import { AppRoutes } from "./routes/appRoutes";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const interval = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(interval);
  }, []);

  if (loading) {
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
  return <AppRoutes />;
}

export default App;
