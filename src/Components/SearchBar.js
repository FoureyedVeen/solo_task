import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

export default function SearchBar() {
    const [search, setSearch] = useState(null)
     
    return (
       
        <div className="search-bar">
             <AsyncPaginate 
                placeholder = "Search for city"
                className="input"
                debounceTimeout={800}
                value = {search}
             />
        </div>
    )
};
