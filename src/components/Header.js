import React, { Component } from 'react';
import MenuDesktop from './MenuDesktop';
import Slider from './Slider';

class Header extends Component {
    render() {
        return (
            <div className="wrapper-header-version-3">
                <Slider />
                <div className="header header-default header-version-3 header-sticky ">
                    <form className="search-form-header" method="get" action="/wordpress/intravel/home/">
                        <div className="search-box-header">
                            <input type="search" title="Enter your key word" defaultValue name="s" placeholder="Enter your key word" className="top-search" />
                        </div>
                    </form>
                    <MenuDesktop />
                </div>
            </div>
        );
    }
}

export default Header;