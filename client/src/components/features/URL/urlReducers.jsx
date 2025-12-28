import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shortUrl: JSON.parse(localStorage.getItem("shortlink")) || [],
  qrCode: JSON.parse(localStorage.getItem("qrCode")) || [],
};

const urlSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    addUrl(state, action) {
      state.shortUrl.push(action.payload);
      localStorage.setItem("shortlink", JSON.stringify(state.shortUrl));
    },
    deleteUrl(state, action) {
      state.shortUrl = state.shortUrl.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("shortlink", JSON.stringify(state.shortUrl));
    },

    clearUrls(state) {
      state.shortUrl = [];
      localStorage.removeItem("shortlink");
    },
  },
});

export const { addUrl, deleteUrl, clearUrls } = urlSlice.actions;
export default urlSlice.reducer;
