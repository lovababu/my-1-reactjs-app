import React from "react";

export class Home extends React.Component {
    //ES6 
    constructor(props) {
        super();
        this.someNumeric = props.someNumeric;
    }

    incrementNumber() {
        this.someNumeric += 10;
        //Wouldn't it change the NumbericValue in Html?, it would with State. look at app-4.
        console.log(this.someNumeric);
    }

    render() { 
        return (
               <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h2>Usage of props and attachign events in ReactJS.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h3>Fetching plain values from App Component and attaching event.</h3>
                        <p> Value is : {this.props.someString} and NumericValue is: {this.props.someNumeric}</p>  
                    </div>
                </div> 
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick= { () => this.incrementNumber() } className="btn btn-primary">IncrementNumber</button>
                    </div>
                </div>
               </div>    
            );
    }
}
//onClick = {this.incrementNumber.bind(this)}, alternative @Line 31.
//Implicitly specifying the props data types.
Home.propTypes = {
    someString: React.PropTypes.string,
    someNumeric: React.PropTypes.number
}