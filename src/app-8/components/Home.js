import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        console.log("I am in Home.Constructor.");
        this.state = {
            age: 11
        };
    }

    onIncrementAge() {
        this.setState({
            age: this.state.age + 10
        });
    }

    componentWillMount() {
        console.log("I am in Home.ComponentWillMount.");
    }

    componentDidMount() {
        console.log("I am in Home.ComponentDidMount.");
    }

    componentWillReceiveProps(nextProps) {
        console.log("I am in Home.ComponentWillReceiveProps.", nextProps);

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("I am in Home.ShouldComponentUpdate.", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("I am in Home.ComponentWillUpdate.", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("I am in Home.ComponentDidUpdate.", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("I am in Home.ComponentWillUnmount.");
    }

    render() {
        return(
            <div className="container">
                 <h4>This Home. age is : {this.state.age}</h4>
                 <button className="btn btn-primary" onClick= {this.onIncrementAge.bind(this)}>IncrementAge</button>
            </div>
        );
    }
}
