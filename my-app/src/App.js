import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "7724a6df9ee2e8013130a348969c9ec4";

//create component
class App extends React.Component{

        const api_url = await 

        //get json from api response
        const data = await api_url.json();

        console.log(data);
    }

    //show html on the screen
    render(){
        return(
            //just one common tag
            <div>
                <Info/>
                <Weather/>
            </div>
        );        
    }
}

export default App;