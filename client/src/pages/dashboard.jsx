import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
