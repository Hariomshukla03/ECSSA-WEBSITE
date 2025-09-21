import { createSlice } from "@reduxjs/toolkit";

const winnerSlice=createSlice({
    name:"winner",
    initialState:[],
    reducers:{
        winners:(state,action)=>{
            return action.payload
        },
        editWinner:(state,action)=>{
            return action.payload
        },
        deleteWinner:(state,action)=>{
                state.filter((s)=>s._id!==action.payload)
        }
    }
})
export const {deleteWinner,editWinner,winners}=winnerSlice.actions
export default winnerSlice.reducer