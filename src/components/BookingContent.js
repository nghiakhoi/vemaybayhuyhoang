import React, { Component } from 'react';
import BookingItem from './BookingItem';
import axios from 'axios';
import BookingItemKhuHoi from './BookingItemKhuHoi';
import BookingItemChoosed from './BookingItemChoosed';
import MyLargeModal from './MyLargeModal';

const postTicket = (airlinecode, dep, des, adult = 1, direction = 0, datedep, datedes, child = 0, inf = 0) =>
    axios.post(airlinecode, {
        dep: dep,
        des: des,
        datedep: datedep,
        datedes: datedes,
        adult: adult,
        child: child,
        inf: inf,
        direction: direction,
    }).then((res) => res.data)

const formatDate = function formatDate(date) {
    var d = date.getUTCDate().toString(),
        m = (date.getUTCMonth() + 1).toString(),
        y = date.getUTCFullYear().toString(),
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

const sortedByAttr = (property) => {
    return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
}

const compareTwoDay = (date) => {
    var parts = date.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}
const getTodayddmmyyyy = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    return today;
}

class BookingContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            datakhuhoi: null,
            notData: "Không tìm thấy dữ liệu nào",
            direction: 0,
            vj: false,
            vj1: false,
            vj2: false,
            vj3: false,
            vj4: false,
            vj5: false,
            vj6: false,
            js: false,
            js1: false,
            js2: false,
            js3: false,
            js4: false,
            js5: false,
            js6: false,
            vn: false,
            vn1: false,
            vn2: false,
            vn3: false,
            vn4: false,
            vn5: false,
            vn6: false,
            data1: null,
            data2: null,
            data3: null,
            data4: null,
            data5: null,
            data6: null,
            datasmallestprice: null,
            datasmallestprice1: null,
            datasmallestprice2: null,
            datasmallestprice3: null,
            datasmallestprice4: null,
            datasmallestprice5: null,
            datasmallestprice6: null,
            anhienbtngiave: true,
            ticketchoosed: null,
            anhienbtngiavekhuhoi: true,
            ticketchoosedkhuhoi: null

        }
    }

    getJsonTicketFromAPI = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data: mangjson.sort(sortedByAttr('baseprice')),
                vn: true
            });
        }).then((res) => {
            if (this.state.js === true || this.state.vj === true || this.state.vn === true) {
                this.setState({
                    data: this.state.data.sort(sortedByAttr('baseprice')),
                    datasmallestprice: this.state.data[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data: mangjson.sort(sortedByAttr('baseprice')),
                js: true
            });
        }).then((res) => {
            if (this.state.js === true || this.state.vj === true || this.state.vn === true) {
                this.setState({
                    data: this.state.data.sort(sortedByAttr('baseprice')),
                    datasmallestprice: this.state.data[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data: mangjson.sort(sortedByAttr('baseprice')),
                vj: true
            });
        }).then((res) => {
            if (this.state.js === true || this.state.vj === true || this.state.vn === true) {
                this.setState({
                    data: this.state.data.sort(sortedByAttr('baseprice')),
                    datasmallestprice: this.state.data[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj: true
            });
        });
    }
    getJsonTicketFromAPIKhuHoi = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                datakhuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vnkhuhoi: true
            });
        }).then((res) => {
            if (this.state.jskhuhoi === true || this.state.vjkhuhoi === true || this.state.vnkhuhoi === true) {
                this.setState({
                    datakhuhoi: this.state.datakhuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestpricekhuhoi: this.state.datakhuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vnkhuhoi: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                datakhuhoi: mangjson.sort(sortedByAttr('baseprice')),
                jskhuhoi: true
            });
        }).then((res) => {
            if (this.state.jskhuhoi === true || this.state.vjkhuhoi === true || this.state.vnkhuhoi === true) {
                this.setState({
                    datakhuhoi: this.state.datakhuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestpricekhuhoi: this.state.datakhuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                jskhuhoi: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                datakhuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vjkhuhoi: true
            });
        }).then((res) => {
            if (this.state.jskhuhoi === true || this.state.vjkhuhoi === true || this.state.vnkhuhoi === true) {
                this.setState({
                    datakhuhoi: this.state.datakhuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestpricekhuhoi: this.state.datakhuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vjkhuhoi: true
            });
        });
    }
    getJsonTicketFromAPIPosition1 = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data1: mangjson.sort(sortedByAttr('baseprice')),
                vn1: true
            });
        }).then((res) => {
            if (this.state.js1 === true || this.state.vj1 === true || this.state.vn1 === true) {
                this.setState({
                    data1: this.state.data1.sort(sortedByAttr('baseprice')),
                    datasmallestprice1: this.state.data1[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn1: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data1: mangjson.sort(sortedByAttr('baseprice')),
                js1: true
            });
        }).then((res) => {
            if (this.state.js1 === true || this.state.vj1 === true || this.state.vn1 === true) {
                this.setState({
                    data1: this.state.data1.sort(sortedByAttr('baseprice')),
                    datasmallestprice1: this.state.data1[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js1: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data1: mangjson.sort(sortedByAttr('baseprice')),
                vj1: true
            });
        }).then((res) => {
            if (this.state.js1 === true || this.state.vj1 === true || this.state.vn1 === true) {
                this.setState({
                    data1: this.state.data1.sort(sortedByAttr('baseprice')),
                    datasmallestprice1: this.state.data1[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj1: true
            });
        });
    }
    getJsonTicketFromAPIPosition2 = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data2: mangjson.sort(sortedByAttr('baseprice')),
                vn2: true
            });
        }).then((res) => {
            if (this.state.js2 === true || this.state.vj2 === true || this.state.vn2 === true) {
                this.setState({
                    data2: this.state.data2.sort(sortedByAttr('baseprice')),
                    datasmallestprice2: this.state.data2[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn2: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data2: mangjson.sort(sortedByAttr('baseprice')),
                js2: true
            });
        }).then((res) => {
            if (this.state.js2 === true || this.state.vj2 === true || this.state.vn2 === true) {
                this.setState({
                    data2: this.state.data2.sort(sortedByAttr('baseprice')),
                    datasmallestprice2: this.state.data2[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js2: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data2: mangjson.sort(sortedByAttr('baseprice')),
                vj2: true
            });
        }).then((res) => {
            if (this.state.js2 === true || this.state.vj2 === true || this.state.vn2 === true) {
                this.setState({
                    data2: this.state.data2.sort(sortedByAttr('baseprice')),
                    datasmallestprice2: this.state.data2[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj2: true
            });
        });
    }
    getJsonTicketFromAPIPosition3 = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data3: mangjson.sort(sortedByAttr('baseprice')),
                vn3: true
            });
        }).then((res) => {
            if (this.state.js3 === true || this.state.vj3 === true || this.state.vn3 === true) {
                this.setState({
                    data3: this.state.data3.sort(sortedByAttr('baseprice')),
                    datasmallestprice3: this.state.data3[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn3: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data3: mangjson.sort(sortedByAttr('baseprice')),
                js3: true
            });
        }).then((res) => {
            if (this.state.js3 === true || this.state.vj3 === true || this.state.vn3 === true) {
                this.setState({
                    data3: this.state.data3.sort(sortedByAttr('baseprice')),
                    datasmallestprice3: this.state.data3[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js3: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data3: mangjson.sort(sortedByAttr('baseprice')),
                vj3: true
            });
        }).then((res) => {
            if (this.state.js3 === true || this.state.vj3 === true || this.state.vn3 === true) {
                this.setState({
                    data3: this.state.data3.sort(sortedByAttr('baseprice')),
                    datasmallestprice3: this.state.data3[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj3: true
            });
        });
    }
    getJsonTicketFromAPIPosition4 = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data4: mangjson.sort(sortedByAttr('baseprice')),
                vn4: true
            });
        }).then((res) => {
            if (this.state.js4 === true || this.state.vj4 === true || this.state.vn4 === true) {
                this.setState({
                    data4: this.state.data4.sort(sortedByAttr('baseprice')),
                    datasmallestprice4: this.state.data4[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn4: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data4: mangjson.sort(sortedByAttr('baseprice')),
                js4: true
            });
        }).then((res) => {
            if (this.state.js4 === true || this.state.vj4 === true || this.state.vn4 === true) {
                this.setState({
                    data4: this.state.data4.sort(sortedByAttr('baseprice')),
                    datasmallestprice4: this.state.data4[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js4: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data4: mangjson.sort(sortedByAttr('baseprice')),
                vj4: true
            });
        }).then((res) => {
            if (this.state.js4 === true || this.state.vj4 === true || this.state.vn4 === true) {
                this.setState({
                    data4: this.state.data4.sort(sortedByAttr('baseprice')),
                    datasmallestprice4: this.state.data4[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj4: true
            });
        });
    }
    getJsonTicketFromAPIPosition5 = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data5: mangjson.sort(sortedByAttr('baseprice')),
                vn5: true
            });
        }).then((res) => {
            if (this.state.js5 === true || this.state.vj5 === true || this.state.vn5 === true) {
                this.setState({
                    data5: this.state.data5.sort(sortedByAttr('baseprice')),
                    datasmallestprice5: this.state.data5[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn5: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data5: mangjson.sort(sortedByAttr('baseprice')),
                js5: true
            });
        }).then((res) => {
            if (this.state.js5 === true || this.state.vj5 === true || this.state.vn5 === true) {
                this.setState({
                    data5: this.state.data5.sort(sortedByAttr('baseprice')),
                    datasmallestprice5: this.state.data5[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js5: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data5: mangjson.sort(sortedByAttr('baseprice')),
                vj5: true
            });
        }).then((res) => {
            if (this.state.js5 === true || this.state.vj5 === true || this.state.vn5 === true) {
                this.setState({
                    data5: this.state.data5.sort(sortedByAttr('baseprice')),
                    datasmallestprice5: this.state.data5[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj5: true
            });
        });
    }
    getJsonTicketFromAPIPosition6 = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data6: mangjson.sort(sortedByAttr('baseprice')),
                vn6: true
            });
        }).then((res) => {
            if (this.state.js6 === true || this.state.vj6 === true || this.state.vn6 === true) {
                this.setState({
                    data6: this.state.data6.sort(sortedByAttr('baseprice')),
                    datasmallestprice6: this.state.data6[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn6: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data6: mangjson.sort(sortedByAttr('baseprice')),
                js6: true
            });
        }).then((res) => {
            if (this.state.js6 === true || this.state.vj6 === true || this.state.vn6 === true) {
                this.setState({
                    data6: this.state.data6.sort(sortedByAttr('baseprice')),
                    datasmallestprice6: this.state.data6[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js6: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }

            }
            this.setState({
                data6: mangjson.sort(sortedByAttr('baseprice')),
                vj6: true
            });
        }).then((res) => {
            if (this.state.js6 === true || this.state.vj6 === true || this.state.vn6 === true) {
                this.setState({
                    data6: this.state.data6.sort(sortedByAttr('baseprice')),
                    datasmallestprice6: this.state.data6[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj6: true
            });
        });
    }
    getJsonTicketFromAPIPosition1KhuHoi = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data1khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vn1khuhoi: true
            });
        }).then((res) => {
            if (this.state.js1khuhoi === true || this.state.vj1khuhoi === true || this.state.vn1khuhoi === true) {
                this.setState({
                    data1khuhoi: this.state.data1khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice1khuhoi: this.state.data1khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn1khuhoi: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data1khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                js1khuhoi: true
            });
        }).then((res) => {
            if (this.state.js1khuhoi === true || this.state.vj1khuhoi === true || this.state.vn1khuhoi === true) {
                this.setState({
                    data1khuhoi: this.state.data1khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice1khuhoi: this.state.data1khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js1khuhoi: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data1khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vj1khuhoi: true
            });
        }).then((res) => {
            if (this.state.js1khuhoi === true || this.state.vj1khuhoi === true || this.state.vn1khuhoi === true) {
                this.setState({
                    data1khuhoi: this.state.data1khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice1khuhoi: this.state.data1khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj1khuhoi: true
            });
        });
    }
    getJsonTicketFromAPIPosition2KhuHoi = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data2khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vn2khuhoi: true
            });
        }).then((res) => {
            if (this.state.js2khuhoi === true || this.state.vj2khuhoi === true || this.state.vn2khuhoi === true) {
                this.setState({
                    data2khuhoi: this.state.data2khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice2khuhoi: this.state.data2khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn2khuhoi: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data2khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                js2khuhoi: true
            });
        }).then((res) => {
            if (this.state.js2khuhoi === true || this.state.vj2khuhoi === true || this.state.vn2khuhoi === true) {
                this.setState({
                    data2khuhoi: this.state.data2khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice2khuhoi: this.state.data2khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js2khuhoi: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data2khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vj2khuhoi: true
            });
        }).then((res) => {
            if (this.state.js2khuhoi === true || this.state.vj2khuhoi === true || this.state.vn2khuhoi === true) {
                this.setState({
                    data2khuhoi: this.state.data2khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice2khuhoi: this.state.data2khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj2khuhoi: true
            });
        });
    }
    getJsonTicketFromAPIPosition3KhuHoi = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data3khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vn3khuhoi: true
            });
        }).then((res) => {
            if (this.state.js3khuhoi === true || this.state.vj3khuhoi === true || this.state.vn3khuhoi === true) {
                this.setState({
                    data3khuhoi: this.state.data3khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice3khuhoi: this.state.data3khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn3khuhoi: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data3khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                js3khuhoi: true
            });
        }).then((res) => {
            if (this.state.js3khuhoi === true || this.state.vj3khuhoi === true || this.state.vn3khuhoi === true) {
                this.setState({
                    data3khuhoi: this.state.data3khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice3khuhoi: this.state.data3khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js3khuhoi: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data3khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vj3khuhoi: true
            });
        }).then((res) => {
            if (this.state.js3khuhoi === true || this.state.vj3khuhoi === true || this.state.vn3khuhoi === true) {
                this.setState({
                    data3khuhoi: this.state.data3khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice3khuhoi: this.state.data3khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj3khuhoi: true
            });
        });
    }
    getJsonTicketFromAPIPosition4KhuHoi = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data4khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vn4khuhoi: true
            });
        }).then((res) => {
            if (this.state.js4khuhoi === true || this.state.vj4khuhoi === true || this.state.vn4khuhoi === true) {
                this.setState({
                    data4khuhoi: this.state.data4khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice4khuhoi: this.state.data4khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn4khuhoi: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data4khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                js4khuhoi: true
            });
        }).then((res) => {
            if (this.state.js4khuhoi === true || this.state.vj4khuhoi === true || this.state.vn4khuhoi === true) {
                this.setState({
                    data4khuhoi: this.state.data4khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice4khuhoi: this.state.data4khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js4khuhoi: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data4khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vj4khuhoi: true
            });
        }).then((res) => {
            if (this.state.js4khuhoi === true || this.state.vj4khuhoi === true || this.state.vn4khuhoi === true) {
                this.setState({
                    data4khuhoi: this.state.data4khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice4khuhoi: this.state.data4khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj4khuhoi: true
            });
        });
    }
    getJsonTicketFromAPIPosition5KhuHoi = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data5khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vn5khuhoi: true
            });
        }).then((res) => {
            if (this.state.js5khuhoi === true || this.state.vj5khuhoi === true || this.state.vn5khuhoi === true) {
                this.setState({
                    data5khuhoi: this.state.data5khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice5khuhoi: this.state.data5khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn5khuhoi: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data5khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                js5khuhoi: true
            });
        }).then((res) => {
            if (this.state.js5khuhoi === true || this.state.vj5khuhoi === true || this.state.vn5khuhoi === true) {
                this.setState({
                    data5khuhoi: this.state.data5khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice5khuhoi: this.state.data5khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js5khuhoi: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data5khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vj5khuhoi: true
            });
        }).then((res) => {
            if (this.state.js5khuhoi === true || this.state.vj5khuhoi === true || this.state.vn5khuhoi === true) {
                this.setState({
                    data5khuhoi: this.state.data5khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice5khuhoi: this.state.data5khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj5khuhoi: true
            });
        });
    }
    getJsonTicketFromAPIPosition6KhuHoi = (dep, des, adult, direction, datedep, datedes, child, inf) => {
        let mangjson = [];
        postTicket("/vn", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data6khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vn6khuhoi: true
            });
        }).then((res) => {
            if (this.state.js6khuhoi === true || this.state.vj6khuhoi === true || this.state.vn6khuhoi === true) {
                this.setState({
                    data6khuhoi: this.state.data6khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice6khuhoi: this.state.data6khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vn6khuhoi: true
            });
        });
        postTicket("/js", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data6khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                js6khuhoi: true
            });
        }).then((res) => {
            if (this.state.js6khuhoi === true || this.state.vj6khuhoi === true || this.state.vn6khuhoi === true) {
                this.setState({
                    data6khuhoi: this.state.data6khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice6khuhoi: this.state.data6khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                js6khuhoi: true
            });
        });
        postTicket("/vj", dep, des, adult, direction, datedep, datedes, child, inf).then((kq) => {
            //mangjson.push(kq[0]);
            var tempflyno = "";
            var tempprice = 0;
            var tempdeptime = "";
            var tempdestime = "";
            var tempitem = "";
            var dem = 0;
            var size = kq !== undefined || kq.lenght > 0 ? Object.keys(kq[0]).length : 0;

            for (var key1 in kq[0]) {

                if (tempdeptime === "" && tempdestime === "") {
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                }

                if (tempflyno === kq[0][key1]['air_code'] && tempdeptime === kq[0][key1]['deptime'] && tempdestime === kq[0][key1]['destime']) {
                    if (tempprice <= kq[0][key1]['baseprice']) {
                        dem++;
                    } else {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }

                } else {
                    mangjson.push(tempitem);
                    tempflyno = kq[0][key1]['air_code'];
                    tempprice = kq[0][key1]['baseprice'];
                    tempdeptime = kq[0][key1]['deptime'];
                    tempdestime = kq[0][key1]['destime'];
                    tempitem = kq[0][key1];
                    dem++;
                }
                if (dem === size) {
                    mangjson.push(tempitem);
                }
            }
            this.setState({
                data6khuhoi: mangjson.sort(sortedByAttr('baseprice')),
                vj6khuhoi: true
            });
        }).then((res) => {
            if (this.state.js6khuhoi === true || this.state.vj6khuhoi === true || this.state.vn6khuhoi === true) {
                this.setState({
                    data6khuhoi: this.state.data6khuhoi.sort(sortedByAttr('baseprice')),
                    datasmallestprice6khuhoi: this.state.data6khuhoi[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),

                });
            }
        }).catch((err) => {
            this.setState({
                vj6khuhoi: true
            });
        });
    }

    componentWillMount() {

        var dep = localStorage.getItem("dep");
        var des = localStorage.getItem("des");
        var datedep = localStorage.getItem('datedep') ? localStorage.getItem('datedep') : getTodayddmmyyyy();
        var datedes = localStorage.getItem('datedes') ? localStorage.getItem('datedes') : getTodayddmmyyyy();
        var adult = localStorage.getItem("adult");
        var child = localStorage.getItem("child");
        var inf = localStorage.getItem("inf");
        var direction = localStorage.getItem("direction") ? localStorage.getItem("direction") : 0;
        this.setState({
            direction: direction
        });
        if (this.state.data === null) {
            //get data from day choosen
            this.getJsonTicketFromAPI(dep, des, adult, direction, datedep, datedes, child, inf);

            // get data from other day
            var daychoose = localStorage.getItem('datedep') ? localStorage.getItem('datedep') : getTodayddmmyyyy();
            var mang7ngay = [];
            for (let i = 1; i <= 7; i++) {
                let newdate = new Date(daychoose.split("-").reverse().join("-"));
                let newdateplus1 = newdate.setDate(newdate.getDate() - 4 + i);
                let testdate = new Date(newdateplus1);
                let formattedDate = formatDate(testdate);
                if (formattedDate !== daychoose) {
                    mang7ngay.push(formattedDate);
                }
            }

            if (direction === "1") {
                this.getJsonTicketFromAPIKhuHoi(des, dep, adult, direction, datedes, datedep, child, inf);
                // get data from other day Khứ hồi
                var daychooseKhuHoi = localStorage.getItem('datedes') ? localStorage.getItem('datedes') : localStorage.getItem('datedep');
                var mang7ngaykhuhoi = [];
                for (let i = 1; i <= 7; i++) {
                    let newdate = new Date(daychooseKhuHoi.split("-").reverse().join("-"));
                    let newdateplus1 = newdate.setDate(newdate.getDate() - 4 + i);
                    let testdate = new Date(newdateplus1);
                    let formattedDate = formatDate(testdate);
                    if (formattedDate !== daychooseKhuHoi) {
                        mang7ngaykhuhoi.push(formattedDate);
                    }
                }
            }

            //VÉ RẺ VỊ TRÍ 1
            this.getJsonTicketFromAPIPosition1(dep, des, adult, direction, mang7ngay[0], datedes, child, inf);
            //VÉ RẺ VỊ TRÍ 2
            this.getJsonTicketFromAPIPosition2(dep, des, adult, direction, mang7ngay[1], datedes, child, inf);
            //VÉ RẺ VỊ TRÍ 3
            this.getJsonTicketFromAPIPosition3(dep, des, adult, direction, mang7ngay[2], datedes, child, inf);
            //VÉ RẺ VỊ TRÍ 4
            this.getJsonTicketFromAPIPosition4(dep, des, adult, direction, mang7ngay[3], datedes, child, inf);
            //VÉ RẺ VỊ TRÍ 5
            this.getJsonTicketFromAPIPosition5(dep, des, adult, direction, mang7ngay[4], datedes, child, inf);
            //VÉ RẺ VỊ TRÍ 6
            this.getJsonTicketFromAPIPosition6(dep, des, adult, direction, mang7ngay[5], datedes, child, inf);


            if (direction === "1") {
                //VÉ RẺ VỊ TRÍ 1 KHỨ HỒI
                this.getJsonTicketFromAPIPosition1KhuHoi(dep, des, adult, direction, datedes, mang7ngaykhuhoi[0], child, inf);
                //VÉ RẺ VỊ TRÍ 2 KHỨ HỒI
                this.getJsonTicketFromAPIPosition2KhuHoi(dep, des, adult, direction, datedes, mang7ngaykhuhoi[1], child, inf);
                //VÉ RẺ VỊ TRÍ 3 KHỨ HỒI
                this.getJsonTicketFromAPIPosition3KhuHoi(dep, des, adult, direction, datedes, mang7ngaykhuhoi[2], child, inf);
                //VÉ RẺ VỊ TRÍ 4 KHỨ HỒI
                this.getJsonTicketFromAPIPosition4KhuHoi(dep, des, adult, direction, datedes, mang7ngaykhuhoi[3], child, inf);
                //VÉ RẺ VỊ TRÍ 5 KHỨ HỒI
                this.getJsonTicketFromAPIPosition5KhuHoi(dep, des, adult, direction, datedes, mang7ngaykhuhoi[4], child, inf);
                //VÉ RẺ VỊ TRÍ 6 KHỨ HỒI
                this.getJsonTicketFromAPIPosition6KhuHoi(dep, des, adult, direction, datedes, mang7ngaykhuhoi[5], child, inf);
            }
        }

    }

    handleClick = (event, date) => {
        event.preventDefault();
        var parts = date;
        localStorage.setItem("datedep", parts);
        window.location.reload();
    }
    handleClickKhuHoi = (event, date) => {
        event.preventDefault();
        var parts = date;
        localStorage.setItem("datedes", parts);
        window.location.reload();
    }

    handleChangeHidden(ticketchoosed) {

        if (this.state.anhienbtngiave) {
            this.setState({
                anhienbtngiave: !this.state.anhienbtngiave,
                ticketchoosed: ticketchoosed
            });
        } else {
            this.setState({
                anhienbtngiave: !this.state.anhienbtngiave,
                ticketchoosed: null
            });
        }
    }
    handleChangeHiddenKhuHoi(ticketchoosed) {

        if (this.state.anhienbtngiavekhuhoi) {
            this.setState({
                anhienbtngiavekhuhoi: !this.state.anhienbtngiavekhuhoi,
                ticketchoosedkhuhoi: ticketchoosed
            });
        } else {
            this.setState({
                anhienbtngiavekhuhoi: !this.state.anhienbtngiavekhuhoi,
                ticketchoosedkhuhoi: null
            });
        }
    }

    printData = () => {
        if (this.state.data !== null) {

            return this.state.data.map((value, key) =>
                (
                    <BookingItem
                        key={key}
                        anhienbtngiave={(ticketchoosed) => this.handleChangeHidden(ticketchoosed)}
                        anhienbtngiavestatecha={this.state.anhienbtngiave}
                        flightid={value.flightid}
                        flightno={value.flightno}
                        aircode={value.air_code}
                        airline={value.airline}
                        baseprice={value.baseprice}
                        datefull={value.datefull}
                        depcode={value.depcode}
                        descode={value.descode}
                        deptime={value.deptime}
                        destime={value.destime}
                        duration={value.duration}
                        adult={value.adult}
                        child={value.child}
                        inf={value.inf}
                        subtotal={value.subtotal}
                        fullinfo={value}
                    />
                )
            );
        }
    }

    printDataKhuHoi = () => {
        if (this.state.datakhuhoi !== null) {

            return this.state.datakhuhoi.map((value, key) =>
                (
                    <BookingItemKhuHoi
                        key={key}
                        anhienbtngiave={(ticketchoosed) => this.handleChangeHiddenKhuHoi(ticketchoosed)}
                        anhienbtngiavestatecha={this.state.anhienbtngiavekhuhoi}
                        flightid={value.flightid}
                        flightno={value.flightno}
                        aircode={value.air_code}
                        airline={value.airline}
                        baseprice={value.baseprice}
                        datefull={value.datefull}
                        depcode={value.depcode}
                        descode={value.descode}
                        deptime={value.deptime}
                        destime={value.destime}
                        duration={value.duration}
                        adult={value.adult}
                        child={value.child}
                        inf={value.inf}
                        subtotal={value.subtotal}
                        fullinfo={value}
                    />
                )
            );
        }
    }



    render() {

        var daychoosedforloop = localStorage.getItem('datedep') !== null ? localStorage.getItem('datedep') : getTodayddmmyyyy();
        var mang7ngay = [];
        for (let i = 1; i <= 7; i++) {
            let newdate = new Date(daychoosedforloop.split("-").reverse().join("-"));
            let newdateplus1 = newdate.setDate(newdate.getDate() - 4 + i);
            let testdate = new Date(newdateplus1);
            let formattedDate = formatDate(testdate);
            mang7ngay.push(formattedDate);
        }
        var demvitri = 0;

        var daychoosedforloopkhuhoi = localStorage.getItem('datedes') !== null ? localStorage.getItem('datedes') : daychoosedforloop;
        var mang7ngaykhuhoi = [];
        for (let i = 1; i <= 7; i++) {
            let newdate = new Date(daychoosedforloopkhuhoi.split("-").reverse().join("-"));
            let newdateplus1 = newdate.setDate(newdate.getDate() - 4 + i);
            let testdate = new Date(newdateplus1);
            let formattedDate = formatDate(testdate);
            mang7ngaykhuhoi.push(formattedDate);
        }
        var demvitrikhuhoi = 0;

        var choosedticket = this.state.ticketchoosed !== null ?
            <BookingItemChoosed
                anhienbtngiave={(ticketchoosed) => this.handleChangeHidden(ticketchoosed)}
                anhienbtngiavestatecha={this.state.anhienbtngiave}
                flightid={this.state.ticketchoosed.flightid}
                flightno={this.state.ticketchoosed.flightno}
                aircode={this.state.ticketchoosed.air_code}
                airline={this.state.ticketchoosed.airline}
                baseprice={this.state.ticketchoosed.baseprice}
                datefull={this.state.ticketchoosed.datefull}
                depcode={this.state.ticketchoosed.depcode}
                descode={this.state.ticketchoosed.descode}
                deptime={this.state.ticketchoosed.deptime}
                destime={this.state.ticketchoosed.destime}
                duration={this.state.ticketchoosed.duration}
                adult={this.state.ticketchoosed.adult}
                child={this.state.ticketchoosed.child}
                inf={this.state.ticketchoosed.inf}
                subtotal={this.state.ticketchoosed.subtotal}
                fullinfo={this.state.ticketchoosed}
            /> : "";
        var choosedticketKhuHoi = this.state.ticketchoosedkhuhoi !== null ?
            <BookingItemChoosed
                anhienbtngiave={(ticketchoosed) => this.handleChangeHiddenKhuHoi(ticketchoosed)}
                anhienbtngiavestatecha={this.state.anhienbtngiavekhuhoi}
                flightid={this.state.ticketchoosedkhuhoi.flightid}
                flightno={this.state.ticketchoosedkhuhoi.flightno}
                aircode={this.state.ticketchoosedkhuhoi.air_code}
                airline={this.state.ticketchoosedkhuhoi.airline}
                baseprice={this.state.ticketchoosedkhuhoi.baseprice}
                datefull={this.state.ticketchoosedkhuhoi.datefull}
                depcode={this.state.ticketchoosedkhuhoi.depcode}
                descode={this.state.ticketchoosedkhuhoi.descode}
                deptime={this.state.ticketchoosedkhuhoi.deptime}
                destime={this.state.ticketchoosedkhuhoi.destime}
                duration={this.state.ticketchoosedkhuhoi.duration}
                adult={this.state.ticketchoosedkhuhoi.adult}
                child={this.state.ticketchoosedkhuhoi.child}
                inf={this.state.ticketchoosedkhuhoi.inf}
                subtotal={this.state.ticketchoosedkhuhoi.subtotal}
                fullinfo={this.state.ticketchoosedkhuhoi}
            /> : "";
        return (
            <div className="iw-tour-listing">
                <div className="iw-tours-content">
                    <div className=" container">
                        <div className="row">
                            <div className="col-sm-12 col-xs-12 col-lg-12 col-md-12 blog-content">
                                <h3 style={{ "color": "black" }} className="">Chặng bay {localStorage.getItem("dep")} → {localStorage.getItem("des")} ngày {localStorage.getItem("datedep")}</h3>
                                <div className="tour-order-layout-form">
                                    <form >
                                        <div className="col-sm-12 col-xs-12 col-lg-12 col-md-12" style={{ "marginBottom": "5px" }}>
                                            {

                                                mang7ngay.map((i, k) => {
                                                    if (compareTwoDay(i).getTime() < compareTwoDay(getTodayddmmyyyy()).getTime()) {
                                                        demvitri++;
                                                        return (
                                                            <div key={k} className=" col-md-1-chia7" >
                                                                <button type="button" style={{ "padding": "6px 12px" }} className="btn disabled btn-block btn-info" value={i} >{i}<br />&nbsp;</button>
                                                            </div>
                                                        )
                                                    } else {
                                                        if (compareTwoDay(i).getTime() === compareTwoDay(daychoosedforloop).getTime()) {
                                                            demvitri++;
                                                            return (
                                                                <div key={k} className=" col-md-1-chia7" >
                                                                    <button type="button" onClick={(event) => { this.handleClick(event, this.state.datasmallestprice !== null ? daychoosedforloop : daychoosedforloop) }} style={{ "padding": "6px 12px" }} className="btn btn-block btn-primary newlinebtn"  >{daychoosedforloop}&nbsp;<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice !== null ? this.state.datasmallestprice + " VND" : ""}</span></button>
                                                                </div>
                                                            )
                                                        } else {
                                                            if (demvitri === 0) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <button onClick={(event) => { this.handleClick(event, this.state.datasmallestprice1 !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn"  >{i}&nbsp;<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice1 !== null ? this.state.datasmallestprice1 + " VND" : ""}</span></button>
                                                                    </div>
                                                                )
                                                            }
                                                            else if (demvitri === 1) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <button onClick={(event) => { this.handleClick(event, this.state.datasmallestprice2 !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" >{i}&nbsp;<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice2 !== null ? this.state.datasmallestprice2 + " VND" : ""}</span></button>
                                                                    </div>
                                                                )
                                                            }
                                                            else if (demvitri === 2) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <button onClick={(event) => { this.handleClick(event, this.state.datasmallestprice3 !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" >{i}&nbsp;<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice3 !== null ? this.state.datasmallestprice3 + " VND" : ""}</span></button>
                                                                    </div>
                                                                )
                                                            }
                                                            else if (demvitri === 4) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <button onClick={(event) => { this.handleClick(event, this.state.datasmallestprice4 !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn"  >{i}&nbsp;<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice4 !== null ? this.state.datasmallestprice4 + " VND" : ""}</span></button>
                                                                    </div>
                                                                )
                                                            }
                                                            else if (demvitri === 5) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <button onClick={(event) => { this.handleClick(event, this.state.datasmallestprice5 !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn"  >{i}&nbsp;<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice5 !== null ? this.state.datasmallestprice5 + " VND" : ""}</span></button>
                                                                    </div>
                                                                )
                                                            }
                                                            else if (demvitri === 6) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <button onClick={(event) => { this.handleClick(event, this.state.datasmallestprice6 !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn"  >{i}&nbsp;<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice6 !== null ? this.state.datasmallestprice6 + " VND" : ""}</span></button>
                                                                    </div>
                                                                )
                                                            } else {
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <button onClick={(event) => { this.handleClick(event, this.state.datasmallestprice6 !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn"  >{i}&nbsp;<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice6 !== null ? this.state.datasmallestprice6 + " VND" : ""}</span></button>
                                                                    </div>
                                                                )
                                                            }

                                                        }

                                                    }

                                                })

                                            }


                                        </div>

                                        <div className="clearfix" />
                                    </form>
                                </div>
                                <div className="tour-listing-row">
                                    {this.state.data !== null && this.state.data.length !== 0 ? this.printData() : this.state.notData}
                                    {choosedticket}
                                </div>
                                {
                                    this.state.direction === "1" ?
                                        <React.Fragment>
                                            <h3 style={{ "color": "black" }} className="">Chặng bay khứ hồi {localStorage.getItem("des")} → {localStorage.getItem("dep")} ngày {localStorage.getItem("datedes")}</h3>
                                            <div className="tour-order-layout-form">
                                                <form >
                                                    <div className="col-sm-12 col-xs-12 col-lg-12 col-md-12" style={{ "marginBottom": "5px" }}>
                                                        {

                                                            mang7ngaykhuhoi.map((i, k) => {
                                                                if (compareTwoDay(i).getTime() < compareTwoDay(getTodayddmmyyyy()).getTime()) {
                                                                    demvitrikhuhoi++;
                                                                    return (
                                                                        <div key={k} className=" col-md-1-chia7" >
                                                                            <button type="button" style={{ "padding": "6px 12px" }} className="btn disabled btn-block btn-info" value={i} >{i}<br />&nbsp;</button>
                                                                        </div>
                                                                    );
                                                                } else {
                                                                    if (compareTwoDay(i).getTime() === compareTwoDay(daychoosedforloopkhuhoi).getTime()) {
                                                                        demvitrikhuhoi++;
                                                                        return (
                                                                            <div key={k} className=" col-md-1-chia7" >
                                                                                <button type="button" onClick={(event) => { this.handleClickKhuHoi(event, this.state.datasmallestpricekhuhoi !== null ? daychoosedforloopkhuhoi : daychoosedforloopkhuhoi) }} style={{ "padding": "6px 12px" }} className="btn btn-block btn-primary newlinebtn"  >{daychoosedforloopkhuhoi}<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestpricekhuhoi !== null ? this.state.datasmallestpricekhuhoi + " VND" : ""}</span></button>
                                                                            </div>
                                                                        );
                                                                    } else {
                                                                        if (demvitrikhuhoi === 0) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <button onClick={(event) => { this.handleClickKhuHoi(event, this.state.datasmallestprice1khuhoi !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn">{i}<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice1khuhoi !== null ? this.state.datasmallestprice1khuhoi + " VND" : ""}</span></button>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (demvitrikhuhoi === 1) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <button onClick={(event) => { this.handleClickKhuHoi(event, this.state.datasmallestprice2khuhoi !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" >{i}<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice2khuhoi !== null ? this.state.datasmallestprice2khuhoi + " VND" : ""}</span></button>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (demvitrikhuhoi === 2) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <button onClick={(event) => { this.handleClickKhuHoi(event, this.state.datasmallestprice3khuhoi !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn"  >{i}<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice3khuhoi !== null ? this.state.datasmallestprice3khuhoi + " VND" : ""}</span></button>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (demvitrikhuhoi === 4) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <button onClick={(event) => { this.handleClickKhuHoi(event, this.state.datasmallestprice4khuhoi !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn"  >{i}<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice4khuhoi !== null ? this.state.datasmallestprice4khuhoi + " VND" : ""}</span></button>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (demvitrikhuhoi === 5) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <button onClick={(event) => { this.handleClickKhuHoi(event, this.state.datasmallestprice5khuhoi !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn"  >{i}<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice5khuhoi !== null ? this.state.datasmallestprice5khuhoi + " VND" : ""}</span></button>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (demvitrikhuhoi === 6) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <button onClick={(event) => { this.handleClickKhuHoi(event, this.state.datasmallestprice6khuhoi !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn"  >{i}<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice6khuhoi !== null ? this.state.datasmallestprice6khuhoi + " VND" : ""}</span></button>
                                                                                </div>
                                                                            );
                                                                        } else {
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <button onClick={(event) => { this.handleClickKhuHoi(event, this.state.datasmallestprice6khuhoi !== null ? i : i) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn"  >{i}<br /><span style={{ "color": "red", "fontWeight": "bold" }}>{this.state.datasmallestprice6khuhoi !== null ? this.state.datasmallestprice6khuhoi + " VND" : ""}</span></button>
                                                                                </div>
                                                                            );
                                                                        }

                                                                    }

                                                                }

                                                            })

                                                        }


                                                    </div>

                                                    <div className="clearfix" />
                                                </form>
                                            </div>
                                            <div className="tour-listing-row">
                                                {this.state.datakhuhoi !== null && this.state.datakhuhoi.length !== 0 ? this.printDataKhuHoi() : this.state.notData}
                                                {choosedticketKhuHoi}
                                            </div>
                                        </React.Fragment>
                                        :
                                        ""
                                }

                                {localStorage.getItem("direction") === "1" ?
                                    (this.state.ticketchoosed !== null && this.state.ticketchoosedkhuhoi !== null) ?
                                        <MyLargeModal fullinfo={this.state.ticketchoosed} fullinfoKhuHoi={this.state.ticketchoosedkhuhoi} />
                                        : ""
                                    :
                                    (this.state.ticketchoosed !== null) ?
                                        <MyLargeModal fullinfo={this.state.ticketchoosed} fullinfoKhuHoi={this.state.ticketchoosedkhuhoi} />
                                        : ""
                                }


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingContent;