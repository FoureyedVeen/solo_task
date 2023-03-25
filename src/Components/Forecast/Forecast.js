import '../Forecast/Forecast.css';
import Details from './Details';
import cloudIcon from '../'


export default function Forecast() {
    return (
        <div className='container'>
            <div className='parameter-box'>
                <div className='row--1'>
                    <span id='city-name'>London</span>
                    <span>23/03/2023</span>
                </div> 
                {/* <div>weather description</div> */}
                <div className='weather-details'>
                    <p className='temp'>45°C</p>
                    <img className='weather-icon'></img>
                </div>
                <Details
            
                />
           </div> 
        </div>
    )
}

