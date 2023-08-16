import { createSlice } from "@reduxjs/toolkit";
import history from "../history";
import axios from "axios";



const initialTask=localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')):null
const initialState={
    TaskData:initialTask,
    AllTask:{},
}

export const taskSlice=createSlice({
    name:'Task',
    initialState,
    reducers:{
        taskAddedsuccessfully:(state,action)=>{
            state.TaskData=action.payload
         },
         taskAddFailure:(state)=>{
            return state
         },
         getAllTaskSuccess:(state,action)=>{
            state.AllTask=action.payload
         },
         getAllTaskFailure:(state)=>{
            return state
         },
         editTaskSuccess:(state,action)=>{
            state.TaskData=action.payload
         },
         deleteSuccess:(state,action)=>{
            state.TaskData=action.payload
         },
         deleteFail:(state)=>{
            return state
         },
    },
})


export const{
    taskAddedsuccessfully,taskAddFailure,getAllTaskSuccess,getAllTaskFailure,editTaskSuccess,deleteSuccess,deleteFail
}=taskSlice.actions

export default taskSlice.reducer