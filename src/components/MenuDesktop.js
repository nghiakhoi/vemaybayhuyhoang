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
                                    <img alt="test" className="sticky-logo" src="images/logo.png" />
                                </a>
                            </h1>
                        </div>
                        <div className="col-md-8 col-sm-6 col-xs-6">
                            <nav className="main-menu iw-menu-main nav-collapse">
                                {/*Menu desktop*/}
                                <div className="iw-main-menu">
                                    <ul id="menu-main-menu-1" className="iw-nav-menu  nav-menu nav navbar-nav">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-948 current_page_item menu-item-has-children menu-item-1309 selected active ">
                                            <a href="/">Trang chủ</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102">
                                            <a href="/tintuc">Tin tức</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102">
                                            <a href="/tinkhuyenmai">Tin Khuyến Mãi</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1102">
                                            <a href="/huong-dan-thanh-toan">Hướng Dẫn Thanh Toán</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1006">
                                            <a href="/lien-he">Liên hệ</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="iw-search-cart">

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