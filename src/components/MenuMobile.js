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
                        <a href="/">Trang chủ mobile</a>

                    </li>
                    <li id="menu-item-1102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102">
                        <a href="/wordpress/intravel/home/destinations/">Destinations</a>
                    </li>
                    <li id="menu-item-1319" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1319">
                        <a href="/wordpress/intravel/home/tours/">Tours</a>
                        <ul className="sub-menu child-nav dropdown-nav">
                            <li id="menu-item-1317" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1317">
                                <a href="/wordpress/intravel/home/tours/?layout=grid">Tour Listing Grid</a>
                            </li>
                            <li id="menu-item-1318" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1318">
                                <a href="/wordpress/intravel/home/tours/?layout=list">Tour Listing Row</a>
                            </li>
                            <li id="menu-item-1004" className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-1004">
                                <a href="/wordpress/intravel/home/tours/rome-city-sightseeing-tours-bike-tour/">Tour Detail</a>
                            </li>
                        </ul>
                    </li>
                    <li id="menu-item-769" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-769">
                        <a href="/wordpress/intravel/home/blog-listing/">Blog</a>
                        <ul className="sub-menu child-nav dropdown-nav">
                            <li id="menu-item-770" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-770">
                                <a href="/wordpress/intravel/home/blog-listing/">Blog listing</a>
                            </li>
                            <li id="menu-item-1021" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1021">
                                <a href="/wordpress/intravel/home/mother-city-markets-where-to-shop-til-you-drop-in-cape-town/">Blog detail</a>
                            </li>
                        </ul>
                    </li>
                    <li id="menu-item-1022" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1022">
                        <a href="/wordpress/intravel/home/shop/">Shop</a>
                        <ul className="sub-menu child-nav dropdown-nav">
                            <li id="menu-item-1023" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1023">
                                <a href="/wordpress/intravel/home/cart/">Cart</a>
                            </li>
                            <li id="menu-item-1024" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1024">
                                <a href="/wordpress/intravel/home/checkout/">Checkout</a>
                            </li>
                            <li id="menu-item-1030" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-1030">
                                <a href="/wordpress/intravel/home/product/christmas-paper-craft/">Product detail</a>
                            </li>
                            <li id="menu-item-1028" className="menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-1028">
                                <a href="/wordpress/intravel/home/product-tag/clothing/">Product Tag</a>
                            </li>
                            <li id="menu-item-1031" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1031">
                                <a href="/wordpress/intravel/home/my-account/">My Account</a>
                            </li>
                        </ul>
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