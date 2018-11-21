import React, { Component } from 'react';

class ImageCell extends Component {
    render() {
        return (
            <td>
                <img style={{ width: "150px", height: "150px" }} src={this.props.cellData.value} />
            </td>
        );
    }
}

export default ImageCell;