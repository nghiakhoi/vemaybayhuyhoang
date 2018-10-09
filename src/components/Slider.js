import React, { Component } from 'react';
import moment from 'moment';

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
            setvalue: 0
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
                localStorage.setItem("datedes", moment().add(2, 'days').format("DD-MM-YYYY"));
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
        } else if (localStorage.getItem("dep") === null || localStorage.getItem("dep") === "") {
            alert("Hãy chọn ĐIỂM KHỞI HÀNH!");
        } else if (localStorage.getItem("des") === null || localStorage.getItem("des") === "") {
            alert("Hãy chọn ĐIỂM ĐẾN!");
        } else {
            this.setState({
                isRedirect: true
            });
        }


    }

    componentDidMount() {
        localStorage.setItem("adult", 1);
        localStorage.removeItem("child");
        localStorage.removeItem("inf");
        localStorage.setItem("direction", 0);
        localStorage.removeItem("datedes");
        localStorage.removeItem("dep");
        localStorage.removeItem("des");
        localStorage.removeItem("ticketchoosed");
        localStorage.removeItem("ticketchoosedkhuhoi");
        localStorage.setItem("datedep", moment().format("DD-MM-YYYY"));
    }

    componentWillMount() {
        localStorage.setItem("direction", 0);
    }

    render() {

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
                    <div className="intravel-destination-bgimage" style={{ backgroundImage: 'url(/images/tour_destination_roma.jpg)' }} />
                    <div className="intravel-destination-bgimage2 transparent" />
                    <div className="intravel-destination-search-inner">
                        <div className="iw-logo-home">
                            <a href="/wordpress/intravel/home/">
                                <img src="images/inTravel.png" alt="Logo" />
                            </a>
                        </div>
                        <div className="destination-menu-search-form">
                            <div className="destination-menu-search-form-inner" style={{ height: 290, marginTop: '-145px' }}>
                                <ul>
                                    <li className="destination-menu-item " data-destination-slug="amsterdam" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_amsterdam.jpg">
                                        <span>Amsterdam
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item " data-destination-slug="dubai" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_dubai.jpg">
                                        <span>Dubai
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item " data-destination-slug="france" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_france.jpg">
                                        <span>France
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item " data-destination-slug="italy" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_italy.jpg">
                                        <span>Italy
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item " data-destination-slug="paris" data-destination-backgroundimg="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_roma.jpg">
                                        <span>Hà Nội
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item active" data-destination-slug="rome" data-destination-backgroundimg="http://inwavethemes.com/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_paris.jpg">
                                        <span>Đà Nẵng
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item " data-destination-slug="san-francisco" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_california.jpg">
                                        <span>Thành phố Hồ Chí Minh
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item " data-destination-slug="the_netherlands" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/06/tour_amsterdam_2.jpg">
                                        <span>The Netherlands
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item " data-destination-slug="uae" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_uae.jpg">
                                        <span>UAE
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item " data-destination-slug="usa" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/09/tour_destination_usa.jpg">
                                        <span>USA
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
                                    <li className="destination-menu-item " data-destination-slug="venice" data-destination-backgroundimg="/wordpress/intravel/wp-content/uploads/2016/06/tour_venice_2.jpg">
                                        <span>Venice
                    <span className="caret theme-bg" />
                                        </span>
                                    </li>
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

                                            <select className="form-control js-selected " defaultValue="0" id="dep" name="dep">
                                                <option value="">Điểm khởi hành</option>
                                                <option value="SGN">Hồ Chí Minh(SGN)</option>
                                                <option value="HAN">Hà Nội(HAN)</option>
                                                <option value="DAD">Đà Nẵng(DAD)</option>
                                                <option value="VCL">Chu Lai(VCL)</option>
                                                <option value="CXR">Nha Trang(CXR)</option>
                                                <option value="PQC">Phú Quốc(PQC)</option>
                                                <option value="HUI">Huế(HUI)</option>
                                                <option value="PXU">Pleiku(PXU)</option>
                                                <option value="UIH">Quy Nhơn(UIH)</option>
                                            </select>
                                        </div>
                                        <label htmlFor="des" style={{ "color": "white" }} >Điểm đến</label>
                                        <div className="destination-field">
                                            <select className="form-control js-selected" defaultValue="0" id="des" name="des">
                                                <option value="">Điểm đến</option>
                                                <option value="SGN">Hồ Chí Minh(SGN)</option>
                                                <option value="HAN">Hà Nội(HAN)</option>
                                                <option value="DAD">Đà Nẵng(DAD)</option>
                                                <option value="VCL">Chu Lai(VCL)</option>
                                                <option value="CXR">Nha Trang(CXR)</option>
                                                <option value="PQC">Phú Quốc(PQC)</option>
                                                <option value="HUI">Huế(HUI)</option>
                                                <option value="PXU">Pleiku(PXU)</option>
                                                <option value="UIH">Quy Nhơn(UIH)</option>
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
                                                <input id="datedes" name="datedes" type="text" value="" readOnly placeholder="Ngày về" className="iw-search-arrival has-date-picker" />
                                            </div> :
                                            <div className="iw-departure thelastitem">
                                                <input id="datedes" disabled name="datedes" value="" type="text" readOnly className="iw-search-arrival has-date-picker" />
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
                                                <button onClick={(event) => this.handleClick(event)} className="theme-bg"><i className="ion-paper-airplane" /> Search</button>
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