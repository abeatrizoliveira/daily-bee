import { NavLink, useLocation } from "react-router-dom";
import {
  Pencil,
  TextAlignJustify,
  Icon,
  TableProperties,
  LogOut,
} from "lucide-react";
import "./navbar.css";
import { bee, fruit } from "@lucide/lab";
import { useState } from "react";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const pathname = useLocation().pathname;

  const routes = ["/planner", "/tasks", "/", "/pomodoro"];

  const activateButton = routes.indexOf(pathname);

  return (
    <div className="wrapper-nav">
      <nav className={`navbar ${activeMenu ? "active" : ""}`}>
        <div className="navbar-content">
          <button
            title={activeMenu ? "Fechar menu" : "Abrir menu"}
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <TextAlignJustify size={30} />
          </button>

          <div className="nav-links">
            <div
              className="active-circle"
              style={
                {
                  "--position": activateButton,
                } as React.CSSProperties
              }
            ></div>
            <NavLink
              to="/planner"
              title="Planner"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="icon-box">
                <TableProperties size={25} />
              </div>
              <span className="link-text">Planner</span>
            </NavLink>

            <NavLink
              to="/tasks"
              title="Tarefas"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="icon-box">
                <Pencil size={25} />
              </div>
              <span className="link-text">Tarefas</span>
            </NavLink>

            <NavLink
              to="/"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="icon-box">
                <Icon iconNode={bee} size={25} />
              </div>
              <span className="link-text">Home</span>
            </NavLink>

            <NavLink
              to="/pomodoro"
              title="Pomodoro"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="icon-box">
                <Icon iconNode={fruit} size={25} />
              </div>
              <span className="link-text">Pomodoro</span>
            </NavLink>
          </div>

          <button title="Sair" className="btn-logout">
            <LogOut size={25} />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
