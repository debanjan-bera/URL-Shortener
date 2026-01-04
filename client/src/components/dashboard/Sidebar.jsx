import React, { memo, useCallback, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, LogOut, Link2, QrCode, Settings } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/UI/uiReducers";
import { AnimatePresence, motion } from "framer-motion";

function Sidebar() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.ui.sidebarOpen);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    navigate("/login");
  }, [navigate]);
  const loginData = useSelector((state) => state.auth.user);

  const navItems = useMemo(
    () => [
      { label: "Dashboard", icon: Home, href: "/dashboard" },
      { label: "My Link", icon: Link2, href: "/my-link" },
      { label: "QR Generator", icon: QrCode, href: "/qr-generator" },
      { label: "Settings", icon: Settings, href: "/settings" },
    ],
    []
  );

  return (
    <>
      {/* Sidebar */}
        <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{
                          duration: 0.2,
          ease: "easeInOut",
        }}
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6 flex items-center gap-1.5">
          <img src="logo.png" alt="" className="h-10 aspect-square" />

          <h1 className="text-2xl font-bold text-primary">SHORTIE</h1>
        </div>
        <nav className="px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent/70 hover:text-foreground"
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <div className="mb-3 px-4"></div>
          <div>{loginData?.userName}</div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </motion.div>

    
        {isSidebarOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => dispatch(toggleSidebar())}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(Sidebar);
