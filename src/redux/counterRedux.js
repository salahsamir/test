import { createSlice } from "@reduxjs/toolkit";


let counter=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        increase: (state,action)=>{
               state.counter++
        },
        decrease: (state,action)=>{
            state.counter--
     }
    }
})
 export const counterReducer=counter.reducer
 export const {increase,decrease}=counter.actions