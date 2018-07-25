import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="wrapper st-body">
                <div className="wrapper-header-version-3">
                    <div className="header-search-tour">
                        <div className="intravel-destination-search">
                            <div className="intravel-destination-bgimage" style={{ backgroundImage: 'url(/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_roma.jpg)' }} />
                            <div className="intravel-destination-bgimage2 transparent" />
                            <div className="intravel-destination-search-inner">
                                <div className="iw-logo-home">
                                    <a href="/wordpress/intravel/home/">
                                        <img src="images/inTravel.png"  />
                                    </a>
                                </div>
                                <div className="destination-menu-search-form">
                                    <div className="destination-menu-search-form-inner" style={{ height: 290, marginTop: '-145px' }}>
                                        <ul>
                                            <li className="destination-menu-item " data-destination-slug="amsterdam" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_amsterdam.jpg">
                                                <span>Amsterdam
                    <span className="caret theme-bg" />
                                                </span>
                                            </li>
                                            <li className="destination-menu-item " data-destination-slug="dubai" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_dubai.jpg">
                                                <span>Dubai
                    <span className="caret theme-bg" />
                                                </span>
                                            </li>
                                            <li className="destination-menu-item " data-destination-slug="france" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_france.jpg">
                                                <span>France
                    <span className="caret theme-bg" />
                                                </span>
                                            </li>
                                            <li className="destination-menu-item " data-destination-slug="italy" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_italy.jpg">
                                                <span>Italy
                    <span className="caret theme-bg" />
                                                </span>
                                            </li>
                                            <li className="destination-menu-item " data-destination-slug="paris" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_paris.jpg">
                                                <span>Paris
                    <span className="caret theme-bg" />
                                                </span>
                                            </li>
                                            <li className="destination-menu-item active" data-destination-slug="rome" data-destination-backgroundimg="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_paris.jpg">
                                                <span>Rome
                    <span className="caret theme-bg" />
                                                </span>
                                            </li>
                                            <li className="destination-menu-item " data-destination-slug="san-francisco" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_california.jpg">
                                                <span>San Francisco
                    <span className="caret theme-bg" />
                                                </span>
                                            </li>
                                            <li className="destination-menu-item " data-destination-slug="the_netherlands" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/06/tour_amsterdam_2.jpg">
                                                <span>The Netherlands
                    <span className="caret theme-bg" />
                                                </span>
                                            </li>
                                            <li className="destination-menu-item " data-destination-slug="uae" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_uae.jpg">
                                                <span>UAE
                    <span className="caret theme-bg" />
                                                </span>
                                            </li>
                                            <li className="destination-menu-item " data-destination-slug="usa" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_usa.jpg">
                                                <span>USA
                    <span className="caret theme-bg" />
                                                </span>
                                            </li>
                                            <li className="destination-menu-item " data-destination-slug="venice" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/06/tour_venice_2.jpg">
                                                <span>Venice
                    <span className="caret theme-bg" />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <form className="destination-search-form" action="/wordpress/intravel/wp-admin/admin-ajax.php?action=intravel_search_tour" method="post">
                                        <span className="icon-click" />
                                        <div className="row">
                                            <div className="col-md-8 col-sm-12 col-xs-12">
                                                <div className="search-field">
                                                    <i className="ion-search" />
                                                    <input type="text" placeholder="Enter tour name" name="s" defaultValue />
                                                </div>
                                                <div className="tour-type-field">
                                                    <i className="ion-ios-paper-outline" />
                                                    <select className="form-control js-selected " name="tour_type">
                                                        <option value>Tour type</option>
                                                        <option value="adventure-travel">Adventure Travel</option>
                                                        <option value="beaches-islands">Beaches &amp; Islands</option>
                                                        <option value="family-tours">Family Tours</option>
                                                        <option value="history-culture">History &amp; Culture</option>
                                                        <option value="nature">Nature &amp; wildlife</option>
                                                        <option value="sightseeing-tours">Sightseeing tours</option>
                                                    </select>
                                                </div>
                                                <div className="iw-departure">
                                                    <input name="start_date" type="text" placeholder="Tour start date" className="iw-search-arrival has-date-picker" />
                                                    <i className="ion-calendar" />
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <div className="destination-field">
                                                    <select className="form-control js-selected " name="destination">
                                                        <option value>Destination</option>
                                                        <option value="amsterdam">Amsterdam</option>
                                                        <option value="dubai">Dubai</option>
                                                        <option value="france">France</option>
                                                        <option value="italy">Italy</option>
                                                        <option value="paris">Paris</option>
                                                        <option value="rome">Rome</option>
                                                        <option value="san-francisco">San Francisco</option>
                                                        <option value="the_netherlands">The Netherlands</option>
                                                        <option value="uae">UAE</option>
                                                        <option value="usa">USA</option>
                                                        <option value="venice">Venice</option>
                                                    </select>
                                                </div>
                                                <div className="iw-search-now">
                                                    <i className="ion-paper-airplane" />
                                                    <button className="theme-bg">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header header-default header-version-3 header-sticky ">
                        <form className="search-form-header" method="get" action="/wordpress/intravel/home/">
                            <div className="search-box-header">
                                <input type="search" title="Enter your key word" defaultValue name="s" placeholder="Enter your key word" className="top-search" />
                            </div>
                        </form>
                        {/* home feature */}
                        <div className="navbar navbar-default iw-header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <h1 className="iw-logo">
                                            <a href="/wordpress/intravel/home/">
                                                <img className="sticky-logo" src="images/logo_sticky.png" />
                                            </a>
                                        </h1>
                                    </div>
                                    <div className="col-md-8 col-sm-6 col-xs-6">
                                        <nav className="main-menu iw-menu-main nav-collapse">
                                            {/*Menu desktop*/}
                                            <div className="iw-main-menu">
                                                <ul id="menu-main-menu-1" className="iw-nav-menu  nav-menu nav navbar-nav">
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-948 current_page_item menu-item-has-children menu-item-1309 selected active ">
                                                        <a href="/wordpress/intravel/home/">Home
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
                                                        <a href="/wordpress/intravel/home/destinations/">Destinations
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
                        {/* the menu */}
                    </div>
                </div>
                {/*End Header*/}
                <div className="contents-main" id="contents-main">
                    <article id="post-948" className="post-948 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div className="container">
                                <div className="vc_row wpb_row vc_row-fluid" style={{}}>
                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner ">
                                            <div className="wpb_wrapper">
                                                <div className="iw-heading  style4 vc_custom_1473841127609 text-center" style={{ width: '100%' }}>
                                                    <h3 className="iwh-title" style={{ color: '#282828', fontSize: 48, fontFamily: 'Poppins', fontWeight: 300, lineHeight: 1 }}>Beautiful tris with...
                      <strong>Specical offers</strong>
                                                    </h3>
                                                    <div className="iwh-description" style={{}}>Curabitur nunc erat, consequat in erat ut, congue bibendum nulla. Suspendisse
                                                      id pharetra lacus, et hendrerit mi
                      <br /> Praesent at vestibulum tortor. Praesent condimentum efficitur massa</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="vc_row wpb_row vc_row-fluid vc_custom_1475565997597" style={{}}>
                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner ">
                                            <div className="wpb_wrapper">
                                                <div className="row iw-travel-tours style4 style2">
                                                    <div id="iw-isotope-travel-5-main" className="isotope">
                                                        <div className="col-md-4 col-sm-6 col-xs-12 element-item">
                                                            <div className="iw-tour-item">
                                                                <div className="tour-discount">7%</div>
                                                                <div className="image-wrap">
                                                                    <img src="images/tour_amsterdam_2-370x255.jpg"  />
                                                                    <div className="booking-action">
                                                                        <a className="link-to-detail theme-bg" href="/wordpress/intravel/home/tours/4-day-tour-of-amsterdam-and-zaanse-schans/">
                                                                            Book now </a>
                                                                    </div>
                                                                </div>
                                                                <div className="info-wrap">
                                                                    <div className="info-left">
                                                                        <h3 className="title">
                                                                            <a className="theme-color-hover" href="/wordpress/intravel/home/tours/4-day-tour-of-amsterdam-and-zaanse-schans/">4-Days Tour of Amsterdam and Zaanse Schans</a>
                                                                        </h3>
                                                                        <div className="post-meta">
                                                                            <ul>
                                                                                <li className="destinations">
                                                                                    <i className="fa fa-map-marker"> </i>
                                                                                    <a href="/wordpress/intravel/home/destination/amsterdam/" className="destination">Amsterdam</a> /
                                    <a href="/wordpress/intravel/home/destination/the_netherlands/" className="destination">The Netherlands</a>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="duration">
                                                                                        <i className="fa fa-clock-o" aria-hidden="true" /> 4 days - 3 nights</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tour-price-vote">
                                                                        <span className="price-tour theme-bg">418,50$</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-sm-6 col-xs-12 element-item">
                                                            <div className="iw-tour-item">
                                                                <div className="tour-discount">33%</div>
                                                                <div className="image-wrap">
                                                                    <img src="/wordpress/intravel/wp-content/uploads/2016/06/tour_san_francisco_1-370x255.jpg"  />
                                                                    <div className="booking-action">
                                                                        <a className="link-to-detail theme-bg" href="/wordpress/intravel/home/tours/2-day-yosemite-national-park-tour-from-san-francisco/">
                                                                            Book now </a>
                                                                    </div>
                                                                </div>
                                                                <div className="info-wrap">
                                                                    <div className="info-left">
                                                                        <h3 className="title">
                                                                            <a className="theme-color-hover" href="/wordpress/intravel/home/tours/2-day-yosemite-national-park-tour-from-san-francisco/">2-Day Yosemite National Park Tour from San Francisco</a>
                                                                        </h3>
                                                                        <div className="post-meta">
                                                                            <ul>
                                                                                <li className="destinations">
                                                                                    <i className="fa fa-map-marker"> </i>
                                                                                    <a href="/wordpress/intravel/home/destination/san-francisco/" className="destination">San Francisco</a> /
                                    <a href="/wordpress/intravel/home/destination/usa/" className="destination">USA</a>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="duration">
                                                                                        <i className="fa fa-clock-o" aria-hidden="true" /> 2 days - 1 night</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tour-price-vote">
                                                                        <span className="price-tour theme-bg">282,74$</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-sm-6 col-xs-12 element-item">
                                                            <div className="iw-tour-item">
                                                                <div className="tour-discount">10%</div>
                                                                <div className="image-wrap">
                                                                    <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_france-370x255.jpg"  />
                                                                    <div className="booking-action">
                                                                        <a className="link-to-detail theme-bg" href="/wordpress/intravel/home/tours/3-day-normandy-st-malo-mont-saint-michel-tour-from-paris/">
                                                                            Book now </a>
                                                                    </div>
                                                                </div>
                                                                <div className="info-wrap">
                                                                    <div className="info-left">
                                                                        <h3 className="title">
                                                                            <a className="theme-color-hover" href="/wordpress/intravel/home/tours/3-day-normandy-st-malo-mont-saint-michel-tour-from-paris/">3-Day Normandy, St Malo, Mont Saint-Michel Tour from
                                  Paris</a>
                                                                        </h3>
                                                                        <div className="post-meta">
                                                                            <ul>
                                                                                <li className="destinations">
                                                                                    <i className="fa fa-map-marker"> </i>
                                                                                    <a href="/wordpress/intravel/home/destination/france/" className="destination">France</a> /
                                    <a href="/wordpress/intravel/home/destination/paris/" className="destination">Paris</a>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="duration">
                                                                                        <i className="fa fa-clock-o" aria-hidden="true" /> 3 days - 2 nights</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tour-price-vote">
                                                                        <span className="price-tour theme-bg">612,90$</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-sm-6 col-xs-12 element-item">
                                                            <div className="iw-tour-item">
                                                                <div className="tour-discount">25%</div>
                                                                <div className="image-wrap">
                                                                    <img src="/wordpress/intravel/wp-content/uploads/2016/06/tour_venice_1-370x255.jpg"  />
                                                                    <div className="booking-action">
                                                                        <a className="link-to-detail theme-bg" href="/wordpress/intravel/home/tours/5-night-the-magic-of-venice-tour/">
                                                                            Book now </a>
                                                                    </div>
                                                                </div>
                                                                <div className="info-wrap">
                                                                    <div className="info-left">
                                                                        <h3 className="title">
                                                                            <a className="theme-color-hover" href="/wordpress/intravel/home/tours/5-night-the-magic-of-venice-tour/">5 days 4 Nights The Magic of Venice Tour</a>
                                                                        </h3>
                                                                        <div className="post-meta">
                                                                            <ul>
                                                                                <li className="destinations">
                                                                                    <i className="fa fa-map-marker"> </i>
                                                                                    <a href="/wordpress/intravel/home/destination/italy/" className="destination">Italy</a> /
                                    <a href="/wordpress/intravel/home/destination/venice/" className="destination">Venice</a>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="duration">
                                                                                        <i className="fa fa-clock-o" aria-hidden="true" /> 5 days - 4 nights</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tour-price-vote">
                                                                        <span className="price-tour theme-bg">1.654,50$</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-sm-6 col-xs-12 element-item">
                                                            <div className="iw-tour-item">
                                                                <div className="tour-discount">30%</div>
                                                                <div className="image-wrap">
                                                                    <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_san_francisco_2_1-370x255.jpg"  />
                                                                    <div className="booking-action">
                                                                        <a className="link-to-detail theme-bg" href="/wordpress/intravel/home/tours/2-day-monterey-carmel-and-pebble-beach-tour-from-san-francisco/">
                                                                            Book now </a>
                                                                    </div>
                                                                </div>
                                                                <div className="info-wrap">
                                                                    <div className="info-left">
                                                                        <h3 className="title">
                                                                            <a className="theme-color-hover" href="/wordpress/intravel/home/tours/2-day-monterey-carmel-and-pebble-beach-tour-from-san-francisco/">2-Day Monterey, Carmel and Pebble Beach Tour from San
                                  Francisco</a>
                                                                        </h3>
                                                                        <div className="post-meta">
                                                                            <ul>
                                                                                <li className="destinations">
                                                                                    <i className="fa fa-map-marker"> </i>
                                                                                    <a href="/wordpress/intravel/home/destination/san-francisco/" className="destination">San Francisco</a> /
                                    <a href="/wordpress/intravel/home/destination/usa/" className="destination">USA</a>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="duration">
                                                                                        <i className="fa fa-clock-o" aria-hidden="true" /> 2 days - 1 night</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tour-price-vote">
                                                                        <span className="price-tour theme-bg">154,00$</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-sm-6 col-xs-12 element-item">
                                                            <div className="iw-tour-item">
                                                                <div className="tour-discount">10%</div>
                                                                <div className="image-wrap">
                                                                    <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_dubai_hot_ballon_1-370x255.jpg"  />
                                                                    <div className="booking-action">
                                                                        <a className="link-to-detail theme-bg" href="/wordpress/intravel/home/tours/4-hours-dubai-hot-air-balloon-flight/">
                                                                            Book now </a>
                                                                    </div>
                                                                </div>
                                                                <div className="info-wrap">
                                                                    <div className="info-left">
                                                                        <h3 className="title">
                                                                            <a className="theme-color-hover" href="/wordpress/intravel/home/tours/4-hours-dubai-hot-air-balloon-flight/">4 hours Dubai Hot Air Balloon Flight adventure</a>
                                                                        </h3>
                                                                        <div className="post-meta">
                                                                            <ul>
                                                                                <li className="destinations">
                                                                                    <i className="fa fa-map-marker"> </i>
                                                                                    <a href="/wordpress/intravel/home/destination/dubai/" className="destination">Dubai</a> /
                                    <a href="/wordpress/intravel/home/destination/uae/" className="destination">UAE</a>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="duration">
                                                                                        <i className="fa fa-clock-o" aria-hidden="true" /> 04 hours</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tour-price-vote">
                                                                        <span className="price-tour theme-bg">271,80$</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row wpb_row vc_row-fluid" style={{}}>
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="intravel-spotlight-destination style2 ">
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-12 col-xs-12 iw-video">
                                                        <div className="tour-type-img iw-effect-1">
                                                            <img src="/wordpress/intravel/wp-content/uploads/2016/09/bg_video_home3-600x800.jpg"  />
                                                        </div>
                                                        <button type="button" className="btn btn-info btn-lg open-popup" data-toggle="modal" data-target="#myModal">
                                                            <i className="icon ion-ios-play-outline" />
                                                        </button>
                                                        <div className="iw-video-player modal fade" id="myModal" role="dialog">
                                                            <div className="modal-dialog">
                                                                <div className="play-button">
                                                                    <i className="icon ion-ios-play-outline" />
                                                                </div>
                                                                <div className="video">
                                                                    <video src="images/travel_video_demo.mp4" />
                                                                </div>
                                                                <button type="button" className="btn btn-default close-popup" data-dismiss="modal">
                                                                    <i className="icon ion-close" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 col-sm-12 col-xs-12 tour-types">
                                                        <div className="row">
                                                            <div className="col-md-4 col-sm-4 col-xs-12 tour-type-item iw-effect-img">
                                                                <div className="tour-type">
                                                                    <div className="tour-type-img effect-1">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_type_adventure.jpg"  />
                                                                    </div>
                                                                    <div className="tour-type-info">
                                                                        <div className="tour-type-icon">
                                                                            <img src="/wordpress/intravel/wp-content/uploads/2016/10/tour_icon_adventure-1-60x60.png"  />
                                                                        </div>
                                                                        <h3>Adventure Travel</h3>
                                                                        <div className="tour-type-description">Lorem Ipsum is simply dummy text of the printing</div>
                                                                        <div className="tour-type-detail">
                                                                            <a href="/wordpress/intravel/home/tours/?destination=amsterdam&tour_type=adventure-travel">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-xs-12 tour-type-item iw-effect-img">
                                                                <div className="tour-type">
                                                                    <div className="tour-type-img effect-1">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_type_beach_sea.jpg"  />
                                                                    </div>
                                                                    <div className="tour-type-info">
                                                                        <div className="tour-type-icon">
                                                                            <img src="/wordpress/intravel/wp-content/uploads/2016/10/tour_icon_beaches-60x60.png"  />
                                                                        </div>
                                                                        <h3>Beaches &amp; Islands</h3>
                                                                        <div className="tour-type-description">Lorem Ipsum is simply dummy text of the printing</div>
                                                                        <div className="tour-type-detail">
                                                                            <a href="/wordpress/intravel/home/tours/?destination=amsterdam&tour_type=beaches-islands">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-xs-12 tour-type-item iw-effect-img">
                                                                <div className="tour-type">
                                                                    <div className="tour-type-img effect-1">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_type_family.jpg"  />
                                                                    </div>
                                                                    <div className="tour-type-info">
                                                                        <div className="tour-type-icon">
                                                                            <img src="/wordpress/intravel/wp-content/uploads/2016/10/tour_icon_family-60x60.png"  />
                                                                        </div>
                                                                        <h3>Family Tours</h3>
                                                                        <div className="tour-type-description">Lorem Ipsum is simply dummy text of the printing</div>
                                                                        <div className="tour-type-detail">
                                                                            <a href="/wordpress/intravel/home/tours/?destination=amsterdam&tour_type=family-tours">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4 col-sm-4 col-xs-12 tour-type-item iw-effect-img">
                                                                <div className="tour-type">
                                                                    <div className="tour-type-img effect-1">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/10/tour_culture_-tours.jpg"  />
                                                                    </div>
                                                                    <div className="tour-type-info">
                                                                        <div className="tour-type-icon">
                                                                            <img src="/wordpress/intravel/wp-content/uploads/2016/10/tour_icon_history-60x60.png"  />
                                                                        </div>
                                                                        <h3>History &amp; Culture</h3>
                                                                        <div className="tour-type-description">Lorem Ipsum is simply dummy text of the printing</div>
                                                                        <div className="tour-type-detail">
                                                                            <a href="/wordpress/intravel/home/tours/?destination=amsterdam&tour_type=history-culture">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-xs-12 tour-type-item iw-effect-img">
                                                                <div className="tour-type">
                                                                    <div className="tour-type-img effect-1">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_type_wild_life.jpg"  />
                                                                    </div>
                                                                    <div className="tour-type-info">
                                                                        <div className="tour-type-icon">
                                                                            <img src="/wordpress/intravel/wp-content/uploads/2016/10/tour_icon_nature-60x60.png"  />
                                                                        </div>
                                                                        <h3>Nature &amp; wildlife</h3>
                                                                        <div className="tour-type-description">Lorem Ipsum is simply dummy text of the printing</div>
                                                                        <div className="tour-type-detail">
                                                                            <a href="/wordpress/intravel/home/tours/?destination=amsterdam&tour_type=nature">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-xs-12 tour-type-item iw-effect-img">
                                                                <div className="tour-type">
                                                                    <div className="tour-type-img effect-1">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_type_sightseeing-tours.jpg"  />
                                                                    </div>
                                                                    <div className="tour-type-info">
                                                                        <div className="tour-type-icon">
                                                                            <img src="/wordpress/intravel/wp-content/uploads/2016/10/tour_icon_sightseeing-60x60.png"  />
                                                                        </div>
                                                                        <h3>Sightseeing tours</h3>
                                                                        <div className="tour-type-description">Lorem Ipsum is simply dummy text of the printing</div>
                                                                        <div className="tour-type-detail">
                                                                            <a href="/wordpress/intravel/home/tours/?destination=amsterdam&tour_type=sightseeing-tours">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1473841335275" style={{}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="wpb_column vc_column_container vc_col-sm-12">
                                            <div className="vc_column-inner ">
                                                <div className="wpb_wrapper">
                                                    <div className="iw-heading  style4 vc_custom_1475652267417 text-center" style={{ width: '100%' }}>
                                                        <h3 className="iwh-title" style={{ color: '#282828', fontSize: 48, fontFamily: 'Poppins', fontWeight: 300, lineHeight: 1 }}>Hundreds of...
                        <strong>Destinations Worldwide.</strong>
                                                        </h3>
                                                        <div className="iwh-description" style={{}}>Curabitur nunc erat, consequat in erat ut, congue bibendum nulla. Suspendisse
                                                          id pharetra lacus, et hendrerit mi
                        <br /> Praesent at vestibulum tortor. Praesent condimentum efficitur massa</div>
                                                    </div>
                                                    <div className="intravel-destinations  style1 light">
                                                        <div className="owl-carousel" data-plugin-options="{&quot;navigation&quot;:false,&quot;autoHeight&quot;:true,&quot;pagination&quot;:true,&quot;autoPlay&quot;:false,&quot;paginationNumbers&quot;:false,&quot;items&quot;:&quot;3&quot;,&quot;itemsDesktop&quot;:[1199,&quot;3&quot;],&quot;itemsDesktopSmall&quot;:[991,&quot;2&quot;],&quot;itemsTablet&quot;:[767,2],&quot;itemsTabletSmall&quot;:false,&quot;itemsMobile&quot;:[479,1],&quot;navigationText&quot;:[&quot;back&quot;,&quot;next&quot;]}">
                                                            <div className="destination-item iw-effect-1">
                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/06/tour_amsterdam_2-370x420.jpg"  />
                                                                <div className="content">
                                                                    <div className="content-top">
                                                                        <h2>The Netherlands</h2>
                                                                        <ul>
                                                                            <li className="meta-tour">
                                                                                <i className="tour-icon" /> 1 tour</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="content-bottom">
                                                                        <div className="description">Visionary architecture, vintage meets contemporary fashion
                                and interiors, street markets selling rainbows…</div>
                                                                        <div className="destination-detail-v2">
                                                                            <a href="/wordpress/intravel/home/destination/the_netherlands/">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="destination-item iw-effect-1">
                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_france-370x420.jpg"  />
                                                                <div className="content">
                                                                    <div className="content-top">
                                                                        <h2>France</h2>
                                                                        <ul>
                                                                            <li className="meta-tour">
                                                                                <i className="tour-icon" /> 1 tour</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="content-bottom">
                                                                        <div className="description">France has been home for two decades yet I still feel on…</div>
                                                                        <div className="destination-detail-v2">
                                                                            <a href="/wordpress/intravel/home/destination/france/">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="destination-item iw-effect-1">
                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_new_york-370x420.jpg"  />
                                                                <div className="content">
                                                                    <div className="content-top">
                                                                        <h2>New York</h2>
                                                                        <ul>
                                                                            <li className="meta-destination">
                                                                                <i className="fa fa-map-marker" />
                                                                                <a href="/wordpress/intravel/home/destination/usa/">USA</a>
                                                                            </li>
                                                                            <li className="meta-tour">
                                                                                <i className="tour-icon" /> 0 tours</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="content-bottom">
                                                                        <div className="description">When the sun sinks slowly beyond the Hudson and luminous
                                skyscrapers light…</div>
                                                                        <div className="destination-detail-v2">
                                                                            <a href="/wordpress/intravel/home/destination/new-york/">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="destination-item iw-effect-1">
                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_amsterdam-370x420.jpg"  />
                                                                <div className="content">
                                                                    <div className="content-top">
                                                                        <h2>Amsterdam</h2>
                                                                        <ul>
                                                                            <li className="meta-destination">
                                                                                <i className="fa fa-map-marker" />
                                                                                <a href="/wordpress/intravel/home/destination/the_netherlands/">The Netherlands</a>
                                                                            </li>
                                                                            <li className="meta-tour">
                                                                                <i className="tour-icon" /> 1 tour</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="content-bottom">
                                                                        <div className="description">Amsterdam is famously gezellig, a Dutch quality that translates
                                roughly as convivial…</div>
                                                                        <div className="destination-detail-v2">
                                                                            <a href="/wordpress/intravel/home/destination/amsterdam/">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="destination-item iw-effect-1">
                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/06/tour_venice_2-370x420.jpg"  />
                                                                <div className="content">
                                                                    <div className="content-top">
                                                                        <h2>Venice</h2>
                                                                        <ul>
                                                                            <li className="meta-destination">
                                                                                <i className="fa fa-map-marker" />
                                                                                <a href="/wordpress/intravel/home/destination/italy/">Italy</a>
                                                                            </li>
                                                                            <li className="meta-tour">
                                                                                <i className="tour-icon" /> 1 tour</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="content-bottom">
                                                                        <div className="description">About the only resemblance Venice has to its Italian namesake
                                is that…</div>
                                                                        <div className="destination-detail-v2">
                                                                            <a href="/wordpress/intravel/home/destination/venice/">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="destination-item iw-effect-1">
                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_paris-370x420.jpg"  />
                                                                <div className="content">
                                                                    <div className="content-top">
                                                                        <h2>Paris</h2>
                                                                        <ul>
                                                                            <li className="meta-destination">
                                                                                <i className="fa fa-map-marker" />
                                                                                <a href="/wordpress/intravel/home/destination/france/">France</a>
                                                                            </li>
                                                                            <li className="meta-tour">
                                                                                <i className="tour-icon" /> 1 tour</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="content-bottom">
                                                                        <div className="description">Paris’ grandeur is inspiring but what I love most about the
                                city…</div>
                                                                        <div className="destination-detail-v2">
                                                                            <a href="/wordpress/intravel/home/destination/paris/">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="destination-item iw-effect-1">
                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_roma-370x420.jpg"  />
                                                                <div className="content">
                                                                    <div className="content-top">
                                                                        <h2>Rome</h2>
                                                                        <ul>
                                                                            <li className="meta-destination">
                                                                                <i className="fa fa-map-marker" />
                                                                                <a href="/wordpress/intravel/home/destination/italy/">Italy</a>
                                                                            </li>
                                                                            <li className="meta-tour">
                                                                                <i className="tour-icon" /> 2 tours</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="content-bottom">
                                                                        <div className="description">A trip to Rome is as much about lapping up the dolce…</div>
                                                                        <div className="destination-detail-v2">
                                                                            <a href="/wordpress/intravel/home/destination/rome/">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="destination-item iw-effect-1">
                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_italy-370x420.jpg"  />
                                                                <div className="content">
                                                                    <div className="content-top">
                                                                        <h2>Italy</h2>
                                                                        <ul>
                                                                            <li className="meta-tour">
                                                                                <i className="tour-icon" /> 3 tours</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="content-bottom">
                                                                        <div className="description">Italy's fortes extend beyond its galleries, plates and wardrobes.
                                The country is…</div>
                                                                        <div className="destination-detail-v2">
                                                                            <a href="/wordpress/intravel/home/destination/italy/">Discover
                                  <i className="icon ion-arrow-right-c" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1475808287767 vc_row-has-fill" style={{ backgroundColor: 'none!important', background: 'none!important', position: 'relative' }}>
                                <div className="iw-parallax" data-iw-paraspeed="0.1" style={{ backgroundImage: 'url(/wordpress/intravel/wp-content/uploads/2016/09/background_parallax_01.jpg?id=1402)' }} />
                                <div className="iw-parallax-overlay theme-bg" style={{ backgroundColor: 'rgba(0,0,0,0.3)!important', opacity: '0.9' }} />
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="iw-testimonals-wrap">
                                                <div className="row">
                                                    <div className="iw-testimonals-left col-md-4 col-sm-4 col-xs-12">
                                                        <div className="testi-client-title">23.506 +</div>
                                                        <div className="testi-client-sub-title">Happy travelers and what’s they are saying?</div>
                                                        <div className="testi-client-description">His postulant posidonium adversarium. Ius tollit tamquam indoctum ea, cu
                        quo equidem perfecto adipiscing.</div>
                                                    </div>
                                                    <div className="iw-testimonals style1 col-md-8 col-sm-8 col-xs-12 style1 scroll-x ">
                                                        <div className="iw-testimonial-item style1">
                                                            <div className="testi-info-wrap">
                                                                <div className="testi-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                  tempor incididunt ut labore magna aliqua. Ut aliquip ex ea commodo
                            consequat.</div>
                                                                <div className="testi-bottom">
                                                                    <div className="testi-image">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/05/avatar-1-150x150.jpg"  />
                                                                    </div>
                                                                    <div className="testi-name-position">
                                                                        <div className="testi-client-name">Anna kate</div>
                                                                        <div className="testi-client-position">France</div>
                                                                    </div>
                                                                    <div className="iw-clear-both" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="iw-testimonial-item style1">
                                                            <div className="testi-info-wrap">
                                                                <div className="testi-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                  tempor incididunt ut labore magna aliqua. Ut aliquip ex ea commodo
                            consequat.</div>
                                                                <div className="testi-bottom">
                                                                    <div className="testi-image">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/05/avatar-1-150x150.jpg"  />
                                                                    </div>
                                                                    <div className="testi-name-position">
                                                                        <div className="testi-client-name">Anna kate</div>
                                                                        <div className="testi-client-position">France</div>
                                                                    </div>
                                                                    <div className="iw-clear-both" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="iw-testimonial-item style1">
                                                            <div className="testi-info-wrap">
                                                                <div className="testi-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                  tempor incididunt ut labore magna aliqua. Ut aliquip ex ea commodo
                            consequat.</div>
                                                                <div className="testi-bottom">
                                                                    <div className="testi-image">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/05/avatar-1-150x150.jpg"  />
                                                                    </div>
                                                                    <div className="testi-name-position">
                                                                        <div className="testi-client-name">Anna kate</div>
                                                                        <div className="testi-client-position">France</div>
                                                                    </div>
                                                                    <div className="iw-clear-both" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="iw-testimonial-item style1">
                                                            <div className="testi-info-wrap">
                                                                <div className="testi-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                  tempor incididunt ut labore magna aliqua. Ut aliquip ex ea commodo
                            consequat.</div>
                                                                <div className="testi-bottom">
                                                                    <div className="testi-image">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/05/avatar-1-150x150.jpg"  />
                                                                    </div>
                                                                    <div className="testi-name-position">
                                                                        <div className="testi-client-name">Anna kate</div>
                                                                        <div className="testi-client-position">France</div>
                                                                    </div>
                                                                    <div className="iw-clear-both" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="iw-testimonial-item style1">
                                                            <div className="testi-info-wrap">
                                                                <div className="testi-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                  tempor incididunt ut labore magna aliqua. Ut aliquip ex ea commodo
                            consequat.</div>
                                                                <div className="testi-bottom">
                                                                    <div className="testi-image">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/05/avatar-1-150x150.jpg"  />
                                                                    </div>
                                                                    <div className="testi-name-position">
                                                                        <div className="testi-client-name">Anna kate</div>
                                                                        <div className="testi-client-position">France</div>
                                                                    </div>
                                                                    <div className="iw-clear-both" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="iw-testimonial-item style1">
                                                            <div className="testi-info-wrap">
                                                                <div className="testi-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                  tempor incididunt ut labore magna aliqua. Ut aliquip ex ea commodo
                            consequat.</div>
                                                                <div className="testi-bottom">
                                                                    <div className="testi-image">
                                                                        <img src="/wordpress/intravel/wp-content/uploads/2016/05/avatar-1-150x150.jpg"  />
                                                                    </div>
                                                                    <div className="testi-name-position">
                                                                        <div className="testi-client-name">Anna kate</div>
                                                                        <div className="testi-client-position">France</div>
                                                                    </div>
                                                                    <div className="iw-clear-both" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1473841494406 vc_row-has-fill" style={{}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="wpb_column vc_column_container vc_col-sm-12">
                                            <div className="vc_column-inner ">
                                                <div className="wpb_wrapper">
                                                    <div className="iw-heading  style4 vc_custom_1473841376279 text-center" style={{ width: '100%' }}>
                                                        <h3 className="iwh-title" style={{ color: '#232323', fontSize: 48, fontFamily: 'Poppins', fontWeight: 500, lineHeight: 1 }}>Travel guide and tips</h3>
                                                        <div className="iwh-description" style={{ color: '#232323', fontSize: 14, fontWeight: 500, lineHeight: 30 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                                    </div>
                                                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                        <div className="wpb_column vc_column_container vc_col-sm-12">
                                                            <div className="vc_column-inner ">
                                                                <div className="wpb_wrapper">
                                                                    <div className="iw-posts  style3">
                                                                        <div className="iw-posts-list">
                                                                            <div className="owl-carousel" data-plugin-options="{&quot;navigation&quot;:false,&quot;autoPlay&quot;:true,&quot;pagination&quot;:false,&quot;items&quot;:3,&quot;itemsDesktop&quot;:[1199,3],&quot;itemsDesktopSmall&quot;:[991,2],&quot;itemsTablet&quot;:[768,2],&quot;itemsMobile&quot;:[479,1]}">
                                                                                <div className="post-item-wrap">
                                                                                    <div className="post-item iw-effect-img">
                                                                                        <div className="post-item-inner">
                                                                                            <div className="post-thumbnail featured-image effect-1">
                                                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/05/blog_intravel_image_demo_4-372x275.jpg"  />
                                                                                            </div>
                                                                                            <div className="post-content">
                                                                                                <div className="post-date">
                                                                                                    May, 26th, 2016 </div>
                                                                                                <h3 className="post-title">
                                                                                                    <a className="theme-color-hover" href="/wordpress/intravel/home/tips-for-taking-a-long-term-trip-with-kids/">Tips for taking a long-term trip
                                              with kids</a>
                                                                                                </h3>
                                                                                                <div className="read-more">
                                                                                                    <a  href="/wordpress/intravel/home/tips-for-taking-a-long-term-trip-with-kids/">
                                                                                                        Continue
                                              <i className="fa fa-long-arrow-right" />
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-item-wrap">
                                                                                    <div className="post-item iw-effect-img">
                                                                                        <div className="post-item-inner">
                                                                                            <div className="post-thumbnail featured-image effect-1">
                                                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/05/blog_intravel_image_demo_1-372x275.jpg"  />
                                                                                            </div>
                                                                                            <div className="post-content">
                                                                                                <div className="post-date">
                                                                                                    May, 26th, 2016 </div>
                                                                                                <h3 className="post-title">
                                                                                                    <a className="theme-color-hover" href="/wordpress/intravel/home/eight-common-travel-tech-disasters/">Eight common travel tech disasters</a>
                                                                                                </h3>
                                                                                                <div className="read-more">
                                                                                                    <a  href="/wordpress/intravel/home/eight-common-travel-tech-disasters/">
                                                                                                        Continue
                                              <i className="fa fa-long-arrow-right" />
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-item-wrap">
                                                                                    <div className="post-item iw-effect-img">
                                                                                        <div className="post-item-inner">
                                                                                            <div className="post-thumbnail featured-image effect-1">
                                                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/05/blog_intravel_image_demo_2-372x275.jpg"  />
                                                                                            </div>
                                                                                            <div className="post-content">
                                                                                                <div className="post-date">
                                                                                                    May, 26th, 2016 </div>
                                                                                                <h3 className="post-title">
                                                                                                    <a className="theme-color-hover" href="/wordpress/intravel/home/an-a-to-z-of-timeless-travel-advice/">An A to Z of timeless travel
                                              advice</a>
                                                                                                </h3>
                                                                                                <div className="read-more">
                                                                                                    <a href="/wordpress/intravel/home/an-a-to-z-of-timeless-travel-advice/">
                                                                                                        Continue
                                              <i className="fa fa-long-arrow-right" />
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="post-item-wrap">
                                                                                    <div className="post-item iw-effect-img">
                                                                                        <div className="post-item-inner">
                                                                                            <div className="post-thumbnail featured-image effect-1">
                                                                                                <img src="/wordpress/intravel/wp-content/uploads/2016/05/blog_intravel_image_demo_8-372x275.jpg"  />
                                                                                            </div>
                                                                                            <div className="post-content">
                                                                                                <div className="post-date">
                                                                                                    May, 26th, 2016 </div>
                                                                                                <h3 className="post-title">
                                                                                                    <a className="theme-color-hover" href="/wordpress/intravel/home/tips-for-travelling-when-youre-pregnant/">Tips for travelling when you’re
                                              pregnant</a>
                                                                                                </h3>
                                                                                                <div className="read-more">
                                                                                                    <a href="/wordpress/intravel/home/tips-for-travelling-when-youre-pregnant/">
                                                                                                        Continue
                                              <i className="fa fa-long-arrow-right" />
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* .entry-content */}
                        <div className="clearfix" />
                        <footer className="entry-footer ">
                        </footer>
                        {/* .entry-footer */}
                    </article>
                    {/* #post-## */}
                </div>
                <footer className="iw-footer iw-footer-default">
                    <div className="iw-footer-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="inwave-contact-4 widget widget_inwave-contact">
                                        <h3 className="widget-title">Contact Information</h3>
                                        <div className="subtitle">
                                            <div className="line1" />
                                            <div className="line2" />
                                            <div className="clearfix" />
                                        </div>
                                        <div className="footer-widget-contact">
                                            <p>We would be more than happy to help you. Our team advisor are 24/7 at your service to
                  help you.</p>
                                            <ul className="information">
                                                <li>
                                                    <i className="fa fa-envelope" />info@inwavethemes.com</li>
                                                <li className="phone">
                                                    <i className="fa fa-phone" />
                                                    <ul>
                                                        <li> P: 0123 456 789</li>
                                                        <li>P: 0123 456 789 </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <i className="fa fa-map-marker" />34 Barnard St - Suite 111 United States</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="recent-posts-footer-3 widget widget_recent_entries_footer">
                                        <h3 className="widget-title">Recent news</h3>
                                        <div className="subtitle">
                                            <div className="line1" />
                                            <div className="line2" />
                                            <div className="clearfix" />
                                        </div>
                                        <ul className="recent-blog-posts recent-blog-posts-footer">
                                            <li className="recent-blog-post">
                                                <div className="recent-blog-post-detail">
                                                    <h3 className="recent-blog-post-title">
                                                        <a href="/wordpress/intravel/home/10-of-the-worlds-best-learn-to-dive-destinations/">The towns where travellers lose track of time</a>
                                                    </h3>
                                                    <div className="post-date">September 05-2016</div>
                                                </div>
                                                <div className="clearfix" />
                                            </li>
                                            <li className="recent-blog-post">
                                                <div className="recent-blog-post-detail">
                                                    <h3 className="recent-blog-post-title">
                                                        <a href="/wordpress/intravel/home/mother-city-markets-where-to-shop-til-you-drop-in-cape-town/">Mother City markets: where to shop ’til you drop in Cape Town</a>
                                                    </h3>
                                                    <div className="post-date">May 30-2016</div>
                                                </div>
                                                <div className="clearfix" />
                                            </li>
                                            <li className="recent-blog-post">
                                                <div className="recent-blog-post-detail">
                                                    <h3 className="recent-blog-post-title">
                                                        <a href="/wordpress/intravel/home/10-dos-and-donts-for-social-media-savvy-travelers/">10 dos and don’ts for social media-savvy travelers</a>
                                                    </h3>
                                                    <div className="post-date">May 26-2016</div>
                                                </div>
                                                <div className="clearfix" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="nav_menu-2 widget widget_nav_menu">
                                        <h3 className="widget-title">Useful Links</h3>
                                        <div className="subtitle">
                                            <div className="line1" />
                                            <div className="line2" />
                                            <div className="clearfix" />
                                        </div>
                                        <div className="menu-useful-links-container">
                                            <ul id="menu-useful-links" className="menu">
                                                <li id="menu-item-45" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-45">
                                                    <a href="#">Safety</a>
                                                </li>
                                                <li id="menu-item-46" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-46">
                                                    <a href="#">About</a>
                                                </li>
                                                <li id="menu-item-47" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-47">
                                                    <a href="#">Travel Picks</a>
                                                </li>
                                                <li id="menu-item-48" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-48">
                                                    <a href="#">Latest Job</a>
                                                </li>
                                                <li id="menu-item-49" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-49">
                                                    <a href="#">Mobile</a>
                                                </li>
                                                <li id="menu-item-50" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-50">
                                                    <a href="#">Press Release</a>
                                                </li>
                                                <li id="menu-item-51" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-51">
                                                    <a href="#">Why Host</a>
                                                </li>
                                                <li id="menu-item-52" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-52">
                                                    <a href="#">Blog Posts</a>
                                                </li>
                                                <li id="menu-item-53" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-53">
                                                    <a href="#">Social</a>
                                                </li>
                                                <li id="menu-item-54" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-54">
                                                    <a href="#">Connect</a>
                                                </li>
                                                <li id="menu-item-55" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-55">
                                                    <a href="#">Help Topics</a>
                                                </li>
                                                <li id="menu-item-56" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-56">
                                                    <a href="#">Site Map</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 last">
                                    <div className="inwave-subscribe-3 widget widget_inwave-subscribe">
                                        <h3 className="widget-title">Mailing List</h3>
                                        <div className="subtitle">
                                            <div className="line1" />
                                            <div className="line2" />
                                            <div className="clearfix" />
                                        </div>
                                        <div className="iw-mailchimp-form ">
                                            <form className="iw-email-notifications" action="http://joomultra.us12.list-manage.com/subscribe/post?u=fbd801b2d75b67e540b5e0c53&id=2aad0371a2" data-response="{&quot;submit&quot;:&quot;Submitting...&quot;,&quot;0&quot;:&quot;We have sent you a confirmation email&quot;,&quot;1&quot;:&quot;Please enter a value&quot;,&quot;2&quot;:&quot;An email address must contain a single @&quot;,&quot;3&quot;:&quot;The domain portion of the email address is invalid (the portion after the @: )&quot;,&quot;4&quot;:&quot;The username portion of the email address is invalid (the portion before the @: )&quot;,&quot;5&quot;:&quot;This email address looks fake or invalid. Please enter a real email address&quot;}">
                                                <div className="malchimp-desc">Enter your email address for our mailing list to keep yourself updated.</div>
                                                <div className="ajax-overlay">
                                                    <span className="ajax-loading">
                                                        <i className="fa fa-spinner fa-spin fa-2x" />
                                                    </span>
                                                </div>
                                                <input className="mc-email" type="email" placeholder="Email address" />
                                                <button type="submit">DONE</button>
                                                <span className="response">
                                                    <label />
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iw-copy-right">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <p>Copyright 2016 ©
              <a href="#"> Inwavethemes</a>. All rights reserved.</p>
                                    <span className="iw-back-to-top eff">
                                        <i className="fa fa-arrow-up" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}

export default Content;