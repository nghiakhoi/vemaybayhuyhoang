import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <div className="header-search-tour">
                <div className="intravel-destination-search">
                    <div className="intravel-destination-bgimage" style={{ backgroundImage: 'url(/images/tour_destination_roma.jpg)' }} />
                    <div className="intravel-destination-bgimage2 transparent" />
                    <div className="intravel-destination-search-inner">
                        <div className="iw-logo-home">
                            <a href="/wordpress/intravel/home/">
                                <img src="images/inTravel.png" />
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
                                    <li className="destination-menu-item " data-destination-slug="paris" data-destination-backgroundimg="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_roma.jpg">
                                        <span>Hà Nội
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item active" data-destination-slug="rome" data-destination-backgroundimg="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_paris.jpg">
                                        <span>Đà Nẵng
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item " data-destination-slug="san-francisco" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_california.jpg">
                                        <span>Thành phố Hồ Chí Minh
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
        );
    }
}

export default Slider;