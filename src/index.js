import React from "react"
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading"



class App extends React.Component{
    state={lat: null, error: null};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>this.setState({lat: position.coords.latitude}), 
        (err)=> this.setState({error: err.message}));

    }
    renderCondicional(){
        if(this.state.error && !this.state.lat){
            return  <div> Error: {this.state.error}</div>     
        }
         if(!this.state.error && this.state.lat){
             return <SeasonDisplay lat={this.state.lat} />
             
         }
       return (
           <Loading message="Por favor acepta la ubicacion" />
       );
    }
    render(){
        return(
      <div>
          {this.renderCondicional()}
      </div>

        )
    }
}


ReactDOM.render(
    <App/>, document.querySelector("#root")
)