import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/Home';
import Booking from '../components/Booking';
import YourInfo from '../components/YourInfo';
import SummaryInfo from '../components/SummaryInfo';
import HoaDon from '../components/Admin/HoaDon';
import DanhSachTinTuc from '../components/DanhSachTinTuc';
import ChiTietTinTuc from '../components/ChiTietTinTuc';
import ChiTietDanhMuc from '../components/ChiTietDanhMuc';
import HuongDanThanhToan from '../components/HuongDanThanhToan';
import Contact from '../components/Contact';

class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/booking" component={Booking} />
                    <Route exact path="/yourinfo" component={YourInfo} />
                    <Route exact path="/summaryinfo" component={SummaryInfo} />
                    <Route exact path="/tintuc" component={DanhSachTinTuc} />
                    <Route exact path="/huong-dan-thanh-toan" component={HuongDanThanhToan} />
                    <Route exact path="/lien-he" component={Contact} />
                    <Route exact path="/tin-chi-tiet/:slug.:id.html" component={ChiTietTinTuc} />
                    <Route exact path="/danh-muc/:slug.:id.html" component={ChiTietDanhMuc} />
                    <Route exact path="/admin/hoadon" component={HoaDon} />
                </div>
            </Router>
        );
    }
}

export default DieuHuongURL;