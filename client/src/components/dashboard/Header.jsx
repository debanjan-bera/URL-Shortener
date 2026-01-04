import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/UI/uiReducers";
import { Bell, Menu, Search, X } from "lucide-react";

function Header() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.ui.sidebarOpen);
  return (
    <header className="bg-white border-b border-gray-200 p-4 lg:px-8 py-4 sticky top-0 z-20">
      <div className="flex items-center justify-between gap-2 ">
        <div className="w-10 h-10 rounded-full lg:hidden overflow-hidden">
          <img src="logo.png" alt="" />
        </div>
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search links, QR codes..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-200/60 rounded-lg">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3 ">
            <div className="hidden sm:block w-10 h-10 rounded-full overflow-hidden">
              <img src="image.png" alt="" />
            </div>
            <div className="hidden lg:block">
              <div className="font-semibold text-sm">Debanjan</div>
              <div className="text-xs text-gray-500">deba@gmail.com</div>
            </div>
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="lg:hidden p-2 bg-card border border-border rounded-lg"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default memo(Header);
