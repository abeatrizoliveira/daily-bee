import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "../features/home/pages/Home";
// import Tarefas from "../features/tarefas/pages/Tarefas";
// import Pomodoro from "../features/pomodoro/pages/Pomodoro";
// import Plantas from "../features/plantas/pages/Plantas";
// import Planner from "../features/planner/pages/Planner";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/plantas" element={<Plantas />} />
        <Route path="/planner" element={<Planner />} /> */}
      </Routes>
    </BrowserRouter>
  );
}