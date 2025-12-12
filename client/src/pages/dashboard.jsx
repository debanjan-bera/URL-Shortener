import { Outlet} from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar";

const Dashboard = () => {
  return (
  <div className="min-h-screen bg-background">
    <Sidebar/>
    {/* <DashboardLayout/> */}
    
    <Outlet />
  </div>
  );
};

export default Dashboard;
