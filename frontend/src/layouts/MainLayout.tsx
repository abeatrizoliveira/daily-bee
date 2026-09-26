import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";

function MainLayout() {
  return (
    <>
    <Navbar />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
