import React, { Component } from 'react';
import axios from 'axios';
import HeaderBooking from './HeaderBooking';
import Footer from './Footer';
import PeopleItem from './PeopleItem';
import SummaryChuyenBayItem from './SummaryChuyenBayItem';

var idhoadonDone = localStorage.getItem("idhoadon") ? localStorage.getItem("idhoadon") : null;
const getInvoiceById = (iddonhang) =>
    axios.post('/getinvoicebyid', {
        iddonhang: iddonhang
    }).then((res) => res.data)

class SummaryInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idhoadon: idhoadonDone,
            datahoadon: null
        }
    }

    componentWillMount() {
        if (this.state.idhoadon === null) {
            window.location.replace("/");
        } else {
            localStorage.removeItem("ticketchoosed");
            localStorage.removeItem("ticketchoosedkhuhoi");
        }
        getInvoiceById(idhoadonDone).then((result) => {
            console.log(result);
            this.setState({
                datahoadon: result
            });
        });
    }

    printData = () => {
        if (this.state.datahoadon !== null) {

            return this.state.datahoadon.data.map((value, key) =>
                (
                    value.loaichuyenbay === "di" ?
                        <PeopleItem
                            key={key}
                            quydanh={value.quydanh}
                            ho={value.ho}
                            demvaten={value.tendemvaten}
                        />
                        : ""
                )
            );
        }
    }
    printDatachuyenbay = (loaichuyenbay) => {
        if (this.state.datahoadon !== null) {
            var findFirstItem = null;
            for (var i = 0; i < this.state.datahoadon.data.length; i++) {
                if (this.state.datahoadon.data[i].loaichuyenbay === loaichuyenbay) {
                    findFirstItem = this.state.datahoadon.data[i].jsonchuyenbay;
                    return (
                        <SummaryChuyenBayItem
                            jsonchuyenbay={findFirstItem}
                        />
                    )
                }
            }
        }
    }

    render() {


        return (
            <div className="wrapper st-body">
                <HeaderBooking />
                <div className="iw-tour-listing" id="contents-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-30">

                                <div id="result_content">
                                    <div className="simple_box mb-20">
                                        <h2 className="confirmed">Mã đơn hàng: <span>{this.state.datahoadon !== null ? this.state.datahoadon.data[0].code : ""}</span></h2>
                                        <p style={{ marginTop: 10, padding: '5px 10px', background: '#fef4eb', borderBottom: '1px solid #fcdabf', marginBottom: 10, borderTop: '1px solid #fcdabf' }}>
                                            Trạng thái đơn hàng của quý khách <strong style={{ color: '#F00' }}>Đợi xử lý</strong>.!
          </p>
                                        <div className="contained_box">
                                            <p style={{ fontStyle: 'italic' }}><span style={{ fontFamily: 'times new roman,times,serif' }}><span style={{ fontSize: 16 }}>Cám ơn quý khách đã sử dụng dịch vụ&nbsp;của công ty chúng tôi.&nbsp;Quý khách vui lòng kiểm tra email để nhận phiếu xác nhận đặt hàng&nbsp;thành công từ <strong><a href="http://vemaybayhuyhoang.com">vemaybayhuyhoang.com</a> - Vé máy bay trực tuyến giá rẻ</strong>. &nbsp;Chúng tôi sẽ sớm liên hệ với Quý khách trong vài phút.</span></span></p>
                                            <p style={{ fontStyle: 'italic' }}><span style={{ fontFamily: 'times new roman,times,serif' }}><strong><span style={{ fontSize: 16 }}>Chúc quý khách có một chuyến đi&nbsp;thật vui vẻ và bổ ích. Chân thành cám ơn !</span></strong></span></p>
                                        </div>
                                        <h3><i className="fa fa-users mr-5" aria-hidden="true" />Thông tin hành khách</h3>
                                        <div className="two_column">
                                            <div className="cLeft biling-info-fake">
                                                {this.printData()}
                                            </div>
                                        </div>
                                        <h3><i className="fa fa-info mr-5" aria-hidden="true" />Thông tin liên hệ</h3>
                                        <div className="two_column">
                                            <div className="cLeft biling-info-fake">
                                                <table className="summary">
                                                    <tbody>
                                                        <tr>
                                                            <th>Họ tên:</th>
                                                            <td>{this.state.datahoadon ? this.state.datahoadon.data[0].fullname : ""}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Điện thoại:</th>
                                                            <td>{this.state.datahoadon ? this.state.datahoadon.data[0].phone : ""}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Email:</th>
                                                            <td>{this.state.datahoadon ? this.state.datahoadon.data[0].email === "null" ? "Không" : this.state.datahoadon.data[0].email : ""}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Địa chỉ:</th>
                                                            <td>{this.state.datahoadon ? this.state.datahoadon.data[0].address === "null" ? "Không" : this.state.datahoadon.data[0].address : ""}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <h3><i className="fa fa-plane mr-5" aria-hidden="true" />Tóm tắt chuyến bay</h3>
                                        <div className="thick_box itinerary_route">
                                            {this.printDatachuyenbay("di")}
                                            {this.printDatachuyenbay("khuhoi")}

                                        </div>
                                    </div>
                                    <div className="simple_box two_column mb-30">
                                        <h3 className="tLeft">Chi tiết giá</h3>
                                        <div className="clear" />
                                        <div className="cLeft biling-info-fake">
                                            <table className="summary">
                                                <tbody>
                                                    <tr>
                                                        <td>Thuế và phí:</td>
                                                        <td style={{ textAlign: 'right', verticalAlign: 'bottom' }}>{this.state.datahoadon ? parseInt(this.state.datahoadon.data[0].subtotalorigin).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2) : ""} ₫</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phí Hành lý:</td>
                                                        <td style={{ textAlign: 'right', verticalAlign: 'bottom' }}>{this.state.datahoadon ? (parseInt(this.state.datahoadon.data[0].subtotalwithhanhly) - parseInt(this.state.datahoadon.data[0].subtotalorigin)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2) : ""} ₫</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table className="total_below">
                                                <tbody>
                                                    <tr>
                                                        <th style={{ paddingTop: 8 }} className="strong">Tổng cộng:</th>
                                                        <td style={{ paddingTop: 8 }} className="green">{this.state.datahoadon ? parseInt(this.state.datahoadon.data[0].subtotalwithhanhly).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2) : ""} ₫</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        );
    }
}

export default SummaryInfo;