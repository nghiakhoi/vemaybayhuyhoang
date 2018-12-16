import React, { Component } from 'react';

class LiComponentAir extends Component {
    render() {
        return (
            <li><a onClick={() => { this.props.clickLiComponent(this.props.depname, this.props.depfullname) }}  href="javascript:"><b>{this.props.depfullname}</b> <span>({this.props.depname})</span> </a></li>
        );
    }
}

export default LiComponentAir;