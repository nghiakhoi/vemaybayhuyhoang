import React, { Component } from 'react';

class EditableCell extends Component {
    render() {
        return (
            <td>
                <input type='text' className="form-control"  name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate} />
            </td>
        );

    }
}

export default EditableCell;