import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import CreateLink from "./createlink";
import { memo } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/dashboard/Header";
import Drawer from "../../components/Drawer";

const SHORTIE = () => {
  // const [openForm, isOpenForm] = useState(false);

  const isOpen = useSelector((state) => state.ui.addShortLinkForm);
  const isDrawerOpen = useSelector((state) => state.ui.drawerOpen)
  return (
    <>
      <div
        className={` bg-background flex ${
          isOpen || isDrawerOpen? "h-screen overflow-hidden" : "min-h-screen"
        }`}
      >
        <Sidebar />
        {/* Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <CreateLink />
          </div>
        )}

        {/* Main Content */}
        <main className="w-full bg-gray-50  max-w-6xl mx-auto flex-1 lg:ml-64 ">
          {/* <header className="bg-red-300 h-[5vh]">Hello</header> */}
          <Header />
          <section className="w-full px-4 py-8 sm:p-6 lg:px-8 lg:py-5 ">
            <Outlet />
          </section>
        </main>
        {isDrawerOpen&&<Drawer/>}
      </div>
    </>
  );
};

export default memo(SHORTIE);
