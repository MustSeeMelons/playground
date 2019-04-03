import React, { Component } from "react";
import "./simple-state.scss";
import { SimpleInputGroup } from "../input-group/simple-input-group";
import { Button } from "../button/button";
import { Spacer } from "../spacer/spacer";
import { Validator } from "../../util/validator";

class SimpleStateModel {
    firstFieldModel;
    secondFieldModel;
    thirdField;
    fourthField;

    fields = {
        thirdField: {
            value: null,
            isValid: null,
            ref: null,
            validations: []
        },
        fourthField: {
            value: null,
            isValid: null,
            ref: null,
            validations: []
        }
    }

    constructor() {
        this.firstFieldModel = new FirstFieldModel();
        this.secondFieldModel = new SecondFieldModel();
        this.validator = new Validator();
    }
}

class FirstFieldModel {
    fields = {
        firstField: {
            value: null,
            isValid: null,
            ref: null,
            validations: []
        }
    }
}

class SecondFieldModel {
    fields = {
        secondField: {
            value: null,
            isValid: null,
            ref: null,
            validations: []
        }
    }
}

/**
 * Dead simple state management.
 */
class SimpleState extends Component {
    constructor(props) {
        super(props);
        this.model = new SimpleStateModel();
    }

    onClickHandlerSimpleStateFactory = (propName) => (event) => {
        this.setState({
            [propName]: event.target.value
        })
    }

    onContinue = () => {
        // TODO: Validate everything
    }

    render() {
        return <div className="simpleState">
            <Spacer>
                <SimpleInputGroup
                    value={this.model.firstFieldModel.fields.firstField.value}
                    onChange={this.onClickHandlerSimpleStateFactory("firstField")}
                    label="First Model" />
            </Spacer>
            <Spacer>
                <SimpleInputGroup
                    value={this.model.secondFieldModel.fields.secondField.value}
                    onChange={this.onClickHandlerSimpleStateFactory("secondField")}
                    label="Second Model" />
            </Spacer>

            <SimpleInputGroup
                value={this.model.fields.thirdField.value}
                onChange={this.onClickHandlerSimpleStateFactory("thirdField")}
                label="Third" />
            <SimpleInputGroup
                value={this.model.fields.fourthField.value}
                onChange={this.onClickHandlerSimpleStateFactory("fourthField")}
                label="Fourth" />
            <Button label="Continue" onClick={this.onContinue} />
        </div>
    }
}

export { SimpleState };