    import { createSlice } from "@reduxjs/toolkit";

    const memberSlice=createSlice({
        name:"member",
        initialState:[],
        reducers:{
            members:(state,action)=>{
                return action.payload;
            },
            editMember:(state,action)=>{
                return action.payload
            },
            deleteMember:(state,action)=>{
                return state.filter(s=>s._id!==action.payload)
            }
        }
    })

    export const {members,editMember,deleteMember}=memberSlice.actions
    export default memberSlice.reducer