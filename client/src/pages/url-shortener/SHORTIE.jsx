import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import CreateLink from "./createlink";
import { useState } from "react";

const SHORTIE = () => {
  const [openForm, isOpenForm] = useState(true);
  return (
    <>
      {/* <div className="min-h-screen bg-background flex">
        <Sidebar />
      <div className="fixed flex-1  top-0 left-0  z-50 bg-white w-full h-full">hello</div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div> */}
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

export default SHORTIE;
