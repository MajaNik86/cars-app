// prvo ide state, pa onda ide ime koje stavljas kao name i onda naziv property-a

const allCars = (state) => state.cars.all;
const carsFilter = (state) => state.cars.carsFilter;
const selectSelect = (state) => state.cars.selectCars;
const selectPage = (state) => state.cars.page

export { allCars, carsFilter, selectSelect, selectPage }