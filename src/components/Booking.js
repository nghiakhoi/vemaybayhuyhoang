import React, { Component } from 'react';
import HeaderBookingClone from './HeaderBookingClone';
import HeaderBooking from './HeaderBooking';
import BookingContent from './BookingContent';
import Footer from './Footer';

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectIs: false
        };
    }

    componentWillMount() {
        if (localStorage.getItem("dep") === null || localStorage.getItem("des") === null || localStorage.getItem("dep") === "" || localStorage.getItem("des") === "") {
            this.setState({
                redirectIs: true
            }, function () {
                if (this.state.redirectIs === true) {
                    alert("Hãy chọn ĐIỂM KHỞI HÀNH và ĐIỂM ĐẾN!");
                    window.location.replace("/");
                }
            });
        }

    }

    render() {
        return (

            this.state.redirectIs === false ?
                <div className="wrapper st-body">
                    <HeaderBookingClone />
                    <HeaderBooking />
                    <BookingContent />
                    <Footer />
                </div>
                : ""


        );
    }
}

export default Booking;