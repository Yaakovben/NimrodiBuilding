import { configureStore } from "@reduxjs/toolkit"
import { floorSlice } from "./floorreducer"
import Floor from "../pages/Floor/Floor"
import { roleSlice } from "./Rolereducer"

export default configureStore({
    reducer:{
        floor:floorSlice.reducer,
        role:roleSlice.reducer
    }
})

export const {
    changeAccess,
    setRole
} = {
    ...floorSlice,
    ...roleSlice
}







