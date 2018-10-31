import React, { Component } from 'react';
import moment from 'moment';

class Footer extends Component {
    render() {
        return (
            <footer className="iw-footer iw-footer-default">
                <div className="iw-footer-middle">
                    <div className="container">
                        <div className="row" style={{ textAlign: "left" }}>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="inwave-contact-4 widget widget_inwave-contact">
                                    <h3 className="widget-title">Thông tin liên hệ</h3>
                                    <div className="subtitle">
                                        <div className="line1" />
                                        <div className="line2" />
                                        <div className="clearfix" />
                                    </div>
                                    <div className="footer-widget-contact">
                                        <p>Chúng tôi tự hào mang đến cho quý khách chất lượng phục vụ tốt nhất</p>
                                        <ul className="information">
                                            <li>
                                                <i className="fa fa-phone" />
                                                0901.438.151 - 0866.598.443 - 0911.229.543
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope" />vemaybayhuyhoang@gmail.com
                                                </li>
                                            <li>
                                                <i className="fa fa-map-marker" />Số 52/20 đường số 4, khu phố 6, P. Hiệp Bình Phước, Q. Thủ Đức, Tp. Hồ Chí Minh
</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 last">
                                <div className="inwave-subscribe-3 widget widget_inwave-subscribe">
                                    <h3 className="widget-title">Fanpage</h3>
                                    <div className="fb-page" data-href="https://www.facebook.com/maybayhuyhoang/" data-tabs="timeline" data-height="100" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/maybayhuyhoang/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/maybayhuyhoang/">Vé máy bay giá rẻ Vietjet - Jetstar - Vietnam Airline</a></blockquote></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="iw-copy-right">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <p>Copyright {moment().format("YYYY")} ©
              <a href="/"> vemaybayhuyhoang.com</a>. All rights reserved.</p>
                                <span className="iw-back-to-top eff">
                                    <i className="fa fa-arrow-up" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;