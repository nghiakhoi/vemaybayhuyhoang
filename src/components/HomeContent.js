import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import domain from '../router/domain';

const getAllTintucKhuyenMai = (limit) =>
    axios.post(domain + '/getalltinkhuyenmai', {
        limit: limit
    }).then((res) => res.data)
const getAllTintuc = (limit) =>
    axios.post(domain + '/getalltintuc', {
        limit: limit
    }).then((res) => res.data)
var limititemcheck = 0;

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: null,
            todostinthuong: null,
            currentPage: 1,
            todosPerPage: 1,
            danhmuctintuc: null,
            limititem: 10,
        };
    }

    componentWillMount() {
        limititemcheck = 0;
        getAllTintucKhuyenMai(6).then((result) => {
            var tempdata = result.data;
            this.setState({
                todos: tempdata
            });
        })
        getAllTintuc(10).then((result) => {
            var tempdata = result.data;
            this.setState({
                todostinthuong: tempdata
            });
        })
    }

    render() {
        const { todos, todostinthuong, currentPage, todosPerPage } = this.state;
        return (
            <div className="contents-main" id="contents-main">
                <article id="post-948" className="post-948 page type-page status-publish hentry">
                    <div className="entry-content">

                        <div className="container">
                            <div className="vc_row wpb_row vc_row-fluid" style={{}}>
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="iw-heading  style4 vc_custom_1473841127609 text-center" style={{ width: '100%' }}>
                                                <h3 className="iwh-title" style={{ color: '#282828', fontSize: 29, fontWeight: 300, lineHeight: 1 }}>Tin khuyến mãi
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1475565997597" style={{}}>
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="row iw-travel-tours style4 style2">
                                                <div id="iw-isotope-travel-5-main" className="isotope">
                                                    {
                                                        todos !== null ? todos.map((value, key) => {
                                                            limititemcheck++
                                                            return (
                                                                <div key={key} className="col-md-4 col-sm-6 col-xs-12 element-item">
                                                                    <div className="iw-tour-item">
                                                                        <div className="image-wrap">
                                                                            <img src={"images/" + value.hinhdaidien} />
                                                                            <div className="booking-action">
                                                                                <a className="link-to-detail theme-bg" href={"/tin-khuyen-mai/" + value.slug + "." + value.id + ".html"}>
                                                                                    Xem thêm </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="info-wrap">
                                                                            <div className="info-left">
                                                                                <h3 className="title">
                                                                                    <a className="theme-color-hover" href={"/tin-khuyen-mai/" + value.slug + "." + value.id + ".html"}>{value.tieude}</a>
                                                                                </h3>
                                                                                <div className="post-meta">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <span className="duration">{value.motangan}</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }) : ""
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-sm-5" style={{ "textAlign": "left" }}>
                                <div className="vc_row wpb_row vc_row-fluid" style={{}}>
                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner ">
                                            <div className="wpb_wrapper">
                                                <div className="iw-heading  style4 vc_custom_1473841127609 text-center" style={{ width: '100%', background: "#36648B left top repeat" }}>
                                                    <h3 className="iwh-title" style={{ "marginBottom": "20px", "marginLeft": "15px", "textAlign": "left", color: 'white', fontSize: 29, fontWeight: 300, lineHeight: 2 }}>
                                                        CÁC HÌNH THỨC MUA VÉ
                                                    </h3>
                                                </div>
                                                <div className="guide-home-website">
                                                    <span className="title">
                                                        Quý khách <b>Mua vé máy bay bằng các hình thức:</b>
                                                    </span>
                                                    <p>
                                                        <span className="title">
                                                            <b><span style={{ color: "red" }}>1.</span> Trực tiếp trên Website Vé Bay 247</b>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="title">
                                                            <b><span style={{ color: "red" }}>2.</span> Gọi điện cho chúng tôi</b>
                                                        </span><br />
                                                        <span className="title">
                                                            <img src="https://vebay247.vn/public/style/img/icon_hotline.png" /><strong> 0901.438.151 - 0866.598.443 - 0911.229.543</strong>
                                                        </span><br /></p>
                                                    <p>
                                                        <span className="title">
                                                            <b><span style={{ color: "red" }}>3.</span> Qua chat</b>
                                                        </span></p>
                                                    <p>
                                                        <span className="list-yahoo">
                                                            <a href="skype:vebay247vn03?chat" >
                                                                <img src="https://vebay247.vn/public/skype.png" />
                                                                Vé Trong Nước - Booker 1
      </a>
                                                            <a href="skype:vebay247vn02?chat" >
                                                                <img src="https://vebay247.vn/public/skype.png" />
                                                                Vé Quốc Tế - Booker 2
      </a>
                                                            <a href="skype:vebay247vn02?chat" >
                                                                <img src="https://vebay247.vn/public/skype.png" />
                                                                Vé Trong Nước - Booker 3
      </a>

                                                            {/*-  <br class="clear"> -*/}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="title">
                                                            <b><span style={{ color: "red" }}>4.</span> Đặt vé máy bay qua email</b>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="list-yahoo">
                                                            <b><strong>- Gửi yêu cầu đến email vemaybayhuyhoang@gmail.com</strong></b>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="title">
                                                            <b><span style={{ color: "red" }}>5.</span> Mua vé máy bay tại phòng vé</b>
                                                        </span></p>
                                                    <p>
                                                        <b><strong> Số 52/20 đường số 4, khu phố 6, P. Hiệp Bình Phước, Q. Thủ Đức, Tp. Hồ Chí Minh</strong></b>
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7" style={{ "marginTop": "30px" }}>
                                <div className="iw-heading  style4 text-center" style={{ width: '100%', background: "#36648B left top repeat" }}>
                                    <h3 className="iwh-title" style={{ "marginBottom": "20px", "marginLeft": "15px", "textAlign": "left", color: 'white', fontSize: 29, fontWeight: 300, lineHeight: 2 }}>
                                        Tin tức nổi bật
                                    </h3>
                                </div>
                                {
                                    todostinthuong !== null ? todostinthuong.map((value, key) => {
                                        limititemcheck++
                                        return (
                                            <div key={key} className="col-md-4 col-sm-6 col-xs-12 element-item">
                                                <div className="iw-tour-item">
                                                    <div className="image-wrap">
                                                        <img src={value.hinhdaidien} />
                                                    </div>
                                                    <div className="info-wrap">
                                                        <div className="info-left">
                                                            <h3 className="title">
                                                                <a className="theme-color-hover" href={"/tin-chi-tiet/" + value.slug + "." + value.id + ".html"}>{value.tieude}</a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }) : ""
                                }
                            </div>
                        </div>
                    </div>
                    {/* .entry-content */}
                    <div className="clearfix" />
                    <footer className="entry-footer ">
                    </footer>
                    {/* .entry-footer */}
                </article>
                {/* #post-## */}
            </div>
        );
    }
}

export default HomeContent;