import React from "react";
import { useDispatch } from "react-redux";
import { setSelect } from "../store/cars/slice";
import { useSelector } from "react-redux";
import { selectSelect } from "../store/cars/selector";

export default function SingleCarComponent({
    id,
    brand,
    model,
    year,
    maxSpeed,
    isAutomatic,
    engine,
    number_of_doors,
}) {
    const dispatch = useDispatch();
    const selectCar = useSelector(selectSelect);

    // return (
    // <div key={id}>

    //         <li style={{
    //             border: "1px solid " + (selectCar.select.includes(id) ? "red" : 'white'),
    //         }}>
    //             <h3>Brand: {brand}</h3>
    //             <h3>Model: {model}</h3>
    //             <h3>Year: {year}</h3>
    //             <h3>Max Speed: {maxSpeed}</h3>
    //             <h3>Automatic: {isAutomatic}</h3>
    //             <h3>Engine: {engine}</h3>
    //             <h3>Numer Of Doors: {number_of_doors}</h3>
    //             {/* <button onClick={() => handleEditCar(id)}>Edit</button>
    //         <button onClick={() => handleDeleteCar(id)}>Delete</button> */}
    //             <button onClick={() => dispatch(setSelect(id))}>Select</button>
    //         </li>

    // </div>);
    return (
        <li style={{
            border: "2px solid " + (selectCar.select.includes(id) ? " teal" : 'white')
        }}>
            <p>
                Car brand: <strong>{brand}</strong>
            </p>
            <p>
                Car model: <strong>{model}</strong>
            </p>
            <p>
                Car year: <strong>{year}</strong>
            </p>
            <p>
                Car max speed: <strong>{maxSpeed}</strong>
            </p>
            <p>
                Car is automatic: <strong>{isAutomatic}</strong>
            </p>
            <p>
                Car engine: <strong>{engine}</strong>
            </p>
            <p>
                Car number of doors: <strong>{number_of_doors}</strong>
            </p>
            <button onClick={() => dispatch(setSelect(id))}>Select</button>
        </li>
    );
}
