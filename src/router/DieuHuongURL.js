import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/Home';
import Booking from '../components/Booking';
import YourInfo from '../components/YourInfo';
import SummaryInfo from '../components/SummaryInfo';
import HoaDon from '../components/Admin/HoaDon';

class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/booking" component={Booking} />
                    <Route exact path="/yourinfo" component={YourInfo} />
                    <Route exact path="/summaryinfo" component={SummaryInfo} />
                    <Route exact path="/admin/hoadon" component={HoaDon} />
                </div>
            </Router>
        );
    }
}

export default DieuHuongURL;