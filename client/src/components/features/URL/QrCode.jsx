import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  qrCode: JSON.parse(localStorage.getItem("qrCode")) || [],
};

const qrSlice = createSlice({
  name: "qr",
  initialState,
  reducers: {
    addQr(state, action) {
      state.qrCode.push(action.payload);
      localStorage.setItem(
        "qrCode",
        JSON.stringify(state.qrCode)
      );
    },
deleteQr(state, action) {
      state.qrCode = state.qrCode.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("qrCode", JSON.stringify(state.qrCode));
    },

    clearQrs(state) {
      state.qrCode = [];
      localStorage.removeItem("qrCode");
    },
  },
});

export const { addQr, deleteQr, clearQrs} = qrSlice.actions;
export default qrSlice.reducer;
