import { createSlice } from '@reduxjs/toolkit'
const initialState = {initialValue:0}
export const CounterSlice = createSlice({
    name:"Counter",
    initialState,//initial state
    reducers:{
        Increment : (state)=>{state.initialValue += 1} ,
        Decrement : (state)=>{state.initialValue -= 1} ,
        Reset :     (state)=>{state.initialValue = 0} ,
    }
})

export const{Increment, Decrement, Reset} = CounterSlice.actions;
export default CounterSlice.reducer;