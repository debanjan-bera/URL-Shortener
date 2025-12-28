import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addShortLinkForm: false,      
  sidebarOpen: false,
  drawerOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleAddTaskForm(state){
        state.addShortLinkForm = !state.addShortLinkForm;
    },
    toggleDrawer(state) {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const {
  toggleSidebar,
  toggleAddTaskForm,
  toggleDrawer
} = uiSlice.actions;

export default uiSlice.reducer;
