import React, { Component } from 'react';
import jetstarlogo from '../images/jetstarsmall.png';
import vietjetlogo from '../images/vietjetsmall.png';
import vietnamairlinelogo from '../images/vietnamairlinesmall.png';
import iconfly from '../images/iconfly.png';


class BookingItem extends Component {
    formatnumber = (n, currency)=>{
        
        return currency + n.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}
    render() { 
        var logo = this.props.airline === "Vietjet" ? vietjetlogo : this.props.airline === "Jetstar" ? jetstarlogo : vietnamairlinelogo;
        return (
            <div className="tour-item">
                <div className="image-wrap">
                    <div className="img" style={{ background: 'url("' + logo + '") no-repeat center center / 65% 65%' }} />

                </div>
                <div className="tour-info-wrap">
                    <div className="info-top">

                        <div className="post-meta" style={{ "font-weight": "bold" }}>


                            <div className="col-md-12" style={{ "margin-top": "15px", "margin-bottom": "-25px" }}>
                                <div className="col-md-1" style={{ "font-size": "20px", "font-weight": "lighter", "text-align": "left", "color":"black" }}>
                                    {this.props.flightno !== "" ? this.props.flightno.split(' ').join('') : this.props.aircode}
                                </div>
                                <div className="col-md-2" style={{ "font-size": "20px" , "color":"black", "background-image": 'url("' + iconfly + '")', "background-repeat":"no-repeat","background-position":"440% 50%" }}>
                                    {this.props.deptime}   
                                </div>
                                <div className="col-md-2" style={{ "font-size": "20px" , "color":"black", "background-image": 'url("' + iconfly + '")', "background-repeat":"no-repeat","background-position":"-350% 50%" }}>
                                    {this.props.destime}
                                </div>
                                <div className="col-md-3" style={{ "font-size": "20px", "text-align": "left" , "color":"#fa6d01" }}>
                                    <p>{this.props.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0,-2)} VND</p>
                                </div>
                                <div className="col-md-2">
                                    <a style={{ "font-weight": "bold"}} href="#">Chi tiết</a>
                                </div>
                                <div className="col-md-2">
                                    <input type="button" className="btn btn-primary" style={{ "background":"#49a32b" }} value="Chọn" id="select_depart_66579" name="go" />
                                </div>
                            </div>




                        </div>
                    </div>
                    <div className="tour-price-vote">
                        <div className="price-tour theme-color"></div>
                        <div className="tour-social">
                            {/* {<ul className="socials theme-color">
                                <a style={{ "font-weight": "bold" }} href="#">Chi tiết</a>
                            </ul>} */}
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}

export default BookingItem;