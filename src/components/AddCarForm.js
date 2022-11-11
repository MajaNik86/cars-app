import React from "react";
import classes from "./AddCar.module.css";




export default function AddCarForm({ newCar, setNewCar, onChange }) {

    const years = (start = 1990, end = 2018) => {
        return Array.apply(0, Array(end - start + 1)).map(
            (element, index) => index + start
        );
    };
    const engines = ['diesel', 'petrol', 'electric', 'hybrid']

    return (
        <div>
            <form className={classes.form} onSubmit={onChange}>
                <div className={classes.control}>
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" value={newCar.brand} onChange={({ target }) =>
                        setNewCar({ ...newCar, brand: target.value })} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" value={newCar.model} onChange={({ target }) =>
                        setNewCar({ ...newCar, model: target.value })} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="year">Select Year:</label>
                    <select name="year" id="year" value={newCar.year} onChange={({ target }) =>
                        setNewCar({ ...newCar, year: Number(target.value) })}>
                        {years().map((year, index) => (
                            <option key={index} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="maxspeed">MaxSpeed:</label>
                    <input type="number" id="maxspeed" value={newCar.maxSpeed} onChange={({ target }) =>
                        setNewCar({ ...newCar, maxSpeed: target.value })
                    } />
                </div>
                <div className={classes.control}>
                    <label htmlFor="doors">Number of doors:</label>
                    <input type="number" id="doors" value={newCar.numberOfDoors} onChange={({ target }) =>
                        setNewCar({ ...newCar, numberOfDoors: target.value })
                    } />
                </div>
                <span>
                    <label>Is automatic?</label>
                    <input
                        type='checkbox'
                        checked={newCar.isAutomatic}
                        onChange={({ target }) => {
                            setNewCar({ ...newCar, isAutomatic: target.checked });
                        }}
                    />
                </span>

                <div>
                    <h4>Pick engine:</h4>
                    {engines.map((engine, index) => (
                        <span key={index}>
                            <input
                                type='radio'
                                name='engine'
                                required
                                checked={engine === newCar.engine}
                                value={engine}
                                onChange={() => setNewCar({ ...newCar, engine })}
                            />
                            {engine.toUpperCase()}
                        </span>
                    ))}
                </div>
                <div className={classes.actions}>
                    <button className="btn" type="submit">Add Car</button>
                </div>
            </form>
        </div>
    );
}