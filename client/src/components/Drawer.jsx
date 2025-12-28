import React from "react";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "./features/UI/uiReducers";
import { X } from "lucide-react";

export default function Drawer() {
  const dispatch = useDispatch();
  return (
    // bg-card
    // absolute
    <section className="fixed top-0 right-0 h-full w-full  z-50 flex ">
      <div
        className="bg-neutral-950/40  h-full flex-1 mr-96 flex items-center justify-center"
        onClick={() => dispatch(toggleDrawer())}>
        Full Section
      </div>
      <div className="fixed top-0 right-0 h-full  w-96  bg-card border-r border-border transform transition-transform duration-300 translate-x-0">
        <header className="p-4 bg-gray-50 border flex items-center justify-between">
          <h1 className="text-xl">INFO</h1>

          <div
            className="  p-2 bg-card border border-border rounded-lg"
            // onClick={()=> dispatch(toggleDrawer())}
          >
            <X size={24} />
          </div>
        </header>
      </div>
    </section>
  );
}
