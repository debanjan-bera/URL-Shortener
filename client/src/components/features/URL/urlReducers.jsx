import { createSlice } from "@reduxjs/toolkit";


const urlSlice = createSlice({
    name: "link",
    initialState : {
    shortUrl: []
},
    reducers:{
        addUrl(state,action){
            state.shortUrl.push(action.payload)
        },
        deleteUrl(state,action){
            state.shortUrl = state.shortUrl.filter((_,ind)=> ind != action.payload)
        }
    }

})

export const {addUrl,deleteUrl} = urlSlice.actions

export default urlSlice.reducer