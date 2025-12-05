import { motion } from "framer-motion";
import { Link2, Scissors, Palette, QrCode, Send } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      icon: Link2,
      title: "Put Link",
      active: true,
    },
    {
      icon: Scissors,
      title: "Click Shortener",
      active: false,
    },
    {
      icon: Palette,
      title: "Create Custom URL",
      active: false,
    },
    {
      icon: QrCode,
      title: "Create QR Code",
      active: false,
    },
    {
      icon: Send,
      title: "For Product Link",
      active: false,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              HOW WE WORK 👇
            </h2>
            <p className="text-muted-foreground">
              All the tools you need to build and link shortener, manage links,
              QR codes, scan with QR dashboard can fulfill your business needs.
            </p>
          </motion.div>

          {/* Right Side - Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <div className="flex flex-wrap gap-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all ${
                      step.active
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent btn-outline "
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{step.title}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
            {/* Browser Header */}
            <div className="bg-secondary px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-success" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background rounded-md px-4 py-1 text-xs text-muted-foreground">
                  shortie.app/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Sidebar */}
                <div className="hidden md:block bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">
                        S
                      </span>
                    </div>
                    <span className="font-bold text-foreground">SHORTIE</span>
                  </div>
                  <nav className="space-y-2">
                    {[
                      "Dashboard",
                      "My Links",
                      "Analytics",
                      "QR Codes",
                      "Settings",
                    ].map((item, i) => (
                      <div
                        key={item}
                        className={`px-3 py-2 rounded-lg text-sm ${
                          i === 0
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-accent"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">
                        Total Clicks
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        2,280
                      </p>
                    </div>
                    <div className="bg-secondary rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">
                        Links Created
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        1,748
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 bg-background rounded-lg border border-border">
                    <h4 className="text-sm  font-semibold mb-4">
                      LINK ANALYTICS THIS WEEK
                    </h4>

                    <div className="h-48 sm:h-32 flex items-end justify-around gap-1 sm:gap-2">
                      {[40, 65, 45, 75, 85, 70, 90, 60, 80, 95, 70, 85].map(
                        (height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="flex-1 bg-primary rounded-t"
                          />
                        )
                      )}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                      {[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ].map((month) => (
                        <span key={month}>{month}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
