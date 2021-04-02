import React from 'react';
import FormattedDate from './FormattedDate';


export default function WeatherDetail(props) {
 return(
     
    <div className WeatherDetail>
     <div className="row">
            <div className="col-6">
            <h1>{props.data.city}</h1>
            <h2> <FormattedDate date={props.data.date} /> </h2>
            <h3>{props.data.description}</h3>
                <ul>
                <li>
                    Wind: {Math.round(props.data.wind)} km/h
                </li>
                <li>
                    Humidity: {props.data.humidity}%
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
            <span className="temperature">{Math.round(props.data.temperature)}</span>
            <span className="unit">°C</span>
            </div>   
            </div>
        </div>
    )
}