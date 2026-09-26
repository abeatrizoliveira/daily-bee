import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../features/home/Home";
import Tasks from "../features/tasks/Tasks";
import MainLayout from "../layouts/mainLayout";
// import Pomodoro from "../features/pomodoro/pages/Pomodoro";
// import Plantas from "../features/plantas/pages/Plantas";
// import Planner from "../features/planner/pages/Planner";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        {/*<Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/plantas" element={<Plantas />} />
        <Route path="/planner" element={<Planner />} /> */}
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
