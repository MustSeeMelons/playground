import React, { Component } from "react";
import "./button.scss";

class Button extends Component {

    render() {
        return <div className="button-container">
            <button className="button" onClick={this.props.onClick} type="button">{this.props.label}</button>
        </div>;
    }
}

export { Button }