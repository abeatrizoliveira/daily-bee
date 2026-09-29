import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/navbar/Navbar";
import Header from "../shared/components/header/Header";

function MainLayout() {
  return (
    <>
    <Navbar />
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
