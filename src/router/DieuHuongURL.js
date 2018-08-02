import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../components/Home';
import Booking from '../components/Booking';

class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/booking" component={Booking} />
                </div>
            </Router>
        );
    }
}

export default DieuHuongURL;