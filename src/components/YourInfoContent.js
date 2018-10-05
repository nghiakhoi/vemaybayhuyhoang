import React, { Component } from 'react';
import jetstarlogo from '../images/jetstarmini.png';
import vietjetlogo from '../images/vietjetmini.png';
import vietnamairlinelogo from '../images/vietnamairlinemini.png';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import IconCalendar from './IconCalendar';


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
const subtractOnYear = (dayinput, yearnumber = 1) => {
    var myDate1 = dayinput;
    myDate1 = myDate1.split("-");
    var year1 = myDate1[2];
    var month1 = myDate1[1];
    var day1 = myDate1[0];
    var firstDate = new Date(year1, month1, day1);
    firstDate.setMonth((firstDate.getMonth() - 1) - (12 * yearnumber));
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
const compare2daybymomentJS = (ngayduocchon, dayvalidate) => {
    var format = 'DD MM YYYY';
    var ngay1 = moment(ngayduocchon, format);
    var ngay2 = moment(dayvalidate, format);

    if (ngay1.diff(ngay2) < 0) { //nhỏ hơn 0 là ngày được chọn nhỏ hơn ngày validate
        return -1;
    } else if (ngay1.diff(ngay2) > 0) {
        return 1;
    } else if (ngay1.diff(ngay2) === 0) {
        return 0;
    }
}
const findObjectByKey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}
const hasNull = (target) => {
    for (var member in target) {
        if (target[member] === null || target[member] === "")
            return true;
    }
    return false;
}
var mangtempAdult = [];
var mangtempChild = [];
var mangtempInf = [];
var ngaydi = (localStorage.getItem("datedep")) ? localStorage.getItem("datedep") : 0;
var ngayve = (localStorage.getItem("datedes")) ? localStorage.getItem("datedes") : 0;
//var subtractdaystartchild = subtractOnYear(datedep, 12);
//var subtractdayendchild = subtractOnYear(datedep, 2);
//var distance2Days = get_distance_two_days(subtractday,"28-09-2018");

class YourInfoContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangadult: [],
            mangchild: [],
            manginf: [],
            startDate: null,
            //endDate: moment(subtractdayendchild, "DD-MM-YYYY"),
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    componentWillMount() {
        let adult = (localStorage.getItem("adult")) ? localStorage.getItem("adult") : 0;
        let child = (localStorage.getItem("child")) ? localStorage.getItem("child") : 0;
        let inf = (localStorage.getItem("inf")) ? localStorage.getItem("inf") : 0;
        var objquydanhadult = {};
        var objhanhlyadult = {};
        var objhoadult = {};
        var objdemvatendult = {};
        var objhochild = {};
        var objdemvatenchild = {};
        var objquydanhchild = {};
        var objngaysinhchild = {};
        var objhanhlychild = {};
        var objhoinf = {};
        var objdemvateninf = {};
        var objquydanhinf = {};
        var objngaysinhinf = {};
        var hasKhuHoi = localStorage.getItem("ticketchoosedkhuhoi") ? true : false;
        ///////adult
        for (let i = 1; i <= adult; i++) {
            objquydanhadult = { "id": i, "quydanhadult": "ong" };
            mangtempAdult.push(objquydanhadult);


            objhoadult = { "id": i, "hoadult": null };
            let timobject1 = findObjectByKey(mangtempAdult, "id", i); // tìm object dựa trên key là id và giá trị là i
            timobject1 !== null ? timobject1.hoadult = null : mangtempAdult.push(objhoadult);


            objdemvatendult = { "id": i, "demvatenadult": null };
            let timobject2 = findObjectByKey(mangtempAdult, "id", i); // tìm object dựa trên key là id và giá trị là i
            timobject2 !== null ? timobject2.demvatenadult = null : mangtempAdult.push(objdemvatendult);


            objhanhlyadult = { "id": i, "hanhlyadult": "0" };
            let timobject = findObjectByKey(mangtempAdult, "id", i); // tìm object dựa trên key là id và giá trị là i
            timobject !== null ? timobject.hanhlyadult = "0" : mangtempAdult.push(objhanhlyadult);


            if (hasKhuHoi) {
                objhanhlyadult = { "id": i, "hanhlyadultKhuHoi": "0" };
                let timobject = findObjectByKey(mangtempAdult, "id", i); // tìm object dựa trên key là id và giá trị là i
                timobject !== null ? timobject.hanhlyadultKhuHoi = "0" : mangtempAdult.push(objhanhlyadult);
            }
        }
        ///////child
        for (let i = 1; i <= child; i++) {
            objquydanhchild = { "id": i, "quydanhchild": "betrai" };
            mangtempChild.push(objquydanhchild);


            objhochild = { "id": i, "hochild": null };
            let timobject2 = findObjectByKey(mangtempChild, "id", i); // tìm object dựa trên key là id và giá trị là i
            timobject2 !== null ? timobject2.hochild = null : mangtempChild.push(objhochild);


            objdemvatenchild = { "id": i, "demvatenchild": null };
            let timobject3 = findObjectByKey(mangtempChild, "id", i); // tìm object dựa trên key là id và giá trị là i
            timobject3 !== null ? timobject3.demvatenchild = null : mangtempChild.push(objdemvatenchild);


            objngaysinhchild = { "id": i, "ngaysinhchild": null };
            let timobject1 = findObjectByKey(mangtempChild, "id", i); // tìm object dựa trên key là id và giá trị là i
            timobject1 !== null ? timobject1.ngaysinhchild = null : mangtempChild.push(objngaysinhchild);


            objhanhlychild = { "id": i, "hanhlychild": "0" };
            let timobject = findObjectByKey(mangtempChild, "id", i); // tìm object dựa trên key là id và giá trị là i
            timobject !== null ? timobject.hanhlychild = "0" : mangtempChild.push(objhanhlychild);


            if (hasKhuHoi) {
                objhanhlychild = { "id": i, "hanhlychildKhuHoi": "0" };
                let timobject = findObjectByKey(mangtempChild, "id", i); // tìm object dựa trên key là id và giá trị là i
                timobject !== null ? timobject.hanhlychildKhuHoi = "0" : mangtempChild.push(objhanhlychild);
            }
        }
        ///////inf
        for (let i = 1; i <= inf; i++) {
            objquydanhinf = { "id": i, "quydanhinf": "betrai" };
            mangtempInf.push(objquydanhinf);


            objhoinf = { "id": i, "hoinf": null };
            let timobject1 = findObjectByKey(mangtempInf, "id", i); // tìm object dựa trên key là id và giá trị là i
            timobject1 !== null ? timobject1.hoinf = null : mangtempInf.push(objhoinf);


            objdemvateninf = { "id": i, "demvateninf": null };
            let timobject2 = findObjectByKey(mangtempInf, "id", i); // tìm object dựa trên key là id và giá trị là i
            timobject2 !== null ? timobject2.demvateninf = null : mangtempInf.push(objdemvateninf);


            objngaysinhinf = { "id": i, "ngaysinhinf": null };
            let timobject3 = findObjectByKey(mangtempInf, "id", i); // tìm object dựa trên key là id và giá trị là i
            timobject3 !== null ? timobject3.ngaysinhinf = null : mangtempInf.push(objngaysinhinf);
        }
        this.setState({
            mangadult: mangtempAdult,
            mangchild: mangtempChild,
            manginf: mangtempInf
        });

    }

    handleChangeDate(i, field, date) {
        if (field === "ngaysinhchild") {
            var ngayduocchon = date;
            var ngay2tuoi = subtractOnYear(ngaydi, 2);
            var ngay2tuoiKhuHoi = subtractOnYear(ngayve, 2);
            if (ngayve !== 0) {
                var ngay12tuoi = subtractOnYear(ngaydi, 12);
                var ngay12tuoiKhuHoi = subtractOnYear(ngayve, 12);
                if ((compare2daybymomentJS(ngayduocchon, ngay2tuoi) === -1) && (compare2daybymomentJS(ngayduocchon, ngay12tuoi) >= 0) && (compare2daybymomentJS(ngayduocchon, ngay2tuoiKhuHoi) === -1) && (compare2daybymomentJS(ngayduocchon, ngay12tuoiKhuHoi) >= 0)) {
                    let objForDate = {};
                    objForDate = { "id": i, "ngaysinhchild": moment(this.state.startDate).format("DD-MM-YYYY") };
                    var timobject = findObjectByKey(mangtempChild, "id", i);
                    this.setState({
                        startDate: date
                    }, function () {
                        timobject !== null ? timobject.ngaysinhchild = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempChild.push(objForDate);
                    });
                } else {
                    alert("Ngày Sinh đã chọn [" + moment(ngayduocchon).format("DD-MM-YYYY") + "] tính đến Ngày Khởi Hành [" + ngaydi + "] và Ngày Khứ Hồi [" + ngayve + "] đã quá tuổi quy định cho trẻ em từ 2->12 tuổi !");
                }
            } else {
                if ((compare2daybymomentJS(ngayduocchon, ngay2tuoi) === -1) && (compare2daybymomentJS(ngayduocchon, ngay12tuoi) >= 0)) {
                    let objForDate = {};
                    objForDate = { "id": i, "ngaysinhchild": moment(this.state.startDate).format("DD-MM-YYYY") };
                    var timobject = findObjectByKey(mangtempChild, "id", i);
                    this.setState({
                        startDate: date
                    }, function () {
                        timobject !== null ? timobject.ngaysinhchild = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempChild.push(objForDate);
                    });
                } else {
                    alert("Ngày Sinh đã chọn [" + moment(ngayduocchon).format("DD-MM-YYYY") + "] tính đến Ngày Khởi Hành [" + ngaydi + "] đã quá tuổi quy định cho trẻ em từ 2->12 tuổi !");
                }
            }


        }
        if (field === "ngaysinhinf") {
            var ngayduocchon = date;
            var ngay2tuoi = subtractOnYear(ngaydi, 2);
            var ngay2tuoiKhuHoi = subtractOnYear(ngayve, 2);
            if (ngayve !== 0) {
                var ngay12tuoi = subtractOnYear(ngaydi, 12);
                var ngay12tuoiKhuHoi = subtractOnYear(ngayve, 12);
                if ((compare2daybymomentJS(ngayduocchon, ngay2tuoi) > 0) && (compare2daybymomentJS(ngayduocchon, ngay2tuoiKhuHoi) > 0)) {
                    let objForDate1 = {};
                    objForDate1 = { "id": i, "ngaysinhinf": moment(this.state.startDate).format("DD-MM-YYYY") };
                    var timobject = findObjectByKey(mangtempInf, "id", i);
                    this.setState({
                        startDate: date
                    }, function () {
                        timobject !== null ? timobject.ngaysinhinf = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempInf.push(objForDate1);
                    });
                } else {
                    alert("Ngày Sinh đã chọn [" + moment(ngayduocchon).format("DD-MM-YYYY") + "] tính đến Ngày Khởi Hành [" + ngaydi + "] và Ngày Khứ Hồi [" + ngayve + "] đã quá tuổi quy định cho trẻ em từ 2->12 tuổi !");
                }
            } else {
                if ((compare2daybymomentJS(ngayduocchon, ngay2tuoi) > 0)) {
                    let objForDate = {};
                    objForDate = { "id": i, "ngaysinhchild": moment(this.state.startDate).format("DD-MM-YYYY") };
                    var timobject = findObjectByKey(mangtempChild, "id", i);
                    this.setState({
                        startDate: date
                    }, function () {
                        timobject !== null ? timobject.ngaysinhchild = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempChild.push(objForDate);
                    });
                } else {
                    alert("Ngày Sinh đã chọn [" + moment(ngayduocchon).format("DD-MM-YYYY") + "] tính đến Ngày Khởi Hành [" + ngaydi + "] đã quá tuổi quy định cho trẻ em từ 2->12 tuổi !");
                }
            }
        }
    }

    isChangeAdult = (i, field, event) => {
        let name = event.target.name;
        let value = event.target.value;
        let obj = {};
        obj = { "id": i, [name]: value };
        let timobject = findObjectByKey(mangtempAdult, "id", i); // tìm object dựa trên key là id và giá trị là i
        if (field === "quydanhadult") {
            timobject !== null ? timobject.quydanhadult = value : mangtempAdult.push(obj);
        }
        if (field === "hoadult") {
            timobject !== null ? timobject.hoadult = value : mangtempAdult.push(obj);
        }
        if (field === "demvatenadult") {
            timobject !== null ? timobject.demvatenadult = value : mangtempAdult.push(obj);

        }
        if (field === "hanhlyadult") {
            timobject !== null ? timobject.hanhlyadult = value : mangtempAdult.push(obj);

        }
        if (field === "hanhlyadultKhuHoi") {
            timobject !== null ? timobject.hanhlyadultKhuHoi = value : mangtempAdult.push(obj);

        }
        this.setState({
            mangadult: mangtempAdult
        });
    }

    isChangeChild = (i, field, event) => {
        let name = event.target.name;
        let value = event.target.value;
        let obj = {};
        obj = { "id": i, [name]: value };
        let timobject = findObjectByKey(mangtempChild, "id", i); // tìm object dựa trên key là id và giá trị là i
        if (field === "quydanhchild") {
            timobject !== null ? timobject.quydanhchild = value : mangtempChild.push(obj);
        }
        if (field === "hochild") {
            timobject !== null ? timobject.hochild = value : mangtempChild.push(obj);
        }
        if (field === "demvatenchild") {
            timobject !== null ? timobject.demvatenchild = value : mangtempChild.push(obj);

        }
        if (field === "hanhlychild") {
            timobject !== null ? timobject.hanhlychild = value : mangtempChild.push(obj);

        }
        if (field === "hanhlychildKhuHoi") {
            timobject !== null ? timobject.hanhlychildKhuHoi = value : mangtempChild.push(obj);

        }

        this.setState({
            mangchild: mangtempChild
        });
    }

    isChangeInf = (i, field, event) => {
        let name = event.target.name;
        let value = event.target.value;
        let obj = {};
        obj = { "id": i, [name]: value };
        let timobject = findObjectByKey(mangtempInf, "id", i); // tìm object dựa trên key là id và giá trị là i
        if (field === "quydanhinf") {
            timobject !== null ? timobject.quydanhinf = value : mangtempInf.push(obj);
        }
        if (field === "hoinf") {
            timobject !== null ? timobject.hoinf = value : mangtempInf.push(obj);
        }
        if (field === "demvateninf") {
            timobject !== null ? timobject.demvateninf = value : mangtempInf.push(obj);

        }
        if (field === "kyguiinf") {
            timobject !== null ? timobject.kyguiinf = value : mangtempInf.push(obj);

        }
        if (field === "ngaysinhinf") {
            timobject !== null ? timobject.ngaysinhinf = value : mangtempInf.push(obj);

        }
        this.setState({
            manginf: mangtempInf
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let testOKadult = 0;
        let testOKchild = 0;
        let testOKinf = 0;
        let objectsadult = this.state.mangadult;
        let objectschild = this.state.mangchild;
        let objectsinf = this.state.manginf;
        for (let i = 0; i < objectsadult.length; i++) {
            if (hasNull(this.state.mangadult[i])) {
                testOKadult++;
                break;
            } else {
                testOKadult--;
                testOKadult < 0 ? testOKadult = 0 : testOKadult;
            }
        }
        for (let i = 0; i < objectschild.length; i++) {
            if (hasNull(this.state.mangchild[i])) {
                testOKchild++;
                break;
            } else {
                testOKchild--;
                testOKchild < 0 ? testOKchild = 0 : testOKchild;
            }
        }
        for (let i = 0; i < objectsinf.length; i++) {
            if (hasNull(this.state.manginf[i])) {
                testOKinf++;
                break;
            } else {
                testOKinf--;
                testOKinf < 0 ? testOKinf = 0 : testOKinf;
            }
        }
        if (testOKadult === 0 && testOKchild === 0 && testOKinf === 0) {
            alert("Submit thôi!");
        } else {
            alert("Hãy điền đầy đủ các yêu cầu");
        }
        //alert("ok");
    }
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
        let taxfeeadultKhuHoi = ticketchoosedKhuHoi !== null ? Array.isArray(ticketchoosedKhuHoi.adult) ? 0 : ticketchoosedKhuHoi.adult.taxfee : 0;
        let taxfeechildKhuHoi = ticketchoosedKhuHoi !== null ? Array.isArray(ticketchoosedKhuHoi.child) ? 0 : ticketchoosedKhuHoi.child.taxfee : 0;
        let taxfeeinfKhuHoi = ticketchoosedKhuHoi !== null ? Array.isArray(ticketchoosedKhuHoi.inf) ? 0 : parseInt(ticketchoosedKhuHoi.inf.taxfee) : 0;
        let subtotalsecond = ticketchoosedKhuHoi !== null ? ticketchoosedKhuHoi.subtotal : 0;
        let totaltaxfee = taxfeeadult + taxfeechild + taxfeeinf;
        let totaltaxfeeKhuHoi = taxfeeadultKhuHoi + taxfeechildKhuHoi + taxfeeinfKhuHoi;
        let subtotal2way = subtotalfirst + subtotalsecond;
        let direction = localStorage.getItem("direction") ? localStorage.getItem("direction") : 0;
        let dep = localStorage.getItem("dep");
        let des = localStorage.getItem("des");

        var logo = ticketchoosed !== null ? ticketchoosed.airline === "Vietjet" ? vietjetlogo : ticketchoosed.airline === "Jetstar" ? jetstarlogo : vietnamairlinelogo : null;
        var logoKhuHoi = ticketchoosedKhuHoi !== null ? ticketchoosedKhuHoi.airline === "Vietjet" ? vietjetlogo : ticketchoosedKhuHoi.airline === "Jetstar" ? jetstarlogo : vietnamairlinelogo : null;
        let adultToReturn = [];
        let childToReturn = [];
        let infToReturn = [];

        var adultshow = () => {
            for (var i = 1; i <= adult; i++) {
                adultToReturn.push(
                    <React.Fragment key={i}>
                        <tr>
                            <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                <h4>{i}. <span className="passenger-type">NGƯỜI LỚN</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                            </td>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                <select defaultValue="ong" onChange={this.isChangeAdult.bind(this, i, "quydanhadult")} defaultValue="ong" id={"quydanhadult"} name={"quydanhadult"} className="form-control">
                                    <option value="ong">Ông</option>
                                    <option value="ba">Bà</option>
                                    <option value="anh">Anh</option>
                                    <option value="chi">Chị</option>
                                </select>
                            </td>
                            <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                <input onChange={this.isChangeAdult.bind(this, i, "hoadult")} type="text" className="form-control" maxLength={256} required="required" id={"hoadult"} name={"hoadult"} placeholder="Họ" />
                            </td>
                            <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                <input onChange={this.isChangeAdult.bind(this, i, "demvatenadult")} type="text" className="form-control" maxLength={256} required="required" id={"demvatenadult"} name={"demvatenadult"} placeholder="Tên đệm và Tên" />
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
                                        <span>Mỗi hành khách được mang tối đa {ticketchoosed.air_code === "VN" ? 20 : 7} Kg hành lý xách tay.</span>
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
                                            <select defaultValue="0" onChange={this.isChangeAdult.bind(this, i, "hanhlyadult")} className="form-control" id={"hanhlyadult"} name={"hanhlyadult"}  >
                                                <option value="0" >KHỞI HÀNH: Không mang hành lý ký gửi</option>
                                                <option value="1">
                                                    Thêm 15Kg hành lý (160.000 VND)
                          </option>
                                                <option value="2">
                                                    Thêm 20Kg hành lý (180.000 VND)
                          </option>
                                                <option value="3">
                                                    Thêm 25Kg hành lý (250.000 VND)
                          </option>
                                                <option value="4">
                                                    Thêm 30Kg hành lý (360.000 VND)
                          </option>
                                                <option value="5">
                                                    Thêm 35Kg hành lý (420.000 VND)
                          </option>
                                                <option value="6">
                                                    Thêm 40Kg hành lý (480.000 VND)
                          </option>
                                            </select>
                                        </li>
                                        {
                                            ticketchoosedKhuHoi !== null ?
                                                <li className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                                    <select defaultValue="0" onChange={this.isChangeAdult.bind(this, i, "hanhlyadultKhuHoi")} className="form-control" id={"hanhlyadultKhuHoi"} name={"hanhlyadultKhuHoi"}>
                                                        <option value="0" >KHỞI HÀNH: Không mang hành lý ký gửi</option>
                                                        <option value="1">
                                                            Thêm 15Kg hành lý (160.000 VND)
                          </option>
                                                        <option value="2">
                                                            Thêm 20Kg hành lý (180.000 VND)
                          </option>
                                                        <option value="3">
                                                            Thêm 25Kg hành lý (250.000 VND)
                          </option>
                                                        <option value="4">
                                                            Thêm 30Kg hành lý (360.000 VND)
                          </option>
                                                        <option value="5">
                                                            Thêm 35Kg hành lý (420.000 VND)
                          </option>
                                                        <option value="6">
                                                            Thêm 40Kg hành lý (480.000 VND)
                          </option>
                                                    </select>
                                                </li>
                                                : null
                                        }

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
            for (let i = 1; i <= child; i++) {
                childToReturn.push(
                    <React.Fragment key={i}>
                        <tr>
                            <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                <h4>{i}. <span className="passenger-type">TRẺ EM</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                            </td>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                <select defaultValue="true" onChange={this.isChangeChild.bind(this, i, "quydanhchild")} id={"quydanhchild"} name={"quydanhchild"} className="form-control">
                                    <option value="true">Bé trai</option>
                                    <option value="false">Bé gái</option>
                                </select>
                            </td>
                            <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                <input onChange={this.isChangeChild.bind(this, i, "hochild")} type="text" className="form-control" required="required" maxLength={256} id={"hochild"} name={"hochild"} placeholder="Họ" />
                            </td>
                            <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                <input onChange={this.isChangeChild.bind(this, i, "demvatenchild")} type="text" className="form-control" required="required" maxLength={256} id={"demvatenchild"} name={"demvatenchild"} placeholder="Tên đệm và Tên" />
                            </td>
                            <td className="col-xs-12 col-sm-3 col-md-3 mt-10 .col-sm-3-ex">
                                <label style={{ position: 'relative' }}>
                                    <DatePicker

                                        selected={this.state.startDate}
                                        onChange={this.handleChangeDate.bind(this, i, "ngaysinhchild")}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        shouldCloseOnSelect={false}
                                        dateFormat="DD-MM-YYYY"
                                        className="ion-calendar birthday children"
                                        placeholderText="Ngày sinh"
                                        id={"ngaysinhchild"} name={"ngaysinhchild"}
                                        required
                                        customInput={<IconCalendar type="ngaysinhchild" dateChoosed={this.state.mangchild} thutu={i - 1} />}
                                    />

                                </label>


                            </td>
                        </tr>
                        <tr>
                            <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12 mt-10">
                                <strong style={{ display: 'block' }}>
                                    Hành lý xách tay
                  </strong>
                                <div className="row" style={{ "marginRight": "0px", "marginLeft": "0px" }}>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <span>Mỗi hành khách được mang tối đa {ticketchoosed.air_code === "VN" ? 20 : 7} Kg hành lý xách tay.</span>
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
                                            <select defaultValue="0" onChange={this.isChangeChild.bind(this, i, "hanhlychild")} className="form-control" id={"hanhlychild"} name={"hanhlychild"}>
                                                <option value="0" >KHỞI HÀNH: Không mang hành lý ký gửi</option>
                                                <option value="1">
                                                    Thêm 15Kg hành lý (160.000 VND)
                          </option>
                                                <option value="2">
                                                    Thêm 20Kg hành lý (180.000 VND)
                          </option>
                                                <option value="3">
                                                    Thêm 25Kg hành lý (250.000 VND)
                          </option>
                                                <option value="4">
                                                    Thêm 30Kg hành lý (360.000 VND)
                          </option>
                                                <option value="5">
                                                    Thêm 35Kg hành lý (420.000 VND)
                          </option>
                                                <option value="6">
                                                    Thêm 40Kg hành lý (480.000 VND)
                          </option>
                                            </select>
                                        </li>
                                        {
                                            ticketchoosedKhuHoi !== null ?
                                                <li className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                                    <select defaultValue="0" onChange={this.isChangeChild.bind(this, i, "hanhlychildKhuHoi")} className="form-control" id={"hanhlychildKhuHoi"} name={"hanhlychildKhuHoi"}>
                                                        <option value="0" >KHỞI HÀNH: Không mang hành lý ký gửi</option>
                                                        <option value="1">
                                                            Thêm 15Kg hành lý (160.000 VND)
                          </option>
                                                        <option value="2">
                                                            Thêm 20Kg hành lý (180.000 VND)
                          </option>
                                                        <option value="3">
                                                            Thêm 25Kg hành lý (250.000 VND)
                          </option>
                                                        <option value="4">
                                                            Thêm 30Kg hành lý (360.000 VND)
                          </option>
                                                        <option value="5">
                                                            Thêm 35Kg hành lý (420.000 VND)
                          </option>
                                                        <option value="6">
                                                            Thêm 40Kg hành lý (480.000 VND)
                          </option>
                                                    </select>
                                                </li>
                                                : null
                                        }

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
            for (let i = 1; i <= inf; i++) {
                infToReturn.push(
                    <React.Fragment key={i}>

                        <tr>
                            <td colSpan={5} className="col-xs-12 col-sm-12 col-md-12">
                                <h4>{i}. <span className="passenger-type">EM BÉ</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10 pt-10 hidden-xs">
                                <strong style={{ paddingRight: 3 }}>Quý danh</strong><abbr className="require">*</abbr>
                            </td>
                            <td className="col-xs-12 col-sm-2 col-md-2 mt-10">
                                <select defaultValue="true" onChange={this.isChangeInf.bind(this, i, "quydanhinf")} id={"quydanhinf"} name={"quydanhinf"} className="form-control">
                                    <option value="true">Bé trai</option>
                                    <option value="false">Bé gái</option>
                                </select>
                            </td>
                            <td className="col-xs-5 col-sm-2 col-md-2 mt-10 pr-5">
                                <input onChange={this.isChangeInf.bind(this, i, "hoinf")} type="text" className="form-control" maxLength={256} required="required" id={"hoinf"} name={"hoinf"} placeholder="Họ" />
                            </td>
                            <td className="col-xs-7 col-sm-3 col-md-3 mt-10 pl-5">
                                <input onChange={this.isChangeInf.bind(this, i, "demvateninf")} type="text" className="form-control" maxLength={256} required="required" id={"demvateninf"} name={"demvateninf"} placeholder="Tên và tên Đệm" />
                            </td>
                            <td className="col-xs-12 col-sm-3 col-md-3 mt-10">
                                <label style={{ position: 'relative' }}>
                                    <DatePicker

                                        selected={this.state.startDate !== null ? null : null}
                                        onChange={this.handleChangeDate.bind(this, i, "ngaysinhinf")}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        shouldCloseOnSelect={false}
                                        dateFormat="DD-MM-YYYY"
                                        className="ion-calendar birthday children"
                                        placeholderText="Ngày sinh"
                                        id={"ngaysinhinf"} name={"ngaysinhinf"}
                                        required
                                        customInput={<IconCalendar type="ngaysinhinf" dateChoosed={this.state.manginf} thutu={i - 1} />}
                                    />

                                </label>
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
            <form>
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
                                            <button onClick={(event) => { this.handleSubmit(event) }} className="full-width coolButton">
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
                                                            {Array.isArray(ticketchoosedKhuHoi.child) ?
                                                                null
                                                                : <React.Fragment>
                                                                    <tr>
                                                                        <td>{child} x Trẻ em</td>
                                                                        <td className="amount">{ticketchoosedKhuHoi.child.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</td>
                                                                    </tr>
                                                                </React.Fragment>
                                                            }
                                                            {Array.isArray(ticketchoosedKhuHoi.inf) ?
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
            </form>
        );
    }
}

export default YourInfoContent;