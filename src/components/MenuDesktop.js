import React, { Component } from 'react';

class MenuDesktop extends Component {
    render() {
        return (
            <div className="navbar navbar-default iw-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-6">
                            <h1 className="iw-logo">
                                <a href="/wordpress/intravel/home/">
                                    <img alt="test" className="sticky-logo" src="images/logo_sticky.png" />
                                </a>
                            </h1>
                        </div>
                        <div className="col-md-8 col-sm-6 col-xs-6">
                            <nav className="main-menu iw-menu-main nav-collapse">
                                {/*Menu desktop*/}
                                <div className="iw-main-menu">
                                    <ul id="menu-main-menu-1" className="iw-nav-menu  nav-menu nav navbar-nav">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-948 current_page_item menu-item-has-children menu-item-1309 selected active ">
                                            <a href="/">Trang chủ
                                                <small className="icon-arrow" />
                                            </a>
                                            <ul className="sub-menu child-nav dropdown-nav">
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1447">
                                                    <a href="/wordpress/intravel/home/home-v2/">Home v2</a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-158">
                                                    <a href="/wordpress/intravel/home/home-version-3/">Home v3</a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1149">
                                                    <a href="/wordpress/intravel/home/home-v4/">Home v4</a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1428">
                                                    <a href="/wordpress/intravel/home/home-v5/">Home V5</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102">
                                            <a href="/booking">Booking
            <small className="icon-arrow" />
                                            </a>
                                            <ul className="sub-menu child-nav dropdown-nav">
                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1626">
                                                    <a href="/wordpress/intravel/home/destination/amsterdam/">Amsterdam</a>
                                                </li>
                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-has-children menu-item-1629">
                                                    <a href="/wordpress/intravel/home/destination/italy/">Italy
                <small className="icon-arrow" />
                                                    </a>
                                                    <ul className="sub-menu child-nav dropdown-nav">
                                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1630">
                                                            <a href="/wordpress/intravel/home/destination/rome/">Rome</a>
                                                        </li>
                                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1631">
                                                            <a href="/wordpress/intravel/home/destination/venice/">Venice</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-has-children menu-item-1470">
                                                    <a href="/wordpress/intravel/home/destination/france/">France
                <small className="icon-arrow" />
                                                    </a>
                                                    <ul className="sub-menu child-nav dropdown-nav">
                                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1633">
                                                            <a href="/wordpress/intravel/home/destination/paris/">Paris</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-has-children menu-item-1469">
                                                    <a href="/wordpress/intravel/home/destination/uae/">UAE
                <small className="icon-arrow" />
                                                    </a>
                                                    <ul className="sub-menu child-nav dropdown-nav">
                                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1632">
                                                            <a href="/wordpress/intravel/home/destination/dubai/">Dubai</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-has-children menu-item-1007">
                                                    <a href="/wordpress/intravel/home/destination/usa/">USA
                <small className="icon-arrow" />
                                                    </a>
                                                    <ul className="sub-menu child-nav dropdown-nav">
                                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1628">
                                                            <a href="/wordpress/intravel/home/destination/san-francisco/">San Francisco</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1319">
                                            <a href="/wordpress/intravel/home/tours/">Tours
            <small className="icon-arrow" />
                                            </a>
                                            <ul className="sub-menu child-nav dropdown-nav">
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1317">
                                                    <a href="/wordpress/intravel/home/tours/?layout=grid">Tour Listing Grid</a>
                                                </li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1318">
                                                    <a href="/wordpress/intravel/home/tours/?layout=list">Tour Listing Row</a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-1004">
                                                    <a href="/wordpress/intravel/home/tours/rome-city-sightseeing-tours-bike-tour/">Tour Detail</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-769">
                                            <a href="/wordpress/intravel/home/blog-listing/">Blog
            <small className="icon-arrow" />
                                            </a>
                                            <ul className="sub-menu child-nav dropdown-nav">
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-770">
                                                    <a href="/wordpress/intravel/home/blog-listing/">Blog listing</a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1021">
                                                    <a href="/wordpress/intravel/home/mother-city-markets-where-to-shop-til-you-drop-in-cape-town/">Blog detail</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1022">
                                            <a href="/wordpress/intravel/home/shop/">Shop
            <small className="icon-arrow" />
                                            </a>
                                            <ul className="sub-menu child-nav dropdown-nav">
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1023">
                                                    <a href="/wordpress/intravel/home/cart/">Cart</a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1024">
                                                    <a href="/wordpress/intravel/home/checkout/">Checkout</a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-1030">
                                                    <a href="/wordpress/intravel/home/product/christmas-paper-craft/">Product detail</a>
                                                </li>
                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-1028">
                                                    <a href="/wordpress/intravel/home/product-tag/clothing/">Product Tag</a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1031">
                                                    <a href="/wordpress/intravel/home/my-account/">My Account</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1002">
                                            <a href="/wordpress/intravel/home/about-us/">About us</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1006">
                                            <a href="/wordpress/intravel/home/contact-us/">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="iw-search-cart">
                                <div className="search-form">
                                    <button>
                                        <i className="ion-android-search" />
                                    </button>
                                </div>
                                <div className="shopping-cart">
                                    <a href="/wordpress/intravel/home/cart/ " className="cart-icon">
                                        <i className="ion-ios-cart" />
                                    </a>
                                </div>
                                <span className="off-canvas-open">
                                    <i className="fa fa-bars" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuDesktop;