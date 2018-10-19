import React, { Component } from 'react';

class TextCell extends Component {
    render() {
        return (
            <td>
                <p style={{color:this.props.formatText?this.props.formatText:"black"}}>{this.props.cellData.value}</p>
            </td>
        );

    }
}

export default TextCell;