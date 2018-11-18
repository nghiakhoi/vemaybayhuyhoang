import React, { Component } from 'react';

class ImageCell extends Component {
    render() {
        return (
            <td>
                <img src={this.props.cellData.value} />
            </td>
        );
    }
}

export default ImageCell;