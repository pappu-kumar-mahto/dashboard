import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        status: false
    },
    reducers: {
        toggleState(state) {
            state.status = !state.status;
        }
    }
})
export const { toggleState } = toggleSlice.actions
export default toggleSlice.reducer