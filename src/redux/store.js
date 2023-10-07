import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from './counterRedux.js';


export let store=configureStore({
    reducer:{
     counter: counterReducer
    }
})