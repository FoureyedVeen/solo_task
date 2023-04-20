import "../Forecast/Forecast.css";
import Details from "./Details";
import cloudIcon from "../../images/01d.png";
import SearchBar from "../SearchBar";
import { useState } from "react";

function Forecast() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  function handleOnSearchChange(searchData){
    // console.log(searchData)
  }
  
  const [selected, setSelected] = useState("")
  
  return (
    <>
      <SearchBar 
        onSearchChange={handleOnSearchChange}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="container">
        <div className="parameter-box">
          <div className="row--1">
            <span id="city-name">{selected}</span>
            <span>{date}</span>
          </div>
          {/* <div>weather description</div> */}
          <div className="weather-details">
            <div className="temp-container">
              <div className="temp-description">
                <p className="temp">45°C</p>
                <p className="temp-label">sunny</p>
              </div>
              <img src={cloudIcon} alt="cloud"></img>
            </div>
            
          </div>
          <div className="parameter-container">
            <Details label = "Wind" value = "45mm"/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Forecast;