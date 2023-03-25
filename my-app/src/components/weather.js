import React from "react";

//create component
const Weather = (props) => {
  return(          <div>
    { props.city &&
    <div className="infoWeath">
        <p>City: {props.city}, {props.country}</p>
        <p>Temperature: {props.temp} &deg;C</p>
        <p>Sunrise: {props.sunrise}</p>
        <p>Sunset: {props.sunset}</p>
    </div>
    }
    <p className="error">{props.error}</p> 
  </div> 
  );
}

export default Weather;