import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, LogOut, Menu, Plus, X,Link2} from "lucide-react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout();
    navigate("/login");
  };
  const navItems = [
    { label: "Dashboard", icon: Home, href: "/dashboard" },
    { label: "Create Link", icon: Plus, href: "/create-link" },
    { label: "My Link", icon: Link2, href: "/my-link" },

    // { label: "QR Generator", icon: QrCode, href: "/qr-generator" },
    // { label: "Manage QR", icon: List, href: "/manage-qr" },
    // { label: "Settings", icon: Settings, href: "/settings" },
  ];
  return (
    <>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden  absolute top-4 right-4 z-50 p-2 bg-card border border-border rounded-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                  : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              <item.icon size={20} />
              <span>
        {item.label}
              </span>
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
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
