import React from 'react';
import WeatherIcon from './weatherIcon';


export default function WeatherForecastDay(props){

    function maxTemperature() {
        let temperature= Math.round(props.data.temp.max);
        return(`${temperature}`);
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return(`${temperature}`);
    }

    function day(){
        let date = new Date(props.data.dt*1000);
        let day = date.getDay(date);

        let days = [
            "Sun", "Mon", "Tue", "Wed", "Thu","Fri","Sat"
        ]; 
        

        return days[day];
    }

    return(
        <div className="WeatherForecastDay">
        <div className="forecast-one">
                    {day()}
                </div>
                <WeatherIcon code={props.data.weather[0].icon} size="50px"/>
                <div className="temperature-one">
                    <span className="temperature-one-max">{maxTemperature()}°</span>
                    <span className="temperature-one-min">{minTemperature()}°</span>
                </div>
        </div>
    )}