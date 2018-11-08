import React, { Component } from 'react';
import axios from 'axios';
import jetstarlogo from '../images/jetstarmini.png';
import vietjetlogo from '../images/vietjetmini.png';
import vietnamairlinelogo from '../images/vietnamairlinemini.png';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import IconCalendar from './IconCalendar';

const getAllHanhLy = () =>
    axios.post('/getallhanhly', {
    }).then((res) => res.data)

const getsanbayByCode = (code) =>
    axios.post('/getsanbayByCode', {
        code: code
    }).then((res) => res.data)

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
const sortedByAttrNumber = (property) => {
    return function (x, y) {
        return ((parseInt(x[property]) === parseInt(y[property])) ? 0 : ((parseInt(x[property]) > parseInt(y[property])) ? 1 : -1));
    };
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
var hanhlyadultforplus = [];
var hanhlyadultforplusKhuHoi = [];
var hanhlychildforplus = [];
var hanhlychildforplusKhuHoi = [];
var ngaydi = (localStorage.getItem("datedep")) ? localStorage.getItem("datedep") : 0;
var ngayve = (localStorage.getItem("datedes")) ? localStorage.getItem("datedes") : 0;
var ticketchoosed = localStorage.getItem("ticketchoosed") ? JSON.parse(localStorage.getItem("ticketchoosed")) : null;
var ticketchoosedKhuHoi = localStorage.getItem("ticketchoosedkhuhoi") ? JSON.parse(localStorage.getItem("ticketchoosedkhuhoi")) : null;

var priceAdultOrigin = 65000;
var priceChildOrigin = 65000;
var priceInfOrigin = 40000;
var priceAdult = 50000;
var priceChild = 50000;
var priceInf = 40000;
var adultnum = localStorage.getItem("adult") ? parseInt(localStorage.getItem("adult")) : 1;
var childnum = localStorage.getItem("child") ? parseInt(localStorage.getItem("child")) : 0;
var infnum = localStorage.getItem("inf") ? parseInt(localStorage.getItem("inf")) : 0;

class YourInfoContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangadult: [],
            mangchild: [],
            manginf: [],
            startDate: null,
            fullname: null,
            phone: null,
            email: null,
            address: null,
            message: null,
            toggletaidiachikhachhang: true,
            togglechuyenkhoan: false,
            toggletaiphongve: false,
            danhsachnganhang: null,
            danhsachhanhly: null,
            danhsachhanhlyKhuHoi: null,
            nganhangchoosed: null,
            subtotal: null,
            depcode: null,
            descode: null,
            desfull: null,
            desfull: null,
            thongtinvedi: localStorage.getItem("ticketchoosed") ? JSON.parse(localStorage.getItem("ticketchoosed")) : null,
            thongtinveKhuHoi: localStorage.getItem("ticketchoosedkhuhoi") ? JSON.parse(localStorage.getItem("ticketchoosedkhuhoi")) : null
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    componentDidMount() {
        let subtotal2way = ticketchoosed.subtotal ? (ticketchoosed.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))) + (ticketchoosedKhuHoi !== null ? (ticketchoosedKhuHoi.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))) : 0) : 0;

        this.setState({
            subtotal: subtotal2way,
            subtotaloriginal: subtotal2way,
        });
    }


    componentWillMount() {

        if (ticketchoosed === null) {
            window.location.replace("/");
        }

        getAllHanhLy().then((result) => {
            var ticketchoosedToJson = ticketchoosed;
            var ticketchoosedKhuHoiToJson = ticketchoosedKhuHoi !== null ? ticketchoosedKhuHoi : [];
            var danhsachhanhlyfull = result.data;
            var filtered = danhsachhanhlyfull.filter(function (item) {
                return item.codehangbay == ticketchoosedToJson.air_code;
            });
            var filtered1 = danhsachhanhlyfull.filter(function (item) {
                return item.codehangbay == ticketchoosedKhuHoiToJson.air_code;
            });
            this.setState({
                danhsachnganhang: [{ id: 1, tennganhang: "ACB" }, { id: 2, tennganhang: "Vietcombank" }],
                danhsachhanhly: filtered.sort(sortedByAttrNumber('code')),
                danhsachhanhlyKhuHoi: filtered1.sort(sortedByAttrNumber('code'))
            });
        });


        let adult = (localStorage.getItem("adult")) ? localStorage.getItem("adult") : 0;
        let child = (localStorage.getItem("child")) ? localStorage.getItem("child") : 0;
        let inf = (localStorage.getItem("inf")) ? localStorage.getItem("inf") : 0;
        let dep = localStorage.getItem("dep");
        let des = localStorage.getItem("des");
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

        getsanbayByCode(dep).then((result) => {
            var tempdata = result.data[0];
            this.setState({
                depfull: tempdata,
                depcode: dep,
            });
        })
        getsanbayByCode(des).then((result) => {
            var tempdata = result.data[0];
            this.setState({
                desfull: tempdata,
                descode: des,
            });
        })

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

            let objhanhlyadultgiatien = { "id": i, "sotien": "0" };
            hanhlyadultforplus.push(objhanhlyadultgiatien);


            if (hasKhuHoi) {
                objhanhlyadult = { "id": i, "hanhlyadultKhuHoi": "0" };
                let timobject = findObjectByKey(mangtempAdult, "id", i); // tìm object dựa trên key là id và giá trị là i
                timobject !== null ? timobject.hanhlyadultKhuHoi = "0" : mangtempAdult.push(objhanhlyadult);

                let objhanhlyadultgiatien = { "id": i, "sotien": "0" };
                hanhlyadultforplusKhuHoi.push(objhanhlyadultgiatien);
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

            let objhanhlychildgiatien = { "id": i, "sotien": "0" };
            hanhlychildforplus.push(objhanhlychildgiatien);


            if (hasKhuHoi) {
                objhanhlychild = { "id": i, "hanhlychildKhuHoi": "0" };
                let timobject = findObjectByKey(mangtempChild, "id", i); // tìm object dựa trên key là id và giá trị là i
                timobject !== null ? timobject.hanhlychildKhuHoi = "0" : mangtempChild.push(objhanhlychild);

                let objhanhlychildgiatien = { "id": i, "sotien": "0" };
                hanhlychildforplusKhuHoi.push(objhanhlychildgiatien);
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
            manginf: mangtempInf,
            hanhlyadultforplus: hanhlyadultforplus,
            hanhlyadultforplusKhuHoi: hanhlyadultforplusKhuHoi.length === 0 ? [] : hanhlyadultforplusKhuHoi,
            hanhlychildforplus: hanhlychildforplus,
            hanhlychildforplusKhuHoi: hanhlychildforplusKhuHoi.length === 0 ? [] : hanhlychildforplusKhuHoi,
        });

    }

    handleChangeDate(i, field, date) {
        if (field === "ngaysinhchild") {
            var ngayduocchon = date;
            var ngay2tuoi = subtractOnYear(ngaydi, 2);
            var ngay2tuoiKhuHoi = ngayve !== 0 ? subtractOnYear(ngayve, 2) : subtractOnYear(moment().format("DD-MM-YYYY"), 2);
            if (ngayve !== 0) {
                // var ngay12tuoi = subtractOnYear(ngaydi, 12);
                // var ngay12tuoiKhuHoi = ngayve !== 0 ? subtractOnYear(ngayve, 12) : subtractOnYear(moment().format("DD-MM-YYYY"), 12);
                // if ((compare2daybymomentJS(ngayduocchon, ngay2tuoi) === -1) && (compare2daybymomentJS(ngayduocchon, ngay12tuoi) >= 0) && (compare2daybymomentJS(ngayduocchon, ngay2tuoiKhuHoi) === -1) && (compare2daybymomentJS(ngayduocchon, ngay12tuoiKhuHoi) >= 0)) {
                //     let objForDate = {};
                //     objForDate = { "id": i, "ngaysinhchild": moment(this.state.startDate).format("DD-MM-YYYY") };
                //     var timobject = findObjectByKey(mangtempChild, "id", i);
                //     this.setState({
                //         startDate: date
                //     }, function () {
                //         timobject !== null ? timobject.ngaysinhchild = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempChild.push(objForDate);
                //     });
                // } else {
                //     alert("Ngày Sinh đã chọn [" + moment(ngayduocchon).format("DD-MM-YYYY") + "] tính đến Ngày Khởi Hành [" + ngaydi + "] và Ngày Khứ Hồi [" + ngayve + "] đã quá tuổi quy định cho trẻ em từ 2->12 tuổi !");
                // }

                let objForDate = {};
                objForDate = { "id": i, "ngaysinhchild": moment(this.state.startDate).format("DD-MM-YYYY") };
                var timobject = findObjectByKey(mangtempChild, "id", i);
                this.setState({
                    startDate: date
                }, function () {
                    timobject !== null ? timobject.ngaysinhchild = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempChild.push(objForDate);
                });

            } else {
                // if ((compare2daybymomentJS(ngayduocchon, ngay2tuoi) === -1) && (compare2daybymomentJS(ngayduocchon, ngay12tuoi) >= 0)) {
                //     let objForDate = {};
                //     objForDate = { "id": i, "ngaysinhchild": moment(this.state.startDate).format("DD-MM-YYYY") };
                //     var timobject = findObjectByKey(mangtempChild, "id", i);
                //     this.setState({
                //         startDate: date
                //     }, function () {
                //         timobject !== null ? timobject.ngaysinhchild = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempChild.push(objForDate);
                //     });
                // } else {
                //     alert("Ngày Sinh đã chọn [" + moment(ngayduocchon).format("DD-MM-YYYY") + "] tính đến Ngày Khởi Hành [" + ngaydi + "] đã quá tuổi quy định cho trẻ em từ 2->12 tuổi !");
                // }

                let objForDate = {};
                objForDate = { "id": i, "ngaysinhchild": moment(this.state.startDate).format("DD-MM-YYYY") };
                var timobject = findObjectByKey(mangtempChild, "id", i);
                this.setState({
                    startDate: date
                }, function () {
                    timobject !== null ? timobject.ngaysinhchild = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempChild.push(objForDate);
                });

            }


        }
        if (field === "ngaysinhinf") {
            var ngayduocchon = date;
            var ngay2tuoi = subtractOnYear(ngaydi, 2);
            var ngay2tuoiKhuHoi = ngayve !== 0 ? subtractOnYear(ngayve, 2) : subtractOnYear(moment().format("DD-MM-YYYY"), 2);
            if (ngayve !== 0) {
                // var ngay12tuoi = subtractOnYear(ngaydi, 12);
                // var ngay12tuoiKhuHoi = subtractOnYear(ngayve, 12);
                // if ((compare2daybymomentJS(ngayduocchon, ngay2tuoi) > 0) && (compare2daybymomentJS(ngayduocchon, ngay2tuoiKhuHoi) > 0)) {
                //     let objForDate1 = {};
                //     objForDate1 = { "id": i, "ngaysinhinf": moment(this.state.startDate).format("DD-MM-YYYY") };
                //     var timobject = findObjectByKey(mangtempInf, "id", i);
                //     this.setState({
                //         startDate: date
                //     }, function () {
                //         timobject !== null ? timobject.ngaysinhinf = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempInf.push(objForDate1);
                //     });
                // } else {
                //     alert("Ngày Sinh đã chọn [" + moment(ngayduocchon).format("DD-MM-YYYY") + "] tính đến Ngày Khởi Hành [" + ngaydi + "] và Ngày Khứ Hồi [" + ngayve + "] đã quá tuổi quy định cho trẻ em từ 2->12 tuổi !");
                // }
                let objForDate1 = {};
                objForDate1 = { "id": i, "ngaysinhinf": moment(this.state.startDate).format("DD-MM-YYYY") };
                var timobject = findObjectByKey(mangtempInf, "id", i);
                this.setState({
                    startDate: date
                }, function () {
                    timobject !== null ? timobject.ngaysinhinf = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempInf.push(objForDate1);
                });
            } else {
                // if ((compare2daybymomentJS(ngayduocchon, ngay2tuoi) > 0)) {
                //     let objForDate = {};
                //     objForDate = { "id": i, "ngaysinhchild": moment(this.state.startDate).format("DD-MM-YYYY") };
                //     var timobject = findObjectByKey(mangtempChild, "id", i);
                //     this.setState({
                //         startDate: date
                //     }, function () {
                //         timobject !== null ? timobject.ngaysinhchild = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempChild.push(objForDate);
                //     });
                // } else {
                //     alert("Ngày Sinh đã chọn [" + moment(ngayduocchon).format("DD-MM-YYYY") + "] tính đến Ngày Khởi Hành [" + ngaydi + "] đã quá tuổi quy định cho trẻ em từ 2->12 tuổi !");
                // }
                let objForDate1 = {};
                objForDate1 = { "id": i, "ngaysinhinf": moment(this.state.startDate).format("DD-MM-YYYY") };
                var timobject = findObjectByKey(mangtempInf, "id", i);
                this.setState({
                    startDate: date
                }, function () {
                    timobject !== null ? timobject.ngaysinhinf = moment(this.state.startDate).format("DD-MM-YYYY") : mangtempInf.push(objForDate1);
                });
            }
        }
    }

    isChangeInfoContact = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    isChangeInfoThanhToan = (infothanhtoan, event) => {
        //let name = event.target.name;
        let value = event.target.value;
        if (infothanhtoan === "taidiachikhachhang") {
            this.setState({
                thanhtoanBy: value,
                nganhangchoosed: null,
                toggletaidiachikhachhang: true,
                togglechuyenkhoan: false,
                toggletaiphongve: false,
            });
        } else if (infothanhtoan === "chuyenkhoan") {
            this.setState({
                thanhtoanBy: value,
                nganhangchoosed: this.state.danhsachnganhang[0].tennganhang,
                toggletaidiachikhachhang: false,
                togglechuyenkhoan: true,
                toggletaiphongve: false,
            });
        } else if (infothanhtoan === "taiphongve") {
            this.setState({
                thanhtoanBy: value,
                nganhangchoosed: null,
                toggletaidiachikhachhang: false,
                togglechuyenkhoan: false,
                toggletaiphongve: true,
            });
        } else {
            this.setState({
                nganhangchoosed: value,
                toggletaidiachikhachhang: false,
                togglechuyenkhoan: true,
                toggletaiphongve: false,
            });
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
            var subtotalOriginal = this.state.subtotaloriginal;
            timobject !== null ? timobject.hanhlyadult = value : mangtempAdult.push(obj);

            let timItemOfHanhly = findObjectByKey(this.state.danhsachhanhly, "code", value); //lấy ra item có code khi thay đổi
            let timhanhlykygui = findObjectByKey(hanhlyadultforplus, "id", i);
            timhanhlykygui.sotien = timItemOfHanhly.sotien;

            this.state.hanhlyadultforplus.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlyadultforplusKhuHoi.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlychildforplus.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlychildforplusKhuHoi.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.setState({
                hanhlyadultforplus: hanhlyadultforplus,
                hanhlyadultforplusKhuHoi: hanhlyadultforplusKhuHoi,
                subtotal: subtotalOriginal,
            });
        }
        if (field === "hanhlyadultKhuHoi") {
            var subtotalOriginal = this.state.subtotaloriginal;
            timobject !== null ? timobject.hanhlyadultKhuHoi = value : mangtempAdult.push(obj);

            let timItemOfHanhly = findObjectByKey(this.state.danhsachhanhlyKhuHoi, "code", value); //lấy ra item có code khi thay đổi
            let timhanhlykygui = findObjectByKey(hanhlyadultforplusKhuHoi, "id", i);
            timhanhlykygui.sotien = timItemOfHanhly.sotien;

            this.state.hanhlyadultforplus.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlyadultforplusKhuHoi.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlychildforplus.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlychildforplusKhuHoi.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.setState({
                hanhlyadultforplus: hanhlyadultforplus,
                hanhlyadultforplusKhuHoi: hanhlyadultforplusKhuHoi,
                subtotal: subtotalOriginal,
            });
        }
        this.setState({
            mangadult: mangtempAdult,
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
            var subtotalOriginal = this.state.subtotaloriginal;
            timobject !== null ? timobject.hanhlychild = value : mangtempChild.push(obj);

            let timItemOfHanhly = findObjectByKey(this.state.danhsachhanhly, "code", value); //lấy ra item có code khi thay đổi
            let timhanhlykygui = findObjectByKey(hanhlychildforplus, "id", i);
            timhanhlykygui.sotien = timItemOfHanhly.sotien;

            this.state.hanhlyadultforplus.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlyadultforplusKhuHoi.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlychildforplus.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlychildforplusKhuHoi.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.setState({
                hanhlychildforplus: hanhlychildforplus,
                hanhlychildforplusKhuHoi: hanhlychildforplusKhuHoi,
                subtotal: subtotalOriginal,
            });
        }
        if (field === "hanhlychildKhuHoi") {
            var subtotalOriginal = this.state.subtotaloriginal;
            timobject !== null ? timobject.hanhlychildKhuHoi = value : mangtempChild.push(obj);

            let timItemOfHanhly = findObjectByKey(this.state.danhsachhanhlyKhuHoi, "code", value); //lấy ra item có code khi thay đổi
            let timhanhlykygui = findObjectByKey(hanhlychildforplusKhuHoi, "id", i);
            timhanhlykygui.sotien = timItemOfHanhly.sotien;

            this.state.hanhlyadultforplus.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlyadultforplusKhuHoi.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlychildforplus.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.state.hanhlychildforplusKhuHoi.forEach(element => {
                subtotalOriginal += parseInt(element.sotien);
            });
            this.setState({
                hanhlychildforplus: hanhlychildforplus,
                hanhlychildforplusKhuHoi: hanhlychildforplusKhuHoi,
                subtotal: subtotalOriginal,
            });
        }

        this.setState({
            mangchild: mangtempChild,
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

    printDataDieuKienVe = () => {
        return (
            this.state.thongtinvedi.air_code === "BL" ?
                <p style={{ color: "#0000cd" }}>
                    <span style={{ color: "#ff6600", fontSize: "18px", fontWeight: "bold" }}>
                        * Điều kiện giá vé đi ({this.state.thongtinvedi.airline}):
                                    </span><br />
                    - Đổi Ngày Giờ Chuyến Bay: Được phép - Thu phí 360,000 VNĐ + Giá vé chênh lệch (nếu có)<br />
                    - Nâng Hạng: Được phép - Thu phí 360,000 VNĐ + Phí nâng hạng + Giá vé chênh lệch của hạng cao hơn<br />
                    - Đổi Hành Trình: Không được phép.<br />
                    - Đổi Tên Hành Khách: Được phép - Thu phí 360,000 VNĐ + Giá vé chênh lệch (nếu có)<br />
                    - Thời hạn thay đổi (bao gồm thay đổi tên, ngày/chuyến bay): Trước giờ khởi hành 12 tiếng.<br />
                    - Thời Hạn Dừng Tối Đa: Không được phép<br />
                </p>
                : this.state.thongtinvedi.air_code === "VJ" ?
                    <p style={{ color: "#0000cd" }}>
                        <span style={{ color: "#ff6600", fontSize: "18px", fontWeight: "bold" }}>
                            * Điều kiện giá vé đi ({this.state.thongtinvedi.airline}):
                                            </span><br />
                        Hoàn Vé: Không được phép

Đổi Tên Hành Khách: Được phép - Thu phí: 495,000 VND

Đổi Hành Trình: Được phép - Thu phí: 374.000 VND + Giá vé chênh lệch (nếu có). Đổi đồng hạng hoặc nâng hạng tương ứng của hành trình mới.

Đổi Ngày Giờ Chuyến Bay: Được phép - Thu phí: 374.000 VND + Giá vé chênh lệch (nếu có).

Bảo lưu: Không được phép

Thời hạn thay đổi (bao gồm thay đổi tên, ngày/chuyến bay): Trước giờ khởi hành 12 tiếng.<br />
                    </p>
                    :
                    <p style={{ color: "#0000cd" }}>
                        <span style={{ color: "#ff6600", fontSize: "18px", fontWeight: "bold" }}>
                            * Điều kiện giá vé đi ({this.state.thongtinvedi.airline}):
                                            </span><br />
                        Hoàn Vé: Được phép - thu phí: 350.000 VNĐ (Giai đoạn Tết Nguyên đán: 650.000 VNĐ).

Đổi Ngày Giờ Chuyến Bay: - Miễn phí (Trừ giai đoạn tết Nguyên Đán áp dụng phí theo quy định). - Thu chênh lệch giá vé (nếu có).

Đổi Hành Trình: - Miễn phí (Trừ giai đoạn tết Nguyên Đán áp dụng phí theo quy định). - Thu chênh lệch giá vé (nếu có).

Đổi Tên Hành Khách: Không được phép

Điểm Cộng Dặm: 1.10/dặm<br />
                    </p>
        )


    }

    printDataDieuKienVeKhuHoi = () => {
        if (localStorage.getItem('ticketchoosedkhuhoi') !== "null") {
            return (
                this.state.thongtinveKhuHoi.air_code === "BL" ?
                    <p style={{ color: "#0000cd" }}>
                        <span style={{ color: "#ff6600", fontSize: "18px", fontWeight: "bold" }}>
                            * Điều kiện giá vé khứ hồi ({this.state.thongtinveKhuHoi.airline}):
                                        </span><br />
                        - Đổi Ngày Giờ Chuyến Bay: Được phép - Thu phí 360,000 VNĐ + Giá vé chênh lệch (nếu có)<br />
                        - Nâng Hạng: Được phép - Thu phí 360,000 VNĐ + Phí nâng hạng + Giá vé chênh lệch của hạng cao hơn<br />
                        - Đổi Hành Trình: Không được phép.<br />
                        - Đổi Tên Hành Khách: Được phép - Thu phí 360,000 VNĐ + Giá vé chênh lệch (nếu có)<br />
                        - Thời hạn thay đổi (bao gồm thay đổi tên, ngày/chuyến bay): Trước giờ khởi hành 12 tiếng.<br />
                        - Thời Hạn Dừng Tối Đa: Không được phép<br />
                    </p>
                    : this.state.thongtinveKhuHoi.air_code === "VJ" ?
                        <p style={{ color: "#0000cd" }}>
                            <span style={{ color: "#ff6600", fontSize: "18px", fontWeight: "bold" }}>
                                * Điều kiện giá vé khứ hồi ({this.state.thongtinveKhuHoi.airline}):
                                                </span><br />
                            Hoàn Vé: Không được phép

    Đổi Tên Hành Khách: Được phép - Thu phí: 495,000 VND

    Đổi Hành Trình: Được phép - Thu phí: 374.000 VND + Giá vé chênh lệch (nếu có). Đổi đồng hạng hoặc nâng hạng tương ứng của hành trình mới.

    Đổi Ngày Giờ Chuyến Bay: Được phép - Thu phí: 374.000 VND + Giá vé chênh lệch (nếu có).

    Bảo lưu: Không được phép

    Thời hạn thay đổi (bao gồm thay đổi tên, ngày/chuyến bay): Trước giờ khởi hành 12 tiếng.<br />
                        </p>
                        :
                        <p style={{ color: "#0000cd" }}>
                            <span style={{ color: "#ff6600", fontSize: "18px", fontWeight: "bold" }}>
                                * Điều kiện giá vé khứ hồi ({this.state.thongtinveKhuHoi.airline}):
                                                </span><br />
                            Hoàn Vé: Được phép - thu phí: 350.000 VNĐ (Giai đoạn Tết Nguyên đán: 650.000 VNĐ).

    Đổi Ngày Giờ Chuyến Bay: - Miễn phí (Trừ giai đoạn tết Nguyên Đán áp dụng phí theo quy định). - Thu chênh lệch giá vé (nếu có).

    Đổi Hành Trình: - Miễn phí (Trừ giai đoạn tết Nguyên Đán áp dụng phí theo quy định). - Thu chênh lệch giá vé (nếu có).

    Đổi Tên Hành Khách: Không được phép

    Điểm Cộng Dặm: 1.10/dặm<br />
                        </p>
            )
        }



    }

    printDataNganHang = () => {
        if (this.state.danhsachnganhang !== null) {
            return this.state.danhsachnganhang.map((value, key) =>
                (
                    <React.Fragment key={key}>
                        <input checked={this.state.nganhangchoosed === value.tennganhang ? true : false} onChange={this.isChangeInfoThanhToan.bind(this, value.tennganhang)} type="radio" id="payment_id_3" defaultValue={value.tennganhang} name="payment" />
                        {value.tennganhang}
                    </React.Fragment>
                )
            )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let testOKadult = 0;
        let testOKchild = 0;
        let testOKinf = 0;
        let testOKINFO = 0;
        let { fullname, phone } = this.state;
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

        if (fullname === null || fullname === "" || phone === null || phone === "") {
            testOKINFO++;
        } else {
            testOKINFO = 0;
        }

        if (testOKadult === 0 && testOKchild === 0 && testOKinf === 0 && testOKINFO === 0) {
            axios.post("/infobooking", {
                thongtinvedi: this.state.thongtinvedi,
                thongtinveKhuHoi: this.state.thongtinveKhuHoi,
                fullname: this.state.fullname,
                phone: this.state.phone,
                address: this.state.address,
                email: this.state.email,
                yeucau: this.state.message,
                depcode: this.state.depcode,
                descode: this.state.descode,
                depfull: this.state.depfull.ten,
                desfull: this.state.desfull.ten,
                nganhangchoosed: this.state.nganhangchoosed,
                subtotaloriginal: this.state.subtotaloriginal,
                subtotalwithhanhly: this.state.subtotal,
                thongtinvedi: this.state.thongtinvedi,
                thongtinveKhuHoi: this.state.thongtinveKhuHoi,
                mangadult: this.state.mangadult,
                mangchild: this.state.mangchild,
                manginf: this.state.manginf,
            }).then((res) => { res.data.result === "ok" ? this.redirectToSummaryInfo(res.data.id) : alert("Thất bại") })
        } else {
            alert("Hãy điền đầy đủ các yêu cầu");
        }
    }

    redirectToSummaryInfo(id) {
        localStorage.setItem("idhoadon", id);
        window.location.replace("/summaryinfo/" + id);
    }

    render() {
        let adult = (localStorage.getItem("adult")) ? localStorage.getItem("adult") : 0;
        let child = (localStorage.getItem("child")) ? localStorage.getItem("child") : 0;
        let inf = (localStorage.getItem("inf")) ? localStorage.getItem("inf") : 0;
        let tongsonguoi = parseInt(adult) + parseInt(child) + parseInt(inf);
        let taxfeeadult = Array.isArray(ticketchoosed.adult) ? 0 : (ticketchoosed.adult.taxfee - (priceAdultOrigin) + (priceAdult));
        let taxfeechild = Array.isArray(ticketchoosed.child) ? 0 : (ticketchoosed.child.taxfee - (priceChildOrigin) + (priceChild));
        let taxfeeinf = Array.isArray(ticketchoosed.inf) ? 0 : (parseInt(ticketchoosed.inf.taxfee) - (priceInfOrigin) + (priceInf));
        let subtotalfirst = ticketchoosed.subtotal;
        let taxfeeadultKhuHoi = ticketchoosedKhuHoi !== null ? Array.isArray(ticketchoosedKhuHoi.adult) ? 0 : (ticketchoosedKhuHoi.adult.taxfee - (priceAdultOrigin) + (priceAdult)) : 0;
        let taxfeechildKhuHoi = ticketchoosedKhuHoi !== null ? Array.isArray(ticketchoosedKhuHoi.child) ? 0 : (ticketchoosedKhuHoi.child.taxfee - (priceChildOrigin) + (priceChild)) : 0;
        let taxfeeinfKhuHoi = ticketchoosedKhuHoi !== null ? Array.isArray(ticketchoosedKhuHoi.inf) ? 0 : (parseInt(ticketchoosedKhuHoi.inf.taxfee) - (priceInfOrigin) + (priceInf)) : 0;
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

        var totalall = ticketchoosed.subtotal ? (ticketchoosed.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))) + (ticketchoosedKhuHoi !== null ? (ticketchoosedKhuHoi.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))) : 0) : 0;

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
                                            <select defaultValue="0" onChange={this.isChangeAdult.bind(this, i, "hanhlyadult")} className="form-control" id={"hanhlyadult"} name={"hanhlyadult"}  >
                                                {this.state.danhsachhanhly !== null ? this.state.danhsachhanhly.map((value, key) => {
                                                    return (
                                                        <option key={key} value={value.code}>
                                                            {value.tenhanhly}
                                                        </option>
                                                    )
                                                }) : null}
                                            </select>
                                        </li>
                                        {
                                            ticketchoosedKhuHoi !== null ?
                                                <li className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                                    <select defaultValue="0" onChange={this.isChangeAdult.bind(this, i, "hanhlyadultKhuHoi")} className="form-control" id={"hanhlyadultKhuHoi"} name={"hanhlyadultKhuHoi"}>
                                                        {this.state.danhsachhanhlyKhuHoi !== null ? this.state.danhsachhanhlyKhuHoi.map((value, key) => {
                                                            return (
                                                                <option key={key} value={value.code}>
                                                                    {value.tenhanhly}
                                                                </option>
                                                            )
                                                        }) : null}
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
                                        minDate={moment(ngaydi, 'DD-MM-YYYY').subtract(12, "years")}
                                        maxDate={ngayve !== 0 ? moment(ngayve, 'DD-MM-YYYY').subtract(2, "years") : moment().subtract(2, "years")}
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
                                            <select defaultValue="0" onChange={this.isChangeChild.bind(this, i, "hanhlychild")} className="form-control" id={"hanhlychild"} name={"hanhlychild"}>
                                                {this.state.danhsachhanhly !== null ? this.state.danhsachhanhly.map((value, key) => {
                                                    return (
                                                        <option key={key} value={value.code}>
                                                            {value.tenhanhly}
                                                        </option>
                                                    )
                                                }) : null}
                                            </select>
                                        </li>
                                        {
                                            ticketchoosedKhuHoi !== null ?
                                                <li className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                                    <select defaultValue="0" onChange={this.isChangeChild.bind(this, i, "hanhlychildKhuHoi")} className="form-control" id={"hanhlychildKhuHoi"} name={"hanhlychildKhuHoi"}>
                                                        {this.state.danhsachhanhlyKhuHoi !== null ? this.state.danhsachhanhlyKhuHoi.map((value, key) => {
                                                            return (
                                                                <option key={key} value={value.code}>
                                                                    {value.tenhanhly}
                                                                </option>
                                                            )
                                                        }) : null}
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
                                        minDate={moment(ngaydi, 'DD-MM-YYYY').subtract(2, "years")}
                                        maxDate={ngayve !== 0 ? moment(ngayve, 'DD-MM-YYYY') : moment()}
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
                                                                            <input onChange={this.isChangeInfoContact.bind(this)} type="text" placeholder="Họ và tên" required maxLength={256} className="form-control" id="fullname" name="fullname" />
                                                                        </div>
                                                                        <div className="col-xs-12 col-sm-6 col-md-6 mb-10">
                                                                            <label htmlFor="phone">
                                                                                Điện thoại<abbr>*</abbr>
                                                                            </label>
                                                                            <input onChange={this.isChangeInfoContact.bind(this)} type="tel" placeholder="Điện thoại" required maxLength={50} className="form-control" id="phone" name="phone" />
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                                                            <label htmlFor="email">
                                                                                Email liên hệ
                          </label>
                                                                            <input onChange={this.isChangeInfoContact.bind(this)} type="email" placeholder="Email liên hệ" className="form-control" id="email" name="email" />
                                                                        </div>
                                                                        <div className="col-xs-12 col-md-6 col-sm-6 mb-10">
                                                                            <label htmlFor="address">
                                                                                Địa chỉ
                          </label>
                                                                            <input onChange={this.isChangeInfoContact.bind(this)} type="text" className="form-control" placeholder="Địa chỉ" id="address" name="address" />
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="col-xs-12 col-md-12 col-sm-12 mb-10">
                                                                            <label htmlFor="message">
                                                                                Yêu cầu khác
                          </label>
                                                                            <textarea onChange={this.isChangeInfoContact.bind(this)} className="form-control" placeholder="Khi bạn có thêm yêu cầu, hãy viết vào..." style={{ resize: 'none' }} name="message" id="message" cols={40} rows={6} defaultValue={""} />
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

                                {/* <div className="simple_box no-padding mb-20 selected">
                                    <h3><i className="fa fa-money mr-5" aria-hidden="true" />Hình thức thanh toán</h3>
                                    <div className="pd-15" style={{ "padding": "15px" }}>
                                        <p> Sau khi chọn vui lòng nhấn <strong>"Đặt vé"</strong>. Booker sẽ gọi đến xác thực thông tin book vé. Điều này là cần thiết nhằm tránh sai sót khi ra sân bay.</p>
                                        <div className="methods selected" id="payment">
                                            <div className={this.state.toggletaidiachikhachhang ? "method-item selected" : "method-item"}>
                                                <label htmlFor="payment_id_2" className="method-header">
                                                    <input onChange={this.isChangeInfoThanhToan.bind(this, "taidiachikhachhang")} type="radio" id="payment_id_2" defaultValue="taidiachikhachhang" name="payment" defaultChecked="checked" />
                                                    Thanh toán tại địa chỉ Khách hàng
            </label>
                                                <div className="payment_box method-content payment_mean2" style={this.state.toggletaidiachikhachhang ? { display: 'block' } : { display: 'none' }}>
                                                    <p>Sau khi đặt vé thành công, nhân viên chúng tôi&nbsp;sẽ đến địa chỉ quý khách cung cấp để giao vé và thu tiền.&nbsp;<br />
                                                        Thời gian: từ thứ 2 đến chủ nhật &amp; các ngày lễ .<br />
                                                        Phạm vi giao vé: trong bán kính &lt; 10km (Sài Gòn), phí vận chuyển (Miễn Phí).</p>
                                                </div>
                                            </div>
                                            <div className={this.state.toggletaiphongve ? "method-item selected" : "method-item"}>
                                                <label htmlFor="payment_id_1" className="method-header">
                                                    <input onChange={this.isChangeInfoThanhToan.bind(this, "taiphongve")} type="radio" id="payment_id_1" defaultValue="taiphongve" name="payment" />
                                                    Thanh toán tại phòng vé
            </label>
                                                <div className="payment_box method-content payment_mean1" style={this.state.toggletaiphongve ? { display: 'block' } : { display: 'none' }}>
                                                    <p>Sau khi quý khách đặt vé thành công, Quý khách vui lòng qua văn phòng chúng tôi&nbsp;để thanh toán và nhận vé.</p>
                                                </div>
                                            </div>
                                            <div className={this.state.togglechuyenkhoan ? "method-item selected" : "method-item"}>
                                                <label htmlFor="payment_id_3" className="method-header">
                                                    <input onChange={this.isChangeInfoThanhToan.bind(this, "chuyenkhoan")} type="radio" id="payment_id_3" defaultValue="chuyenkhoan" name="payment" />
                                                    Chuyển khoản qua ngân hàng
            </label>
                                                <div className="payment_box method-content payment_mean3" style={this.state.togglechuyenkhoan ? { display: 'block' } : { display: 'none' }}>
                                                    {this.state.danhsachnganhang !== null && this.state.danhsachnganhang.length !== 0 ? this.printDataNganHang() : "Chưa có ngân hàng nào"}
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div> */}
                                <div className="full-width mb-30">
                                    <div className="row" style={{ "marginRight": "0px", "marginLeft": "0px" }}>
                                        <div className="col-xs-4 col-md-3 pull-right">
                                            <button onClick={(event) => { this.handleSubmit(event) }} className="full-width coolButton">
                                                <i aria-hidden="true" className="fa fa-send mr-5" />Đặt vé
                                                </button>

                                        </div>
                                        <div className="col-xs-5 col-md-4 pull-left">
                                            <button type="button" onClick={() => { window.location.replace("/booking") }} className="full-width coolButton" style={{ "float": "left", "marginRight": "35px" }}>Chọn lại chuyến bay</button>

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
                                                <strong>{this.state.depfull ? this.state.depfull.ten : null} ({this.state.depfull ? this.state.depfull.code : null}) → {this.state.desfull ? this.state.desfull.ten : null} ({this.state.desfull ? this.state.desfull.code : null})</strong>
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
                                                        <td className="amount"><span>{(ticketchoosed.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span> VNĐ</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <hr />
                                            {ticketchoosedKhuHoi !== null ?
                                                <React.Fragment>
                                                    <div className="leg dep_leg">
                                                        <strong>{this.state.desfull ? this.state.desfull.ten : null} ({this.state.desfull ? this.state.desfull.code : null}) → {this.state.depfull ? this.state.depfull.ten : null} ({this.state.depfull ? this.state.depfull.code : null})</strong>
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
                                                                <td className="amount"><span>{(ticketchoosedKhuHoi.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span> VNĐ</td>
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
                                                        <span id="basket_total_price" >
                                                            {this.state.subtotal ? this.state.subtotal.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2) : ""}
                                                        </span> VNĐ
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div id="special_basket_box" className="sideBox">
                                    <h3>Điều kiện vé</h3>
                                    <div className="content">
                                        {this.printDataDieuKienVe()}
                                        {this.printDataDieuKienVeKhuHoi()}

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