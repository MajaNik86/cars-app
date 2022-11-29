import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/slice'
// import authReducer from './auth/slice'
export default configureStore(
    {
        reducer: { cars: carsReducer }
    }
)