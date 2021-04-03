import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './weatherIcon';
import WeatherConversion from './weatherConversion';

export default function WeatherDetail(props) {
 return(
     
    <div className="WeatherDetail">
     <div className="row">
            <div className="col-6">
            <h1>{props.data.city}</h1>
            <h2> <FormattedDate date={props.data.date} /> </h2>
            <h3>{props.data.description}</h3>
                <ul>
                <li>
                    Wind: <strong>{Math.round(props.data.wind)}</strong> km/h
                </li>
                <li>
                    Humidity: <strong>{props.data.humidity}%</strong>
                </li>
            </ul>
            </div>
            <div className="col-6">
            <div className="row">
                <div className="weatherIcon">                
                <WeatherIcon code={props.data.icon} alt={props.data.description} size="90px"/>
                </div>
            </div>
            <WeatherConversion celsius={props.data.temperature} />
            </div>   
            </div>
        </div>
    )
}