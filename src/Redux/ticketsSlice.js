import {createSlice} from '@reduxjs/toolkit';

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: {
        items: [],
    },
    reducers: {
        addTicket: (state, action) => {
            state.items.push(action.payload);
        },
        deleteTicket: (state, action) => {
            state.items = state.items.filter((_, index) => index !== action.payload);
        },
    },
});

export const {addTicket, deleteTicket} = ticketsSlice.actions;

export default ticketsSlice.reducer;
