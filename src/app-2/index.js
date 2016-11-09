import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        var user = {
            name: "Srilekha",
            age: 11,
            address: "AndhraPradesh",
            hobbies: ["Cycling", "MobileGames", "WatchingTV"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div> 
                </div> 
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home userInfo={ user } someString={ "some String" } someNumeric={50}>
                            <p>This is child Element to Home component.</p>
                        </Home>
                    </div> 
                </div> 
            </div> 
        );
    }
}

render(<App/>, document.getElementById("app"));