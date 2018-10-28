import React, { Component } from 'react';
import jetstarlogo from '../images/jetstarmini.png';
import vietjetlogo from '../images/vietjetmini.png';
import vietnamairlinelogo from '../images/vietnamairlinemini.png';

const get_day_name = (custom_date) => {
    var myDate = custom_date;
    myDate = myDate.split("-");
    var newDate = myDate[2] + "-" + myDate[1] + "-" + myDate[0];
    var currentDate = new Date(newDate);
    var day_name = currentDate.getDay();
    var days = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    return days[day_name];
}
const get_full_day_format_vietnam = (custom_date) => {
    var myDate = custom_date;
    myDate = myDate.split("-");
    var year = myDate[2];
    var month = myDate[1];
    var day = myDate[0];
    var fulldayformatvietnam = day + " tháng " + month + " " + year;
    return fulldayformatvietnam;
}

class SummaryChuyenBayItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonchuyenbay: this.props.jsonchuyenbay ? JSON.parse(this.props.jsonchuyenbay) : null
        }
    }

    render() {
        var logo = this.state.jsonchuyenbay !== null ? this.state.jsonchuyenbay.airline === "Vietjet" ? vietjetlogo : this.state.jsonchuyenbay.airline === "Jetstar" ? jetstarlogo : vietnamairlinelogo : null;
        return (
            <React.Fragment>
                <table className="header nav-down">
                    <tbody>
                        <tr>
                            <th>
                                <span className="airplane_icon">&nbsp;</span>
                                <span className="city">{this.state.jsonchuyenbay.depcode}<br />
                                </span>
                                <strong className="route_arrow">→</strong>
                                <span className="city">{this.state.jsonchuyenbay.descode}<br />
                                </span>
                            </th>
                            <td>
                                <span>&nbsp;</span>Ngày đi: <strong>{get_day_name(this.state.jsonchuyenbay.datefull)}, {get_full_day_format_vietnam(this.state.jsonchuyenbay.datefull)}</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="legs">
                    <tbody>
                        <tr>
                            <td className="logo"><img src={logo} /><br />{this.state.jsonchuyenbay.airline}</td>
                            <td className="airport"><strong>Khởi hành</strong><br />{this.state.jsonchuyenbay.depcode}<br /><strong>{this.state.jsonchuyenbay.deptime}</strong></td>
                            <td className="airport"><strong>Đến nơi</strong><br />{this.state.jsonchuyenbay.descode}<br /><strong>{this.state.jsonchuyenbay.destime}</strong><br /></td>
                            <td>&nbsp;<br />Chuyến bay: <strong>{this.state.jsonchuyenbay.flightno === "" ? this.state.jsonchuyenbay.air_code : this.state.jsonchuyenbay.flightno}</strong><br />Giá vé: <strong>{parseInt(this.state.jsonchuyenbay.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} ₫</strong><br /></td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default SummaryChuyenBayItem;