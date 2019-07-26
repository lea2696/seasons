import React from "react"
import ReactDOM from "react-dom"



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={lat: null, error: null};
        window.navigator.geolocation.getCurrentPosition(
            position=>{this.setState({lat: position.coords.latitude})},
        (err)=> this.setState({error: err.message}));
    }
    render(){
        if(this.state.error && !this.state.lat){
            return  <div> Error: {this.state.error}</div>     
        }
         if(!this.state.error && this.state.lat){
             return <div>Latitude: {this.state.lat} </div>
             
         }
       return (
           <span>Loading</span>
       );
    }
}


ReactDOM.render(
    <App/>, document.querySelector("#root")
)