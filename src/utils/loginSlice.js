import { createSlice } from "@reduxjs/toolkit"

const loginSlice=createSlice({
    name:"login",
    initialState:false,
    reducers:{
        login:(state,action)=>{
            return action.payload
        },
        logout:(state)=>{
            return true
        }
    }
})

export const {login,logout}=loginSlice.actions;
export default loginSlice.reducer;