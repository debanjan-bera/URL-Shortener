import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, TrendingUp, BarChart3 } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-dark-blue py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-yellow-400 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              Growth Hack your way to the Top!
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              GET CLOSER TO YOUR CUSTOMERS TODAY
            </h2>
            <Link
              to="/register"
              className="inline-block bg-success text-primary-foreground px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-success/25 transition-all"
            >
              Get Started For Free
            </Link>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    PERFORMANCE
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">This Month</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email SMS & More</p>
                  <p className="text-2xl font-bold text-foreground">2,280</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Total Links</p>
                  <p className="text-2xl font-bold text-foreground">1,758</p>
                </div>
              </div>

              <div className="flex items-end justify-between h-32 gap-2">
                {[35, 50, 70, 45, 80, 60, 90, 55, 75, 65].map((height, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-md ${
                      i % 2 === 0 ? "bg-primary" : "bg-primary/50"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-border"
            >
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Growth</p>
                  <p className="text-lg font-bold text-success">+23.5%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
