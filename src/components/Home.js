import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';

class Home extends Component {
    render() {
        return (
            <div className="wrapper st-body">
                <Header />
                <HomeContent />
                <Footer />
            </div>

        );
    }
}

export default Home;