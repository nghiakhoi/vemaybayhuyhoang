import React, { Component } from 'react';
import BookingItem from './BookingItem';
import axios from 'axios';


const postTicketvn = () =>
    //axios.get('https://vemaybayhuyhoang.herokuapp.com/vj')
    axios.post('/vn', {
        dep: localStorage.getItem("dep"),
        des: localStorage.getItem("des"),
        datedep: localStorage.getItem("datedep"),
        adult: localStorage.getItem("adult"),
    })
        .then((res) => res.data)
const postTicketjs = () =>
    //axios.get('https://vemaybayhuyhoang.herokuapp.com/vj')
    axios.post('/js', {
        dep: localStorage.getItem("dep"),
        des: localStorage.getItem("des"),
        datedep: localStorage.getItem("datedep"),
        adult: localStorage.getItem("adult"),
    })
        .then((res) => res.data)
const postTicketvj = () =>
    //axios.get('https://vemaybayhuyhoang.herokuapp.com/vj')
    axios.post('/vj', {
        dep: localStorage.getItem("dep"),
        des: localStorage.getItem("des"),
        datedep: localStorage.getItem("datedep"),
        adult: localStorage.getItem("adult"),
    })
        .then((res) => res.data)

const postTicketvnWithDate = (date) =>
    //axios.get('https://vemaybayhuyhoang.herokuapp.com/vj')
    axios.post('/vn', {
        dep: localStorage.getItem("dep"),
        des: localStorage.getItem("des"),
        datedep: date,
        adult: localStorage.getItem("adult"),
    })
        .then((res) => res.data)
const postTicketvjWithDate = (date) =>
    //axios.get('https://vemaybayhuyhoang.herokuapp.com/vj')
    axios.post('/vj', {
        dep: localStorage.getItem("dep"),
        des: localStorage.getItem("des"),
        datedep: date,
        adult: localStorage.getItem("adult"),
    })
        .then((res) => res.data)
const postTicketjsWithDate = (date) =>
    //axios.get('https://vemaybayhuyhoang.herokuapp.com/vj')
    axios.post('/js', {
        dep: localStorage.getItem("dep"),
        des: localStorage.getItem("des"),
        datedep: date,
        adult: localStorage.getItem("adult"),
    })
        .then((res) => res.data)

const formatDate = function formatDate(date) {            // function for reusability
    var d = date.getUTCDate().toString(),           // getUTCDate() returns 1 - 31
        m = (date.getUTCMonth() + 1).toString(),    // getUTCMonth() returns 0 - 11
        y = date.getUTCFullYear().toString(),       // getUTCFullYear() returns a 4-digit year
        formatted = '';
    if (d.length === 1) {                           // pad to two digits if needed
        d = '0' + d;
    }
    if (m.length === 1) {                           // pad to two digits if needed
        m = '0' + m;
    }
    formatted = d + '-' + m + '-' + y;              // concatenate for output
    return formatted;
}

const compareTwoDay = (date) => {
    var parts = date.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}
const getTodayddmmyyyy = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '-' + mm + '-' + yyyy;
    return today;
}

class BookingContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
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
            datasmallestprice1: null,
            datasmallestprice2: null,
            datasmallestprice3: null,
            datasmallestprice4: null,
            datasmallestprice5: null,
            datasmallestprice6: null,
        }
    }

    componentWillMount() {
        function sortedByAttr(property) {
            return function (x, y) {

                return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));

            };
        }
        var mangjson = [];
        var mangjson1 = [];
        var mangjson2 = [];
        var mangjson3 = [];
        var mangjson4 = [];
        var mangjson5 = [];
        var mangjson6 = [];
        if (this.state.data === null) {
            postTicketvn().then((kq) => {
                //mangjson.push(kq[0]);
                var tempflyno = "";
                var tempprice = 0;
                var tempdeptime = "";
                var tempdestime = "";
                var tempitem = "";
                var dem = 0;
                var size = kq !== undefined > 0 ? Object.keys(kq[0]).length : 0;

                for (var key1 in kq[0]) {

                    if (tempdeptime == "" && tempdestime == "") {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                    }

                    if (tempflyno == kq[0][key1]['air_code'] && tempdeptime == kq[0][key1]['deptime'] && tempdestime == kq[0][key1]['destime']) {
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
                        datasmallestprice: this.state.data[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)
                    });
                }
            }).catch((err) => {
                this.setState({
                    js: true
                });
            });
            postTicketjs().then((kq) => {
                //mangjson.push(kq[0]);
                var tempflyno = "";
                var tempprice = 0;
                var tempdeptime = "";
                var tempdestime = "";
                var tempitem = "";
                var dem = 0;
                var size = kq !== undefined > 0 ? Object.keys(kq[0]).length : 0;

                for (var key1 in kq[0]) {

                    if (tempdeptime == "" && tempdestime == "") {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                    }

                    if (tempflyno == kq[0][key1]['air_code'] && tempdeptime == kq[0][key1]['deptime'] && tempdestime == kq[0][key1]['destime']) {
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
                        datasmallestprice: this.state.data[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)
                    });
                }
            }).catch((err) => {
                this.setState({
                    js: true
                });
            });
            postTicketvj().then((kq) => {
                //mangjson.push(kq[0]);
                var tempflyno = "";
                var tempprice = 0;
                var tempdeptime = "";
                var tempdestime = "";
                var tempitem = "";
                var dem = 0;
                var size = kq !== undefined > 0 ? Object.keys(kq[0]).length : 0;

                for (var key1 in kq[0]) {

                    if (tempdeptime == "" && tempdestime == "") {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                    }

                    if (tempflyno == kq[0][key1]['air_code'] && tempdeptime == kq[0][key1]['deptime'] && tempdestime == kq[0][key1]['destime']) {
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
                        datasmallestprice: this.state.data[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)
                    });
                }
            }).catch((err) => {
                this.setState({
                    js: true
                });
            });


            // get data from other day
            var daychoose = localStorage.getItem('datedep');
            var mang7ngay = [];
            for (var i = 1; i <= 7; i++) {
                var newdate = new Date(daychoose.split("-").reverse().join("-"));
                var newdateplus1 = newdate.setDate(newdate.getDate() - 4 + i);
                var testdate = new Date(newdateplus1);
                var formattedDate = formatDate(testdate);
                if (formattedDate != daychoose) {
                    mang7ngay.push(formattedDate);
                }
            }

            //VÉ RẺ VỊ TRÍ 1
            postTicketvjWithDate(mang7ngay[0]).then((kq) => {
                //mangjson.push(kq[0]);
                var tempflyno = "";
                var tempprice = 0;
                var tempdeptime = "";
                var tempdestime = "";
                var tempitem = "";
                var dem = 0;
                var size = kq !== undefined > 0 ? Object.keys(kq[0]).length : 0;

                for (var key1 in kq[0]) {

                    if (tempdeptime == "" && tempdestime == "") {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                    }

                    if (tempflyno == kq[0][key1]['air_code'] && tempdeptime == kq[0][key1]['deptime'] && tempdestime == kq[0][key1]['destime']) {
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
                        mangjson1.push(tempitem);
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }
                    if (dem === size) {
                        mangjson1.push(tempitem);
                    }

                }
                this.setState({
                    data1: mangjson1.sort(sortedByAttr('baseprice')),
                    vj1: true
                });
            }).then((res) => {
                if (this.state.js1 === true || this.state.vj1 === true || this.state.vn1 === true) {
                    this.setState({
                        data1: this.state.data1.sort(sortedByAttr('baseprice')),
                        datasmallestprice1: this.state.data1[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)
                    });
                }
            }).catch((err) => {
                this.setState({
                    vj1: true
                });
            });
            postTicketvnWithDate(mang7ngay[0]).then((kq) => {
                //mangjson.push(kq[0]);
                var tempflyno = "";
                var tempprice = 0;
                var tempdeptime = "";
                var tempdestime = "";
                var tempitem = "";
                var dem = 0;
                var size = kq !== undefined > 0 ? Object.keys(kq[0]).length : 0;

                for (var key1 in kq[0]) {

                    if (tempdeptime == "" && tempdestime == "") {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                    }

                    if (tempflyno == kq[0][key1]['air_code'] && tempdeptime == kq[0][key1]['deptime'] && tempdestime == kq[0][key1]['destime']) {
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
                        mangjson1.push(tempitem);
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }
                    if (dem === size) {
                        mangjson1.push(tempitem);
                    }

                }
                this.setState({
                    data1: mangjson1.sort(sortedByAttr('baseprice')),
                    vn1: true
                });
            }).then((res) => {
                if (this.state.js1 === true || this.state.vj1 === true || this.state.vn1 === true) {
                    this.setState({
                        data1: this.state.data1.sort(sortedByAttr('baseprice')),
                        datasmallestprice1: this.state.data1[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)
                    });
                }
            }).catch((err) => {
                this.setState({
                    vn1: true
                });
            });
            postTicketjsWithDate(mang7ngay[0]).then((kq) => {
                var tempflyno = "";
                var tempprice = 0;
                var tempdeptime = "";
                var tempdestime = "";
                var tempitem = "";
                var dem = 0;
                var size = kq !== undefined > 0 ? Object.keys(kq[0]).length : 0;

                for (var key1 in kq[0]) {

                    if (tempdeptime == "" && tempdestime == "") {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                    }

                    if (tempflyno == kq[0][key1]['air_code'] && tempdeptime == kq[0][key1]['deptime'] && tempdestime == kq[0][key1]['destime']) {
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
                        mangjson1.push(tempitem);
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }
                    if (dem === size) {
                        mangjson1.push(tempitem);
                    }
                }
                this.setState({
                    data1: mangjson1.sort(sortedByAttr('baseprice')),
                    js1: true
                });
            }).then((res) => {
                if (this.state.js1 === true || this.state.vj1 === true || this.state.vn1 === true) {
                    this.setState({
                        data1: this.state.data1.sort(sortedByAttr('baseprice')),
                        datasmallestprice1: this.state.data1[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)
                    });
                }
            }).catch((err) => {
                this.setState({
                    js1: true
                });
            });

            //VÉ RẺ VỊ TRÍ 2
            postTicketvjWithDate(mang7ngay[1]).then((kq) => {
                //mangjson.push(kq[0]);
                var tempflyno = "";
                var tempprice = 0;
                var tempdeptime = "";
                var tempdestime = "";
                var tempitem = "";
                var dem = 0;
                var size = kq !== undefined > 0 ? Object.keys(kq[0]).length : 0;

                for (var key1 in kq[0]) {

                    if (tempdeptime == "" && tempdestime == "") {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                    }

                    if (tempflyno == kq[0][key1]['air_code'] && tempdeptime == kq[0][key1]['deptime'] && tempdestime == kq[0][key1]['destime']) {
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
                        mangjson2.push(tempitem);
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }
                    if (dem === size) {
                        mangjson2.push(tempitem);
                    }

                }
                this.setState({
                    data2: mangjson2.sort(sortedByAttr('baseprice')),
                    vj2: true
                });
            }).then((res) => {
                if (this.state.js2 === true || this.state.vj2 === true || this.state.vn2 === true) {
                    this.setState({
                        data2: this.state.data2.sort(sortedByAttr('baseprice')),
                        datasmallestprice2: this.state.data2[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)
                    });
                }
            }).catch((err) => {
                this.setState({
                    vj2: true
                });
            });
            postTicketvnWithDate(mang7ngay[1]).then((kq) => {
                //mangjson.push(kq[0]);
                var tempflyno = "";
                var tempprice = 0;
                var tempdeptime = "";
                var tempdestime = "";
                var tempitem = "";
                var dem = 0;
                var size = kq !== undefined > 0 ? Object.keys(kq[0]).length : 0;

                for (var key1 in kq[0]) {

                    if (tempdeptime == "" && tempdestime == "") {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                    }

                    if (tempflyno == kq[0][key1]['air_code'] && tempdeptime == kq[0][key1]['deptime'] && tempdestime == kq[0][key1]['destime']) {
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
                        mangjson2.push(tempitem);
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }
                    if (dem === size) {
                        mangjson2.push(tempitem);
                    }

                }
                this.setState({
                    data2: mangjson2.sort(sortedByAttr('baseprice')),
                    vn2: true
                });
            }).then((res) => {
                if (this.state.js2 === true || this.state.vj2 === true || this.state.vn2 === true) {
                    this.setState({
                        data2: this.state.data2.sort(sortedByAttr('baseprice')),
                        datasmallestprice2: this.state.data2[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)
                    });
                }
            }).catch((err) => {
                this.setState({
                    vn2: true
                });
            });
            postTicketjsWithDate(mang7ngay[1]).then((kq) => {
                var tempflyno = "";
                var tempprice = 0;
                var tempdeptime = "";
                var tempdestime = "";
                var tempitem = "";
                var dem = 0;
                var size = kq !== undefined > 0 ? Object.keys(kq[0]).length : 0;

                for (var key1 in kq[0]) {

                    if (tempdeptime == "" && tempdestime == "") {
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                    }

                    if (tempflyno == kq[0][key1]['air_code'] && tempdeptime == kq[0][key1]['deptime'] && tempdestime == kq[0][key1]['destime']) {
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
                        mangjson2.push(tempitem);
                        tempflyno = kq[0][key1]['air_code'];
                        tempprice = kq[0][key1]['baseprice'];
                        tempdeptime = kq[0][key1]['deptime'];
                        tempdestime = kq[0][key1]['destime'];
                        tempitem = kq[0][key1];
                        dem++;
                    }
                    if (dem === size) {
                        mangjson2.push(tempitem);
                    }
                }
                this.setState({
                    data2: mangjson2.sort(sortedByAttr('baseprice')),
                    js2: true
                });
            }).then((res) => {
                if (this.state.js2 === true || this.state.vj2 === true || this.state.vn2 === true) {
                    this.setState({
                        data2: this.state.data2.sort(sortedByAttr('baseprice')),
                        datasmallestprice2: this.state.data2[0].baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)
                    });
                }
            }).catch((err) => {
                this.setState({
                    js2: true
                });
            });

            


        }

    }

    handleClick = (event) => {
        var parts = event.target.value.split(" ");
        localStorage.setItem("datedep", parts[0]);
        window.location.reload();
    }

    printData = () => {
        if (this.state.data !== null) {
            //console.log(this.state.data);

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
                        datefull={value.datefull}
                    />
                )
            );
        }
    }

    render() {

        var daychoosed = localStorage.getItem('datedep');
        var mang7ngay = [];
        for (var i = 1; i <= 7; i++) {
            var newdate = new Date(daychoosed.split("-").reverse().join("-"));
            var newdateplus1 = newdate.setDate(newdate.getDate() - 4 + i);
            var testdate = new Date(newdateplus1);
            var formattedDate = formatDate(testdate);
            mang7ngay.push(formattedDate);
        }
        var demvitri=0;
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
                                                        if (compareTwoDay(i).getTime() == compareTwoDay(daychoosed).getTime()) {
                                                            demvitri++;
                                                            return (
                                                                <div  key={k} className=" col-md-1-chia7" >
                                                                    <input type="button" onClick={(event) => { this.handleClick(event) }} style={{ "padding": "6px 12px" }} className="btn btn-block btn-primary newlinebtn" value={daychoosed + " " + this.state.datasmallestprice + " VND"} />
                                                                </div>
                                                            )
                                                        } else {
                                                            if(demvitri == 0){
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <input onClick={(event) => { this.handleClick(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={i + " " + this.state.datasmallestprice1 + " VNDs"} />
                                                                    </div>
                                                                )
                                                            }
                                                            if(demvitri == 1){
                                                                demvitri++;
                                                                return (
                                                                    <div key={k} className=" col-md-1-chia7" >
                                                                        <input onClick={(event) => { this.handleClick(event) }} type="button" style={{ "padding": "6px 12px" }} className="btn btn-block btn-info newlinebtn" value={i + " " + this.state.datasmallestprice2 + " VNDs"} />
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
                                    {this.printData()}


                                </div>
                                <div className="page-nav">
                                    <span className="page-numbers current">1</span>
                                    <a className="page-numbers" href="http://inwavethemes.com/wordpress/intravel/home/tours/page/2/?layout=list">2</a>
                                    <a className="next page-numbers" href="http://inwavethemes.com/wordpress/intravel/home/tours/page/2/?layout=list"><i className="fa fa-angle-right" /></a>                        <div style={{ clear: 'both' }} />
                                </div>
                            </div>
                            <div className="col-sm-12 col-xs-12 col-lg-3 col-md-4 tour-sidebar">
                                <aside id="it-search-form-14" className="widget widget_tour_search_form"><h3 className="widget-title"><span>FIND YOUR TOURS</span></h3>        <div className="tour-search-form-wrap">
                                    <form action="http://inwavethemes.com/wordpress/intravel/wp-admin/admin-ajax.php?action=intravel_search_tour" method="post">
                                        <div className="form-group search-tour"><i className="icon ion-android-search" /><input type="text" name="s" placeholder="Enter your keywords" defaultValue className="form-control" /></div><div className="form-group search-tour"><i className="icon ion-calendar" /><input type="text" name="start_date" placeholder="Tour start date" defaultValue className="form-control has-date-picker hasDatepicker" id="dp1533210709284" /></div><div className="form-group"><select name="tour_type" className="form-control tour-select-search select2-hidden-accessible" tabIndex={-1} aria-hidden="true"><option value>All types</option><option value="adventure-travel">Adventure Travel</option><option value="beaches-islands">Beaches &amp; Islands</option><option value="family-tours">Family Tours</option><option value="history-culture">History &amp; Culture</option><option value="nature">Nature &amp; wildlife</option><option value="sightseeing-tours">Sightseeing tours</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: 248 }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-tour_type-zx-container"><span className="select2-selection__rendered" id="select2-tour_type-zx-container" title="All types">All types</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span></div><div className="form-group"><select name="destination" className="form-control tour-select-search select2-hidden-accessible" tabIndex={-1} aria-hidden="true"><option value>All destinations</option><option value="amsterdam">Amsterdam</option><option value="dubai">Dubai</option><option value="france">France</option><option value="italy">Italy</option><option value="new-york">New York</option><option value="paris">Paris</option><option value="rome">Rome</option><option value="san-francisco">San Francisco</option><option value="the_netherlands">The Netherlands</option><option value="uae">UAE</option><option value="usa">USA</option><option value="venice">Venice</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: 248 }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-destination-jg-container"><span className="select2-selection__rendered" id="select2-destination-jg-container" title="All destinations">All destinations</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span></div>                                        <div className="form-group">
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
                                    <a href="http://inwavethemes.com/wordpress/intravel/home/tour-type/sightseeing-tours/" className="tag-link-62 tag-link-position-5" title="9 topics" style={{ fontSize: '22pt' }}>Sightseeing tours</a></div></aside><aside id="destinations-2" className="widget tour_destinations"><h3 className="widget-title"><span>Popular destinations</span></h3><div className="destination-widget"><div className="destination-item iw-effect-1"><img src="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_usa-270x300.jpg" /><div className="destination-info" style={{ bottom: 76 }}><div className="info-active"><h4>USA</h4><div className="destination-widget-rating">
                                        <div className="iw-star-rating">
                                            <span className="rating" style={{ width: '99%' }} />
                                        </div>
                                        <div className="clearfix" />
                                    </div></div><div className="destination-to-detail"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/usa/">Discover <i className="icon ion-arrow-right-c" /></a></div></div></div><div className="destination-item iw-effect-1"><img src="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_california-270x300.jpg" /><div className="destination-info" style={{ bottom: 111 }}><div className="info-active"><h4>San Francisco</h4><div className="destination-parent"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/usa/">USA</a></div><div className="destination-widget-rating">
                                        <div className="iw-star-rating">
                                            <span className="rating" style={{ width: '75%' }} />
                                        </div>
                                        <div className="clearfix" />
                                    </div></div><div className="destination-to-detail"><a href="http://inwavethemes.com/wordpress/intravel/home/destination/san-francisco/">Discover <i className="icon ion-arrow-right-c" /></a></div></div></div><div className="clearfix" /></div></aside><aside id="intravel_tours-2" className="widget widget_intravel_tours"><h3 className="widget-title"><span>Most reviewed tours</span></h3>        <div className="iw-travel-tours-widget">
                                        <div className="iw-tour-item iw-effect-img">
                                            <div className="tour-thumnail effect-1">
                                                <img src="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_roma-600x600.jpg" />
                                            </div>
                                            <div className="tour-info">
                                                <h3 className="title"><a className="theme-color" href="http://inwavethemes.com/wordpress/intravel/home/tours/rome-city-sightseeing-tours-bike-tour/">Rome City Sightseeing Tours Bike Tour</a></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-map-marker"> </i>
                                                            <a href="http://inwavethemes.com/wordpress/intravel/home/destination/italy/" className="destination">Italy</a> / <a href="http://inwavethemes.com/wordpress/intravel/home/destination/rome/" className="destination">Rome</a>                                  </li>
                                                        <li>
                                                            <span className="duration"><i className="fa fa-clock-o" aria-hidden="true" /> 01 day</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div style={{ clear: 'both' }} />
                                        </div>
                                        <div className="iw-tour-item iw-effect-img">
                                            <div className="tour-thumnail effect-1">
                                                <img src="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_san_francisco_3-1-600x600.jpg" />
                                            </div>
                                            <div className="tour-info">
                                                <h3 className="title"><a className="theme-color" href="http://inwavethemes.com/wordpress/intravel/home/tours/san-francisco-museum-of-modern-art/">San Francisco Museum of Modern Art</a></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-map-marker"> </i>
                                                            <a href="http://inwavethemes.com/wordpress/intravel/home/destination/san-francisco/" className="destination">San Francisco</a> / <a href="http://inwavethemes.com/wordpress/intravel/home/destination/usa/" className="destination">USA</a>                                  </li>
                                                        <li>
                                                            <span className="duration"><i className="fa fa-clock-o" aria-hidden="true" /> 01 day</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div style={{ clear: 'both' }} />
                                        </div>
                                        <div className="iw-tour-item iw-effect-img">
                                            <div className="tour-thumnail effect-1">
                                                <img src="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/06/tour_venice_1-600x600.jpg" />
                                            </div>
                                            <div className="tour-info">
                                                <h3 className="title"><a className="theme-color" href="http://inwavethemes.com/wordpress/intravel/home/tours/5-night-the-magic-of-venice-tour/">5 days 4 Nights The Magic of Venice Tour</a></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-map-marker"> </i>
                                                            <a href="http://inwavethemes.com/wordpress/intravel/home/destination/italy/" className="destination">Italy</a> / <a href="http://inwavethemes.com/wordpress/intravel/home/destination/venice/" className="destination">Venice</a>                                  </li>
                                                        <li>
                                                            <span className="duration"><i className="fa fa-clock-o" aria-hidden="true" /> 5 days - 4 nights</span>
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