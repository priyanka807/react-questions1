import {createSlice} from '@reduxjs/toolkit';

const initialState  = { inc:0 ,dec:0 ,reset:null}

export  const counterSlice = createSlice({
name: 'counter',
initialState,
reducers:{
    incriment:(state)=>{
      state.inc +=1
    },
    decriment:(state)=>{
        state.dec -=1
    },
    reset:(state)=>{
        state.inc = 0
        state.dec = 0
    }
}


})

export const {incriment,decriment,reset}  = counterSlice.actions 

export default counterSlice.reducer