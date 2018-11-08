import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import jQuery from 'jquery';
import SanBay from './SanBay';

const getAllSanBay = () =>
    axios.post('/getallsanbay', {
    }).then((res) => res.data)

const resortArray = (array, key, value) => {
    var active = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                let temp = array[i];
                array[i] = array[active - i];
                array[active - i] = temp;
                return array;
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                let temp = array[i];
                array[i] = array[active];
                array[active] = temp;
                return array;
            }
        }
    }
    return null;
}

const resortArraydive = (array, key, value) => {

    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            var temp = array[i];
            array[i] = array[0];
            array[0] = temp;
            return array;
        }
    }
    return null;
}

const findObjectByKey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            des: '',
            dep: '',
            datedes: '',
            datedep: '',
            adult: '',
            direction: false,
            setvalue: 0,
            danhsachsanbay: null,
            danhsachsanbaydi: null,
            danhsachsanbayve: null,
            positionimage: null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
            setvalue: this.state.setvalue === 0 ? 1 : 0

        }, function () {
            if (this.state.direction === false) {
                localStorage.removeItem("datedes");
                localStorage.setItem("direction", 0);
            } else {
                localStorage.setItem("direction", 1);
                localStorage.setItem("datedes", "");
            }
        });
        localStorage.setItem(name, this.state.setvalue === 0 ? 1 : 0);

    }

    isChange = (event) => {
        //console.log(event.target.value);
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
        localStorage.setItem(name, value);
    }

    handleClick = (event) => {
        event.preventDefault();
        if ((localStorage.getItem("dep") === null || localStorage.getItem("dep") === "") && (localStorage.getItem("des") === null || localStorage.getItem("des") === "")) {
            alert("Hãy chọn ĐIỂM KHỞI HÀNH và ĐIỂM ĐẾN!");
            return false;
        } else if (localStorage.getItem("dep") === null || localStorage.getItem("dep") === "") {
            alert("Hãy chọn ĐIỂM KHỞI HÀNH!");
            return false;
        } else if (localStorage.getItem("des") === null || localStorage.getItem("des") === "") {
            alert("Hãy chọn ĐIỂM ĐẾN!");
            return false;
        } else {
            if (localStorage.getItem("dep") === localStorage.getItem("des")) {
                alert("ĐIỂM KHỞI HÀNH và ĐIỂM ĐẾN phải khác nhau!");
                return false;
            } else {
                if (localStorage.getItem("direction") === "1") {
                    if (localStorage.getItem("datedes") === "") {
                        alert("Vui lòng chọn ngày khứ hồi!");
                        return false;
                    } else {
                        this.setState({
                            isRedirect: true
                        });
                    }
                } else {
                    this.setState({
                        isRedirect: true
                    });
                }

            }

        }


    }

    componentDidMount() {
        localStorage.setItem("adult", 1);
        localStorage.removeItem("child");
        localStorage.removeItem("inf");
        localStorage.setItem("direction", 0);
        localStorage.removeItem("datedes");
        localStorage.removeItem("ticketchoosed");
        localStorage.removeItem("ticketchoosedkhuhoi");
        localStorage.removeItem("idhoadon");
        localStorage.setItem("datedep", moment().format("DD-MM-YYYY"));
        localStorage.setItem("dep", "SGN");
        localStorage.setItem("des", "HAN");
        (function ($) {
            $.fn.itmenuscroll = function () {
                var self = $(this);
                var total = self.find('li').length;
                var active = Math.round(total / 2);

                var item_height = self.find('li:eq(0)').height();
                var view_height = self.height();
                var active_top = (view_height / 2) - (item_height / 2);
                var search_form_container = $('.destination-menu-search-form .destination-search-form');
                self.find('li.active').animate({
                    'top': '0px'
                }, 80, function () {
                    self.find('li').each(function () {
                        if (!$(this).hasClass('active')) {
                            var index = self.find('li').index($(this));
                            //var top = active_top - ((active - index - 1) * item_height);

                        }
                    });
                });
                self.on('click', 'li', function () {
                    var index = self.find('li').index($(this)) + 1;
                    var count = active - index;
                    if (count < 0) {
                        scrolldown_menu(count);
                    } else if (count > 0) {
                        scollup_menu(count);
                    } else {
                        return;
                    }
                    self.find('li').removeClass('active');
                    $(this).addClass('active');
                    search_form_container.find('.destination-field select').val($(this).data('destination-slug')).trigger("change");
                    localStorage.setItem("des", $(this).data('destination-slug'));
                    var background_image = $(this).data('destination-backgroundimg');
                    if (background_image) {
                        var bgimage = self.closest('.intravel-destination-search').find('.intravel-destination-bgimage');
                        var bgimage2 = self.closest('.intravel-destination-search').find('.intravel-destination-bgimage2');
                        if (!bgimage.hasClass('transparent')) {
                            bgimage2.css({
                                'background-image': 'url(' + background_image + ')'
                            }).removeClass("transparent");
                            bgimage.addClass("transparent");
                        } else {
                            bgimage.css({
                                'background-image': 'url(' + background_image + ')'
                            }).removeClass("transparent");
                            bgimage2.addClass("transparent");
                        }
                    }
                });
                var scrolldown_menu = function (count) {
                    var j = 0;
                    self.find('li').each(function () {
                        //var top = parseInt($(this).css('top')) + (count * item_height);
                        $(this).css({
                            'top': '0px'
                        });
                        j++;
                        if (j == total) {
                            for (var i = 0; i < Math.abs(count); i++) {
                                var top = parseInt(self.find('li:eq(' + (total - 1) + ')').css('top')) + item_height;
                                self.find('li:eq(0)').css({
                                    'top': '0px'
                                }).insertAfter(self.find('li:eq(' + (total - 1) + ')'));
                            }
                        }
                    });
                };
                var scollup_menu = function (count) {
                    var j = 0;
                    self.find('li').each(function () {
                        var top = parseInt($(this).css('top')) + (count * item_height);
                        $(this).css({
                            'top': '0px'
                        });
                        j++;
                        if (j == total) {
                            for (var i = 0; i < Math.abs(count); i++) {
                                var top = parseInt(self.find('li:eq(0)').css('top')) - item_height;
                                self.find('li:eq(' + (total - 1) + ')').css({
                                    'top': '0px'
                                }).insertBefore(self.find('li:eq(0)'));
                            }
                        }
                    });
                }
            };

        })(jQuery);
    }

    componentDidUpdate() {
        (function ($) {

            $(document).ready(function () {
                $('.destination-menu-search-form ul').itmenuscroll();
                var self1 = jQuery('.destination-menu-search-form ul');
                var total1 = jQuery('.destination-menu-search-form ul').find('li').length;
                var active1 = Math.round(total1 / 2);
                jQuery('.destination-menu-search-form ul').find('li:eq(' + (active1 - 1) + ')').addClass('active');

                // jQuery('.destination-menu-search-form ul').find('li').each(function () {
                //     var itemhere = jQuery(this).attr('data-destination-slug');
                //     if (itemhere == localStorage.getItem('des')) {
                //         jQuery(this).addClass('active');
                //     }
                // });
            });
        })(jQuery);
    }

    componentWillMount() {
        localStorage.setItem("direction", 0);
        getAllSanBay().then((result) => {
            var tempdata = result.data;
            var resortarray = resortArray(tempdata, 'code', localStorage.getItem('des'));
            var positionimage = findObjectByKey(tempdata, 'code', localStorage.getItem('des'));
            this.setState({
                danhsachsanbay: resortarray,
                positionimage: positionimage
            });
            return tempdata;
        }).then((result) => {
            var resortarraydi = resortArraydive(result.slice(), 'code', localStorage.getItem('dep'));
            this.setState({
                danhsachsanbaydi: resortarraydi,
            });
            return result;
        }).then((result) => {
            var resortarrayve = resortArraydive(result.slice(), 'code', localStorage.getItem('des'));
            this.setState({
                danhsachsanbayve: resortarrayve,
            });
        });
    }

    printData = () => {
        if (this.state.danhsachsanbay !== null) {
            return this.state.danhsachsanbay.map((value, key) =>
                (
                    value.show === "1" ?
                        <SanBay
                            key={key}
                            code={value.code}
                            name={value.ten}
                            image={value.hinhdaidien}
                        />
                        : ""
                )
            );
        }
    }
    printDataselectdi = () => {
        if (this.state.danhsachsanbaydi !== null) {
            return this.state.danhsachsanbaydi.map((value, key) =>
                (
                    <option key={key} value={value.code}>{value.ten}</option>
                )
            );
        }
    }
    printDataselectve = () => {
        if (this.state.danhsachsanbayve !== null) {
            return this.state.danhsachsanbayve.map((value, key) =>
                (
                    <option key={key} value={value.code}>{value.ten}</option>
                )
            );
        }
    }

    render() {
        var positionimage = this.state.positionimage ? this.state.positionimage.hinhdaidien : "";
        var tongiatri = this.state.danhsachsanbay !== null ? this.state.danhsachsanbay.length : 0;
        var pixelplus = 20;
        for (var i = 3; i <= tongiatri; i++) {
            if (i % 2 !== 0) {
                pixelplus += 40;
            }
        }
        if (this.state.isRedirect) {
            window.location.replace("/booking");
        }
        var maxpersearchadult = Array.apply(null, { length: 10 }).map((k, i) => {
            return <option key={i} value={i + 1}>{i + 1}</option>
        });
        var maxpersearchother = Array.apply(null, { length: 10 }).map((k, i) => {
            return <option key={i} value={i}>{i}</option>
        });
        return (
            <div className="header-search-tour">
                <div className="intravel-destination-search">
                    <div className="intravel-destination-bgimage" style={{ backgroundImage: 'url(/images/' + positionimage + ')' }} />
                    <div className="intravel-destination-bgimage2 transparent" />
                    <div className="intravel-destination-search-inner">
                        <div className="iw-logo-home">
                            <a href="/">
                                <img src="images/inTravel.png" alt="Logo" />
                            </a>
                        </div>
                        <div className="destination-menu-search-form">
                            <div className="destination-menu-search-form-inner" style={{ height: 270, marginTop: '-' + pixelplus + 'px' }}>
                                <ul>

                                    {this.printData()}



                                </ul>
                            </div>
                            <form autoComplete="off" className="destination-search-form" >
                                <span className="icon-click" />
                                <div className="row">


                                    <div className="col-xs-12 col-sm-3 col-md-4">
                                        <legend className="title-search">
                                            1. Hành trình bay
                                        </legend>
                                        <label htmlFor="dep" style={{ "color": "white" }} >Điểm khởi hành</label>
                                        <div className="tour-type-field">

                                            <select className="form-control js-selected " defaultValue="SGN" id="dep" name="dep">

                                                {this.printDataselectdi()}
                                            </select>
                                        </div>
                                        <label htmlFor="des" style={{ "color": "white" }} >Điểm đến</label>
                                        <div className="destination-field">
                                            <select className="form-control js-selected" defaultValue="HAN" id="des" name="des">

                                                {this.printDataselectve()}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-3 col-md-4">
                                        <legend className="title-search">
                                            2. Thời gian bay
                                        </legend>
                                        <label htmlFor="datedep" style={{ "color": "white" }} >Ngày đi</label>
                                        <div className="iw-departure">
                                            <input id="datedep" name="datedep" type="text" readOnly placeholder="Ngày đi" className="iw-search-arrival has-date-picker" />
                                        </div>
                                        <label>
                                            Khứ hồi :
                                        <input
                                                name="direction"
                                                type="checkbox"
                                                value={this.state.setvalue}
                                                checked={this.state.direction}
                                                onChange={this.handleInputChange} />
                                        </label>
                                        <br />
                                        {this.state.direction === true ?
                                            <div className="iw-departure thelastitem">
                                                <input id="datedes" name="datedes" type="text" readOnly placeholder="Ngày về" className="iw-search-arrival has-date-picker" />
                                            </div> :
                                            <div className="iw-departure thelastitem">
                                                <input id="datedes" disabled name="datedes" type="text" readOnly className="iw-search-arrival has-date-picker" />
                                            </div>
                                        }
                                    </div>

                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <legend className="title-search">
                                            3. Số hành khách
                                        </legend>
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <label htmlFor="adult" style={{ "color": "white" }} >Người lớn</label>
                                            <div className="search-field">
                                                <select onChange={(event) => this.isChange(event)} className="form-control " id="adult" name="adult" defaultValue="">
                                                    {maxpersearchadult}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <label htmlFor="children" style={{ "color": "white" }} >Trẻ em</label>
                                            <div className="search-field">
                                                <select onChange={(event) => this.isChange(event)} className="form-control " id="child" name="child" defaultValue="">
                                                    {maxpersearchother}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                            <label htmlFor="baby" style={{ "color": "white" }} >Em bé</label>
                                            <div className="search-field">
                                                <select onChange={(event) => this.isChange(event)} className="form-control " id="inf" name="inf" defaultValue="">
                                                    {maxpersearchother}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="iw-search-now">
                                                <button onClick={(event) => this.handleClick(event)} className="theme-bg"><i className="ion-paper-airplane" /> TÌM CHUYẾN BAY</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Slider;