import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: 'cars',
    initialState: {
        all: [],
        carsFilter: [],
    },
    reducers: {

        setAll: (state, action) => {
            state.all = action.payload;
            state.carsFilter = [...action.payload];
        },
        setSearch: (state, action) => {
            state.carsFilter = state.all.filter((car) =>
                car.brand.toLowerCase().includes(action.payload.toLowerCase()) ||
                car.model.toLowerCase().includes(action.payload.toLowerCase()))
        }

    },
});


export const {
    setAll,
    setSearch,
} = carSlice.actions;

export default carSlice.reducer; 