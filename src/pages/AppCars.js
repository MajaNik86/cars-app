import React, { useState, useEffect } from "react"
import CarsService from '../services/CarsService'

export default function Cars() {

    const [cars, setCars] = useState();
    const handleGetCars = async () => {
        const cars = await CarsService.getAll();
        setCars(cars);

    }
    useEffect(() => {
        handleGetCars()
    }, [])



    return <div>
        <ul>
            {cars && cars.map((car) => (<li key={car.id}>{car.brand}</li>))}
        </ul>
    </div>
}