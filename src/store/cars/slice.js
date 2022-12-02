import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: 'cars',
    initialState: {
        all: [],
        carsFilter: [],
        selectCars: {
            select: [],
            counter: 0,
        },
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
        },
        setSelect: (state, action) => {
            if (!state.selectCars.select.includes(action.payload)) {
                state.selectCars.select.push(action.payload)
            }
            state.selectCars.counter = state.selectCars.select.length;
        },

        setSelectAll(state) {
            state.selectCars.select = state.carsFilter.map((car) => car.id)
        },

        setDeselectAll(state) {
            state.selectCars.select = []
        },


    },
});


export const {
    setAll,
    setSearch,
    setSelect,
    setSelectAll,
    setDeselectAll

} = carSlice.actions;

export default carSlice.reducer; 