import '../Forecast/Forecast.css';
import Details from './Details';
import cloudIcon from '../../images/cloudIcon.png'
import SearchBar from '../SearchBar';

export default function Forecast() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
        <div className='container'>
            <div className='parameter-box'>
                <div className='row--1'>
                    <span id='city-name'>{}</span>
                    <span>{date}</span>
                </div> 
                {/* <div>weather description</div> */}
                <div className='weather-details'>
                    <p className='temp'>45°C</p>
                    <img src={cloudIcon}></img>
                </div>
                <div className='parameter-container'>
                    <Details
                    image = ""
                    value = "45"
                    parameter = "Humidity"
                />
                <Details 
                    image = ""
                    value = "46"
                    parameter = "Wind"
                />
                <Details 
                    image = ""
                    value = "49mm"
                    parameter = "Rainfall"
                />
                </div>
                
           </div> 
        </div>
    )
}

