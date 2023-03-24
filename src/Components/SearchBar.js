import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

export default function SearchBar() {
    const [search, setSearch] = useState(null)
     
    return (
       
        <div className="search-bar">
             <AsyncPaginate 
                placeholder = "Search for city"
                
             />
            {/* <input alt="Search" id="input" placeholder="Search your city"></input> */}
        </div>
    )
};
