import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        toggleStatus: false,
        loginStatus: false,
    },
    reducers: {
        toggleState(state) {
            state.toggleStatus = !state.toggleStatus;
        },
        loginState(state) {
            state.loginStatus = true
        }
    }
})
export const { toggleState, loginState } = toggleSlice.actions
export default toggleSlice.reducer