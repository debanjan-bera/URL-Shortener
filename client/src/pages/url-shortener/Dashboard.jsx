import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3,
  QrCode,
  Plus,
  ExternalLink,
  Copy,
  List,
} from "lucide-react";
// import CustomButton from "../ui/CustomButton";
import CustomButton from "../../components/ui/CustomButton";
import DashboardKPI from "../../components/dashboard/KPI";
const Dashboard = () => {
  const [copiedId, setCopiedId] = useState(null);

  const recentLinks = [
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
      originalUrl: "https://another-site.com/page",
      clicks: 156,
      created: "5 hours ago",
    },
    {
      id: "3",
      shortUrl: "link.co/def456",
      originalUrl: "https://website.com/article",
      clicks: 89,
      created: "1 day ago",
    },
    {
      id: "4",
      shortUrl: "link.co/ghi012",
      originalUrl: "https://blog.com/post",
      clicks: 45,
      created: "2 days ago",
    },
  ];
  const totalClicks = recentLinks.reduce((sum, item) => sum + item.clicks, 0);

  const chartData = [65, 40, 80, 55, 90, 70, 85];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's your link analytics.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <DashboardKPI
        grid={4}
        totalClicks={totalClicks}
        totalLinks={recentLinks.length}
      />

      {/* Recent Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 bg-card border border-border rounded-xl overflow-hidden"
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">
            Recent Links
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">
                  Short URL
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">
                  Original URL
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">
                  Clicks
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground hidden sm:table-cell">
                  Created
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentLinks.map((link) => (
                <tr
                  key={link.id}
                  className="hover:bg-muted/10 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-primary font-medium">
                      {link.shortUrl}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-muted-foreground truncate max-w-xs block">
                      {link.originalUrl}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-foreground">{link.clicks}</td>
                  <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">
                    {link.created}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyToClipboard(link.shortUrl, link.id)}
                        className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                        title="Copy"
                      >
                        <Copy
                          size={16}
                          className={
                            copiedId === link.id
                              ? "text-green-500"
                              : "text-muted-foreground"
                          }
                        />
                      </button>
                      <a
                        href={`https://${link.originalUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                        title="Open"
                      >
                        <ExternalLink
                          size={16}
                          className="text-muted-foreground"
                        />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">
              Click Analytics
            </h2>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="flex items-end justify-between gap-2 h-48">
            {chartData.map((value, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="w-full bg-primary/20 rounded-t-lg relative overflow-hidden"
                >
                  <div
                    className="absolute bottom-0 w-full bg-primary rounded-t-lg"
                    style={{ height: "100%" }}
                  />
                </motion.div>
                <span className="text-xs text-muted-foreground">
                  {days[index]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3 flex flex-col gap-3">
            <Link to="/create-link">
              <CustomButton className="w-full justify-start gap-3">
                <Plus size={18} />
                Create Short Link
              </CustomButton>
            </Link>
            <Link to="/qr-generator">
              <CustomButton
                variant="outline"
                className="w-full justify-start gap-3"
              >
                <QrCode size={18} />
                Generate QR Code
              </CustomButton>
            </Link>
            <Link to="/manage-qr">
              <CustomButton
                variant="outline"
                className="w-full justify-start gap-3"
              >
                <List size={18} />
                Manage QR Codes
              </CustomButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Dashboard;
