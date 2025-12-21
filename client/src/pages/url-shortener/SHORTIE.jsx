import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import CreateLink from "./createlink";
import { memo, useState } from "react";

const SHORTIE = () => {
  const [openForm, isOpenForm] = useState(false);
  return (
    <>
      <div
        className={` bg-background flex ${
          openForm ? "h-screen overflow-hidden" : "min-h-screen"
        }`}
      >
        <Sidebar />

        {/* Overlay */}

        {openForm && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <CreateLink />
          </div>
        )}

        {/* Main Content */}

        <main className=" w-full max-w-6xl mx-auto px-4 py-8 flex-1 lg:ml-64 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default memo(SHORTIE);
