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
    var days = new Array("Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy");
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
const get_distance_two_days = (dayfirst, daysecond) => {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var myDate1 = dayfirst;
    myDate1 = myDate1.split("-");
    var year1 = myDate1[2];
    var month1 = myDate1[1];
    var day1 = myDate1[0];
    var firstDate = new Date(year1, month1, day1);

    var myDate2 = daysecond;
    myDate2 = myDate2.split("-");
    var year2 = myDate2[2];
    var month2 = myDate2[1];
    var day2 = myDate2[0];
    var secondDate = new Date(year2, month2, day2);

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    return diffDays;
}
const subtractOnYear = (dayinput) => {
    var myDate1 = dayinput;
    myDate1 = myDate1.split("-");
    var year1 = myDate1[2];
    var month1 = myDate1[1];
    var day1 = myDate1[0];
    var firstDate = new Date(year1, month1, day1);
    firstDate.setMonth((firstDate.getMonth() - 1) - (12 * 2));
    var d = firstDate.getUTCDate().toString(),
        m = (firstDate.getUTCMonth() + 1).toString(),
        y = firstDate.getUTCFullYear().toString(),
        formatted = '';
    if (d.length === 1) {
        d = '0' + d;
    }
    if (m.length === 1) {
        m = '0' + m;
    }
    formatted = d + '-' + m + '-' + y;
    return formatted;
}

