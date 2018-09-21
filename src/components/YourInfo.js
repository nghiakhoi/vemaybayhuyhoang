import React, { Component } from 'react';
import HeaderBooking from './HeaderBooking';
import Footer from './Footer';
import YourInfoContent from './YourInfoContent';

class YourInfo extends Component {
    render() {
        return (
            <div className="wrapper st-body">
                <HeaderBooking />
                <YourInfoContent />
                <Footer />
            </div>
        );
    }
}

export default YourInfo;