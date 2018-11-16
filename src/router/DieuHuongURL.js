import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/Home';
import Booking from '../components/Booking';
import YourInfo from '../components/YourInfo';
import SummaryInfo from '../components/SummaryInfo';
import HoaDon from '../components/Admin/HoaDon';
import DanhSachTinTuc from '../components/DanhSachTinTuc';
import DanhSachTinTucKhuyenMai from '../components/DanhSachTinTucKhuyenMai';
import ChiTietTinTuc from '../components/ChiTietTinTuc';
import ChiTietDanhMuc from '../components/ChiTietDanhMuc';
import HuongDanThanhToan from '../components/HuongDanThanhToan';
import Contact from '../components/Contact';
import ChiTietTinTucKhuyenMai from '../components/ChiTietTinTucKhuyenMai';
import LoginPage from '../components/LoginPage';
import Admin from '../components/Admin/Admin';
import AddTinTuc from '../components/Admin/AddTinTuc';

class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/booking" component={Booking} />
                    <Route exact path="/yourinfo" component={YourInfo} />
                    <Route exact path="/summaryinfo/:id" component={SummaryInfo} />
                    <Route exact path="/tintuc" component={DanhSachTinTuc} />
                    <Route exact path="/tinkhuyenmai" component={DanhSachTinTucKhuyenMai} />
                    <Route exact path="/huong-dan-thanh-toan" component={HuongDanThanhToan} />
                    <Route exact path="/lien-he" component={Contact} />
                    <Route exact path="/tin-chi-tiet/:slug.:id.html" component={ChiTietTinTuc} />
                    <Route exact path="/tin-khuyen-mai/:slug.:id.html" component={ChiTietTinTucKhuyenMai} />
                    <Route exact path="/danh-muc/:slug.:id.html" component={ChiTietDanhMuc} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/admin/addtintuc" component={AddTinTuc} />
                    <Route exact path="/admin/hoadon" component={HoaDon} />
                </div>
            </Router>
        );
    }
}

export default DieuHuongURL;