import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>
                    <p className="title">The fancy site.</p>
                </div>
            </div>
        );
    }
}

export default Header;