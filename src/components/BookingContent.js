import React, { Component } from 'react';
import BookingItem from './BookingItem';
import axios from 'axios';
import BookingItemKhuHoi from './BookingItemKhuHoi';

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
            datasmallestprice6: null

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

    handleClick = (event) => {
        var parts = event.target.value.split(" ");
        localStorage.setItem("datedep", parts[0]);
        window.location.reload();
    }
    handleClickKhuHoi = (event) => {
        var parts = event.target.value.split(" ");
        localStorage.setItem("datedes", parts[0]);
        window.location.reload();
    }

    printData = () => {
        if (this.state.data !== null) {

            return this.state.data.map((value, key) =>
                (
                    <BookingItem
                        key={key}
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
        return (
            <div className="iw-tour-listing">
                <div className="iw-tours-content">
                    <div className=" container">
                        <div className="row">
                            <div className="col-sm-12 col-xs-12 col-lg-9 col-md-8 blog-content">
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
                                                                <input type="button" style={{ "padding": "6px 12px" }} className="btn disabled btn-block btn-info" value={i} />
                                                            </div>
                                                        )
                                                    } else {
                                                        if (compareTwoDay(i).getTime() === compareTwoDay(daychoosedforloop).getTime()) {
                                                            demvitri++;
                                                            return (
                                                                <div key={k} className=" col-md-1-chia7" >
                                                                    <input type="button" onClick={(event) => { this.handleClick(event) }} style={{ "padding": "6px 12px" }} className="btn btn-block btn-primary newlinebtn" value={this.state.datasmallestprice !== null ? daychoosedforloop + " " + this.state.datasmallestprice + " VND" : daychoosedforloop} />
                                                                </div>
                                                            )
                                                        } else {
                                                            if (demvitri === 0) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <input onClick={(event) => { this.handleClick(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice1 !== null ? i + " " + this.state.datasmallestprice1 + " VND" : i} />
                                                                    </div>
                                                                )
                                                            }
                                                            else if (demvitri === 1) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <input onClick={(event) => { this.handleClick(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice2 !== null ? i + " " + this.state.datasmallestprice2 + " VND" : i} />
                                                                    </div>
                                                                )
                                                            }
                                                            else if (demvitri === 2) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <input onClick={(event) => { this.handleClick(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice3 !== null ? i + " " + this.state.datasmallestprice3 + " VND" : i} />
                                                                    </div>
                                                                )
                                                            }
                                                            else if (demvitri === 4) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <input onClick={(event) => { this.handleClick(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice4 !== null ? i + " " + this.state.datasmallestprice4 + " VND" : i} />
                                                                    </div>
                                                                )
                                                            }
                                                            else if (demvitri === 5) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <input onClick={(event) => { this.handleClick(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice5 !== null ? i + " " + this.state.datasmallestprice5 + " VND" : i} />
                                                                    </div>
                                                                )
                                                            }
                                                            else if (demvitri === 6) {
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <input onClick={(event) => { this.handleClick(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice6 !== null ? i + " " + this.state.datasmallestprice6 + " VND" : i} />
                                                                    </div>
                                                                )
                                                            } else {
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <input onClick={(event) => { this.handleClick(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice6 !== null ? i + " " + this.state.datasmallestprice6 + " VND" : i} />
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
                                                                            <input type="button" style={{ "padding": "6px 12px" }} className="btn disabled btn-block btn-info" value={i} />
                                                                        </div>
                                                                    );
                                                                } else {
                                                                    if (compareTwoDay(i).getTime() === compareTwoDay(daychoosedforloopkhuhoi).getTime()) {
                                                                        demvitrikhuhoi++;
                                                                        return (
                                                                            <div key={k} className=" col-md-1-chia7" >
                                                                                <input type="button" onClick={(event) => { this.handleClickKhuHoi(event) }} style={{ "padding": "6px 12px" }} className="btn btn-block btn-primary newlinebtn" value={this.state.datasmallestpricekhuhoi !== null ? daychoosedforloopkhuhoi + " " + this.state.datasmallestpricekhuhoi + " VND" : daychoosedforloopkhuhoi} />
                                                                            </div>
                                                                        );
                                                                    } else {
                                                                        if (demvitrikhuhoi === 0) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <input onClick={(event) => { this.handleClickKhuHoi(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice1khuhoi !== null ? i + " " + this.state.datasmallestprice1khuhoi + " VND" : i} />
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (demvitrikhuhoi === 1) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <input onClick={(event) => { this.handleClickKhuHoi(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice2khuhoi !== null ? i + " " + this.state.datasmallestprice2khuhoi + " VND" : i} />
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (demvitrikhuhoi === 2) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <input onClick={(event) => { this.handleClickKhuHoi(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice3khuhoi !== null ? i + " " + this.state.datasmallestprice3khuhoi + " VND" : i} />
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (demvitrikhuhoi === 4) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <input onClick={(event) => { this.handleClickKhuHoi(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice4khuhoi !== null ? i + " " + this.state.datasmallestprice4khuhoi + " VND" : i} />
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (demvitrikhuhoi === 5) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <input onClick={(event) => { this.handleClickKhuHoi(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice5khuhoi !== null ? i + " " + this.state.datasmallestprice5khuhoi + " VND" : i} />
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (demvitrikhuhoi === 6) {
                                                                            demvitrikhuhoi++;
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <input onClick={(event) => { this.handleClickKhuHoi(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice6khuhoi !== null ? i + " " + this.state.datasmallestprice6khuhoi + " VND" : i} />
                                                                                </div>
                                                                            );
                                                                        } else {
                                                                            return (
                                                                                <div key={k} className=" col-md-1-chia7" >
                                                                                    <input onClick={(event) => { this.handleClickKhuHoi(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={this.state.datasmallestprice6khuhoi !== null ? i + " " + this.state.datasmallestprice6khuhoi + " VND" : i} />
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
                                            </div>
                                        </React.Fragment>
                                        :
                                        ""
                                }


                            </div>
                            <div className="col-sm-12 col-xs-12 col-lg-3 col-md-4 tour-sidebar">
                                <aside id="it-search-form-14" className="widget widget_tour_search_form"><h3 className="widget-title"><span>FIND YOUR TOURS</span></h3>        <div className="tour-search-form-wrap">
                                    <form action="http://inwavethemes.com/wordpress/intravel/wp-admin/admin-ajax.php?action=intravel_search_tour" method="post">
                                        <div className="form-group search-tour"><i className="icon ion-android-search" /><input type="text" name="s" placeholder="Enter your keywords" defaultValue className="form-control" /></div><div className="form-group search-tour"><i className="icon ion-calendar" /><input type="text" name="start_date" placeholder="Tour start date" defaultValue className="form-control has-date-picker hasDatepicker" id="dp1533210709284" /></div><div className="form-group"><select name="tour_type" className="form-control tour-select-search select2-hidden-accessible" tabIndex={-1} ><option value>All types</option><option value="adventure-travel">Adventure Travel</option><option value="beaches-islands">Beaches &amp; Islands</option><option value="family-tours">Family Tours</option><option value="history-culture">History &amp; Culture</option><option value="nature">Nature &amp; wildlife</option><option value="sightseeing-tours">Sightseeing tours</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: 248 }}><span className="selection"><span className="select2-selection select2-selection--single" tabIndex={0} ><span className="select2-selection__rendered" id="select2-tour_type-zx-container" title="All types">All types</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" /></span></div><div className="form-group"><select name="destination" className="form-control tour-select-search select2-hidden-accessible" tabIndex={-1} ><option value>All destinations</option><option value="amsterdam">Amsterdam</option><option value="dubai">Dubai</option><option value="france">France</option><option value="italy">Italy</option><option value="new-york">New York</option><option value="paris">Paris</option><option value="rome">Rome</option><option value="san-francisco">San Francisco</option><option value="the_netherlands">The Netherlands</option><option value="uae">UAE</option><option value="usa">USA</option><option value="venice">Venice</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: 248 }}><span className="selection"><span className="select2-selection select2-selection--single" tabIndex={0} ><span className="select2-selection__rendered" id="select2-destination-jg-container" title="All destinations">All destinations</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" /></span></div>                                        <div className="form-group">
                                            <div className="tour_price_slider_wrapper">
                                                <div className="tour_price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" style={{}}><div className="ui-slider-range ui-widget-header ui-corner-all" style={{ left: '0%', width: '100%' }} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{ left: '0%' }} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{ left: '100%' }} /></div>
                                                <div className="tour_price_slider_amount">
                                                    <input type="text" className="tour_min_price" name="min_price" defaultValue data-min={50} placeholder="Min price" style={{ display: 'none' }} />
                                                    <input type="text" className="tour_max_price" name="max_price" defaultValue data-max={1654} placeholder="Max price" style={{ display: 'none' }} />
                                                    <div className="price_label" style={{}}>
                                                        Price: <span className="from">50$</span> —
                          <span className="to">1654$</span>
                                                    </div>
                                                    <div className="clear" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bt-submit"><button type="submit" className="btn">Search</button></div>
                                    </form>
                                </div>
                                </aside><aside id="types-3" className="widget tour_types"><h3 className="widget-title"><span>Tour by types</span></h3><div className="widget-tour-types"><a href="http://inwavethemes.com/wordpress/intravel/home/tour-type/adventure-travel/" className="tag-link-67 tag-link-position-1" title="6 topics" style={{ fontSize: '16.75pt' }}>Adventure Travel</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-type/beaches-islands/" className="tag-link-68 tag-link-position-2" title="3 topics" style={{ fontSize: '8pt' }}>Beaches &amp; Islands</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-type/family-tours/" className="tag-link-45 tag-link-position-3" title="7 topics" style={{ fontSize: '18.5pt' }}>Family Tours</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-type/history-culture/" className="tag-link-44 tag-link-position-4" title="6 topics" style={{ fontSize: '16.75pt' }}>History &amp; Culture</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-type/sightseeing-tours/" className="tag-link-62 tag-link-position-5" title="9 topics" style={{ fontSize: '22pt' }}>Sightseeing tours</a></div></aside><aside id="destinations-2" className="widget tour_destinations"><h3 className="widget-title"><span>Popular destinations</span></h3><div className="destination-widget"><div className="destination-item iw-effect-1"><img alt="test" src="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_usa-270x300.jpg" /><div className="destination-info" style={{ bottom: 76 }}><div className="info-active"><h4>USA</h4><div className="destination-widget-rating">
                                        <div className="iw-star-rating">
                                            <span className="rating" style={{ width: '99%' }} />
                                        </div>
                                        <div className="clearfix" />
                                    </div></div><div className="destination-to-detail"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/usa/">Discover <i className="icon ion-arrow-right-c" /></a></div></div></div><div className="destination-item iw-effect-1"><img alt="test" src="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_california-270x300.jpg" /><div className="destination-info" style={{ bottom: 111 }}><div className="info-active"><h4>San Francisco</h4><div className="destination-parent"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/usa/">USA</a></div><div className="destination-widget-rating">
                                        <div className="iw-star-rating">
                                            <span className="rating" style={{ width: '75%' }} />
                                        </div>
                                        <div className="clearfix" />
                                    </div></div><div className="destination-to-detail"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/san-francisco/">Discover <i className="icon ion-arrow-right-c" /></a></div></div></div><div className="clearfix" /></div></aside><aside id="intravel_tours-2" className="widget widget_intravel_tours"><h3 className="widget-title"><span>Most reviewed tours</span></h3>        <div className="iw-travel-tours-widget">
                                        <div className="iw-tour-item iw-effect-img">
                                            <div className="tour-thumnail effect-1">
                                                <img alt="test" src="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_roma-600x600.jpg" />
                                            </div>
                                            <div className="tour-info">
                                                <h3 className="title"><a className="theme-color" href="http://inwavethemes.com/wordpress/intravel/home/tours/rome-city-sightseeing-tours-bike-tour/">Rome City Sightseeing Tours Bike Tour</a></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-map-marker"> </i>
                                                            <a href="http://inwavethemes.com/wordpress/intravel/home/destination/italy/" className="destination">Italy</a> / <a href="http://inwavethemes.com/wordpress/intravel/home/destination/rome/" className="destination">Rome</a>                                  </li>
                                                        <li>
                                                            <span className="duration"><i className="fa fa-clock-o" /> 01 day</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div style={{ clear: 'both' }} />
                                        </div>
                                        <div className="iw-tour-item iw-effect-img">
                                            <div className="tour-thumnail effect-1">
                                                <img alt="test" src="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_san_francisco_3-1-600x600.jpg" />
                                            </div>
                                            <div className="tour-info">
                                                <h3 className="title"><a className="theme-color" href="http://inwavethemes.com/wordpress/intravel/home/tours/san-francisco-museum-of-modern-art/">San Francisco Museum of Modern Art</a></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-map-marker"> </i>
                                                            <a href="http://inwavethemes.com/wordpress/intravel/home/destination/san-francisco/" className="destination">San Francisco</a> / <a href="http://inwavethemes.com/wordpress/intravel/home/destination/usa/" className="destination">USA</a>                                  </li>
                                                        <li>
                                                            <span className="duration"><i className="fa fa-clock-o" /> 01 day</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div style={{ clear: 'both' }} />
                                        </div>
                                        <div className="iw-tour-item iw-effect-img">
                                            <div className="tour-thumnail effect-1">
                                                <img alt="test" src="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/06/tour_venice_1-600x600.jpg" />
                                            </div>
                                            <div className="tour-info">
                                                <h3 className="title"><a className="theme-color" href="http://inwavethemes.com/wordpress/intravel/home/tours/5-night-the-magic-of-venice-tour/">5 days 4 Nights The Magic of Venice Tour</a></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-map-marker"> </i>
                                                            <a href="http://inwavethemes.com/wordpress/intravel/home/destination/italy/" className="destination">Italy</a> / <a href="http://inwavethemes.com/wordpress/intravel/home/destination/venice/" className="destination">Venice</a>                                  </li>
                                                        <li>
                                                            <span className="duration"><i className="fa fa-clock-o" /> 5 days - 4 nights</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div style={{ clear: 'both' }} />
                                        </div>
                                    </div>
                                </aside><aside id="tour_tags-2" className="widget widget_tour_tags"><h3 className="widget-title"><span>Tour Tags</span></h3><div className="tagcloud tour-tags"><a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/capri/" className="tag-link-92 tag-link-position-1" title="1 topic" style={{ fontSize: '8pt' }}>Capri</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/carmel/" className="tag-link-89 tag-link-position-2" title="1 topic" style={{ fontSize: '8pt' }}>Carmel</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/city-tours/" className="tag-link-51 tag-link-position-3" title="1 topic" style={{ fontSize: '8pt' }}>City Tours</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/france/" className="tag-link-85 tag-link-position-4" title="1 topic" style={{ fontSize: '8pt' }}>France</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/golden-bridge/" className="tag-link-52 tag-link-position-5" title="1 topic" style={{ fontSize: '8pt' }}>Golden Bridge</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/museum/" className="tag-link-90 tag-link-position-6" title="1 topic" style={{ fontSize: '8pt' }}>Museum</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/paris/" className="tag-link-84 tag-link-position-7" title="1 topic" style={{ fontSize: '8pt' }}>Paris</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/pebble-beach/" className="tag-link-88 tag-link-position-8" title="1 topic" style={{ fontSize: '8pt' }}>Pebble Beach</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/photography/" className="tag-link-69 tag-link-position-9" title="1 topic" style={{ fontSize: '8pt' }}>photography</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/rome/" className="tag-link-91 tag-link-position-10" title="1 topic" style={{ fontSize: '8pt' }}>Rome</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/san-francisco/" className="tag-link-50 tag-link-position-11" title="4 topics" style={{ fontSize: '22pt' }}>San Francisco</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/st-malo/" className="tag-link-86 tag-link-position-12" title="1 topic" style={{ fontSize: '8pt' }}>St Malo</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/venice/" className="tag-link-87 tag-link-position-13" title="1 topic" style={{ fontSize: '8pt' }}>Venice</a>
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-tag/yosemite/" className="tag-link-83 tag-link-position-14" title="1 topic" style={{ fontSize: '8pt' }}>Yosemite</a></div>
                                </aside><aside id="reviews-2" className="widget tour_reviews"><h3 className="widget-title"><span>Lastest reviewed</span></h3><div className="tours-reviews-widget"><div className="tours-review-item"><a className="review-title" href="http://inwavethemes.com/wordpress/intravel/home/tours/san-francisco-museum-of-modern-art/#comment-92">San Francisco Museum of Modern Art</a> <div className="review-content">Curabitur bibendum nunc non eros porttitor…</div> <ul>
                                    <li><div className="review-rating" /></li>
                                    <li className="light" />
                                    <li><div className="review-author-link"><span>By </span><span className="theme-color">Jone Doe</span></div></li>
                                </ul></div><div className="tours-review-item"><a className="review-title" href="http://inwavethemes.com/wordpress/intravel/home/tours/san-francisco-museum-of-modern-art/#comment-91">San Francisco Museum of Modern Art</a> <div className="review-content">Duis molestie augue in nunc imperdiet,</div> <ul>
                                    <li><div className="review-rating"><div className="iwt-rating">
                                        <div className="iw-star-rating">
                                            <span className="rating" style={{ width: '60%' }} />
                                        </div>
                                    </div></div></li>
                                    <li className="light" />
                                    <li><div className="review-author-link"><span>By </span><span className="theme-color">Jone Doe</span></div></li>
                                </ul></div></div></aside>                  </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingContent;