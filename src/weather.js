import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';
import WeatherDetail from './weatherDetail';

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }
    function handleSubmit(event){
        event.preventDefault();        
        search();
    }

     function handleCityChange(event) {
        setCity(event.target.value);}

    function search() {
        const apiKey="9f4d1fba994d4673c7cb4a10548bae9a";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);}

    if (weatherData.ready) return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                   <div className="col-8">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
                </div>
                <div className="col-2">
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </div> 
                </div>
            </form>
            <WeatherDetail data={weatherData}/>
            </div>)
    else {
        search();
        return ("Loading");
    } 
}