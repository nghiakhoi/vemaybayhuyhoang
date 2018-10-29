import React, { Component } from 'react';

class HeaderBooking extends Component {
    render() {
        return (

            <div className="header header-default header-default-edition header-sticky ">
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
                                    <div className="contact">Địa chỉ: <i className="fa fa-map-marker" /> Số 52/20 đường số 4, khu phố 6, P. Hiệp Bình Phước, Q. Thủ Đức, Tp. Hồ Chí Minh.
 Hotline <i className="fa fa-phone-square" /> 0901.438.151 - 0866.598.443 - 0911.229.543 </div>
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
                                    <a href="/" title="InTravel">
                                        <img className="main-logo" src="../images/logo.png" alt="InTravel" />
                                        <img className="sticky-logo" src="../images/logo_sticky.png" alt="InTravel" />
                                    </a>
                                </h1>
                            </div>
                            <div className="col-md-10 col-menu">
                                <div className="iw-menu-header-default">
                                    <nav className="main-menu iw-menu-main nav-collapse">
                                        {/*Menu desktop*/}
                                        <div className="iw-main-menu">
                                            <ul id="menu-main-menu-1" className="iw-nav-menu  nav-menu nav navbar-nav">
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-1309">
                                                    <a href="/">Trang chủ<small className="icon-arrow" /></a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102">
                                                    <a href="/booking">Booking<small className="icon-arrow" /></a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102">
                                                    <a href="/tintuc">Tin tức<small className="icon-arrow" /></a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102">
                                                    <a href="/huong-dan-thanh-toan">Hướng Dẫn Thanh Toán<small className="icon-arrow" /></a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102">
                                                    <a href="/huong-dan-thanh-toan">Hướng Dẫn Thanh Toán<small className="icon-arrow" /></a>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102">
                                                    <a href="/lien-he">Liên hệ<small className="icon-arrow" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-1 col-search">
                                <div className="iw-search-cart">

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