class YourInfoContent extends Component {
    render() {
        let ticketchoosed = localStorage.getItem("ticketchoosed") ? JSON.parse(localStorage.getItem("ticketchoosed")) : null;
        let ticketchoosedKhuHoi = localStorage.getItem("ticketchoosedkhuhoi") ? JSON.parse(localStorage.getItem("ticketchoosedkhuhoi")) : null;
        let adult = (localStorage.getItem("adult")) ? localStorage.getItem("adult") : 0;
        let child = (localStorage.getItem("child")) ? localStorage.getItem("child") : 0;
        let inf = (localStorage.getItem("inf")) ? localStorage.getItem("inf") : 0;
        let tongsonguoi = parseInt(adult) + parseInt(child) + parseInt(inf);
        let taxfeeadult = Array.isArray(ticketchoosed.adult) ? 0 : ticketchoosed.adult.taxfee;
        let taxfeechild = Array.isArray(ticketchoosed.child) ? 0 : ticketchoosed.child.taxfee;
        let taxfeeinf = Array.isArray(ticketchoosed.inf) ? 0 : parseInt(ticketchoosed.inf.taxfee);
        let subtotalfirst = ticketchoosed.subtotal;
        let taxfeeadultKhuHoi = ticketchoosedKhuHoi !== null ? Array.isArray(ticketchoosed.adult) ? 0 : ticketchoosed.adult.taxfee : 0;
        let taxfeechildKhuHoi = ticketchoosedKhuHoi !== null ? Array.isArray(ticketchoosed.child) ? 0 : ticketchoosed.child.taxfee : 0;
        let taxfeeinfKhuHoi = ticketchoosedKhuHoi !== null ? Array.isArray(ticketchoosed.inf) ? 0 : parseInt(ticketchoosed.inf.taxfee) : 0;
        let subtotalsecond = ticketchoosedKhuHoi !== null ? ticketchoosedKhuHoi.subtotal : 0;
        let totaltaxfee = taxfeeadult + taxfeechild + taxfeeinf;
        let totaltaxfeeKhuHoi = taxfeeadultKhuHoi + taxfeechildKhuHoi + taxfeeinfKhuHoi;
        let subtotal2way = subtotalfirst + subtotalsecond;
        let direction = localStorage.getItem("direction") ? localStorage.getItem("direction") : 0;
        let dep = localStorage.getItem("dep");
        let des = localStorage.getItem("des");
        let datedep = localStorage.getItem("datedep");
        let datedes = localStorage.getItem("datedes");
        var logo = ticketchoosed !== null ? ticketchoosed.airline === "Vietjet" ? vietjetlogo : ticketchoosed.airline === "Jetstar" ? jetstarlogo : vietnamairlinelogo : null;
        var logoKhuHoi = ticketchoosedKhuHoi !== null ? ticketchoosedKhuHoi.airline === "Vietjet" ? vietjetlogo : ticketchoosedKhuHoi.airline === "Jetstar" ? jetstarlogo : vietnamairlinelogo : null;
        let adultToReturn = [];
        let childToReturn = [];
        let infToReturn = [];
        //let subtractday = subtractOnYear("28-09-2018");
        //let distance2Days = get_distance_two_days(subtractday,"28-09-2018");
        var adultshow = () => {
            for (let i = 0; i < adult; i++) {
                adultToReturn.push(
                    <React.Fragment key={i}>
                        <tr>
                            <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                <h4>1.<span className="passenger-type">Người lớn</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                            </td>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                <select id="drAdultDear1" className="form-control">
                                    <option value="Ông,true">Ông</option>
                                    <option value="Bà,false">Bà</option>
                                    <option value="Anh,true">Anh</option>
                                    <option value="Chị,false">Chị</option>
                                </select>
                            </td>
                            <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                <input type="text" className="form-control" maxLength={256} required="required" id="tbAdultFirstName1" placeholder="Họ" />
                            </td>
                            <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                <input type="text" className="form-control" maxLength={256} required="required" id="tbAdultLastName1" placeholder="Tên đệm và Tên" />
                            </td>
                            <td className="col-xs-12 col-sm-3 col-md-3 mt-10 hidden-xs">
                                &nbsp;
                </td>
                        </tr>
                        <tr>
                            <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12 mt-10">
                                <strong style={{ display: 'block' }}>
                                    Hành lý xách tay
                  </strong>
                                <div className="row" style={{ "marginRight": "0px", "marginLeft": "0px" }}>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <span>Mỗi hành khách được mang tối đa 7 Kg hành lý xách tay.</span>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <span>Mỗi hành khách được mang tối đa 7 Kg hành lý xách tay.</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12 mt-10">
                                <strong style={{ display: 'block' }}>
                                    Hành lý ký gửi (có thể bỏ qua)
                  </strong>
                                <div className="row" style={{ "marginRight": "0px", "marginLeft": "0px" }}>
                                    <ul style={{ width: '100%', margin: '5px auto 0', padding: 0, listStyle: 'none', float: 'left', clear: 'both' }}>
                                        <li className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                            <select id="drInBaggageAdult1" className="form-control" name="inbaggage" onchange="javascript:baggagechanged();">
                                                <option value="0,0,," selected="selected">Không mang hành lý ký gửi</option>
                                                <option value="13,160000.0000,Thêm 15Kg hành lý (160.000 VND),15">
                                                    Thêm 15Kg hành lý (160.000 VND)
                          </option>
                                                <option value="14,180000.0000,Thêm 20Kg hành lý (180.000 VND),20">
                                                    Thêm 20Kg hành lý (180.000 VND)
                          </option>
                                                <option value="15,250000.0000,Thêm 25Kg hành lý (250.000 VND),25">
                                                    Thêm 25Kg hành lý (250.000 VND)
                          </option>
                                                <option value="16,360000.0000,Thêm 30Kg hành lý (360.000 VND),30">
                                                    Thêm 30Kg hành lý (360.000 VND)
                          </option>
                                                <option value="17,420000.0000,Thêm 35Kg hành lý (420.000 VND),35">
                                                    Thêm 35Kg hành lý (420.000 VND)
                          </option>
                                                <option value="18,480000.0000,Thêm 40Kg hành lý (480.000 VND,40">
                                                    Thêm 40Kg hành lý (480.000 VND
                          </option>
                                            </select>
                                        </li>
                                        <li className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                            <select id="drOutBaggageAdult1" className="form-control" name="outbaggage" onchange="javascript:baggagechanged();">
                                                <option value="0,0,," selected="selected">Không mang hành lý ký gửi</option>
                                                <option value="13,160000.0000,Thêm 15Kg hành lý (160.000 VND),15">
                                                    Thêm 15Kg hành lý (160.000 VND)
                          </option>
                                                <option value="14,180000.0000,Thêm 20Kg hành lý (180.000 VND),20">
                                                    Thêm 20Kg hành lý (180.000 VND)
                          </option>
                                                <option value="15,250000.0000,Thêm 25Kg hành lý (250.000 VND),25">
                                                    Thêm 25Kg hành lý (250.000 VND)
                          </option>
                                                <option value="16,360000.0000,Thêm 30Kg hành lý (360.000 VND),30">
                                                    Thêm 30Kg hành lý (360.000 VND)
                          </option>
                                                <option value="17,420000.0000,Thêm 35Kg hành lý (420.000 VND),35">
                                                    Thêm 35Kg hành lý (420.000 VND)
                          </option>
                                                <option value="18,480000.0000,Thêm 40Kg hành lý (480.000 VND,40">
                                                    Thêm 40Kg hành lý (480.000 VND
                          </option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </React.Fragment>
                );
            }
            return adultToReturn;
        };
        var childshow = () => {
            for (let i = 0; i < child; i++) {
                childToReturn.push(
                    <React.Fragment key={i}>
                        <tr>
                            <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                <h4>{i + 1}.<span className="passenger-type">Trẻ em</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                            </td>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                <select id="drChildDear1" className="form-control">
                                    <option value="Bé trai,true">Bé trai</option>
                                    <option value="Bé gái,false">Bé gái</option>
                                </select>
                            </td>
                            <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                <input type="text" className="form-control" required="required" maxLength={256} id="tbChildFirstName1" placeholder="Họ" />
                            </td>
                            <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                <input type="text" className="form-control" required="required" maxLength={256} id="tbChildLastName1" placeholder="Tên đệm và Tên" />
                            </td>
                            <td className="col-xs-12 col-sm-3 col-md-3 mt-10">
                                <input type="text" style={{ cursor: 'pointer', backgroundColor: '#fff' }} className="form-control birthday children has-date-picker-birtday" placeholder="Ngày sinh"  required />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12 mt-10">
                                <strong style={{ display: 'block' }}>
                                    Hành lý xách tay
                      </strong>
                                <div className="row" style={{ "marginRight": "0px", "marginLeft": "0px" }}>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <span>Mỗi hành khách được mang tối đa 7 Kg hành lý xách tay.</span>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <span>Mỗi hành khách được mang tối đa 7 Kg hành lý xách tay.</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12 mt-10">
                                <strong style={{ marginTop: 10, display: 'block' }}>
                                    Hành lý ký gửi (có thể bỏ qua)
                      </strong>
                                <div className="row" style={{ "marginRight": "0px", "marginLeft": "0px" }}>
                                    <ul style={{ width: '100%', margin: '5px auto 0', padding: 0, listStyle: 'none', float: 'left', clear: 'both' }}>
                                        <li className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                            <select id="drInBaggageChild1" className="form-control" name="inbaggage" onchange="javascript:baggagechanged();">
                                                <option value="0,0,,">Không mang hành lý ký gửi</option>
                                                <option value="13,160000.0000,Thêm 15Kg hành lý (160.000 VND),15">
                                                    Thêm 15Kg hành lý (160.000 VND)
                              </option>
                                                <option value="14,180000.0000,Thêm 20Kg hành lý (180.000 VND),20">
                                                    Thêm 20Kg hành lý (180.000 VND)
                              </option>
                                                <option value="15,250000.0000,Thêm 25Kg hành lý (250.000 VND),25">
                                                    Thêm 25Kg hành lý (250.000 VND)
                              </option>
                                                <option value="16,360000.0000,Thêm 30Kg hành lý (360.000 VND),30">
                                                    Thêm 30Kg hành lý (360.000 VND)
                              </option>
                                                <option value="17,420000.0000,Thêm 35Kg hành lý (420.000 VND),35">
                                                    Thêm 35Kg hành lý (420.000 VND)
                              </option>
                                                <option value="18,480000.0000,Thêm 40Kg hành lý (480.000 VND,40">
                                                    Thêm 40Kg hành lý (480.000 VND
                              </option>
                                            </select>
                                        </li>
                                        <li className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                            <select id="drOutBaggageChild1" className="form-control" name="outbaggage" onchange="javascript:baggagechanged();">
                                                <option value="0,0,,">Không mang hành lý ký gửi</option>
                                                <option value="13,160000.0000,Thêm 15Kg hành lý (160.000 VND),15">
                                                    Thêm 15Kg hành lý (160.000 VND)
                              </option>
                                                <option value="14,180000.0000,Thêm 20Kg hành lý (180.000 VND),20">
                                                    Thêm 20Kg hành lý (180.000 VND)
                              </option>
                                                <option value="15,250000.0000,Thêm 25Kg hành lý (250.000 VND),25">
                                                    Thêm 25Kg hành lý (250.000 VND)
                              </option>
                                                <option value="16,360000.0000,Thêm 30Kg hành lý (360.000 VND),30">
                                                    Thêm 30Kg hành lý (360.000 VND)
                              </option>
                                                <option value="17,420000.0000,Thêm 35Kg hành lý (420.000 VND),35">
                                                    Thêm 35Kg hành lý (420.000 VND)
                              </option>
                                                <option value="18,480000.0000,Thêm 40Kg hành lý (480.000 VND,40">
                                                    Thêm 40Kg hành lý (480.000 VND
                              </option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </React.Fragment>
                );
            }
            return childToReturn;
        };
        var infshow = () => {
            for (let i = 0; i < inf; i++) {
                infToReturn.push(
                    <React.Fragment key={i}>

                        <tr>
                            <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                <h4>{i + 1}.<span className="passenger-type">Em bé</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                            </td>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                <select id="drInfantDear1" className="form-control">
                                    <option value="Bé trai,true">Bé trai</option>
                                    <option value="Bé gái,false">Bé gái</option>
                                </select>
                            </td>
                            <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                <input type="text" className="form-control" maxLength={256} required="required" id="tbInfantFirstName1" placeholder="Họ" />
                            </td>
                            <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                <input type="text" className="form-control" maxLength={256} required="required" id="tbInfantLastName1" placeholder="Tên và tên Đệm" />
                            </td>
                            <td className="col-xs-12 col-sm-3 col-md-3 mt-10">
                                <input type="text" style={{ cursor: 'pointer', backgroundColor: '#fff' }} className="form-control birthday infant has-date-picker-birtday" required placeholder="Ngày sinh"  />
                            </td>
                        </tr>
                    </React.Fragment>
                );
            }
            return infToReturn;
        };
        var adultdiv = adult > 0 ?
            adultshow()
            : null;
        var childdiv = child > 0 ?
            childshow()
            : null;
        var infdiv = inf > 0 ?
            infshow()
            : null;
        return (
            <div className="iw-tour-listing" id="contents-main">
                <div className="container">
                    <div className="row" style={{ "marginRight": "0px", "marginLeft": "0px" }}>
                        <div className="col-xs-12 col-sm-8 col-md-8 mt-30 selected">
                            <div className="simple_box mb-20 visible-xs">
                                <h3><i className="fa fa-plane mr-5" aria-hidden="true" />Chi tiết chuyến bay</h3>
                                <div className="full-width">
                                    <div className="FlightDirection">
                                        <table style={{ "width": '100%' }}>
                                            <tbody>
                                                <tr>
                                                    <td className="FlightItinerary">
                                                        <span>
                                                            <img alt="Flight outbound" src="/App_Themes/FrontEnd/images/icon/flights-icon-outbound.png" />
                                                        </span>
                                                        Chuyến đi: <span>{dep} → {des}</span>
                                                    </td>
                                                    <td className="FlightWarning text-right">
                                                        <div className="fa fa-clock-o" />
                                                        Thời gian bay: <span>{ticketchoosed.duration}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="FilghtInfo">
                                        <div className="WhiteBox no-shadow mb-0 mt-5">
                                            <div className="ItineraryBox">
                                                <table style={{ width: '100%' }}>
                                                    <tbody>
                                                        <tr>
                                                            <td className="ItineraryBox-Carrier">
                                                                <div className="CarrierLogo">
                                                                    <img alt="Vietjet Air" src={logo} />
                                                                </div>
                                                                <div className="CarrierName">{ticketchoosed.airline}</div>
                                                            </td>
                                                            <td className="ItineraryBox-Depart">
                                                                <div className="City">{ticketchoosed.depcode}</div>
                                                            </td>
                                                            <td className="ItineraryBox-Arrival">
                                                                <div className="City">{ticketchoosed.descode}</div>
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    {ticketchoosedKhuHoi !== null ?
                                        <React.Fragment>
                                            <div className="FlightDirection mt-15">
                                                <table style={{ width: '100%' }}>
                                                    <tbody>
                                                        <tr>
                                                            <td className="FlightItinerary">
                                                                <span>
                                                                    <img alt="Flight outbound" src="/App_Themes/FrontEnd/images/icon/flights-icon-inbound.png" />
                                                                </span>
                                                                Chuyến đi: <span>{des} → {dep}</span>
                                                            </td>
                                                            <td className="FlightWarning text-right">
                                                                <div className="fa fa-clock-o" />
                                                                Thời gian bay: <span>{ticketchoosedKhuHoi.duration}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="FilghtInfo">
                                                <div className="WhiteBox no-shadow mb-0 mt-5">
                                                    <div className="ItineraryBox">
                                                        <table style={{ width: '100%' }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="ItineraryBox-Carrier">
                                                                        <div className="CarrierLogo">
                                                                            <img alt="Vietjet Air" src={logoKhuHoi} />
                                                                        </div>
                                                                        <div className="CarrierName">{ticketchoosedKhuHoi.airline}</div>
                                                                    </td>
                                                                    <td className="ItineraryBox-Depart">
                                                                        <div className="City">{ticketchoosedKhuHoi.depcode}</div>
                                                                    </td>
                                                                    <td className="ItineraryBox-Arrival">
                                                                        <div className="City">{ticketchoosedKhuHoi.descode}</div>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                        : ""
                                    }

                                </div>
                            </div>
                            <div className="simple_box no-padding mb-20">
                                <h3><i className="fa fa-users mr-5" aria-hidden="true" />Thông tin hành khách</h3>
                                <div className="pd-15" style={{ "padding": "15px" }}>
                                    <p >
                                        Thông tin phải chính xác như trên giấy tờ tùy thân (CMND, Hộ Chiếu, giấy phép lái xe...). Quý khách bị từ chối vận chuyển nếu thông tin không chính xác. Vui lòng nhập thông tin bằng Tiếng Việt không dấu.
        </p>
                                    <div className="row" style={{ "marginRight": "0px", "marginLeft": "0px" }}>
                                        <table className="booking-info-bg-table form-passenger-input table-borderless" id="outCustomer">
                                            <tbody>
                                                <tr className="hidden-xs">
                                                    <td className="col-sm-2 col-md-2">&nbsp;</td>
                                                    <td className="col-sm-2 col-md-2">&nbsp;</td>
                                                    <td className="col-sm-2 col-md-2 pr-5">
                                                        <strong>Họ</strong><br />
                                                        <i style={{ fontSize: 11, color: '#999', fontStyle: 'normal' }}>(Ví dụ: Nguyen)</i>
                                                    </td>
                                                    <td className="col-sm-3 col-md-3 pl-5">
                                                        <strong>Tên đệm và Tên</strong><br />
                                                        <i style={{ fontSize: 11, color: '#999', fontStyle: 'normal' }}>(Ví dụ: Van An)</i>
                                                    </td>
                                                    <td className="col-sm-3 col-md-3">
                                                        <strong>Ngày sinh</strong><br />
                                                        <i style={{ fontSize: 11, color: '#999', fontStyle: 'normal' }}>(Ví dụ: 05/09/2012)</i>
                                                    </td>
                                                </tr>
                                                {adultdiv}
                                                {childdiv}
                                                {infdiv}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="simple_box no-padding mb-20">
                                <h3><i className="fa fa-info mr-5" aria-hidden="true" />Thông tin liên hệ <small>(Điền đầy đủ thông tin)</small></h3>
                                <div className="pd-15" style={{ "padding": "15px" }}>
                                    <table className="thong-tin-lien-he passenger-page">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="row" style={{ "marginRight": "0px", "marginLeft": "0px" }}>
                                                        <fieldset className="contact-fieldset">
                                                            <ul>
                                                                <li>
                                                                    <div className="col-xs-12 col-sm-6 col-md-6 mb-10">
                                                                        <label htmlFor="fullname">
                                                                            Họ và tên<abbr>*</abbr>
                                                                        </label>
                                                                        <input type="text" placeholder="Họ và tên" required maxLength={256} className="form-control" id="fullname" />
                                                                    </div>
                                                                    <div className="col-xs-12 col-sm-6 col-md-6 mb-10">
                                                                        <label htmlFor="phone">
                                                                            Điện thoại<abbr>*</abbr>
                                                                        </label>
                                                                        <input type="tel" placeholder="Điện thoại" required maxLength={50} className="form-control" id="phone" />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                                                        <label htmlFor="email">
                                                                            Email liên hệ
                          </label>
                                                                        <input type="email" placeholder="Email liên hệ" className="form-control" id="email" />
                                                                    </div>
                                                                    <div className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                                                        <label htmlFor="address">
                                                                            Địa chỉ
                          </label>
                                                                        <input type="text" className="form-control" placeholder="Địa chỉ" id="address" />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="col-xs-12 col-md-12 col-sm-12 mb-10">
                                                                        <label htmlFor="message">
                                                                            Yêu cầu khác
                          </label>
                                                                        <textarea className="form-control" placeholder="Khi bạn có thêm yêu cầu, hãy viết vào..." style={{ resize: 'none' }} id="message" cols={40} rows={6} defaultValue={""} />
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </fieldset>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="simple_box no-padding mb-20 selected">
                                <h3><i className="fa fa-money mr-5" aria-hidden="true" />Hình thức thanh toán</h3>
                                <div className="pd-15" style={{ "padding": "15px" }}>
                                    <p> Sau khi chọn vui lòng nhấn <strong>"Đặt vé"</strong>. Booker sẽ gọi đến xác thực thông tin book vé. Điều này là cần thiết nhằm tránh sai sót khi ra sân bay.</p>
                                    <div className="methods selected" id="payment">
                                        <div className="method-item selected">
                                            <label htmlFor="payment_id_3" className="method-header">
                                                <input type="radio" id="payment_id_3" defaultValue={3} name="payment" defaultChecked="checked" />
                                                Chuyển khoản qua ngân hàng
            </label>
                                            <div className="payment_box method-content payment_mean3" style={{ display: 'block' }}>
                                            </div>
                                        </div>
                                        <div className="method-item">
                                            <label htmlFor="payment_id_1" className="method-header">
                                                <input type="radio" id="payment_id_1" defaultValue={1} name="payment" />
                                                Thanh toán tại phòng vé
            </label>
                                            <div className="payment_box method-content payment_mean1">
                                                <p>Sau khi quý khách đặt vé thành công, Quý khách vui lòng qua văn phòng chúng tôi&nbsp;để thanh toán và nhận vé.</p>
                                            </div>
                                        </div>
                                        <div className="method-item">
                                            <label htmlFor="payment_id_2" className="method-header">
                                                <input type="radio" id="payment_id_2" defaultValue={2} name="payment" />
                                                Thanh toán tại địa chỉ Khách hàng
            </label>
                                            <div className="payment_box method-content payment_mean2">
                                                <p>Sau khi đặt vé thành công, nhân viên chúng tôi&nbsp;sẽ đến địa chỉ quý khách cung cấp để giao vé và thu tiền.&nbsp;<br />
                                                    Thời gian: từ thứ 2 đến chủ nhật &amp; các ngày lễ .<br />
                                                    Phạm vi giao vé: trong bán kính &lt; 10km (Sài Gòn), phí vận chuyển (Miễn Phí).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="full-width mb-30">
                                <div className="row" style={{ "marginRight": "0px", "marginLeft": "0px" }}>
                                    <div className="col-xs-4 col-md-3 pull-right">
                                        <button id="submitSend" className="full-width coolButton">
                                            <i aria-hidden="true" className="fa fa-send mr-5" />Đặt vé
          </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="stRightSmall col-xs-12 col-sm-4 col-md-4 mb-30 mt-30">
                            <div id="special_basket_box" className="sideBox">
                                <h3>Tóm tắt vé đã đặt</h3>
                                <div className="content">
                                    <div className="basket_container">
                                        <div className="leg dep_leg">
                                            <strong>{ticketchoosed.depcode} -> {ticketchoosed.descode}</strong>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Khởi hành:</td>
                                                        <td className="date">{get_day_name(ticketchoosed.datefull)}, {get_full_day_format_vietnam(ticketchoosed.datefull)}</td>
                                                        <td className="hour">{ticketchoosed.deptime}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <table className="list">
                                            <tbody>
                                                <tr>
                                                    <td>{adult} x Người lớn</td>
                                                    <td className="amount">{ticketchoosed.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</td>
                                                </tr>
                                                {Array.isArray(ticketchoosed.child) ?
                                                    null
                                                    : <React.Fragment>
                                                        <tr>
                                                            <td>{child} x Trẻ em</td>
                                                            <td className="amount">{ticketchoosed.child.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</td>
                                                        </tr>
                                                    </React.Fragment>
                                                }
                                                {Array.isArray(ticketchoosed.inf) ?
                                                    null
                                                    : <React.Fragment>
                                                        <tr>
                                                            <td>{inf} x Em bé</td>
                                                            <td className="amount">{ticketchoosed.inf.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</td>
                                                        </tr>
                                                    </React.Fragment>
                                                }


                                                <tr>
                                                    <td>
                                                        {tongsonguoi} x thuế &amp; phí
                </td>
                                                    <td className="amount"><span>{}</span> {totaltaxfee.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className="list total">
                                            <tbody>
                                                <tr>
                                                    <td>Chi phí</td>
                                                    <td className="amount"><span>{ticketchoosed.subtotal.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span> VNĐ</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <hr />
                                        {ticketchoosedKhuHoi !== null ?
                                            <React.Fragment>
                                                <div className="leg dep_leg">
                                                    <strong>{ticketchoosedKhuHoi.depcode} -> {ticketchoosedKhuHoi.descode}</strong>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Khứ hồi:</td>
                                                                <td className="date">{get_day_name(ticketchoosedKhuHoi.datefull)}, {get_full_day_format_vietnam(ticketchoosedKhuHoi.datefull)}</td>
                                                                <td className="hour">{ticketchoosedKhuHoi.deptime}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <table className="list">
                                                    <tbody>
                                                        <tr>
                                                            <td>{adult} x Người lớn</td>
                                                            <td className="amount">{ticketchoosedKhuHoi.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</td>
                                                        </tr>
                                                        {Array.isArray(ticketchoosed.child) ?
                                                            null
                                                            : <React.Fragment>
                                                                <tr>
                                                                    <td>{child} x Trẻ em</td>
                                                                    <td className="amount">{ticketchoosedKhuHoi.child.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</td>
                                                                </tr>
                                                            </React.Fragment>
                                                        }
                                                        {Array.isArray(ticketchoosed.inf) ?
                                                            null
                                                            : <React.Fragment>
                                                                <tr>
                                                                    <td>{inf} x Em bé</td>
                                                                    <td className="amount">{ticketchoosedKhuHoi.inf.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</td>
                                                                </tr>
                                                            </React.Fragment>
                                                        }


                                                        <tr>
                                                            <td>
                                                                {tongsonguoi} x thuế &amp; phí
                </td>
                                                            <td className="amount"><span>{}</span> {totaltaxfeeKhuHoi.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table className="list total">
                                                    <tbody>
                                                        <tr>
                                                            <td>Chi phí</td>
                                                            <td className="amount"><span>{ticketchoosedKhuHoi.subtotal.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span> VNĐ</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </React.Fragment>
                                            : null
                                        }


                                    </div>
                                    <table className="big_total">
                                        <tbody>
                                            <tr id="basket_total_price_holder" className="promo">
                                                <td>Tổng chi phí</td>
                                                <td className="amount">
                                                    <span id="basket_total_price" >{subtotal2way.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span> VNĐ
              </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </aside>
                    </div>

                </div>
            </div>
        );
    }
}

export default YourInfoContent;