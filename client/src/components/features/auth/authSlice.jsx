import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload; // { name, email }
      state.isAuthenticated = true;

      // persist login
      // localStorage.setItem("authUser", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;

      // localStorage.removeItem("authUser");
    },

    restoreAuth: (state) => {
      try {
        const savedUser = localStorage.getItem("authUser");
        if (!savedUser) return;

        state.user = JSON.parse(savedUser);
        state.isAuthenticated = true;
      } catch (error) {
        console.log(error);
        localStorage.removeItem("authUser");
      }
    },
  },
});

export const { login, logout, restoreAuth } = authSlice.actions;
export default authSlice.reducer;
