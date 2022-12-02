import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const carSlice = createSlice({
    name: 'cars',
    initialState: {
        all: [],
        carsFilter: [],
        selectCars: {
            select: [],
            counter: 0,
        },
        sort: [],
        page: {
            current_page: 1,
            cars_per_page: 3
        },
        currentCar: null
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

        setSortByBrandAsc(state) {
            state.sort = state.carsFilter.sort((a, b) =>
                (a.brand > b.brand) ? 1 : -1)
        },

        setSortByBranDesc(state) {
            state.sort = state.carsFilter.sort((a, b) =>
                (a.brand > b.brand) ? -1 : 1)
        },

        setSortByMaxSpeedAsc(state) {
            state.sort = state.carsFilter.sort((a, b) =>
                (a.maxSpeed - b.maxSpeed))
        },

        setSortByMaxSpeedDesc(state) {
            state.sort = state.carsFilter.sort((a, b) =>
                (b.maxSpeed - a.maxSpeed))
        },
        setPaginated(state, action) {
            state.page.current_page = action.payload
        },
    },
});


export const {
    setAll,
    setSearch,
    setSelect,
    setSelectAll,
    setDeselectAll,
    setSortByBrandAsc,
    setSortByBranDesc,
    setSortByMaxSpeedAsc,
    setSortByMaxSpeedDesc,
    setPaginated

} = carSlice.actions;

export default carSlice.reducer; 