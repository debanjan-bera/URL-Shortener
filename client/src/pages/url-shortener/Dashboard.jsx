import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart3, QrCode, Plus, List } from "lucide-react";
import CustomButton from "../../components/ui/CustomButton";
import DashboardKPI from "../../components/dashboard/KPI";
import MyLinksList from "../../components/LinkList";

const Dashboard = () => {
  const recentLinks = useMemo(
    () => [
      {
        id: "1",
        shortUrl: "link.co/abc123",
        originalUrl: "lovable.dev",
        clicks: 234,
        created: "2 hours ago",
      },
      {
        id: "2",
        shortUrl: "link.co/xyz789",
        originalUrl: "another-site.com",
        clicks: 156,
        created: "5 hours ago",
      },
      {
        id: "3",
        shortUrl: "link.co/def456",
        originalUrl: "website.com",
        clicks: 89,
        created: "1 day ago",
      },
    ],
    []
  );

  const totalClicks = useMemo(
    () => recentLinks.reduce((sum, item) => sum + item.clicks, 0),
    [recentLinks]
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your link analytics.
        </p>
      </motion.div>

      <DashboardKPI
        grid={4}
        totalClicks={totalClicks}
        totalLinks={recentLinks.length}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 bg-card border rounded-xl"
      >
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Recent Links</h2>
        </div>
        <MyLinksList filteredLinks={recentLinks} isDashboard />
      </motion.div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div className="lg:col-span-2 bg-card border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Click Analytics</h2>
          <BarChart3 className="text-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card border rounded-xl p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className=" flex flex-col items-stretch gap-3">
            <Link to="/create-link" className="w-full">
              <CustomButton className="gap-3 w-full justify-start ">
                <Plus size={18} /> Create Short Link
              </CustomButton>
            </Link>
            <Link to="/qr-generator">
              <CustomButton
                variant="green"
                className="w-full justify-start  gap-3"
              >
                <QrCode size={18} /> Generate QR
              </CustomButton>
            </Link>
            <Link to="/manage-qr">
              <CustomButton
                variant="outline"
                className=" w-full justify-start gap-3"
              >
                <List size={18} /> Manage QR
              </CustomButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default memo(Dashboard);
