import React, { Component } from 'react';

class BookingItem extends Component {
    render() {
        return (
            <div className="tour-item">
                <div className="image-wrap">
                    <div className="img" style={{ background: 'url("http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_san_francisco_3-1-600x560.jpg") no-repeat center center / cover' }} />
                    <div className="booking-action">
                        <a className="link-to-detail theme-bg" href="http://inwavethemes.com/wordpress/intravel/home/tours/san-francisco-museum-of-modern-art/">
                            Book now                  </a>
                    </div>
                </div>
                <div className="tour-info-wrap">
                    <div className="info-top">
                        <h3 className="title">
                            <a className="theme-color" href="http://inwavethemes.com/wordpress/intravel/home/tours/san-francisco-museum-of-modern-art/">{this.props.airline}</a>
                        </h3>
                        <div className="post-meta">
                            <ul>
                                <li>
                                    <div className="iwt-rating">
                                        <div className="iw-star-rating"><span className="rating" style={{ width: '80%' }} /></div>                              </div>
                                </li>
                                <li className="destinations">
                                    <i className="fa fa-map-marker"> </i>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/destination/san-francisco/" className="destination">San Francisco</a> / <a href="http://inwavethemes.com/wordpress/intravel/home/destination/usa/" className="destination">USA</a>                              </li>
                                <li>
                                    <span className="duration"><i className="fa fa-clock-o" aria-hidden="true" /> 01 day</span>
                                </li>
                            </ul>
                        </div>
                        <div className="description">Founded in 1935, the San Francisco Museum of Modern Art was the first museum on the West Coast dedicated to…</div>
                    </div>
                    <div className="tour-price-vote">
                        <div className="price-tour theme-color">{this.props.baseprice}</div>
                        <div className="tour-social">
                            <ul className="socials">
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}

export default BookingItem;