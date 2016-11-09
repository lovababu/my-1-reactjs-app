import React from "react";

export class Home extends React.Component {
    render() {
        return (
                <p>
                    It is home component. <br/>
                    Arithatic Operation: {2 + 5} <br/>
                    Ternary Operation: { 5 ==3 ? "Yes" : "No"} <br/>
                </p>     
            );
    }
}