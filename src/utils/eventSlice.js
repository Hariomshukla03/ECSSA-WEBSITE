import { createSlice } from "@reduxjs/toolkit";

const eventSlice=createSlice({
    name:"Event",
    initialState:[],
    reducers:{
        events:(state,action)=>{
            return action.payload
        },
        editEvent:(state,action)=>{
            return action.payload
        },
        deleteEvent:(state,action)=>{
            return state.filter(s=>s._id!==action.payload)
    
        }
    }
})

export const {events,editEvent,deleteEvent }=eventSlice.actions
export default eventSlice.reducer