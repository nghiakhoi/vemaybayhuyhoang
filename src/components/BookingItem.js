import React, { Component } from 'react';
import jetstarlogo from '../images/jetstarsmall.png';
import vietjetlogo from '../images/vietjetsmall.png';
import vietnamairlinelogo from '../images/vietnamairlinesmall.png';
import iconfly from '../images/iconfly.png';
import { priceAdultOrigin, priceChildOrigin, priceInfOrigin, priceAdult, priceChild, priceInf } from '../router/settingmoney';

var adultnum = localStorage.getItem("adult") ? parseInt(localStorage.getItem("adult")) : 1;
var childnum = localStorage.getItem("child") ? parseInt(localStorage.getItem("child")) : 0;
var infnum = localStorage.getItem("inf") ? parseInt(localStorage.getItem("inf")) : 0;

class BookingItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
            currentchoose: false
        }
    }

    handleFocus() {
        setTimeout(() => {
            this.setState({
                isHidden: !this.state.isHidden
            });
        }, 250)

    }
    handleBlur() {
        setTimeout(() => {
            this.setState({
                isHidden: false
            });
        }, 250)

    }


    formatnumber = (n, currency) => {

        return currency + n.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    render() {
        var logo = this.props.airline === "Vietjet" ? vietjetlogo : this.props.airline === "Jetstar" ? jetstarlogo : vietnamairlinelogo;

        return (
            this.props.anhienbtngiavestatecha ?
                <div className="tour-item col-xs-12" style={{ "cursor": "pointer" }}>
                    <div className="image-wrap">
                        <div className="img" style={{ background: 'url("' + logo + '") no-repeat center center / 65% 65%', "margin": "0 auto" }} />

                    </div>
                    <div className="tour-info-wrap">
                        <div className="info-top">

                            <div className="post-meta" style={{ "fontWeight": "bold" }}>


                                <div className="col-md-12 col-xs-12" style={{ "marginBottom": "-25px" }}>
                                    <div className="col-md-2 col-xs-2" style={{ "fontSize": "20px", "fontWeight": "lighter", "textAlign": "left", "color": "black" }}>
                                        <p style={{ "fontSize": "14px" }}>Chuyến bay</p>
                                        {this.props.flightno !== "" ? this.props.flightno.split(' ').join('') : this.props.aircode}
                                    </div>
                                    <div className="col-md-3 col-xs-3" style={{ "fontSize": "20px", "color": "black" }}>
                                        <p style={{ "fontSize": "14px" }}>{localStorage.getItem('dep')} - {localStorage.getItem('des')}</p>
                                        {this.props.deptime} - {this.props.destime}
                                    </div>
                                    <div className="col-md-3 col-xs-3" style={{ "fontSize": "20px", "color": "#fa6d01" }}>
                                        <p style={{ "fontSize": "14px", "color": "black" }}>Giá trước thuế</p>
                                        {this.props.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND
                                    </div>
                                    <div className="col-md-2 col-xs-2" >
                                        <a onClick={() => this.handleFocus()} onBlur={() => this.handleBlur()} href="javascript:void(0)" name="hihihiho" id="hihihiho" htmlFor="select_return_68006" className="btn btn-success flight-select pull-right">
                                            <input type="radio" defaultValue={68006} id="select_return_68006" data-module="return" name="return" style={{ display: 'none' }} />
                                            <strong className="show_68006">Giá sau thuế</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-2 col-xs-2">
                                        <a onClick={() => this.props.anhienbtngiave(this.props.fullinfo)} href="javascript:void(0)" name="hihihiho" id="hihihiho" htmlFor="select_return_68006" className="btn btn-success flight-select pull-right">
                                            <input type="radio" defaultValue={68006} id="select_return_68006" data-module="return" name="return" style={{ display: 'none' }} />
                                            <strong className="show_68006">Chọn</strong>
                                        </a>

                                    </div>
                                </div>
                                {
                                    this.state.isHidden ?

                                        <div className="col-md-12 col-xs-12" style={{ "marginTop": "40px", "marginBottom": "-25px", "color": "black" }}>
                                            <div className="full-width BorderTop">
                                                <div className="DetailPriceBox">
                                                    <table className="TablePrice" style={{ width: '100%' }} cellSpacing={5} cellPadding={5} border={0}>
                                                        <thead>
                                                            <tr>
                                                                <td className="ItemHeader">Hành khách</td>
                                                                <td className="ItemHeader">Số lượng</td>
                                                                <td className="ItemHeader">Giá hãng</td>
                                                                <td className="ItemHeader">Thuế và phí</td>
                                                                <td className="ItemHeader">Giá 1 vé</td>
                                                                <td className="ItemHeader">Thành tiền</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Người lớn <small>(&gt; 12 tuổi)</small></td>
                                                                <td><strong>{localStorage.getItem("adult") ? localStorage.getItem("adult") : "1"}</strong></td>
                                                                <td><strong className="ItemPrice">{this.props.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                                <td><strong className="ItemPrice">{(this.props.adult.taxfee - (priceAdultOrigin) + (priceAdult)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                                <td><strong className="ItemPrice">{((this.props.adult.taxfee - (priceAdultOrigin) + (priceAdult)) + this.props.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                                <td><strong className="ItemPrice">{(((this.props.adult.taxfee - (priceAdultOrigin) + (priceAdult)) + this.props.baseprice) * adultnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                            </tr>
                                                            {
                                                                Array.isArray(this.props.child) ? null :
                                                                    <tr>
                                                                        <td>Trẻ em <small>(2-12 tuổi)</small></td>
                                                                        <td><strong>{localStorage.getItem("child") ? localStorage.getItem("child") : "0"}</strong></td>
                                                                        <td><strong className="ItemPrice">{this.props.child.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                                        <td><strong className="ItemPrice">{(this.props.child.taxfee - (priceChildOrigin) + (priceChild)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                                        <td><strong className="ItemPrice">{((this.props.child.taxfee - (priceChildOrigin) + (priceChild)) + this.props.child.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                                        <td><strong className="ItemPrice">{(((this.props.child.taxfee - (priceChildOrigin) + (priceChild)) + this.props.child.baseprice) * childnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                                    </tr>
                                                            }
                                                            {
                                                                Array.isArray(this.props.inf) ? null :
                                                                    <tr>
                                                                        <td>Em bé <small>(&lt; 2 tuổi)</small></td>
                                                                        <td><strong>{localStorage.getItem("inf") ? localStorage.getItem("inf") : "0"}</strong></td>
                                                                        <td><strong className="ItemPrice">{this.props.inf.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                                        <td><strong className="ItemPrice">{(parseInt(this.props.inf.taxfee) - (priceInfOrigin) + (priceInf)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                                        <td><strong className="ItemPrice">{((parseInt(this.props.inf.taxfee) - (priceInfOrigin) + (priceInf)) + this.props.inf.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                                        <td><strong className="ItemPrice">{(((parseInt(this.props.inf.taxfee) - (priceInfOrigin) + (priceInf)) + this.props.inf.baseprice) * infnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                                                                    </tr>
                                                            }

                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="TotalPriceBox">
                                                    <strong>Tổng chi phí: </strong>
                                                    <span className="GrandTotalPrice">{(this.props.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span>
                                                    <span className="Currency"> VND</span>
                                                </div>
                                            </div>


                                        </div> : ""
                                }
                            </div>
                        </div>
                        <div className="tour-price-vote">
                            <div className="price-tour theme-color"></div>
                            <div className="tour-social">
                                <ul className="socials"></ul>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div> : ""
        );
    }
}

export default BookingItem;