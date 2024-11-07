import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const floorSlice = createSlice({
    name:"addFloor",
    initialState:[false,false,false,false,false],
    reducers:{
        changeAccess :(state:boolean[], action: PayloadAction<number>) =>{
             state[action.payload] = !state[action.payload];
        }
    }

})

export default floorSlice.actions.changeAccess