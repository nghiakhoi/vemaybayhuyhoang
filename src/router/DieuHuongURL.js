import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/Home';
import Booking from '../components/Booking';
import YourInfo from '../components/YourInfo';

class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/booking" component={Booking} />
                    <Route exact path="/yourinfo" component={YourInfo} />
                </div>
            </Router>
        );
    }
}

export default DieuHuongURL;