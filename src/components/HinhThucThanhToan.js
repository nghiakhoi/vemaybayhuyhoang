import React, { Component } from 'react';
import axios from 'axios';
import domain from '../router/domain';

const updatehinhthucthanhtoan = (iddonhang, hinhthucthanhtoan) =>
    axios.post(domain + '/updatehinhthucthanhtoan', {
        iddonhang: iddonhang,
        hinhthucthanhtoan: hinhthucthanhtoan,
    }).then((res) => res.data)

class HinhThucThanhToan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option1: false,
            option2: false,
            option3: false,
            address: "",
        }
    }

    submitNow(option, data) {
        if (option === 1) {
            updatehinhthucthanhtoan(this.props.idhoadon, data).then((result) => {
                window.location.replace("/summaryinfo/" + this.props.idhoadon);
            })
        }
        if (option === 2) {
            updatehinhthucthanhtoan(this.props.idhoadon, data).then((result) => {
                window.location.replace("/summaryinfo/" + this.props.idhoadon);
            })
        }
        if (option === 3) {
            updatehinhthucthanhtoan(this.props.idhoadon, data).then((result) => {
                window.location.replace("/summaryinfo/" + this.props.idhoadon);
            })
        }
    }

    render() {
        return (
            <div className="payment-heading" >
                <h2 style={{ color: "rgb(250, 109, 1)" }}>Vui lòng chọn hình thức thanh toán bên dưới</h2>
                <div className="paymentmethod">
                    <div className="listpayment" >
                        <div className="row">
                            <div className="col-md-12" onClick={() => { this.setState({ option1: !this.state.option1, option2: false, option3: false }) }} style={{ background: '#2e3a70', fontWeight: 'bold', color: 'white', fontSize: 16, textAlign: 'center', padding: 10, marginBottom: "10px" }}>
                                Giao vé tận nơi
                                </div>
                            {this.state.option1 ?
                                <table className="bank">
                                    <tbody>
                                        <tr>
                                            <td >
                                                Trong tuần, Nhân viên Vébay247 sẽ đến tận nơi HCM hoặc Đà Nẵng tại địa chỉ của Quý khách yêu cầu để giao vé và thu tiền khi Quý khách có yêu cầu đặt vé . Với hình thức này, Quý khách sẽ chịu mức phí vận chuyển là 0 - 50.000 vnđ/1 lần giao.<br />
                                                <textarea name="address" onChange={(event) => { this.setState({ address: event.target.value }) }} style={{ width: "50%" }} placeholder="Địa chỉ giao vé"></textarea><br />
                                                <input type="button" onClick={() => { this.state.address === "" ? alert('Vui lòng nhập địa chỉ giao vé!') : this.submitNow(1, this.state.address) }} style={{ background: 'rgb(250, 109, 1)', marginTop: "5px" }} name={48} id={48} value="Thanh toán tại địa chỉ này" className="selectbank" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> : null}

                        </div>

                    </div>
                    <div className="listpayment" >
                        <div className="row">
                            <div className="col-md-12" onClick={() => { this.setState({ option1: false, option2: !this.state.option2, option3: false }) }} style={{ background: '#2e3a70', fontWeight: 'bold', color: 'white', fontSize: 16, textAlign: 'center', padding: 10, marginBottom: "10px" }}>
                                Thanh Toán Qua Chuyển Khoản
                                </div>
                            {this.state.option2 ?
                                <table className="bank" >
                                    <tbody>
                                        <tr>
                                            <td >
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan="3">
                                                                <img style={{ width: 126, height: 45, marginRight: 15 }} src="http://vebaygiare247.vn/image/data/bank/ACB.png" />
                                                                <p style={{ color: 'black', fontSize: "16px" }}>Ngân hàng ACB</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Chủ tài khoản: </td>
                                                            <td>Trần Văn Ban</td>
                                                            <td rowSpan="3"><input onClick={() => { this.submitNow(2, "ACB") }} type="button" style={{ background: 'rgb(250, 109, 1)' }} name={48} id={48} value="Chọn Ngân hàng" className="selectbank" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Số TK:</td>
                                                            <td>80317299</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Chi nhánh: </td>
                                                            <td>Sở Giao Dịch Thành phố HCM</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan="3">
                                                                <img style={{ width: 126, height: 45, marginRight: 15 }} src="http://vebaygiare247.vn/image/data/LogoAgribank.jpg" />
                                                                <p style={{ color: 'black', fontSize: "16px" }}>Ngân hàng Agribank</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Chủ tài khoản: </td>
                                                            <td>Trần Văn Ban</td>
                                                            <td rowSpan="3"><input onClick={() => { this.submitNow(2, "Agribank") }} type="button" style={{ background: 'rgb(250, 109, 1)' }} name={48} id={48} value="Chọn Ngân hàng" className="selectbank" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Số TK:</td>
                                                            <td>80317299</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Chi nhánh: </td>
                                                            <td>Sở Giao Dịch Thành phố HCM</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table> : null
                            }

                        </div>
                    </div>
                    <div className="listpayment" >
                        <div className="row">
                            <div className="col-md-12" onClick={() => { this.setState({ option1: false, option2: false, option3: !this.state.option3 }) }} style={{ background: '#2e3a70', fontWeight: 'bold', color: 'white', fontSize: 16, textAlign: 'center', padding: 10, marginBottom: "10px" }}>
                                Thanh Toán Tại Phòng Vé
                                </div>
                            {this.state.option3 ?
                                <table className="bank">
                                    <tbody>
                                        <tr>
                                            <td >
                                                <span style={{ color: "rgb(250, 109, 1)", fontWeight: "bold" }}>Thanh Toán Bằng Tiền Mặt</span><br />
                                                Quý khách sẽ đến văn phòng vemaybayhuyhoang và thanh toán bằng tiền mặt
                                        <br />
                                                <input onClick={() => { this.submitNow(3, "tienmat-phongve") }} type="button" style={{ background: 'rgb(250, 109, 1)', marginTop: "5px" }} name={48} id={48} value="Chọn" className="selectbank" />
                                            </td>
                                            <td >
                                                <span style={{ color: "rgb(250, 109, 1)", fontWeight: "bold" }}>Thanh Toán ATM</span><br />
                                                Quý khách mang theo thẻ ATM đến phòng vé để thanh toán và nhận vé
                                        <br />
                                                <input onClick={() => { this.submitNow(3, "ATM-phongve") }} type="button" style={{ background: 'rgb(250, 109, 1)', marginTop: "5px" }} name={48} id={48} value="Chọn" className="selectbank" />
                                            </td>
                                            <td >
                                                <span style={{ color: "rgb(250, 109, 1)", fontWeight: "bold" }}>Thanh Toán Thẻ VISA/Master</span><br />
                                                Quý khách mang theo thẻ VISA/Master đến phòng vé để thanh toán và nhận vé
                                        <br />
                                                <input onClick={() => { this.submitNow(3, "VISA/Master-phongve") }} type="button" style={{ background: 'rgb(250, 109, 1)', marginTop: "5px" }} name={48} id={48} value="Chọn" className="selectbank" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> : null
                            }

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default HinhThucThanhToan;