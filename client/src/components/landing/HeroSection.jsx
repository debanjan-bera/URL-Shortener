import CustomCard from "../ui/CustomCard";
import CustomButton from "../ui/CustomButton";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { QrCode, Star, Check, Link2, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Get smarter with every click ✨
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-15"
            >
              BIO LINK & LINK SHORTENER{" "}
              <span className="inline-flex items-center gap-1">
                <span className="text-primary">✓</span>
              </span>{" "}
              FOR BUSINESS NEEDS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl"
            >
              Do simple platform, you'll trust all tool links you need to
              connect audiences needs, track analytics, faster links creation,
              and collect custom shortlink(s)
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/register" className="btn-primary">
                Get Started for Free
              </Link>
              <a href="#how-it-works" className="btn-outline">
                See Quick Guide
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {["JD", "AK", "MR"][i - 1]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-sm font-medium text-foreground ml-1">
                  4.9
                </span>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">
                (from 3542 reviews)
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - QR Code & Preview */}
          <div className="space-y-4">
            <CustomCard className="p-6 bg-card border-border animate-float">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-sm">QR CODE</h3>
                <CustomButton
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  Download QR
                </CustomButton>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-foreground/10 rounded-lg flex items-center justify-center">
                  <QrCode className="w-16 h-16" />
                </div>
                <div className="flex-1 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">
                      https://shortie.com/short/webbar
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">
                      22 November 2023
                    </span>
                  </div>
                </div>
              </div>
            </CustomCard>

            <CustomCard
              className="p-6 bg-card border-border animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="font-semibold mb-4 text-sm">CUSTOM YOUR LINK</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <div className="flex-1 text-sm truncate">
                    shortie.com/link/yourlink
                  </div>
                  <CustomButton size="sm" variant="outline">
                    Apply
                  </CustomButton>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                  <p className="text-xs text-primary font-medium mb-2">
                    Even short link should have a good name and follow the
                    purpose from the real link to make a better shortlinks
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex-1 h-20 bg-muted rounded flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">
                        Preview
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="w-12 h-8 bg-primary/20 rounded" />
                      <div className="w-12 h-8 bg-muted rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </CustomCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
