import { motion } from "motion/react";
import {
  Globe,
  Link2,
  MousePointer,
  MousePointerClick,
  QrCode,
  Users,
} from "lucide-react";
import { memo, useMemo } from "react";

const DashboardKPI = ({ grid, totalClicks, totalLinks }) => {
  const stats = useMemo(
    () => [
      {label: "Total Links",value: totalLinks,change: "+12%",icon: Link2,color: "bg-red-100",textColor: "text-red-600",
      },
      {label: "Total Clicks",value: totalClicks,change: "+23%",icon: MousePointer,color: "bg-green-100",textColor: "text-green-700",
      },
      {label: "QR Codes",value: "1,234",change: "+8%",icon: QrCode,color: "bg-purple-100",textColor: "text-purple-600",
      },
      {label: "Countries", value: "0", change: "+15%", icon: Globe,color: "bg-orange-100",textColor: "text-orange-600",
      },
    ],
    [totalClicks, totalLinks]
  );
  // const stats = useMemo(
  //   () => [
  //     { label: "Total Links", value: totalLinks, icon: Link2, change: "+12%" },
  //     {
  //       label: "Total Clicks",
  //       value: totalClicks,
  //       icon: MousePointerClick,
  //       change: "+8%",
  //     },
  //     { label: "QR Codes", value: "0", icon: QrCode, change: "+15%" },
  //     { label: "Countries", value: "0", icon: Globe, change: "+3%" },
  //   ],
  //   [totalClicks, totalLinks]
  // );

  const filteredStats = useMemo(() => {
    return grid === 2
      ? stats.filter((item) => !["QR Codes", "Countries"].includes(item.label))
      : stats;
  }, [grid, stats]);

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
              <div
                className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}
              >
                <stat.icon className={`w-6 h-6 ${stat.textColor} `} />
              </div>
            </div>
            <p className="text-2xl pl-1 font-bold text-foreground">{stat.value}</p>
            <p className="text-sm pl-1 text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default memo(DashboardKPI);
