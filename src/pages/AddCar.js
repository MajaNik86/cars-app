import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AddCarForm from "../components/AddCarForm";
import CarsService from '../services/CarsService'


export default function AddCar() {
    const YEARS = Array(2018 - 1990 + 1)
        .fill(1990)
        .map((el, index) => el + index);

    const history = useHistory();
    const { id } = useParams();

    const [newCar, setNewCar] = useState({
        brand: '',
        model: '',
        year: YEARS[0],
        maxSpeed: '',
        number_of_doors: '',
        isAutomatic: false,
        engine: '',
    });

    // submitovanje forme:
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ newCar })
        if (id) {
            CarsService.edit(id, newCar)
        } else {
            CarsService.add(newCar);
        }

        // redirektovanje na cars stranicu
        history.push('/cars');
    }
    // reset button:
    const handleReset = () => {
        setNewCar({
            brand: '',
            model: '',
            year: YEARS[0],
            maxSpeed: '',
            number_of_doors: '',
            isAutomatic: false,
            engine: '',
        })

    }
    // preview:
    const handlePreview = () => {
        alert(`
        brand: ${newCar.brand} 
        model: ${newCar.model} 
        year: ${newCar.year} 
        maxSpeed: ${newCar.maxSpeed} 
        isAutomatic: ${newCar.isAutomatic ? 'Yes' : 'No'} 
        number_of_doors: ${newCar.number_of_doors} 
        engine: ${newCar.engine} 
      `);
    }

    return (<div><h3>
        Add a new car:
    </h3>
        <AddCarForm
            newCar={newCar}
            setNewCar={setNewCar}
            onChange={handleSubmit}
            onReset={handleReset}
            onPreview={handlePreview} />
    </div>)
}