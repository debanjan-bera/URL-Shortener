import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  addShortLinkForm: false,      
  sidebarOpen: true,     
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleAddTaskForm(state){
        state.addShortLinkForm = !state.addShortLinkForm;
    }
  },
});

export const {
  toggleTheme,
  toggleSidebar,
  toggleAddTaskForm
} = uiSlice.actions;

export default uiSlice.reducer;
