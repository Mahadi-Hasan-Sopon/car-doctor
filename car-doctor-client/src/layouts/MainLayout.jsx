import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="max-w-6xl lg:mx-auto px-3">
      <Outlet />
    </div>
  );
}

export default MainLayout;
