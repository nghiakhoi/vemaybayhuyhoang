import React, { Component } from 'react';
import jetstarlogo from '../images/jetstarsmall.png';
import vietjetlogo from '../images/vietjetsmall.png';
import vietnamairlinelogo from '../images/vietnamairlinesmall.png';
import iconfly from '../images/iconfly.png';


class BookingItemKhuHoi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHiddenKhuHoi: false
        }
    }

    handleFocusKhuHoi() {
        setTimeout(() => {
            this.setState({
                isHiddenKhuHoi: !this.state.isHiddenKhuHoi
            });
        }, 250)

    }
    handleBlurKhuHoi() {
        setTimeout(() => {
            this.setState({
                isHiddenKhuHoi: false
            });
        }, 250)

    }

    formatnumber = (n, currency) => {

        return currency + n.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    render() {
        var logo = this.props.airline === "Vietjet" ? vietjetlogo : this.props.airline === "Jetstar" ? jetstarlogo : vietnamairlinelogo;

        return (
            <div className="tour-item" style={{ "cursor": "pointer" }}>
                <div className="image-wrap">
                    <div className="img" style={{ background: 'url("' + logo + '") no-repeat center center / 65% 65%', "margin": "0 auto" }} />

                </div>
                <div className="tour-info-wrap">
                    <div className="info-top">

                        <div className="post-meta" style={{ "fontWeight": "bold" }}>


                            <div className="col-md-12" style={{ "marginTop": "15px", "marginBottom": "-25px" }}>
                                <div className="col-md-1" style={{ "fontSize": "20px", "fontWeight": "lighter", "textAlign": "left", "color": "black" }}>
                                    {this.props.flightno !== "" ? this.props.flightno.split(' ').join('') : this.props.aircode}
                                </div>
                                <div className="col-md-2" style={{ "fontSize": "20px", "color": "black", "backgroundImage": 'url("' + iconfly + '")', "backgroundRepeat": "no-repeat", "backgroundPosition": "440% 50%" }}>
                                    {this.props.deptime}
                                </div>
                                <div className="col-md-2" style={{ "fontSize": "20px", "color": "black", "backgroundImage": 'url("' + iconfly + '")', "backgroundRepeat": "no-repeat", "backgroundPosition": "-350% 50%" }}>
                                    {this.props.destime}
                                </div>
                                <div className="col-md-3" style={{ "fontSize": "20px", "textAlign": "left", "color": "#fa6d01" }}>
                                    <p>{this.props.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</p>
                                </div>
                                <div className="col-md-2" >
                                    <input type="button" className="btn btn-primary" onClick={() => this.handleFocusKhuHoi()} onBlur={() => this.handleBlurKhuHoi()} style={{ "fontWeight": "bold" }} value="Chi tiết" id="select_depart_66579" name="go" />
                                </div>
                                <div className="col-md-2">
                                    <input type="button" className="btn btn-success" style={{ }} value="Chọn" id="select_depart_66579" name="go" />
                                </div>
                            </div>
                            {
                                this.state.isHiddenKhuHoi ?

                                    <div className="col-md-12" style={{ "marginTop": "40px", "marginBottom": "-25px", "color": "black" }}>
                                        <div className="full-width BorderTop">
                                            <div className="DetailPriceBox">
                                                <table className="TablePrice" style={{ width: '100%' }} cellSpacing={5} cellPadding={5} border={0}>
                                                    <thead>
                                                        <tr>
                                                            <td className="ItemHeader">Hành khách</td>
                                                            <td className="ItemHeader">Số lượng</td>
                                                            <td className="ItemHeader">Giá vé</td>
                                                            <td className="ItemHeader">Thuế và phí</td>
                                                            <td className="ItemHeader">Thành tiền</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Người lớn <small>(&gt; 12 tuổi)</small></td>
                                                            <td><strong>1</strong></td>
                                                            <td><strong className="ItemPrice">799,000 ₫</strong></td>
                                                            <td><strong className="ItemPrice">480,900 ₫</strong></td>
                                                            <td><strong className="ItemPrice">1,279,900 ₫</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Trẻ em <small>(2-12 tuổi)</small></td>
                                                            <td><strong>1</strong></td>
                                                            <td><strong className="ItemPrice">799,000 ₫</strong></td>
                                                            <td><strong className="ItemPrice">453,400 ₫</strong></td>
                                                            <td><strong className="ItemPrice">1,252,400 ₫</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Em bé <small>(&lt; 2 tuổi)</small></td>
                                                            <td><strong>1</strong></td>
                                                            <td><strong className="ItemPrice">0 ₫</strong></td>
                                                            <td><strong className="ItemPrice">110,000 ₫</strong></td>
                                                            <td><strong className="ItemPrice">110,000 ₫</strong></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="TotalPriceBox">
                                                <strong>Tổng chi phí: </strong>
                                                <span className="GrandTotalPrice">2,642,300</span>
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
            </div>
        );
    }
}

export default BookingItemKhuHoi;