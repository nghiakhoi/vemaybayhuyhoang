import React, { Component } from 'react';

class YourInfoContent extends Component {
    render() {
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
                                                        Chuyến đi: <span>Hồ Chí Minh, Việt Nam → Hà Nội, Việt Nam</span>
                                                    </td>
                                                    <td className="FlightWarning text-right">
                                                        <div className="fa fa-clock-o" />
                                                        Thời gian bay: <span>2h 5</span>
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
                                                                    <img alt="Vietjet Air" src="/upload/airlines/VJ.gif" />
                                                                </div>
                                                                <div className="CarrierName">Vietjet Air</div>
                                                            </td>
                                                            <td className="ItineraryBox-Depart">
                                                                <div className="City">Hồ Chí Minh</div>
                                                                <div className="Airport">Tân Sơn Nhất</div>
                                                                <span className="Hour">22:55</span>
                                                                <span className="Date">26.09.2018</span>
                                                            </td>
                                                            <td className="ItineraryBox-Arrival">
                                                                <div className="City">Hà Nội</div>
                                                                <div className="Airport">NOI BAI INTL</div>
                                                                <span className="Hour">01:00</span>
                                                                <span className="Date">27.09.2018</span>
                                                            </td>
                                                            <td className="ItineraryBox-FlightInfo">
                                                                <span className="Class">
                                                                    <span className="ItineraryBox-FlightInfo-Title">Hạng chỗ:</span>
                                                                    <strong className="col2">I I_Eco</strong>
                                                                </span>
                                                                <span className="Plane">
                                                                    <span className="ItineraryBox-FlightInfo-Title">Chuyến bay:</span>
                                                                    <strong className="col2">VJ144</strong>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="FlightDirection mt-15">
                                        <table style={{ width: '100%' }}>
                                            <tbody>
                                                <tr>
                                                    <td className="FlightItinerary">
                                                        <span>
                                                            <img alt="Flight outbound" src="/App_Themes/FrontEnd/images/icon/flights-icon-inbound.png" />
                                                        </span>
                                                        Chuyến đi: <span>Hà Nội, Việt Nam → Hồ Chí Minh, Việt Nam</span>
                                                    </td>
                                                    <td className="FlightWarning text-right">
                                                        <div className="fa fa-clock-o" />
                                                        Thời gian bay: <span>2h 10</span>
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
                                                                    <img alt="Vietjet Air" src="/upload/airlines/VJ.gif" />
                                                                </div>
                                                                <div className="CarrierName">Vietjet Air</div>
                                                            </td>
                                                            <td className="ItineraryBox-Depart">
                                                                <div className="City">Hà Nội</div>
                                                                <div className="Airport">NOI BAI INTL</div>
                                                                <span className="Hour">05:35</span>
                                                                <span className="Date">30.09.2018</span>
                                                            </td>
                                                            <td className="ItineraryBox-Arrival">
                                                                <div className="City">Hồ Chí Minh</div>
                                                                <div className="Airport">Tân Sơn Nhất</div>
                                                                <span className="Hour">07:45</span>
                                                                <span className="Date">30.09.2018</span>
                                                            </td>
                                                            <td className="ItineraryBox-FlightInfo">
                                                                <span className="Class">
                                                                    <span className="ItineraryBox-FlightInfo-Title">Hạng chỗ:</span>
                                                                    <strong className="col2">J J_Eco</strong>
                                                                </span>
                                                                <span className="Plane">
                                                                    <span className="ItineraryBox-FlightInfo-Title">Chuyến bay:</span>
                                                                    <strong className="col2">VJ121</strong>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="simple_box no-padding mb-20">
                                <h3><i className="fa fa-users mr-5" aria-hidden="true" />Thông tin hành khách</h3>
                                <div className="pd-15" style={{ "padding": "15px" }}>
                                    <p style={{}}>
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
                                                <tr>
                                                    <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                                        <h4>2.<span className="passenger-type">Người lớn</span></h4>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                                        <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                                                    </td>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                                        <select id="drAdultDear2" className="form-control">
                                                            <option value="Ông,true">Ông</option>
                                                            <option value="Bà,false">Bà</option>
                                                            <option value="Anh,true">Anh</option>
                                                            <option value="Chị,false">Chị</option>
                                                        </select>
                                                    </td>
                                                    <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                                        <input type="text" className="form-control" maxLength={256} required="required" id="tbAdultFirstName2" placeholder="Họ" />
                                                    </td>
                                                    <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                                        <input type="text" className="form-control" maxLength={256} required="required" id="tbAdultLastName2" placeholder="Tên đệm và Tên" />
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
                                                                    <select id="drInBaggageAdult2" className="form-control" name="inbaggage" onchange="javascript:baggagechanged();">
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
                                                                    <select id="drOutBaggageAdult2" className="form-control" name="outbaggage" onchange="javascript:baggagechanged();">
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
                                                <tr>
                                                    <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                                        <h4>3.<span className="passenger-type">Người lớn</span></h4>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                                        <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                                                    </td>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                                        <select id="drAdultDear3" className="form-control">
                                                            <option value="Ông,true">Ông</option>
                                                            <option value="Bà,false">Bà</option>
                                                            <option value="Anh,true">Anh</option>
                                                            <option value="Chị,false">Chị</option>
                                                        </select>
                                                    </td>
                                                    <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                                        <input type="text" className="form-control" maxLength={256} required="required" id="tbAdultFirstName3" placeholder="Họ" />
                                                    </td>
                                                    <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                                        <input type="text" className="form-control" maxLength={256} required="required" id="tbAdultLastName3" placeholder="Tên đệm và Tên" />
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
                                                                    <select id="drInBaggageAdult3" className="form-control" name="inbaggage" onchange="javascript:baggagechanged();">
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
                                                                    <select id="drOutBaggageAdult3" className="form-control" name="outbaggage" onchange="javascript:baggagechanged();">
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
                                                <tr>
                                                    <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                                        <h4>1.<span className="passenger-type">Trẻ em</span></h4>
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
                                                        <input type="text" style={{ cursor: 'pointer', backgroundColor: '#fff' }} className="form-control birthday children hasDatepicker" id="tbChildBirthday1" placeholder="Ngày sinh" readOnly required />
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
                                                <tr>
                                                    <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                                        <h4>2.<span className="passenger-type">Trẻ em</span></h4>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                                        <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                                                    </td>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                                        <select id="drChildDear2" className="form-control">
                                                            <option value="Bé trai,true">Bé trai</option>
                                                            <option value="Bé gái,false">Bé gái</option>
                                                        </select>
                                                    </td>
                                                    <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                                        <input type="text" className="form-control" required="required" maxLength={256} id="tbChildFirstName2" placeholder="Họ" />
                                                    </td>
                                                    <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                                        <input type="text" className="form-control" required="required" maxLength={256} id="tbChildLastName2" placeholder="Tên đệm và Tên" />
                                                    </td>
                                                    <td className="col-xs-12 col-sm-3 col-md-3 mt-10">
                                                        <input type="text" style={{ cursor: 'pointer', backgroundColor: '#fff' }} className="form-control birthday children hasDatepicker" id="tbChildBirthday2" placeholder="Ngày sinh" readOnly required />
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
                                                                    <select id="drInBaggageChild2" className="form-control" name="inbaggage" onchange="javascript:baggagechanged();">
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
                                                                    <select id="drOutBaggageChild2" className="form-control" name="outbaggage" onchange="javascript:baggagechanged();">
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
                                                <tr>
                                                    <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                                        <h4>3.<span className="passenger-type">Trẻ em</span></h4>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                                        <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                                                    </td>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                                        <select id="drChildDear3" className="form-control">
                                                            <option value="Bé trai,true">Bé trai</option>
                                                            <option value="Bé gái,false">Bé gái</option>
                                                        </select>
                                                    </td>
                                                    <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                                        <input type="text" className="form-control" required="required" maxLength={256} id="tbChildFirstName3" placeholder="Họ" />
                                                    </td>
                                                    <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                                        <input type="text" className="form-control" required="required" maxLength={256} id="tbChildLastName3" placeholder="Tên đệm và Tên" />
                                                    </td>
                                                    <td className="col-xs-12 col-sm-3 col-md-3 mt-10">
                                                        <input type="text" style={{ cursor: 'pointer', backgroundColor: '#fff' }} className="form-control birthday children hasDatepicker" id="tbChildBirthday3" placeholder="Ngày sinh" readOnly required />
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
                                                                    <select id="drInBaggageChild3" className="form-control" name="inbaggage" onchange="javascript:baggagechanged();">
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
                                                                    <select id="drOutBaggageChild3" className="form-control" name="outbaggage" onchange="javascript:baggagechanged();">
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
                                                <tr>
                                                    <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                                        <h4>1.<span className="passenger-type">Em bé</span></h4>
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
                                                        <input type="text" style={{ cursor: 'pointer', backgroundColor: '#fff' }} className="form-control birthday infant hasDatepicker" required id="tbInfantBirthday1" placeholder="Ngày sinh" readOnly />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                                        <h4>2.<span className="passenger-type">Em bé</span></h4>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                                        <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                                                    </td>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                                        <select id="drInfantDear2" className="form-control">
                                                            <option value="Bé trai,true">Bé trai</option>
                                                            <option value="Bé gái,false">Bé gái</option>
                                                        </select>
                                                    </td>
                                                    <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                                        <input type="text" className="form-control" maxLength={256} required="required" id="tbInfantFirstName2" placeholder="Họ" />
                                                    </td>
                                                    <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                                        <input type="text" className="form-control" maxLength={256} required="required" id="tbInfantLastName2" placeholder="Tên và tên Đệm" />
                                                    </td>
                                                    <td className="col-xs-12 col-sm-3 col-md-3 mt-10">
                                                        <input type="text" style={{ cursor: 'pointer', backgroundColor: '#fff' }} className="form-control birthday infant hasDatepicker" required id="tbInfantBirthday2" placeholder="Ngày sinh" readOnly />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                                        <h4>3.<span className="passenger-type">Em bé</span></h4>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                                        <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                                                    </td>
                                                    <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                                        <select id="drInfantDear3" className="form-control">
                                                            <option value="Bé trai,true">Bé trai</option>
                                                            <option value="Bé gái,false">Bé gái</option>
                                                        </select>
                                                    </td>
                                                    <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                                        <input type="text" className="form-control" maxLength={256} required="required" id="tbInfantFirstName3" placeholder="Họ" />
                                                    </td>
                                                    <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                                        <input type="text" className="form-control" maxLength={256} required="required" id="tbInfantLastName3" placeholder="Tên và tên Đệm" />
                                                    </td>
                                                    <td className="col-xs-12 col-sm-3 col-md-3 mt-10">
                                                        <input type="text" style={{ cursor: 'pointer', backgroundColor: '#fff' }} className="form-control birthday infant hasDatepicker" required id="tbInfantBirthday3" placeholder="Ngày sinh" readOnly />
                                                    </td>
                                                </tr>
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
                                            <strong>Hồ Chí Minh <small>(Tân Sơn Nhất)</small></strong>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Khởi hành:</td>
                                                        <td className="date">Thứ Tư, 26.09.2018</td>
                                                        <td className="hour">22:55</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <strong>Hà Nội <small>(NOI BAI INTL)</small></strong><br />
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Đến nơi:</td>
                                                        <td className="date">Thứ Năm, 27.09.2018</td>
                                                        <td className="hour">01:00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            Hãng: <strong>Vietjet Air</strong>
                                            Hạng vé: <strong>II_Eco</strong>
                                        </div>
                                        <table className="list">
                                            <tbody>
                                                <tr>
                                                    <td>3 x Người lớn</td>
                                                    <td className="amount">1,030,000 ₫</td>
                                                </tr>
                                                <tr>
                                                    <td>3 x Trẻ em</td>
                                                    <td className="amount">1,030,000 ₫</td>
                                                </tr>
                                                <tr>
                                                    <td>3 x Em bé</td>
                                                    <td className="amount">0 ₫</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        9 x thuế &amp; phí
                </td>
                                                    <td className="amount"><span>3,271,500</span> ₫</td>
                                                </tr>
                                                <tr className="promo">
                                                    <td>9 x Giảm giá</td>
                                                    <td className="amount"><span>-0</span> ₫</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className="list total">
                                            <tbody>
                                                <tr>
                                                    <td>Chi phí</td>
                                                    <td className="amount"><span>9,451,500</span> ₫</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <hr />
                                        <div className="leg ret_leg">
                                            <strong>Hà Nội <small>(NOI BAI INTL)</small></strong>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Khởi hành:</td>
                                                        <td className="date">Chủ Nhật, 30.09.2018</td>
                                                        <td className="hour">05:35</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <strong>Hồ Chí Minh <small>(Tân Sơn Nhất)</small></strong><br />
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Đến nơi:</td>
                                                        <td className="date">Chủ Nhật, 30.09.2018</td>
                                                        <td className="hour">07:45</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            Hãng: <strong>Vietjet Air</strong>
                                            Hạng vé: <strong>JJ_Eco</strong>
                                        </div>
                                        <table className="list">
                                            <tbody>
                                                <tr>
                                                    <td>3 x Người lớn</td>
                                                    <td className="amount">900,000 ₫</td>
                                                </tr>
                                                <tr>
                                                    <td>3 x Trẻ em</td>
                                                    <td className="amount">900,000 ₫</td>
                                                </tr>
                                                <tr>
                                                    <td>3 x Em bé</td>
                                                    <td className="amount">0 ₫</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        9 x thuế &amp; phí
                </td>
                                                    <td className="amount"><span>3,193,500</span> ₫</td>
                                                </tr>
                                                <tr className="promo">
                                                    <td>9 x Giảm giá</td>
                                                    <td className="amount"><span>-0</span> ₫</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className="list total">
                                            <tbody>
                                                <tr>
                                                    <td>Chi phí</td>
                                                    <td className="amount"><span>8,593,500</span> ₫</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <table className="big_total">
                                        <tbody>
                                            <tr id="basket_total_price_holder" className="promo">
                                                <td>Tổng chi phí</td>
                                                <td className="amount">
                                                    <span id="basket_total_price" data-price={18045000}>18,405,000</span> ₫
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