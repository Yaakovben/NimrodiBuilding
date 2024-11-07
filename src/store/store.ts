import { configureStore } from "@reduxjs/toolkit"
import { floorSlice } from "./floorreducer"
import Floor from "../pages/Floor/Floor"
import { roleSlice } from '../store/rolereducer'

export default configureStore({
    reducer:{
        floorAccess:floorSlice.reducer,
        role:roleSlice.reducer
    }
})

export const {
    changeAccess,
    setRole,
} = {
    ...roleSlice.actions,
    ...floorSlice.actions
}







