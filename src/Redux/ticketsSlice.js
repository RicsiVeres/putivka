import { createSlice } from '@reduxjs/toolkit';


export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: {
        items: [],
    },
    reducers: {
        addTicket: (state, action) => {
            state.items.push(action.payload);
        },
    },
});


export const { addTicket } = ticketsSlice.actions;


export default ticketsSlice.reducer;
