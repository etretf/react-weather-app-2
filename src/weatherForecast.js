import React, {useState} from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './weatherForecastDay';

export default function WeatherForecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        return (
        <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function (dailyForecast, index) {
                if (index<5) {
                    return(
            <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast}/>
            </div>);
                } else {
                    return (null);
                }
        })}

        </div>
    </div>
    );
}
    else    {
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;    
    let apiKey="f5554cc82775bb494d56ba2c36c0c5f3";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
   

    return null;
    }
}