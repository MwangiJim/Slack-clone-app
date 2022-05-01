import { createSlice } from "@reduxjs/toolkit";


export const reducerSlice = createSlice({
   name:'slackPost',
   initialState:{
       Posts:[
         
       ],
       Channels:[

       ],
       UserCredentials:{

       }
   },
   reducers:{
       AddPost:(state,action)=>{
           return{
               ...state,
               Posts:[...state.Posts,action.payload]
           }
       },
       AddChannel:(state,action)=>{
           return{
               ...state,
               Channels:[...state.Channels,action.payload]
           }
       },
       UserCred:(state,action)=>{
           return{
               ...state,
               UserCredentials:action.payload
           }
       }
   }
})

export const {AddPost,AddChannel,UserCred} = reducerSlice.actions
export default reducerSlice.reducer