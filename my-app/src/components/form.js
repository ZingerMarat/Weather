import React from "react";

//create component
class Form extends React.Component{
    render(){
        return(
          <form onSubmit={this.props.weatherMethod}>
            <input type="text" name="city" placeholder="Enter City"/>
            <button>Get Weather</button>
          </form>
        );
    }
}

export default Form;