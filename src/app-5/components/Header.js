import React from "react";

//Declaring as Stateless Component.
export const Header = (props) => { 
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav nabar-nav">
                        <li>
                            <a href="#">{props.homeLink}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    ); 
}