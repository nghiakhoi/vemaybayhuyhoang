import React, { Component } from 'react';
import HeaderBooking from './HeaderBooking';
import Footer from './Footer';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="wrapper st-body">
                    <HeaderBooking />
                    <div className="left_item ">
                        <h2 className="title_item">Liên Hệ
            </h2>
                        <div className="content_category_item">
                            <div>
                                <p style={{ textAlign: 'center' }}>
                                    <span style={{ fontFamily: 'Arial, Helvetica, Tahoma, Verdana', fontSize: 11, fontWeight: 'bold' }}>VÉ MÁY BAY HUY HOÀNG</span></p>
                                <p style={{ textAlign: 'center' }}>
                                    <span style={{ fontFamily: 'Arial, Helvetica, Tahoma, Verdana', fontSize: 11, fontWeight: 'bold' }}>Số 52/20 đường số 4, khu phố 6, P. Hiệp Bình Phước, Q. Thủ Đức, Tp. Hồ Chí Minh</span><br style={{ color: 'rgb(255,255,255)', fontFamily: 'Arial, Helvetica, Tahoma, Verdana', fontSize: 11, fontWeight: 'bold' }} /><span style={{ fontFamily: 'Arial, Helvetica, Tahoma, Verdana', fontSize: 11, fontWeight: 'bold' }}>Tel:&nbsp;0901.438.151 - 0866.598.443 - 0911.229.543 </span><br style={{ color: 'rgb(255,255,255)', fontFamily: 'Arial, Helvetica, Tahoma, Verdana', fontSize: 11, fontWeight: 'bold' }} /><strong>@VEMAYBAYHUYHOANG 2018</strong></p></div>
                            <div className="clear" />
                            <div id="map" style={{ "width": "100%", "height": "500px" }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6298334790094!2d106.71695331506892!3d10.839613992278734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUwJzIyLjYiTiAxMDbCsDQzJzA4LjkiRQ!5e0!3m2!1svi!2s!4v1540844812793" width="600" height="450" frameBorder="0" style={{ "border": "0" }} allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;