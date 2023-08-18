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

export default taskSlice.reducer;

export const addTask=(task,id)=>async(dispatch)=>{
   // console.log(task,id,"task");

   const taskData={
      task,
      id,
   }
   const response=await axios.post("http://localhost:3000/task/add",taskData)
   // console.log(response);
   if(response){
      localStorage.setItem('task',JSON.stringify(response.data))
      dispatch(taskAddedsuccessfully(response.data))
      window.location.reload()
   }else{
      dispatch(taskAddFailure())
   }
}


export const getAllTasks=(token,id)=>async(dispatch)=>{

   const config={
      headers:{
         Authorization:`Bearer ${token}`
      },
      params:{
         
         id,
      }, 
   }
   try {


      let response= await axios.get("http://localhost:3000/task/tasks",config)
     console.log(response.data);
      if(response){
         dispatch(getAllTaskSuccess(response.data))
      }
   } catch (error) {

      if(error.response.status===400){
         dispatch(getAllTaskFailure())
      }
      
   }
}

export const arrowClick=(item,string)=>async()=>{

   let taskData={
      id:item._id,
      status:item.status,
      string,
   }

   try {
      let response= await axios.put(`http://localhost:3000/task/${taskData.id}`,taskData)
      if(response){
         window.location.reload()
      }
   } catch (error) {
      console.log(error);
   }
}

