import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from '../data/roles.json'


export const roleSlice = createSlice({
    name:"addRole",
    initialState: "Unknown Personnel",
    reducers:{
        setRole :(state:string, action:PayloadAction<number>) =>{
            if (action.payload > 4) {
                 state = data[action.payload]
            }

        }
    }
})
export default roleSlice.actions.setRole
