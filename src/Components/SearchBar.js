import React, { useState } from "react";
import { geoApiOptions, GEO_API_URL } from "../Api";
import AsyncSelect from 'react-select/async'



export default function SearchBar({onSearchChange,setSelected,selected}) {
    // const [search, setSearch] = useState(null)

    // const [selected, setSelected] = useState("")
    
    
    async function loadOptions(inputValue, callback) {
    
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
            geoApiOptions
        )
        .then((response) => response.json())
        .then((response) => {
            
            console.log(response.data, response)
            if (response?.data){
                const data = response.data.map(city =>{
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: city.name
                    }
                    
                })    
                callback(data)
                console.log(data)
            }
            
            
        })
            // if (response?.data){
            //     const data=response.data.map(item =>{
            //         return{
            //             label:item.city,
            //             value: item.city
            //         }
            //     })
            //     callback(data)
            // } 
           
           
           
       
        .catch(err => console.error(err));
    }


    // function handleOnchange(searchData) {
    //     setSearch(searchData);
    //     onSearchChange(searchData);
    // };

    function handleNameChange(event) { 
        setSelected(event.label)
    }

    return (
       
        <div className="search-bar">
            <AsyncSelect cacheOptions 
                loadOptions={loadOptions} defaultOptions 
                className="input" 
                onChange={handleNameChange}
                value= {{value:selected,label:selected}}
            />
            
        </div>
    )
};
