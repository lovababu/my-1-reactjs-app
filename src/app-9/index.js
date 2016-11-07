import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
    render() {
        return (
           <Router history={browserHistory}>
            <Route path={"/avol"} component= { Root }>
                <IndexRoute component= { Home }/>
                <Route path= {"user/:id"} component= { User }/>
                <Route path= {"home"} component= { Home }/>
            </Route> 
           </Router>
        );
    }
}

render(<App/>, document.getElementById("app"));