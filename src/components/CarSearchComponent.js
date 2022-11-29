import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/cars/slice";


export default function CarSearchComponent() {
    const dispatch = useDispatch();

    return (<input type="text"
        placeholder="Search "
        onChange={({ target }) =>
            dispatch(setSearch(target.value))}
    />

    )
}


