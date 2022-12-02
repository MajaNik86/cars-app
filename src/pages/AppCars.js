import React, { useState, useEffect } from "react"
import CarsService from '../services/CarsService'
import { useDispatch, useSelector } from "react-redux";
import { setAll } from "../store/cars/slice";
import { allCars } from "../store/cars/selector";
import { Link } from "react-router-dom";
import SingleCarComponent from '../components/SingleCarComponent';
import { carsFilter } from "../store/cars/selector";
import { setSelectAll } from "../store/cars/slice";
import { setDeselectAll } from "../store/cars/slice";




export default function Cars() {
    // const [cars, setCars] = useState();
    const dispatch = useDispatch();
    // const cars = useSelector(allCars);
    const cars = useSelector(carsFilter);


    const handleGetCars = async () => {
        const cars = await CarsService.getAll();
        // setCars(cars.data);
        dispatch(setAll(cars.data));

    }
    useEffect(() => {
        handleGetCars();
    }, [])



    return <div>

        <h3>List of cars:</h3>
        {/* <ul>
            {cars && cars.map((car) => (<Link to={`/cars/${car.id}`} key={car.id}>
                <li >
                    {car.brand}
                    <button >Edit</button>
                </li>
            </Link>))}
        </ul> */}
        <button onClick={() => dispatch(setSelectAll())}>Select All</button>
        <button onClick={() => dispatch(setDeselectAll())}>Deselect All</button>
        {(cars && cars.length != 0) ?
            <ul>
                {cars &&
                    cars.map((car) => (
                        // <li
                        //     key={car.id}>
                        <SingleCarComponent
                            key={car.id}
                            brand={car.brand}
                            model={car.model}
                            year={car.year}
                            maxSpeed={car.maxSpeed}
                            isAutomatic={car.isAutomatic}
                            engine={car.engine}
                            number_of_doors={car.number_of_doors}
                        />

                        // </li>
                    ))
                } </ul >
            : "no such car"}

    </div >
}