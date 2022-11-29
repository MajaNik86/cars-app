import React from "react";

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

    return (
        <div key={id}>

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
            <hr />
        </div>
    );
}