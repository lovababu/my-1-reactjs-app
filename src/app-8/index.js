import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeMounted: true
        }
    }

    onChangeHomeMount() {
        this.setState( {
            homeMounted: !this.state.homeMounted
        } );
    }

    render() {
        let homeComponent = "";

        if (this.state.homeMounted) {
            homeComponent = ( 
                <Home />
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink="Home"/> 
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h2> Describes the Stateless Component in ReactJS.</h2> 
                    </div>
                </div> 
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        { homeComponent }
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMount.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));