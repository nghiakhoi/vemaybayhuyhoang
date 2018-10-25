import React, { Component } from 'react';

class SanBay extends Component {
    render() {
        return (
            <li className="destination-menu-item " data-destination-slug={this.props.code} data-destination-backgroundimg={process.env.PUBLIC_URL+"/images/"+this.props.image}>
                <span>{this.props.name}<span className="caret theme-bg" /></span>
            </li>
        );
    }
}

export default SanBay;