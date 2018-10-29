import React, { Component } from 'react';
import HeaderBooking from './HeaderBooking';
import Footer from './Footer';
import DanhSachTinTucContent from './DanhSachTinTucContent';

class DanhSachTinTuc extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="wrapper st-body">
                    <HeaderBooking />
                    <DanhSachTinTucContent />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default DanhSachTinTuc;