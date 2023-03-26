import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../Api";


export default function SearchBar({onSearchChange}) {
    const [search, setSearch] = useState(null)
    
    function loadOptions(inputValue) {
        return fetch(
                `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
                geoApiOptions
        )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch(err => console.error(err));
    }


    function handleOnchange(searchData) {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
       
        <div className="search-bar">
             <AsyncPaginate 
                placeholder = "Search for city"
                className="input"
                debounceTimeout={800}
                value = {search}
                onChange = {handleOnchange}
                loadOptions = {loadOptions}
             />
        </div>
    )
};
