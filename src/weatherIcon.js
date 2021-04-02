import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {

    const codeMapping= {
        "01d":"CLEAR_DAY",
        "02d":"PARTLY_CLOUDY_DAY",
        "03d":"CLOUDY",
        "04d":"PARTLY_CLOUDY_DAY",
        "09d":"RAIN",
        "10d":"RAIN",
        "11d":"RAIN",
        "13d":"SNOW",
        "50d":"FOG",
        "01n":"CLEAR_NIGHT",
        "02n":"CLOUDY",
        "03n":"PARTLY_CLOUDY_NIGHT",
        "04n":"PARTLY_CLOUDY_NIGHT",
        "09n":"RAIN",
        "10n":"RAIN",
        "11n":"RAIN",
        "13n":"SNOW",
        "50n":"FOG" }

    return (
       
  <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="#2f4499"
    size="90"
    animate={true}
    />
    )
}