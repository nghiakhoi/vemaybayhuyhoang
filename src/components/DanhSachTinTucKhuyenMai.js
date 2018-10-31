import React, { Component } from 'react';
import HeaderBooking from './HeaderBooking';
import Footer from './Footer';
import DanhSachTinTucContentKhuyenMai from './DanhSachTinTucContentKhuyenMai';

class DanhSachTinTucKhuyenMai extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="wrapper st-body">
                    <HeaderBooking />
                    <DanhSachTinTucContentKhuyenMai />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default DanhSachTinTucKhuyenMai;