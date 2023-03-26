import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../Api";


export default function SearchBar({onSearchChange}) {
    const [search, setSearch] = useState(null)
    
    const handleOnchange(searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    }



    return (
       
        <div className="search-bar">
             <AsyncPaginate 
                placeholder = "Search for city"
                className="input"
                debounceTimeout={800}
                value = {search}
                onChange = {handleOnchange}
             />
        </div>
    )
};
