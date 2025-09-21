import { createSlice } from "@reduxjs/toolkit";

const teacherSlice=createSlice({
    name:"teacher",
    initialState:[],
    reducers:{
        teachers:(state,action)=>{
        
            return action.payload
        },
        editTeacher:(state,action)=>{
            return action.payload
        },
        deleteTeacher:(state,action)=>{
            return state.filter((s)=>s._id!==action.payload)
        }
    }
})
export const {teachers,deleteTeacher,editTeacher}=teacherSlice.actions
export default teacherSlice.reducer