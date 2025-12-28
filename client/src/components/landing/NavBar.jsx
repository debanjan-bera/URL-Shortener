import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Menu, X } from "lucide-react";
import { useState } from "react";
import CustomButton from "../ui/CustomButton";

export const NavaBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg sm:text-xl font-bold"
          >
            {/* <Link2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" /> */}
            <img src="logo.png" alt="" className="h-10 aspect-square" />

            <span>SHORTIE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {["Home", "Product", "Pricing", "Dashboard"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link to="/login">
              <CustomButton variant="outline" size="sm">
                Login
              </CustomButton>
            </Link>
            <Link to="/register">
              <CustomButton size="sm">Get Started</CustomButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-accent/10 rounded-md transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-3">
                {["Home", "Product", "Pricing", "Dashboard"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="block text-sm font-medium px-4 py-2 rounded-md hover:bg-accent/10 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex gap-3 pt-2">
                  <Link
                    to="/login"
                    className="flex-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <CustomButton
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Login
                    </CustomButton>
                  </Link>
                  <Link
                    to="/register"
                    className="flex-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <CustomButton size="sm" className="w-full">
                      Get Started
                    </CustomButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
