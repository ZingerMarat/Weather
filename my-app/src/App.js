import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "7724a6df9ee2e8013130a348969c9ec4";

//create component
class App extends React.Component{

    //save data that getted from api
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    /*method that gets weather data async*/
    gettingWeather = async (e) => {
        e.preventDefault();     //cancels page reload on button click
        var city_name = e.target.elements.city.value

        if(city_name){
            const api_url = await 
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`);        
    
            //get json from api response
            const data = await api_url.json();

            var sunrise = data.sys.sunrise;
            var sunriseDate = new Date(sunrise * 1000); // convert seconds to milliseconds
            var sunrise_date = sunriseDate.toLocaleTimeString(); // format time string
            
            var sunset = data.sys.sunset;
            var sunsetDate = new Date(sunset * 1000); // convert seconds to milliseconds
            var sunset_date = sunsetDate.toLocaleTimeString(); // format time string

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: undefined
            });
        }else{
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Enter the city name"
            });
        }

    }

    //show html on the screen
    render(){
        return(
            //just one common tag
            <div>
                <Info/>
                <Form weatherMethod = {this.gettingWeather}/>
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                    />
            </div>
        );        
    }
}

export default App;