import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./components/features/URL/urlReducers"
import uiReducer from "./components/features/UI/uiReducers"
import authReducer from "./components/features/auth/authSlice"
// const taskReducer = createSlice({
//   name: "task",
//   initialState : {
//     task: []
// },
//   reducers: {
//     addData(state,action){
//         state.task.push(action.payload)
//         // state.task = [...state.task,action.payload]
//     },
//     deleteData(state,action){
//         state.task = state.task.filter((_,ind)=> ind !== action.payload)
//     },

//   },
// });



export const store = configureStore({
  reducer: {
    // task : taskReducer.reducer,
    url: urlReducer,
    ui: uiReducer,
    auth: authReducer,
  },
});

// console.log(store.dispatch(addData("Hello world")));

// const actions = taskReducer.actions;
// export default actions;
