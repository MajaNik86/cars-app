import React, { useState, useEffect } from "react"
import CarsService from '../services/CarsService'

export default function Cars() {
    const [cars, setCars] = useState();


    const handleGetCars = async () => {
        const cars = await CarsService.getAll();
        setCars(cars.data);

    }
    useEffect(() => {
        handleGetCars()
    }, [])



    return <div>
        <h3>List of cars:</h3>
        <ul>
            {cars && cars.map((car) => (<li key={car.id}>{car.brand} <button >Edit</button></li>))}
        </ul>
    </div>
}