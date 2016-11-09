import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor() {
        super();
        this.msg = "Hello, this App Component.";
    }
    //this method get invoked by Home components. Ref @Line 26.
    goGreet() {
        alert(this.msg);
    }
    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink= "HOME"/>
                    </div> 
                </div> 
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home someString={ "some String" } someNumeric={50} greet={this.goGreet.bind(this)}/>
                    </div> 
                </div> 
            </div> 
        );
    }
}

render(<App/>, document.getElementById("app"));