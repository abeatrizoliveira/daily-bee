import { Settings } from "lucide-react";
import { useLocation } from "react-router-dom";
import "./header.css";

export default function Header() {
  const location = useLocation().pathname;
  const routes = ["/planner", "/tasks", "/", "/pomodoro"];
  const path = routes.indexOf(location);
  const nameofPath = [
    "Planner",
    "Tarefas",
    "Home",
    "Pomodoro"
  ];

  return (
    <div className="header">
      <span className="header-path">{nameofPath[path]}</span>
      <button className="header-btn">
        <Settings size={25} />
      </button>
    </div>
  );
}
