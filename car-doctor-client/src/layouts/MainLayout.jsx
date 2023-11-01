import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

function MainLayout() {
  return (
    <div className="max-w-6xl lg:mx-auto px-6">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
