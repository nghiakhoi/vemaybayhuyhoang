import React, { Component } from 'react';

class HeaderBooking extends Component {
    render() {
        return (
            <div className="header header-default header-default-edition header-sticky  clone">
                <form className="search-form-header theme-bg" method="get" action="http://inwavethemes.com/wordpress/intravel/home/">
                    <div className="search-box-header">
                        <input type="search" title="Enter your key word" defaultValue name="s" placeholder="Enter your key word" className="top-search" />
                    </div>
                </form>
                <div className="top-bar-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="iw-top-bar">
                                    <div className="contact">Address <i className="fa fa-map-marker" /> Van Quan, Ha Dong, Ha Noi. Hotline <i className="fa fa-phone-square" /> 0123456789</div>
                                    <div className="social-curency">
                                        <ul className="iw-social-all" />                      </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* home feature */}
                <div className="navbar navbar-default iw-header">
                    <div className="container container-color">
                        <div className="row">
                            <div className="col-md-1 col-logo">
                                <h1 className="iw-logo">
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/" title="InTravel">
                                        <img className="main-logo" src="http://inwavethemes.com/wordpress/intravel/wp-content/themes/intravel/assets/images/logo.png" alt="InTravel" />
                                        <img className="sticky-logo" src="http://inwavethemes.com/wordpress/intravel/wp-content/themes/intravel/assets/images/logo_sticky.png" alt="InTravel" />
                                    </a>
                                </h1>
                            </div>
                            <div className="col-md-10 col-menu">
                                <div className="iw-menu-header-default">
                                    <nav className="main-menu iw-menu-main nav-collapse">
                                        {/*Menu desktop*/}
                                        <div className="iw-main-menu"><ul id="menu-main-menu-1" className="iw-nav-menu  nav-menu nav navbar-nav"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-1309"><a href="http://inwavethemes.com/wordpress/intravel/home/">Home<small className="icon-arrow" /></a><ul className="sub-menu child-nav dropdown-nav">	<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1447"><a href="http://inwavethemes.com/wordpress/intravel/home/home-v2/">Home v2</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-158"><a href="http://inwavethemes.com/wordpress/intravel/home/home-version-3/">Home v3</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1149"><a href="http://inwavethemes.com/wordpress/intravel/home/home-v4/">Home v4</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1428"><a href="http://inwavethemes.com/wordpress/intravel/home/home-v5/">Home V5</a></li>
                                        </ul></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102"><a href="http://inwavethemes.com/wordpress/intravel/home/destinations/">Destinations<small className="icon-arrow" /></a><ul className="sub-menu child-nav dropdown-nav">	<li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1626"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/amsterdam/">Amsterdam</a></li>
                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-has-children menu-item-1629"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/italy/">Italy<small className="icon-arrow" /></a><ul className="sub-menu child-nav dropdown-nav">		<li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1630"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/rome/">Rome</a></li>
                                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1631"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/venice/">Venice</a></li>
                                                </ul></li>
                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-has-children menu-item-1470"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/france/">France<small className="icon-arrow" /></a><ul className="sub-menu child-nav dropdown-nav">		<li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1633"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/paris/">Paris</a></li>
                                                </ul></li>
                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-has-children menu-item-1469"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/uae/">UAE<small className="icon-arrow" /></a><ul className="sub-menu child-nav dropdown-nav">		<li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1632"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/dubai/">Dubai</a></li>
                                                </ul></li>
                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-has-children menu-item-1007"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/usa/">USA<small className="icon-arrow" /></a><ul className="sub-menu child-nav dropdown-nav">		<li className="menu-item menu-item-type-taxonomy menu-item-object-destination menu-item-1628"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/san-francisco/">San Francisco</a></li>
                                                </ul></li>
                                            </ul></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children current-menu-item current_page_item menu-item-1319 selected active "><a href="http://inwavethemes.com/wordpress/intravel/home/tours/">Tours<small className="icon-arrow" /></a><ul className="sub-menu child-nav dropdown-nav">	<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1317"><a href="http://inwavethemes.com/wordpress/intravel/home/tours/?layout=grid">Tour Listing Grid</a></li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-1318 selected active "><a href="http://inwavethemes.com/wordpress/intravel/home/tours/?layout=list">Tour Listing Row</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-1004"><a href="http://inwavethemes.com/wordpress/intravel/home/tours/rome-city-sightseeing-tours-bike-tour/">Tour Detail</a></li>
                                            </ul></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-769"><a href="http://inwavethemes.com/wordpress/intravel/home/blog-listing/">Blog<small className="icon-arrow" /></a><ul className="sub-menu child-nav dropdown-nav">	<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-770"><a href="http://inwavethemes.com/wordpress/intravel/home/blog-listing/">Blog listing</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1021"><a href="http://inwavethemes.com/wordpress/intravel/home/mother-city-markets-where-to-shop-til-you-drop-in-cape-town/">Blog detail</a></li>
                                            </ul></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1022"><a href="http://inwavethemes.com/wordpress/intravel/home/shop/">Shop<small className="icon-arrow" /></a><ul className="sub-menu child-nav dropdown-nav">	<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1023"><a href="http://inwavethemes.com/wordpress/intravel/home/cart/">Cart</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1024"><a href="http://inwavethemes.com/wordpress/intravel/home/checkout/">Checkout</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-1030"><a href="http://inwavethemes.com/wordpress/intravel/home/product/christmas-paper-craft/">Product detail</a></li>
                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-1028"><a href="http://inwavethemes.com/wordpress/intravel/home/product-tag/clothing/">Product Tag</a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1031"><a href="http://inwavethemes.com/wordpress/intravel/home/my-account/">My Account</a></li>
                                            </ul></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1002"><a href="http://inwavethemes.com/wordpress/intravel/home/about-us/">About us</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1006"><a href="http://inwavethemes.com/wordpress/intravel/home/contact-us/">Contact us</a></li>
                                        </ul></div>                      </nav>
                                </div>
                            </div>
                            <div className="col-md-1 col-search">
                                <div className="iw-search-cart">
                                    <div className="search-form">
                                        <button>
                                            <i className="ion-android-search" />
                                        </button>
                                    </div>
                                    <div className="shopping-cart">
                                        <a href="http://inwavethemes.com/wordpress/intravel/home/cart/ " className="cart-icon">
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
            </div>
        );
    }
}

export default HeaderBooking;