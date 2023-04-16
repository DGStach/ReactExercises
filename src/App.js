import React, {Component} from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Gallery from "./components/Gallery/Gallery";

class App extends Component {

    constructor() {
        super();
        this.state = {
            route: "home"
        }
    }

    onRouteChange = (route) => {
        if (route === 'Gallery'){
            this.setState({route:route})
        }
        else{
            this.setState({route :'home'})
        }
    }

render(){
        const {route} = this.state;
    return (
        <div className="App">
            {route === 'Gallery'
                ? <div>
                    <Gallery/>
                    <NavBar onRouteChange={this.onRouteChange}/>
                </div>
                :<NavBar onRouteChange={this.onRouteChange}/>
            }
            <Gallery/>
        </div>
    );
}

}

export default App;
