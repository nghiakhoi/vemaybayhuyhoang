import React, { Component } from 'react';

class MenuMobile extends Component {
    render() {
        return (
            <nav className="off-canvas-menu st-menu">
                <h2 className="canvas-menu-title">Main Menu
    <span className="text-right">
                        <a href="" id="off-canvas-close">
                            <i className="fa fa-times" />
                        </a>
                    </span>
                </h2>
                <ul id="menu-main-menu" className="canvas-menu">
                    <li id="menu-item-1309" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-948 current_page_item menu-item-has-children menu-item-1309 selected active ">
                        <a href="/">Trang chủ</a>
                    </li>
                    <li id="menu-item-1102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102">
                        <a href="/wordpress/intravel/home/destinations/">Booking</a>
                    </li>
                    <li id="menu-item-1002" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1002">
                        <a href="/wordpress/intravel/home/about-us/">About us</a>
                    </li>
                    <li id="menu-item-1006" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1006">
                        <a href="/wordpress/intravel/home/contact-us/">Contact us</a>
                    </li>
                </ul>
            </nav>


        );
    }
}

export default MenuMobile;