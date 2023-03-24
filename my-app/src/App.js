import React from "react";
import Info from "./components/info";

//create component
class App extends React.Component{
    //show html on the screen
    render(){
        return(
            //just one common tag
            <div>
                <Info/>
            </div>
        );        
    }
}

export default App;