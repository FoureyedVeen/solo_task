// import { response } from "express";
import React, { useState } from "react";
// import AsyncSelect from 'react-select/async';
import { AsyncPaginate } from "react-select-async-paginate";

import { geoApiOptions, GEO_API_URL } from "../Api";


export default function SearchBar({onSearchChange}) {
    const [search, setSearch] = useState(null)
    
    async function loadOptions(inputValue) {
        console.log(inputValue)
        // const data = fetch (
        //         `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
        //         {...geoApiOptions}
        // )
        // .then(response => response.json())
        // .then(response => response.data)
        // .catch(err => console.error(err));
        const response = await fetch (
                `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
                geoApiOptions
        )
        const data = await response.json();
        const newData = data?.data?.map(element => {
        
            return {
                value: element.city,
                label: element.city
                
            }

         });
         console.log(newData)
        //  return [];
            return {
                options: newData || [],
                hasMore : true
            }
            // return {
            //     options:response.data.map((city)) => {
            //         value: `${data.city.latitude} ${data.city.longitude}`,
            //         label: `${response.city.name}, ${response.city.countryCode}`
            //     };
            // };
        // });
        // .catch(err => console.error(err));
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
                // loadOptions = {(inputValue, callBack)
                //     setTimeout(() => {
                //     callBack(loadOptions(inputValue));
                //     }, 1000);
                //     }
                // //     callBack(s(inputValue) || [])}
                // }
            
            />
        </div>
    )
};
