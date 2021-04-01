import React from 'react';
import './weather.css';

export default function Weather(){
    return(
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
            <h1>City</h1>
            <h2>Friday 12:00</h2>
            <h3>Sunny</h3>
                <ul>
                <li>
                    Wind
                </li>
                <li>
                    Humidity
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
            <span className="temperature">20</span>
            <span className="unit">°C</span>
            </div>   
            </div>
        </div>
    )
}