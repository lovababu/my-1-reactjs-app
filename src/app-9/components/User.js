import React from "react";
import { browserHistory } from "react-router";
export class User extends React.Component {

    onGoHome() {
        browserHistory.push("/avol/home");
    }
    render() {
        return(
            <div>
                <h2> User component.</h2>
                <h3> User ID: {this.props.params.id}</h3>
                <hr/>
                <button onClick={this.onGoHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}