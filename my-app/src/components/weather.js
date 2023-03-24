import React from "react";

//create component
class Weather extends React.Component{
    render(){
        return(
          <div>
            { this.props.city &&
            <div>
                <p>City: {this.props.city}, {this.props.country}</p>
                <p>Temperature: {this.props.temp} &deg;C</p>
                <p>Sunrise: {this.props.sunrise}</p>
                <p>Sunset: {this.props.sunset}</p>
            </div>
            }     
          </div>  
        );
    }
}

export default Weather;