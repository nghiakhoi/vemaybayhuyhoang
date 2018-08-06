import React, { Component } from 'react';
import HeaderBookingClone from './HeaderBookingClone';
import HeaderBooking from './HeaderBooking';
import BookingContent from './BookingContent';
import Footer from './Footer';

class Booking extends Component {
    render() {
        return (
            <div className="wrapper st-body">
                <HeaderBookingClone />
                <HeaderBooking />
                
                <BookingContent />
                <Footer />
            </div>

        );
    }
}

export default Booking;