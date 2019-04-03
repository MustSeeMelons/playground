import React, { Component } from "react";
import "./spacer.scss";

class Spacer extends Component {
    render() {
        return <div className="spacer">{this.props.children}</div>
    }
}

export { Spacer };