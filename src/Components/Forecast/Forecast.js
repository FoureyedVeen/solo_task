import '../Forecast/Forecast.css';
import Details from './Details';

export default function Forecast() {
    return (
        <div className='container'>
            <p>City name</p>
            <div>weather description</div>
            <div className='weather-details'>
                <img className='weather-icon'></img>
                <h3 className='temp'>45 Degrees</h3>
            </div>
           <Details
    
           />
            
        </div>
    )
}

