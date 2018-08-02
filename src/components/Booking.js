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
                <div className="page-heading">
                    <div className="container">
                        <div className="container-inner">
                            <div className="container-inner-2">
                                <div className="page-title">
                                    <div className="iw-heading-title">
                                        <h1>
                                            Tours							</h1>
                                        <div className="page-heading-desc">
                                            Listing our tour with multiple concept layouts								</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BookingContent />
                <Footer />
            </div>

        );
    }
}

export default Booking;