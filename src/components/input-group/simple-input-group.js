import React, { Component } from "react";
import "./simple-input-group.scss";

/**
 * Dead simple input group.
 * 
 * Can manage its state by it self, but then it would be a pain the access it.
 * 
 * Better that the parent manages it, by passing the field value and handler function.
 */
class SimpleInputGroup extends Component {

    state = {
        value: ""
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        const value = this.props.value || this.state.value;
        const onChange = this.props.onChange || this.handleChange;

        return <div className="simpleInputGroup">
            <div className="label">{this.props.label}</div>
            <input type="text" value={value} onChange={onChange} />
        </div>;
    }
}

export { SimpleInputGroup }