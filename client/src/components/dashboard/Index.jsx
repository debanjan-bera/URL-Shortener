import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { BarChart3, Link2, QrCode, MousePointerClick, Globe, TrendingUp,Plus,ExternalLink,Copy,Settings,Menu,X,Home,List,LogOut} from "lucide-react";
import CustomButton from "../ui/CustomButton";
// import CustomButton from "@/components/ui/CustomButton";
// import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
//   const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout();
    navigate("/login");
  };

  
  const recentLinks = [
    { id: "1", shortUrl: "link.co/abc123", originalUrl: "https://example.com/very-long-url", clicks: 234, created: "2 hours ago" },
    { id: "2", shortUrl: "link.co/xyz789", originalUrl: "https://another-site.com/page", clicks: 156, created: "5 hours ago" },
    { id: "3", shortUrl: "link.co/def456", originalUrl: "https://website.com/article", clicks: 89, created: "1 day ago" },
    { id: "4", shortUrl: "link.co/ghi012", originalUrl: "https://blog.com/post", clicks: 45, created: "2 days ago" },
];
const totalClicks = recentLinks.reduce((sum, item) => sum + item.clicks, 0);
const stats = [
  { label: "Total Links", value: recentLinks.length, icon: Link2, change: "+12%" , },
  { label: "Total Clicks", value: totalClicks, icon: MousePointerClick, change: "+8%", },
  { label: "QR Codes", value: "0", icon: QrCode, change: "+15%",},
  { label: "Countries", value: "0", icon: Globe, change: "+3%", },
];

  const chartData = [65, 40, 80, 55, 90, 70, 85];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const copyToClipboard = (text ,id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const navItems = [
    { label: "Dashboard", icon: Home, href: "/dashboard", active: true },
    { label: "Create Link", icon: Plus, href: "/create-link" },
    // { label: "QR Generator", icon: QrCode, href: "/qr-generator" },
    // { label: "Manage QR", icon: List, href: "/manage-qr" },
    // { label: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">SHORTIE</h1>
        </div>
        <nav className="px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <div className="mb-3 px-4">
            {/* <p className="text-sm font-medium text-foreground truncate">{user?.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p> */}
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back! Here's your link analytics.</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 bg-primary/10 rounded-lg`}>
                    <stat.icon className={`w-5 h-5  text-primary`} />
                  </div>
                  {/* <span className="text-sm text-green-500 font-medium flex items-center gap-1">
                    <TrendingUp size={14} />
                    {stat.change}
                  </span> */}
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          

          {/* Recent Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 bg-card border border-border rounded-xl overflow-hidden"
          >
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Recent Links</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Short URL</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Original URL</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Clicks</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground hidden sm:table-cell">Created</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recentLinks.map((link) => (
                    <tr key={link.id} className="hover:bg-muted/10 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-primary font-medium">{link.shortUrl}</span>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <span className="text-muted-foreground truncate max-w-xs block">
                          {link.originalUrl}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-foreground">{link.clicks}</td>
                      <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">{link.created}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => copyToClipboard(link.shortUrl, link.id)}
                            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                            title="Copy"
                          >
                            <Copy size={16} className={copiedId === link.id ? "text-green-500" : "text-muted-foreground"} />
                          </button>
                          <a
                            href={`https://${link.shortUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                            title="Open"
                          >
                            <ExternalLink size={16} className="text-muted-foreground" />
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
                <h2 className="text-lg font-semibold text-foreground">Click Analytics</h2>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="flex items-end justify-between gap-2 h-48">
                {chartData.map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
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
                    <span className="text-xs text-muted-foreground">{days[index]}</span>
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
              <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
              <div className="space-y-3 flex flex-col gap-3">
                <Link to="/create-link">
                  <CustomButton className="w-full justify-start gap-3">
                    <Plus size={18} />
                    Create Short Link
                  </CustomButton>
                </Link>
                <Link to="/qr-generator">
                  <CustomButton variant="outline" className="w-full justify-start gap-3">
                    <QrCode size={18} />
                    Generate QR Code
                  </CustomButton>
                </Link>
                <Link to="/manage-qr">
                  <CustomButton variant="outline" className="w-full justify-start gap-3">
                    <List size={18} />
                    Manage QR Codes
                  </CustomButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
