import { Globe, Link2, MousePointerClick, QrCode } from "lucide-react";
import { motion } from "framer-motion";

const DashboardKPI = ({ grid, totalClicks, totalLinks }) => {
  const stats = [
    { label: "Total Links", value: totalLinks, icon: Link2, change: "+12%" },
    {
      label: "Total Clicks",
      value: totalClicks,
      icon: MousePointerClick,
      change: "+8%",
    },
    { label: "QR Codes", value: "0", icon: QrCode, change: "+15%" },
    { label: "Countries", value: "0", icon: Globe, change: "+3%" },
  ];
  const filteredStats =
    grid === 2
      ? stats.filter((item) => !["QR Codes", "Countries"].includes(item.label))
      : stats;

  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${grid} gap-4 mb-8`}
      >
        {filteredStats.map((stat, index) => (
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
    </>
  );
};

export default DashboardKPI;
