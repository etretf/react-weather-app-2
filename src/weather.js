import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';
import FormattedDate from './FormattedDate';

export default function Weather(){
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity
        });
    }


    if (weatherData.ready) return(
        <div className="Weather">
            <form>
                <div className="row">
                   <div className="col-8">
                    <input type="text" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                </div>
                <div className="col-2">
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </div> 
                </div>
            </form>
            <div className="row">
            <div className="col-6">
            <h1>{weatherData.city}</h1>
            <h2> <FormattedDate /> </h2>
            <h3>{weatherData.description}</h3>
                <ul>
                <li>
                    Wind: {Math.round(weatherData.wind)} km/h
                </li>
                <li>
                    Humidity: {weatherData.humidity}%
                </li>
                <li>
                    Precipitation
                </li>
            </ul>
            </div>
            <div className="col-6">
            <div className="row">
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Sunny with rain"/>
            </div>
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
            </div>   
            </div>
        </div>
    )
    else {
         const apiKey="9f4d1fba994d4673c7cb4a10548bae9a";
    let city = "New York"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    } return ("Loading");
}