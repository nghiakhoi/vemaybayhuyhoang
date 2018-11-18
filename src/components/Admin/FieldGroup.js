import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class FieldGroup extends Component {
    render() {
        return (
            <FormGroup controlId={this.props.id}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl componentClass="textarea" {...this.props} />
                {this.propshelp && <HelpBlock>{this.propshelp}</HelpBlock>}
            </FormGroup>
        );
    }
}

export default FieldGroup;