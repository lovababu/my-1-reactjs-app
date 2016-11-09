import React from "react";

export class Home extends React.Component {
    //ES6 
    constructor(props) {
        super();
        this.state = {
            someNumeric: props.someNumeric,
            status: 0
        };
    }

    incrementNumber() { 
        //change the state whenever button pressed.
        this.setState({
            someNumeric: this.state.someNumeric + 10
        });
    }

    onChanageHomeLink(e) {   
        this.props.changeHomeLink(e.target.value);
    }

    render() { 
        return (
               <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h2>Demonistrating Two way binding in ReactJS.</h2>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h3>Fetching plain values from App Component and attaching event.</h3>
                        <p> Value is : {this.props.someString} and NumericValue is: {this.state.someNumeric} and status: {this.state.status}</p>  
                    </div>
                </div> 
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick= { () => this.incrementNumber() } className="btn btn-primary">IncrementNumber</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h3>Value change in This Component will pass to App Component.</h3>
                        <input type="text" value= { this.props.initialHomeLink} 
                            onChange = { (event) => this.onChanageHomeLink(event) } />
                    </div>
                </div>
               </div>    
            );
    }
}
//onClick = {this.incrementNumber.bind(this)}, alternative @Line 40.
//Implicitly specifying the props data types.
Home.propTypes = {
    someString: React.PropTypes.string,
    someNumeric: React.PropTypes.number,
    initialHomeLink: React.PropTypes.string,
    greet: React.PropTypes.func,
    changeHomeLink: React.PropTypes.func
}