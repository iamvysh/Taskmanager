import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import history from "../history"



const initialUser=localStorage.getItem('auth')?
                    JSON.parse(localStorage.getItem('auth'))
                    :null;
const initialState={
    isLoading:false,
    currentUser:initialUser,
    error:null,
}

export const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        loginSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.isLoading=false;

        },
        loginFailure:(state,action)=>{
            state.error=action.payload;
        },
        registerSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.isLoading=false;

        },
        registerFailure:(state,action)=>{
            state.error=action.payload;
        },
        logoutSuccess:(state)=>{
            state.currentUser=null;
        },
    },
});

export const {loginSuccess,loginFailure,registerSuccess,registerFailure,logoutSuccess}=authSlice.actions;

export default authSlice.reducer


export const register=(user)=>async(dispatch)=>{
       console.log(user)
    try {
        const formdata=new  FormData()

        formdata.append('username',user.username)
        formdata.append('email',user.email)
        formdata.append('password',user.password)
    
        const config = {
            headers: {
                'Content-Type': 'application/json', // Corrected header name
            },
        };
        

        const response=await axios.post('http://localhost:3000/auth/register',
        formdata,
        config)

        if(response){
            dispatch(registerSuccess(response.data))
            history.push("./signin")
            window.location.reload()
            
        }else{
            dispatch(registerFailure())
        }
    } catch (error) {
        dispatch(registerFailure())
        
    }

}

export const signin=(user)=>async(dispatch)=>{
    try {
        const userData={
            email:user.email,
            password:user.password
        }
        
        const response=await axios.post("http://localhost:3000/auth/signin",
        userData
        )

         console.log(response.data);
        if(response){
              localStorage.setItem('auth',JSON.stringify( response.data))
            dispatch(loginSuccess(response.data))
            history.push("/dashboard")
            window.location.reload()
        }else{
            dispatch(loginFailure())
        }


    } catch (error) {
        
            dispatch(loginFailure())

    }
}