import React from "react";

export class Home extends React.Component {
    render() {
        console.log(this.props);
        return (
               <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h2>Usage of props in ReactJS.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h3>Fetching plain values from App Component.</h3>
                        <p> Value is : {this.props.someString} and NumericValue is: {this.props.someNumeric}</p>  
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h3>Fetching user object from App Component.</h3>
                        <p>User Object => {this.props.userInfo.name} and age is : {this.props.userInfo.age}</p>
                        <div>
                            <h4>Hobbies:</h4>
                            <ul>
                                {this.props.userInfo.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h3>Fetching Childer from App Component.</h3>
                         {this.props.children}
                    </div>
                </div>
               </div>    
            );
    }
}

//Implicitly specifying the props data types, marking the element mandatory.
Home.propTypes = {
    someString: React.PropTypes.string,
    someNumeric: React.PropTypes.number,
    userInfo: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
}