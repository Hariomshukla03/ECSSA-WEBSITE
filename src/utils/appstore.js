import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice"
import eventReducer from "./eventSlice";
import memberReducer from "./memberSlice"; 
import teacherReducer from "./teacherSlice"
import winnerReducer from "./winnerSlice"

const appStore=configureStore({
    reducer:{
        loginAdmin:loginReducer,
        events:eventReducer,
        members:memberReducer,
        teachers:teacherReducer,
        winners:winnerReducer
    }
})
export default appStore